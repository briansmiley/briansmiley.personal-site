"use client"

import { useState } from "react"
import { LuLink, LuCheck } from "react-icons/lu"
import SpotifyIFrame from "~/components/SpotifyIFrame"

export default function PlaylistHeader({
  slug,
  name,
  spotifyPlaylistId,
  trackCount,
}: {
  slug: string
  name: string
  spotifyPlaylistId: string
  trackCount: number
}) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center gap-2">
        <h1 className="text-2xl font-bold">{name}</h1>
        <button
          onClick={() => {
            const url = `${window.location.origin}/soundwaves/${slug}`
            navigator.clipboard.writeText(url)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          }}
          title="Copy link"
        >
          <span className="sr-only">Copy link</span>
          {copied ? (
            <LuCheck className="h-5 w-5 text-green-500" />
          ) : (
            <LuLink className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          )}
        </button>
      </div>
      <SpotifyIFrame
        spotifyPlaylistId={spotifyPlaylistId}
        trackCount={trackCount}
      />
    </div>
  )
}
