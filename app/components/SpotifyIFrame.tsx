export default function SpotifyIFrame({
  spotifyPlaylistId,
  height = "380",
}: {
  spotifyPlaylistId: string
  height?: string
}) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}`}
      width="100%"
      height={height}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )
}
