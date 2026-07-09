import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'Vuka Digital Website <onboarding@resend.dev>',
      to: 'info@vukadigital.co.za',
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend send failed:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
