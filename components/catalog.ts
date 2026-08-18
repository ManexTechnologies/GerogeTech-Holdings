'use client'

import React from 'react'
import { ALL_PRODUCTS, type Product } from '../data/products'
import { createClient } from '../lib/supabase/client'

export type CatalogProduct = Product & { category: string }
export const CATEGORIES = ['smartphones', 'tablets', 'laptops', 'accessories'] as const
type ProductRow = { id: string; name: string; category: string; price: number; original_price: number | null; badge: Product['badge'] | null; note: string | null; specs: string | null; image_url: string | null }

export const fromRow = (row: ProductRow): CatalogProduct => ({ id: row.id, name: row.name, category: row.category, price: Number(row.price), originalPrice: row.original_price ?? undefined, badge: row.badge ?? undefined, note: row.note ?? undefined, specs: row.specs ?? undefined, image: row.image_url ?? undefined })
export const toRow = (product: CatalogProduct): ProductRow => ({ id: product.id, name: product.name, category: product.category, price: product.price, original_price: product.originalPrice ?? null, badge: product.badge ?? null, note: product.note ?? null, specs: product.specs ?? null, image_url: product.image ?? null })
export const baseCatalog = (): CatalogProduct[] => ALL_PRODUCTS.map((product) => ({ ...product }))
export const readCatalog = (): CatalogProduct[] => baseCatalog()

export async function fetchCatalog() {
  const { data, error } = await createClient().from('products').select('id,name,category,price,original_price,badge,note,specs,image_url').order('name')
  if (error) throw error
  return (data as ProductRow[]).map(fromRow)
}

export function useCatalog(category?: string) {
  const [products, setProducts] = React.useState<CatalogProduct[]>(baseCatalog)

  React.useEffect(() => {
    let active = true
    fetchCatalog()
      .then((catalog) => {
        if (active) setProducts(catalog)
      })
      .catch(() => {
        // Keep the bundled catalogue visible if the database is temporarily unavailable.
      })
    return () => { active = false }
  }, [])

  return category ? products.filter((product) => product.category === category) : products
}
