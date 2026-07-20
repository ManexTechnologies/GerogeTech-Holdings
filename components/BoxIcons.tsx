import React from 'react'

/* ── Wrapper ── */
type BoxIconProps = {
  children: React.ReactNode
  className?: string
  theme?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

function BoxIconWrapper({ children, className = '', theme = 'light', size = 'md' }: BoxIconProps) {
  const sizeClasses = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'
  const themeClasses = theme === 'dark'
    ? 'glass-step border-white/15'
    : 'bg-white/70 shadow-sm border border-white/40'
  return (
    <div className={`${sizeClasses} rounded-xl flex items-center justify-center ${themeClasses} ${className}`}>
      {children}
    </div>
  )
}

/* ── Chat / Message ── (replaces 💬) */
export function ChatBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="14" y2="13"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Search / Magnifying Glass ── (replaces 🔍) */
export function SearchBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Document ── (replaces 📄) */
export function DocumentBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Target / Crosshair ── (replaces 🎯) */
export function TargetBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Globe ── (replaces 🌍) */
export function GlobeBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Clipboard / Checklist ── (replaces 📋) */
export function ClipboardBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
        <polyline points="9 13 11 15 15 11"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Truck / Delivery ── (replaces 🚚) */
export function TruckBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Car ── (replaces 🚗) */
export function CarBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <path d="M5 17h14a2 2 0 0 0 2-2V9l-3-5H6L3 9v6a2 2 0 0 0 2 2z"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <circle cx="7" cy="15" r="2"/><circle cx="17" cy="15" r="2"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Smartphone ── (replaces 📱) */
export function PhoneBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Laptop ── (replaces 💻) */
export function LaptopBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Headphones ── (replaces 🎧) */
export function HeadphonesBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    </BoxIconWrapper>
  )
}

/* ── Location / Map Pin ── (replaces 📍) */
export function LocationBoxIcon({ theme = 'light', size = 'md', className = '' }: { theme?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <BoxIconWrapper theme={theme} size={size} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-white/80' : 'text-gtred'}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    </BoxIconWrapper>
  )
}

