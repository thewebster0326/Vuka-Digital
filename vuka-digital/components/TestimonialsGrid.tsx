'use client'
import { useEffect, useState } from 'react'
import { motion, type PanInfo } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { TESTIMONIALS, type Testimonial } from '@/lib/data/testimonials'

const STACK_DEPTH = 3
const SWIPE_THRESHOLD = 100
const AUTO_ADVANCE_MS = 5000

const BORDER_BY_DEPTH = ['border-brand-green/40', 'border-brand-blue/25', 'border-white/10']

function StackCard({ testimonial, depth }: { testimonial: Testimonial; depth: number }) {
  return (
    <div
      className={`flex h-full select-none flex-col gap-4 rounded-2xl border ${BORDER_BY_DEPTH[depth]} bg-white/[0.03] p-6`}
    >
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
  )
}

function TestimonialStack({ items }: { items: Testimonial[] }) {
  const [order, setOrder] = useState(items.map((_, i) => i))

  const advance = () => setOrder((current) => [...current.slice(1), current[0]])

  useEffect(() => {
    const id = setInterval(advance, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) advance()
  }

  return (
    <div className="relative h-72 sm:h-64">
      {order.map((itemIndex, depth) => {
        const isFront = depth === 0
        return (
          <motion.div
            key={itemIndex}
            className="absolute inset-0"
            style={{ zIndex: STACK_DEPTH - depth, cursor: isFront ? 'grab' : 'default' }}
            animate={{
              scale: 1 - depth * 0.06,
              y: depth * 16,
              x: 0,
              opacity: 1 - depth * 0.18,
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            drag={isFront ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            whileDrag={{ cursor: 'grabbing' }}
            onDragEnd={handleDragEnd}
          >
            <StackCard testimonial={items[itemIndex]} depth={depth} />
          </motion.div>
        )
      })}
    </div>
  )
}

export default function TestimonialsGrid() {
  const total = TESTIMONIALS.length
  const groups = TESTIMONIALS.map((_, i) =>
    Array.from({ length: STACK_DEPTH }, (_, offset) => TESTIMONIALS[(i + offset) % total])
  )

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((items, i) => (
        <Reveal key={items[0].name} delay={(i % 3) * 0.1}>
          <TestimonialStack items={items} />
        </Reveal>
      ))}
    </div>
  )
}
