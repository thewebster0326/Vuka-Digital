'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false })

export default function Hero3DWrapper() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile) {
    return (
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-green/30 blur-3xl" />
      </div>
    )
  }

  return <Hero3D />
}
