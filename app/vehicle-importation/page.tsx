import React from 'react'
import ProductCard from '../../components/ProductCard'

const VEHICLES = {
  fuel: [
    { id: 'v1', name: 'Toyota Aqua (Hybrid)', price: 8500, specs: '1.5L Hybrid · 50+ km/L · 2018+', image: '/car-toyota.jpg' },
    { id: 'v2', name: 'Toyota Vitz (Hybrid)', price: 7200, specs: '1.0L Hybrid · Compact · 2019+', image: '/car-toyota.jpg' },
    { id: 'v3', name: 'Honda Fit (Hybrid)', price: 7800, specs: '1.5L Hybrid · Sporty · 2018+', image: '/car-toyota.jpg' },
    { id: 'v4', name: 'Nissan Note e-Power', price: 8200, specs: '1.2L e-Power · CVT · 2019+', image: '/car-toyota.jpg' },
    { id: 'v5', name: 'Suzuki Swift (Hybrid)', price: 6800, specs: '1.2L Hybrid · Fuel efficient · 2020+', image: '/car-toyota.jpg' }
  ],
  luxury: [
    { id: 'v6', name: 'Mercedes-Benz C200', price: 18900, specs: '2.0L Turbo · AMG Line · 2019+', image: '/car-luxury.jpg' },
    { id: 'v7', name: 'BMW 3 Series 320i', price: 17500, specs: '2.0L TwinPower · M Sport · 2019+', image: '/car-luxury.jpg' },
    { id: 'v8', name: 'Audi A4 40 TFSI', price: 16800, specs: '2.0L Turbo · Quattro · 2019+', image: '/car-luxury.jpg' },
    { id: 'v9', name: 'Lexus ES 300h', price: 22500, specs: '2.5L Hybrid · Luxury · 2020+', image: '/car-luxury.jpg' },
    { id: 'v10', name: 'Range Rover Evoque', price: 26000, specs: '2.0L Turbo · R-Dynamic · 2020+', image: '/car-luxury.jpg' }
  ],
  suv: [
    { id: 'v11', name: 'Toyota Land Cruiser Prado', price: 35000, specs: '2.8L Diesel · 4x4 · 2019+', image: '/car-suv.jpg' },
    { id: 'v12', name: 'Toyota RAV4 (Hybrid)', price: 18500, specs: '2.5L Hybrid · AWD · 2020+', image: '/car-suv.jpg' },
    { id: 'v13', name: 'Honda CR-V', price: 16200, specs: '1.5L Turbo · AWD · 2019+', image: '/car-suv.jpg' },
    { id: 'v14', name: 'Nissan X-Trail', price: 14800, specs: '2.0L · 7-Seater · 2019+', image: '/car-suv.jpg' },
    { id: 'v15', name: 'Mitsubishi Outlander', price: 13900, specs: '2.4L · PHEV option · 2020+', image: '/car-suv.jpg' },
    { id: 'v16', name: 'Mazda CX-5', price: 15500, specs: '2.0L SkyActiv · AWD · 2019+', image: '/car-suv.jpg' }
  ],
  trucks: [
    { id: 'v17', name: 'Toyota Hilux Double Cab', price: 22000, specs: '2.8L Diesel · 4x4 · 2019+', image: '/car-truck.jpg' },
    { id: 'v18', name: 'Nissan Navara Double Cab', price: 19500, specs: '2.5L Diesel · 4x4 · 2019+', image: '/car-truck.jpg' },
    { id: 'v19', name: 'Isuzu D-Max Double Cab', price: 20500, specs: '3.0L Diesel · 4x4 · 2020+', image: '/car-truck.jpg' },
    { id: 'v20', name: 'Ford Ranger Wildtrak', price: 24000, specs: '2.0L Bi-Turbo · 4x4 · 2020+', image: '/car-truck.jpg' }
  ]
}

const BUSINESS_NUMBERS = ['263776535909','263714147218','263784207861']

export default function VehicleImportation() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] z-0" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-gtred/20 to-transparent blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-500/15 to-transparent blur-[100px]" />
          <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-[80px]" />
        </div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white/80 text-sm mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-gtred animate-pulse" />
              Trusted Vehicle Import Service
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              Import Your{' '}
              <span className="bg-gradient-to-r from-gtred via-red-400 to-orange-300 bg-clip-text text-transparent">
                Dream Ride
              </span>
              , Hassle-Free.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              We source vehicles from Japan, UK, and South Africa — and handle all clearance, duty calculation, and delivery to Zimbabwe. You just pick your car.
            </p>

            {/* Feature pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: '🌍', text: 'Sourced from Japan, UK & SA' },
                { icon: '📋', text: 'Full Customs Clearance' },
                { icon: '🚚', text: 'Delivered to Your City' }
              ].map((feat, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/70 text-sm border border-white/5">
                  <span>{feat.icon}</span>
                  {feat.text}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${BUSINESS_NUMBERS[0]}?text=${encodeURIComponent('Hi GeorgeTech, I want to import a vehicle. Can you help?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gtred text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,6,0,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Start Your Import
                </span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-white/80 font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                How It Works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FUEL SAVERS / HYBRIDS ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gtgrey to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0" />
        <div className="container relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-3">Eco-Friendly</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Fuel Savers & Hybrids</h2>
              <p className="text-mutetext mt-2 max-w-xl">Save more on every trip with these fuel-efficient vehicles — perfect for daily commuting.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-mutetext">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              5 vehicles available
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {VEHICLES.fuel.map((v, i) => (
              <ProductCard key={v.id} product={{ ...v, badge: 'Imported', note: 'Save more on every trip' }} index={i} glass />
            ))}
          </div>
        </div>
      </section>

      {/* ===== LUXURY FLEET ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0" />
        <div className="container relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-3">Premium</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Luxury Fleet</h2>
              <p className="text-mutetext mt-2 max-w-xl">Arrive in style with premium sedans from the world's top luxury brands.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-mutetext">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              5 vehicles available
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {VEHICLES.luxury.map((v, i) => (
              <ProductCard key={v.id} product={{ ...v, badge: 'Imported', note: 'Arrive in style' }} index={i} glass />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUVs & CROSSOVERS ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gtgrey to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0" />
        <div className="container relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-3">All-Terrain</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gtblack">SUVs & Crossovers</h2>
              <p className="text-mutetext mt-2 max-w-xl">Built for every terrain — spacious, powerful, and ready for Zimbabwean roads.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-mutetext">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              6 vehicles available
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
            {VEHICLES.suv.map((v, i) => (
              <ProductCard key={v.id} product={{ ...v, badge: 'Imported', note: 'Built for every terrain' }} index={i} glass />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUCKS & DOUBLE CABS ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0" />
        <div className="container relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">Work-Ready</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gtblack">Trucks & Double Cabs</h2>
              <p className="text-mutetext mt-2 max-w-xl">Workhorses that handle tough jobs — from the farm to the construction site.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-mutetext">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              4 vehicles available
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {VEHICLES.trucks.map((v, i) => (
              <ProductCard key={v.id} product={{ ...v, badge: 'Imported', note: 'Built tough' }} index={i} glass />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IMPORTATION WORKS ===== */}
      <section id="how-it-works" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] z-0" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-gtred/10 to-transparent blur-[100px]" />
          <div className="absolute bottom-[20%] left-[-5%] w-[35%] h-[35%] rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-[80px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-white/70 text-sm mb-4 border border-white/10">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">How Importation Works</h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">Four simple steps from inquiry to delivery. We handle everything in between.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Inquire', desc: 'Message us with your desired make, model, and budget.', icon: '💬' },
              { num: '02', title: 'Source & Quote', desc: 'We find the best options from Japan/UK/SA and give you a full landed cost.', icon: '🔍' },
              { num: '03', title: 'Clear & Process', desc: 'We handle all customs clearance, duty payment, and documentation.', icon: '📄' },
              { num: '04', title: 'Delivered to You', desc: 'Receive your vehicle at your nearest city in Zimbabwe.', icon: '🎯' }
            ].map((step, i) => (
              <div key={i} className="glass-step p-8 text-center group cursor-default">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-5xl font-black text-white/10 mb-2 group-hover:text-white/20 transition-colors">{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                {/* Connector line (desktop) */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gtred/10 text-gtred text-sm font-semibold mb-4">
              Why GeorgeTech?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gtblack">Why Choose Us for Vehicle Importation?</h2>
            <p className="text-mutetext mt-4 max-w-xl mx-auto">We take the complexity out of importing vehicles to Zimbabwe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                ),
                title: 'Global Sourcing',
                desc: 'We source vehicles from Japan\'s top auctions, UK dealerships, and South African stockists — giving you the widest selection.',
                color: 'from-gtred/20 to-orange-500/10'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                ),
                title: 'Full Transparency',
                desc: 'We provide a full breakdown of costs — vehicle price, shipping, duties, and clearance fees — so there are no surprises.',
                color: 'from-blue-500/20 to-cyan-500/10'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                ),
                title: 'Door-to-Door Delivery',
                desc: 'We deliver your vehicle directly to Harare, Bulawayo, Mutare, Gweru, or any major city in Zimbabwe.',
                color: 'from-green-500/20 to-emerald-500/10'
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-gtred mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gtblack mb-3">{item.title}</h3>
                <p className="text-mutetext leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] z-0" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-gradient-to-br from-gtred/15 to-transparent blur-[120px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="container relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl mb-6">🚗</div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Import Your Vehicle?</h3>
            <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">Message us on WhatsApp and we'll guide you through the entire process — from sourcing to delivery.</p>
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