import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type ProjectMediaSliderProps = {
  title: string
  cover: string
  screenshots: string[]
  demoVideo?: string
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
  const [playing, setPlaying] = useState(false)

  const slides: { type: 'image' | 'video'; src: string }[] = [
    ...screenshots.map((src) => ({ type: 'image' as const, src })),
    ...(demoVideo ? [{ type: 'video' as const, src: demoVideo }] : []),
  ]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const slideWidth = track.clientWidth
      if (!slideWidth) return
      const next = Math.round(track.scrollLeft / slideWidth)
      setIndex(next)
      if (slides[next]?.type !== 'video') setPlaying(false)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [slides.length])

  if (slides.length === 0) return null

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(next, slides.length - 1))
    setIndex(clamped)
    setPlaying(false)
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' })
  }

  const playVideo = (slideIndex: number) => {
    setIndex(slideIndex)
    setPlaying(true)
    requestAnimationFrame(() => {
      void videoRef.current?.play()
    })
  }

  return (
    <div className="media-slider">
      <div ref={trackRef} className="media-slider-track">
        {slides.map((slide, i) => (
          <div key={`${slide.type}-${slide.src}-${i}`} className="media-slider-slide">
            {slide.type === 'video' ? (
              playing && index === i ? (
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
                  onClick={() => playVideo(i)}
                  className="group relative h-full w-full"
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
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background">
                      <Play className="h-4 w-4 fill-current" strokeWidth={0} />
                    </span>
                  </span>
                </button>
              )
            ) : (
              <img
                src={slide.src}
                alt={`${title} screenshot ${i + 1}`}
                className="h-full w-full object-cover"
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
