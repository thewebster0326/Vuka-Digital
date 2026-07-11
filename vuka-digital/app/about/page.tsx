import type { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'
import CTAButton from '@/components/CTAButton'
import Reveal from '@/components/Reveal'
import AmbientGlow from '@/components/AmbientGlow'
import StarfieldBackgroundWrapper from '@/components/StarfieldBackgroundWrapper'
import WhyChooseUs from '@/components/WhyChooseUs'
import { Compass, Heart, Lightbulb, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Vuka Digital',
  description: 'Learn how Vuka Digital helps brands wake up their online presence.',
}

const VALUES = [
  {
    icon: Lightbulb,
    title: 'Bold Thinking',
    description: 'We do not settle for templates. Every strategy is built around your brand.',
  },
  {
    icon: ShieldCheck,
    title: 'Real Accountability',
    description: 'Transparent reporting and honest timelines, every step of the way.',
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    description: 'Your growth is our growth. We treat every account like our own business.',
  },
  {
    icon: Compass,
    title: 'Data-Driven',
    description: 'Instinct starts the conversation, but the numbers close the deal.',
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden px-6 pt-40">
        <StarfieldBackgroundWrapper />
        <AmbientGlow />
        <Reveal>
          <SectionHeading
            eyebrow="About Vuka Digital"
            title="Vuka Means Wake Up. That Is Exactly What We Do For Your Brand."
            description="Born from a simple idea: too many great businesses are invisible online. We exist to change that."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 h-64 max-w-5xl overflow-hidden rounded-2xl sm:h-80">
            <Image
              src="https://picsum.photos/seed/vuka-agency-creative-desk/1600/900"
              alt="The Vuka Digital team collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{ background: 'linear-gradient(135deg, #2E7CF6aa, #39FF6Aaa)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 sm:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-2xl font-semibold text-white">Our Story</h3>
              <p className="text-white/70">
                Vuka Digital started with a straightforward observation: talented businesses were
                losing customers to competitors with weaker offerings but stronger digital
                presences. Vuka, meaning &ldquo;awaken&rdquo; in the Nguni languages, became our
                mission statement. We help brands wake up, sharpen their identity, and show up
                where their customers are already looking.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-2xl font-semibold text-white">Our Mission</h3>
              <p className="text-white/70">
                We combine design, strategy, and data so every website, campaign, and post works
                toward one goal: measurable growth. No vanity metrics, no guesswork, just work that
                moves your business forward.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mb-24 mt-20 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={(i % 4) * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/50">
                <value.icon className="mx-auto mb-4 text-brand-green" size={28} />
                <h4 className="mb-2 font-heading font-semibold text-white">{value.title}</h4>
                <p className="text-sm text-white/60">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <WhyChooseUs />

      <div className="px-6 pb-24 text-center">
        <Reveal>
          <CTAButton href="/contact">Work With Us</CTAButton>
        </Reveal>
      </div>
    </>
  )
}
