import { education } from '@/data/education'
import { PopReveal } from '@/components/ui/PopReveal'
import { StreamingText } from '@/components/ui/StreamingText'

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-3xl min-w-0 px-5 py-10 md:px-8 md:py-12 min-[1800px]:max-w-5xl"
    >
      <PopReveal>
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
          <StreamingText text="Education" as="span" unit="char" stagger={20} blur={8} />
        </h2>
      </PopReveal>

      <PopReveal delay={80}>
        <article className="bordered-card">
          <p className="text-xs text-muted-foreground">
            <StreamingText text={education.period} as="span" unit="char" stagger={12} blur={6} />
          </p>
          <div className="mt-3 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-lg font-semibold md:text-xl">
                <StreamingText
                  text={education.institution}
                  as="span"
                  unit="char"
                  stagger={16}
                  blur={8}
                  delay={80}
                />
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                <StreamingText
                  text={education.degree}
                  as="span"
                  unit="word"
                  stagger={14}
                  blur={6}
                  delay={160}
                />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <StreamingText
                  text={education.location}
                  as="span"
                  unit="word"
                  stagger={14}
                  blur={6}
                  delay={200}
                />
              </p>
            </div>
            <div className="roadmap-node shrink-0">
              {education.logo ? (
                <img src={education.logo} alt={education.institution} className="org-logo-img h-50 w-50" />
              ) : (
                education.institution.charAt(0)
              )}
            </div>
          </div>
        </article>
      </PopReveal>
    </section>
  )
}
