import React from 'react'

const BUSINESS_NUMBERS = ['263776535909','263714147218','263784207861']

const REPAIR_SERVICE_ICONS: Record<string, React.ReactNode> = {
  screen: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  battery: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="10" x2="23" y2="14"/><line x1="7" y1="10" x2="7" y2="14"/></svg>,
  water: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
  charge: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  software: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  camera: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
}

const REPAIR_SERVICES = [
  {
    title: 'Screen Repair',
    iconKey: 'screen',
    description: 'Cracked or broken screen? We replace screens for all major brands — Samsung, iPhone, Huawei, Tecno, itel and more.',
    turnaround: '1–3 hours',
    price: 'From $35',
    features: ['Original & aftermarket options', 'Free diagnostics', 'Tempered glass included']
  },
  {
    title: 'Battery Replacement',
    iconKey: 'battery',
    description: 'Battery draining fast or swelling? We replace worn-out batteries with high-quality cells.',
    turnaround: '1–2 hours',
    price: 'From $25',
    features: ['Genuine & high-capacity options', 'Safe disposal of old battery', '90-day warranty']
  },
  {
    title: 'Water Damage Repair',
    iconKey: 'water',
    description: 'Dropped your phone in water? Our technicians carefully clean and restore water-damaged devices.',
    turnaround: '24–48 hours',
    price: 'From $45',
    features: ['Ultrasonic cleaning', 'Corrosion treatment', 'Component-level repair']
  },
  {
    title: 'Charging Port Repair',
    iconKey: 'charge',
    description: 'Phone not charging or charging intermittently? We fix or replace damaged charging ports.',
    turnaround: '1–2 hours',
    price: 'From $20',
    features: ['Micro-USB, USB-C & Lightning', 'Solder rework', 'Thorough testing']
  },
  {
    title: 'Software & Unlocking',
    iconKey: 'software',
    description: 'Slow performance, boot loops, or need network unlocking? We handle software issues of all kinds.',
    turnaround: '1–24 hours',
    price: 'From $15',
    features: ['OS reinstallation', 'Network unlock', 'Virus & malware removal']
  },
  {
    title: 'Camera & Speaker Repair',
    iconKey: 'camera',
    description: 'Blurry photos, no sound, or microphone issues? We repair or replace faulty cameras, speakers, and mics.',
    turnaround: '1–3 hours',
    price: 'From $20',
    features: ['Front & rear camera replacement', 'Speaker & mic repair', 'Post-repair calibration']
  }
]

export default function CellphoneRepairPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gtblack to-black text-white py-16 overflow-hidden">
        {/* Glass overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gtred/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="glass-dark inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white/80 mb-4">
              📱 Same-day repairs • Free diagnostics
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Cellphone Repair Service</h1>
            <p className="mt-3 text-gray-300 max-w-xl text-lg">Fast diagnostics, screen repair, battery replacement and more — supported by genuine parts. Get your phone fixed today.</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ Same-day Repairs</span>
              <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ Free Diagnostics</span>
              <span className="inline-flex items-center gap-1 glass-dark px-3 py-1 rounded-full">✓ 90-Day Warranty</span>
            </div>
            <a 
              href={`https://wa.me/${BUSINESS_NUMBERS[0]}?text=${encodeURIComponent('Hi GeorgeTech, I need my phone repaired. Can you help?')}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-block mt-6"
            >
              Book a Repair
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">Our Repair Services</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">Professional repair services using quality parts and expert techniques.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REPAIR_SERVICES.map((service) => (
              <div key={service.title} className="glass-card p-6">
                <div className="w-11 h-11 bg-white/70 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-white/40">
                  {REPAIR_SERVICE_ICONS[service.iconKey]}
                </div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-sm muted mt-2">{service.description}</p>
                <div className="mt-4 text-sm space-y-1">
                  <div className="font-semibold flex items-center gap-2">
                    <div className="w-5 h-5 bg-white/70 rounded flex items-center justify-center shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    Turnaround: <span className="font-normal">{service.turnaround}</span>
                  </div>
                  <div className="font-semibold flex items-center gap-2">
                    <div className="w-5 h-5 bg-white/70 rounded flex items-center justify-center shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    Price: <span className="font-normal">{service.price}</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/${BUSINESS_NUMBERS[0]}?text=${encodeURIComponent(`Hi GeorgeTech, I'd like to book the ${service.title} service.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary text-sm mt-5 inline-block"
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-gtblack to-black relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">How It Works</h2>
            <p className="text-gray-400 mt-2 max-w-lg mx-auto">Getting your device repaired is quick and easy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-step text-center p-6">
              <div className="w-14 h-14 bg-gtred/80 text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-gtred/20 backdrop-blur-sm border border-white/10">1</div>
              <h3 className="font-semibold text-white mt-4">Message Us</h3>
              <p className="text-sm text-gray-400 mt-2">Tell us your phone model and issue on WhatsApp.</p>
            </div>
            <div className="glass-step text-center p-6">
              <div className="w-14 h-14 bg-gtred/80 text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-gtred/20 backdrop-blur-sm border border-white/10">2</div>
              <h3 className="font-semibold text-white mt-4">Bring It In</h3>
              <p className="text-sm text-gray-400 mt-2">Drop off your device at our location in Harare.</p>
            </div>
            <div className="glass-step text-center p-6">
              <div className="w-14 h-14 bg-gtred/80 text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-gtred/20 backdrop-blur-sm border border-white/10">3</div>
              <h3 className="font-semibold text-white mt-4">We Diagnose & Fix</h3>
              <p className="text-sm text-gray-400 mt-2">Free diagnosis, then we repair with genuine parts.</p>
            </div>
            <div className="glass-step text-center p-6">
              <div className="w-14 h-14 bg-gtred/80 text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-gtred/20 backdrop-blur-sm border border-white/10">4</div>
              <h3 className="font-semibold text-white mt-4">Collect & Enjoy</h3>
              <p className="text-sm text-gray-400 mt-2">Pick up your fully working device with warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gtred/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold">We Fix All Major Brands</h3>
            <p className="text-gray-500 mt-3 text-lg">Samsung · Apple · Huawei · Tecno · itel · Nokia · Xiaomi · Oppo · Vivo · Infinix</p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a 
                href={`https://wa.me/${BUSINESS_NUMBERS[0]}?text=${encodeURIComponent('Hi GeorgeTech, I want to book a repair.')}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.9 11.9 0 0 0 12 1C6 1 1 6 1 12c0 2 .5 3.9 1.5 5.6L1 23l5.6-1.5A11.9 11.9 0 0 0 12 23c6 0 11-5 11-11 0-1.9-.46-3.7-1.48-5.02z" fill="#fff"/></svg>
                Book Now on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
