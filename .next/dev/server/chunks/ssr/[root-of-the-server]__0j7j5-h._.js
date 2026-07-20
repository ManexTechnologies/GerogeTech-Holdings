module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/data/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PHONE_BRANDS",
    ()=>PHONE_BRANDS,
    "PRODUCTS",
    ()=>PRODUCTS
]);
const PHONE_BRANDS = [
    {
        name: 'Samsung',
        phones: [
            // 2022
            {
                id: 'samsung-s22',
                name: 'Samsung Galaxy S22',
                price: 699.0,
                badge: 'Sale',
                note: '2022 flagship',
                specs: '8GB RAM · 128GB · 50MP · Dynamic AMOLED 2X',
                image: '/s22.jpeg'
            },
            {
                id: 'samsung-s22-plus',
                name: 'Samsung Galaxy S22+',
                price: 849.0,
                badge: 'Sale',
                note: '2022 flagship',
                specs: '8GB RAM · 128GB · 50MP · 6.6" AMOLED',
                image: '/s22plus.jpeg'
            },
            {
                id: 'samsung-s22-ultra',
                name: 'Samsung Galaxy S22 Ultra',
                price: 1049.0,
                badge: 'Sale',
                note: 'Note replacement',
                specs: '12GB RAM · 256GB · 108MP · S Pen',
                image: '/s22 ultra.jpeg'
            },
            {
                id: 'samsung-a53',
                name: 'Samsung Galaxy A53 5G',
                price: 349.0,
                note: 'Mid-range 5G',
                specs: '6GB RAM · 128GB · 64MP · 120Hz',
                image: '/a53.jpeg'
            },
            {
                id: 'samsung-a33',
                name: 'Samsung Galaxy A33 5G',
                price: 299.0,
                note: 'Mid-range 5G',
                specs: '6GB RAM · 128GB · 48MP · Super AMOLED',
                image: '/a33.jpeg'
            },
            {
                id: 'samsung-a23',
                name: 'Samsung Galaxy A23',
                price: 199.0,
                note: 'Budget friendly',
                specs: '4GB RAM · 64GB · 50MP · 90Hz',
                image: '/a23.jpeg'
            },
            {
                id: 'samsung-zflip4',
                name: 'Samsung Galaxy Z Flip4',
                price: 899.0,
                note: 'Foldable compact',
                specs: '8GB RAM · 128GB · 12MP · Foldable AMOLED',
                image: '/flip 4.jpeg'
            },
            {
                id: 'samsung-zfold4',
                name: 'Samsung Galaxy Z Fold4',
                price: 1499.0,
                note: 'Foldable tablet',
                specs: '12GB RAM · 256GB · 50MP · 7.6" Foldable',
                image: '/fold 4.jpeg'
            },
            {
                id: 'samsung-m33',
                name: 'Samsung Galaxy M33',
                price: 229.0,
                note: 'Massive battery',
                specs: '6GB RAM · 128GB · 50MP · 6000mAh',
                image: '/m33.jpeg'
            },
            {
                id: 'samsung-m53',
                name: 'Samsung Galaxy M53',
                price: 299.0,
                note: 'Big battery champ',
                specs: '8GB RAM · 128GB · 108MP · 5000mAh',
                image: '/phone-generic.jpg'
            },
            // 2023
            {
                id: 'samsung-s23',
                name: 'Samsung Galaxy S23',
                price: 799.0,
                badge: 'New',
                note: '2023 flagship',
                specs: '8GB RAM · 128GB · 50MP · Snapdragon 8 Gen 2',
                image: '/s23.jpeg'
            },
            {
                id: 'samsung-s23-plus',
                name: 'Samsung Galaxy S23+',
                price: 999.0,
                note: '2023 flagship',
                specs: '8GB RAM · 256GB · 50MP · 6.6" AMOLED',
                image: '/s23 plus.jpeg'
            },
            {
                id: 'samsung-s23-ultra',
                name: 'Samsung Galaxy S23 Ultra',
                price: 1199.0,
                originalPrice: 1299.0,
                badge: 'Sale',
                note: 'Ultimate flagship',
                specs: '12GB RAM · 256GB · 200MP · S Pen',
                image: '/s23 ultra.jpeg'
            },
            {
                id: 'samsung-s23-fe',
                name: 'Samsung Galaxy S23 FE',
                price: 599.0,
                note: 'Fan Edition',
                specs: '8GB RAM · 128GB · 50MP · Exynos 2200',
                image: '/s23 fe.jpeg'
            },
            {
                id: 'samsung-a14',
                name: 'Samsung Galaxy A14',
                price: 149.0,
                note: 'Budget 5G',
                specs: '4GB RAM · 64GB · 50MP · 6.6" PLS',
                image: '/a14.jpeg'
            },
            {
                id: 'samsung-a24',
                name: 'Samsung Galaxy A24',
                price: 199.0,
                note: 'Great display',
                specs: '6GB RAM · 128GB · 50MP · Super AMOLED',
                image: '/a24.jpeg'
            },
            {
                id: 'samsung-a34',
                name: 'Samsung Galaxy A34',
                price: 299.0,
                note: 'Mid-range champ',
                specs: '6GB RAM · 128GB · 48MP · 120Hz',
                image: '/a34.jpeg'
            },
            {
                id: 'samsung-a54',
                name: 'Samsung Galaxy A54',
                price: 399.0,
                note: 'Best mid-range',
                specs: '8GB RAM · 128GB · 50MP · 120Hz',
                image: '/a54.jpeg'
            },
            {
                id: 'samsung-zflip5',
                name: 'Samsung Galaxy Z Flip5',
                price: 999.0,
                note: 'Larger cover screen',
                specs: '8GB RAM · 256GB · 12MP · 3.4" Cover',
                image: '/flip 5.jpeg'
            },
            {
                id: 'samsung-zfold5',
                name: 'Samsung Galaxy Z Fold5',
                price: 1599.0,
                note: 'Thinner & lighter',
                specs: '12GB RAM · 256GB · 50MP · IPX8',
                image: '/fold 5.jpeg'
            },
            // 2024
            {
                id: 'samsung-s24',
                name: 'Samsung Galaxy S24',
                price: 799.0,
                badge: 'New',
                note: 'AI powered',
                specs: '8GB RAM · 128GB · 50MP · Galaxy AI',
                image: '/s24.jpeg'
            },
            {
                id: 'samsung-s24-plus',
                name: 'Samsung Galaxy S24+',
                price: 999.0,
                note: 'AI flagship',
                specs: '12GB RAM · 256GB · 50MP · QHD+',
                image: '/s24 plus.jpeg'
            },
            {
                id: 'samsung-s24-ultra',
                name: 'Samsung Galaxy S24 Ultra',
                price: 1299.0,
                note: 'Titanium flagship',
                specs: '12GB RAM · 256GB · 200MP · Titanium',
                image: '/s24ultra.jpeg'
            },
            {
                id: 'samsung-a15',
                name: 'Samsung Galaxy A15',
                price: 159.0,
                note: 'Budget 5G',
                specs: '4GB RAM · 128GB · 50MP · Super AMOLED',
                image: '/a15.jpeg'
            },
            {
                id: 'samsung-a25',
                name: 'Samsung Galaxy A25',
                price: 229.0,
                note: 'Great value',
                specs: '6GB RAM · 128GB · 50MP · OIS',
                image: '/a25.jpeg'
            },
            {
                id: 'samsung-a35',
                name: 'Samsung Galaxy A35',
                price: 329.0,
                note: 'Mid-range 5G',
                specs: '6GB RAM · 128GB · 50MP · IP67',
                image: '/s35.jpeg'
            },
            {
                id: 'samsung-a55',
                name: 'Samsung Galaxy A55',
                price: 439.0,
                note: 'Premium mid-range',
                specs: '8GB RAM · 128GB · 50MP · Metal frame',
                image: '/a55.jpeg'
            },
            {
                id: 'samsung-zflip6',
                name: 'Samsung Galaxy Z Flip6',
                price: 1099.0,
                note: 'Improved foldable',
                specs: '12GB RAM · 256GB · 50MP · Snapdragon 8 Gen 3',
                image: '/flip 6.jpeg'
            },
            {
                id: 'samsung-zfold6',
                name: 'Samsung Galaxy Z Fold6',
                price: 1799.0,
                note: 'Thinnest foldable',
                specs: '12GB RAM · 256GB · 50MP · 7.6" Dynamic AMOLED',
                image: '/fold 6.jpeg'
            },
            // 2025
            {
                id: 'samsung-s25',
                name: 'Samsung Galaxy S25',
                price: 799.0,
                badge: 'New',
                note: 'Latest flagship',
                specs: '12GB RAM · 128GB · 50MP · One UI 7',
                image: '/s25 plus.jpeg'
            },
            {
                id: 'samsung-s25-plus',
                name: 'Samsung Galaxy S25+',
                price: 999.0,
                note: 'Latest flagship',
                specs: '12GB RAM · 256GB · 50MP · QHD+ Display',
                image: '/s25 plus.jpeg'
            },
            {
                id: 'samsung-s25-ultra',
                name: 'Samsung Galaxy S25 Ultra',
                price: 1299.0,
                note: 'Ultimate flagship',
                specs: '12GB RAM · 256GB · 200MP · Titanium',
                image: '/s25 ultra.jpeg'
            },
            {
                id: 'samsung-s25-edge',
                name: 'Samsung Galaxy S25 Edge',
                price: 1099.0,
                note: 'Ultra-slim',
                specs: '12GB RAM · 256GB · 200MP · Slim design',
                image: '/s25 edge.jpeg'
            },
            {
                id: 'samsung-a16',
                name: 'Samsung Galaxy A16',
                price: 179.0,
                note: 'Budget 2025',
                specs: '4GB RAM · 128GB · 50MP · 5000mAh',
                image: '/phone-generic.jpg'
            },
            {
                id: 'samsung-a26',
                name: 'Samsung Galaxy A26',
                price: 249.0,
                note: 'Great value',
                specs: '6GB RAM · 128GB · 50MP · Super AMOLED',
                image: '/a26.jpeg'
            },
            {
                id: 'samsung-a36',
                name: 'Samsung Galaxy A36',
                price: 349.0,
                note: 'Mid-range 5G',
                specs: '6GB RAM · 128GB · 50MP · IP67',
                image: '/a36.jpeg'
            },
            {
                id: 'samsung-a56',
                name: 'Samsung Galaxy A56',
                price: 459.0,
                note: 'Premium mid-range',
                specs: '8GB RAM · 128GB · 50MP · 45W charging',
                image: '/a56.jpeg'
            },
            {
                id: 'samsung-zflip7',
                name: 'Samsung Galaxy Z Flip7',
                price: 1199.0,
                note: 'Next gen foldable',
                specs: '12GB RAM · 256GB · 50MP · Larger cover',
                image: '/flip 7.jpeg'
            },
            {
                id: 'samsung-zfold7',
                name: 'Samsung Galaxy Z Fold7',
                price: 1899.0,
                note: 'Next gen foldable',
                specs: '12GB RAM · 256GB · 50MP · Under display cam',
                image: '/fold 7.jpeg'
            },
            // 2026
            {
                id: 'samsung-s26',
                name: 'Samsung Galaxy S26 (Series)',
                price: 899.0,
                badge: 'New',
                note: 'Current generation',
                specs: '12GB RAM · 128GB · 50MP · Latest chipset',
                image: '/s26 series.jpeg'
            },
            {
                id: 'samsung-zflip8',
                name: 'Samsung Galaxy Z Flip8',
                price: 1299.0,
                note: 'Current generation',
                specs: '12GB RAM · 256GB · 50MP · Latest foldable',
                image: '/phone-generic.jpg'
            },
            {
                id: 'samsung-zfold8',
                name: 'Samsung Galaxy Z Fold8',
                price: 1999.0,
                note: 'Current generation',
                specs: '12GB RAM · 512GB · 200MP · Latest foldable',
                image: '/phone-generic.jpg'
            }
        ]
    },
    {
        name: 'Apple iPhone',
        phones: [
            // 2022
            {
                id: 'iphone-se3',
                name: 'Apple iPhone SE (3rd Gen)',
                price: 429.0,
                note: 'Budget Apple',
                specs: '4.7" Retina · A15 Bionic · 12MP · Touch ID',
                image: '/ipone se 3rd.jpeg'
            },
            {
                id: 'iphone-14',
                name: 'Apple iPhone 14',
                price: 699.0,
                badge: 'Sale',
                note: '2022 standard',
                specs: '6.1" Super Retina · A15 Bionic · 12MP · 5G',
                image: '/iphone 14.jpeg'
            },
            {
                id: 'iphone-14-plus',
                name: 'Apple iPhone 14 Plus',
                price: 799.0,
                note: 'Big screen 2022',
                specs: '6.7" Super Retina · A15 Bionic · 12MP · 5G',
                image: '/iphone 14 plus.jpeg'
            },
            {
                id: 'iphone-14-pro',
                name: 'Apple iPhone 14 Pro',
                price: 999.0,
                note: 'Pro flagship 2022',
                specs: '6.1" ProMotion · A16 Bionic · 48MP · Dynamic Island',
                image: '/iphone 14 pro.jpeg'
            },
            {
                id: 'iphone-14-pro-max',
                name: 'Apple iPhone 14 Pro Max',
                price: 1099.0,
                note: 'Pro flagship 2022',
                specs: '6.7" ProMotion · A16 Bionic · 48MP · Dynamic Island',
                image: '/iphone 14 pro max.jpeg'
            },
            // 2023
            {
                id: 'iphone-15',
                name: 'Apple iPhone 15',
                price: 799.0,
                badge: 'New',
                note: 'USB-C Apple',
                specs: '6.1" Super Retina · A16 Bionic · 48MP · USB-C',
                image: '/iphone 15.jpeg'
            },
            {
                id: 'iphone-15-plus',
                name: 'Apple iPhone 15 Plus',
                price: 899.0,
                note: 'USB-C big screen',
                specs: '6.7" Super Retina · A16 Bionic · 48MP · USB-C',
                image: '/iphone 15 plus.jpeg'
            },
            {
                id: 'iphone-15-pro',
                name: 'Apple iPhone 15 Pro',
                price: 1099.0,
                note: 'Titanium Apple',
                specs: '6.1" ProMotion · A17 Pro · 48MP · Titanium',
                image: '/iphone 15 pro.jpeg'
            },
            {
                id: 'iphone-15-pro-max',
                name: 'Apple iPhone 15 Pro Max',
                price: 1199.0,
                note: 'Titanium flagship',
                specs: '6.7" ProMotion · A17 Pro · 48MP · 5x Zoom',
                image: '/iphone 15 pro max.jpeg'
            },
            // 2024
            {
                id: 'iphone-16',
                name: 'Apple iPhone 16',
                price: 799.0,
                badge: 'New',
                note: 'AI ready',
                specs: '6.1" Super Retina · A18 · 48MP · Apple Intelligence',
                image: '/iphone 16.jpeg'
            },
            {
                id: 'iphone-16-plus',
                name: 'Apple iPhone 16 Plus',
                price: 899.0,
                note: 'AI ready big',
                specs: '6.7" Super Retina · A18 · 48MP · Apple Intelligence',
                image: '/iphone 16 plus.jpeg'
            },
            {
                id: 'iphone-16-pro',
                name: 'Apple iPhone 16 Pro',
                price: 1099.0,
                note: 'Pro AI flagship',
                specs: '6.3" ProMotion · A18 Pro · 48MP · 5x Zoom',
                image: '/iphone 16 pro max.jpeg'
            },
            {
                id: 'iphone-16-pro-max',
                name: 'Apple iPhone 16 Pro Max',
                price: 1199.0,
                note: 'Ultimate iPhone',
                specs: '6.9" ProMotion · A18 Pro · 48MP · 5x Zoom',
                image: '/iphone 16 pro max.jpeg'
            },
            {
                id: 'iphone-16e',
                name: 'Apple iPhone 16e',
                price: 599.0,
                note: 'Affordable iPhone',
                specs: '6.1" Super Retina · A18 · 48MP · USB-C',
                image: '/iphone 16e.jpeg'
            },
            // 2025
            {
                id: 'iphone-17',
                name: 'Apple iPhone 17',
                price: 799.0,
                badge: 'New',
                note: 'Latest standard',
                specs: '6.1" Super Retina · A19 · 48MP · Apple Intelligence',
                image: '/iphone 17.jpeg'
            },
            {
                id: 'iphone-17-air',
                name: 'Apple iPhone 17 Air',
                price: 899.0,
                note: 'Ultra-slim iPhone',
                specs: '6.6" Super Retina · A19 · 48MP · Slim design',
                image: '/iphone 17 air.jpeg'
            },
            {
                id: 'iphone-17-pro',
                name: 'Apple iPhone 17 Pro',
                price: 1099.0,
                note: 'Pro latest',
                specs: '6.3" ProMotion · A19 Pro · 48MP · Titanium',
                image: '/iphone 17 pro max.jpeg'
            },
            {
                id: 'iphone-17-pro-max',
                name: 'Apple iPhone 17 Pro Max',
                price: 1199.0,
                note: 'Ultimate flagship',
                specs: '6.9" ProMotion · A19 Pro · 48MP · Periscope zoom',
                image: '/iphone 17 pro max.jpeg'
            },
            // 2026
            {
                id: 'iphone-18',
                name: 'Apple iPhone 18 Series',
                price: 899.0,
                badge: 'New',
                note: 'Current generation',
                specs: '6.1" Super Retina · A20 · 48MP · Latest AI',
                image: '/iphone 18 series.jpeg'
            }
        ]
    },
    {
        name: 'Google Pixel',
        phones: [
            {
                id: 'pixel-6a',
                name: 'Google Pixel 6a',
                price: 349.0,
                note: 'Best budget Pixel',
                specs: '6.1" OLED · Tensor · 12MP · 5G',
                image: '/pixel 6a.jpeg'
            },
            {
                id: 'pixel-7',
                name: 'Google Pixel 7',
                price: 499.0,
                note: 'Clean Android',
                specs: '6.3" OLED · Tensor G2 · 50MP · 5G',
                image: '/pixel 7.jpeg'
            },
            {
                id: 'pixel-7-pro',
                name: 'Google Pixel 7 Pro',
                price: 699.0,
                note: 'Pro Pixel',
                specs: '6.7" OLED · Tensor G2 · 50MP · Telephoto',
                image: '/pixel 7 pro.jpeg'
            },
            {
                id: 'pixel-7a',
                name: 'Google Pixel 7a',
                price: 399.0,
                note: '2023 budget',
                specs: '6.1" OLED · Tensor G2 · 64MP · 5G',
                image: '/pixel 7a.jpeg'
            },
            {
                id: 'pixel-fold',
                name: 'Google Pixel Fold',
                price: 1399.0,
                note: 'Foldable Pixel',
                specs: '7.6" OLED · Tensor G2 · 48MP · Foldable',
                image: '/pixel fold.jpeg'
            },
            {
                id: 'pixel-8',
                name: 'Google Pixel 8',
                price: 599.0,
                badge: 'New',
                note: '2023 flagship',
                specs: '6.2" OLED · Tensor G3 · 50MP · AI',
                image: '/pixel 8.jpeg'
            },
            {
                id: 'pixel-8-pro',
                name: 'Google Pixel 8 Pro',
                price: 799.0,
                note: '2023 pro flagship',
                specs: '6.7" OLED · Tensor G3 · 50MP · 5x Zoom',
                image: '/pixel 8 pro.jpeg'
            },
            {
                id: 'pixel-8a',
                name: 'Google Pixel 8a',
                price: 449.0,
                note: '2024 budget',
                specs: '6.1" OLED · Tensor G3 · 64MP · AI',
                image: '/pixel 8a.jpeg'
            },
            {
                id: 'pixel-9',
                name: 'Google Pixel 9',
                price: 699.0,
                badge: 'New',
                note: 'AI flagship',
                specs: '6.3" OLED · Tensor G4 · 50MP · Gemini AI',
                image: '/pixel-phone.jpg'
            },
            {
                id: 'pixel-9-pro',
                name: 'Google Pixel 9 Pro',
                price: 899.0,
                note: 'Compact pro',
                specs: '6.3" OLED · Tensor G4 · 50MP · 5x Zoom',
                image: '/pixel 9 pro.jpeg'
            },
            {
                id: 'pixel-9-pro-xl',
                name: 'Google Pixel 9 Pro XL',
                price: 999.0,
                note: 'Large pro',
                specs: '6.8" OLED · Tensor G4 · 50MP · AI features',
                image: '/pixel 9 pro xl.jpeg'
            },
            {
                id: 'pixel-9-pro-fold',
                name: 'Google Pixel 9 Pro Fold',
                price: 1499.0,
                note: 'Foldable pro',
                specs: '8" OLED · Tensor G4 · 48MP · Foldable',
                image: '/pixel 9 pro fold.jpeg'
            },
            {
                id: 'pixel-9a',
                name: 'Google Pixel 9a',
                price: 499.0,
                note: '2025 budget',
                specs: '6.2" OLED · Tensor G4 · 48MP · AI',
                image: '/pixel 9a.jpeg'
            },
            {
                id: 'pixel-10',
                name: 'Google Pixel 10',
                price: 799.0,
                badge: 'New',
                note: 'Latest Pixel',
                specs: '6.3" OLED · Tensor G5 · 50MP · Next-gen AI',
                image: '/pixel-phone.jpg'
            },
            {
                id: 'pixel-10-pro',
                name: 'Google Pixel 10 Pro',
                price: 999.0,
                note: 'Latest pro',
                specs: '6.3" OLED · Tensor G5 · 50MP · Enhanced zoom',
                image: '/pixel 10 pro.jpeg'
            },
            {
                id: 'pixel-10-pro-xl',
                name: 'Google Pixel 10 Pro XL',
                price: 1099.0,
                note: 'Latest pro XL',
                specs: '6.8" OLED · Tensor G5 · 50MP · Best AI',
                image: '/pixel-phone.jpg'
            },
            {
                id: 'pixel-10-pro-fold',
                name: 'Google Pixel 10 Pro Fold',
                price: 1599.0,
                note: 'Latest foldable',
                specs: '8" OLED · Tensor G5 · 48MP · Foldable',
                image: '/pixel 10 pro fold.jpeg'
            },
            {
                id: 'pixel-10a',
                name: 'Google Pixel 10a',
                price: 549.0,
                note: '2026 budget',
                specs: '6.2" OLED · Tensor G5 · 48MP · AI',
                image: '/pixel 10a.jpeg'
            },
            {
                id: 'pixel-11',
                name: 'Google Pixel 11 Series',
                price: 899.0,
                badge: 'New',
                note: 'Current generation',
                specs: '6.3" OLED · Tensor G6 · 50MP · Latest AI',
                image: '/pixel 11 series.jpeg'
            }
        ]
    },
    {
        name: 'Redmi (Xiaomi)',
        phones: [
            {
                id: 'redmi-k90',
                name: 'Redmi K90 Series',
                price: 599.0,
                badge: 'New',
                note: 'Current flagship',
                specs: '6.67" AMOLED · Latest Snapdragon · 200MP',
                image: '/redmi-k90.jpg'
            },
            {
                id: 'redmi-k80',
                name: 'Redmi K80',
                price: 549.0,
                note: 'Flagship 2025',
                specs: '6.67" AMOLED · Snapdragon 8 Gen 3 · 50MP',
                image: '/redmi-k80.jpg'
            },
            {
                id: 'redmi-note15',
                name: 'Redmi Note 15 Series',
                price: 299.0,
                note: 'Current generation',
                specs: '6.7" AMOLED · Latest Dimensity · 108MP',
                image: '/redmi-note15.jpg'
            },
            {
                id: 'redmi-a5',
                name: 'Redmi A5',
                price: 89.0,
                note: 'Current entry',
                specs: '6.71" IPS · Latest Helio · 8MP · 5000mAh',
                image: '/phone-generic.jpg'
            }
        ]
    },
    {
        name: 'Huawei',
        phones: [
            {
                id: 'huawei-mate60-pro',
                name: 'Huawei Mate 60 Pro',
                price: 1099.0,
                note: '5G is back',
                specs: '6.82" OLED · Kirin 9000s · 50MP · Satellite',
                image: '/huawei-mate60-pro.jpg'
            },
            {
                id: 'huawei-pura80',
                name: 'Huawei Pura 80',
                price: 899.0,
                badge: 'New',
                note: 'Latest Pura',
                specs: '6.6" OLED · Kirin · 50MP · HarmonyOS 5',
                image: '/huawei-pura80.jpg'
            },
            {
                id: 'huawei-mate70',
                name: 'Huawei Mate 70',
                price: 999.0,
                note: 'Latest Mate',
                specs: '6.7" OLED · Kirin · 50MP · Satellite',
                image: '/huawei-mate70.jpg'
            },
            {
                id: 'huawei-nova14',
                name: 'Huawei Nova 14',
                price: 449.0,
                note: 'Latest Nova',
                specs: '6.7" OLED · Kirin · 50MP · HarmonyOS',
                image: '/huawei-nova14.jpg'
            }
        ]
    },
    {
        name: 'itel',
        phones: [
            {
                id: 'itel-s25',
                name: 'itel S25',
                price: 159.0,
                badge: 'New',
                note: 'Latest style',
                specs: '6.78" AMOLED · 8GB RAM · 256GB · 108MP',
                image: '/itel-s25.jpg'
            },
            {
                id: 'itel-p70',
                name: 'itel P70',
                price: 114.0,
                note: 'Power 2025',
                specs: '6.6" IPS · 8GB RAM · 128GB · 6000mAh',
                image: '/itel-p70.jpg'
            },
            {
                id: 'itel-a95',
                name: 'itel A95',
                price: 109.0,
                note: '2025 budget',
                specs: '6.6" IPS · 4GB RAM · 128GB · 5000mAh',
                image: '/itel-a95.jpg'
            },
            {
                id: 'itel-s24',
                name: 'itel S24',
                price: 139.0,
                note: '2024 style',
                specs: '6.78" AMOLED · 8GB RAM · 256GB · 108MP',
                image: '/itel-s24.jpg'
            }
        ]
    }
];
const PRODUCTS = {
    smartphones: (()=>{
        const all = [];
        PHONE_BRANDS.forEach((b)=>all.push(...b.phones));
        return all;
    })(),
    tablets: [
        {
            id: 't1',
            name: 'Apple iPad Air M2',
            price: 599.0,
            badge: 'New',
            note: 'Popular for students',
            specs: '11" Liquid Retina · M2 chip · 128GB',
            image: '/ipad air.jpeg'
        },
        {
            id: 't2',
            name: 'Samsung Galaxy Tab S9 FE',
            price: 449.0,
            note: 'Powerful and portable',
            specs: '10.9" TFT · Exynos 1380 · 128GB · S Pen',
            image: '/tab s9.jpeg'
        },
        {
            id: 't3',
            name: 'Apple iPad 10th Gen',
            price: 349.0,
            badge: 'Sale',
            originalPrice: 399.0,
            note: 'Best value iPad',
            specs: '10.9" Liquid Retina · A14 Bionic · 64GB',
            image: '/ipad 10th generation.jpeg'
        },
        {
            id: 't4',
            name: 'Samsung Galaxy Tab A9+',
            price: 269.0,
            note: 'Great for entertainment',
            specs: '11" TFT · Snapdragon 695 · 64GB',
            image: '/tab a9.jpeg'
        },
        {
            id: 't5',
            name: 'Huawei MatePad 11.5',
            price: 299.0,
            note: 'PaperMatte display',
            specs: '11.5" 2.2K · HarmonyOS · 128GB',
            image: '/mate tab.jpeg'
        },
        {
            id: 't6',
            name: 'Lenovo Tab P12',
            price: 329.0,
            note: 'For productivity',
            specs: '12.7" 3K · MediaTek Dimensity 7050 · 256GB',
            image: '/tab p12.jpeg'
        }
    ],
    laptops: [
        {
            id: 'l1',
            name: 'MacBook Pro 14" M3 Pro',
            price: 1999.0,
            originalPrice: 2199.0,
            badge: 'Sale',
            note: 'Limited units',
            specs: 'M3 Pro · 18GB RAM · 512GB SSD',
            image: '/macbook-pro.jpg'
        },
        {
            id: 'l2',
            name: 'Dell XPS 13 Plus',
            price: 1299.0,
            note: 'Ultrabook for professionals',
            specs: 'i7-1360P · 16GB RAM · 512GB SSD',
            image: '/laptop-generic.jpg'
        },
        {
            id: 'l3',
            name: 'MacBook Air 15" M3',
            price: 1299.0,
            badge: 'New',
            note: 'Lightweight powerhouse',
            specs: 'M3 · 16GB RAM · 256GB SSD',
            image: '/macbook-pro.jpg'
        },
        {
            id: 'l4',
            name: 'HP Spectre x360 14',
            price: 1149.0,
            note: 'Premium 2-in-1',
            specs: 'i7-1355U · 16GB RAM · 1TB SSD',
            image: '/laptop2.jpg'
        },
        {
            id: 'l5',
            name: 'Lenovo ThinkPad X1 Carbon',
            price: 1549.0,
            note: 'Business class',
            specs: 'i7-1365U · 16GB RAM · 512GB SSD',
            image: '/laptop4.jpg'
        },
        {
            id: 'l6',
            name: 'ASUS ROG Zephyrus G14',
            price: 1449.0,
            note: 'Gaming on the go',
            specs: 'Ryzen 9 · RTX 4060 · 16GB RAM · 1TB',
            image: '/laptop5.jpg'
        }
    ],
    accessories: [
        // Existing accessories
        {
            id: 'a1',
            name: 'Wireless Over-Ear Headphones',
            price: 89.0,
            note: 'Trending in Harare',
            specs: '40h battery · ANC · Bluetooth 5.3',
            image: '/headphones.jpg'
        },
        {
            id: 'a2',
            name: 'Mechanical Gaming Keyboard',
            price: 79.0,
            note: 'For productive typing',
            specs: 'RGB · Cherry MX switches · USB-C',
            image: '/keyboard.jpg'
        },
        {
            id: 'a3',
            name: 'USB-C 65W Fast Charger',
            price: 29.0,
            note: 'Charge quickly',
            specs: 'GaN tech · PD 3.0 · Universal',
            image: '/usb-charger.jpg'
        },
        {
            id: 'a4',
            name: 'Bluetooth Wireless Mouse',
            price: 35.0,
            note: 'Ergonomic design',
            specs: 'Silent clicks · 6 buttons · USB-C',
            image: '/mouse.jpg'
        },
        {
            id: 'a5',
            name: 'Laptop Stand Adjustable',
            price: 45.0,
            note: 'Improve posture',
            specs: 'Aluminum · Foldable · Ventilated',
            image: '/laptop-stand.jpg'
        },
        {
            id: 'a6',
            name: 'True Wireless Earbuds',
            price: 59.0,
            badge: 'New',
            note: 'Crystal clear audio',
            specs: 'ANC · 30h case · IPX5',
            image: '/earbuds.jpg'
        },
        {
            id: 'a7',
            name: 'HDMI to VGA Adapter',
            price: 15.0,
            note: 'Essential for presentations',
            specs: '1080p · Gold-plated',
            image: '/adapter.jpg'
        },
        {
            id: 'a8',
            name: 'Phone Grip & Stand',
            price: 12.0,
            note: 'Secure hold',
            specs: 'Universal · Magnetic ring',
            image: '/phone-stand.jpg'
        },
        {
            id: 'a9',
            name: 'USB-C Hub 7-in-1',
            price: 49.0,
            note: 'Expand your ports',
            specs: 'HDMI · SD · USB 3.0 · PD 100W',
            image: '/hub.jpg'
        },
        // --- Pouches ---
        {
            id: 'a10',
            name: 'Premium Laptop Sleeve',
            price: 25.0,
            note: 'Protect your laptop',
            specs: 'Neoprene · Fits 13-15" · Padded',
            image: '/laptop-sleeve.svg'
        },
        {
            id: 'a11',
            name: 'Universal Tablet Pouch',
            price: 18.0,
            note: 'Carry your tablet safely',
            specs: 'Fits 10-12" · Zippered · Soft interior',
            image: '/tablet-pouch.svg'
        },
        {
            id: 'a12',
            name: 'Phone Pouch / Armband',
            price: 12.0,
            note: 'Hands-free carrying',
            specs: 'Adjustable · Sweatproof · Universal',
            image: '/phone-armband.svg'
        },
        // --- Tempered Glass Screen Protectors ---
        {
            id: 'a13',
            name: 'Tempered Glass Screen Protector - Universal',
            price: 9.0,
            note: 'Scratch protection',
            specs: '9H hardness · 0.33mm · Oleophobic coating',
            image: '/screen-protector.svg'
        },
        {
            id: 'a14',
            name: 'iPhone Screen Protector (Tempered Glass)',
            price: 14.0,
            badge: 'New',
            note: 'For iPhone 15/16/17 series',
            specs: '9H hardness · Anti-fingerprint · Easy install',
            image: '/screen-protector-iphone.svg'
        },
        {
            id: 'a15',
            name: 'Samsung Galaxy Screen Protector (Tempered Glass)',
            price: 14.0,
            note: 'For Galaxy S24/S25/S26 series',
            specs: '9H hardness · Case-friendly · Oleophobic',
            image: '/screen-protector-samsung.svg'
        },
        // --- Chargers & Car Chargers ---
        {
            id: 'a16',
            name: 'Dual USB Car Charger',
            price: 19.0,
            note: 'Charge on the go',
            specs: '36W total · USB-C + USB-A · Fast charging',
            image: '/car-charger.svg'
        },
        {
            id: 'a17',
            name: 'Wireless Car Charger Mount',
            price: 39.0,
            note: 'Hands-free driving',
            specs: '15W fast charge · Auto-clamp · Dashboard mount',
            image: '/car-charger-wireless.svg'
        },
        {
            id: 'a18',
            name: 'GaN 100W 4-Port Charger',
            price: 49.0,
            note: 'Ultra compact',
            specs: '100W total · 2x USB-C + 2x USB-A · GaN tech',
            image: '/charger-gan.svg'
        },
        {
            id: 'a19',
            name: 'MagSafe Wireless Charger',
            price: 35.0,
            note: 'Snap & charge',
            specs: '15W · Magnetic · Compatible with iPhone/Android',
            image: '/charger-magsafe.svg'
        },
        {
            id: 'a20',
            name: 'USB-C to Lightning Cable (2m)',
            price: 16.0,
            note: 'Tangle-free',
            specs: 'Braided nylon · PD fast charge · Durable',
            image: '/cable-usbc.svg'
        },
        // --- Headphones ---
        {
            id: 'a21',
            name: 'Noise-Cancelling Over-Ear Headphones',
            price: 129.0,
            badge: 'New',
            note: 'Premium audio',
            specs: '60h battery · Active NC · Hi-Res Audio',
            image: '/headphones-pro.svg'
        },
        {
            id: 'a22',
            name: 'Wireless On-Ear Headphones',
            price: 49.0,
            note: 'Lightweight & portable',
            specs: '30h battery · Foldable · Bluetooth 5.3',
            image: '/headphones-onear.svg'
        },
        {
            id: 'a23',
            name: 'Wired Gaming Headset',
            price: 45.0,
            note: 'For gamers',
            specs: '50mm drivers · Noise-cancelling mic · RGB',
            image: '/gaming-headset.svg'
        },
        // --- Earbuds (Eapods) ---
        {
            id: 'a24',
            name: 'Premium True Wireless Earbuds',
            price: 89.0,
            badge: 'New',
            note: 'Studio quality',
            specs: 'Hybrid ANC · 40h battery · IPX5 · Wireless charging',
            image: '/earbuds-pro.svg'
        },
        {
            id: 'a25',
            name: 'Budget Wireless Earbuds',
            price: 29.0,
            note: 'Affordable audio',
            specs: '20h battery · Touch controls · IPX4',
            image: '/earbuds.svg'
        },
        // --- Smart Watches ---
        {
            id: 'a26',
            name: 'Smart Watch Pro',
            price: 149.0,
            badge: 'New',
            note: 'Fitness & health',
            specs: '1.8" AMOLED · GPS · Heart rate · SpO2 · 14-day battery',
            image: '/smartwatch-pro.svg'
        },
        {
            id: 'a27',
            name: 'Fitness Smart Band',
            price: 49.0,
            note: 'Daily activity tracker',
            specs: '1.5" AMOLED · Heart rate · Sleep tracking · 7-day battery',
            image: '/fitness-band.svg'
        },
        {
            id: 'a28',
            name: 'Premium Smart Watch Ultra',
            price: 249.0,
            note: 'Rugged & durable',
            specs: '2.0" AMOLED · GPS · 5ATM · 30-day battery · Music storage',
            image: '/smartwatch-ultra.svg'
        },
        // --- Speakers ---
        {
            id: 'a29',
            name: 'Portable Bluetooth Speaker',
            price: 39.0,
            note: 'Take it anywhere',
            specs: '20W · IPX7 waterproof · 12h battery · USB-C',
            image: '/speaker-portable.svg'
        },
        {
            id: 'a30',
            name: 'Smart Home Speaker',
            price: 79.0,
            badge: 'New',
            note: 'Voice assistant ready',
            specs: '40W · Wi-Fi + BT 5.0 · Multi-room',
            image: '/speaker-smart.svg'
        },
        {
            id: 'a31',
            name: 'Mini Bluetooth Speaker',
            price: 19.0,
            note: 'Pocket-sized',
            specs: '5W · IPX5 · 8h battery · Built-in mic',
            image: '/speaker-mini.svg'
        },
        // --- TVs ---
        {
            id: 'a32',
            name: 'Smart LED TV 32"',
            price: 249.0,
            note: 'Compact smart TV',
            specs: '32" HD Ready · Smart OS · HDMI x2 · USB',
            image: '/tv-32.svg'
        },
        {
            id: 'a33',
            name: 'Smart LED TV 43"',
            price: 399.0,
            note: 'Perfect for living room',
            specs: '43" 4K UHD · Smart OS · WiFi · Bluetooth',
            image: '/tv-43.svg'
        },
        {
            id: 'a34',
            name: 'Smart LED TV 55"',
            price: 599.0,
            note: 'Cinema experience',
            specs: '55" 4K UHD · Dolby Vision · Smart OS · 120Hz',
            image: '/tv-55.svg'
        },
        // --- Camera Lens Protectors ---
        {
            id: 'a35',
            name: 'Camera Lens Protector - Universal',
            price: 12.0,
            note: 'Shield your camera',
            specs: 'Tempered glass · Anti-glare · Easy stick-on',
            image: '/camera-lens-protector.svg'
        },
        {
            id: 'a36',
            name: 'Camera Lens Kit (Wide + Macro + Telephoto)',
            price: 34.0,
            note: 'Professional photos',
            specs: 'HD optics · Clip-on · Universal fit',
            image: '/camera-lens-kit.svg'
        },
        {
            id: 'a37',
            name: 'Smartphone Camera Lens Protector - iPhone',
            price: 14.0,
            note: 'Protect iPhone lenses',
            specs: '9H tempered glass · Sapphire coating',
            image: '/camera-lens-protector-iphone.svg'
        },
        {
            id: 'a38',
            name: 'Smartphone Camera Lens Protector - Samsung',
            price: 14.0,
            note: 'Protect Galaxy lenses',
            specs: '9H tempered glass · Sapphire coating',
            image: '/camera-lens-protector-samsung.svg'
        },
        // --- Power Banks ---
        {
            id: 'a39',
            name: 'Power Bank 10000mAh',
            price: 24.0,
            note: 'Daily charging',
            specs: '10,000mAh · PD 20W · USB-C · Slim design',
            image: '/powerbank-10000.svg'
        },
        {
            id: 'a40',
            name: 'Power Bank 20000mAh',
            price: 39.0,
            note: 'Extended power',
            specs: '20,000mAh · PD 30W · Dual input · LED display',
            image: '/powerbank-20000.svg'
        },
        {
            id: 'a41',
            name: 'Power Bank 50000mAh',
            price: 69.0,
            note: 'Ultimate battery',
            specs: '50,000mAh · PD 45W · Laptop charging · LCD display',
            image: '/powerbank-50000.svg'
        },
        {
            id: 'a42',
            name: 'Wireless Power Bank',
            price: 44.0,
            note: 'Cable-free charging',
            specs: '10,000mAh · 15W wireless · PD 20W · MagSafe compatible',
            image: '/powerbank-wireless.svg'
        }
    ]
};
}),
"[project]/components/ProductCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
function ProductCard({ product, index, glass }) {
    const phone = '263776535909';
    const waHref = `https://wa.me/${phone}?text=${encodeURIComponent(`Hi GeorgeTech, I'm interested in the ${product.name}. Is it still available?`)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `${glass ? 'glass-product-card' : 'card'} p-5 group`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-[4/3] mb-4 rounded-xl bg-gray-50 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: product.image || '/placeholder.svg',
                        alt: product.name,
                        width: 400,
                        height: 300,
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm ${product.badge === 'New' ? 'bg-emerald-500 text-white' : product.badge === 'Imported' ? 'bg-blue-600 text-white' : 'bg-gtred text-white'}`,
                        children: product.badge
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-sm sm:text-base leading-snug text-gtblack mb-1.5",
                children: product.name
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            product.specs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted mb-3 line-clamp-2",
                children: product.specs
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: product.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] text-muted bg-black/[0.04] px-2.5 py-1 rounded-full font-medium",
                    children: product.note
                }, void 0, false, {
                    fileName: "[project]/components/ProductCard.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://whatsapp.com/channel/0029VafHfIHA2pL49V3S291J",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border-2 border-black/[0.08] text-gtblack text-xs font-semibold hover:bg-gtblack hover:text-white hover:border-gtblack transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "13",
                                height: "13",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductCard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 156
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductCard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 212
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            "View"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: waHref,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gtred text-white text-xs font-semibold hover:bg-gtreddark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "13",
                                height: "13",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductCard.tsx",
                                    lineNumber: 75,
                                    columnNumber: 79
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            "Inquire"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductCard.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BoxIcons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BoxIcons.tsx [app-rsc] (ecmascript)");
;
;
;
;
function Home() {
    const phones = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRODUCTS"].smartphones;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-[85vh] flex items-center overflow-hidden bg-[#08080C]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[-15%] left-[-5%] w-[55%] h-[55%] rounded-full bg-gtred/8 blur-[140px]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-blue-500/6 blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[30%] right-[20%] w-[20%] h-[20%] rounded-full bg-orange-500/5 blur-[80px]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 opacity-[0.03]",
                        style: {
                            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                            backgroundSize: '48px 48px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container relative z-10 py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 max-w-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white/60 text-sm mb-6 border border-white/[0.08]",
                                            style: {
                                                background: 'rgba(255,255,255,0.05)',
                                                backdropFilter: 'blur(12px)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 rounded-full bg-gtred animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 17
                                                }, this),
                                                "Zimbabwe's Trusted Tech & Vehicle Importer"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white",
                                            children: [
                                                "Top Tech.",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gradient-to-r from-gtred via-red-400 to-orange-300 bg-clip-text text-transparent",
                                                    children: "Real Value."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 17
                                                }, this),
                                                ' ',
                                                "Delivered to You."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-5 text-base md:text-lg text-white/45 leading-relaxed max-w-lg",
                                            children: "Genuine phones, laptops, TVs & vehicle imports — at prices that work for you. Fast nationwide delivery and instant WhatsApp support."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/60 text-sm border border-white/[0.08]",
                                            style: {
                                                background: 'rgba(255,255,255,0.05)',
                                                backdropFilter: 'blur(12px)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BoxIcons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocationBoxIcon"], {
                                                    theme: "dark",
                                                    size: "sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Shop 33, Old Halsteads, Second Street, Mutare"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex flex-col sm:flex-row gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/smartphones",
                                                    className: "group relative inline-flex items-center gap-3 px-8 py-4 bg-gtred text-white font-semibold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,6,0,0.4)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative flex items-center gap-2",
                                                            children: [
                                                                "Shop Now ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "16",
                                                                    height: "16",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 12h14M12 5l7 7-7 7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 53,
                                                                        columnNumber: 224
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 53,
                                                                    columnNumber: 79
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/vehicle-importation",
                                                    className: "inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/[0.10] hover:bg-white/[0.06] hover:text-white transition-all duration-300",
                                                    style: {
                                                        background: 'rgba(255,255,255,0.04)',
                                                        backdropFilter: 'blur(12px)'
                                                    },
                                                    children: [
                                                        "Import a Vehicle",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "16",
                                                            height: "16",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5 12h14M12 5l7 7-7 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 57,
                                                                columnNumber: 164
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1.5",
                                                    children: "✓ Genuine & Warrantied"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1.5",
                                                    children: "✓ Nationwide Delivery"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-gtred/15 to-transparent rounded-3xl blur-3xl"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/hero-image.jpg",
                                                alt: "Top Tech at GeorgeTech Holdings",
                                                className: "relative w-full max-w-md rounded-3xl shadow-2xl border border-white/[0.08]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-20 md:py-24 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-gt-surface via-white to-gt-surface z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "section-badge bg-accent-blue text-blue-700 mb-3",
                                                children: "Top Picks"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl md:text-4xl font-bold text-gtblack",
                                                children: "Smartphones"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-mutetext mt-2 max-w-lg",
                                                children: "Latest flagships and reliable daily drivers — all genuine and warrantied."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/smartphones",
                                        className: "hidden sm:inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl hover:scale-105 transition-all duration-300",
                                        children: [
                                            "View All",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 12h14M12 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 160
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-6 sm:p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                                    children: phones.slice(0, 3).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            product: p,
                                            index: i,
                                            glass: true
                                        }, p.id, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/smartphones",
                                className: "mt-6 sm:hidden inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl transition-all duration-300 w-full justify-center",
                                children: [
                                    "View All Smartphones",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 12h14M12 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 158
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-20 md:py-24 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-white via-gt-surface to-white z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "section-badge bg-accent-purple text-purple-700 mb-3",
                                                children: "Portable Power"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl md:text-4xl font-bold text-gtblack",
                                                children: "Tablets"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-mutetext mt-2 max-w-lg",
                                                children: "Perfect for work, study, and entertainment on the go."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/tablets",
                                        className: "hidden sm:inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl hover:scale-105 transition-all duration-300",
                                        children: [
                                            "View All",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 12h14M12 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 160
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-6 sm:p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRODUCTS"].tablets.slice(0, 3).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            product: p,
                                            index: i,
                                            glass: true
                                        }, p.id, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/tablets",
                                className: "mt-6 sm:hidden inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl transition-all duration-300 w-full justify-center",
                                children: [
                                    "View All Tablets",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 12h14M12 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 158
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-20 md:py-24 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-gt-surface via-white to-gt-surface z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "section-badge bg-accent-amber text-amber-700 mb-3",
                                                children: "Work & Play"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl md:text-4xl font-bold text-gtblack",
                                                children: "Laptops"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-mutetext mt-2 max-w-lg",
                                                children: "From ultrabooks to gaming rigs — find the perfect machine."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/laptops",
                                        className: "hidden sm:inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl hover:scale-105 transition-all duration-300",
                                        children: [
                                            "View All",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 12h14M12 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 160
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-6 sm:p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRODUCTS"].laptops.slice(0, 3).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            product: p,
                                            index: i,
                                            glass: true
                                        }, p.id, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/laptops",
                                className: "mt-6 sm:hidden inline-flex items-center gap-2 px-5 py-2.5 glass-card text-gtblack font-semibold text-sm rounded-xl transition-all duration-300 w-full justify-center",
                                children: [
                                    "View All Laptops",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 12h14M12 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 158
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-20 md:py-24 overflow-hidden bg-[#08080C]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-gtred/10 blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-500/6 blur-[100px]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 opacity-[0.02]",
                        style: {
                            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                            backgroundSize: '48px 48px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container relative z-10 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-step p-10 md:p-14 max-w-2xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl md:text-4xl font-bold text-white mb-4",
                                    children: "Explore More Categories"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/40 max-w-md mx-auto mb-8",
                                    children: "Find accessories, repair services, and vehicle import options tailored for you."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/accessories",
                                            className: "group relative inline-flex items-center gap-3 px-8 py-4 bg-gtred text-white font-semibold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,6,0,0.4)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-gtred via-red-500 to-gtreddark opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative",
                                                    children: "Browse Accessories"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/cellphone-repair",
                                            className: "inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/[0.10] hover:bg-white/[0.06] hover:text-white transition-all duration-300",
                                            style: {
                                                background: 'rgba(255,255,255,0.04)',
                                                backdropFilter: 'blur(12px)'
                                            },
                                            children: [
                                                "Repair Services",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 12h14M12 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 162
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/vehicle-importation",
                                            className: "inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/[0.10] hover:bg-white/[0.06] hover:text-white transition-all duration-300",
                                            style: {
                                                background: 'rgba(255,255,255,0.04)',
                                                backdropFilter: 'blur(12px)'
                                            },
                                            children: [
                                                "Import a Vehicle",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 12h14M12 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 162
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0j7j5-h._.js.map