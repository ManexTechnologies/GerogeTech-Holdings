import React from 'react'
import { PRODUCTS } from '../../data/products'
import ProductCard from '../../components/ProductCard'

export default function TabletsPage() {
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
            📱 Premium tablets • Genuine warranty
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold">Tablets</h1>
          <p className="mt-3 text-gray-300 max-w-xl">Premium tablets for work, study and entertainment in Zimbabwe. From iPads to Galaxy Tabs.</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ Genuine Products</span>
            <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ Free Stylus with Select Models</span>
            <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ Nationwide Delivery</span>
          </div>
        </div>
      </section>

      {/* All Tablets */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">All Tablets</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">Find the ideal tablet for your needs — from casual browsing to professional creativity.</p>
          </div>
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {PRODUCTS.tablets.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">What will you use your tablet for?</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">Not sure which tablet suits your lifestyle? Here's a quick guide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="w-11 h-11 bg-white/70 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-white/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </div>
              <h3 className="font-semibold text-lg">Study & Note-taking</h3>
              <p className="text-sm muted mt-2">iPad Air M2 with Apple Pencil support is perfect for students taking digital notes and annotating PDFs.</p>
            </div>
            <div className="glass-card p-6">
              <div className="w-11 h-11 bg-white/70 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-white/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              </div>
              <h3 className="font-semibold text-lg">Entertainment</h3>
              <p className="text-sm muted mt-2">Samsung Galaxy Tab A9+ with its wide display and quad speakers is ideal for movies, shows, and social media.</p>
            </div>
            <div className="glass-card p-6">
              <div className="w-11 h-11 bg-white/70 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-white/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="font-semibold text-lg">Creative Work</h3>
              <p className="text-sm muted mt-2">Huawei MatePad 11.5 with PaperMatte display gives a paper-like feel for sketching and design work.</p>
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
            <h3 className="text-2xl md:text-3xl font-bold">Want to see more options?</h3>
            <p className="text-gray-500 mt-3 text-lg">Contact us on WhatsApp and we'll help you pick the right tablet.</p>
            <a href="https://wa.me/263776535909?text=Hi%20GeorgeTech%2C%20I%20want%20to%20know%20more%20about%20your%20tablets." target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-6">Ask on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}