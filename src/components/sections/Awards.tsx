import { ExternalLink } from 'lucide-react'
import { awards, leadership } from '@/data/awards'
import { PopReveal } from '@/components/ui/PopReveal'
import { Roadmap, type RoadmapEntry } from '@/components/ui/Roadmap'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StreamingText } from '@/components/ui/StreamingText'

export function Awards() {
  const awardEntries: RoadmapEntry[] = awards.map((award) => ({
    id: award.id,
    date: [award.date, award.location].filter(Boolean).join(' · ') || 'Hackathon',
    title: award.title,
    subtitle: award.location,
    description: `${award.result} — ${award.project}`,
    badge: award.title.charAt(0),
    logo: award.logo,
    logoClass: award.logoClass,
    logoNodeClass: award.logoNodeClass,
    footer:
      award.links && award.links.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-3">
          {award.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-opacity hover:opacity-70"
            >
              {link.label}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>
      ) : undefined,
  }))

  const leadershipEntries: RoadmapEntry[] = leadership.map((item) => ({
    id: item.id,
    date: item.period,
    title: item.organization,
    subtitle: item.role,
    badge: item.organization.charAt(0),
    logo: item.logo,
  }))

  return (
    <section
      id="awards"
      className="mx-auto max-w-3xl min-w-0 px-5 py-10 md:px-8 md:py-12 min-[1800px]:max-w-5xl"
    >
      <PopReveal>
        <SectionHeader
          badge="Hackathons"
          title="Hackathons"
          subtitle="A few wins and near-misses."
        />
      </PopReveal>
      <Roadmap entries={awardEntries} />

      <div className="mt-10">
        <PopReveal>
          <h3 className="mb-6 text-2xl font-semibold md:text-3xl">
            <StreamingText text="Leadership" as="span" unit="char" stagger={18} blur={8} />
          </h3>
        </PopReveal>
        <Roadmap entries={leadershipEntries} />
      </div>
    </section>
  )
}
