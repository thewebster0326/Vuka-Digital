import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import CTAButton from './CTAButton'

interface PricingItem {
  title: string
  price: string
  note?: string
}

const PRICING: PricingItem[] = [
  { title: 'Web Design', price: 'R650' },
  { title: 'Google Business Profile', price: 'R550' },
  { title: 'On-Page SEO', price: 'R1,050' },
  { title: 'Google Ads Setup', price: 'R550' },
  { title: 'Facebook & Instagram Ads Setup', price: 'R450' },
  {
    title: 'Business Profile Design',
    price: 'R750',
    note: 'Up to 5 pages, then R120 per additional page',
  },
  { title: 'Logo Design', price: 'R250' },
]

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

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
        {PRICING.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.08}>
            <div className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-[0_0_30px_rgba(46,124,246,0.15)]">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-green/20 p-1.5 text-brand-green">
                  <Check size={14} />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                  {item.note && <p className="mt-1 text-sm text-white/50">{item.note}</p>}
                </div>
              </div>
              <span className="whitespace-nowrap bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text font-heading text-2xl font-bold text-transparent">
                {item.price}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 text-center">
          <CTAButton href="/contact">Get a Free Quote</CTAButton>
        </div>
      </Reveal>
    </section>
  )
}
