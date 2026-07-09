export interface PortfolioItem {
  slug: string
  title: string
  category: string
  description: string
  gradientFrom: string
  gradientTo: string
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: 'orion-fitness-rebrand',
    title: 'Orion Fitness Rebrand',
    category: 'Branding & Identity',
    description: 'A full visual identity refresh for a boutique gym chain, from logo to gym-floor signage.',
    gradientFrom: '#2E7CF6',
    gradientTo: '#39FF6A',
  },
  {
    slug: 'green-leaf-grocer-website',
    title: 'Green Leaf Grocer Website',
    category: 'Web Design',
    description: 'An online storefront with local delivery scheduling for an independent grocer.',
    gradientFrom: '#1B4DFF',
    gradientTo: '#2E7CF6',
  },
  {
    slug: 'summit-law-seo',
    title: 'Summit Law SEO Overhaul',
    category: 'SEO',
    description: 'Technical SEO and content strategy that tripled organic leads in six months.',
    gradientFrom: '#39FF6A',
    gradientTo: '#B6FF6A',
  },
  {
    slug: 'pulse-cafe-social',
    title: 'Pulse Cafe Social Growth',
    category: 'Social Media Management',
    description: 'Daily content and community management that grew a loyal local following.',
    gradientFrom: '#2E7CF6',
    gradientTo: '#7CDFFF',
  },
  {
    slug: 'nova-realty-ads',
    title: 'Nova Realty Ad Campaigns',
    category: 'Paid Ads (PPC)',
    description: 'Google and Meta ad funnels that cut cost-per-lead by 40% for a property agency.',
    gradientFrom: '#39FF6A',
    gradientTo: '#2E7CF6',
  },
  {
    slug: 'lumen-skincare-packaging',
    title: 'Lumen Skincare Packaging',
    category: 'Graphic Design',
    description: 'Shelf-ready packaging design for a new skincare line launch.',
    gradientFrom: '#7C5CFF',
    gradientTo: '#39FF6A',
  },
  {
    slug: 'harborview-clinic-gbp',
    title: 'Harborview Clinic Local Listing',
    category: 'Google Business Profile',
    description: 'Google Business Profile optimisation that doubled map-pack visibility.',
    gradientFrom: '#2E7CF6',
    gradientTo: '#39FF6A',
  },
  {
    slug: 'atlas-logistics-profile',
    title: 'Atlas Logistics Company Profile',
    category: 'Business Profile Design',
    description: 'A polished corporate profile document used to win new enterprise contracts.',
    gradientFrom: '#39FF6A',
    gradientTo: '#1B4DFF',
  },
]
