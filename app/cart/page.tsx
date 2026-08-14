import React from 'react'
import { CartPageClient } from '../../components/CartControls'

export const metadata = {
  title: 'Cart — GeorgeTech Holdings',
  description: 'Review your GeorgeTech cart and checkout on WhatsApp.',
}

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="border-b border-black/[0.05] bg-white py-10">
        <div className="container">
          <h1 className="text-3xl font-extrabold text-[#071225] md:text-4xl">Cart</h1>
          <p className="mt-2 max-w-lg text-sm leading-6 text-[#64748b]">
            Review your products, adjust quantities, then send the order to GeorgeTech on WhatsApp.
          </p>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <CartPageClient />
      </section>
    </div>
  )
}
