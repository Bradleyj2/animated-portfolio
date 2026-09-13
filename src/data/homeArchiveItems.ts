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
  metric?: string
  /** Render CSS collage instead of image thumbnail on homepage cards */
  useCustomThumbnail?: boolean
  fullWidth?: boolean
  comingSoon?: boolean
  /** Hidden on live site; visible in dev or with VITE_SHOW_DRAFT_CONTENT=true */
  draft?: boolean
}

export const HERO_PAIR_IDS = ['ai-marketing-control-center', 'viu-hub'] as const

/** IDs shown under Side Projects (homepage section + /side-projects page) */
export const SIDE_PROJECT_IDS = ['hemispheres'] as const

const publishedHomeArchiveItems: HomeArchiveItem[] = [
  {
    id: 'viu-hub',
    title: 'VIU by Hub',
    subtitle: 'Rebuilding digital insurance by driving 25% revenue growth after launch.',
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
    cardHeading: 'VIU by Hub / Digital insurance',
    role: 'Product Design Lead & Design Operations',
    year: '2022–2024',
    metric: '25% revenue growth post-launch',
  },
  {
    id: 'ai-marketing-control-center',
    title: 'Enterprise AI marketing',
    subtitle:
      'Building the campaign activation and editing experience for an enterprise agentic AI marketing platform.',
    tagline: 'How do you design trust when marketers collaborate with an AI agent at scale?',
    description: '',
    category: 'Enterprise Product Design',
    image: '/ai-marketing/fig-01.png',
    path: '/case-studies/ai-marketing-control-center',
    posterStyle: 'corporate',
    dossierId: 'ARCHIVE/ENT-AI-06',
    stamp: 'CLASSIFIED',
    coordinates: 'X-12.4, Y-56.8',
    companyName: 'Fortune 500 Enterprise',
    projectType: 'AI-assisted marketing',
    cardHeading: 'Fortune 500 Enterprise / AI-assisted marketing control center',
    role: 'Senior Product Designer',
    year: '2026',
    metric: 'Shipped to MVP · 2026',
  },
  {
    id: 'second-opinion',
    title: 'Second Opinion',
    subtitle:
      'When information overwhelms care: rebuilding trust in the home\nof 18+ test users.',
    tagline: 'When user research changes everything',
    description: '',
    category: 'Healthcare & User Research',
    image: '/secondop-wireframes.jpg',
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
    metric: '18+ user research sessions',
    useCustomThumbnail: true,
  },
  {
    id: 'service-blueprint',
    title: 'Service blueprint',
    subtitle:
      'Turning complexity into clarity: scaling service design across 8 departments and eliminating 93% of redundant templates.',
    tagline: 'How do you unify fragmented organizational processes?',
    description: '',
    category: 'Service Design & Organizational Systems',
    image: '/sb1.png',
    path: '/case-studies/service-blueprint',
    posterStyle: 'blueprint',
    dossierId: 'ARCHIVE/SB-02',
    stamp: 'TOP SECRET',
    coordinates: 'X-23.1, Y-45.9',
    companyName: 'Service blueprint',
    projectType: 'Design Ops',
    cardHeading: 'Service blueprint / Org-wide service templates',
    role: 'Service Design Lead',
    year: '2024',
    metric: '93% reduction in redundant templates',
  },
  {
    id: 'omnichannel',
    title: 'Omnichannel strategy',
    subtitle:
      'Connecting self service and live support in 1 unified service\nblueprint.',
    tagline: 'How do you bridge digital and human service experiences?',
    description: '',
    category: 'Service Design & Customer Experience',
    image: '/omnichannel-flow.jpg',
    path: '/case-studies/omnichannel-strategy',
    posterStyle: 'hud',
    dossierId: 'ARCHIVE/OMNI-03',
    stamp: 'MISSION FILE',
    coordinates: 'X-78.4, Y-33.6',
    companyName: 'Omnichannel strategy',
    projectType: 'Design Ops',
    cardHeading: 'Omnichannel strategy / Unified service',
    role: 'Product Design Lead',
    year: '2025',
    metric: '1 unified blueprint across 2 service channels',
  },
  {
    id: 'hemispheres',
    title: 'Hemispheres',
    subtitle: 'When thought becomes data: mapping mind and decision',
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
    cardHeading: 'Hemispheres / Game design',
    role: 'Lead Game Designer',
    year: '2025–2026',
  },
]

/** Draft cards — visible in dev or with VITE_SHOW_DRAFT_CONTENT=true */
export const draftHomeArchiveItems: HomeArchiveItem[] = []

export function getHomeArchiveItems(): HomeArchiveItem[] {
  if (!isDraftContentVisible()) {
    return publishedHomeArchiveItems
  }

  return [...publishedHomeArchiveItems, ...draftHomeArchiveItems]
}

export function hasDraftHomeContent(): boolean {
  return isDraftContentVisible() && draftHomeArchiveItems.length > 0
}

export function isHeroPairItem(item: HomeArchiveItem): boolean {
  return (HERO_PAIR_IDS as readonly string[]).includes(item.id)
}

export function isSideProjectItem(item: HomeArchiveItem): boolean {
  return (SIDE_PROJECT_IDS as readonly string[]).includes(item.id)
}

export function getSideProjectItems(): HomeArchiveItem[] {
  return getHomeArchiveItems().filter(isSideProjectItem)
}
