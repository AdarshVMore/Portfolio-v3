export type ProjectLinks = {
  live?: string
  github?: string
  githubApp?: string
  showcase?: string
}

export type ProjectMedia = {
  cover: string
  screenshots: string[]
  demoVideo?: string
}

export type Project = {
  id: string
  title: string
  description: string
  highlights: string[]
  tech: string[]
  links: ProjectLinks
  media: ProjectMedia
  featured: boolean
}

const projectBase = '/assets/projects'

export const projects: Project[] = [
  {
    id: 'review-pilot',
    title: 'CodeRefyn',
    description:
      'An AI-powered GitHub code reviewer that automatically analyzes pull requests and posts review comments for bugs, code quality, performance, and maintainability improvements.',
    highlights: [
      'Implemented event-driven architecture, webhooks, and asynchronous workers to process PR events at scale using LLM APIs and RAG.',
      'Designed a review dashboard with repository management; containerized services using Docker.',
    ],
    tech: ['Next.js', 'Tailwind', 'Node.js', 'TypeScript', 'Docker', 'RAG'],
    links: {
      live: 'http://custom-ai-code-reviewer.vercel.app/',
      github: 'https://github.com/AdarshVMore/AI-Code-Reviewer',
      githubApp: 'https://github.com/apps/coderefyn',
    },
    media: {
      cover: `${projectBase}/review-pilot/screenshots/604722390-0f6223d2-eae3-4cb1-b95b-89559e605bcd.png`,
      screenshots: [
        `${projectBase}/review-pilot/screenshots/604722390-0f6223d2-eae3-4cb1-b95b-89559e605bcd.png`,
        `${projectBase}/review-pilot/screenshots/2.png`,
        `${projectBase}/review-pilot/screenshots/3.png`,
        `${projectBase}/review-pilot/screenshots/4.png`,
        `${projectBase}/review-pilot/screenshots/5.png`,
        `${projectBase}/review-pilot/screenshots/6.png`,
        `${projectBase}/review-pilot/screenshots/7.png`,
      ],
    },
    featured: true,
  },
  {
    id: 'relocate-ai',
    title: 'Relocate AI',
    description:
      'An AI-driven relocation platform that recommends neighborhoods, homes, and nearby places based on budget, commute, lifestyle, and social preferences.',
    highlights: [
      'Built Flask + MongoDB backend for personalized recommendations, user profiles, and location intelligence.',
      'Developed an interactive React map UI for neighborhood visualization and place discovery.',
      'Implemented a Smart Relocation Bot using Firebase, Gemini API, and React with authentication and real-time sync.',
      'Winner — CodeBits 3.0 Hackathon (2025).',
    ],
    tech: ['React', 'Flask', 'MongoDB', 'Firebase', 'Gemini API', 'Python'],
    links: {
      showcase: 'https://www.linkedin.com/feed/update/urn:li:activity:7334528379884310529/',
      github: 'https://github.com/AdarshVMore/RelocateAI',
    },
    media: {
      cover: `${projectBase}/relocate-ai/cover.jpg`,
      screenshots: [],
      demoVideo: 'https://youtu.be/ooou9zVlVJc?si=r0Zjr6R1PuwtZxzX',
    },
    featured: true,
  },
  {
    id: 'artquire',
    title: 'ArtQuire',
    description:
      'A decentralized NFT marketplace powered by Solidity and Hardhat, enabling secure blockchain transactions, IPFS-based asset storage, and real-time artist collaboration.',
    highlights: [
      'Winner — EthGlobal HackFS.',
      'Optimized smart contracts for secure NFT minting and trading on Polygon.',
    ],
    tech: ['Solidity', 'Hardhat', 'React', 'IPFS', 'Polygon', 'Web3.js'],
    links: {
      showcase: 'https://www.linkedin.com/feed/update/urn:li:activity:7334528379884310529/',
      github: 'https://github.com/AdarshVMore/ArtAquire-SocialMedia-DApp',
    },
    media: {
      cover: `${projectBase}/artquire/screenshots/1.png`,
      screenshots: [
        `${projectBase}/artquire/screenshots/1.png`,
        `${projectBase}/artquire/screenshots/2.png`,
        `${projectBase}/artquire/screenshots/3.png`,
        `${projectBase}/artquire/screenshots/4.png`,
      ],
      demoVideo: 'https://youtu.be/3wKWwVUjiLw?si=2FrDcrqD0kF56k-R',
    },
    featured: true,
  },
  {
    id: 'health-on-chain',
    title: 'Health on Chain',
    description:
      'A blockchain-based health records system leveraging Solidity, IPFS, and Hardhat to provide hospitals with secure, private, and transparent patient data access.',
    highlights: [
      'Finalist — Web3 INIT.',
      'Implemented IPFS-based decentralized storage for medical records with access control via smart contracts.',
    ],
    tech: ['Solidity', 'IPFS', 'Hardhat', 'React', 'Ethers.js'],
    links: {
      github: 'https://github.com/AdarshVMore/hospital_dapp',
    },
    media: {
      cover: `${projectBase}/health-on-chain/screenshots/1.png`,
      screenshots: [
        `${projectBase}/health-on-chain/screenshots/1.png`,
        `${projectBase}/health-on-chain/screenshots/2.png`,
        `${projectBase}/health-on-chain/screenshots/3.png`,
        `${projectBase}/health-on-chain/screenshots/4.png`,
        `${projectBase}/health-on-chain/screenshots/5.png`,
        `${projectBase}/health-on-chain/screenshots/6.png`,
        `${projectBase}/health-on-chain/screenshots/7.png`,
      ],
    },
    featured: false,
  },
]
