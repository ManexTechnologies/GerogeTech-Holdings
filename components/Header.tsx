'use client'

import Link from 'next/link'
import React from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/smartphones', label: 'Smartphones' },
    { href: '/tablets', label: 'Tablets' },
    { href: '/laptops', label: 'Laptops' },
    { href: '/accessories', label: 'Accessories' },
    { href: '/cellphone-repair', label: 'Repair' },
    { href: '/vehicle-importation', label: 'Vehicle Importation' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white text-gtblack shadow-md">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-gray-100 p-1">
              <img src="/logo.jpeg" alt="GeorgeTech logo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-bold text-gtblack tracking-tight font-sans">GeorgeTech</span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gtred tracking-[0.2em] sm:tracking-widest uppercase -mt-0.5 font-sans">Holdings</span>
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <div className="bg-gray-100 rounded-full px-1 py-1 flex items-center gap-1 shadow-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 rounded-full text-sm hover:text-white hover:bg-gtred transition whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a className="inline-flex items-center gap-2 btn-primary" href="https://whatsapp.com/channel/0029VafHfIHA2pL49V3S291J" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.9 11.9 0 0 0 12 1C6 1 1 6 1 12c0 2 .5 3.9 1.5 5.6L1 23l5.6-1.5A11.9 11.9 0 0 0 12 23c6 0 11-5 11-11 0-1.9-.46-3.7-1.48-5.02z" fill="#fff"/></svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden relative flex flex-col items-center justify-center w-11 h-11 rounded-xl border-2 transition-all duration-300 ${
              menuOpen
                ? 'border-gtred bg-gtred/10'
                : 'border-gray-300 bg-white hover:border-gtred hover:bg-gtred/5'
            }`}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[3px] bg-gtblack rounded-full transition-all duration-300 ease-out ${menuOpen ? 'rotate-45 translate-y-[5.5px] bg-gtred' : ''}`} />
            <span className={`block w-5 h-[3px] bg-gtblack rounded-full mt-[4px] transition-all duration-200 ease-out ${menuOpen ? 'opacity-0 scale-50' : ''}`} />
            <span className={`block w-5 h-[3px] bg-gtblack rounded-full mt-[4px] transition-all duration-300 ease-out ${menuOpen ? '-rotate-45 -translate-y-[5.5px] bg-gtred' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-md z-40 flex flex-col items-center pt-10 gap-1 animate-fadeIn border-t border-gray-200">
          <div className="w-4/5 max-w-sm mx-auto flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-center px-6 py-3 text-lg font-medium text-gtblack hover:bg-gtred hover:text-white rounded-xl transition-all duration-200 active:scale-95"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="w-4/5 max-w-sm mx-auto mt-6 pt-6 border-t border-gray-200 flex flex-col items-center">
            <a
              href="https://whatsapp.com/channel/0029VafHfIHA2pL49V3S291J"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center px-6 py-3 bg-gtred text-white font-semibold rounded-xl hover:bg-gtreddark transition active:scale-95 flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.9 11.9 0 0 0 12 1C6 1 1 6 1 12c0 2 .5 3.9 1.5 5.6L1 23l5.6-1.5A11.9 11.9 0 0 0 12 23c6 0 11-5 11-11 0-1.9-.46-3.7-1.48-5.02z" fill="#fff"/></svg>
              Join WhatsApp Channel
            </a>
          </div>
        </div>
      )}
    </header>
  )
}