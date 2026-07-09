import { useEffect, useRef, useState } from 'react'

type StreamingTextProps = {
  text: string
  className?: string
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'div'
  /** ms between each unit reveal */
  stagger?: number
  delay?: number
  blur?: number
  triggerOnView?: boolean
  /** char = letter-by-letter; word = word-by-word (wraps naturally) */
  unit?: 'char' | 'word' | 'auto'
}

function resolveUnit(text: string, unit: StreamingTextProps['unit']): 'char' | 'word' {
  if (unit === 'char' || unit === 'word') return unit
  return text.length > 60 ? 'word' : 'char'
}

export function StreamingText({
  text,
  className = '',
  as: Tag = 'p',
  stagger = 18,
  delay = 0,
  blur = 10,
  triggerOnView = true,
  unit = 'auto',
}: StreamingTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(!triggerOnView)
  const resolvedUnit = resolveUnit(text, unit)
  const words = text.split(/\s+/).filter(Boolean)

  useEffect(() => {
    if (!triggerOnView) {
      const t = setTimeout(() => setStarted(true), delay)
      return () => clearTimeout(t)
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [triggerOnView, delay])

  const revealStyle = (index: number): React.CSSProperties => ({
    opacity: started ? 1 : 0,
    filter: started ? 'blur(0px)' : `blur(${blur}px)`,
    transition: 'opacity 0.35s ease, filter 0.45s ease',
    transitionDelay: started ? `${index * stagger}ms` : '0ms',
  })

  if (resolvedUnit === 'word') {
    return (
      <Tag ref={ref as never} className={`max-w-full break-words ${className}`}>
        {words.map((word, i) => (
          <span key={`${i}-${word}`} className="stream-word" style={revealStyle(i)}>
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </Tag>
    )
  }

  let charIndex = 0

  return (
    <Tag ref={ref as never} className={`max-w-full break-words ${className}`}>
      {words.map((word, wi) => (
        <span key={`w-${wi}`} className="stream-word-group">
          {Array.from(word).map((char) => {
            const i = charIndex++
            return (
              <span key={i} className="stream-char" style={revealStyle(i)}>
                {char}
              </span>
            )
          })}
          {wi < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
