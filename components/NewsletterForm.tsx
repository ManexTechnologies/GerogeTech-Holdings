'use client'

import React from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalizedEmail = email.trim().toLowerCase()
    if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
      setMessage('Enter a valid email address.')
      return
    }

    const key = 'georgetech-newsletter-v1'
    let subscribers: string[] = []
    try {
      const existing = JSON.parse(window.localStorage.getItem(key) || '[]')
      subscribers = Array.isArray(existing) ? existing : []
    } catch {
      subscribers = []
    }
    if (!subscribers.includes(normalizedEmail)) {
      window.localStorage.setItem(key, JSON.stringify([...subscribers, normalizedEmail]))
    }
    setEmail('')
    setMessage('You are subscribed. Watch your inbox for new arrivals and offers.')
  }

  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">Stay Updated</h4>
      <p className="mb-3 text-sm leading-5 text-white/55">New stock, special offers, and useful tech updates.</p>
      <form onSubmit={subscribe} className="flex gap-2">
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input id="newsletter-email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="Email address" className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.08] px-3 py-2 text-sm text-white placeholder:text-white/35 outline-none focus:border-gtred" />
        <button type="submit" className="rounded-lg bg-gtred px-3 py-2 text-sm font-bold text-white hover:bg-gtreddark" aria-label="Subscribe to newsletter">Join</button>
      </form>
      {message && <p className="mt-2 text-xs leading-5 text-white/60" role="status">{message}</p>}
    </div>
  )
}
