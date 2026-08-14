'use client'

import React from 'react'
import { PRODUCTS } from '../../data/products'
import ProductCard from '../../components/ProductCard'
import { LocationBoxIcon } from '../../components/BoxIcons'
import SearchBar from '../../components/SearchBar'

const ALL_TABLETS = PRODUCTS.tablets.map(t => ({ id: t.id, name: t.name }))

export default function TabletsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-[#08080C]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gtred/6 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="section-badge bg-accent-purple/20 text-purple-300 border border-purple-500/20 mb-4">Tablets</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Powerful Tablets</h1>
            <p className="text-white/40 text-base md:text-lg max-w-lg">Premium tablets for work, study and entertainment. From iPads to Galaxy Tabs.</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/50">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>&#10003; Genuine Products</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>&#10003; Free Stylus with Select Models</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>&#10003; Nationwide Delivery</span>
          </div>

          <div className="mt-6">
            <SearchBar
              items={ALL_TABLETS}
              placeholder="Search tablets..."
              pageLabel="tablet"
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

      {/* All Tablets */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gt-surface via-white to-gt-surface z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gtblack">All Tablets</h2>
            <p className="text-muted mt-2 max-w-lg mx-auto">Find the ideal tablet for your needs — from casual browsing to professional creativity.</p>
          </div>
          <div className="glass-card p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {PRODUCTS.tablets.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gt-surface to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gtblack">What will you use your tablet for?</h2>
            <p className="text-muted mt-2 max-w-lg mx-auto">Not sure which tablet suits your lifestyle? Here's a quick guide.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Study & Note-taking', desc: 'iPad Air M2 with Apple Pencil support is perfect for students taking digital notes and annotating PDFs.', icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>, color: 'text-blue-600' },
              { title: 'Entertainment', desc: 'Samsung Galaxy Tab A9+ with its wide display and quad speakers is ideal for movies, shows, and social media.', icon: <polygon points="23 7 16 12 23 17 23 7"/>, color: 'text-purple-600' },
              { title: 'Creative Work', desc: 'Huawei MatePad 11.5 with PaperMatte display gives a paper-like feel for sketching and design work.', icon: <circle cx="12" cy="12" r="10"/>, color: 'text-orange-600' },
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
            <h3 className="text-2xl md:text-3xl font-bold text-gtblack mb-3">Want to see more options?</h3>
            <p className="text-muted mb-6 max-w-md mx-auto">Contact us on WhatsApp and we will help you pick the right tablet.</p>
            <a href="https://wa.me/263776535909?text=Hi%20GeorgeTech%2C%20I%20want%20to%20know%20more%20about%20your%20tablets." target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
