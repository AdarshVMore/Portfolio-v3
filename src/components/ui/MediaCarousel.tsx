import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

type MediaCarouselProps = {
  images: string[]
  altPrefix: string
}

export function MediaCarousel({ images, altPrefix }: MediaCarouselProps) {
  const [index, setIndex] = useState(0)
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

  const validImages = images.filter((_, i) => !failedImages.has(i))
  const currentIndex = Math.min(index, Math.max(validImages.length - 1, 0))

  const goTo = useCallback(
    (next: number) => {
      if (validImages.length === 0) return
      setIndex((next + validImages.length) % validImages.length)
    },
    [validImages.length],
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goTo(currentIndex - 1)
      if (e.key === 'ArrowRight') goTo(currentIndex + 1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, goTo])

  if (validImages.length === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
        Screenshots coming soon
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted">
        <img
          src={validImages[currentIndex]}
          alt={`${altPrefix} screenshot ${currentIndex + 1}`}
          className="h-full w-full object-cover"
          onError={() => {
            const originalIndex = images.indexOf(validImages[currentIndex])
            setFailedImages((prev) => new Set(prev).add(originalIndex))
          }}
        />
        {validImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(currentIndex - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(currentIndex + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {validImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                  }`}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {validImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {validImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition ${
                i === currentIndex ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
