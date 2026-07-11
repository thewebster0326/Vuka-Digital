import { Quote, Star } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { TESTIMONIALS } from '@/lib/data/testimonials'

export default function TestimonialsGrid() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map((testimonial, i) => (
        <Reveal key={testimonial.name} delay={(i % 3) * 0.1}>
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-white/5 bg-white/[0.015]" />
            <div className="relative z-10 flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={14} className="fill-brand-green text-brand-green" />
                  ))}
                </div>
                <Quote className="text-brand-blue/40" size={22} />
              </div>
              <p className="flex-1 text-sm text-white/70">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-heading text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs text-white/50">{testimonial.company}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
