'use client'

import React, { useState, useMemo } from 'react'
import ProductCard from '../../components/ProductCard'
import SearchBar from '../../components/SearchBar'
import { ChatBoxIcon, SearchBoxIcon, DocumentBoxIcon, TargetBoxIcon, GlobeBoxIcon, TruckBoxIcon, CarBoxIcon, LocationBoxIcon } from '../../components/BoxIcons'

const BUSINESS_NUMBERS = ['263776535909','263714147218','263784207861']

const VEHICLES = {
  fuel: [
    { id: 'v1', name: 'Toyota Aqua (Hybrid)', price: 8500, specs: '1.5L Hybrid · 50+ km/L · 2018+', image: '/toyota aqua.jpeg' },
    { id: 'v2', name: 'Toyota Vitz (Hybrid)', price: 7200, specs: '1.0L Hybrid · Compact · 2019+', image: '/toyota vitz.jpeg' },
    { id: 'v3', name: 'Honda Fit (Hybrid)', price: 7800, specs: '1.5L Hybrid · Sporty · 2018+', image: '/honda fit hybrid.jpeg' },
    { id: 'v4', name: 'Nissan Note e-Power', price: 8200, specs: '1.2L e-Power · CVT · 2019+', image: '/honda fit hybrid.jpeg' },
    { id: 'v5', name: 'Suzuki Swift (Hybrid)', price: 6800, specs: '1.2L Hybrid · Fuel efficient · 2020+', image: '/toyota vitz.jpeg' }
  ],
  luxury: [
    { id: 'v6', name: 'Mercedes-Benz C200', price: 18900, specs: '2.0L Turbo · AMG Line · 2019+', image: '/benz c200.jpeg' },
    { id: 'v7', name: 'BMW 3 Series 320i', price: 17500, specs: '2.0L TwinPower · M Sport · 2019+', image: '/bmw 3 series.jpeg' },
    { id: 'v8', name: 'Audi A4 40 TFSI', price: 16800, specs: '2.0L Turbo · Quattro · 2019+', image: '/audi.jpeg' },
    { id: 'v9', name: 'Lexus ES 300h', price: 22500, specs: '2.5L Hybrid · Luxury · 2020+', image: '/benz c200.jpeg' },
    { id: 'v10', name: 'Range Rover Evoque', price: 26000, specs: '2.0L Turbo · R-Dynamic · 2020+', image: '/toyota landcruiser prado.jpeg' }
  ],
  suv: [
    { id: 'v11', name: 'Toyota Land Cruiser Prado', price: 35000, specs: '2.8L Diesel · 4x4 · 2019+', image: '/toyota landcruiser prado.jpeg' },
    { id: 'v12', name: 'Toyota RAV4 (Hybrid)', price: 18500, specs: '2.5L Hybrid · AWD · 2020+', image: '/toyota rav4 hybrid.jpeg' },
    { id: 'v13', name: 'Honda CR-V', price: 16200, specs: '1.5L Turbo · AWD · 2019+', image: '/honda crv.jpeg' },
    { id: 'v14', name: 'Nissan X-Trail', price: 14800, specs: '2.0L · 7-Seater · 2019+', image: '/honda crv.jpeg' },
    { id: 'v15', name: 'Mitsubishi Outlander', price: 13900, specs: '2.4L · PHEV option · 2020+', image: '/honda crv.jpeg' },
    { id: 'v16', name: 'Mazda CX-5', price: 15500, specs: '2.0L SkyActiv · AWD · 2019+', image: '/honda crv.jpeg' }
  ],
  trucks: [
    { id: 'v17', name: 'Toyota Hilux Double Cab', price: 22000, specs: '2.8L Diesel · 4x4 · 2019+', image: '/hilux double cab.jpeg' },
    { id: 'v18', name: 'Nissan Navara Double Cab', price: 19500, specs: '2.5L Diesel · 4x4 · 2019+', image: '/navara double cab.jpeg' },
    { id: 'v19', name: 'Isuzu D-Max Double Cab', price: 20500, specs: '3.0L Diesel · 4x4 · 2020+', image: '/isuzu double cab.jpeg' },
    { id: 'v20', name: 'Ford Ranger Wildtrak', price: 24000, specs: '2.0L Bi-Turbo · 4x4 · 2020+', image: '/hilux double cab.jpeg' }
  ]
}

const sectionMeta = {
  fuel: { badge: 'Eco-Friendly', heading: 'Fuel Savers & Hybrids', desc: 'Save more on every trip with these fuel-efficient vehicles — perfect for daily commuting.', color: 'text-green-600', bg: 'bg-accent-green', border: 'border-green-500/20' },
  luxury: { badge: 'Premium', heading: 'Luxury Fleet', desc: 'Arrive in style with premium sedans from the world\'s top luxury brands.', color: 'text-purple-600', bg: 'bg-accent-purple', border: 'border-purple-500/20' },
  suv: { badge: 'All-Terrain', heading: 'SUVs & Crossovers', desc: 'Built for every terrain — spacious, powerful, and ready for Zimbabwean roads.', color: 'text-amber-600', bg: 'bg-accent-amber', border: 'border-amber-500/20' },
  trucks: { badge: 'Work-Ready', heading: 'Trucks & Double Cabs', desc: 'Workhorses that handle tough jobs — from the farm to the construction site.', color: 'text-blue-600', bg: 'bg-accent-blue', border: 'border-blue-500/20' },
}

export default function VehicleImportation() {
  const [showAll, setShowAll] = useState<Record<string, boolean>>({})
  const [isMobile, setIsMobile] = useState(false)

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggleShowAll = (key: string) => {
    setShowAll(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const ALL_VEHICLES = useMemo(() => {
    return (Object.keys(VEHICLES) as Array<keyof typeof VEHICLES>).flatMap(key =>
      VEHICLES[key].map(v => ({ id: v.id, name: v.name }))
    )
  }, [])

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#08080C]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gtred/5 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white/60 text-sm mb-8 border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
            <span className="w-2 h-2 rounded-full bg-gtred animate-pulse" />
            Trusted Vehicle Import Service
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 max-w-4xl">
            <span className="text-white">Import Your </span>
            <span className="bg-gradient-to-r from-orange-400 via-gtred to-red-400 bg-clip-text text-transparent">Dream Ride</span>
            <span className="text-white">, </span>
            <span className="text-white">Hassle-Free.</span>
          </h1>

          <p className="text-white/40 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
            We source vehicles from Japan, UK, and South Africa — and handle all clearance, duty calculation, and delivery to Zimbabwe. You just pick your car.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { icon: <GlobeBoxIcon theme="dark" size="sm" />, text: 'Sourced from Japan, UK & SA' },
              { icon: <DocumentBoxIcon theme="dark" size="sm" />, text: 'Full Customs Clearance' },
              { icon: <TruckBoxIcon theme="dark" size="sm" />, text: 'Delivered to Your City' },
            ].map((badge, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/80 text-sm border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <SearchBar
              items={ALL_VEHICLES}
              placeholder="Search vehicles (e.g. Toyota, BMW, Hilux)..."
              pageLabel="vehicle"
            />
          </div>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/60 text-sm border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
            <LocationBoxIcon theme="dark" size="sm" />
            <span>Shop 33, Old Halsteads, Second Street, Mutare</span>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${BUSINESS_NUMBERS[0]}?text=${encodeURIComponent('Hi GeorgeTech, I want to import a vehicle. Please help.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gtred text-white font-bold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,6,0,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Start Your Import
              </span>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/[0.10] hover:bg-white/[0.06] hover:text-white transition-all duration-300" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}
            >
              How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== VEHICLE SECTIONS ===== */}
      {(Object.keys(VEHICLES) as Array<keyof typeof VEHICLES>).map((key, sectionIdx) => {
        const section = sectionMeta[key]
        const vehicles = VEHICLES[key]
        const isShowingAll = showAll[key] || false
        const isEven = sectionIdx % 2 === 0
        // On mobile show 1; on desktop show 3 (or all if expanded)
        const visibleVehicles = isShowingAll ? vehicles : vehicles.slice(0, isMobile ? 1 : 3)
        const hasMore = vehicles.length > (isMobile ? 1 : 3)

        return (
          <section key={key} className="relative py-20 md:py-24 overflow-hidden">
            <div className={`absolute inset-0 z-0 ${isEven ? 'bg-gradient-to-b from-gt-surface via-white to-gt-surface' : 'bg-gradient-to-b from-white via-gt-surface to-white'}`} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />

            <div className="container relative z-10">
              {/* Header row with badge/heading */}
              <div className="mb-10">
                <div>
                  <span className={`section-badge ${section.bg} ${section.color} mb-3`}>{section.badge}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gtblack">{section.heading}</h2>
                  <p className="text-mutetext mt-2 max-w-xl">{section.desc}</p>
                </div>
              </div>

              <div className="glass-card p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {visibleVehicles.map((v, i) => (
                    <ProductCard key={v.id} product={{ ...v, badge: 'Imported', note: section.badge }} index={i} glass />
                  ))}
                </div>
              </div>

              {/* Mobile View All button — red & white theme, visible only on small screens */}
              {hasMore && (
                <button
                  onClick={() => toggleShowAll(key)}
                  className="mt-6 sm:hidden inline-flex items-center gap-2 px-5 py-3 bg-gtred text-white font-bold text-sm rounded-xl transition-all duration-300 w-full justify-center hover:bg-gtreddark hover:scale-[1.02] active:scale-95 shadow-md"
                >
                  {isShowingAll ? 'Show Less' : `View All Vehicles (${vehicles.length})`}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {isShowingAll ? <path d="M18 15l-6-6-6 6"/> : <path d="M6 9l6 6 6-6"/>}
                  </svg>
                </button>
              )}
            </div>
          </section>
        )
      })}

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="relative py-20 md:py-24 overflow-hidden bg-[#08080C]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gtred/6 blur-[100px]" />
          <div className="absolute bottom-[20%] left-[-5%] w-[35%] h-[35%] rounded-full bg-orange-500/5 blur-[80px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-white/50 text-sm mb-4 border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How Importation Works</h2>
            <p className="text-white/40 max-w-xl mx-auto text-lg">Four simple steps from inquiry to delivery. We handle everything in between.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Inquire', desc: 'Message us with your desired make, model, and budget.', icon: <ChatBoxIcon theme="dark" size="lg" /> },
              { num: '02', title: 'Source & Quote', desc: 'We find the best options from Japan/UK/SA and give you a full landed cost.', icon: <SearchBoxIcon theme="dark" size="lg" /> },
              { num: '03', title: 'Clear & Process', desc: 'We handle all customs clearance, duty payment, and documentation.', icon: <DocumentBoxIcon theme="dark" size="lg" /> },
              { num: '04', title: 'Delivered to You', desc: 'Receive your vehicle at your nearest city in Zimbabwe.', icon: <TargetBoxIcon theme="dark" size="lg" /> },
            ].map((step, i) => (
              <div key={i} className="glass-step p-8 text-center group cursor-default relative">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <div className="text-5xl font-black text-white/[0.08] mb-2 group-hover:text-white/[0.15] transition-colors">{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gt-surface to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="section-badge bg-accent-rose text-gtred mb-4">Why GeorgeTech?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gtblack">Why Choose Us for Vehicle Importation?</h2>
            <p className="text-mutetext mt-4 max-w-xl mx-auto">We take the complexity out of importing vehicles to Zimbabwe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>, title: 'Global Sourcing', desc: 'We source vehicles from Japan\'s top auctions, UK dealerships, and South African stockists — giving you the widest selection.', color: 'bg-red-50 text-gtred' },
              { icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>, title: 'Full Transparency', desc: 'We provide a full breakdown of costs — vehicle price, shipping, duties, and clearance fees — so there are no surprises.', color: 'bg-blue-50 text-blue-600' },
              { icon: <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>, title: 'Door-to-Door Delivery', desc: 'We deliver your vehicle directly to Harare, Bulawayo, Mutare, Gweru, or any major city in Zimbabwe.', color: 'bg-green-50 text-green-600' },
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 group">
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gtblack mb-3">{item.title}</h3>
                <p className="text-mutetext leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#08080C]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-gtred/8 blur-[140px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6"><CarBoxIcon theme="dark" size="lg" /></div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Import Your Vehicle?</h3>
            <p className="text-white/40 text-lg mb-8 max-w-lg mx-auto">Message us on WhatsApp and we'll guide you through the entire process — from sourcing to delivery.</p>
            <a
              href={`https://wa.me/${BUSINESS_NUMBERS[0]}?text=${encodeURIComponent('Hi GeorgeTech, I want to import a vehicle. Please help.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gtred text-white font-semibold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(225,6,0,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Start on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
