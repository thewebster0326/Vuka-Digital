'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data/testimonials'

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const testimonial = TESTIMONIALS[index]

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length)
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <div className="mx-auto max-w-2xl text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
        >
          <Quote className="mx-auto mb-4 text-brand-green" size={32} />
          <p className="text-lg text-white/80 sm:text-xl">&ldquo;{testimonial.quote}&rdquo;</p>
          <p className="mt-6 font-heading text-white">{testimonial.name}</p>
          <p className="text-sm text-white/50">{testimonial.company}</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={prev}
          className="rounded-full border border-white/20 p-2 text-white/70 hover:border-brand-green hover:text-brand-green"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Next testimonial"
          onClick={next}
          className="rounded-full border border-white/20 p-2 text-white/70 hover:border-brand-green hover:text-brand-green"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
