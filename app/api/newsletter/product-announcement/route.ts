import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'

const resendEndpoint = 'https://api.resend.com/emails/batch'

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]!))
}

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return NextResponse.json({ message: 'Resend is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL to the server environment.' }, { status: 503 })
  }

  const { productId } = await request.json().catch(() => ({})) as { productId?: string }
  if (!productId) return NextResponse.json({ message: 'A product ID is required.' }, { status: 400 })

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ message: 'Sign in as an administrator to send announcements.' }, { status: 401 })

  const { data: admin } = await supabase.from('admin_users').select('user_id').eq('user_id', user.id).maybeSingle()
  if (!admin) return NextResponse.json({ message: 'Only administrators can send newsletter announcements.' }, { status: 403 })

  const { data: product, error: productError } = await supabase.from('products').select('id,name,price,note').eq('id', productId).single()
  if (productError || !product) return NextResponse.json({ message: 'Product not found.' }, { status: 404 })

  const { data: subscribers, error: subscriberError } = await supabase.from('newsletter_subscribers').select('email')
  if (subscriberError) return NextResponse.json({ message: subscriberError.message }, { status: 500 })
  if (!subscribers?.length) return NextResponse.json({ sent: 0 })

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin).replace(/\/$/, '')
  const productUrl = `${siteUrl}/product/${encodeURIComponent(product.id)}`
  const productName = escapeHtml(product.name)
  const description = product.note ? `<p style="color:#475569;line-height:1.5">${escapeHtml(product.note)}</p>` : ''
  const price = Number(product.price).toFixed(2)
  const html = `<main style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;color:#071225"><p style="color:#0087c8;font-weight:bold">GEORGETECH HOLDINGS</p><h1>New arrival: ${productName}</h1>${description}<p style="font-size:20px;font-weight:bold">US$${price}</p><p><a href="${productUrl}" style="display:inline-block;background:#dc2626;color:#fff;padding:12px 18px;border-radius:6px;text-decoration:none;font-weight:bold">View product</a></p></main>`
  const subject = `New arrival: ${product.name}`
  const emails = subscribers.map(({ email }) => ({ from: process.env.RESEND_FROM_EMAIL!, to: [email], subject, html, text: `New arrival: ${product.name}\nUS$${price}\n${productUrl}` }))

  for (let index = 0; index < emails.length; index += 100) {
    const response = await fetch(resendEndpoint, {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `product-${product.id}-${index}` },
      body: JSON.stringify(emails.slice(index, index + 100)),
    })
    if (!response.ok) {
      const payload = await response.json().catch(() => ({})) as { message?: string; error?: { message?: string } }
      return NextResponse.json({ message: payload.error?.message || payload.message || 'Resend could not send the announcement.' }, { status: 502 })
    }
  }

  return NextResponse.json({ sent: subscribers.length })
}
