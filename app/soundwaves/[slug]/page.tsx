import Link from "next/link"
import { notFound } from "next/navigation"
import AudioPlayer from "~/components/AudioPlayer"
import { mixes, playlists } from "~/data/soundwaves"
import PlaylistHeader from "./PlaylistHeader"

export function generateStaticParams() {
  return [...mixes, ...playlists].map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item =
    mixes.find((m) => m.slug === slug) ?? playlists.find((p) => p.slug === slug)
  if (!item) return {}
  const name = "title" in item ? item.title : item.name
  return { title: `${name} | Sepulchral Soundwaves` }
}

export default async function SoundwaveSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const mix = mixes.find((m) => m.slug === slug)
  const playlist = !mix ? playlists.find((p) => p.slug === slug) : undefined

  if (!mix && !playlist) {
    notFound()
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-3 pb-8">
      <Link
        href="/soundwaves"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; All Mixes
      </Link>
      {mix && (
        <AudioPlayer
          slug={mix.slug}
          imageUrl={mix.imageUrl}
          fileName={mix.fileName}
          title={mix.title}
          spotifyPlaylistId={mix.spotifyPlaylistId}
          allowDownload
          defaultShowSpotify
        />
      )}
      {playlist && (
        <PlaylistHeader
          slug={playlist.slug}
          name={playlist.name}
          spotifyPlaylistId={playlist.spotifyPlaylistId}
          trackCount={playlist.trackCount}
        />
      )}
    </div>
  )
}
