import React from 'react'
import { PRODUCTS } from '../../data/products'
import ProductCard from '../../components/ProductCard'

export default function LaptopsPage() {
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
            💻 Premium laptops • Genuine warranty
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold">Laptops & Notebooks</h1>
          <p className="mt-3 text-gray-300 max-w-xl">From ultraportables to gaming beasts — find the perfect laptop for work, study, or play.</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ Nationwide Delivery</span>
            <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ Genuine Warranty</span>
            <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ WhatsApp Support</span>
          </div>
        </div>
      </section>

      {/* All Laptops */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">All Laptops</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">Shop high-performance laptops for business, gaming and everyday use.</p>
          </div>
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {PRODUCTS.laptops.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison / Tips */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">Which laptop is right for you?</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">Not sure what to get? Here's a quick guide based on your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="w-11 h-11 bg-white/70 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-white/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h3 className="font-semibold text-lg">Business & Productivity</h3>
              <p className="text-sm muted mt-2">ThinkPad X1 Carbon, Dell XPS 13, HP Spectre — built for professionals who need reliability and performance.</p>
            </div>
            <div className="glass-card p-6">
              <div className="w-11 h-11 bg-white/70 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-white/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>
              </div>
              <h3 className="font-semibold text-lg">Gaming</h3>
              <p className="text-sm muted mt-2">ASUS ROG Zephyrus G14 and similar models deliver desktop-grade graphics and high refresh rate displays.</p>
            </div>
            <div className="glass-card p-6">
              <div className="w-11 h-11 bg-white/70 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-white/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h3 className="font-semibold text-lg">Student & Everyday</h3>
              <p className="text-sm muted mt-2">MacBook Air M3 offers incredible battery life and portability — perfect for campus and remote work.</p>
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
            <h3 className="text-2xl md:text-3xl font-bold">Need help choosing?</h3>
            <p className="text-gray-500 mt-3 text-lg">Message us on WhatsApp and we'll help you find the perfect laptop.</p>
            <a href="https://wa.me/263776535909?text=Hi%20GeorgeTech%2C%20I%20need%20help%20choosing%20a%20laptop." target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-6">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}