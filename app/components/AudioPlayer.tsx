import { useState, useRef, useEffect } from "react"
import { Play, Pause, Download, Music } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import SpotifyIFrame from "./SpotifyIFrame"

interface AudioPlayerProps {
  fileName: string
  title: string
  imageUrl?: string
  spotifyPlaylistId?: string
  allowDownload?: boolean
}

export default function AudioPlayer({
  fileName,
  title,
  imageUrl,
  spotifyPlaylistId,
  allowDownload = false,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [seekTime, setSeekTime] = useState(0)
  const [isSeeking, setIsSeeking] = useState(false)
  const [showSpotify, setShowSpotify] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    console.log("Audio source:", audio.src)

    const updateTime = () => {
      if (!isSeeking) {
        setCurrentTime(audio.currentTime)
      }
    }

    const updateDuration = () => setDuration(audio.duration)
    const handleError = (e: ErrorEvent) => {
      console.error("Audio error:", e)
      setHasError(true)
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("error", handleError)
    }
  }, [isSeeking])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleSeekStart = () => {
    setIsSeeking(true)
  }

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    setSeekTime(time)
  }

  const handleSeekEnd = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime
      setCurrentTime(seekTime)
    }
    setIsSeeking(false)
  }

  return (
    <div className="w-full max-w-2xl">
      <div
        className={`relative w-full rounded-lg border bg-background p-4 ${hasError ? "opacity-50" : ""}`}
      >
        {allowDownload && !hasError && (
          <a
            href={`/api/file/${encodeURIComponent(fileName)}`}
            download={fileName}
            className="absolute right-1 top-1 flex h-fit w-fit"
            title="Download audio"
          >
            <span className="sr-only">Download</span>
            <Download className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
        )}
        {spotifyPlaylistId && (
          <button
            className="absolute bottom-1 right-1 flex h-fit w-fit"
            onClick={() => setShowSpotify(!showSpotify)}
            style={{ opacity: 1 }}
          >
            <span className="sr-only">Spotify</span>
            <FontAwesomeIcon
              icon={faSpotify}
              className="h-5 w-5 text-green-600 text-opacity-70 hover:text-opacity-100"
            />
          </button>
        )}
        <div className="flex items-center gap-4">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              width={100}
              height={100}
              className="h-[100px] w-[100px] rounded-lg object-cover"
              style={{ opacity: 1 }}
            />
          )}

          <div className="flex-1">
            <div className="flex items-center gap-1">
              <button
                onClick={togglePlay}
                className={`rounded-full p-1 ${hasError ? "" : "hover:bg-muted"}`}
                disabled={hasError}
              >
                {isPlaying ? (
                  <>
                    <span className="sr-only">Pause</span>
                    <Pause className="h-6 w-6" />
                  </>
                ) : (
                  <>
                    <span className="sr-only">Play</span>
                    <Play className="h-6 w-6" />
                  </>
                )}
              </button>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>

            <audio
              ref={audioRef}
              src={`/api/file/${encodeURIComponent(fileName)}`}
              preload="metadata"
            />

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="range"
                  min={0}
                  max={duration}
                  value={isSeeking ? seekTime : currentTime}
                  onMouseDown={handleSeekStart}
                  onChange={handleSeekChange}
                  onMouseUp={handleSeekEnd}
                  onTouchStart={handleSeekStart}
                  onTouchEnd={handleSeekEnd}
                  className="w-full"
                  disabled={hasError}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatTime(isSeeking ? seekTime : currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`max-w-screen w-full overflow-hidden bg-inherit transition-all duration-300 ease-in-out ${
          showSpotify ? "opacity-100" : "h-0 opacity-0"
        }`}
      >
        {spotifyPlaylistId && (
          <SpotifyIFrame spotifyPlaylistId={spotifyPlaylistId} />
        )}
      </div>
    </div>
  )
}
