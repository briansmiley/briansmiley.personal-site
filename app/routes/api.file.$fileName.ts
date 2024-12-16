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
  console.log("Attempting B2 auth...")
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
  console.log("Got B2 response:", JSON.stringify(data, null, 2))

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

export async function loader({ request, params }: LoaderFunctionArgs) {
  try {
    if (DEBUG) {
      console.log("\n=== New Request ===")
      console.log("Environment variables:", {
        hasKeyId: !!B2_APPLICATION_KEY_ID,
        keyIdPrefix: B2_APPLICATION_KEY_ID?.slice(0, 4),
        hasKey: !!B2_APPLICATION_KEY,
        keyPrefix: B2_APPLICATION_KEY?.slice(0, 4),
        bucketName: B2_BUCKET_NAME,
      })
    }

    const { fileName } = LoaderParams.parse(params)

    // Get B2 credentials with more logging
    const credentials = await getB2Credentials()
    const fileUrl = `${credentials.apiInfo.storageApi.downloadUrl}/file/${B2_BUCKET_NAME}/${fileName}`

    if (DEBUG) {
      console.log("Request details:", {
        fileUrl,
        fileName,
        headers: Object.fromEntries(request.headers),
      })
    }

    // Forward the request to B2
    const response = await fetch(fileUrl, {
      headers: {
        ...Object.fromEntries(request.headers),
        Authorization: credentials.authorizationToken,
      },
    })

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
