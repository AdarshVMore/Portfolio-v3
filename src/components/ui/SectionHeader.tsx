import { StreamingText } from './StreamingText'

type SectionHeaderProps = {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ badge, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-8 md:mb-10 ${centered ? 'text-center' : ''}`}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        <StreamingText text={title} as="span" stagger={22} blur={8} />
      </h2>
      {subtitle && (
        <StreamingText
          text={subtitle}
          className={`mt-2.5 text-sm leading-relaxed text-muted-foreground md:text-base ${
            centered ? 'mx-auto max-w-xl' : 'max-w-2xl'
          }`}
          stagger={12}
          blur={6}
          delay={200}
        />
      )}
    </div>
  )
}
