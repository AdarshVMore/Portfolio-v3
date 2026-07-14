import type { ReactNode } from 'react'
import { PopReveal } from './PopReveal'
import { StreamingText } from './StreamingText'

export type RoadmapEntry = {
  id: string
  date: string
  title: string
  subtitle?: string
  description?: string
  bullets?: string[]
  badge: string
  logo?: string
  logoClass?: string
  logoNodeClass?: string
  footer?: ReactNode
}

type RoadmapProps = {
  entries: RoadmapEntry[]
  /** base delay ms between each entry pop */
  stagger?: number
}

export function Roadmap({ entries, stagger = 90 }: RoadmapProps) {
  return (
    <div className="roadmap">
      {entries.map((entry, index) => {
        const isLast = index === entries.length - 1

        return (
          <PopReveal key={entry.id} delay={index * stagger}>
            <article className="roadmap-entry">
              <div className="roadmap-rail" aria-hidden>
                <div className={`roadmap-node ${entry.logoNodeClass ?? ''}`}>
                  {entry.logo ? (
                    <img
                      src={entry.logo}
                      alt=""
                      className={`org-logo-img ${entry.logoClass ?? ''}`.trim()}
                    />
                  ) : (
                    entry.badge
                  )}
                </div>
                {!isLast && <div className="roadmap-spine" />}
              </div>

              <div className={`roadmap-body min-w-0 ${isLast ? 'pb-0' : ''}`}>
                <p className="text-xs text-muted-foreground">
                  <StreamingText text={entry.date} as="span" unit="char" stagger={12} blur={6} />
                </p>
                <h3 className="mt-1.5 text-lg font-semibold md:text-xl">
                  <StreamingText
                    text={entry.title}
                    as="span"
                    unit="char"
                    stagger={16}
                    blur={8}
                    delay={80}
                  />
                </h3>
                {entry.subtitle && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    <StreamingText
                      text={entry.subtitle}
                      as="span"
                      unit="word"
                      stagger={20}
                      blur={6}
                      delay={160}
                    />
                  </p>
                )}
                {entry.bullets && entry.bullets.length > 0 ? (
                  <ul className="roadmap-bullets mt-2.5 space-y-1.5 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  entry.description && (
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                      <StreamingText
                        text={entry.description}
                        as="span"
                        unit="word"
                        stagger={14}
                        blur={8}
                        delay={220}
                      />
                    </p>
                  )
                )}
                {entry.footer}
                {!isLast && <div className="roadmap-separator" aria-hidden />}
              </div>
            </article>
          </PopReveal>
        )
      })}
    </div>
  )
}
