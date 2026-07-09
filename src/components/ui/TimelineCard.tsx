import { ExternalLink, Trophy } from 'lucide-react'

type TimelineCardProps = {
  badge: string
  title: string
  result: string
  project: string
  date?: string
  location?: string
  links?: { label: string; url: string }[]
}

export function TimelineCard({
  badge,
  title,
  result,
  project,
  date,
  location,
  links,
}: TimelineCardProps) {
  return (
    <div className="group relative flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 md:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-bold text-accent">
        {badge}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
            <Trophy className="h-3 w-3" />
            {result}
          </span>
          {(date || location) && (
            <span className="text-xs text-muted-foreground">
              {[date, location].filter(Boolean).join(' · ')}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project}</p>
        {links && links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {link.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
