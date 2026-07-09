'use client'
import { useEffect, useState } from 'react'

interface TypewriterSegment {
  text: string
  className?: string
}

interface TypewriterProps {
  segments: TypewriterSegment[]
  speed?: number
  startDelay?: number
}

export default function Typewriter({ segments, speed = 40, startDelay = 300 }: TypewriterProps) {
  const fullText = segments.map((s) => s.text).join('')
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let interval: ReturnType<typeof setInterval>
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= fullText.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [fullText, speed, startDelay])

  const offsets: number[] = []
  segments.reduce((acc, seg) => {
    offsets.push(acc)
    return acc + seg.text.length
  }, 0)

  return (
    <>
      {segments.map((seg, idx) => {
        const segStart = offsets[idx]
        const visibleLen = Math.max(0, Math.min(seg.text.length, count - segStart))
        return (
          <span key={idx} className={seg.className}>
            {seg.text.slice(0, visibleLen)}
          </span>
        )
      })}
      <span
        aria-hidden
        className={`ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-brand-green ${
          done ? 'animate-pulse' : ''
        }`}
      />
    </>
  )
}
