'use client'
import { useEffect, useRef } from 'react'

interface ParticleTextEffectProps {
  lines: string[]
  className?: string
}

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  vx: number
  vy: number
  size: number
  color: string
}

export default function ParticleTextEffect({ lines, className = '' }: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let frame: number

    const build = () => {
      const parent = canvas.parentElement
      width = parent ? parent.clientWidth : window.innerWidth
      if (width === 0) {
        requestAnimationFrame(build)
        return
      }
      const measureCanvas = document.createElement('canvas')
      const measureCtx = measureCanvas.getContext('2d')
      if (!measureCtx) return

      const maxTextWidth = width * 0.92
      let fontSize = Math.min(60, width / 11)
      measureCtx.font = `bold ${fontSize}px sans-serif`
      let widestLine = Math.max(...lines.map((line) => measureCtx.measureText(line).width))
      while (widestLine > maxTextWidth && fontSize > 12) {
        fontSize -= 1
        measureCtx.font = `bold ${fontSize}px sans-serif`
        widestLine = Math.max(...lines.map((line) => measureCtx.measureText(line).width))
      }

      const lineHeight = fontSize * 1.25
      height = lineHeight * lines.length + fontSize * 0.5

      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      const offscreen = document.createElement('canvas')
      offscreen.width = width
      offscreen.height = height
      const offCtx = offscreen.getContext('2d')
      if (!offCtx) return
      offCtx.fillStyle = '#fff'
      offCtx.font = `bold ${fontSize}px sans-serif`
      offCtx.textAlign = 'center'
      offCtx.textBaseline = 'middle'
      lines.forEach((line, i) => {
        offCtx.fillText(line, width / 2, lineHeight * (i + 0.5) + fontSize * 0.15)
      })

      const imageData = offCtx.getImageData(0, 0, width, height)
      const particles: Particle[] = []
      const gap = width < 500 ? 3 : 4
      const pixelSize = gap * 0.85
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const alpha = imageData.data[(Math.floor(y) * width + Math.floor(x)) * 4 + 3]
          if (alpha > 128) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              targetX: x,
              targetY: y,
              vx: 0,
              vy: 0,
              size: pixelSize,
              color: '#FFFFFF',
            })
          }
        }
      }
      particlesRef.current = particles
    }

    build()

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }
    canvas.addEventListener('mousemove', handleMove)
    canvas.addEventListener('mouseleave', handleLeave)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      const mouse = mouseRef.current
      for (const p of particlesRef.current) {
        const dx = p.targetX - p.x
        const dy = p.targetY - p.y
        p.vx += dx * 0.03
        p.vy += dy * 0.03

        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const distSq = mdx * mdx + mdy * mdy
        const repelRadius = 2200
        if (distSq < repelRadius) {
          const dist = Math.sqrt(distSq) || 1
          const force = (repelRadius - distSq) / repelRadius
          p.vx += (mdx / dist) * force * 4
          p.vy += (mdy / dist) * force * 4
        }

        p.vx *= 0.82
        p.vy *= 0.82
        p.x += p.vx
        p.y += p.vy

        ctx.fillStyle = p.color
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size)
      }
      frame = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => build()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frame)
      canvas.removeEventListener('mousemove', handleMove)
      canvas.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [lines])

  return (
    <span className={`block w-full ${className}`}>
      <span className="sr-only">{lines.join(' ')}</span>
      <canvas ref={canvasRef} aria-hidden="true" className="mx-auto block" />
    </span>
  )
}
