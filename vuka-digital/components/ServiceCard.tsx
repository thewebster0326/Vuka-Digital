import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/50 hover:shadow-[0_0_30px_rgba(57,255,106,0.15)]">
      <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-green/20 p-3 text-brand-green">
        <Icon size={24} />
      </div>
      <h3 className="mb-2 font-heading text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/60">{description}</p>
    </div>
  )
}
