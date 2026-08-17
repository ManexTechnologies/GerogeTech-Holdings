'use client'

import React from 'react'
import { PRODUCTS } from '../../data/products'
import ProductCard from '../../components/ProductCard'
import { LocationBoxIcon } from '../../components/BoxIcons'
import SearchBar from '../../components/SearchBar'
import CategoryProductGrid from '../../components/CategoryProductGrid'

const ALL_LAPTOPS = PRODUCTS.laptops.map(l => ({ id: l.id, name: l.name }))

export default function LaptopsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-[#08080C]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gtred/6 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="section-badge bg-accent-amber/20 text-amber-300 border border-amber-500/20 mb-4">Laptops & Notebooks</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Premium Laptops</h1>
            <p className="text-white/40 text-base md:text-lg max-w-lg">From ultraportables to gaming beasts — find the perfect laptop for work, study, or play.</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/50">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>&#10003; Nationwide Delivery</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>&#10003; Genuine Warranty</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>&#10003; WhatsApp Support</span>
          </div>

          <div className="mt-6">
            <SearchBar
              items={ALL_LAPTOPS}
              placeholder="Search laptops..."
              pageLabel="laptop"
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

      {/* All Laptops */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gt-surface via-white to-gt-surface z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gtblack">All Laptops</h2>
            <p className="text-muted mt-2 max-w-lg mx-auto">Shop high-performance laptops for business, gaming and everyday use.</p>
          </div>
          <div className="glass-card p-4 sm:p-6 md:p-8">
            <CategoryProductGrid category="laptops" />
          </div>
        </div>
      </section>

      {/* Comparison / Tips */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gt-surface to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Which laptop is right for you?</h2>
            <p className="text-muted mt-2 max-w-lg mx-auto">Not sure what to get? Here's a quick guide based on your needs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Business & Productivity', desc: 'ThinkPad X1 Carbon, Dell XPS 13, HP Spectre — built for professionals who need reliability and performance.', icon: <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>, color: 'text-blue-600' },
              { title: 'Gaming', desc: 'ASUS ROG Zephyrus G14 and similar models deliver desktop-grade graphics and high refresh rate displays.', icon: <line x1="6" y1="11" x2="10" y2="11"/>, color: 'text-red-600' },
              { title: 'Student & Everyday', desc: 'MacBook Air M3 offers incredible battery life and portability — perfect for campus and remote work.', icon: <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>, color: 'text-emerald-600' },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 group">
                <div className="w-11 h-11 bg-white/70 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-white/40">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={item.color}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gtblack mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
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
            <h3 className="text-2xl md:text-3xl font-bold text-gtblack mb-3">Need help choosing?</h3>
            <p className="text-muted mb-6 max-w-md mx-auto">Message us on WhatsApp and we'll help you find the perfect laptop.</p>
            <a href="https://wa.me/263776535909?text=Hi%20GeorgeTech%2C%20I%20need%20help%20choosing%20a%20laptop." target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
