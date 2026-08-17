-- Run this once in Supabase Dashboard -> SQL Editor.

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admin_users where user_id = auth.uid());
$$;

create table if not exists public.products (
  id text primary key,
  name text not null,
  category text not null check (category in ('smartphones', 'tablets', 'laptops', 'accessories')),
  price numeric(12,2) not null check (price >= 0),
  original_price numeric(12,2),
  badge text check (badge in ('New', 'Sale', 'Imported')),
  note text,
  specs text,
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  email text primary key,
  subscribed_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
alter table public.products enable row level security;
alter table public.newsletter_subscribers enable row level security;

drop policy if exists "admins can see their own access" on public.admin_users;
drop policy if exists "public can read products" on public.products;
drop policy if exists "admins manage products" on public.products;
drop policy if exists "visitors can subscribe" on public.newsletter_subscribers;
drop policy if exists "admins can view subscribers" on public.newsletter_subscribers;

create policy "admins can see their own access" on public.admin_users
  for select to authenticated using (user_id = auth.uid());
create policy "public can read products" on public.products
  for select using (true);
create policy "admins manage products" on public.products
  for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "visitors can subscribe" on public.newsletter_subscribers
  for insert to anon, authenticated with check (true);
create policy "admins can view subscribers" on public.newsletter_subscribers
  for select to authenticated using (public.is_admin());

insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

drop policy if exists "public can view product images" on storage.objects;
drop policy if exists "admins manage product images" on storage.objects;

create policy "public can view product images" on storage.objects
  for select using (bucket_id = 'product-images');
create policy "admins manage product images" on storage.objects
  for all to authenticated using (bucket_id = 'product-images' and public.is_admin())
  with check (bucket_id = 'product-images' and public.is_admin());

-- After creating this user in Authentication -> Users, run this statement once.
-- It is safe to run again after the user exists.
insert into public.admin_users (user_id)
select id from auth.users where email = 'tadererageorge0002@gmail.com'
on conflict (user_id) do nothing;
