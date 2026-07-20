import React from 'react'
import { PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const phones = PRODUCTS.smartphones

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] z-0" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] rounded-full bg-gradient-to-br from-gtred/20 to-transparent blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-blue-500/15 to-transparent blur-[100px]" />
          <div className="absolute top-[30%] right-[15%] w-[25%] h-[25%] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-[80px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="container relative z-10 py-20">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1 max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white/80 text-sm mb-6 border border-white/10">
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
              <p className="mt-4 text-lg text-white/60 leading-relaxed">Genuine phones, laptops, TVs & vehicle imports — at prices that work for you. Fast nationwide delivery and instant WhatsApp support.</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/smartphones" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gtred text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,6,0,0.4)]">
                  <span className="absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Shop Now</span>
                </a>
                <a href="/vehicle-importation" className="inline-flex items-center gap-2 px-8 py-4 glass text-white/80 font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300">
                  Import a Vehicle
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                {[
                  { icon: <rect x="1" y="1" width="22" height="22" rx="3" fill="#E10600" />, label: 'Genuine & Warrantied' },
                  { icon: <rect x="1" y="1" width="22" height="22" rx="3" stroke="#fff" strokeWidth="1.2" fill="none" />, label: 'Nationwide Delivery' }
                ].map((item, i) => (
                  <div key={i} className="inline-flex items-center gap-2 text-white/60">
                    <div className="w-7 h-7 glass rounded flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">{item.icon}</svg>
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gtred/20 to-transparent rounded-2xl blur-3xl" />
                <img src="/hero-image.jpg" alt="Top Tech at GeorgeTech Holdings" className="relative w-full max-w-md rounded-2xl shadow-2xl border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SMARTPHONES ===== */}
      <section id="smartphones" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gtgrey to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0" />
        <div className="container relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">Top Picks</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Smartphones</h2>
              <p className="text-mutetext mt-2">Latest flagships and reliable daily drivers — all genuine and warrantied.</p>
            </div>
            <a href="/smartphones" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl hover:scale-105 transition-all duration-300">
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-6 mb-6 text-sm text-mutetext">
              <div className="inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#E10600" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 9H22L17 14L19 22L12 17L5 22L7 14L2 9H9L12 2Z"/></svg>
                <span>12 people viewing this right now</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span>Rated 4.8 (120)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {phones.slice(0,3).map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>

          <a href="/smartphones" className="mt-6 md:hidden inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl transition-all duration-300">
            View All Smartphones
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* ===== TABLETS ===== */}
      <section id="tablets" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0" />
        <div className="container relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-3">Portable Power</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Tablets</h2>
              <p className="text-mutetext mt-2">Perfect for work, study, and entertainment on the go.</p>
            </div>
            <a href="/tablets" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl hover:scale-105 transition-all duration-300">
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {PRODUCTS.tablets.slice(0,3).map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>
          <a href="/tablets" className="mt-6 md:hidden inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl transition-all duration-300">
            View All Tablets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* ===== LAPTOPS ===== */}
      <section id="laptops" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gtgrey to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0" />
        <div className="container relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-3">Work & Play</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Laptops</h2>
              <p className="text-mutetext mt-2">From ultrabooks to gaming rigs — find the perfect machine.</p>
            </div>
            <a href="/laptops" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl hover:scale-105 transition-all duration-300">
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {PRODUCTS.laptops.slice(0,3).map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} glass />
              ))}
            </div>
          </div>
          <a href="/laptops" className="mt-6 md:hidden inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl transition-all duration-300">
            View All Laptops
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* ===== MORE CATEGORIES CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] z-0" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-gradient-to-br from-gtred/10 to-transparent blur-[100px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-[80px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="container relative z-10">
          <div className="glass-step p-10 md:p-14 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore More Categories</h3>
            <p className="text-white/50 max-w-lg mx-auto mb-8">Find accessories, repair services, and vehicle import options tailored for you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/accessories" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gtred text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,6,0,0.4)]">
                <span className="absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Browse Accessories</span>
              </a>
              <a href="/cellphone-repair" className="inline-flex items-center gap-2 px-8 py-4 glass text-white/80 font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300">
                Repair Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/vehicle-importation" className="inline-flex items-center gap-2 px-8 py-4 glass text-white/80 font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300">
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