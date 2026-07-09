export type ProjectLinks = {
  live?: string
  github?: string
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
    title: 'ReviewPilot',
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
    },
    media: {
      cover: `${projectBase}/review-pilot/cover.jpg`,
      screenshots: [
        `${projectBase}/review-pilot/screenshots/01.jpg`,
        `${projectBase}/review-pilot/screenshots/02.jpg`,
      ],
      demoVideo: `${projectBase}/review-pilot/demo.mp4`,
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
      screenshots: [
        `${projectBase}/relocate-ai/screenshots/01.jpg`,
        `${projectBase}/relocate-ai/screenshots/02.jpg`,
      ],
      demoVideo: `${projectBase}/relocate-ai/demo.mp4`,
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
      cover: `${projectBase}/artquire/cover.jpg`,
      screenshots: [
        `${projectBase}/artquire/screenshots/01.jpg`,
        `${projectBase}/artquire/screenshots/02.jpg`,
      ],
      demoVideo: `${projectBase}/artquire/demo.mp4`,
    },
    featured: true,
  },
  {
    id: 'vaanshika',
    title: 'VaanShika',
    description:
      'A family tree management platform with real-time collaboration, secure communication, shared event calendars, and AWS S3 integration for document and photo storage.',
    highlights: [
      'Built collaborative family tree visualization with real-time updates.',
      'Integrated AWS S3 for reliable document and photo storage.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'WebSockets'],
    links: {
      github: 'https://github.com/AdarshVMore',
    },
    media: {
      cover: `${projectBase}/vaanshika/cover.jpg`,
      screenshots: [
        `${projectBase}/vaanshika/screenshots/01.jpg`,
        `${projectBase}/vaanshika/screenshots/02.jpg`,
      ],
      demoVideo: `${projectBase}/vaanshika/demo.mp4`,
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
      cover: `${projectBase}/health-on-chain/cover.jpg`,
      screenshots: [`${projectBase}/health-on-chain/screenshots/01.jpg`],
    },
    featured: false,
  },
]
