'use client'

import ProductCard from './ProductCard'
import { useCatalog } from './catalog'

export default function CategoryProductGrid({ category }: { category: string }) {
  const products = useCatalog(category)

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} glass />
      ))}
    </div>
  )
}
