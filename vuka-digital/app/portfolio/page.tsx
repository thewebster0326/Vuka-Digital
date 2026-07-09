import type { Metadata } from 'next'
import PortfolioPageClient from '@/components/PortfolioPageClient'

export const metadata: Metadata = {
  title: 'Portfolio | Vuka Digital',
  description: 'Recent web design, branding, and marketing work from Vuka Digital.',
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}
