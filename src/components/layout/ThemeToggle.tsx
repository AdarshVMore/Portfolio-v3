import { Moon, Sun } from 'lucide-react'
import { useThemeToggle } from '@/hooks/useThemeToggle'

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeToggle()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-lg border border-border p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
