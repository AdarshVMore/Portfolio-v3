export const profile = {
  name: 'Adarsh V. More',
  imagePath: '/images/profile_pic.JPG',
  tagline: 'AI-focused fullstack engineer building intelligent systems with LLMs, RAG, and modern web stacks.',
  availableForWork: true,
  email: 'adarshv.more18@gmail.com',
  phone: '+91 90676 84680',
  about:
    'AI-focused engineer passionate about building intelligent systems that solve real problems. Currently shipping real-time products at Ellenox and building ReviewPilot — an AI-powered GitHub code reviewer using LLMs and RAG. I specialise in LLM integrations, retrieval-augmented generation, and fullstack development with React, Next.js, Node.js, and Python.',
  resumePath: '/resume/Adarsh_More_Fullstack_Resume.pdf',
  socials: {
    github: 'https://github.com/AdarshVMore',
    linkedin: 'https://linkedin.com/in/adarsh-v-more',
    email: 'mailto:adarshv.more18@gmail.com',
  },
} as const

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
] as const
