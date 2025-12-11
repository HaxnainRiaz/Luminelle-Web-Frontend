import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'
import Button from '@/components/common/Button'

export default function Footer() {
  const footerLinks = {
    shop: [
      { href: '/shop', label: 'All Products' },
      { href: '/collections/skincare', label: 'Skincare' },
      { href: '/collections/haircare', label: 'Haircare' },
      { href: '/collections/body', label: 'Body' },
      { href: '/collections/ritual-sets', label: 'Ritual Sets' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/blog', label: 'Journal' },
      { href: '/contact', label: 'Contact' },
      { href: '/gallery', label: 'Gallery' },
    ],
    support: [
      { href: '/shipping-returns', label: 'Shipping & Returns' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/contact', label: 'Customer Service' },
    ],
  }
  
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl mb-4">Luminell</h3>
            <p className="text-secondary/80 mb-4">
              Premium organic beauty products crafted with natural ingredients for your radiant glow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary hover:text-secondary-light transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-secondary-light transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-secondary-light transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-secondary/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-secondary/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-secondary/80 mb-4">
              Subscribe to receive updates on new products and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-xl bg-primary-light border border-secondary/30 text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button variant="secondary" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/60 text-sm">
            © {new Date().getFullYear()} Luminell. All rights reserved.
          </p>
          <p className="text-secondary/80 text-sm text-center">
            Made with natural ingredients • Cruelty-free • Sustainable packaging
          </p>
        </div>
      </div>
    </footer>
  )
}

