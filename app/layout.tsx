import './globals.css'
import React from 'react'
import Header from '../components/Header'
import NewsHighlights from '../components/NewsHighlights'
import Footer from '../components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400','600','700','800'], variable: '--font-sans' })

export const metadata = {
  title: 'GeorgeTech Holdings',
  description: 'Premium tech and vehicle importation services — GeorgeTech Holdings',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <NewsHighlights />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
