import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import CTAButton from '@/components/CTAButton'
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
    <div className="px-6 pb-24 pt-40">
      <SectionHeading
        eyebrow="About Vuka Digital"
        title="Vuka Means Wake Up. That Is Exactly What We Do For Your Brand."
        description="Born from a simple idea: too many great businesses are invisible online. We exist to change that."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-12 sm:grid-cols-2">
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
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-2xl font-semibold text-white">Our Mission</h3>
          <p className="text-white/70">
            We combine design, strategy, and data so every website, campaign, and post works
            toward one goal: measurable growth. No vanity metrics, no guesswork, just work that
            moves your business forward.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((value) => (
          <div key={value.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
            <value.icon className="mx-auto mb-4 text-brand-green" size={28} />
            <h4 className="mb-2 font-heading font-semibold text-white">{value.title}</h4>
            <p className="text-sm text-white/60">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <CTAButton href="/contact">Work With Us</CTAButton>
      </div>
    </div>
  )
}
