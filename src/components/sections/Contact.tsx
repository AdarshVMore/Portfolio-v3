import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border bg-card p-8 md:p-12"
      >
        <SectionHeader
          title="Get in touch"
          subtitle="Open to work and collaborations. Email or LinkedIn is best."
        />
        <div className="flex flex-wrap gap-3">
          <a
            href={profile.socials.email}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Send Email
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}
