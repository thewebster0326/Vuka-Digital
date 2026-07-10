import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  slug: string
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ slug, icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/50 hover:shadow-[0_0_30px_rgba(57,255,106,0.15)]"
    >
      <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-green/20 p-3 text-brand-green">
        <Icon size={24} />
      </div>
      <h3 className="mb-2 font-heading text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/60">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm text-brand-green opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Learn more <ArrowRight size={14} />
      </span>
    </Link>
  )
}
