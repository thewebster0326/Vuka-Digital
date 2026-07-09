import {
  Globe2,
  Search,
  Megaphone,
  Palette,
  MapPin,
  PenTool,
  FileText,
  Share2,
  Sparkles,
  Target,
  LucideIcon,
} from 'lucide-react'

export interface Service {
  slug: string
  title: string
  description: string
  icon: LucideIcon
}

export const SERVICES: Service[] = [
  {
    slug: 'web-design',
    title: 'Web Design',
    description: 'Fast, modern, mobile-first websites built to convert visitors into customers.',
    icon: Globe2,
  },
  {
    slug: 'seo',
    title: 'SEO',
    description: 'Rank higher on Google with technical, on-page, and local SEO strategies.',
    icon: Search,
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Full-funnel campaigns across search, social, and email that drive real growth.',
    icon: Megaphone,
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    description: 'Eye-catching visuals for print, digital ads, packaging, and everything in between.',
    icon: Palette,
  },
  {
    slug: 'google-business-profile',
    title: 'Google Business Profile',
    description: 'Optimized local listings that put you on the map for nearby customers searching right now.',
    icon: MapPin,
  },
  {
    slug: 'logo-design',
    title: 'Logo Design',
    description: 'Distinctive, memorable logos that anchor your brand identity from day one.',
    icon: PenTool,
  },
  {
    slug: 'business-profile-design',
    title: 'Business Profile Design',
    description: 'Polished company profiles and brochures that win trust with new clients.',
    icon: FileText,
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    description: 'Consistent, on-brand content and community management across platforms.',
    icon: Share2,
  },
  {
    slug: 'branding-identity',
    title: 'Branding & Identity',
    description: 'Cohesive visual systems built from colour, type, and tone that make your brand instantly recognisable.',
    icon: Sparkles,
  },
  {
    slug: 'paid-ads',
    title: 'Paid Ads (PPC)',
    description: 'Targeted Google and Meta ad campaigns engineered for measurable ROI.',
    icon: Target,
  },
]
