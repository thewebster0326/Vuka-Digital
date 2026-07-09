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
  const [prevPathname, setPrevPathname] = useState(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-bg-alt/90 backdrop-blur-lg transition-all duration-300 ${
          scrolled ? 'px-5 py-3 shadow-lg shadow-black/50' : 'px-6 py-4 shadow-md shadow-black/30'
        }`}
      >
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link, i) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                <span className={i % 2 === 0 ? 'text-brand-blue' : 'text-brand-green'}>
                  {link.label.charAt(0)}
                </span>
                {link.label.slice(1)}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
        </div>
        <div className="hidden md:block">
          <CTAButton href="/contact">Get a Quote</CTAButton>
        </div>
        <button
          aria-label="Toggle menu"
          className="text-white transition-transform duration-200 active:scale-90 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 flex max-w-7xl origin-top animate-[fadeIn_0.2s_ease-out] flex-col gap-4 rounded-2xl border border-white/10 bg-bg-alt/95 px-6 py-6 shadow-lg shadow-black/50 backdrop-blur-lg md:hidden">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/80 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
          <CTAButton href="/contact">Get a Quote</CTAButton>
        </div>
      )}
    </header>
  )
}
