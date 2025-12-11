import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import CartDrawer from '@/components/common/MiniCartDrawer'
import Footer from '@/components/common/Footer'
import HelpButton from '@/components/common/FloatingChatButton'
import { CartProvider } from '@/lib/cart-context'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata = {
  title: 'Luminell - Organic Beauty & Natural Ingredients',
  description: 'Premium organic beauty products crafted with natural ingredients. Discover luxurious skincare, haircare, and body care rituals.',
  keywords: ['organic beauty', 'natural skincare', 'premium beauty', 'luxury cosmetics'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <HelpButton />
        </CartProvider>
      </body>
    </html>
  )
}




