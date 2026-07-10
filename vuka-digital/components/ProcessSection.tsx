import { Search, Palette, Rocket, LineChart, LucideIcon } from 'lucide-react'
import CTAButton from './CTAButton'

interface Step {
  index: string
  icon: LucideIcon
  title: string
  description: string
  chips: string[]
  highlight: string
}

const STEPS: Step[] = [
  {
    index: '//01',
    icon: Search,
    title: 'Discover & Strategize',
    description:
      'We start by understanding your brand, goals, audience, and competitors to build a clear roadmap before a single pixel is designed.',
    chips: ['Goals', 'Audience', 'Competitors', 'Budget', 'Timeline', 'Brand Voice'],
    highlight: 'Audience',
  },
  {
    index: '//02',
    icon: Palette,
    title: 'Design & Build',
    description:
      'Our team designs and develops your website, brand assets, or campaigns with your business goals front and center.',
    chips: ['Wireframes', 'Copywriting', 'Visual Design', 'Development', 'Content', 'QA Testing'],
    highlight: 'Visual Design',
  },
  {
    index: '//03',
    icon: Rocket,
    title: 'Launch & Promote',
    description:
      'We deploy your project and kick off campaigns across search, social, and ads to start driving real traffic and leads.',
    chips: ['Go Live', 'Ad Campaigns', 'Social Posts', 'Email Blast', 'SEO Submit', 'Press'],
    highlight: 'Ad Campaigns',
  },
  {
    index: '//04',
    icon: LineChart,
    title: 'Monitor & Optimize',
    description:
      'We track performance and continuously refine strategy, creative, and targeting for long-term, compounding growth.',
    chips: ['Analytics', 'A/B Tests', 'Reporting', 'Refinement', 'Scaling', 'Support'],
    highlight: 'Reporting',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-bg-alt px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        <div className="md:sticky md:top-32 md:self-start">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-green/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-brand-green">
            <span className="h-2 w-2 rounded-sm bg-brand-green" />
            Process
          </span>
          <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            How We Turn Strategy Into Growth
          </h2>
          <p className="mt-6 max-w-md text-white/70">
            Every project follows the same four-step process, designed to keep things clear,
            fast, and focused on results.
          </p>
          <div className="mt-10">
            <CTAButton href="/contact">Start Your Project</CTAButton>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {STEPS.map((step, i) => (
            <div key={step.title} className="sticky" style={{ top: `${96 + i * 24}px` }}>
              <div className="min-h-[420px] rounded-2xl border border-white/10 bg-bg p-8 shadow-2xl shadow-black/50">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="grid grid-cols-3 gap-2">
                    {step.chips.map((chip) => {
                      const isHighlight = chip === step.highlight
                      return (
                        <span
                          key={chip}
                          className={`truncate rounded-lg px-3 py-2 text-center text-xs font-medium ${
                            isHighlight
                              ? 'bg-gradient-to-br from-brand-blue/30 to-brand-green/30 text-brand-green ring-1 ring-brand-green/50'
                              : 'bg-white/[0.03] text-white/40'
                          }`}
                        >
                          {chip}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-semibold text-white/40">{step.index}</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-green/20 p-2.5 text-brand-green">
                      <step.icon size={20} />
                    </div>
                    <h3 className="mb-2 font-heading text-xl font-semibold text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/60 sm:text-base">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
