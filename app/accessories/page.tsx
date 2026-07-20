import React from 'react'
import { PRODUCTS } from '../../data/products'
import ProductCard from '../../components/ProductCard'

export default function AccessoriesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gtblack to-black text-white py-16 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gtred/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="glass-dark inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white/80 mb-4">
            🎧 Genuine accessories • Free delivery in Harare
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold">Accessories</h1>
          <p className="mt-3 text-gray-300 max-w-xl">Accessories that complete your setup and keep your devices protected. Audio, charging, keyboards, and more.</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ Genuine Accessories</span>
            <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ Free Delivery in Harare</span>
            <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ Easy Returns</span>
          </div>
        </div>
      </section>

      {/* All Accessories */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">All Accessories</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">From wireless audio to charging hubs — level up your tech experience.</p>
          </div>
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {PRODUCTS.accessories.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">Shop by Category</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">Browse accessories by type to find exactly what you need.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-white/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
              </div>
              <h3 className="font-semibold">Audio</h3>
              <p className="text-sm muted mt-1">Headphones, earbuds & speakers</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-white/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M6 16h.01M10 16h.01M14 16h.01M18 16h.01"/></svg>
              </div>
              <h3 className="font-semibold">Keyboards & Mice</h3>
              <p className="text-sm muted mt-1">Mechanical, wireless & ergonomic</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-white/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="font-semibold">Charging</h3>
              <p className="text-sm muted mt-1">Chargers, car chargers & power banks</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-white/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 className="font-semibold">Hubs & Adapters</h3>
              <p className="text-sm muted mt-1">USB-C hubs, HDMI adapters & more</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-white/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3 className="font-semibold">Pouches & Cases</h3>
              <p className="text-sm muted mt-1">Laptop sleeves, tablet pouches & armbands</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-white/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="font-semibold">Screen & Lens Protection</h3>
              <p className="text-sm muted mt-1">Tempered glass & camera lens protectors</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-white/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83"/><line x1="7" y1="5" x2="4" y2="3"/><line x1="17" y1="5" x2="20" y2="3"/></svg>
              </div>
              <h3 className="font-semibold">Smart Watches</h3>
              <p className="text-sm muted mt-1">Fitness bands, smart watches & wearables</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-white/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
              </div>
              <h3 className="font-semibold">TVs</h3>
              <p className="text-sm muted mt-1">Smart LED TVs from 32" to 55"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold">Looking for something specific?</h3>
            <p className="text-gray-500 mt-3 text-lg">Let us know what accessory you need and we'll source it for you.</p>
            <a href="https://wa.me/263776535909?text=Hi%20GeorgeTech%2C%20I%27m%20looking%20for%20a%20specific%20accessory." target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-6">Request on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}