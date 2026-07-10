import { isDraftContentVisible } from '../lib/preview'

export type HomeArchiveItem = {
  id: string
  title: string
  subtitle: string
  tagline: string
  description: string
  category: string
  image: string
  path: string
  posterStyle: string
  dossierId: string
  stamp: string
  coordinates: string
  companyName: string
  projectType: string
  cardHeading: string
  role: string
  year: string
  fullWidth?: boolean
  comingSoon?: boolean
  /** Hidden on live site; visible in dev or with VITE_SHOW_DRAFT_CONTENT=true */
  draft?: boolean
}

const publishedHomeArchiveItems: HomeArchiveItem[] = [
  {
    id: 'viu-hub',
    title: 'VIU BY HUB',
    subtitle: 'Rebuilding Digital Insurance by driving 25% revenue growth after launch.',
    tagline: 'How do you transform digital trust in the insurance industry?',
    description: '',
    category: 'Strategic Design Leadership',
    image: '/viubyhub1.png',
    path: '/case-studies/viu-hub',
    posterStyle: 'corporate',
    dossierId: 'ARCHIVE/VIU-04',
    stamp: 'CLASSIFIED',
    coordinates: 'X-91.7, Y-67.2',
    companyName: 'VIU by Hub',
    projectType: 'Finance + Design Ops',
    cardHeading: 'VIU by Hub / Digital Insurance',
    role: 'Product Design Lead & Design Operations',
    year: '2022–2024',
    fullWidth: true,
  },
  {
    id: 'hemispheres',
    title: 'HEMISPHERES',
    subtitle: 'When Thought Becomes Data: Mapping Mind and Decision',
    tagline: 'How do you balance two avatars controlled by one player?',
    description: '',
    category: 'Game Design & Interactive Storytelling',
    image: '/hemispheres10.png',
    path: '/case-studies/hemispheres',
    posterStyle: 'split-screen',
    dossierId: 'ARCHIVE/HEMI-01',
    stamp: 'CONFIDENTIAL',
    coordinates: 'X-47.2, Y-12.8',
    companyName: 'Hemispheres',
    projectType: 'Game Design',
    cardHeading: 'Hemispheres / Game Design',
    role: 'Lead Game Designer',
    year: '2025–2026',
  },
  {
    id: 'service-blueprint',
    title: 'SERVICE BLUEPRINT',
    subtitle:
      'Turning Complexity into Clarity: Scaling Service Design across 8 departments and eliminating 93% of redundant templates.',
    tagline: 'How do you unify fragmented organizational processes?',
    description: '',
    category: 'Service Design & Organizational Systems',
    image: '/sb1.png',
    path: '/case-studies/service-blueprint',
    posterStyle: 'blueprint',
    dossierId: 'ARCHIVE/SB-02',
    stamp: 'TOP SECRET',
    coordinates: 'X-23.1, Y-45.9',
    companyName: 'Service Blueprint',
    projectType: 'Design Ops',
    cardHeading: 'Service Blueprint / Org-wide service templates',
    role: 'Service Design Lead',
    year: '2024',
  },
  {
    id: 'omnichannel',
    title: 'OMNICHANNEL STRATEGY',
    subtitle:
      'Connecting Self Service and Live Support in 1 unified service\nblueprint.',
    tagline: 'How do you bridge digital and human service experiences?',
    description: '',
    category: 'Service Design & Customer Experience',
    image: '/thumbnail3.png',
    path: '/case-studies/omnichannel-strategy',
    posterStyle: 'hud',
    dossierId: 'ARCHIVE/OMNI-03',
    stamp: 'MISSION FILE',
    coordinates: 'X-78.4, Y-33.6',
    companyName: 'Omnichannel Strategy',
    projectType: 'Design Ops',
    cardHeading: 'Omnichannel Strategy / Unified service',
    role: 'Product Design Lead',
    year: '2025',
  },
  {
    id: 'second-opinion',
    title: 'SECOND OPINION',
    subtitle:
      'When Information Overwhelms Care: Rebuilding Trust in the Home\nof 18+ test users.',
    tagline: 'When user research changes everything',
    description: '',
    category: 'Healthcare & User Research',
    image: '/secondop1.png',
    path: '/case-studies/second-opinion',
    posterStyle: 'medical',
    dossierId: 'ARCHIVE/SO-05',
    stamp: 'RESTRICTED',
    coordinates: 'X-34.8, Y-89.1',
    companyName: 'Second Opinion',
    projectType: 'Healthcare',
    cardHeading: 'Second Opinion / Healthcare experience',
    role: 'Product Designer & UX Researcher',
    year: '2021',
  },
]

/** Draft cards — never included in production unless preview flag is enabled locally */
export const draftHomeArchiveItems: HomeArchiveItem[] = [
  {
    id: 'ai-marketing-control-center',
    title: 'ENTERPRISE AI MARKETING',
    subtitle:
      'Building the campaign activation and editing experience for an enterprise agentic AI marketing platform.',
    tagline: 'How do you design trust when marketers collaborate with an AI agent at scale?',
    description: '',
    category: 'Enterprise Product Design',
    image: '/ai-marketing/fig-01.png',
    path: '/case-studies/ai-marketing-control-center',
    posterStyle: 'corporate',
    dossierId: 'ARCHIVE/ENT-AI-06',
    stamp: 'DRAFT',
    coordinates: 'X-12.4, Y-56.8',
    companyName: 'Fortune 500 Enterprise',
    projectType: 'AI-Assisted Marketing',
    cardHeading: 'Fortune 500 Enterprise / AI-Assisted Marketing Control Center',
    role: 'Senior Product Designer',
    year: '2026',
    draft: true,
  },
]

export function getHomeArchiveItems(): HomeArchiveItem[] {
  if (!isDraftContentVisible()) {
    return publishedHomeArchiveItems
  }

  return [...publishedHomeArchiveItems, ...draftHomeArchiveItems]
}

export function hasDraftHomeContent(): boolean {
  return isDraftContentVisible() && draftHomeArchiveItems.length > 0
}
