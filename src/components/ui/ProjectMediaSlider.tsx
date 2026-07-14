import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import {
  getYouTubeEmbedUrl,
  getYouTubeId,
  getYouTubeThumbnail,
} from '@/lib/youtube'

type ProjectMediaSliderProps = {
  title: string
  cover: string
  screenshots: string[]
  demoVideo?: string
}

type Slide =
  | { type: 'image'; src: string }
  | { type: 'youtube'; src: string; videoId: string }
  | { type: 'video'; src: string }

function buildSlides(screenshots: string[], demoVideo?: string): Slide[] {
  const slides: Slide[] = []

  if (demoVideo) {
    const videoId = getYouTubeId(demoVideo)
    if (videoId) {
      slides.push({ type: 'youtube', src: demoVideo, videoId })
    } else {
      slides.push({ type: 'video', src: demoVideo })
    }
  }

  for (const src of screenshots) {
    slides.push({ type: 'image', src })
  }

  return slides
}

function PlayOverlay({ label }: { label: string }) {
  return (
    <span className="absolute inset-0 flex items-center justify-center bg-black/20">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background">
        <Play className="h-4 w-4 fill-current" strokeWidth={0} />
      </span>
      <span className="sr-only">{label}</span>
    </span>
  )
}

type YouTubePosterProps = {
  videoId: string
  cover: string
  title: string
  onPlay: () => void
}

function YouTubePoster({ videoId, cover, title, onPlay }: YouTubePosterProps) {
  const [thumbnail, setThumbnail] = useState(() => getYouTubeThumbnail(videoId))

  return (
    <button
      type="button"
      onClick={onPlay}
      className="relative h-full w-full"
      aria-label={`Play ${title} demo`}
    >
      <img
        src={thumbnail}
        alt=""
        className="h-full w-full object-cover"
        onError={() => {
          setThumbnail((current) => {
            const hq = getYouTubeThumbnail(videoId, 'hq')
            if (current !== hq) return hq
            if (current !== cover) return cover
            return current
          })
        }}
      />
      <PlayOverlay label={`Play ${title} demo`} />
    </button>
  )
}

export function ProjectMediaSlider({
  title,
  cover,
  screenshots,
  demoVideo,
}: ProjectMediaSliderProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const slides = buildSlides(screenshots, demoVideo)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const slideWidth = track.clientWidth
      if (!slideWidth) return
      const next = Math.round(track.scrollLeft / slideWidth)
      setIndex(next)
      setPlayingIndex((current) => (current !== null && current !== next ? null : current))
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [slides.length])

  if (slides.length === 0) return null

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(next, slides.length - 1))
    setIndex(clamped)
    setPlayingIndex(null)
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' })
  }

  const playSlide = (slideIndex: number) => {
    setIndex(slideIndex)
    setPlayingIndex(slideIndex)
    requestAnimationFrame(() => {
      void videoRef.current?.play()
    })
  }

  return (
    <div className="media-slider">
      <div ref={trackRef} className="media-slider-track">
        {slides.map((slide, i) => (
          <div key={`${slide.type}-${slide.src}-${i}`} className="media-slider-slide">
            {slide.type === 'youtube' ? (
              playingIndex === i ? (
                <iframe
                  src={getYouTubeEmbedUrl(slide.videoId, true)}
                  title={`${title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : (
                <YouTubePoster
                  videoId={slide.videoId}
                  cover={cover}
                  title={title}
                  onPlay={() => playSlide(i)}
                />
              )
            ) : slide.type === 'video' ? (
              playingIndex === i ? (
                <video
                  ref={videoRef}
                  src={slide.src}
                  poster={cover}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => playSlide(i)}
                  className="relative h-full w-full"
                  aria-label={`Play ${title} demo`}
                >
                  <img
                    src={cover}
                    alt=""
                    className="h-full w-full object-cover opacity-85"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                  <PlayOverlay label={`Play ${title} demo`} />
                </button>
              )
            ) : (
              <img
                src={slide.src}
                alt={`${title} screenshot ${i + 1}`}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            )}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className="media-slider-nav media-slider-nav-left"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === slides.length - 1}
            className="media-slider-nav media-slider-nav-right"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="media-slider-dots">
            {slides.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => goTo(i)}
                className={`media-slider-dot ${i === index ? 'active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
