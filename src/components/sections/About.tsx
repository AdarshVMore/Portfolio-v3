import { profile } from '@/data/profile'
import { PopReveal } from '@/components/ui/PopReveal'
import { StreamingText } from '@/components/ui/StreamingText'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl min-w-0 px-5 py-10 md:px-8 md:py-12">
      <PopReveal>
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          <StreamingText text="About" as="span" unit="char" stagger={20} blur={8} />
        </h2>
        <StreamingText
          text={profile.about}
          className="text-sm leading-[1.75] text-muted-foreground md:text-base"
          unit="word"
          stagger={12}
          blur={8}
        />
      </PopReveal>
    </section>
  )
}
