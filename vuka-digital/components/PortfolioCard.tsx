import Image from 'next/image'
import { PortfolioItem } from '@/lib/data/portfolio'

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-[0_0_30px_rgba(46,124,246,0.15)]">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: `linear-gradient(135deg, ${item.gradientFrom}aa, ${item.gradientTo}aa)`,
          }}
        />
        <div className="absolute inset-0 bg-bg/35" />
        <span className="absolute bottom-3 left-3 rounded-full bg-bg/70 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm">
          {item.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-heading text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-white/60">{item.description}</p>
      </div>
    </div>
  )
}
