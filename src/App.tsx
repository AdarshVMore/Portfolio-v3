import { Dock } from '@/components/layout/Dock'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Awards } from '@/components/sections/Awards'
import { Education } from '@/components/sections/Education'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-28 text-foreground">
      <main className="min-w-0 overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Education />
      </main>
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-36"
        style={{
          background: 'linear-gradient(to top, var(--bg) 20%, transparent 100%)',
        }}
        aria-hidden
      />
      <Dock />
    </div>
  )
}

export default App
