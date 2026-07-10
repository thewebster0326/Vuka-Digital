'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type Matter from 'matter-js'

interface Badge {
  label: string
  href: string
  highlight?: boolean
}

const BADGES: Badge[] = [
  { label: 'Web Design', href: '/services/web-design' },
  { label: 'SEO', href: '/services/seo' },
  { label: 'Branding', href: '/services/branding-identity' },
  { label: 'Social Media', href: '/services/social-media-management' },
  { label: 'Paid Ads', href: '/services/paid-ads' },
  { label: 'Content', href: '/services', highlight: true },
  { label: 'Strategy', href: '/services' },
  { label: 'Copywriting', href: '/services' },
  { label: 'Analytics', href: '/services' },
]

export default function GravityBadges() {
  const containerRef = useRef<HTMLDivElement>(null)
  const badgeRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    let cleanup = () => {}

    import('matter-js').then((mod) => {
      if (cancelled) return
      const M = (mod.default ?? mod) as typeof Matter
      const container = containerRef.current
      if (!container) return

      const width = container.clientWidth
      const height = container.clientHeight

      const engine = M.Engine.create()
      engine.gravity.y = 1

      const elements = badgeRefs.current.filter((el): el is HTMLAnchorElement => !!el)
      const bodies = elements.map((el, i) => {
        const w = el.offsetWidth
        const h = el.offsetHeight
        return M.Bodies.rectangle(Math.random() * (width - w) + w / 2, -200 - i * 140, w, h, {
          restitution: 0.45,
          friction: 0.35,
          angle: (Math.random() - 0.5) * 0.6,
          chamfer: { radius: Math.min(10, h / 2 - 1) },
        })
      })

      const ground = M.Bodies.rectangle(width / 2, height + 25, width * 2, 50, { isStatic: true })
      const leftWall = M.Bodies.rectangle(-25, height / 2, 50, height * 2, { isStatic: true })
      const rightWall = M.Bodies.rectangle(width + 25, height / 2, 50, height * 2, {
        isStatic: true,
      })

      M.World.add(engine.world, [...bodies, ground, leftWall, rightWall])

      const runner = M.Runner.create()
      M.Runner.run(runner, engine)

      let frame: number
      const update = () => {
        bodies.forEach((body, i) => {
          const el = elements[i]
          if (el) {
            el.style.transform = `translate(${body.position.x - el.offsetWidth / 2}px, ${
              body.position.y - el.offsetHeight / 2
            }px) rotate(${body.angle}rad)`
          }
        })
        frame = requestAnimationFrame(update)
      }
      frame = requestAnimationFrame(update)
      setReady(true)

      cleanup = () => {
        cancelAnimationFrame(frame)
        M.Runner.stop(runner)
        M.World.clear(engine.world, false)
        M.Engine.clear(engine)
      }
    })

    return () => {
      cancelled = true
      cleanup()
    }
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-x-0 bottom-0 h-64 overflow-hidden">
      {BADGES.map((badge, i) => (
        <Link
          key={badge.label}
          href={badge.href}
          ref={(el) => {
            badgeRefs.current[i] = el
          }}
          className={`pointer-events-auto absolute left-0 top-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium shadow-lg transition-opacity duration-500 hover:brightness-110 ${
            ready ? 'opacity-100' : 'opacity-0'
          } ${badge.highlight ? 'bg-brand-green text-bg' : 'bg-white/10 text-white backdrop-blur-sm'}`}
          style={{ willChange: 'transform' }}
        >
          {badge.label}
        </Link>
      ))}
    </div>
  )
}
