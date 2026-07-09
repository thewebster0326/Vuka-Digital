import { ArrowRight, TrendingUp, Users, Award, Rocket } from 'lucide-react'
import Link from 'next/link'
import CTAButton from '@/components/CTAButton'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import PortfolioCard from '@/components/PortfolioCard'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Hero3DWrapper from '@/components/Hero3DWrapper'
import { SERVICES } from '@/lib/data/services'
import { PORTFOLIO } from '@/lib/data/portfolio'

const STATS = [
  { icon: Users, value: '50+', label: 'Brands Grown' },
  { icon: TrendingUp, value: '3.5x', label: 'Avg. Traffic Growth' },
  { icon: Award, value: '10', label: 'Services Offered' },
  { icon: Rocket, value: '24/7', label: 'Campaign Monitoring' },
]

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32">
        <Hero3DWrapper />
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full border border-brand-green/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-brand-green">
            Digital Marketing Agency
          </span>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            We Design. We Optimize.{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              We Grow.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            Vuka Digital builds websites, brands, and campaigns that wake up your online
            presence and turn attention into customers.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/contact">Get a Free Quote</CTAButton>
            <CTAButton href="/portfolio" variant="outline">
              See Our Work
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-bg-alt px-6 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <stat.icon className="text-brand-green" size={28} />
              <span className="font-heading text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wide text-white/50">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything Your Brand Needs to Wake Up Online"
          description="From first impression to final conversion, we cover every piece of your digital presence."
        />
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-brand-green hover:text-white">
            View all services <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-bg-alt px-6 py-24">
        <SectionHeading eyebrow="Our Work" title="Recent Wins for Real Brands" />
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.slice(0, 3).map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-brand-green hover:text-white">
            View full portfolio <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="px-6 py-24">
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="mt-14">
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 px-6 py-24 text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Ready to Wake Up Your Brand?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Tell us about your business and we will put together a free growth plan, no obligation.
        </p>
        <div className="mt-8">
          <CTAButton href="/contact">Start Your Project</CTAButton>
        </div>
      </section>
    </>
  )
}
