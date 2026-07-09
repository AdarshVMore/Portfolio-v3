import { useEffect, useRef, useState, type ReactNode } from 'react'

type ScrollStreamMaskProps = {
  children: ReactNode
  className?: string
}

/**
 * Applies a live blur + opacity ramp on content near the viewport bottom,
 * mimicking the left-to-right / blur-to-sharp streaming reveal on scroll.
 */
export function ScrollStreamMask({ children, className = '' }: ScrollStreamMaskProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const focusLine = vh * 0.72
      const dist = rect.bottom - focusLine
      const intensity = Math.min(Math.max(dist / (vh * 0.45), 0), 1)

      if (intensity <= 0.02) {
        setStyle({ filter: 'none', opacity: 1 })
        return
      }

      const blurPx = intensity * 14
      const opacity = 1 - intensity * 0.65

      setStyle({
        filter: `blur(${blurPx}px)`,
        opacity,
        transition: 'filter 0.12s linear, opacity 0.12s linear',
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
