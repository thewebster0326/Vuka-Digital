'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { PORTFOLIO } from '@/lib/data/portfolio'

export default function CircularGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const count = PORTFOLIO.length
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${((count - 1) / count) * 100}%`])

  return (
    <div ref={wrapperRef} className="relative" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-12 z-20 flex flex-col items-center text-center">
          <span className="font-heading text-2xl font-bold text-white drop-shadow-lg sm:text-4xl">
            Our Work
          </span>
          <span className="mt-2 text-xs uppercase tracking-[0.3em] text-white/70 drop-shadow sm:text-sm">
            Scroll to explore
          </span>
        </div>

        <motion.div style={{ x, width: `${count * 100}%` }} className="flex h-full">
          {PORTFOLIO.map((item) => (
            <div
              key={item.slug}
              className="relative h-full flex-shrink-0"
              style={{ width: `${100 / count}%` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ background: `linear-gradient(160deg, ${item.gradientFrom}99, ${item.gradientTo}99)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-bg/50" />
              <div className="absolute bottom-10 left-6 right-6 sm:left-14 sm:right-14">
                <p className="font-heading text-2xl font-bold text-white sm:text-4xl">{item.title}</p>
                <p className="mt-1 text-sm italic text-white/70 sm:text-base">{item.category}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
