'use client'

import React from 'react'
import { PRODUCTS } from '../../data/products'
import ProductCard from '../../components/ProductCard'
import { LocationBoxIcon } from '../../components/BoxIcons'
import SearchBar from '../../components/SearchBar'

const ALL_ACCESSORIES = PRODUCTS.accessories.map(a => ({ id: a.id, name: a.name }))

const categoryIcons: Record<string, React.ReactNode> = {
  Audio: <g><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" /><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></g>,
  'Keyboards & Mice': <g><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M6 16h.01M10 16h.01M14 16h.01M18 16h.01" /></g>,
  Charging: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  'Hubs & Adapters': <g><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></g>,
  'Pouches & Cases': <g><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></g>,
  'Screen Protection': <g><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></g>,
  'Smart Watches': <g><circle cx="12" cy="12" r="7" /><polyline points="12 9 12 12 13.5 13.5" /><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83" /><line x1="7" y1="5" x2="4" y2="3" /><line x1="17" y1="5" x2="20" y2="3" /></g>,
  TVs: <g><rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></g>,
}

const categoryColors: Record<string, string> = {
  Audio: 'text-rose-500',
  'Keyboards & Mice': 'text-blue-500',
  Charging: 'text-amber-500',
  'Hubs & Adapters': 'text-cyan-500',
  'Pouches & Cases': 'text-purple-500',
  'Screen Protection': 'text-green-500',
  'Smart Watches': 'text-indigo-500',
  TVs: 'text-orange-500',
}

const categories = [
  { label: 'Audio', sub: 'Headphones, earbuds & speakers' },
  { label: 'Keyboards & Mice', sub: 'Mechanical, wireless & ergonomic' },
  { label: 'Charging', sub: 'Chargers, car chargers & power banks' },
  { label: 'Hubs & Adapters', sub: 'USB-C hubs, HDMI adapters & more' },
  { label: 'Pouches & Cases', sub: 'Laptop sleeves, tablet pouches & armbands' },
  { label: 'Screen Protection', sub: 'Tempered glass & camera lens protectors' },
  { label: 'Smart Watches', sub: 'Fitness bands, smart watches & wearables' },
  { label: 'TVs', sub: 'Smart LED TVs from 32" to 55"' },
]

export default function AccessoriesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-[#08080C]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gtred/6 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="section-badge bg-accent-green/20 text-green-300 border border-green-500/20 mb-4">Accessories</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Tech Accessories</h1>
            <p className="text-white/40 text-base md:text-lg max-w-lg">From wireless audio to charging hubs — level up your tech experience.</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/50">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>&#10003; Genuine Products</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>&#10003; Fast Delivery</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>&#10003; WhatsApp Support</span>
          </div>

          <div className="mt-6">
            <SearchBar
              items={ALL_ACCESSORIES}
              placeholder="Search accessories..."
              pageLabel="accessory"
            />
          </div>

          <div className="mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/60 text-sm border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
              <LocationBoxIcon theme="dark" size="sm" />
              <span>Shop 33, Old Halsteads, Second Street, Mutare</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Accessories */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gt-surface via-white to-gt-surface z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gtblack">All Accessories</h2>
            <p className="text-muted mt-2 max-w-lg mx-auto">From wireless audio to charging hubs — level up your tech experience.</p>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {PRODUCTS.accessories.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gt-surface to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Shop by Category</h2>
            <p className="text-muted mt-2 max-w-lg mx-auto">Browse accessories by type to find exactly what you need.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {categories.map((cat) => (
              <div key={cat.label} className="glass-card p-4 text-center group cursor-default">
                <div className={`w-10 h-10 mx-auto mb-3 bg-white/60 rounded-xl flex items-center justify-center shadow-sm border border-white/40 ${categoryColors[cat.label]}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {categoryIcons[cat.label]}
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-gtblack">{cat.label}</h3>
                <p className="text-xs text-muted mt-1">{cat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gt-surface to-white z-0" />
        <div className="container relative z-10">
          <div className="glass-card p-10 md:p-14 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gtblack mb-3">Looking for something specific?</h3>
            <p className="text-muted mb-6 max-w-md mx-auto">Let us know what accessory you need and we'll source it for you.</p>
            <a href="https://wa.me/263776535909?text=Hi%20GeorgeTech%2C%20I%27m%20looking%20for%20a%20specific%20accessory." target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Request on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
