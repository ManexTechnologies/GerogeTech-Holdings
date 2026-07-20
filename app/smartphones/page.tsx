'use client'

import React from 'react'
import { PHONE_BRANDS } from '../../data/products'
import ProductCard from '../../components/ProductCard'
import { LocationBoxIcon } from '../../components/BoxIcons'
import SearchBar from '../../components/SearchBar'

const ALL_PHONES = PHONE_BRANDS.flatMap(b => b.phones.map(p => ({ id: p.id, name: p.name })))

export default function SmartphonesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-[#08080C]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-gtred/6 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="section-badge bg-accent-blue/20 text-blue-300 border border-blue-500/20 mb-4">Smartphones</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Find Your Perfect Phone</h1>
            <p className="text-white/40 text-base md:text-lg max-w-lg">Explore our full smartphone catalog by brand — latest models and import-ready options.</p>
          </div>

          <div className="mt-6">
            <SearchBar
              items={ALL_PHONES}
              placeholder="Search smartphones..."
              pageLabel="smartphone"
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

      {/* Brands Grid */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gt-surface via-white to-gt-surface z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />

        <div className="container relative z-10">
          {PHONE_BRANDS.map((brand) => (
            <div key={brand.name} className="mb-14 last:mb-0">
              <h2 className="text-2xl font-bold text-gtblack mb-6 pb-3 border-b border-black/[0.06]">{brand.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {brand.phones.map((phone, i) => (
                  <ProductCard key={phone.id} product={phone} index={i} glass />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
