'use client'
import { FormEvent, useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import AmbientGlow from '@/components/AmbientGlow'
import StarfieldBackgroundWrapper from '@/components/StarfieldBackgroundWrapper'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactPageClient() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="relative overflow-hidden px-6 pb-24 pt-40">
      <StarfieldBackgroundWrapper />
      <AmbientGlow />
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Wake Up Your Brand"
          description="Tell us about your project and we will get back to you within one business day."
        />
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-2">
        <Reveal>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-white/70">Name</label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-brand-green"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-white/70">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-brand-green"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-white/70">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-brand-green"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-8 py-3 font-medium text-black shadow-[0_0_20px_rgba(46,124,246,0.5)] transition-all hover:shadow-[0_0_35px_rgba(57,255,106,0.65)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && (
            <p className="text-sm text-brand-green">Message sent. We will be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again or call us directly.
            </p>
          )}
        </form>
        </Reveal>

        <Reveal delay={0.1}>
        <div className="flex flex-col gap-6">
          <a
            href="tel:+27720373679"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50"
          >
            <Phone className="text-brand-blue" size={24} />
            <div>
              <p className="font-heading text-white">Call Us</p>
              <p className="text-sm text-white/60">072 037 3679</p>
            </div>
          </a>
          <a
            href="https://wa.me/27728331515"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-green/50"
          >
            <MessageCircle className="text-brand-green" size={24} />
            <div>
              <p className="font-heading text-white">WhatsApp</p>
              <p className="text-sm text-white/60">+27 72 833 1515</p>
            </div>
          </a>
          <a
            href="mailto:info@vukadigital.co.za"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50"
          >
            <Mail className="text-brand-blue" size={24} />
            <div>
              <p className="font-heading text-white">Email</p>
              <p className="text-sm text-white/60">info@vukadigital.co.za</p>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <MapPin className="text-brand-green" size={24} />
            <div>
              <p className="font-heading text-white">Visit Us</p>
              <p className="text-sm text-white/60">30 New Time Square, 30 Ernest Oppenheimer, Bruma, Johannesburg</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Vuka Digital location map"
              src="https://www.google.com/maps?q=30+Ernest+Oppenheimer+Ave,+Bruma,+Johannesburg&output=embed"
              className="h-64 w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
        </Reveal>
      </div>
    </div>
  )
}
