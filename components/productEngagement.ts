'use client'

import React from 'react'

const LIKES_KEY = 'georgetech-product-likes-v1'
const COMPARE_KEY = 'georgetech-product-compare-v1'
const ENGAGEMENT_EVENT = 'georgetech-product-engagement-change'

function readIds(key: string): string[] {
  if (typeof window === 'undefined') return []
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) || '[]')
    return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === 'string') : []
  } catch {
    return []
  }
}

function writeIds(key: string, ids: string[]) {
  window.localStorage.setItem(key, JSON.stringify(ids))
  window.dispatchEvent(new Event(ENGAGEMENT_EVENT))
}

export function readLikedProductIds() {
  return readIds(LIKES_KEY)
}

export function useLikedProductIds() {
  const [likedIds, setLikedIds] = React.useState<string[]>([])

  React.useEffect(() => {
    const sync = () => setLikedIds(readIds(LIKES_KEY))
    sync()
    window.addEventListener(ENGAGEMENT_EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(ENGAGEMENT_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  return likedIds
}

export function useProductEngagement(productId: string) {
  const [likedIds, setLikedIds] = React.useState<string[]>([])
  const [compareIds, setCompareIds] = React.useState<string[]>([])

  React.useEffect(() => {
    const sync = () => {
      setLikedIds(readIds(LIKES_KEY))
      setCompareIds(readIds(COMPARE_KEY))
    }
    sync()
    window.addEventListener(ENGAGEMENT_EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(ENGAGEMENT_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const toggleLike = () => writeIds(LIKES_KEY, likedIds.includes(productId) ? likedIds.filter((id) => id !== productId) : [...likedIds, productId])
  const toggleCompare = () => {
    if (compareIds.includes(productId)) return writeIds(COMPARE_KEY, compareIds.filter((id) => id !== productId))
    if (compareIds.length < 3) writeIds(COMPARE_KEY, [...compareIds, productId])
  }

  return { liked: likedIds.includes(productId), compared: compareIds.includes(productId), compareLimitReached: compareIds.length >= 3 && !compareIds.includes(productId), toggleLike, toggleCompare }
}
