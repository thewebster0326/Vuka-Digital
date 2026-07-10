'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function CTAButton({ href, children, variant = 'primary' }: CTAButtonProps) {
  const base =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 font-semibold tracking-wide transition-shadow duration-300'
  const styles =
    variant === 'primary'
      ? 'bg-brand-blue text-bg shadow-[0_0_20px_rgba(46,124,246,0.5)] hover:shadow-[0_0_35px_rgba(46,124,246,0.75)]'
      : 'bg-brand-green text-bg shadow-[0_0_20px_rgba(57,255,106,0.4)] hover:shadow-[0_0_35px_rgba(57,255,106,0.7)]'

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="inline-block"
    >
      <Link href={href} className={`${base} ${styles}`}>
        <span className="relative z-10">{children}</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-[-40%] z-0 w-1/3 -skew-x-12 bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-[260%]"
        />
      </Link>
    </motion.div>
  )
}
