'use client'

import Link from 'next/link'
import { User, ShoppingBag, Heart, MapPin, CreditCard, Settings } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'

export default function AccountPage() {
  const menuItems = [
    { icon: <User className="w-5 h-5" />, label: 'Profile', href: '/account/profile' },
    { icon: <ShoppingBag className="w-5 h-5" />, label: 'Order History', href: '/account/orders' },
    { icon: <Heart className="w-5 h-5" />, label: 'Wishlist', href: '/account/wishlist' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Address Book', href: '/account/addresses' },
    { icon: <CreditCard className="w-5 h-5" />, label: 'Payment Methods', href: '/account/payments' },
    { icon: <Settings className="w-5 h-5" />, label: 'Preferences', href: '/account/preferences' },
  ]
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Account"
          subtitle="Manage your account settings and preferences"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 cursor-pointer">
                <div className="text-secondary mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl text-primary">{item.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

