import { PortfolioItem } from '@/lib/data/portfolio'

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/50">
      <div
        className="flex h-44 items-center justify-center text-sm font-medium uppercase tracking-widest text-white/80"
        style={{
          background: `linear-gradient(135deg, ${item.gradientFrom}33, ${item.gradientTo}33)`,
        }}
      >
        {item.category}
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-heading text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-white/60">{item.description}</p>
      </div>
    </div>
  )
}
