'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ProductCard from '../../../components/ProductCard'
import { ProductPurchasePanel } from '../../../components/CartControls'
import { getProductBrand, getProductCategory } from '../../../data/products'
import { useCatalog } from '../../../components/catalog'

function Star({ size = 16, muted = false }: { size?: number; muted?: boolean }) {
  const color = muted ? '#cbd5e1' : '#f59e0b'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function splitSpecs(specs?: string) {
  return (specs || '')
    .split('·')
    .map((item) => item.trim())
    .filter(Boolean)
}

export default function ProductDetailPage() {
  const params = useParams()
  const id = typeof params.id === 'string' ? params.id : ''

  const allProducts = useCatalog()
  const product = React.useMemo(() => allProducts.find((p) => p.id === id), [id, allProducts])

  if (!product) return <main className="container py-20 text-center"><h1 className="text-2xl font-extrabold text-[#071225]">Product unavailable</h1><p className="mt-2 text-sm text-[#64748b]">This product may have been removed or is no longer available.</p><Link href="/smartphones" className="mt-6 inline-flex rounded-lg bg-[#071225] px-4 py-2 text-sm font-bold text-white">Continue shopping</Link></main>

  const brand = getProductBrand(product)
  const category = getProductCategory(product)
  const specs = splitSpecs(product.specs)
  const related = allProducts.filter((item) => item.category === category && item.id !== product.id).slice(0, 4)

  return (
    <div className="bg-[#f8fafc]">
      <section className="border-b border-black/[0.05] bg-white py-5">
        <div className="container">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#64748b]">
            <Link href="/" className="hover:text-gtred">Home</Link>
            <span>/</span>
            <Link href={`/${category === 'smartphones' ? 'smartphones' : category}`} className="capitalize hover:text-gtred">{category.replace('-', ' ')}</Link>
            <span>/</span>
            <span className="text-[#071225]">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-[0_18px_55px_rgba(15,23,42,0.10)] ring-1 ring-black/[0.05]">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                width={900}
                height={675}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute left-4 top-4 flex flex-col items-start gap-2">
                {product.badge && (
                  <span className="rounded-full bg-[#071225] px-4 py-1.5 text-xs font-bold text-white shadow-md">
                    {product.badge === 'Imported' ? 'Bestseller' : product.badge}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wide text-[#0087c8]">{brand}</span>
              <span className="text-[#cbd5e1]">·</span>
              <span className="text-xs font-medium capitalize text-[#64748b]">{category}</span>
            </div>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#071225] md:text-4xl">{product.name}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="flex items-center"><Star /><Star /><Star /><Star /><Star muted /></span>
              <span className="text-sm font-bold text-[#071225]">4.8</span>
              <a href="#reviews" className="text-sm font-semibold text-[#0087c8] underline">Read reviews</a>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#36527e]">
              {product.specs || product.note || `${product.name} is available from GeorgeTech with fast WhatsApp ordering and local support.`}
            </p>

            <div className="mt-7">
              <span className="inline-flex rounded-full bg-[#eff6ff] px-4 py-2 text-sm font-extrabold text-[#2563eb]">Price on request</span>
            </div>

            <div className="mt-5 text-sm font-bold text-[#00964b]">✓ In stock - ready to ship</div>

            <ProductPurchasePanel product={product} />

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ['Fast delivery', 'Mutare same-day, nationwide shipping'],
                ['Genuine', 'Warranty-backed products'],
                ['Support', 'WhatsApp assistance'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.05]">
                  <p className="text-sm font-extrabold text-[#071225]">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#64748b]">{body}</p>
                </div>
              ))}
            </div>

            {specs.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {specs.slice(0, 6).map((spec) => (
                  <span key={spec} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#36527e] ring-1 ring-black/[0.05]">{spec}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.05] md:p-6">
          <div className="flex flex-wrap gap-2 border-b border-black/[0.06] pb-4">
            <a href="#description" className="rounded-full bg-[#071225] px-4 py-2 text-xs font-bold text-white">Description</a>
            <a href="#specifications" className="rounded-full border border-[#c7d4ee] px-4 py-2 text-xs font-bold text-[#071225]">Specifications</a>
            <a href="#reviews" className="rounded-full border border-[#c7d4ee] px-4 py-2 text-xs font-bold text-[#071225]">Reviews</a>
          </div>

          <div id="description" className="pt-5">
            <p className="text-sm leading-7 text-[#36527e]">
              {product.note ? `${product.note}. ` : ''}{product.name} is listed with GeorgeTech for customers who want quick ordering and local support in Zimbabwe.
            </p>
          </div>

          <dl id="specifications" className="mt-6 grid gap-3 sm:grid-cols-2">
            {(specs.length ? specs : ['Genuine product', 'WhatsApp ordering', 'Nationwide delivery', 'Local support']).map((spec, specIndex) => (
              <div key={`${spec}-${specIndex}`} className="grid grid-cols-[7rem_1fr] rounded-xl bg-[#f8fafc] p-3 text-sm">
                <dt className="font-bold text-[#071225]">Feature {specIndex + 1}</dt>
                <dd className="text-[#36527e]">{spec}</dd>
              </div>
            ))}
          </dl>

          <div id="reviews" className="mt-6 rounded-xl bg-[#f8fafc] p-5 text-center">
            <p className="text-sm font-bold text-[#071225]">No reviews yet</p>
            <p className="mt-1 text-xs text-[#64748b]">Be the first to review {product.name}.</p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container pb-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-[#071225]">Related products</h2>
              <p className="mt-1 text-sm text-[#64748b]">More options from the same category.</p>
            </div>
            <Link href={`/${category === 'smartphones' ? 'smartphones' : category}`} className="hidden rounded-full border border-[#c7d4ee] px-4 py-2 text-xs font-bold text-[#071225] sm:inline-flex">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} glass />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
