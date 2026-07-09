import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import CTAButton from '@/components/CTAButton'
import Reveal from '@/components/Reveal'
import { SERVICES } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Services | Vuka Digital',
  description: 'Web design, SEO, digital marketing, branding, and more from Vuka Digital.',
}

export default function ServicesPage() {
  return (
    <div className="px-6 pb-24 pt-40">
      <Reveal>
        <SectionHeading
          eyebrow="Our Services"
          title="Everything You Need Under One Roof"
          description="Mix and match services or hand us the whole strategy. Either way, it is built to grow your business."
        />
      </Reveal>
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 3) * 0.08}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-20 text-center">
          <CTAButton href="/contact">Get a Free Quote</CTAButton>
        </div>
      </Reveal>
    </div>
  )
}
