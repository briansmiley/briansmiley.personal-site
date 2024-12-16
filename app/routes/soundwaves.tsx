import AudioPlayer from "~/components/AudioPlayer"

export default function AudioTestPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-2xl font-bold">Audio Player Test</h1>

      <div className="space-y-8">
        <AudioPlayer
          imageUrl="/api/file/ssw-explorations.png"
          fileName="ssw-explorations.mp3"
          title="SSW Explorations"
          allowDownload
        />
        <AudioPlayer
          imageUrl="/api/file/ssw-gooj.png"
          fileName="ssw-gooj.mp3"
          title="SSW Gooj"
          allowDownload
        />
      </div>
    </div>
  )
}
