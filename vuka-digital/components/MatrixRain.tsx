'use client'
import { useEffect, useRef } from 'react'

const CHARS =
  'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEFXYZ$+-*/=<>[]{}'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const fontSize = 16
    let columns = 0
    let drops: number[] = []

    const resize = () => {
      const parent = canvas.parentElement
      const width = parent ? parent.clientWidth : window.innerWidth
      const height = parent ? parent.clientHeight : window.innerHeight
      canvas.width = width
      canvas.height = height
      columns = Math.max(1, Math.floor(width / fontSize))
      drops = new Array(columns).fill(0).map(() => Math.random() * -50)
    }
    resize()

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 7, 10, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const y = drops[i] * fontSize
        ctx.fillStyle = Math.random() > 0.95 ? '#ffffff' : '#39FF6A'
        ctx.fillText(char, i * fontSize, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 40)
    const handleResize = () => resize()
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />
}
