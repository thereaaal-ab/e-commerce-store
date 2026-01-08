import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Swag | Avant-Garde Urban Utility',
  description: 'Urban Utility Redefined. Avant-garde streetwear with technical materials, oversized silhouettes, and purposeful design for the modern urban explorer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-body antialiased`}>
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

