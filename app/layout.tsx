import type { Metadata } from 'next'
import { Inter, Poppins, Bebas_Neue, Montserrat } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Street Style | Urban Fashion & Streetwear',
  description: 'Wear the Attitude. Discover the latest streetwear and contemporary clothing for stylish teenagers and young adults.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} ${bebasNeue.variable} ${montserrat.variable} font-body antialiased`}>
        <CustomCursor />
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

