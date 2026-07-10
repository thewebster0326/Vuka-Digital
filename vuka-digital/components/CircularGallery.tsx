'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { PORTFOLIO } from '@/lib/data/portfolio'

export default function CircularGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const radius = isMobile ? 130 : 220
  const itemSize = isMobile ? 72 : 96
  const ringSize = isMobile ? 320 : 520
  const count = PORTFOLIO.length

  return (
    <div ref={wrapperRef} className="relative" style={{ height: '250vh' }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        <div className="relative" style={{ height: ringSize, width: ringSize }}>
          <motion.div style={{ rotate }} className="absolute inset-0">
            {PORTFOLIO.map((item, i) => {
              const angle = (360 / count) * i
              return (
                <div
                  key={item.slug}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: itemSize,
                    height: itemSize,
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
                  }}
                >
                  <div className="group relative h-full w-full overflow-hidden rounded-full border-2 border-white/20 shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110">
                    <Image src={item.image} alt={item.title} fill sizes="120px" className="object-cover" />
                    <div
                      className="absolute inset-0 mix-blend-multiply"
                      style={{ background: `linear-gradient(135deg, ${item.gradientFrom}99, ${item.gradientTo}99)` }}
                    />
                  </div>
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
