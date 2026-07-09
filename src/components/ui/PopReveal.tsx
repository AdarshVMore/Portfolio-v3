import { useEffect, useRef, useState, type ReactNode } from 'react'

type PopRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Run on page load without waiting for scroll */
  immediate?: boolean
}

export function PopReveal({
  children,
  className = '',
  delay = 0,
  immediate = false,
}: PopRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (immediate) {
      const t = window.setTimeout(() => setVisible(true), delay)
      return () => window.clearTimeout(t)
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate, delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? 'blur(0px)' : 'blur(14px)',
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition:
          'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: visible ? `${delay}ms` : '0ms',
        willChange: 'opacity, filter, transform',
      }}
    >
      {children}
    </div>
  )
}
