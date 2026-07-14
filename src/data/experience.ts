export type Experience = {
  id: string
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  highlights: string[]
  logo?: string
  logoClass?: string
  logoNodeClass?: string
}

const imageBase = '/images'

export const experience: Experience[] = [
  {
    id: 'ellenox',
    company: 'Ellenox',
    role: 'Fullstack Developer',
    location: 'India',
    startDate: 'June 2025',
    endDate: 'March 2026',
    highlights: [
      'Led Capturely, a live virtual photoshoot app with concurrent sessions using React Native, LiveKit, and WebRTC.',
      'Built Therhappi frontend: patient & therapist flows, bookings, records, and payments.',
    ],
    logo: `${imageBase}/ellenox_logo.jpeg`,
  },
  {
    id: 'acadeeasy',
    company: 'AcadeEasy',
    role: 'Fullstack Developer Intern',
    location: 'India',
    startDate: 'Feb 2025',
    endDate: 'April 2025',
    highlights: [
      'Worked on an AI networking platform, profile scoring, and faster page loads.',
      'Moved the backend to microservices, shipped with Docker and GitHub Actions.',
      'Built 10+ Next.js pages from Figma designs.',
    ],
    logo: `${imageBase}/acadeeasy_pvt_ltd_logo.jpeg`,
  },
  {
    id: 'loop-of-infinity',
    company: 'Loop of Infinity',
    role: 'Frontend and Blockchain Developer Intern',
    location: 'India',
    startDate: 'April 2023',
    endDate: 'October 2024',
    highlights: [
      'Shipped the DeFi product, 1,000+ users, $20K+ in token sales on Polygon.',
      'Built staking, vesting, and token sale dashboards plus the Solidity contracts behind them.',
      'Audited smart contracts for the LOI pre-IEO on Hardhat.',
    ],
    logo: `${imageBase}/loop_of_infinity_logo.png`,
    logoClass: 'org-logo-img--banner',
  },
  {
    id: 'fliperb',
    company: 'Fliperb Lifestyle',
    role: 'Full Stack Developer Intern',
    location: 'India',
    startDate: 'December 2023',
    endDate: 'January 2024',
    highlights: [
      'Led a team of 5 on a MERN e-commerce site, Stripe, referrals, SEO.',
      'Dockerized and deployed on AWS.',
    ],
    logo: `${imageBase}/fliperb_lifestyle_logo.jpeg`,
  },
]
