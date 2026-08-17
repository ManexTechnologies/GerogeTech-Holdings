'use client'

import React from 'react'
import Link from 'next/link'
import { CATEGORIES, type CatalogProduct, baseCatalog, fetchCatalog, toRow } from './catalog'
import { readLikedProductIds } from './productEngagement'
import { createClient } from '../lib/supabase/client'

type FormState = Omit<CatalogProduct, 'id'> & { id?: string }
const emptyForm: FormState = { name: '', category: 'smartphones', price: 0, originalPrice: undefined, badge: undefined, note: '', specs: '', image: '' }

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = React.useState(false)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [products, setProducts] = React.useState<CatalogProduct[]>([])
  const [form, setForm] = React.useState<FormState>(emptyForm)
  const [search, setSearch] = React.useState('')
  const [imageError, setImageError] = React.useState('')
  const [authError, setAuthError] = React.useState('')
  const [likedIds, setLikedIds] = React.useState<string[]>([])

  React.useEffect(() => {
    setAuthenticated(window.sessionStorage.getItem('georgetech-admin-v1') === 'true')
    fetchCatalog().then(setProducts).catch(() => setProducts(baseCatalog()))
    const syncLikes = () => setLikedIds(readLikedProductIds())
    syncLikes()
    window.addEventListener('georgetech-product-engagement-change', syncLikes)
    window.addEventListener('storage', syncLikes)
    return () => {
      window.removeEventListener('georgetech-product-engagement-change', syncLikes)
      window.removeEventListener('storage', syncLikes)
    }
  }, [])

  const signIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setAuthError('')
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithPassword({ email: username, password })
    if (error || !data.user) return setAuthError(error?.message || 'Unable to sign in.')
    const { data: admin } = await supabase.from('admin_users').select('user_id').eq('user_id', data.user.id).maybeSingle()
    if (!admin) { await supabase.auth.signOut(); return setAuthError('This account is not an administrator.') }
    setAuthenticated(true)
  }

  const save = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const id = form.id || `${form.category}-${Date.now()}`
    const product: CatalogProduct = { ...form, id, name: form.name.trim(), price: Number(form.price), originalPrice: form.originalPrice ? Number(form.originalPrice) : undefined, note: form.note?.trim(), specs: form.specs?.trim(), image: form.image?.trim() }
    const { error } = await createClient().from('products').upsert(toRow(product))
    if (error) return setImageError(error.message)
    setProducts(await fetchCatalog())
    setForm(emptyForm)
    setImageError('')
  }

  const removeProduct = async (product: CatalogProduct) => {
    if (!window.confirm(`Delete ${product.name}?`)) return
    const { error } = await createClient().from('products').delete().eq('id', product.id)
    if (error) return setImageError(error.message)
    setProducts(await fetchCatalog())
  }

  const importCatalog = async () => {
    const { error } = await createClient().from('products').upsert(baseCatalog().map(toRow))
    if (error) return setImageError(error.message)
    setProducts(await fetchCatalog())
  }

  const useLocalImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setImageError('Choose an image file.')
      return
    }
    if (file.size > 1_500_000) {
      setImageError('Choose an image smaller than 1.5 MB so it can be stored in this browser.')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setForm((current) => ({ ...current, image: typeof reader.result === 'string' ? reader.result : current.image }))
      setImageError('')
    }
    reader.onerror = () => setImageError('The image could not be read. Please choose another file.')
    reader.readAsDataURL(file)
  }

  if (!authenticated) {
    return (
      <main className="grid min-h-[calc(100vh-5rem)] place-items-center bg-[#f8fafc] p-4">
        <form onSubmit={signIn} className="w-full max-w-sm rounded-lg bg-white p-7 shadow-sm ring-1 ring-black/[0.06]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0087c8]">GeorgeTech Holdings</p>
          <h1 className="mt-2 text-2xl font-extrabold text-[#071225]">Admin sign in</h1>
          <p className="mt-2 text-sm text-[#64748b]">Use the administrator password to manage the product catalogue.</p>
          <label className="mt-6 block text-sm font-bold text-[#071225]" htmlFor="admin-username">Email address</label>
          <input id="admin-username" value={username} onChange={(event) => setUsername(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-[#c7d4ee] px-3 outline-none focus:border-[#0087c8]" autoComplete="username" required />
          <label className="mt-4 block text-sm font-bold text-[#071225]" htmlFor="admin-password">Password</label>
          <input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-[#c7d4ee] px-3 outline-none focus:border-[#0087c8]" required />
          <button className="mt-4 h-11 w-full rounded-lg bg-[#071225] text-sm font-bold text-white hover:bg-gtred">Sign in</button>
          {authError && <p className="mt-3 text-xs text-[#dc2626]">{authError}</p>}
        </form>
      </main>
    )
  }

  const visibleProducts = products
    .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
    .sort((left, right) => Number(likedIds.includes(right.id)) - Number(likedIds.includes(left.id)) || left.name.localeCompare(right.name))
  return (
    <main className="min-h-screen bg-[#f8fafc] py-8 md:py-12">
      <div className="container">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0087c8]">Catalogue</p><h1 className="mt-1 text-3xl font-extrabold text-[#071225]">Product management</h1></div>
          <div className="flex gap-2"><Link href="/" className="rounded-lg border border-[#c7d4ee] bg-white px-4 py-2 text-sm font-bold text-[#071225]">View site</Link><button onClick={importCatalog} className="rounded-lg border border-[#c7d4ee] bg-white px-4 py-2 text-sm font-bold text-[#071225]">Import catalogue</button><button onClick={async () => { await createClient().auth.signOut(); setAuthenticated(false) }} className="rounded-lg border border-[#fecaca] bg-white px-4 py-2 text-sm font-bold text-[#b91c1c]">Sign out</button></div>
        </div>
        <div className="grid gap-6 xl:grid-cols-[23rem_1fr]">
          <section className="h-fit rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/[0.06]">
            <h2 className="text-lg font-extrabold text-[#071225]">{form.id ? 'Edit product' : 'Add product'}</h2>
            <form onSubmit={save} className="mt-5 grid gap-3">
              <label className="text-sm font-bold text-[#071225]">Product name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 h-10 w-full rounded-lg border border-[#c7d4ee] px-3 font-normal" required /></label>
              <div className="grid grid-cols-2 gap-3"><label className="text-sm font-bold text-[#071225]">Category<select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="mt-1 h-10 w-full rounded-lg border border-[#c7d4ee] px-2 font-normal">{CATEGORIES.map((category) => <option key={category}>{category}</option>)}</select></label><label className="text-sm font-bold text-[#071225]">Price (USD)<input value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} type="number" min="0" step="0.01" className="mt-1 h-10 w-full rounded-lg border border-[#c7d4ee] px-3 font-normal" required /></label></div>
              <label className="text-sm font-bold text-[#071225]">Previous price (optional)<input value={form.originalPrice ?? ''} onChange={(e) => setForm({ ...form, originalPrice: e.target.value ? Number(e.target.value) : undefined })} type="number" min="0" step="0.01" className="mt-1 h-10 w-full rounded-lg border border-[#c7d4ee] px-3 font-normal" /></label>
              <div>
                <label className="text-sm font-bold text-[#071225]" htmlFor="product-image-upload">Product image</label>
                <input id="product-image-upload" type="file" accept="image/*" onChange={useLocalImage} className="mt-1 block w-full text-sm text-[#64748b] file:mr-3 file:rounded-lg file:border-0 file:bg-[#eff6ff] file:px-3 file:py-2 file:text-sm file:font-bold file:text-[#071225] hover:file:bg-[#dbeafe]" />
                <p className="mt-1 text-xs leading-5 text-[#64748b]">Image files are stored in this browser. Keep each file below 1.5 MB.</p>
                {imageError && <p className="mt-1 text-xs font-semibold text-[#dc2626]" role="alert">{imageError}</p>}
              </div>
              <label className="text-sm font-bold text-[#071225]">Image path or URL<input value={form.image || ''} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="/product-image.jpg" className="mt-1 h-10 w-full rounded-lg border border-[#c7d4ee] px-3 font-normal" /></label>
              {form.image && <img src={form.image} alt="Selected product preview" className="h-36 w-full rounded-lg border border-[#c7d4ee] object-cover" />}
              <label className="text-sm font-bold text-[#071225]">Short description<textarea value={form.note || ''} onChange={(e) => setForm({ ...form, note: e.target.value })} rows={2} className="mt-1 w-full rounded-lg border border-[#c7d4ee] p-3 font-normal" /></label>
              <label className="text-sm font-bold text-[#071225]">Specifications<textarea value={form.specs || ''} onChange={(e) => setForm({ ...form, specs: e.target.value })} rows={2} placeholder="8GB RAM | 128GB | 50MP" className="mt-1 w-full rounded-lg border border-[#c7d4ee] p-3 font-normal" /></label>
              <div className="flex gap-2"><button className="h-11 flex-1 rounded-lg bg-[#071225] text-sm font-bold text-white hover:bg-gtred">{form.id ? 'Save changes' : 'Add product'}</button>{form.id && <button type="button" onClick={() => setForm(emptyForm)} className="rounded-lg border border-[#c7d4ee] px-4 text-sm font-bold text-[#071225]">Cancel</button>}</div>
            </form>
          </section>
          <section className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/[0.06]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] p-5"><h2 className="text-lg font-extrabold text-[#071225]">Products <span className="text-sm text-[#64748b]">({products.length})</span></h2><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products" className="h-10 rounded-lg border border-[#c7d4ee] px-3 text-sm" /></div>
            <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-[#f8fafc] text-xs uppercase tracking-wide text-[#64748b]"><tr><th className="px-5 py-3">Product</th><th className="px-5 py-3">Category</th><th className="px-5 py-3">Price</th><th className="px-5 py-3">Likes</th><th className="px-5 py-3">Actions</th></tr></thead><tbody>{visibleProducts.map((product) => <tr key={product.id} className="border-t border-black/[0.05]"><td className="px-5 py-3 font-bold text-[#071225]">{product.name}</td><td className="px-5 py-3 capitalize text-[#64748b]">{product.category}</td><td className="px-5 py-3 font-bold text-[#071225]">US${product.price.toFixed(2)}</td><td className="px-5 py-3"><span className="inline-flex min-w-8 justify-center rounded-full bg-[#fef2f2] px-2 py-1 text-xs font-extrabold text-[#dc2626]">{likedIds.includes(product.id) ? 1 : 0}</span></td><td className="px-5 py-3"><button onClick={() => setForm(product)} className="mr-3 font-bold text-[#0087c8]">Edit</button><button onClick={() => removeProduct(product)} className="font-bold text-[#dc2626]">Delete</button></td></tr>)}</tbody></table></div>
          </section>
        </div>
      </div>
    </main>
  )
}
