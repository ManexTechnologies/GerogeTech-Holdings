'use client'

import React from 'react'
import { createClient } from '../lib/supabase/client'

export default function NewsletterForm({ variant = 'footer' }: { variant?: 'footer' | 'promo' }) {
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  async function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalizedEmail = email.trim().toLowerCase()
    if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
      setMessage('Enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    setMessage('')
    try {
      const { error } = await createClient()
        .from('newsletter_subscribers')
        .insert({ email: normalizedEmail })

      if (error && error.code !== '23505') {
        throw error
      }

      setEmail('')
      setMessage(error?.code === '23505'
        ? 'This email address is already subscribed.'
        : 'You are subscribed. Watch your inbox for new arrivals and offers.')
    } catch {
      setMessage('We could not save your subscription. Please try again shortly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === 'promo') {
    return (
      <form onSubmit={subscribe} className="w-full max-w-xl">
        <label className="sr-only" htmlFor="newsletter-promo-email">Email address</label>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-2 [&>button]:h-12 [&>button]:w-full sm:[&>button]:w-auto">
          <input id="newsletter-promo-email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" inputMode="email" required placeholder="Enter your email address" className="h-[3.25rem] w-full min-w-0 flex-1 rounded-xl border border-white/20 bg-white/[0.10] px-4 text-base text-white shadow-inner shadow-black/20 outline-none transition placeholder:text-white/45 hover:border-white/35 focus:border-[#67d7f2] focus:bg-white/[0.14] focus:ring-4 focus:ring-[#67d7f2]/20 sm:h-12 sm:text-sm" />
          <button type="submit" disabled={isSubmitting} className="h-12 rounded-lg bg-gtred px-6 text-sm font-extrabold text-white transition hover:bg-gtreddark disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? 'Joining…' : 'Get updates'}</button>
        </div>
        <p className="mt-3 text-center text-xs leading-5 text-white/55 sm:text-left">No spam. Just new arrivals, special pricing, and useful tech updates.</p>
        {message && <p className="mt-3 rounded-lg bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white sm:text-left" role="status">{message}</p>}
      </form>
    )
  }

  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">Stay Updated</h4>
      <p className="mb-3 text-sm leading-5 text-white/55">New stock, special offers, and useful tech updates.</p>
      <form onSubmit={subscribe} className="flex flex-col gap-3 sm:flex-row sm:gap-2 [&>button]:h-12 [&>button]:w-full sm:[&>button]:w-auto">
        <label className="sr-only" htmlFor="newsletter-footer-email">Email address</label>
        <input id="newsletter-footer-email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" inputMode="email" required placeholder="Email address" className="h-[3.25rem] w-full min-w-0 flex-1 rounded-xl border border-white/15 bg-white/[0.10] px-4 text-base text-white shadow-inner shadow-black/10 outline-none transition placeholder:text-white/45 focus:border-gtred focus:bg-white/[0.14] focus:ring-4 focus:ring-gtred/25 sm:h-12 sm:text-sm" />
        <button type="submit" disabled={isSubmitting} className="rounded-lg bg-gtred px-3 py-2 text-sm font-bold text-white hover:bg-gtreddark disabled:cursor-not-allowed disabled:opacity-70" aria-label="Subscribe to newsletter">{isSubmitting ? 'Joining…' : 'Join'}</button>
      </form>
      {message && <p className="mt-3 rounded-lg bg-white/[0.06] px-3 py-2 text-xs leading-5 text-white/75" role="status">{message}</p>}
    </div>
  )
}
