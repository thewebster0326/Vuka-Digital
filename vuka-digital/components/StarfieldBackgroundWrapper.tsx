'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const StarfieldBackground = dynamic(() => import('./StarfieldBackground'), { ssr: false })

export default function StarfieldBackgroundWrapper() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return <StarfieldBackground simplified={isMobile} />
}
