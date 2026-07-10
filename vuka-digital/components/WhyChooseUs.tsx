import { Eye, LucideIcon, Layers, MessageCircle, Rocket, Sparkles, TrendingUp } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import AnimatedCounter from './AnimatedCounter'

interface Reason {
  icon: LucideIcon
  title: string
  description: string
  span?: boolean
  stat?: { value: number; decimals?: number; suffix: string }
}

const REASONS: Reason[] = [
  {
    icon: TrendingUp,
    title: 'Real Results, Not Vanity Metrics',
    description:
      'Every campaign is measured against traffic, leads, and revenue, not likes or impressions.',
    span: true,
    stat: { value: 3.5, decimals: 1, suffix: 'x avg. traffic growth' },
  },
  {
    icon: Sparkles,
    title: 'Custom-Built for Your Brand',
    description: 'No templates. Every site and strategy is designed around who you actually are.',
  },
  {
    icon: MessageCircle,
    title: 'Fast, Honest Communication',
    description: 'Real humans reply quickly. No ticket queues, no radio silence.',
  },
  {
    icon: Layers,
    title: 'Everything Under One Roof',
    description:
      'Web, SEO, branding, and ads from one team working off one strategy, not five agencies pulling in different directions.',
    span: true,
  },
  {
    icon: Eye,
    title: 'Transparent Pricing',
    description: 'Clear scope and pricing from day one. No hidden fees, ever.',
  },
  {
    icon: Rocket,
    title: 'Always-On Monitoring',
    description: 'Campaigns are watched and optimized round the clock, not just once a month.',
    span: true,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Why Vuka Digital"
          title="The Difference Is In How We Work"
          description="Plenty of agencies promise growth. Here is what actually sets us apart."
        />
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {REASONS.map((reason, i) => (
          <Reveal
            key={reason.title}
            delay={(i % 3) * 0.08}
            className={reason.span ? 'md:col-span-2' : ''}
          >
            <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/50 hover:shadow-[0_0_40px_rgba(57,255,106,0.12)]">
              <span className="pointer-events-none absolute -right-2 -top-6 font-heading text-8xl font-bold text-white/[0.03] transition-colors duration-300 group-hover:text-brand-green/[0.07]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative z-10 mb-5 inline-flex rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-green/20 p-3 text-brand-green">
                <reason.icon size={26} />
              </div>
              <h3 className="relative z-10 mb-2 font-heading text-xl font-semibold text-white">
                {reason.title}
              </h3>
              <p className="relative z-10 text-white/60">{reason.description}</p>
              {reason.stat && (
                <div className="relative z-10 mt-5 font-heading text-2xl font-bold text-brand-green">
                  <AnimatedCounter
                    value={reason.stat.value}
                    decimals={reason.stat.decimals ?? 0}
                    suffix={reason.stat.suffix}
                  />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
