import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="text-center md:text-left">
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.tagline}</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.email}
            className="text-muted-foreground transition hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
      </p>
    </footer>
  )
}
