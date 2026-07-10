'use client'
import { useRef } from 'react'
import { ArrowRight, TrendingUp, Users, Award, Rocket } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import CTAButton from '@/components/CTAButton'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import PortfolioCard from '@/components/PortfolioCard'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Hero3DWrapper from '@/components/Hero3DWrapper'
import StarfieldBackgroundWrapper from '@/components/StarfieldBackgroundWrapper'
import ParticleTextEffect from '@/components/ParticleTextEffect'
import Reveal from '@/components/Reveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import { SERVICES } from '@/lib/data/services'
import { PORTFOLIO } from '@/lib/data/portfolio'

const STATS = [
  { icon: Users, value: 50, suffix: '+', label: 'Brands Grown' },
  { icon: TrendingUp, value: 3.5, decimals: 1, suffix: 'x', label: 'Avg. Traffic Growth' },
  { icon: Award, value: 10, suffix: '', label: 'Services Offered' },
  { icon: Rocket, value: 24, suffix: '/7', label: 'Campaign Monitoring' },
]

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <>
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
      >
        <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
          <Image
            src="https://picsum.photos/seed/vuka-hero-network/1920/1080"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-bg/85" />
        </motion.div>
        <Hero3DWrapper />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ scale: heroScale }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-6 inline-block rounded-full border border-brand-green/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-brand-green">
            Digital Marketing Agency
          </span>
          <h1 className="font-heading font-bold leading-tight text-white">
            <ParticleTextEffect lines={['We Design. We Optimize.', 'We Grow.']} />
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mx-auto mt-6 max-w-xl text-white/70"
          >
            Vuka Digital builds websites, brands, and campaigns that wake up your online
            presence and turn attention into customers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <CTAButton href="/contact">Get a Free Quote</CTAButton>
            <CTAButton href="/portfolio" variant="outline">
              See Our Work
            </CTAButton>
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="border-y border-white/10 bg-bg-alt px-6 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-2 text-center">
                <stat.icon className="text-brand-green" size={28} />
                <span className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  <AnimatedCounter value={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix} />
                </span>
                <span className="text-xs uppercase tracking-wide text-white/50">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Everything Your Brand Needs to Wake Up Online"
            description="From first impression to final conversion, we cover every piece of your digital presence."
          />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.1}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-brand-green transition-colors hover:text-white">
            View all services <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-bg-alt px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="Our Work" title="Recent Wins for Real Brands" />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.slice(0, 3).map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.1}>
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-brand-green transition-colors hover:text-white">
            View full portfolio <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-14">
            <TestimonialsCarousel />
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 px-6 py-24 text-center">
          <StarfieldBackgroundWrapper />
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
      </Reveal>
    </>
  )
}
