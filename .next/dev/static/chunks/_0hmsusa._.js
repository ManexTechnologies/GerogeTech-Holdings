(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function ProductCard({ product, index, glass }) {
    const phone = '263776535909';
    const waHref = `https://wa.me/${phone}?text=${encodeURIComponent(`Hi GeorgeTech, I'm interested in the ${product.name}. Is it still available?`)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `${glass ? 'glass-product-card' : 'card'} p-5 group`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-[4/3] mb-4 rounded-xl bg-gray-50 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-sm sm:text-base leading-snug text-gtblack mb-1.5",
                children: product.name
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            product.specs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted mb-3 line-clamp-2",
                children: product.specs
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: product.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://whatsapp.com/channel/0029VafHfIHA2pL49V3S291J",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border-2 border-black/[0.08] text-gtblack text-xs font-semibold hover:bg-gtblack hover:text-white hover:border-gtblack transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "13",
                                height: "13",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductCard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 156
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: waHref,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gtred text-white text-xs font-semibold hover:bg-gtreddark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "13",
                                height: "13",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BoxIcons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarBoxIcon",
    ()=>CarBoxIcon,
    "ChatBoxIcon",
    ()=>ChatBoxIcon,
    "ClipboardBoxIcon",
    ()=>ClipboardBoxIcon,
    "DocumentBoxIcon",
    ()=>DocumentBoxIcon,
    "GlobeBoxIcon",
    ()=>GlobeBoxIcon,
    "HeadphonesBoxIcon",
    ()=>HeadphonesBoxIcon,
    "LaptopBoxIcon",
    ()=>LaptopBoxIcon,
    "LocationBoxIcon",
    ()=>LocationBoxIcon,
    "PhoneBoxIcon",
    ()=>PhoneBoxIcon,
    "SearchBoxIcon",
    ()=>SearchBoxIcon,
    "TargetBoxIcon",
    ()=>TargetBoxIcon,
    "TruckBoxIcon",
    ()=>TruckBoxIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BoxIconWrapper({ children, className = '', theme = 'light', size = 'md' }) {
    const sizeClasses = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
    const themeClasses = theme === 'dark' ? 'glass-step border-white/15' : 'bg-white/70 shadow-sm border border-white/40';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${sizeClasses} rounded-xl flex items-center justify-center ${themeClasses} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = BoxIconWrapper;
function ChatBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "9",
                    x2: "16",
                    y2: "9"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "13",
                    x2: "14",
                    y2: "13"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 29,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = ChatBoxIcon;
function SearchBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "21",
                    x2: "16.65",
                    y2: "16.65"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 40,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = SearchBoxIcon;
function DocumentBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "14 2 14 8 20 8"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "13",
                    x2: "8",
                    y2: "13"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "17",
                    x2: "8",
                    y2: "17"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 53,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c3 = DocumentBoxIcon;
function TargetBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "6"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 64,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 64,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c4 = TargetBoxIcon;
function GlobeBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "2",
                    y1: "12",
                    x2: "22",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 75,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c5 = GlobeBoxIcon;
function ClipboardBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "8",
                    y: "2",
                    width: "8",
                    height: "4",
                    rx: "1",
                    ry: "1"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "9 13 11 15 15 11"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = ClipboardBoxIcon;
function TruckBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "1",
                    y: "3",
                    width: "15",
                    height: "13"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "16 8 20 8 23 11 23 16 16 16 16 8"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "5.5",
                    cy: "18.5",
                    r: "2.5"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "18.5",
                    cy: "18.5",
                    r: "2.5"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 102,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c7 = TruckBoxIcon;
function CarBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5 17h14a2 2 0 0 0 2-2V9l-3-5H6L3 9v6a2 2 0 0 0 2 2z"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "9",
                    x2: "21",
                    y2: "9"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "7",
                    cy: "15",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "17",
                    cy: "15",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 115,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = CarBoxIcon;
function PhoneBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "5",
                    y: "2",
                    width: "14",
                    height: "20",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "18",
                    x2: "12.01",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = PhoneBoxIcon;
function LaptopBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "3",
                    width: "20",
                    height: "14",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "2",
                    y1: "20",
                    x2: "22",
                    y2: "20"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_c10 = LaptopBoxIcon;
function HeadphonesBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 18v-6a9 9 0 0 1 18 0v6"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_c11 = HeadphonesBoxIcon;
function LocationBoxIcon({ theme = 'light', size = 'md', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIconWrapper, {
        theme: theme,
        size: size,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: theme === 'dark' ? 'text-white/80' : 'text-gtred',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/components/BoxIcons.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BoxIcons.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoxIcons.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c12 = LocationBoxIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "BoxIconWrapper");
__turbopack_context__.k.register(_c1, "ChatBoxIcon");
__turbopack_context__.k.register(_c2, "SearchBoxIcon");
__turbopack_context__.k.register(_c3, "DocumentBoxIcon");
__turbopack_context__.k.register(_c4, "TargetBoxIcon");
__turbopack_context__.k.register(_c5, "GlobeBoxIcon");
__turbopack_context__.k.register(_c6, "ClipboardBoxIcon");
__turbopack_context__.k.register(_c7, "TruckBoxIcon");
__turbopack_context__.k.register(_c8, "CarBoxIcon");
__turbopack_context__.k.register(_c9, "PhoneBoxIcon");
__turbopack_context__.k.register(_c10, "LaptopBoxIcon");
__turbopack_context__.k.register(_c11, "HeadphonesBoxIcon");
__turbopack_context__.k.register(_c12, "LocationBoxIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const BUSINESS_NUMBER = '263776535909';
function SearchBar({ items, placeholder = 'Search...', whatsappNumber = BUSINESS_NUMBER, pageLabel = 'product' }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filtered = query.trim() ? items.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase())) : [];
    // Close dropdown on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBar.useEffect": ()=>{
            const handler = {
                "SearchBar.useEffect.handler": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) {
                        setOpen(false);
                    }
                }
            }["SearchBar.useEffect.handler"];
            document.addEventListener('mousedown', handler);
            return ({
                "SearchBar.useEffect": ()=>document.removeEventListener('mousedown', handler)
            })["SearchBar.useEffect"];
        }
    }["SearchBar.useEffect"], []);
    const waMessage = (itemName)=>itemName ? `Hi GeorgeTech%2C I am looking for the ${encodeURIComponent(itemName)}. Is it available%3F` : `Hi GeorgeTech%2C I am looking for a ${encodeURIComponent(pageLabel)} that I didn't see on your website. Is it available%3F`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative w-full max-w-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 ${open && query ? 'border-gtred/50 shadow-[0_0_20px_rgba(225,6,0,0.15)] bg-white' : 'border-white/[0.10] bg-white/[0.06] hover:border-white/[0.20]'}`,
                style: {
                    backdropFilter: 'blur(16px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "text-white/50 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "11",
                                cy: "11",
                                r: "8"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchBar.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "21",
                                y1: "21",
                                x2: "16.65",
                                y2: "16.65"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchBar.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchBar.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: query,
                        onChange: (e)=>{
                            setQuery(e.target.value);
                            setOpen(true);
                        },
                        onFocus: ()=>setOpen(true),
                        placeholder: placeholder,
                        className: "flex-1 bg-transparent text-white text-sm placeholder:text-white/30 outline-none"
                    }, void 0, false, {
                        fileName: "[project]/components/SearchBar.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setQuery('');
                            setOpen(false);
                        },
                        className: "text-white/40 hover:text-white/80 transition-colors shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SearchBar.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchBar.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            open && query.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full mt-2 left-0 right-0 rounded-2xl border border-white/[0.10] overflow-hidden z-50 animate-fadeIn shadow-2xl",
                style: {
                    background: 'rgba(20,20,30,0.98)',
                    backdropFilter: 'blur(24px)'
                },
                children: filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "max-h-64 overflow-y-auto py-2",
                    children: [
                        filtered.slice(0, 12).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://wa.me/${whatsappNumber}?text=${waMessage(item.name)}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-3 px-5 py-3 text-sm text-white/80 hover:bg-white/[0.06] hover:text-white transition-colors",
                                    onClick: ()=>{
                                        setQuery('');
                                        setOpen(false);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-green-400 shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchBar.tsx",
                                                lineNumber: 126,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SearchBar.tsx",
                                            lineNumber: 125,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-1 text-left",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/SearchBar.tsx",
                                            lineNumber: 128,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-white/30 shrink-0",
                                            children: "Inquire →"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SearchBar.tsx",
                                            lineNumber: 129,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 115,
                                    columnNumber: 19
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/components/SearchBar.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this)),
                        filtered.length > 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-5 py-2 text-xs text-white/30",
                            children: [
                                "+",
                                filtered.length - 12,
                                "more — refine your search"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 134,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SearchBar.tsx",
                    lineNumber: 112,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-5 py-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/40 text-sm mb-4",
                            children: [
                                "No results for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/60 font-medium",
                                    children: [
                                        "“",
                                        query,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 142,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 141,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `https://wa.me/${whatsappNumber}?text=${waMessage()}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center gap-2 px-6 py-3 bg-gtred text-white font-semibold text-sm rounded-xl hover:bg-gtreddark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchBar.tsx",
                                        lineNumber: 151,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this),
                                "Inquire on WhatsApp"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 144,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SearchBar.tsx",
                    lineNumber: 140,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SearchBar.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SearchBar.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "prGrQPqXV1o8OboxsUtLdMsilLY=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/accessories/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccessoriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BoxIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BoxIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchBar.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const ALL_ACCESSORIES = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].accessories.map(_c = (a)=>({
        id: a.id,
        name: a.name
    }));
_c1 = ALL_ACCESSORIES;
const categoryIcons = {
    Audio: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 18v-6a9 9 0 0 1 18 0v6"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 12,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 12,
                columnNumber: 121
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/accessories/page.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    'Keyboards & Mice': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "4",
                width: "20",
                height: "16",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 13,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M6 16h.01M10 16h.01M14 16h.01M18 16h.01"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 13,
                columnNumber: 76
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/accessories/page.tsx",
        lineNumber: 13,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0)),
    Charging: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
    }, void 0, false, {
        fileName: "[project]/app/accessories/page.tsx",
        lineNumber: 14,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    'Hubs & Adapters': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "3",
                width: "20",
                height: "14",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 15,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "21",
                x2: "16",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 15,
                columnNumber: 82
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 15,
                columnNumber: 121
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/accessories/page.tsx",
        lineNumber: 15,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    'Pouches & Cases': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 16,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "3.27 6.96 12 12.01 20.73 6.96"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 16,
                columnNumber: 159
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "22.08",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 16,
                columnNumber: 210
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/accessories/page.tsx",
        lineNumber: 16,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    'Screen Protection': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 17,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "10",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 17,
                columnNumber: 112
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/accessories/page.tsx",
        lineNumber: 17,
        columnNumber: 24
    }, ("TURBOPACK compile-time value", void 0)),
    'Smart Watches': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "7"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 18,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "12 9 12 12 13.5 13.5"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 18,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 18,
                columnNumber: 97
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "7",
                y1: "5",
                x2: "4",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 18,
                columnNumber: 181
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17",
                y1: "5",
                x2: "20",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 18,
                columnNumber: 217
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/accessories/page.tsx",
        lineNumber: 18,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    TVs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "7",
                width: "20",
                height: "15",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 19,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "17 2 12 7 7 2"
            }, void 0, false, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 19,
                columnNumber: 68
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/accessories/page.tsx",
        lineNumber: 19,
        columnNumber: 8
    }, ("TURBOPACK compile-time value", void 0))
};
const categoryColors = {
    Audio: 'text-rose-500',
    'Keyboards & Mice': 'text-blue-500',
    Charging: 'text-amber-500',
    'Hubs & Adapters': 'text-cyan-500',
    'Pouches & Cases': 'text-purple-500',
    'Screen Protection': 'text-green-500',
    'Smart Watches': 'text-indigo-500',
    TVs: 'text-orange-500'
};
const categories = [
    {
        label: 'Audio',
        sub: 'Headphones, earbuds & speakers'
    },
    {
        label: 'Keyboards & Mice',
        sub: 'Mechanical, wireless & ergonomic'
    },
    {
        label: 'Charging',
        sub: 'Chargers, car chargers & power banks'
    },
    {
        label: 'Hubs & Adapters',
        sub: 'USB-C hubs, HDMI adapters & more'
    },
    {
        label: 'Pouches & Cases',
        sub: 'Laptop sleeves, tablet pouches & armbands'
    },
    {
        label: 'Screen Protection',
        sub: 'Tempered glass & camera lens protectors'
    },
    {
        label: 'Smart Watches',
        sub: 'Fitness bands, smart watches & wearables'
    },
    {
        label: 'TVs',
        sub: 'Smart LED TVs from 32" to 55"'
    }
];
function AccessoriesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-16 md:py-20 overflow-hidden bg-[#08080C]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-20 -right-20 w-72 h-72 bg-gtred/6 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/app/accessories/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/app/accessories/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 opacity-[0.02]",
                        style: {
                            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                            backgroundSize: '48px 48px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "section-badge bg-accent-green/20 text-green-300 border border-green-500/20 mb-4",
                                        children: "Accessories"
                                    }, void 0, false, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-5xl font-extrabold text-white mb-4",
                                        children: "Tech Accessories"
                                    }, void 0, false, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/40 text-base md:text-lg max-w-lg",
                                        children: "From wireless audio to charging hubs — level up your tech experience."
                                    }, void 0, false, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/accessories/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-wrap gap-3 text-sm text-white/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]",
                                        style: {
                                            background: 'rgba(255,255,255,0.04)'
                                        },
                                        children: "✓ Genuine Products"
                                    }, void 0, false, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]",
                                        style: {
                                            background: 'rgba(255,255,255,0.04)'
                                        },
                                        children: "✓ Fast Delivery"
                                    }, void 0, false, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08]",
                                        style: {
                                            background: 'rgba(255,255,255,0.04)'
                                        },
                                        children: "✓ WhatsApp Support"
                                    }, void 0, false, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/accessories/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    items: ALL_ACCESSORIES,
                                    placeholder: "Search accessories...",
                                    pageLabel: "accessory"
                                }, void 0, false, {
                                    fileName: "[project]/app/accessories/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/accessories/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/60 text-sm border border-white/[0.08]",
                                    style: {
                                        background: 'rgba(255,255,255,0.05)',
                                        backdropFilter: 'blur(12px)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BoxIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationBoxIcon"], {
                                            theme: "dark",
                                            size: "sm"
                                        }, void 0, false, {
                                            fileName: "[project]/app/accessories/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Shop 33, Old Halsteads, Second Street, Mutare"
                                        }, void 0, false, {
                                            fileName: "[project]/app/accessories/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/accessories/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/accessories/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-16 md:py-20 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-gt-surface via-white to-gt-surface z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-bold text-gtblack",
                                        children: "All Accessories"
                                    }, void 0, false, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted mt-2 max-w-lg mx-auto",
                                        children: "From wireless audio to charging hubs — level up your tech experience."
                                    }, void 0, false, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/accessories/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-6 sm:p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].accessories.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            product: p,
                                            index: i,
                                            glass: true
                                        }, p.id, false, {
                                            fileName: "[project]/app/accessories/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/accessories/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/accessories/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-16 md:py-20 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-white via-gt-surface to-white z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-bold text-gtblack",
                                        children: "Shop by Category"
                                    }, void 0, false, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted mt-2 max-w-lg mx-auto",
                                        children: "Browse accessories by type to find exactly what you need."
                                    }, void 0, false, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/accessories/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-card p-4 text-center group cursor-default",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-10 h-10 mx-auto mb-3 bg-white/60 rounded-xl flex items-center justify-center shadow-sm border border-white/40 ${categoryColors[cat.label]}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: categoryIcons[cat.label]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/accessories/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/accessories/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-sm text-gtblack",
                                                children: cat.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/accessories/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted mt-1",
                                                children: cat.sub
                                            }, void 0, false, {
                                                fileName: "[project]/app/accessories/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, cat.label, true, {
                                        fileName: "[project]/app/accessories/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/accessories/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-16 md:py-20 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-gt-surface to-white z-0"
                    }, void 0, false, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-card p-10 md:p-14 text-center max-w-2xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl md:text-3xl font-bold text-gtblack mb-3",
                                    children: "Looking for something specific?"
                                }, void 0, false, {
                                    fileName: "[project]/app/accessories/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted mb-6 max-w-md mx-auto",
                                    children: "Let us know what accessory you need and we'll source it for you."
                                }, void 0, false, {
                                    fileName: "[project]/app/accessories/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/263776535909?text=Hi%20GeorgeTech%2C%20I%27m%20looking%20for%20a%20specific%20accessory.",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn-primary inline-flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/accessories/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 83
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/accessories/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        "Request on WhatsApp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/accessories/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/accessories/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/accessories/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/accessories/page.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/accessories/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c2 = AccessoriesPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ALL_ACCESSORIES$PRODUCTS.accessories.map");
__turbopack_context__.k.register(_c1, "ALL_ACCESSORIES");
__turbopack_context__.k.register(_c2, "AccessoriesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0hmsusa._.js.map