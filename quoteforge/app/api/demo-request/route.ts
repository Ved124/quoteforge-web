import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
)

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL!

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, company, city } = body

    // ── Validation ─────────────────────────────────────
    if (!name || !phone || !company || !city) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Enter a valid 10-digit Indian mobile number' },
        { status: 400 }
      )
    }

    // ── 1. Log to Google Sheet ──────────────────────────
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, company, city }),
    })

    // ── 2. Send WhatsApp via Twilio ─────────────────────
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM!,
      to: process.env.TWILIO_WHATSAPP_TO!,
      body:
        `🔥 *New QuoteForge Demo Request!*\n\n` +
        `👤 Name: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `🏭 Company: ${company}\n` +
        `📍 City: ${city}\n\n` +
        `⏰ ${new Date().toLocaleString('en-IN')}\n\n` +
        `Call them back within 24 hours! 🚀`
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Demo request error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
