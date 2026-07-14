export type Award = {
  id: string
  title: string
  result: string
  project: string
  date?: string
  location?: string
  links?: { label: string; url: string }[]
  logo?: string
  logoClass?: string
  logoNodeClass?: string
}

export type Leadership = {
  id: string
  role: string
  organization: string
  period: string
  logo?: string
}

const imageBase = '/images'

export const awards: Award[] = [
  {
    id: 'codebits',
    title: 'CodeBits 3.0 Hackathon',
    result: 'Winner',
    project: 'Relocate AI — AI relocation platform',
    date: '2025',
    location: 'India',
    logo: `${imageBase}/codebits_3.0_logo.webp`,
    logoNodeClass: 'roadmap-node--black-bg',
    links: [{ label: 'GitHub', url: 'https://github.com/AdarshVMore/RelocateAI' }],
  },
  {
    id: 'ethglobal',
    title: 'EthGlobal HackFS',
    result: 'Winner',
    project: 'ArtQuire — NFT marketplace on Polygon',
    logo: `${imageBase}/ethglobal.jpeg`,
    links: [
      {
        label: 'Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7334528379884310529/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/AdarshVMore/ArtAquire-SocialMedia-DApp',
      },
    ],
  },
  {
    id: 'web3-init',
    title: 'Web3 INIT',
    result: 'Finalist',
    project: 'Hospital D-App — blockchain medical records',
    logo: `${imageBase}/web3_init.webp`,
    links: [{ label: 'GitHub', url: 'https://github.com/AdarshVMore/hospital_dapp' }],
  },
]

export const leadership: Leadership[] = [
  {
    id: 'gdsc',
    role: 'Lead',
    organization: 'Google Developer Students Club',
    period: 'June 2023 — June 2024',
    logo: `${imageBase}/google_students_developer_club_logo.png`,
  },
  {
    id: 'ascee',
    role: 'President',
    organization: 'ASCEE Club',
    period: 'June 2023 — June 2024',
    logo: `${imageBase}/ASCEE_club_logo.jpg`,
  },
]
