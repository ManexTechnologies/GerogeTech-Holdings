'use client'

import Link from 'next/link'
import React from 'react'
import { CartCount } from './CartControls'
import { useCatalog } from './catalog'
import { useLikedProductIds } from './productEngagement'

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [likesOpen, setLikesOpen] = React.useState(false)
  const likedIds = useLikedProductIds()
  const catalog = useCatalog()
  const likedProducts = catalog.filter((product) => likedIds.includes(product.id))

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/smartphones', label: 'Smartphones' },
    { href: '/tablets', label: 'Tablets' },
    { href: '/laptops', label: 'Laptops' },
    { href: '/accessories', label: 'Accessories' },
    { href: '/cellphone-repair', label: 'Repair' },
    { href: '/vehicle-importation', label: 'Vehicles' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-black/5" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px) saturate(1.4)', WebkitBackdropFilter: 'blur(20px) saturate(1.4)' }}>
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-white shadow-sm border border-black/5 p-1">
            <img src="/logo.jpeg" alt="GeorgeTech logo" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-bold text-gtblack tracking-tight">GeorgeTech</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-gtred tracking-[0.2em] uppercase -mt-0.5">Holdings</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-black/[0.04] rounded-full p-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-gtblack/70 hover:text-white hover:bg-gtred transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLikesOpen((open) => !open)}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.06] bg-white text-[#071225] shadow-sm transition hover:border-gtred hover:text-gtred"
            aria-label="View liked products"
            aria-expanded={likesOpen}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={likedIds.length ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
            {likedIds.length > 0 && <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gtred px-1 text-[10px] font-extrabold leading-none text-white">{likedIds.length > 99 ? '99+' : likedIds.length}</span>}
          </button>
          <Link
            href="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.06] bg-white text-[#071225] shadow-sm transition hover:border-gtred hover:text-gtred"
            aria-label="View cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
            <CartCount />
          </Link>

          <a
            href="https://whatsapp.com/channel/0029VafHfIHA2pL49V3S291J"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gtred text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:bg-gtreddark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile hamburger - white glassmorphism card */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden relative flex flex-col items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 glass-card ${
              menuOpen
                ? 'border-gtred shadow-lg'
                : 'hover:border-gtred/50 hover:shadow-md'
            }`}
            aria-label="Toggle menu"
          >
            <span className={`block w-4 h-0.5 rounded-full transition-all duration-300 ease-out bg-gtred ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`block w-4 h-0.5 rounded-full mt-[3px] transition-all duration-200 ease-out bg-gtred ${menuOpen ? 'opacity-0 scale-50' : ''}`} />
            <span className={`block w-4 h-0.5 rounded-full mt-[3px] transition-all duration-300 ease-out bg-gtred ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
          </button>
        </div>
      </div>

      {likesOpen && (
        <div className="absolute right-3 top-[calc(100%+0.5rem)] z-50 w-[min(24rem,calc(100vw-1.5rem))] overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
          <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-3">
            <h2 className="text-sm font-extrabold text-[#071225]">Liked products</h2>
            <button type="button" onClick={() => setLikesOpen(false)} className="text-xs font-bold text-[#64748b] hover:text-[#071225]">Close</button>
          </div>
          {likedProducts.length > 0 ? (
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {likedProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} onClick={() => setLikesOpen(false)} className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#f8fafc]">
                  <img src={product.image || '/placeholder.svg'} alt="" className="h-12 w-12 rounded-md bg-[#f1f5f9] object-cover" />
                  <span className="min-w-0 flex-1"><span className="block truncate text-sm font-bold text-[#071225]">{product.name}</span><span className="mt-0.5 block text-xs font-semibold text-[#0087c8]">US${product.price.toFixed(2)}</span></span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="p-5 text-sm leading-6 text-[#64748b]">Products you like will appear here.</p>
          )}
        </div>
      )}

      {/* Mobile nav - white glassmorphism card */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] z-40 flex justify-end pt-6 animate-fadeIn">
          <div
            className="w-[75%] max-w-[280px] mr-4 p-5 flex flex-col gap-1 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(24px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.06)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-center px-4 py-2.5 text-sm font-semibold text-gtred hover:bg-gtred hover:text-white rounded-xl transition-all duration-200 active:scale-95"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gtred/20 flex flex-col items-center">
              <a
                href="https://whatsapp.com/channel/0029VafHfIHA2pL49V3S291J"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center px-5 py-3 bg-gtred text-white font-semibold rounded-xl hover:bg-gtreddark transition active:scale-95 flex items-center justify-center gap-2 shadow-md text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Join WhatsApp Channel
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
