'use client'
import { useMemo, useState } from 'react'
import PortfolioCard from '@/components/PortfolioCard'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import { PORTFOLIO } from '@/lib/data/portfolio'

export default function PortfolioPageClient() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(PORTFOLIO.map((item) => item.category)))],
    []
  )
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? PORTFOLIO : PORTFOLIO.filter((item) => item.category === active)

  return (
    <div className="px-6 pb-24 pt-40">
      <Reveal>
        <SectionHeading
          eyebrow="Portfolio"
          title="Work We Are Proud Of"
          description="A look at recent projects across web, brand, and growth."
        />
      </Reveal>
      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
              active === category
                ? 'border-brand-green bg-brand-green/10 text-brand-green'
                : 'border-white/15 text-white/60 hover:border-white/40 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <Reveal key={item.slug} delay={(i % 3) * 0.08}>
            <PortfolioCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
