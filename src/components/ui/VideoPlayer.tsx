import { useEffect, useRef } from 'react'

type VideoPlayerProps = {
  src: string
  poster?: string
  autoPlay?: boolean
}

export function VideoPlayer({ src, poster, autoPlay = true }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !autoPlay) return

    void video.play().catch(() => {
      // Autoplay may be blocked; user can press play manually.
    })
  }, [src, autoPlay])

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      className="h-full w-full rounded-lg bg-black object-contain"
    />
  )
}
