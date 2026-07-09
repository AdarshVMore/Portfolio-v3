import { projects } from '@/data/projects'
import { PopReveal } from '@/components/ui/PopReveal'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl min-w-0 px-5 py-10 md:px-8 md:py-12">
      <PopReveal>
        <SectionHeader
          badge="Projects"
          title="Things I've built"
          subtitle="A few recent ones — click through for demos and code."
        />
      </PopReveal>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
