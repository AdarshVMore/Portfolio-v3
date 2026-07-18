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
      'Python',
      'Tailwind CSS',
      'Zustand',
      'Redux',
    ],
  },
  {
    category: 'AI & GenAI',
    skills: [
      'LLMs',
      'OpenAI',
      'Anthropic',
      'Gemini',
      'LangChain',
      'LangGraph',
      'RAG',
      'Vector DBs',
      'Pinecone',
      'Evals',
      'Observability',
      'LangSmith',
      'Hugging Face',
      'Fine-tuning',
      'Semantic Search',
      'n8n',
    ],
  },
  
  {
    category: 'Backend',
    skills: ['Express', 'MongoDB', 'PostgreSQL', 'Supabase', 'Prisma', 'Redis', 'REST APIs'],
  },
  {
    category: 'DevOps',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
]
