import { Mail } from 'lucide-react'
import { CopyEmailButton } from '@/components/ui/CopyEmailButton'
import { profile } from '@/data/profile'
import { PopReveal } from '@/components/ui/PopReveal'
import { StreamingText } from '@/components/ui/StreamingText'

export function Hero() {
  const displayName = profile.name.split(' ')[0]

  return (
    <section
      id="hero"
      className="mx-auto max-w-3xl min-w-0 px-5 pb-10 pt-12 md:px-8 md:pb-10 md:pt-16 min-[1800px]:max-w-5xl"
    >
      <PopReveal immediate delay={0}>
        <div className="flex flex-col items-start gap-6 md:flex-row md:justify-between md:gap-8">
          <div className="order-2 w-full min-w-0 md:order-1 md:flex-1">
            <h1 className="text-[2rem] font-bold leading-tight tracking-tight md:text-7xl">
              <StreamingText
                text={`Hi, I'm ${displayName}`}
                as="span"
                stagger={28}
                blur={12}
                triggerOnView={false}
                delay={200}
              />
            </h1>
            <StreamingText
              text={profile.tagline}
              className="mt-3 block text-base leading-relaxed text-muted-foreground md:text-lg"
              unit="word"
              stagger={14}
              blur={8}
              delay={500}
              triggerOnView={false}
            />
            <CopyEmailButton className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-opacity hover:opacity-70 md:text-base">
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              {profile.email}
            </CopyEmailButton>
          </div>

          <PopReveal immediate delay={120} className="order-1 md:order-2">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-muted md:h-40 md:w-40">
              <img
                src={profile.imagePath}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
          </PopReveal>
        </div>
      </PopReveal>
    </section>
  )
}
