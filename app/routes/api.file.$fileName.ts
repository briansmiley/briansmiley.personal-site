import { LoaderFunctionArgs } from "@remix-run/node"
import { z } from "zod"

const B2_APPLICATION_KEY_ID = process.env.B2_APPLICATION_KEY_ID
const B2_APPLICATION_KEY = process.env.B2_APPLICATION_KEY
const B2_BUCKET_NAME = process.env.B2_BUCKET_NAME
const DEBUG = process.env.NODE_ENV === "development"

const B2ApiResponse = z.object({
  authorizationToken: z.string(),
  apiInfo: z.object({
    storageApi: z.object({
      downloadUrl: z.string().url(),
      apiUrl: z.string().url(),
    }),
  }),
})

async function getB2Credentials() {
  //   console.log("Attempting B2 auth...")
  const authString = Buffer.from(
    `${B2_APPLICATION_KEY_ID}:${B2_APPLICATION_KEY}`
  ).toString("base64")

  const response = await fetch(
    "https://api.backblazeb2.com/b2api/v3/b2_authorize_account",
    {
      headers: {
        Authorization: `Basic ${authString}`,
      },
    }
  )

  if (!response.ok) {
    console.error("B2 auth failed:", response.status, response.statusText)
    throw new Error("Failed to authenticate with B2")
  }

  const data = await response.json()

  //   console.log("Got B2 response:", {
  //     accountId: data.accountId,
  //     capabilities: data.apiInfo?.storageApi?.capabilities,
  //     bucketName: data.apiInfo?.storageApi?.bucketName,
  //     downloadUrl: data.apiInfo?.storageApi?.downloadUrl,
  //   })

  return B2ApiResponse.parse(data)
}

const LoaderParams = z.object({
  fileName: z.string().min(1, "File name is required"),
})

function getContentType(fileName: string) {
  const ext = fileName.split(".").pop()?.toLowerCase()
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg"
    case "png":
      return "image/png"
    case "mp3":
      return "audio/mpeg"
    default:
      return "application/octet-stream"
  }
}

function formatSize(bytes: string | null): string {
  if (!bytes) return "unknown size"
  const mebibytes = Math.round(parseInt(bytes) / (1024 * 1024))
  return `${mebibytes} MiB`
}

function parseRange(range: string | null) {
  if (!range) return null
  const [start, end] = range.replace("bytes=", "").split("-").map(Number)
  const chunkSize = end ? end - start + 1 : null
  return { start, end, chunkSize }
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  try {
    const userAgent = request.headers.get("user-agent") || "unknown"
    const range = request.headers.get("range")
    const rangeDetails = parseRange(range)
    const isStreamingRequest = !!range

    console.log("\n=== File Request ===", {
      timestamp: new Date().toISOString(),
      file: params.fileName,
      userAgent: userAgent.slice(0, 50),
      isStreaming: isStreamingRequest,
      range: rangeDetails
        ? `${rangeDetails.start}-${rangeDetails.end}`
        : "full file",
      ip: request.headers.get("x-forwarded-for") || "unknown",
    })

    const { fileName } = LoaderParams.parse(params)
    const credentials = await getB2Credentials()
    const fileUrl = `${credentials.apiInfo.storageApi.downloadUrl}/file/${B2_BUCKET_NAME}/${fileName}`

    const response = await fetch(fileUrl, {
      headers: {
        ...Object.fromEntries(request.headers),
        Authorization: credentials.authorizationToken,
      },
    })

    if (response.ok) {
      console.log("Transfer started from B2:", {
        file: fileName,
        totalSize: formatSize(response.headers.get("content-length")),
        chunkSize: rangeDetails
          ? formatSize(String(rangeDetails.chunkSize))
          : "N/A",
        type: isStreamingRequest ? "streaming" : "full download",
        range: rangeDetails
          ? `${rangeDetails.start}-${rangeDetails.end}`
          : "full file",
        userAgent: userAgent.slice(0, 50),
      })
    }

    if (!response.ok) {
      const errorBody = await response.text() // Get the error message
      console.error("B2 Error:", {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers),
        url: fileUrl,
        errorBody, // Log the actual error message
      })
      throw new Error(
        `B2 responded with ${response.status}: ${response.statusText} - ${errorBody}`
      )
    }

    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    })
  } catch (error) {
    console.error("Error in file loader:", error)
    return new Response(
      `Error loading file: ${error instanceof Error ? error.message : "Unknown error"}`,
      { status: 500 }
    )
  }
}
