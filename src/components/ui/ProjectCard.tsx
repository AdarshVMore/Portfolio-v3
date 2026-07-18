import { ExternalLink, Github, Globe } from 'lucide-react'
import type { Project } from '@/data/projects'
import { PopReveal } from './PopReveal'
import { ProjectMediaSlider } from './ProjectMediaSlider'
import { StreamingText } from './StreamingText'
import { Tag } from './Tag'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const baseDelay = index * 80
  const hasMedia =
    project.media.screenshots.length > 0 || Boolean(project.media.demoVideo)

  return (
    <PopReveal delay={baseDelay} className="min-w-0 max-w-full overflow-hidden">
      <article className="min-w-0 space-y-3">
        <h3 className="text-lg font-semibold md:text-xl">
          <StreamingText
            text={project.title}
            as="span"
            unit="char"
            stagger={14}
            blur={8}
            delay={baseDelay + 100}
          />
        </h3>
        <StreamingText
          text={project.description}
          className="text-sm leading-relaxed text-muted-foreground"
          unit="word"
          stagger={10}
          blur={6}
          delay={baseDelay + 150}
        />

        {hasMedia && (
          <ProjectMediaSlider
            title={project.title}
            cover={project.media.cover}
            screenshots={project.media.screenshots}
            demoVideo={project.media.demoVideo}
          />
        )}

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="link-pill">
              <Globe className="h-3.5 w-3.5" />
              Website
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="link-pill">
              <Github className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          {project.links.githubApp && (
            <a href={project.links.githubApp} target="_blank" rel="noopener noreferrer" className="link-pill">
              <Github className="h-3.5 w-3.5" />
              GitHub App
            </a>
          )}
          {project.links.showcase && (
            <a href={project.links.showcase} target="_blank" rel="noopener noreferrer" className="link-pill">
              <ExternalLink className="h-3.5 w-3.5" />
              Showcase
            </a>
          )}
        </div>
      </article>
    </PopReveal>
  )
}
