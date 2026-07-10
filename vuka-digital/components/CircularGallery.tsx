'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { PORTFOLIO } from '@/lib/data/portfolio'

export default function CircularGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const counterRotate = useTransform(rotate, (r) => -r)

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const radius = isMobile ? 120 : 220
  const itemSize = isMobile ? 64 : 96
  const ringSize = isMobile ? 320 : 560
  const count = PORTFOLIO.length

  return (
    <div ref={wrapperRef} className="relative" style={{ height: '250vh' }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        <div className="relative" style={{ height: ringSize, width: ringSize }}>
          <motion.div style={{ rotate }} className="absolute inset-0">
            {PORTFOLIO.map((item, i) => {
              const angleRad = (2 * Math.PI * i) / count - Math.PI / 2
              const x = Math.cos(angleRad) * radius
              const y = Math.sin(angleRad) * radius
              return (
                <div
                  key={item.slug}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <motion.div
                    style={{ rotate: counterRotate }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div
                      className="group relative overflow-hidden rounded-full border-2 border-white/20 shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110"
                      style={{ width: itemSize, height: itemSize }}
                    >
                      <Image src={item.image} alt={item.title} fill sizes="120px" className="object-cover" />
                      <div
                        className="absolute inset-0 mix-blend-multiply"
                        style={{ background: `linear-gradient(135deg, ${item.gradientFrom}99, ${item.gradientTo}99)` }}
                      />
                    </div>
                    <div className="flex max-w-[110px] flex-col items-center text-center">
                      <span className="truncate text-[11px] font-semibold text-white sm:text-xs">
                        {item.title}
                      </span>
                      <span className="truncate text-[9px] uppercase tracking-wide text-brand-green sm:text-[10px]">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-heading text-lg font-semibold text-white sm:text-2xl">Our Work</span>
            <span className="mt-1 text-xs text-white/50">Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  )
}
