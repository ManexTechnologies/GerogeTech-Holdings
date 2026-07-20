'use client'

import React from 'react'
import {
  LocationBoxIcon,
  PhoneBoxIcon,
  ChatBoxIcon,
  SearchBoxIcon,
  ClipboardBoxIcon,
  TargetBoxIcon,
} from '../../components/BoxIcons'

const BUSINESS_NUMBERS = ['263776535909', '263714147218', '263784207861']

const REPAIR_SERVICES = [
  {
    title: 'Screen Repair',
    description: 'Cracked or broken screen? We replace screens for all major brands — Samsung, iPhone, Huawei, Tecno, itel and more.',
    turnaround: '1–3 hours',
    price: 'From $35',
    features: ['Original & aftermarket options', 'Free diagnostics', 'Tempered glass included'],
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    title: 'Battery Replacement',
    description: 'Battery draining fast or swelling? We replace worn-out batteries with high-quality cells.',
    turnaround: '1–2 hours',
    price: 'From $25',
    features: ['Genuine & high-capacity options', 'Safe disposal of old battery', '90-day warranty'],
    iconBg: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    title: 'Water Damage Repair',
    description: 'Dropped your phone in water? Our technicians carefully clean and restore water-damaged devices.',
    turnaround: '24–48 hours',
    price: 'From $45',
    features: ['Ultrasonic cleaning', 'Corrosion treatment', 'Component-level repair'],
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-500',
  },
  {
    title: 'Charging Port Repair',
    description: 'Phone not charging or charging intermittently? We fix or replace damaged charging ports.',
    turnaround: '1–2 hours',
    price: 'From $20',
    features: ['Micro-USB, USB-C & Lightning', 'Solder rework', 'Thorough testing'],
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    title: 'Software & Unlocking',
    description: 'Slow performance, boot loops, or need network unlocking? We handle software issues of all kinds.',
    turnaround: '1–24 hours',
    price: 'From $15',
    features: ['OS reinstallation', 'Network unlock', 'Virus & malware removal'],
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    title: 'Camera & Speaker Repair',
    description: 'Blurry photos, no sound, or microphone issues? We repair or replace faulty cameras, speakers, and mics.',
    turnaround: '1–3 hours',
    price: 'From $20',
    features: ['Front & rear camera replacement', 'Speaker & mic repair', 'Post-repair calibration'],
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
]

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'Screen Repair': (
    <g>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </g>
  ),
  'Battery Replacement': (
    <g>
      <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
      <line x1="23" y1="10" x2="23" y2="14" />
      <line x1="7" y1="10" x2="7" y2="14" />
    </g>
  ),
  'Water Damage Repair': <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
  'Charging Port Repair': <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  'Software & Unlocking': (
    <g>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </g>
  ),
  'Camera & Speaker Repair': (
    <g>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </g>
  ),
}

export default function CellphoneRepairPage() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#08080C]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[55%] rounded-full bg-gtred/6 blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-blue-500/5 blur-[120px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white/60 text-sm mb-8 border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
            <span className="w-2 h-2 rounded-full bg-gtred animate-pulse" />
            Expert Device Repair — Fast & Reliable
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 max-w-4xl">
            <span className="text-white">Your Phone </span>
            <span className="bg-gradient-to-r from-gtred via-red-400 to-orange-300 bg-clip-text text-transparent">Fixed Fast.</span>
            <br />
            <span className="text-white">Back in Your Hands </span>
            <span className="bg-gradient-to-r from-gtred via-red-400 to-orange-300 bg-clip-text text-transparent">Today.</span>
          </h1>

          <p className="text-white/40 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
            Professional repairs for smartphones, tablets, and laptops. Most fixes done in under 3 hours — with genuine parts and a warranty you can count on.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: <PhoneBoxIcon theme="dark" size="sm" />, text: 'All Major Brands Supported' },
              { icon: <ClipboardBoxIcon theme="dark" size="sm" />, text: 'Free Diagnostics & Quote' },
              { icon: <TargetBoxIcon theme="dark" size="sm" />, text: '90-Day Repair Warranty' },
            ].map((badge, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/80 text-sm border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/60 text-sm border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
            <LocationBoxIcon theme="dark" size="sm" />
            <span>Shop 33, Old Halsteads, Second Street, Mutare</span>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${BUSINESS_NUMBERS[0]}?text=${encodeURIComponent('Hi GeorgeTech, I want to book a repair.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gtred text-white font-bold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,6,0,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Book Repair on WhatsApp
              </span>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/[0.10] hover:bg-white/[0.06] hover:text-white transition-all duration-300" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}
            >
              See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== REPAIR SERVICES GRID ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gt-surface via-white to-gt-surface z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="section-badge bg-accent-rose text-gtred mb-4">Repair Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gtblack mb-4">What We Fix</h2>
            <p className="text-mutetext max-w-xl mx-auto text-lg">From cracked screens to dead batteries — we handle it all with professional-grade parts and tools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REPAIR_SERVICES.map((service) => (
              <div key={service.title} className="glass-card p-6 group cursor-default">
                <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {SERVICE_ICONS[service.title]}
                  </svg>
                </div>

                <h3 className="font-bold text-lg text-gtblack mb-2">{service.title}</h3>
                <p className="text-sm text-mutetext leading-relaxed mb-5">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 text-xs font-semibold text-gtblack border border-black/[0.06]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {service.turnaround}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gtred/10 text-xs font-bold text-gtred border border-gtred/20">{service.price}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-mutetext">
                      <span className="mt-0.5 w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${BUSINESS_NUMBERS[0]}?text=${encodeURIComponent(`Hi GeorgeTech, I'd like to book the ${service.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-gtred text-white text-sm font-semibold rounded-xl hover:bg-gtreddark transition-all duration-300 hover:shadow-lg"
                >
                  Get a Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
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
            <span className="section-badge bg-accent-blue text-blue-700 mb-4">Why GeorgeTech?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gtblack mb-4">Why Choose Us for Repairs?</h2>
            <p className="text-mutetext max-w-xl mx-auto text-lg">We don't just fix your device — we restore it to peak condition with care and expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />, title: 'Genuine Parts', desc: 'We use original and high-quality aftermarket parts so your device works like new — not just patched up.', color: 'bg-red-50 text-gtred' },
              { icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>, title: 'Same-Day Service', desc: 'Most common repairs — screens, batteries, charging ports — are completed in under 3 hours while you wait.', color: 'bg-blue-50 text-blue-600' },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, title: '90-Day Warranty', desc: 'Every repair is backed by a 90-day warranty. If the same issue returns, we fix it again — free.', color: 'bg-green-50 text-green-600' },
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

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="relative py-20 md:py-24 overflow-hidden bg-[#08080C]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gtred/6 blur-[100px]" />
          <div className="absolute bottom-[20%] left-[-5%] w-[35%] h-[35%] rounded-full bg-blue-500/5 blur-[80px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-white/50 text-sm mb-4 border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How Repairs Work</h2>
            <p className="text-white/40 max-w-xl mx-auto text-lg">Four simple steps — from message to a fully working device.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Message Us', desc: 'Tell us your phone model and issue on WhatsApp. We\'ll give you a free quote.', icon: <ChatBoxIcon theme="dark" size="lg" /> },
              { num: '02', title: 'Bring It In', desc: 'Drop off your device at Shop 33, Old Halsteads, Second Street, Mutare.', icon: <LocationBoxIcon theme="dark" size="lg" /> },
              { num: '03', title: 'We Diagnose & Fix', desc: 'Free diagnosis, then we repair using genuine parts with expert precision.', icon: <SearchBoxIcon theme="dark" size="lg" /> },
              { num: '04', title: 'Collect & Enjoy', desc: 'Pick up your fully working device backed by our 90-day warranty.', icon: <TargetBoxIcon theme="dark" size="lg" /> },
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

      {/* ===== BRANDS + CTA ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gt-surface to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0" />

        <div className="container relative z-10">
          <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto">
            <span className="section-badge bg-accent-rose text-gtred mb-6">We Fix All Major Brands</span>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-mutetext text-sm md:text-base font-semibold mb-8">
              {['Samsung', 'Apple', 'Huawei', 'Tecno', 'itel', 'Nokia', 'Xiaomi', 'Oppo', 'Vivo', 'Infinix', 'Google Pixel', 'OnePlus'].map((brand, i, arr) => (
                <React.Fragment key={brand}>
                  <span className="hover:text-gtblack transition-colors">{brand}</span>
                  {i < arr.length - 1 && <span className="text-gray-300">·</span>}
                </React.Fragment>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gtblack mb-3">Ready to Get Your Device Fixed?</h3>
            <p className="text-mutetext mb-8 max-w-md mx-auto">Message us now for a free diagnosis and quote — most repairs done the same day.</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${BUSINESS_NUMBERS[0]}?text=${encodeURIComponent('Hi GeorgeTech, I want to book a repair.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gtred text-white font-semibold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,6,0,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Book Repair on WhatsApp
                </span>
              </a>
              <a
                href={`tel:${BUSINESS_NUMBERS[0].replace(/^263/, '0')}`}
                className="inline-flex items-center gap-2 px-8 py-4 glass-card text-gtblack font-semibold text-sm rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
