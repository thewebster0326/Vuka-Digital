import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'

// lucide-react@1.x removed brand/logo icons (Facebook, Instagram, Linkedin).
// Recreated here as inline SVGs (same path data/stroke style as the old lucide icons)
// so the footer doesn't need an extra icon-pack dependency.
function Facebook({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function Instagram({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function Linkedin({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-alt">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm text-white/60">We design, optimize, and grow brands online.</p>
          <div className="flex gap-4 pt-2">
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-brand-green">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-brand-green">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-brand-green">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-white">Navigate</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/60">
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-white">Services</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/60">
            <li>Web Design</li>
            <li>SEO</li>
            <li>Digital Marketing</li>
            <li>Branding &amp; Identity</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-white">Contact</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-green" />
              30 New Time Square, 30 Ernest Oppenheimer, Bruma, Johannesburg
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="shrink-0 text-brand-green" />
              <a href="tel:+27720373679" className="hover:text-white">072 037 3679</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="shrink-0 text-brand-green" />
              <a href="mailto:info@vuka-digital.co.za" className="hover:text-white">info@vuka-digital.co.za</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Vuka Digital. All rights reserved.
      </div>
    </footer>
  )
}
