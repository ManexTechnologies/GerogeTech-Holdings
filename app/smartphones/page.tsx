import React from 'react'
import { PHONE_BRANDS } from '../../data/products'
import ProductCard from '../../components/ProductCard'

export default function SmartphonesPage() {
  return (
    <div className="py-12 bg-gtgrey min-h-screen">
      <div className="container">
        <div className="glass-card p-6">
          <div className="flex flex-col gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold">Smartphones</h1>
              <p className="text-sm muted mt-2">Explore our full smartphone catalog by brand, with model specs and import-ready options.</p>
            </div>
          </div>

          {PHONE_BRANDS.map((brand) => (
            <div key={brand.name} className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold mb-4 text-gtblack border-b border-gray-200 pb-2">{brand.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {brand.phones.map((phone, i) => (
                  <ProductCard key={phone.id} product={phone} index={i} glass />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}