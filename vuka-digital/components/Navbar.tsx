'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import CTAButton from './CTAButton'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-bg/80 py-3 backdrop-blur-lg' : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide text-white/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-brand-blue after:to-brand-green after:transition-all after:duration-300 hover:text-white hover:after:w-full ${
                pathname === link.href ? 'text-white after:w-full' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <CTAButton href="/contact">Get a Quote</CTAButton>
        </div>
        <button
          aria-label="Toggle menu"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-4 border-t border-white/10 bg-bg/95 px-6 py-6 md:hidden">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/80 hover:text-white">
              {link.label}
            </Link>
          ))}
          <CTAButton href="/contact">Get a Quote</CTAButton>
        </div>
      )}
    </header>
  )
}
