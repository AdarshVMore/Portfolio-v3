import { experience } from '@/data/experience'
import { PopReveal } from '@/components/ui/PopReveal'
import { Roadmap } from '@/components/ui/Roadmap'
import { StreamingText } from '@/components/ui/StreamingText'

export function Experience() {
  const entries = experience.map((job) => ({
    id: job.id,
    date: `${job.startDate} — ${job.endDate}`,
    title: job.company,
    subtitle: `${job.role} · ${job.location}`,
    bullets: job.highlights,
    badge: job.company.charAt(0),
    logo: job.logo,
    logoClass: job.logoClass,
    logoNodeClass: job.logoNodeClass,
  }))

  return (
    <section id="experience" className="mx-auto max-w-3xl min-w-0 px-5 py-10 md:px-8 md:py-12">
      <PopReveal>
        <h2 className="mb-7 text-2xl font-semibold md:text-3xl">
          <StreamingText text="Work Experience" as="span" unit="char" stagger={18} blur={8} />
        </h2>
      </PopReveal>
      <Roadmap entries={entries} />
    </section>
  )
}
