import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Check, Plus } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import CTAButton from '@/components/CTAButton'
import Reveal from '@/components/Reveal'
import AmbientGlow from '@/components/AmbientGlow'
import { SERVICES } from '@/lib/data/services'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: `${service.title} | Vuka Digital`,
    description: service.overview,
    openGraph: {
      title: `${service.title} | Vuka Digital`,
      description: service.overview,
      type: 'website',
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3)

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.overview,
    provider: {
      '@type': 'Organization',
      name: 'Vuka Digital',
      telephone: '+27-72-037-3679',
      email: 'info@vuka-digital.co.za',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '30 New Time Square, 30 Ernest Oppenheimer',
        addressLocality: 'Bruma, Johannesburg',
        addressCountry: 'ZA',
      },
    },
    areaServed: 'ZA',
    ...(service.pricing.length > 0 && {
      offers: service.pricing.map((p) => ({
        '@type': 'Offer',
        name: p.label,
        price: p.price.replace(/[^0-9.]/g, ''),
        priceCurrency: 'ZAR',
      })),
    }),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="relative overflow-hidden px-6 pt-40">
        <AmbientGlow />

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 text-left">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 transition-all duration-300 hover:-translate-x-0.5 hover:border-brand-green/50 hover:bg-brand-green/10 hover:text-brand-green"
              >
                &larr; All Services
              </Link>
            </div>
            <div className="mb-6 flex justify-center">
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-green/20 p-4 text-brand-green">
                <service.icon size={32} />
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block rounded-full border border-brand-green/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-brand-green">
                Our Services
              </span>
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
              {service.tagline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-white/70">{service.overview}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <CTAButton href="/contact">Get a Free Quote</CTAButton>
              <CTAButton href="/services" variant="secondary">
                View All Services
              </CTAButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mb-24 mt-20 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
            <h2 className="mb-6 font-heading text-2xl font-semibold text-white">
              What&apos;s Included
            </h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <span className="mt-1 inline-flex shrink-0 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-green/20 p-1 text-brand-green">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <section className="bg-bg-alt px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="Why Us" title={`Why Choose Vuka Digital for ${service.title}`} />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {service.whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/50">
                <h3 className="mb-2 font-heading text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/60">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {service.pricing.length > 0 ? (
        <section className="px-6 py-24">
          <Reveal>
            <SectionHeading eyebrow="Pricing" title="Simple, Upfront Pricing" />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {service.pricing.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8">
                  <h3 className="font-heading text-lg font-semibold text-white">{item.label}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-heading text-4xl font-bold text-white">{item.price}</span>
                    <span className="text-sm text-white/50">/ {item.unit}</span>
                  </div>
                  {item.note && <p className="mt-2 text-xs text-white/40">{item.note}</p>}
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border-t border-white/15 bg-gradient-to-b from-[#2a2f38] to-[#14171c] px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_14px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_20px_rgba(0,0,0,0.6)]"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : (
        <section className="px-6 py-24 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Custom Pricing, Built Around Your Needs"
              description="Every project is different. Get in touch and we will put together a tailored quote for your business."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <CTAButton href="/contact">Get a Free Quote</CTAButton>
            </div>
          </Reveal>
        </section>
      )}

      <section className="bg-bg-alt px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        </Reveal>
        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
          {service.faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.06}>
              <details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 open:border-brand-green/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-white">
                  {faq.question}
                  <Plus
                    size={18}
                    className="shrink-0 text-brand-green transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-4 text-sm text-white/60">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="border-t border-white/10 px-6 py-24">
          <SectionHeading eyebrow="Explore More" title="Other Services You Might Need" />
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/50"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-green/20 p-3 text-brand-green">
                  <s.icon size={22} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-white">{s.title}</h3>
                <p className="text-sm text-white/60">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-brand-green">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <CTAButton href="/contact">Start Your Project</CTAButton>
          </div>
        </section>
      </Reveal>
    </>
  )
}
