import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/favicon.png"
        alt="Vuka Digital"
        width={56}
        height={56}
        priority
        className="h-12 w-12 object-contain sm:h-14 sm:w-14"
      />
      <span className="font-heading text-lg font-bold tracking-wide text-white sm:text-xl">
        VUKA <span className="text-brand-green">DIGITAL</span>
      </span>
    </Link>
  )
}
