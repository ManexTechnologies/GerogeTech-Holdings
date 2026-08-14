'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export type CartProduct = {
  id: string
  name: string
  price?: number
  image?: string
}

export type CartItem = CartProduct & {
  quantity: number
}

const CART_KEY = 'georgetech-cart-v1'
const CART_EVENT = 'georgetech-cart-change'
const PHONE = '263776535909'

function readCart(): CartItem[] {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(CART_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((item) => item?.id && item?.quantity > 0) : []
  } catch {
    return []
  }
}

function writeCart(items: CartItem[]) {
  window.localStorage.setItem(CART_KEY, JSON.stringify(items))
  window.dispatchEvent(new Event(CART_EVENT))
}

export function clearCart() {
  if (typeof window === 'undefined') return

  writeCart([])
}

export function addToCart(product: CartProduct, quantity = 1) {
  if (typeof window === 'undefined') return

  const items = readCart()
  const existing = items.find((item) => item.id === product.id)
  const safeQuantity = Math.max(1, quantity)

  if (existing) {
    existing.quantity += safeQuantity
  } else {
    items.push({ ...product, quantity: safeQuantity })
  }

  writeCart(items)
}

function useCart() {
  const [items, setItems] = React.useState<CartItem[]>([])

  React.useEffect(() => {
    const syncCart = () => setItems(readCart())

    syncCart()
    window.addEventListener(CART_EVENT, syncCart)
    window.addEventListener('storage', syncCart)

    return () => {
      window.removeEventListener(CART_EVENT, syncCart)
      window.removeEventListener('storage', syncCart)
    }
  }, [])

  const updateQuantity = (id: string, quantity: number) => {
    const nextItems = readCart()
      .map((item) => item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item)
      .filter((item) => item.quantity > 0)

    writeCart(nextItems)
  }

  const removeItem = (id: string) => {
    writeCart(readCart().filter((item) => item.id !== id))
  }

  return { items, updateQuantity, removeItem, clear: clearCart }
}

export function AddToCartButton({ product, quantity = 1, className, children, addedContent = 'Added' }: { product: CartProduct; quantity?: number; className?: string; children?: React.ReactNode; addedContent?: React.ReactNode }) {
  const [added, setAdded] = React.useState(false)

  const handleClick = () => {
    addToCart(product, quantity)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1300)
  }

  return (
    <button type="button" onClick={handleClick} className={className} aria-label={`Add ${product.name} to cart`}>
      {added ? addedContent : children}
    </button>
  )
}

export function WhatsAppOrderLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} onClick={clearCart} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

export function CartCount() {
  const { items } = useCart()
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  if (count === 0) return null

  return (
    <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gtred px-1 text-[10px] font-extrabold leading-none text-white">
      {count > 99 ? '99+' : count}
    </span>
  )
}

export function ProductPurchasePanel({ product }: { product: CartProduct }) {
  const [quantity, setQuantity] = React.useState(1)
  const waHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello GeorgeTech, I would like to order the following product: ${product.name} x${quantity}. Please confirm availability and pricing.`)}`

  return (
    <>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <div className="grid h-12 grid-cols-3 overflow-hidden rounded-full border border-[#c7d4ee] bg-white text-sm font-bold text-[#071225]">
          <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="w-12 text-lg" aria-label="Decrease quantity">-</button>
          <span className="flex w-12 items-center justify-center border-x border-[#e2e8f0]">{quantity}</span>
          <button type="button" onClick={() => setQuantity((value) => value + 1)} className="w-12 text-lg" aria-label="Increase quantity">+</button>
        </div>
        <AddToCartButton
          product={product}
          quantity={quantity}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-[#071225] px-6 text-sm font-extrabold text-white transition hover:bg-gtred"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          Add to cart
        </AddToCartButton>
        <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c7d4ee] bg-white text-[#2f4a7d]" aria-label={`Save ${product.name}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
        </button>
      </div>

      <WhatsAppOrderLink href={waHref} className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#22c55e] px-6 text-sm font-extrabold text-white transition hover:bg-[#16a34a] sm:w-auto">
        Order on WhatsApp · +263 776 535 909
      </WhatsAppOrderLink>
      <p className="mt-2 text-xs text-[#64748b]">Opens WhatsApp with your order details pre-filled and clears the cart.</p>
    </>
  )
}

export function CartPageClient() {
  const { items, updateQuantity, removeItem, clear } = useCart()
  const messageLines = items.map((item) => `${item.quantity} x ${item.name}`)
  const waHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello GeorgeTech, I would like to order:\n${messageLines.join('\n')}\n\nPlease confirm availability and pricing.`)}`

  if (items.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/[0.05]">
        <h1 className="text-2xl font-extrabold text-[#071225]">Your cart is empty</h1>
        <p className="mt-2 text-sm text-[#64748b]">Add products from the shop, then checkout on WhatsApp.</p>
        <Link href="/smartphones" className="mt-6 inline-flex h-11 items-center rounded-full bg-[#071225] px-5 text-sm font-bold text-white hover:bg-gtred">
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
      <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.05]">
        {items.map((item) => (
          <div key={item.id} className="grid gap-4 border-b border-black/[0.06] p-4 last:border-b-0 sm:grid-cols-[6rem_1fr_auto] sm:items-center">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f1f5f9]">
              <Image src={item.image || '/placeholder.svg'} alt={item.name} width={120} height={120} className="h-full w-full object-cover" />
            </div>
            <div>
              <Link href={`/product/${item.id}`} className="font-extrabold text-[#071225] hover:text-gtred">{item.name}</Link>
              <p className="mt-1 text-sm text-[#64748b]">Price on request</p>
              <button type="button" onClick={() => removeItem(item.id)} className="mt-2 text-xs font-bold text-[#dc2626]">Remove</button>
            </div>
            <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
              <div className="grid h-10 grid-cols-3 overflow-hidden rounded-full border border-[#c7d4ee] bg-white text-sm font-bold text-[#071225]">
                <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-10" aria-label={`Decrease ${item.name}`}>-</button>
                <span className="flex w-10 items-center justify-center border-x border-[#e2e8f0]">{item.quantity}</span>
                <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-10" aria-label={`Increase ${item.name}`}>+</button>
              </div>
              <p className="font-extrabold text-[#2563eb]">Quote</p>
            </div>
          </div>
        ))}
      </div>

      <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.05]">
        <h2 className="text-lg font-extrabold text-[#071225]">Order summary</h2>
        <div className="mt-4 flex justify-between text-sm text-[#64748b]">
          <span>Items</span>
          <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </div>
        <div className="mt-3 flex justify-between border-t border-black/[0.06] pt-4 text-sm font-bold text-[#2563eb]">
          <span>Pricing</span>
          <span>Confirm on WhatsApp</span>
        </div>
        <a href={waHref} onClick={clear} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#22c55e] px-5 text-sm font-extrabold text-white hover:bg-[#16a34a]">
          Checkout on WhatsApp
        </a>
        <button type="button" onClick={clear} className="mt-3 h-11 w-full rounded-full border border-[#c7d4ee] text-sm font-bold text-[#071225] hover:border-[#071225]">
          Clear cart
        </button>
        <p className="mt-3 text-center text-xs leading-5 text-[#64748b]">Checkout opens WhatsApp with the cart details and clears the cart on this site.</p>
      </aside>
    </div>
  )
}
