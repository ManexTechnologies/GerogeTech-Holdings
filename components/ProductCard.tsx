import React from 'react'
import Image from 'next/image'

type Product = {
  id: string
  name: string
  price: number
  originalPrice?: number
  badge?: 'New' | 'Sale' | 'Imported'
  note?: string
  specs?: string
  image?: string
}

const BUSINESS_NUMBERS = ['263776535909','263714147218','263784207861']

function encodeMessage(text: string) {
  return encodeURIComponent(text)
}

export default function ProductCard({ product, index, glass }: { product: Product; index: number; glass?: boolean }) {
  const phone = BUSINESS_NUMBERS[index % BUSINESS_NUMBERS.length]
  const waHref = `https://wa.me/${phone}?text=${encodeMessage(`Hi GeorgeTech, I'm interested in the ${product.name}. Is it still available?`)}`

  return (
    <article className={`${glass ? 'glass-product-card' : 'card'} p-4`}>
      <div className="relative w-full aspect-[4/3] mb-3 rounded-md bg-gray-50 overflow-hidden">
        <Image src={product.image || '/placeholder.svg'} alt={product.name} width={400} height={300} className="w-full h-full object-cover" />
        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm ${
            product.badge === 'New' 
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white ring-2 ring-emerald-300/50' 
              : product.badge === 'Imported' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white ring-2 ring-blue-300/50' 
                : 'bg-gradient-to-r from-gtred to-red-600 text-white ring-2 ring-red-300/50'
          }`}>
            {product.badge === 'New' && (
              <span className="inline-flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {product.badge}
              </span>
            )}
            {product.badge === 'Sale' && (
              <span className="inline-flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                {product.badge}
              </span>
            )}
            {product.badge === 'Imported' && (
              <span className="inline-flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
                {product.badge}
              </span>
            )}
            {!product.badge.match(/^(New|Sale|Imported)$/) && product.badge}
          </span>
        )}
      </div>

      <h3 className="font-semibold text-base leading-tight text-gtblack">{product.name}</h3>
      {product.specs && <p className="mt-2 text-sm text-gray-600">{product.specs}</p>}

      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-xs font-medium text-amber-700">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <span>4.8 <span className="text-amber-400">•</span> 120 reviews</span>
          </div>
        </div>
        <div className="text-xs muted bg-gray-100 px-2.5 py-1 rounded-full">{product.note || 'In stock'}</div>
      </div>

      <div className="mt-4 flex gap-3">
        <a href="https://whatsapp.com/channel/0029VafHfIHA2pL49V3S291J" target="_blank" rel="noopener noreferrer" className={`${glass ? 'btn-outline border-white/30 text-gtblack hover:bg-white/20' : 'btn-outline'} flex-1 text-center inline-flex items-center justify-center gap-1.5`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          View
        </a>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className={`${glass ? 'bg-gtred text-white px-4 py-2 rounded-lg shadow-md hover:bg-gtreddark transition transform hover:-translate-y-0.5' : 'btn-primary'} flex-1 text-center inline-flex items-center justify-center gap-1.5`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Inquire
        </a>
      </div>
    </article>
  )
}
