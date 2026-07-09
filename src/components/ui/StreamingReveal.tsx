import { useEffect, useRef, useState, type ReactNode } from 'react'

type StreamingRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function StreamingReveal({ children, className = '', delay = 0 }: StreamingRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({
    opacity: 0.2,
    filter: 'blur(8px)',
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const center = rect.top + rect.height / 2
      const focus = vh * 0.62
      const delta = center - focus
      const progress = 1 - Math.min(Math.max(delta / (vh * 0.35), 0), 1)

      setStyle({
        opacity: 0.15 + progress * 0.85,
        filter: `blur(${(1 - progress) * 10}px)`,
        transition: `filter 0.15s ease ${delay}ms, opacity 0.15s ease ${delay}ms`,
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [delay])

  return (
    <span ref={ref} className={`inline-flex ${className}`} style={style}>
      {children}
    </span>
  )
}
