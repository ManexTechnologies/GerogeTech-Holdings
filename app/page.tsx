import React from 'react'
import { PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'
import { LocationBoxIcon } from '../components/BoxIcons'

export default function Home() {
  const phones = PRODUCTS.smartphones

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#08080C]">
        {/* Ambient glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] rounded-full bg-gtred/8 blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-blue-500/6 blur-[120px]" />
          <div className="absolute top-[30%] right-[20%] w-[20%] h-[20%] rounded-full bg-orange-500/5 blur-[80px]" />
        </div>
        {/* Dot pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10 py-20">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white/60 text-sm mb-6 border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
                <span className="w-2 h-2 rounded-full bg-gtred animate-pulse" />
                Zimbabwe's Trusted Tech & Vehicle Importer
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
                Top Tech.{' '}
                <span className="bg-gradient-to-r from-gtred via-red-400 to-orange-300 bg-clip-text text-transparent">
                  Real Value.
                </span>{' '}
                Delivered to You.
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/45 leading-relaxed max-w-lg">
                Genuine phones, laptops, TVs & vehicle imports — at prices that work for you. Fast nationwide delivery and instant WhatsApp support.
              </p>

              {/* Location */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/60 text-sm border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
                <LocationBoxIcon theme="dark" size="sm" />
                <span>Shop 33, Old Halsteads, Second Street, Mutare</span>
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/smartphones" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gtred text-white font-semibold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,6,0,0.4)]">
                  <span className="absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">Shop Now <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
                </a>
                <a href="/vehicle-importation" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/[0.10] hover:bg-white/[0.06] hover:text-white transition-all duration-300" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
                  Import a Vehicle
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40">
                <span className="inline-flex items-center gap-1.5">&#10003; Genuine & Warrantied</span>
                <span className="inline-flex items-center gap-1.5">&#10003; Nationwide Delivery</span>
              </div>
            </div>

            {/* Hero image */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gtred/15 to-transparent rounded-3xl blur-3xl" />
                <img src="/hero-image.jpg" alt="Top Tech at GeorgeTech Holdings" className="relative w-full max-w-md rounded-3xl shadow-2xl border border-white/[0.08]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SMARTPHONES ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gt-surface via-white to-gt-surface z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />

        <div className="container relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="section-badge bg-accent-blue text-blue-700 mb-3">Top Picks</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Smartphones</h2>
              <p className="text-mutetext mt-2 max-w-lg">Latest flagships and reliable daily drivers — all genuine and warrantied.</p>
            </div>
            <a href="/smartphones" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl hover:scale-105 transition-all duration-300">
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="glass-card p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {phones.slice(0, 3).map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>

          <a href="/smartphones" className="mt-6 sm:hidden inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl transition-all duration-300 w-full justify-center">
            View All Smartphones
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* ===== TABLETS ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gt-surface to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />

        <div className="container relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="section-badge bg-accent-purple text-purple-700 mb-3">Portable Power</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Tablets</h2>
              <p className="text-mutetext mt-2 max-w-lg">Perfect for work, study, and entertainment on the go.</p>
            </div>
            <a href="/tablets" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl hover:scale-105 transition-all duration-300">
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="glass-card p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {PRODUCTS.tablets.slice(0, 3).map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>

          <a href="/tablets" className="mt-6 sm:hidden inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl transition-all duration-300 w-full justify-center">
            View All Tablets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* ===== LAPTOPS ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gt-surface via-white to-gt-surface z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />

        <div className="container relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="section-badge bg-accent-amber text-amber-700 mb-3">Work & Play</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Laptops</h2>
              <p className="text-mutetext mt-2 max-w-lg">From ultrabooks to gaming rigs — find the perfect machine.</p>
            </div>
            <a href="/laptops" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl hover:scale-105 transition-all duration-300">
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="glass-card p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {PRODUCTS.laptops.slice(0, 3).map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>

          <a href="/laptops" className="mt-6 sm:hidden inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl transition-all duration-300 w-full justify-center">
            View All Laptops
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* ===== MORE CATEGORIES CTA ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#08080C]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-gtred/10 blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-500/6 blur-[100px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10 text-center">
          <div className="glass-step p-10 md:p-14 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore More Categories</h3>
            <p className="text-white/40 max-w-md mx-auto mb-8">Find accessories, repair services, and vehicle import options tailored for you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/accessories" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gtred text-white font-semibold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,6,0,0.4)]">
                <span className="absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Browse Accessories</span>
              </a>
              <a href="/cellphone-repair" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/[0.10] hover:bg-white/[0.06] hover:text-white transition-all duration-300" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
                Repair Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/vehicle-importation" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/[0.10] hover:bg-white/[0.06] hover:text-white transition-all duration-300" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
                Import a Vehicle
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
