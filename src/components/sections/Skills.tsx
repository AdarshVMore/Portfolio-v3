import { skillGroups } from '@/data/skills'
import { PopReveal } from '@/components/ui/PopReveal'
import { StreamingText } from '@/components/ui/StreamingText'
import { Tag } from '@/components/ui/Tag'

const allSkills = skillGroups.flatMap((g) => g.skills)

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-3xl min-w-0 px-5 py-10 md:px-8 md:py-12 min-[1800px]:max-w-5xl"
    >
      <PopReveal>
        <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
          <StreamingText text="Skills" as="span" unit="char" stagger={20} blur={8} />
        </h2>
      </PopReveal>
      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill, i) => (
          <PopReveal key={skill} delay={i * 25} className="inline-flex">
            <Tag>{skill}</Tag>
          </PopReveal>
        ))}
      </div>
    </section>
  )
}
