import Link from 'next/link'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

interface PricingItem {
  title: string
  badge: string
  price: string
  unit: string
  note?: string
}

const PRICING: PricingItem[] = [
  { title: 'Web Design', badge: 'Design', price: 'R650', unit: 'once-off' },
  { title: 'Google Business Profile', badge: 'Local SEO', price: 'R550', unit: 'once-off' },
  { title: 'On-Page SEO', badge: 'SEO', price: 'R1,050', unit: 'once-off' },
  { title: 'Google Ads Setup', badge: 'Paid Ads', price: 'R550', unit: 'once-off' },
  {
    title: 'Facebook & Instagram Ads Setup',
    badge: 'Paid Ads',
    price: 'R450',
    unit: 'once-off',
  },
  {
    title: 'Business Profile Design',
    badge: 'Design',
    price: 'R750',
    unit: 'up to 5 pages',
    note: 'R120 per additional page after that',
  },
  { title: 'Logo Design', badge: 'Branding', price: 'R250', unit: 'once-off' },
]

function PriceCard({ item }: { item: PricingItem }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-[0_0_40px_rgba(57,255,106,0.12)]">
      <div className="pointer-events-none absolute right-0 top-0 grid grid-cols-3 gap-1 p-4 opacity-70">
        <span className="h-3 w-3 rounded-sm bg-brand-green/70" />
        <span className="h-3 w-3 rounded-sm bg-transparent" />
        <span className="h-3 w-3 rounded-sm bg-brand-blue/60" />
        <span className="h-3 w-3 rounded-sm bg-brand-blue/40" />
        <span className="h-3 w-3 rounded-sm bg-brand-green/50" />
        <span className="h-3 w-3 rounded-sm bg-transparent" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
          {item.badge}
        </span>
      </div>

      <div className="mt-10 flex flex-1 items-end justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-4xl font-bold text-white sm:text-5xl">
              {item.price}
            </span>
            <span className="text-sm text-white/50">/ {item.unit}</span>
          </div>
          {item.note && <p className="mt-2 max-w-[220px] text-xs text-white/40">{item.note}</p>}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border-t border-white/15 bg-gradient-to-b from-[#2a2f38] to-[#14171c] px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_14px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_20px_rgba(0,0,0,0.6)] active:translate-y-0"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section className="relative px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Pricing"
          title="Straightforward Pricing, No Surprises"
          description="Clear, upfront rates for our most requested services. Need something custom or bundled? Get in touch for a tailored quote."
        />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRICING.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.08}>
            <PriceCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
