'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
}

export default function CTAButton({ href, children, variant = 'primary' }: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-8 py-3 font-medium tracking-wide transition-all duration-300'
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-brand-blue to-brand-green text-black shadow-[0_0_20px_rgba(46,124,246,0.5)] hover:shadow-[0_0_35px_rgba(57,255,106,0.65)] hover:scale-105'
      : 'border border-brand-blue/60 text-white hover:border-brand-green hover:shadow-[0_0_20px_rgba(57,255,106,0.35)]'

  return (
    <motion.div whileTap={{ scale: 0.96 }} className="inline-block">
      <Link href={href} className={`${base} ${styles}`}>
        {children}
      </Link>
    </motion.div>
  )
}
