export type Product = {
  id: string
  name: string
  price: number
  originalPrice?: number
  badge?: 'New' | 'Sale' | 'Imported'
  note?: string
  specs?: string
  image?: string
}

export type PhoneBrand = {
  name: string
  phones: Product[]
}

export const PHONE_BRANDS: PhoneBrand[] = [
  {
    name: 'Samsung',
    phones: [
      // 2022
      { id: 'samsung-s22', name: 'Samsung Galaxy S22', price: 699.0, badge: 'Sale', note: '2022 flagship', specs: '8GB RAM · 128GB · 50MP · Dynamic AMOLED 2X', image: '/samsung-s23.jpg' },
      { id: 'samsung-s22-plus', name: 'Samsung Galaxy S22+', price: 849.0, badge: 'Sale', note: '2022 flagship', specs: '8GB RAM · 128GB · 50MP · 6.6" AMOLED', image: '/samsung-s23.jpg' },
      { id: 'samsung-s22-ultra', name: 'Samsung Galaxy S22 Ultra', price: 1049.0, badge: 'Sale', note: 'Note replacement', specs: '12GB RAM · 256GB · 108MP · S Pen', image: '/samsung-s23.jpg' },
      { id: 'samsung-a53', name: 'Samsung Galaxy A53 5G', price: 349.0, note: 'Mid-range 5G', specs: '6GB RAM · 128GB · 64MP · 120Hz', image: '/phone-generic.jpg' },
      { id: 'samsung-a33', name: 'Samsung Galaxy A33 5G', price: 299.0, note: 'Mid-range 5G', specs: '6GB RAM · 128GB · 48MP · Super AMOLED', image: '/phone-generic.jpg' },
      { id: 'samsung-a23', name: 'Samsung Galaxy A23', price: 199.0, note: 'Budget friendly', specs: '4GB RAM · 64GB · 50MP · 90Hz', image: '/phone-generic.jpg' },
      { id: 'samsung-zflip4', name: 'Samsung Galaxy Z Flip4', price: 899.0, note: 'Foldable compact', specs: '8GB RAM · 128GB · 12MP · Foldable AMOLED', image: '/phone-generic.jpg' },
      { id: 'samsung-zfold4', name: 'Samsung Galaxy Z Fold4', price: 1499.0, note: 'Foldable tablet', specs: '12GB RAM · 256GB · 50MP · 7.6" Foldable', image: '/phone-generic.jpg' },
      { id: 'samsung-m33', name: 'Samsung Galaxy M33', price: 229.0, note: 'Massive battery', specs: '6GB RAM · 128GB · 50MP · 6000mAh', image: '/phone-generic.jpg' },
      { id: 'samsung-m53', name: 'Samsung Galaxy M53', price: 299.0, note: 'Big battery champ', specs: '8GB RAM · 128GB · 108MP · 5000mAh', image: '/phone-generic.jpg' },
      // 2023
      { id: 'samsung-s23', name: 'Samsung Galaxy S23', price: 799.0, badge: 'New', note: '2023 flagship', specs: '8GB RAM · 128GB · 50MP · Snapdragon 8 Gen 2', image: '/samsung-s23.jpg' },
      { id: 'samsung-s23-plus', name: 'Samsung Galaxy S23+', price: 999.0, note: '2023 flagship', specs: '8GB RAM · 256GB · 50MP · 6.6" AMOLED', image: '/samsung-s23.jpg' },
      { id: 'samsung-s23-ultra', name: 'Samsung Galaxy S23 Ultra', price: 1199.0, originalPrice: 1299.0, badge: 'Sale', note: 'Ultimate flagship', specs: '12GB RAM · 256GB · 200MP · S Pen', image: '/samsung-s23.jpg' },
      { id: 'samsung-s23-fe', name: 'Samsung Galaxy S23 FE', price: 599.0, note: 'Fan Edition', specs: '8GB RAM · 128GB · 50MP · Exynos 2200', image: '/phone-generic.jpg' },
      { id: 'samsung-a14', name: 'Samsung Galaxy A14', price: 149.0, note: 'Budget 5G', specs: '4GB RAM · 64GB · 50MP · 6.6" PLS', image: '/phone-generic.jpg' },
      { id: 'samsung-a24', name: 'Samsung Galaxy A24', price: 199.0, note: 'Great display', specs: '6GB RAM · 128GB · 50MP · Super AMOLED', image: '/phone-generic.jpg' },
      { id: 'samsung-a34', name: 'Samsung Galaxy A34', price: 299.0, note: 'Mid-range champ', specs: '6GB RAM · 128GB · 48MP · 120Hz', image: '/phone-generic.jpg' },
      { id: 'samsung-a54', name: 'Samsung Galaxy A54', price: 399.0, note: 'Best mid-range', specs: '8GB RAM · 128GB · 50MP · 120Hz', image: '/phone-generic.jpg' },
      { id: 'samsung-zflip5', name: 'Samsung Galaxy Z Flip5', price: 999.0, note: 'Larger cover screen', specs: '8GB RAM · 256GB · 12MP · 3.4" Cover', image: '/phone-generic.jpg' },
      { id: 'samsung-zfold5', name: 'Samsung Galaxy Z Fold5', price: 1599.0, note: 'Thinner & lighter', specs: '12GB RAM · 256GB · 50MP · IPX8', image: '/phone-generic.jpg' },
      // 2024
      { id: 'samsung-s24', name: 'Samsung Galaxy S24', price: 799.0, badge: 'New', note: 'AI powered', specs: '8GB RAM · 128GB · 50MP · Galaxy AI', image: '/samsung-s23.jpg' },
      { id: 'samsung-s24-plus', name: 'Samsung Galaxy S24+', price: 999.0, note: 'AI flagship', specs: '12GB RAM · 256GB · 50MP · QHD+', image: '/samsung-s23.jpg' },
      { id: 'samsung-s24-ultra', name: 'Samsung Galaxy S24 Ultra', price: 1299.0, note: 'Titanium flagship', specs: '12GB RAM · 256GB · 200MP · Titanium', image: '/samsung-s23.jpg' },
      { id: 'samsung-a15', name: 'Samsung Galaxy A15', price: 159.0, note: 'Budget 5G', specs: '4GB RAM · 128GB · 50MP · Super AMOLED', image: '/phone-generic.jpg' },
      { id: 'samsung-a25', name: 'Samsung Galaxy A25', price: 229.0, note: 'Great value', specs: '6GB RAM · 128GB · 50MP · OIS', image: '/phone-generic.jpg' },
      { id: 'samsung-a35', name: 'Samsung Galaxy A35', price: 329.0, note: 'Mid-range 5G', specs: '6GB RAM · 128GB · 50MP · IP67', image: '/phone-generic.jpg' },
      { id: 'samsung-a55', name: 'Samsung Galaxy A55', price: 439.0, note: 'Premium mid-range', specs: '8GB RAM · 128GB · 50MP · Metal frame', image: '/phone-generic.jpg' },
      { id: 'samsung-zflip6', name: 'Samsung Galaxy Z Flip6', price: 1099.0, note: 'Improved foldable', specs: '12GB RAM · 256GB · 50MP · Snapdragon 8 Gen 3', image: '/phone-generic.jpg' },
      { id: 'samsung-zfold6', name: 'Samsung Galaxy Z Fold6', price: 1799.0, note: 'Thinnest foldable', specs: '12GB RAM · 256GB · 50MP · 7.6" Dynamic AMOLED', image: '/phone-generic.jpg' },
      // 2025
      { id: 'samsung-s25', name: 'Samsung Galaxy S25', price: 799.0, badge: 'New', note: 'Latest flagship', specs: '12GB RAM · 128GB · 50MP · One UI 7', image: '/samsung-s23.jpg' },
      { id: 'samsung-s25-plus', name: 'Samsung Galaxy S25+', price: 999.0, note: 'Latest flagship', specs: '12GB RAM · 256GB · 50MP · QHD+ Display', image: '/samsung-s23.jpg' },
      { id: 'samsung-s25-ultra', name: 'Samsung Galaxy S25 Ultra', price: 1299.0, note: 'Ultimate flagship', specs: '12GB RAM · 256GB · 200MP · Titanium', image: '/samsung-s23.jpg' },
      { id: 'samsung-s25-edge', name: 'Samsung Galaxy S25 Edge', price: 1099.0, note: 'Ultra-slim', specs: '12GB RAM · 256GB · 200MP · Slim design', image: '/phone-generic.jpg' },
      { id: 'samsung-a16', name: 'Samsung Galaxy A16', price: 179.0, note: 'Budget 2025', specs: '4GB RAM · 128GB · 50MP · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'samsung-a26', name: 'Samsung Galaxy A26', price: 249.0, note: 'Great value', specs: '6GB RAM · 128GB · 50MP · Super AMOLED', image: '/phone-generic.jpg' },
      { id: 'samsung-a36', name: 'Samsung Galaxy A36', price: 349.0, note: 'Mid-range 5G', specs: '6GB RAM · 128GB · 50MP · IP67', image: '/phone-generic.jpg' },
      { id: 'samsung-a56', name: 'Samsung Galaxy A56', price: 459.0, note: 'Premium mid-range', specs: '8GB RAM · 128GB · 50MP · 45W charging', image: '/phone-generic.jpg' },
      { id: 'samsung-zflip7', name: 'Samsung Galaxy Z Flip7', price: 1199.0, note: 'Next gen foldable', specs: '12GB RAM · 256GB · 50MP · Larger cover', image: '/phone-generic.jpg' },
      { id: 'samsung-zfold7', name: 'Samsung Galaxy Z Fold7', price: 1899.0, note: 'Next gen foldable', specs: '12GB RAM · 256GB · 50MP · Under display cam', image: '/phone-generic.jpg' },
      // 2026
      { id: 'samsung-s26', name: 'Samsung Galaxy S26 (Series)', price: 899.0, badge: 'New', note: 'Current generation', specs: '12GB RAM · 128GB · 50MP · Latest chipset', image: '/samsung-s23.jpg' },
      { id: 'samsung-zflip8', name: 'Samsung Galaxy Z Flip8', price: 1299.0, note: 'Current generation', specs: '12GB RAM · 256GB · 50MP · Latest foldable', image: '/phone-generic.jpg' },
      { id: 'samsung-zfold8', name: 'Samsung Galaxy Z Fold8', price: 1999.0, note: 'Current generation', specs: '12GB RAM · 512GB · 200MP · Latest foldable', image: '/phone-generic.jpg' },
    ]
  },
  {
    name: 'Apple iPhone',
    phones: [
      // 2022
      { id: 'iphone-se3', name: 'Apple iPhone SE (3rd Gen)', price: 429.0, note: 'Budget Apple', specs: '4.7" Retina · A15 Bionic · 12MP · Touch ID', image: '/iphone-14.jpg' },
      { id: 'iphone-14', name: 'Apple iPhone 14', price: 699.0, badge: 'Sale', note: '2022 standard', specs: '6.1" Super Retina · A15 Bionic · 12MP · 5G', image: '/iphone-14.jpg' },
      { id: 'iphone-14-plus', name: 'Apple iPhone 14 Plus', price: 799.0, note: 'Big screen 2022', specs: '6.7" Super Retina · A15 Bionic · 12MP · 5G', image: '/iphone-14.jpg' },
      { id: 'iphone-14-pro', name: 'Apple iPhone 14 Pro', price: 999.0, note: 'Pro flagship 2022', specs: '6.1" ProMotion · A16 Bionic · 48MP · Dynamic Island', image: '/iphone-14.jpg' },
      { id: 'iphone-14-pro-max', name: 'Apple iPhone 14 Pro Max', price: 1099.0, note: 'Pro flagship 2022', specs: '6.7" ProMotion · A16 Bionic · 48MP · Dynamic Island', image: '/iphone-14.jpg' },
      // 2023
      { id: 'iphone-15', name: 'Apple iPhone 15', price: 799.0, badge: 'New', note: 'USB-C Apple', specs: '6.1" Super Retina · A16 Bionic · 48MP · USB-C', image: '/iphone-14.jpg' },
      { id: 'iphone-15-plus', name: 'Apple iPhone 15 Plus', price: 899.0, note: 'USB-C big screen', specs: '6.7" Super Retina · A16 Bionic · 48MP · USB-C', image: '/iphone-14.jpg' },
      { id: 'iphone-15-pro', name: 'Apple iPhone 15 Pro', price: 1099.0, note: 'Titanium Apple', specs: '6.1" ProMotion · A17 Pro · 48MP · Titanium', image: '/iphone-14.jpg' },
      { id: 'iphone-15-pro-max', name: 'Apple iPhone 15 Pro Max', price: 1199.0, note: 'Titanium flagship', specs: '6.7" ProMotion · A17 Pro · 48MP · 5x Zoom', image: '/iphone-14.jpg' },
      // 2024
      { id: 'iphone-16', name: 'Apple iPhone 16', price: 799.0, badge: 'New', note: 'AI ready', specs: '6.1" Super Retina · A18 · 48MP · Apple Intelligence', image: '/iphone-14.jpg' },
      { id: 'iphone-16-plus', name: 'Apple iPhone 16 Plus', price: 899.0, note: 'AI ready big', specs: '6.7" Super Retina · A18 · 48MP · Apple Intelligence', image: '/iphone-14.jpg' },
      { id: 'iphone-16-pro', name: 'Apple iPhone 16 Pro', price: 1099.0, note: 'Pro AI flagship', specs: '6.3" ProMotion · A18 Pro · 48MP · 5x Zoom', image: '/iphone-14.jpg' },
      { id: 'iphone-16-pro-max', name: 'Apple iPhone 16 Pro Max', price: 1199.0, note: 'Ultimate iPhone', specs: '6.9" ProMotion · A18 Pro · 48MP · 5x Zoom', image: '/iphone-14.jpg' },
      { id: 'iphone-16e', name: 'Apple iPhone 16e', price: 599.0, note: 'Affordable iPhone', specs: '6.1" Super Retina · A18 · 48MP · USB-C', image: '/iphone-14.jpg' },
      // 2025
      { id: 'iphone-17', name: 'Apple iPhone 17', price: 799.0, badge: 'New', note: 'Latest standard', specs: '6.1" Super Retina · A19 · 48MP · Apple Intelligence', image: '/iphone-14.jpg' },
      { id: 'iphone-17-air', name: 'Apple iPhone 17 Air', price: 899.0, note: 'Ultra-slim iPhone', specs: '6.6" Super Retina · A19 · 48MP · Slim design', image: '/iphone-14.jpg' },
      { id: 'iphone-17-pro', name: 'Apple iPhone 17 Pro', price: 1099.0, note: 'Pro latest', specs: '6.3" ProMotion · A19 Pro · 48MP · Titanium', image: '/iphone-14.jpg' },
      { id: 'iphone-17-pro-max', name: 'Apple iPhone 17 Pro Max', price: 1199.0, note: 'Ultimate flagship', specs: '6.9" ProMotion · A19 Pro · 48MP · Periscope zoom', image: '/iphone-14.jpg' },
      // 2026
      { id: 'iphone-18', name: 'Apple iPhone 18 Series', price: 899.0, badge: 'New', note: 'Current generation', specs: '6.1" Super Retina · A20 · 48MP · Latest AI', image: '/iphone-14.jpg' },
    ]
  },
  {
    name: 'Google Pixel',
    phones: [
      { id: 'pixel-6a', name: 'Google Pixel 6a', price: 349.0, note: 'Best budget Pixel', specs: '6.1" OLED · Tensor · 12MP · 5G', image: '/pixel-phone.jpg' },
      { id: 'pixel-7', name: 'Google Pixel 7', price: 499.0, note: 'Clean Android', specs: '6.3" OLED · Tensor G2 · 50MP · 5G', image: '/pixel-phone.jpg' },
      { id: 'pixel-7-pro', name: 'Google Pixel 7 Pro', price: 699.0, note: 'Pro Pixel', specs: '6.7" OLED · Tensor G2 · 50MP · Telephoto', image: '/pixel-phone.jpg' },
      { id: 'pixel-7a', name: 'Google Pixel 7a', price: 399.0, note: '2023 budget', specs: '6.1" OLED · Tensor G2 · 64MP · 5G', image: '/pixel-phone.jpg' },
      { id: 'pixel-fold', name: 'Google Pixel Fold', price: 1399.0, note: 'Foldable Pixel', specs: '7.6" OLED · Tensor G2 · 48MP · Foldable', image: '/phone-generic.jpg' },
      { id: 'pixel-8', name: 'Google Pixel 8', price: 599.0, badge: 'New', note: '2023 flagship', specs: '6.2" OLED · Tensor G3 · 50MP · AI', image: '/pixel-phone.jpg' },
      { id: 'pixel-8-pro', name: 'Google Pixel 8 Pro', price: 799.0, note: '2023 pro flagship', specs: '6.7" OLED · Tensor G3 · 50MP · 5x Zoom', image: '/pixel-phone.jpg' },
      { id: 'pixel-8a', name: 'Google Pixel 8a', price: 449.0, note: '2024 budget', specs: '6.1" OLED · Tensor G3 · 64MP · AI', image: '/pixel-phone.jpg' },
      { id: 'pixel-9', name: 'Google Pixel 9', price: 699.0, badge: 'New', note: 'AI flagship', specs: '6.3" OLED · Tensor G4 · 50MP · Gemini AI', image: '/pixel-phone.jpg' },
      { id: 'pixel-9-pro', name: 'Google Pixel 9 Pro', price: 899.0, note: 'Compact pro', specs: '6.3" OLED · Tensor G4 · 50MP · 5x Zoom', image: '/pixel-phone.jpg' },
      { id: 'pixel-9-pro-xl', name: 'Google Pixel 9 Pro XL', price: 999.0, note: 'Large pro', specs: '6.8" OLED · Tensor G4 · 50MP · AI features', image: '/pixel-phone.jpg' },
      { id: 'pixel-9-pro-fold', name: 'Google Pixel 9 Pro Fold', price: 1499.0, note: 'Foldable pro', specs: '8" OLED · Tensor G4 · 48MP · Foldable', image: '/phone-generic.jpg' },
      { id: 'pixel-9a', name: 'Google Pixel 9a', price: 499.0, note: '2025 budget', specs: '6.2" OLED · Tensor G4 · 48MP · AI', image: '/pixel-phone.jpg' },
      { id: 'pixel-10', name: 'Google Pixel 10', price: 799.0, badge: 'New', note: 'Latest Pixel', specs: '6.3" OLED · Tensor G5 · 50MP · Next-gen AI', image: '/pixel-phone.jpg' },
      { id: 'pixel-10-pro', name: 'Google Pixel 10 Pro', price: 999.0, note: 'Latest pro', specs: '6.3" OLED · Tensor G5 · 50MP · Enhanced zoom', image: '/pixel-phone.jpg' },
      { id: 'pixel-10-pro-xl', name: 'Google Pixel 10 Pro XL', price: 1099.0, note: 'Latest pro XL', specs: '6.8" OLED · Tensor G5 · 50MP · Best AI', image: '/pixel-phone.jpg' },
      { id: 'pixel-10-pro-fold', name: 'Google Pixel 10 Pro Fold', price: 1599.0, note: 'Latest foldable', specs: '8" OLED · Tensor G5 · 48MP · Foldable', image: '/phone-generic.jpg' },
      { id: 'pixel-10a', name: 'Google Pixel 10a', price: 549.0, note: '2026 budget', specs: '6.2" OLED · Tensor G5 · 48MP · AI', image: '/pixel-phone.jpg' },
      { id: 'pixel-11', name: 'Google Pixel 11 Series', price: 899.0, badge: 'New', note: 'Current generation', specs: '6.3" OLED · Tensor G6 · 50MP · Latest AI', image: '/pixel-phone.jpg' },
    ]
  },
  {
    name: 'Redmi (Xiaomi)',
    phones: [
      { id: 'redmi-note11', name: 'Redmi Note 11', price: 179.0, note: 'Best seller', specs: '6.43" AMOLED · Snapdragon 680 · 50MP · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'redmi-note11-pro', name: 'Redmi Note 11 Pro', price: 249.0, note: 'Great value', specs: '6.67" AMOLED · Helio G96 · 108MP · 67W', image: '/phone-generic.jpg' },
      { id: 'redmi-note11-pro-plus', name: 'Redmi Note 11 Pro+ 5G', price: 329.0, note: 'Fast charging', specs: '6.67" AMOLED · Dimensity 920 · 108MP · 120W', image: '/phone-generic.jpg' },
      { id: 'redmi-10a', name: 'Redmi 10A', price: 89.0, note: 'Entry level', specs: '6.53" IPS · Helio G25 · 13MP · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'redmi-a1', name: 'Redmi A1', price: 69.0, note: 'Ultra budget', specs: '6.52" IPS · Helio A22 · 8MP · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'redmi-k50', name: 'Redmi K50', price: 399.0, note: 'Flagship killer', specs: '6.67" AMOLED · Dimensity 8100 · 48MP · 67W', image: '/phone-generic.jpg' },
      { id: 'redmi-note12', name: 'Redmi Note 12', price: 199.0, note: 'Popular 2023', specs: '6.67" AMOLED · Snapdragon 4 Gen 1 · 48MP', image: '/phone-generic.jpg' },
      { id: 'redmi-note12-pro', name: 'Redmi Note 12 Pro', price: 299.0, note: 'Pro value', specs: '6.67" AMOLED · Dimensity 1080 · 50MP · OIS', image: '/phone-generic.jpg' },
      { id: 'redmi-note12-pro-plus', name: 'Redmi Note 12 Pro+', price: 399.0, note: '200MP camera', specs: '6.67" AMOLED · Dimensity 1080 · 200MP · 120W', image: '/phone-generic.jpg' },
      { id: 'redmi-12', name: 'Redmi 12', price: 129.0, note: 'Budget 2023', specs: '6.79" IPS · Helio G88 · 50MP · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'redmi-12c', name: 'Redmi 12C', price: 109.0, note: 'Affordable', specs: '6.71" IPS · Helio G85 · 50MP · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'redmi-k60', name: 'Redmi K60', price: 449.0, note: 'Performance beast', specs: '6.67" AMOLED · Snapdragon 8+ Gen 1 · 64MP', image: '/phone-generic.jpg' },
      { id: 'redmi-note13', name: 'Redmi Note 13', price: 219.0, badge: 'New', note: '2024 bestseller', specs: '6.67" AMOLED · Dimensity 6080 · 108MP · 5G', image: '/phone-generic.jpg' },
      { id: 'redmi-note13-pro', name: 'Redmi Note 13 Pro', price: 329.0, note: 'Pro 2024', specs: '6.67" AMOLED · Snapdragon 7s Gen 2 · 200MP', image: '/phone-generic.jpg' },
      { id: 'redmi-note13-pro-plus', name: 'Redmi Note 13 Pro+', price: 399.0, note: 'Premium mid-range', specs: '6.67" AMOLED · Dimensity 7200 · 200MP · 120W', image: '/phone-generic.jpg' },
      { id: 'redmi-13', name: 'Redmi 13', price: 149.0, note: 'Budget 2024', specs: '6.79" IPS · Helio G91 · 108MP · 5030mAh', image: '/phone-generic.jpg' },
      { id: 'redmi-a3', name: 'Redmi A3', price: 79.0, note: 'Entry 2024', specs: '6.71" IPS · Helio G36 · 8MP · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'redmi-k70', name: 'Redmi K70', price: 499.0, note: 'Flagship 2024', specs: '6.67" AMOLED · Snapdragon 8 Gen 2 · 50MP', image: '/phone-generic.jpg' },
      { id: 'redmi-note14', name: 'Redmi Note 14', price: 249.0, badge: 'New', note: '2025 bestseller', specs: '6.67" AMOLED · Dimensity 7025 · 108MP · 5G', image: '/phone-generic.jpg' },
      { id: 'redmi-note14-pro', name: 'Redmi Note 14 Pro', price: 359.0, note: 'Pro 2025', specs: '6.67" AMOLED · Dimensity 7300 · 200MP · OIS', image: '/phone-generic.jpg' },
      { id: 'redmi-note14-pro-plus', name: 'Redmi Note 14 Pro+', price: 429.0, note: 'Premium 2025', specs: '6.67" AMOLED · Snapdragon 7s Gen 3 · 200MP', image: '/phone-generic.jpg' },
      { id: 'redmi-14c', name: 'Redmi 14C', price: 119.0, note: 'Budget 2025', specs: '6.71" IPS · Helio G81 · 50MP · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'redmi-turbo4', name: 'Redmi Turbo 4', price: 549.0, note: 'Performance', specs: '6.67" AMOLED · Snapdragon 8s Gen 3 · 64MP', image: '/phone-generic.jpg' },
      { id: 'redmi-k80', name: 'Redmi K80', price: 549.0, note: 'Flagship 2025', specs: '6.67" AMOLED · Snapdragon 8 Gen 3 · 50MP', image: '/phone-generic.jpg' },
      { id: 'redmi-note15', name: 'Redmi Note 15 Series', price: 299.0, badge: 'New', note: 'Current generation', specs: '6.7" AMOLED · Latest Dimensity · 108MP', image: '/phone-generic.jpg' },
      { id: 'redmi-k90', name: 'Redmi K90 Series', price: 599.0, note: 'Current flagship', specs: '6.67" AMOLED · Latest Snapdragon · 200MP', image: '/phone-generic.jpg' },
      { id: 'redmi-a5', name: 'Redmi A5', price: 89.0, note: 'Current entry', specs: '6.71" IPS · Latest Helio · 8MP · 5000mAh', image: '/phone-generic.jpg' },
    ]
  },
  {
    name: 'Huawei',
    phones: [
      { id: 'huawei-p50-pro', name: 'Huawei P50 Pro', price: 699.0, note: 'Flagship 2022', specs: '6.6" OLED · Snapdragon 888 · 50MP · HarmonyOS', image: '/phone-generic.jpg' },
      { id: 'huawei-nova10', name: 'Huawei Nova 10', price: 349.0, note: 'Style focused', specs: '6.67" OLED · Snapdragon 778G · 50MP · HarmonyOS', image: '/phone-generic.jpg' },
      { id: 'huawei-nova10-pro', name: 'Huawei Nova 10 Pro', price: 449.0, note: 'Selfie king', specs: '6.78" OLED · Snapdragon 778G · 50MP · 60MP selfie', image: '/phone-generic.jpg' },
      { id: 'huawei-mate50', name: 'Huawei Mate 50', price: 799.0, note: 'Mate series', specs: '6.7" OLED · Snapdragon 8+ Gen 1 · 50MP · HarmonyOS', image: '/phone-generic.jpg' },
      { id: 'huawei-mate50-pro', name: 'Huawei Mate 50 Pro', price: 999.0, note: 'Pro Mate', specs: '6.74" OLED · Snapdragon 8+ Gen 1 · 50MP · Periscope', image: '/phone-generic.jpg' },
      { id: 'huawei-p60', name: 'Huawei P60', price: 699.0, note: '2023 flagship', specs: '6.67" OLED · Snapdragon 8+ Gen 1 · 48MP', image: '/phone-generic.jpg' },
      { id: 'huawei-p60-pro', name: 'Huawei P60 Pro', price: 899.0, note: 'Pro 2023', specs: '6.67" OLED · Snapdragon 8+ Gen 1 · 48MP · Periscope', image: '/phone-generic.jpg' },
      { id: 'huawei-mate60', name: 'Huawei Mate 60', price: 899.0, badge: 'New', note: '5G is back', specs: '6.69" OLED · Kirin 9000s · 50MP · HarmonyOS', image: '/phone-generic.jpg' },
      { id: 'huawei-mate60-pro', name: 'Huawei Mate 60 Pro', price: 1099.0, note: 'Pro 5G', specs: '6.82" OLED · Kirin 9000s · 50MP · Satellite', image: '/phone-generic.jpg' },
      { id: 'huawei-nova11', name: 'Huawei Nova 11', price: 379.0, note: '2023 mid-range', specs: '6.7" OLED · Snapdragon 778G · 50MP · HarmonyOS', image: '/phone-generic.jpg' },
      { id: 'huawei-pura70', name: 'Huawei Pura 70', price: 799.0, badge: 'New', note: 'New Pura series', specs: '6.6" OLED · Kirin 9010 · 50MP · HarmonyOS', image: '/phone-generic.jpg' },
      { id: 'huawei-pura70-pro', name: 'Huawei Pura 70 Pro', price: 999.0, note: 'Pura pro', specs: '6.8" OLED · Kirin 9010 · 50MP · Macro camera', image: '/phone-generic.jpg' },
      { id: 'huawei-pura70-ultra', name: 'Huawei Pura 70 Ultra', price: 1199.0, note: 'Pura ultimate', specs: '6.8" OLED · Kirin 9010 · 50MP · Retractable lens', image: '/phone-generic.jpg' },
      { id: 'huawei-nova13', name: 'Huawei Nova 13', price: 399.0, note: '2024 mid-range', specs: '6.7" OLED · Kirin · 50MP · HarmonyOS', image: '/phone-generic.jpg' },
      { id: 'huawei-mate-x6', name: 'Huawei Mate X6', price: 1799.0, note: 'Foldable flagship', specs: '7.93" Foldable OLED · Kirin 9010 · 50MP', image: '/phone-generic.jpg' },
      { id: 'huawei-pura80', name: 'Huawei Pura 80', price: 899.0, badge: 'New', note: 'Latest Pura', specs: '6.6" OLED · Kirin · 50MP · HarmonyOS 5', image: '/phone-generic.jpg' },
      { id: 'huawei-pura80-pro', name: 'Huawei Pura 80 Pro', price: 1099.0, note: 'Latest Pura pro', specs: '6.8" OLED · Kirin · 50MP · Enhanced AI', image: '/phone-generic.jpg' },
      { id: 'huawei-pura80-ultra', name: 'Huawei Pura 80 Ultra', price: 1299.0, note: 'Latest Pura ultra', specs: '6.8" OLED · Kirin · 50MP · Ultimate camera', image: '/phone-generic.jpg' },
      { id: 'huawei-mate70', name: 'Huawei Mate 70', price: 999.0, note: 'Latest Mate', specs: '6.7" OLED · Kirin · 50MP · Satellite', image: '/phone-generic.jpg' },
      { id: 'huawei-nova14', name: 'Huawei Nova 14', price: 449.0, note: 'Latest Nova', specs: '6.7" OLED · Kirin · 50MP · HarmonyOS', image: '/phone-generic.jpg' },
      { id: 'huawei-mate80', name: 'Huawei Mate 80 Series', price: 1099.0, badge: 'New', note: 'Current generation', specs: '6.7" OLED · Kirin · 50MP · Latest tech', image: '/phone-generic.jpg' },
      { id: 'huawei-pura90', name: 'Huawei Pura 90 Series', price: 999.0, note: 'Current generation', specs: '6.7" OLED · Kirin · 50MP · AI camera', image: '/phone-generic.jpg' },
    ]
  },
  {
    name: 'itel',
    phones: [
      { id: 'itel-a58', name: 'itel A58', price: 59.0, note: 'Entry level', specs: '6.6" IPS · 3GB RAM · 64GB · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-a60', name: 'itel A60', price: 69.0, note: 'Budget friendly', specs: '6.6" IPS · 2GB RAM · 64GB · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-vision3', name: 'itel Vision 3', price: 79.0, note: 'Great display', specs: '6.6" IPS · 3GB RAM · 64GB · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-vision3-plus', name: 'itel Vision 3 Plus', price: 89.0, note: 'Plus version', specs: '6.6" IPS · 4GB RAM · 64GB · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-p38', name: 'itel P38', price: 74.0, note: 'Power series', specs: '6.6" IPS · 3GB RAM · 64GB · 6000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-a60s', name: 'itel A60s', price: 74.0, note: '2023 budget', specs: '6.6" IPS · 3GB RAM · 64GB · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-a70', name: 'itel A70', price: 84.0, note: '2023 update', specs: '6.6" IPS · 4GB RAM · 128GB · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-s23', name: 'itel S23', price: 129.0, note: 'Style phone', specs: '6.78" AMOLED · 8GB RAM · 128GB · 50MP', image: '/phone-generic.jpg' },
      { id: 'itel-s23-plus', name: 'itel S23+', price: 159.0, note: 'Plus style', specs: '6.78" AMOLED · 8GB RAM · 256GB · 50MP', image: '/phone-generic.jpg' },
      { id: 'itel-p40', name: 'itel P40', price: 94.0, note: 'Power 2023', specs: '6.6" IPS · 4GB RAM · 128GB · 6000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-a80', name: 'itel A80', price: 79.0, note: '2024 entry', specs: '6.6" IPS · 4GB RAM · 128GB · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-a90', name: 'itel A90', price: 99.0, note: '2024 budget', specs: '6.6" IPS · 4GB RAM · 128GB · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-s24', name: 'itel S24', price: 139.0, note: '2024 style', specs: '6.78" AMOLED · 8GB RAM · 256GB · 108MP', image: '/phone-generic.jpg' },
      { id: 'itel-p55', name: 'itel P55', price: 89.0, note: 'Power 2024', specs: '6.6" IPS · 4GB RAM · 128GB · 6000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-p65', name: 'itel P65', price: 104.0, note: 'Power plus', specs: '6.6" IPS · 8GB RAM · 128GB · 6000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-a95', name: 'itel A95', price: 109.0, note: '2025 budget', specs: '6.6" IPS · 4GB RAM · 128GB · 5000mAh', image: '/phone-generic.jpg' },
      { id: 'itel-s25', name: 'itel S25', price: 159.0, note: '2025 style', specs: '6.78" AMOLED · 8GB RAM · 256GB · 108MP', image: '/phone-generic.jpg' },
      { id: 'itel-p70', name: 'itel P70', price: 114.0, note: 'Power 2025', specs: '6.6" IPS · 8GB RAM · 128GB · 6000mAh', image: '/phone-generic.jpg' },
    ]
  }
]

export const PRODUCTS: { [key: string]: Product[] } = {
  smartphones: (() => {
    const all: Product[] = []
    PHONE_BRANDS.forEach(b => all.push(...b.phones))
    return all
  })(),
  tablets: [
    { id: 't1', name: 'Apple iPad Air M2', price: 599.0, badge: 'New', note: 'Popular for students', specs: '11" Liquid Retina · M2 chip · 128GB', image: '/ipad-air.jpg' },
    { id: 't2', name: 'Samsung Galaxy Tab S9 FE', price: 449.0, note: 'Powerful and portable', specs: '10.9" TFT · Exynos 1380 · 128GB · S Pen', image: '/tablet-generic.jpg' },
    { id: 't3', name: 'Apple iPad 10th Gen', price: 349.0, badge: 'Sale', originalPrice: 399.0, note: 'Best value iPad', specs: '10.9" Liquid Retina · A14 Bionic · 64GB', image: '/ipad-air.jpg' },
    { id: 't4', name: 'Samsung Galaxy Tab A9+', price: 269.0, note: 'Great for entertainment', specs: '11" TFT · Snapdragon 695 · 64GB', image: '/tablet2.jpg' },
    { id: 't5', name: 'Huawei MatePad 11.5', price: 299.0, note: 'PaperMatte display', specs: '11.5" 2.2K · HarmonyOS · 128GB', image: '/tablet3.jpg' },
    { id: 't6', name: 'Lenovo Tab P12', price: 329.0, note: 'For productivity', specs: '12.7" 3K · MediaTek Dimensity 7050 · 256GB', image: '/tablet4.jpg' }
  ],
  laptops: [
    { id: 'l1', name: 'MacBook Pro 14" M3 Pro', price: 1999.0, originalPrice: 2199.0, badge: 'Sale', note: 'Limited units', specs: 'M3 Pro · 18GB RAM · 512GB SSD', image: '/macbook-pro.jpg' },
    { id: 'l2', name: 'Dell XPS 13 Plus', price: 1299.0, note: 'Ultrabook for professionals', specs: 'i7-1360P · 16GB RAM · 512GB SSD', image: '/laptop-generic.jpg' },
    { id: 'l3', name: 'MacBook Air 15" M3', price: 1299.0, badge: 'New', note: 'Lightweight powerhouse', specs: 'M3 · 16GB RAM · 256GB SSD', image: '/macbook-pro.jpg' },
    { id: 'l4', name: 'HP Spectre x360 14', price: 1149.0, note: 'Premium 2-in-1', specs: 'i7-1355U · 16GB RAM · 1TB SSD', image: '/laptop2.jpg' },
    { id: 'l5', name: 'Lenovo ThinkPad X1 Carbon', price: 1549.0, note: 'Business class', specs: 'i7-1365U · 16GB RAM · 512GB SSD', image: '/laptop4.jpg' },
    { id: 'l6', name: 'ASUS ROG Zephyrus G14', price: 1449.0, note: 'Gaming on the go', specs: 'Ryzen 9 · RTX 4060 · 16GB RAM · 1TB', image: '/laptop5.jpg' }
  ],
  accessories: [
    // Existing accessories
    { id: 'a1', name: 'Wireless Over-Ear Headphones', price: 89.0, note: 'Trending in Harare', specs: '40h battery · ANC · Bluetooth 5.3', image: '/headphones.jpg' },
    { id: 'a2', name: 'Mechanical Gaming Keyboard', price: 79.0, note: 'For productive typing', specs: 'RGB · Cherry MX switches · USB-C', image: '/keyboard.jpg' },
    { id: 'a3', name: 'USB-C 65W Fast Charger', price: 29.0, note: 'Charge quickly', specs: 'GaN tech · PD 3.0 · Universal', image: '/usb-charger.jpg' },
    { id: 'a4', name: 'Bluetooth Wireless Mouse', price: 35.0, note: 'Ergonomic design', specs: 'Silent clicks · 6 buttons · USB-C', image: '/mouse.jpg' },
    { id: 'a5', name: 'Laptop Stand Adjustable', price: 45.0, note: 'Improve posture', specs: 'Aluminum · Foldable · Ventilated', image: '/laptop-stand.jpg' },
    { id: 'a6', name: 'True Wireless Earbuds', price: 59.0, badge: 'New', note: 'Crystal clear audio', specs: 'ANC · 30h case · IPX5', image: '/earbuds.jpg' },
    { id: 'a7', name: 'HDMI to VGA Adapter', price: 15.0, note: 'Essential for presentations', specs: '1080p · Gold-plated', image: '/adapter.jpg' },
    { id: 'a8', name: 'Phone Grip & Stand', price: 12.0, note: 'Secure hold', specs: 'Universal · Magnetic ring', image: '/phone-stand.jpg' },
    { id: 'a9', name: 'USB-C Hub 7-in-1', price: 49.0, note: 'Expand your ports', specs: 'HDMI · SD · USB 3.0 · PD 100W', image: '/hub.jpg' },

    // --- Pouches ---
    { id: 'a10', name: 'Premium Laptop Sleeve', price: 25.0, note: 'Protect your laptop', specs: 'Neoprene · Fits 13-15" · Padded', image: '/laptop-stand.jpg' },
    { id: 'a11', name: 'Universal Tablet Pouch', price: 18.0, note: 'Carry your tablet safely', specs: 'Fits 10-12" · Zippered · Soft interior', image: '/tablet-generic.jpg' },
    { id: 'a12', name: 'Phone Pouch / Armband', price: 12.0, note: 'Hands-free carrying', specs: 'Adjustable · Sweatproof · Universal', image: '/phone-stand.jpg' },

    // --- Tempered Glass Screen Protectors ---
    { id: 'a13', name: 'Tempered Glass Screen Protector - Universal', price: 9.0, note: 'Scratch protection', specs: '9H hardness · 0.33mm · Oleophobic coating', image: '/phone-generic.jpg' },
    { id: 'a14', name: 'iPhone Screen Protector (Tempered Glass)', price: 14.0, badge: 'New', note: 'For iPhone 15/16/17 series', specs: '9H hardness · Anti-fingerprint · Easy install', image: '/phone-generic.jpg' },
    { id: 'a15', name: 'Samsung Galaxy Screen Protector (Tempered Glass)', price: 14.0, note: 'For Galaxy S24/S25/S26 series', specs: '9H hardness · Case-friendly · Oleophobic', image: '/phone-generic.jpg' },

    // --- Chargers & Car Chargers ---
    { id: 'a16', name: 'Dual USB Car Charger', price: 19.0, note: 'Charge on the go', specs: '36W total · USB-C + USB-A · Fast charging', image: '/usb-charger.jpg' },
    { id: 'a17', name: 'Wireless Car Charger Mount', price: 39.0, note: 'Hands-free driving', specs: '15W fast charge · Auto-clamp · Dashboard mount', image: '/usb-charger.jpg' },
    { id: 'a18', name: 'GaN 100W 4-Port Charger', price: 49.0, note: 'Ultra compact', specs: '100W total · 2x USB-C + 2x USB-A · GaN tech', image: '/usb-charger.jpg' },
    { id: 'a19', name: 'MagSafe Wireless Charger', price: 35.0, note: 'Snap & charge', specs: '15W · Magnetic · Compatible with iPhone/Android', image: '/usb-charger.jpg' },
    { id: 'a20', name: 'USB-C to Lightning Cable (2m)', price: 16.0, note: 'Tangle-free', specs: 'Braided nylon · PD fast charge · Durable', image: '/adapter.jpg' },

    // --- Headphones ---
    { id: 'a21', name: 'Noise-Cancelling Over-Ear Headphones', price: 129.0, badge: 'New', note: 'Premium audio', specs: '60h battery · Active NC · Hi-Res Audio', image: '/headphones.jpg' },
    { id: 'a22', name: 'Wireless On-Ear Headphones', price: 49.0, note: 'Lightweight & portable', specs: '30h battery · Foldable · Bluetooth 5.3', image: '/headphones.jpg' },
    { id: 'a23', name: 'Wired Gaming Headset', price: 45.0, note: 'For gamers', specs: '50mm drivers · Noise-cancelling mic · RGB', image: '/headphones.jpg' },

    // --- Earbuds (Eapods) ---
    { id: 'a24', name: 'Premium True Wireless Earbuds', price: 89.0, badge: 'New', note: 'Studio quality', specs: 'Hybrid ANC · 40h battery · IPX5 · Wireless charging', image: '/earbuds.jpg' },
    { id: 'a25', name: 'Budget Wireless Earbuds', price: 29.0, note: 'Affordable audio', specs: '20h battery · Touch controls · IPX4', image: '/earbuds.jpg' },

    // --- Smart Watches ---
    { id: 'a26', name: 'Smart Watch Pro', price: 149.0, badge: 'New', note: 'Fitness & health', specs: '1.8" AMOLED · GPS · Heart rate · SpO2 · 14-day battery', image: '/phone-generic.jpg' },
    { id: 'a27', name: 'Fitness Smart Band', price: 49.0, note: 'Daily activity tracker', specs: '1.5" AMOLED · Heart rate · Sleep tracking · 7-day battery', image: '/phone-generic.jpg' },
    { id: 'a28', name: 'Premium Smart Watch Ultra', price: 249.0, note: 'Rugged & durable', specs: '2.0" AMOLED · GPS · 5ATM · 30-day battery · Music storage', image: '/phone-generic.jpg' },

    // --- Speakers ---
    { id: 'a29', name: 'Portable Bluetooth Speaker', price: 39.0, note: 'Take it anywhere', specs: '20W · IPX7 waterproof · 12h battery · USB-C', image: '/headphones.jpg' },
    { id: 'a30', name: 'Smart Home Speaker', price: 79.0, badge: 'New', note: 'Voice assistant ready', specs: '40W · Wi-Fi + BT 5.0 · Multi-room', image: '/headphones.jpg' },
    { id: 'a31', name: 'Mini Bluetooth Speaker', price: 19.0, note: 'Pocket-sized', specs: '5W · IPX5 · 8h battery · Built-in mic', image: '/headphones.jpg' },

    // --- TVs ---
    { id: 'a32', name: 'Smart LED TV 32"', price: 249.0, note: 'Compact smart TV', specs: '32" HD Ready · Smart OS · HDMI x2 · USB', image: '/tablet-generic.jpg' },
    { id: 'a33', name: 'Smart LED TV 43"', price: 399.0, note: 'Perfect for living room', specs: '43" 4K UHD · Smart OS · WiFi · Bluetooth', image: '/tablet-generic.jpg' },
    { id: 'a34', name: 'Smart LED TV 55"', price: 599.0, note: 'Cinema experience', specs: '55" 4K UHD · Dolby Vision · Smart OS · 120Hz', image: '/tablet-generic.jpg' },

    // --- Camera Lens Protectors ---
    { id: 'a35', name: 'Camera Lens Protector - Universal', price: 12.0, note: 'Shield your camera', specs: 'Tempered glass · Anti-glare · Easy stick-on', image: '/phone-generic.jpg' },
    { id: 'a36', name: 'Camera Lens Kit (Wide + Macro + Telephoto)', price: 34.0, note: 'Professional photos', specs: 'HD optics · Clip-on · Universal fit', image: '/adapter.jpg' },
    { id: 'a37', name: 'Smartphone Camera Lens Protector - iPhone', price: 14.0, note: 'Protect iPhone lenses', specs: '9H tempered glass · Sapphire coating', image: '/phone-generic.jpg' },
    { id: 'a38', name: 'Smartphone Camera Lens Protector - Samsung', price: 14.0, note: 'Protect Galaxy lenses', specs: '9H tempered glass · Sapphire coating', image: '/phone-generic.jpg' },

    // --- Power Banks ---
    { id: 'a39', name: 'Power Bank 10000mAh', price: 24.0, note: 'Daily charging', specs: '10,000mAh · PD 20W · USB-C · Slim design', image: '/usb-charger.jpg' },
    { id: 'a40', name: 'Power Bank 20000mAh', price: 39.0, note: 'Extended power', specs: '20,000mAh · PD 30W · Dual input · LED display', image: '/usb-charger.jpg' },
    { id: 'a41', name: 'Power Bank 50000mAh', price: 69.0, note: 'Ultimate battery', specs: '50,000mAh · PD 45W · Laptop charging · LCD display', image: '/usb-charger.jpg' },
    { id: 'a42', name: 'Wireless Power Bank', price: 44.0, note: 'Cable-free charging', specs: '10,000mAh · 15W wireless · PD 20W · MagSafe compatible', image: '/usb-charger.jpg' },
  ]
}