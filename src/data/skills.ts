export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Core',
    skills: [
      'React.js',
      'Next.js',
      'React Native',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Redux',
      'Python',
    ],
  },
  {
    category: 'Backend',
    skills: ['Express', 'MongoDB', 'PostgreSQL', 'Supabase', 'Prisma', 'REST APIs'],
  },
  {
    category: 'DevOps',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'Redis', 'CI/CD'],
  },
  {
    category: 'AI & Automation',
    skills: ['OpenAI', 'Gemini', 'RAG', 'n8n', 'LLM APIs'],
  },
  {
    category: 'Blockchain',
    skills: ['Solidity', 'Hardhat', 'Ethers.js', 'Web3.js', 'IPFS', 'Polygon'],
  },
]
