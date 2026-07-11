'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import CTAButton from './CTAButton'
import { SERVICES } from '@/lib/data/services'

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
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
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
    setMobileServicesOpen(false)
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
            const isActive =
              pathname === link.href ||
              (link.href === '/services' && pathname.startsWith('/services'))

            if (link.href === '/services') {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`group relative flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <span className={i % 2 === 0 ? 'text-brand-blue' : 'text-brand-green'}>
                      {link.label.charAt(0)}
                    </span>
                    {link.label.slice(1)}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        desktopServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full z-50 mt-3 w-[480px] max-w-[90vw] -translate-x-1/2 rounded-2xl border border-white/10 bg-bg-alt/95 p-4 shadow-xl shadow-black/50 backdrop-blur-lg transition-all duration-200 ${
                      desktopServicesOpen
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-white/5"
                        >
                          <span className="inline-flex rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-green/20 p-2 text-brand-green">
                            <service.icon size={16} />
                          </span>
                          <span className="text-sm font-medium text-white/80 transition-colors duration-200 group-hover/item:text-white">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

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
          {LINKS.map((link) => {
            if (link.href === '/services') {
              return (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link href={link.href} className="text-white/80 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services submenu"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="p-1 text-white/60 transition-colors hover:text-white"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="mt-3 flex flex-col gap-3 border-l border-white/10 pl-4">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="text-sm text-white/60 transition-colors hover:text-brand-green"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link key={link.href} href={link.href} className="text-white/80 transition-colors hover:text-white">
                {link.label}
              </Link>
            )
          })}
          <CTAButton href="/contact">Get a Quote</CTAButton>
        </div>
      )}
    </header>
  )
}
