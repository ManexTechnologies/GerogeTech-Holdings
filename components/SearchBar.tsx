'use client'

import React, { useState, useRef, useEffect } from 'react'

type SearchItem = {
  id: string
  name: string
}

type Props = {
  items: SearchItem[]
  placeholder?: string
  /** WhatsApp number without + */
  whatsappNumber?: string
  /** Text label for the page (used in WhatsApp message), e.g. "smartphones" */
  pageLabel?: string
}

const BUSINESS_NUMBER = '263776535909'

export default function SearchBar({
  items,
  placeholder = 'Search...',
  whatsappNumber = BUSINESS_NUMBER,
  pageLabel = 'product',
}: Props) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const filtered = query.trim()
    ? items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : []

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const waMessage = (itemName?: string) =>
    itemName
      ? `Hi GeorgeTech%2C I am looking for the ${encodeURIComponent(itemName)}. Is it available%3F`
      : `Hi GeorgeTech%2C I am looking for a ${encodeURIComponent(pageLabel)} that I didn't see on your website. Is it available%3F`

  return (
    <div ref={ref} className="relative w-full max-w-xl">
      {/* Search input */}
      <div
        className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 ${
          open && query
            ? 'border-gtred/50 shadow-[0_0_20px_rgba(225,6,0,0.15)] bg-white'
            : 'border-white/[0.10] bg-white/[0.06] hover:border-white/[0.20]'
        }`}
        style={{ backdropFilter: 'blur(16px)' }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/50 shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-white text-sm placeholder:text-white/30 outline-none"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setOpen(false)
            }}
            className="text-white/40 hover:text-white/80 transition-colors shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && query.trim() && (
        <div
          className="absolute top-full mt-2 left-0 right-0 rounded-2xl border border-white/[0.10] overflow-hidden z-50 animate-fadeIn shadow-2xl"
          style={{ background: 'rgba(20,20,30,0.98)', backdropFilter: 'blur(24px)' }}
        >
          {filtered.length > 0 ? (
            <ul className="max-h-64 overflow-y-auto py-2">
              {filtered.slice(0, 12).map((item) => (
                <li key={item.id}>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${waMessage(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 text-sm text-white/80 hover:bg-white/[0.06] hover:text-white transition-colors"
                    onClick={() => {
                      setQuery('')
                      setOpen(false)
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-400 shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="flex-1 text-left">{item.name}</span>
                    <span className="text-[10px] text-white/30 shrink-0">Inquire →</span>
                  </a>
                </li>
              ))}
              {filtered.length > 12 && (
                <li className="px-5 py-2 text-xs text-white/30">
                  +{filtered.length - 12} more &mdash; refine your search
                </li>
              )}
            </ul>
          ) : (
            <div className="px-5 py-6 text-center">
              <p className="text-white/40 text-sm mb-4">
                No results for <span className="text-white/60 font-medium">&ldquo;{query}&rdquo;</span>
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${waMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gtred text-white font-semibold text-sm rounded-xl hover:bg-gtreddark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Inquire on WhatsApp
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
