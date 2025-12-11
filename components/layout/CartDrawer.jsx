'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import Button from '@/components/ui/Button'

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, itemCount, updateQuantity, removeFromCart, getTotal } = useCart()
  
  useEffect(() => {
    if (items.length > 0) {
      setIsOpen(true)
    }
  }, [items.length])
  
  // Allow manual toggle via external state if needed
  const toggleDrawer = () => setIsOpen(!isOpen)
  
  if (!isOpen && items.length === 0) return null
  
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-large z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-gray">
            <h2 className="font-serif text-2xl text-primary">Your Cart</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-neutral-gray rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-primary" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-neutral-gray mb-4" />
                <p className="text-neutral-dark mb-4">Your cart is empty</p>
                <Link href="/shop">
                  <Button variant="primary">Start Shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 pb-4 border-b border-neutral-gray last:border-0">
                    <Link
                      href={`/products/${item.product.slug}`}
                      className="relative w-20 h-20 flex-shrink-0 bg-neutral-gray rounded-xl overflow-hidden"
                    >
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </Link>
                    <div className="flex-1">
                      <Link href={`/products/${item.product.slug}`}>
                        <h3 className="font-medium text-primary mb-1 hover:text-secondary transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-neutral-dark mb-2">
                        ${item.product.price}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-neutral-gray rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-neutral-gray transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-3 py-1 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-neutral-gray transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-sm text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-neutral-gray space-y-4">
              <div className="flex justify-between text-lg">
                <span className="font-medium text-primary">Subtotal</span>
                <span className="font-serif text-primary">${getTotal().toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="block">
                <Button variant="primary" size="lg" className="w-full">
                  Checkout
                </Button>
              </Link>
              <Link href="/cart" className="block">
                <Button variant="outline" size="md" className="w-full">
                  View Cart
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

