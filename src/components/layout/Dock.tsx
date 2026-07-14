import { Download, Github, Home, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { CopyEmailButton } from '@/components/ui/CopyEmailButton'
import { profile } from '@/data/profile'
import { useThemeToggle } from '@/hooks/useThemeToggle'

const dockItems = [
  { id: 'hero', icon: Home, label: 'Home', action: 'scroll' as const },
  { id: 'github', icon: Github, label: 'GitHub', href: profile.socials.github },
  { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: profile.socials.linkedin },
  { id: 'resume', icon: Download, label: 'Resume', href: profile.resumePath, download: true },
]

export function Dock() {
  const { theme, toggleTheme } = useThemeToggle()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <nav
        className="dock pointer-events-auto flex items-center gap-1 rounded-full px-2 py-2 shadow-2xl"
        aria-label="Site navigation"
      >
        {dockItems.map((item) => {
          const Icon = item.icon
          if (item.action === 'scroll') {
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="rounded-full p-2.5 text-foreground transition-opacity hover:opacity-60"
                aria-label={item.label}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </button>
            )
          }
          return (
            <a
              key={item.id}
              href={item.href}
              {...(item.download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
              className="rounded-full p-2.5 text-foreground transition-opacity hover:opacity-60"
              aria-label={item.label}
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </a>
          )
        })}
        <CopyEmailButton
          aria-label="Email"
          className="rounded-full p-2.5 text-foreground transition-opacity hover:opacity-60"
        >
          <Mail className="h-4 w-4" strokeWidth={1.75} />
        </CopyEmailButton>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full p-2.5 text-foreground transition-opacity hover:opacity-60"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" strokeWidth={1.75} />
          ) : (
            <Moon className="h-4 w-4" strokeWidth={1.75} />
          )}
        </button>
      </nav>
    </div>
  )
}
