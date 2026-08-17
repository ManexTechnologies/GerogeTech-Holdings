'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getProductBrand } from '../data/products'
import { AddToCartButton, WhatsAppOrderLink } from './CartControls'
import { useProductEngagement } from './productEngagement'

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

function Star({ muted = false }: { muted?: boolean }) {
  const color = muted ? '#cbd5e1' : '#f59e0b'
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={color} stroke={color} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default function ProductCard({ product, index, glass }: { product: Product; index: number; glass?: boolean }) {
  const phone = '263776535909'
  const waHref = `https://wa.me/${phone}?text=${encodeURIComponent(`Hello GeorgeTech, I would like to order the following product: ${product.name}. Please confirm availability and pricing.`)}`
  const brand = getProductBrand(product)
  const { liked, compared, compareLimitReached, toggleLike, toggleCompare } = useProductEngagement(product.id)
  const badgeColor = product.badge === 'New'
    ? 'bg-[#06a6c8] text-white'
    : product.badge === 'Imported'
      ? 'bg-[#071225] text-white'
      : 'bg-[#ef3340] text-white'

  return (
    <article className={`${glass ? 'glass-product-card' : 'card'} group flex h-full flex-col overflow-hidden rounded-2xl bg-white p-0 shadow-[0_10px_28px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.04]`} style={{ transitionDelay: `${index * 20}ms` }}>
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <Link href={`/product/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 z-20 flex flex-col items-start gap-2">
          {product.badge && (
            <span className={`rounded-full px-3 py-1 text-[10px] font-bold leading-none shadow-md ${badgeColor}`}>
              {product.badge === 'Imported' ? 'Bestseller' : product.badge}
            </span>
          )}
        </div>
        <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
          <button type="button" onClick={toggleLike} className={`flex h-9 w-9 items-center justify-center rounded-full ring-1 transition-all duration-200 ${liked ? 'scale-110 bg-gtred text-white ring-red-300 shadow-[0_0_18px_rgba(225,6,0,0.8)]' : 'bg-white text-[#2f4a7d] shadow-md ring-[#cad6ef] hover:text-gtred hover:shadow-[0_0_12px_rgba(225,6,0,0.35)]'}`} aria-label={`${liked ? 'Remove like from' : 'Like'} ${product.name}`} aria-pressed={liked} title={liked ? 'Liked' : 'Like product'}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
          </button>
          <button type="button" onClick={toggleCompare} disabled={compareLimitReached} className={`flex h-9 w-9 items-center justify-center rounded-full shadow-md ring-1 transition disabled:cursor-not-allowed disabled:opacity-45 ${compared ? 'bg-[#0087c8] text-white ring-[#0087c8]' : 'bg-white text-[#2f4a7d] ring-[#cad6ef] hover:text-[#0087c8]'}`} aria-label={`${compared ? 'Remove' : 'Add'} ${product.name} ${compared ? 'from' : 'to'} comparison`} aria-pressed={compared} title={compareLimitReached ? 'You can compare up to three products' : compared ? 'Selected for comparison' : 'Add to comparison'}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 3v18M4 8l-.01 8M4 8h5M20 16l.01-8M20 16h-5M15 21V3" /></svg>
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-2 sm:p-4">
        <div className="mb-2 flex items-center justify-between gap-1 sm:gap-2">
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide text-[#0087c8]">{brand}</span>
          <span className="flex items-center text-xs sm:text-sm" aria-label="4 out of 5 stars">
            <Star /><Star /><Star /><Star /><Star muted />
          </span>
        </div>

        <Link href={`/product/${product.id}`} className="mb-2 text-[13px] sm:text-[15px] font-extrabold leading-snug text-[#071225] hover:text-gtred">
          {product.name}
        </Link>

        {product.specs && (
          <p className="mb-3 line-clamp-2 min-h-[2.25rem] text-[11px] sm:text-xs leading-relaxed text-[#36527e]">{product.specs}</p>
        )}

        <span className="mb-3 text-[10px] sm:text-xs font-bold text-[#00964b]">✓ In stock</span>

        <div className="mt-auto mb-3 sm:mb-4">
          <span className="text-base font-extrabold text-[#071225]">US${product.price.toFixed(2)}</span>
          {product.originalPrice && <span className="ml-2 text-xs font-semibold text-[#64748b] line-through">US${product.originalPrice.toFixed(2)}</span>}
        </div>

        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-1 sm:gap-2">
          <WhatsAppOrderLink
            href={waHref}
            className="inline-flex min-h-8 sm:min-h-10 items-center justify-center rounded-full bg-[#22c55e] px-2 sm:px-4 text-[11px] sm:text-xs font-extrabold text-white transition hover:bg-[#16a34a]"
          >
            Order
          </WhatsAppOrderLink>
          <Link
            href={`/product/${product.id}`}
            className="inline-flex min-h-8 sm:min-h-10 items-center justify-center rounded-full border border-[#c7d4ee] bg-white px-2 sm:px-4 text-[11px] sm:text-xs font-bold text-[#071225] transition hover:border-[#071225]"
          >
            Details
          </Link>
          <AddToCartButton
            product={product}
            className="flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-full bg-[#071225] text-white transition hover:bg-gtred"
            addedContent={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          </AddToCartButton>
        </div>
      </div>
    </article>
  )
}
