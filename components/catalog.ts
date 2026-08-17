'use client'

import React from 'react'
import { ALL_PRODUCTS, type Product } from '../data/products'

export type CatalogProduct = Product & { category: string }

const CATALOG_KEY = 'georgetech-catalog-v1'
const CATALOG_EVENT = 'georgetech-catalog-change'

export const CATEGORIES = ['smartphones', 'tablets', 'laptops', 'accessories'] as const

function baseCatalog(): CatalogProduct[] {
  return ALL_PRODUCTS.map((product) => ({ ...product }))
}

export function readCatalog(): CatalogProduct[] {
  if (typeof window === 'undefined') return baseCatalog()
  try {
    const raw = window.localStorage.getItem(CATALOG_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    return Array.isArray(parsed) ? parsed : baseCatalog()
  } catch {
    return baseCatalog()
  }
}

export function writeCatalog(products: CatalogProduct[]) {
  window.localStorage.setItem(CATALOG_KEY, JSON.stringify(products))
  window.dispatchEvent(new Event(CATALOG_EVENT))
}

export function useCatalog(category?: string) {
  const [products, setProducts] = React.useState<CatalogProduct[]>(baseCatalog)

  React.useEffect(() => {
    const sync = () => setProducts(readCatalog())
    sync()
    window.addEventListener(CATALOG_EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(CATALOG_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  return category ? products.filter((product) => product.category === category) : products
}
