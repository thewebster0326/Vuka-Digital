'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowLeftRight } from 'lucide-react'

const HOVER_SELECTOR = 'a, button, [role="button"], input[type="submit"], .cursor-hover'
const DRAG_SELECTOR = '[data-cursor="drag"]'

type Variant = 'default' | 'hover' | 'drag' | 'press'

const RING_SIZE: Record<Variant, number> = {
  default: 34,
  hover: 60,
  drag: 72,
  press: 20,
}

const RING_STYLE: Record<Variant, { border: string; background: string }> = {
  default: { border: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0)' },
  hover: { border: 'rgba(57,255,106,0.75)', background: 'rgba(57,255,106,0.08)' },
  drag: { border: 'rgba(46,124,246,0.75)', background: 'rgba(46,124,246,0.1)' },
  press: { border: 'rgba(57,255,106,0.9)', background: 'rgba(57,255,106,0.15)' },
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState<Variant>('default')

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const ringX = useSpring(mouseX, { stiffness: 280, damping: 26, mass: 0.5 })
  const ringY = useSpring(mouseY, { stiffness: 280, damping: 26, mass: 0.5 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    // eslint-disable-next-line react-hooks/set-state-in-effect -- deliberate post-hydration flip to avoid an SSR/client markup mismatch
    setEnabled(true)

    let pressed = false

    const resolveVariant = (target: EventTarget | null): Variant => {
      if (pressed) return 'press'
      const el = target as HTMLElement | null
      if (el?.closest(DRAG_SELECTOR)) return 'drag'
      if (el?.closest(HOVER_SELECTOR)) return 'hover'
      return 'default'
    }

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVariant(resolveVariant(e.target))
    }
    const handleDown = (e: MouseEvent) => {
      pressed = true
      setVariant(resolveVariant(e.target))
    }
    const handleUp = (e: MouseEvent) => {
      pressed = false
      setVariant(resolveVariant(e.target))
    }
    const handleLeave = () => setVariant('default')

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    document.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [mouseX, mouseY])

  if (!enabled) return null

  const ring = RING_STYLE[variant]
  const size = RING_SIZE[variant]

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translate: '-50% -50%',
          background: 'linear-gradient(135deg, #2E7CF6, #39FF6A)',
          boxShadow: '0 0 14px rgba(57,255,106,0.8), 0 0 6px rgba(46,124,246,0.7)',
        }}
        animate={{ width: variant === 'press' ? 5 : 7, height: variant === 'press' ? 5 : 7 }}
        transition={{ type: 'spring', stiffness: 700, damping: 32, mass: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[998] flex items-center justify-center rounded-full border backdrop-blur-[1px]"
        style={{
          x: ringX,
          y: ringY,
          translate: '-50% -50%',
          borderColor: ring.border,
          backgroundColor: ring.background,
        }}
        animate={{ width: size, height: size }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      >
        {variant === 'drag' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            <ArrowLeftRight size={16} className="text-brand-blue" />
          </motion.span>
        )}
      </motion.div>
    </>
  )
}
