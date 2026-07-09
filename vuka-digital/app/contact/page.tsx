import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact | Vuka Digital',
  description: 'Get in touch with Vuka Digital for a free digital marketing quote.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
