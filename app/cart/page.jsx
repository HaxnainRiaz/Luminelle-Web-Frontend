'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import Button from '@/components/common/Button'
import SectionHeading from '@/components/common/SectionHeading'

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotal, clearCart } = useCart()
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-offwhite py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Your Cart" subtitle="Your cart is empty" />
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-neutral-gray mx-auto mb-4" />
            <p className="text-neutral-dark mb-6">Start adding products to your cart</p>
            <Link href="/shop">
              <Button variant="primary" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  const subtotal = getTotal()
  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Your Cart"
          subtitle={`${items.length} ${items.length === 1 ? 'item' : 'items'}`}
          align="left"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl p-6 shadow-soft flex flex-col sm:flex-row gap-6"
              >
                <Link
                  href={`/products/${item.product.slug}`}
                  className="relative w-full sm:w-32 h-32 bg-neutral-gray rounded-xl overflow-hidden flex-shrink-0"
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
                    <h3 className="font-serif text-xl text-primary mb-2 hover:text-secondary transition-colors">
                      {item.product.name}
                    </h3>
                  </Link>
                  <p className="text-neutral-dark mb-4">{item.product.shortDescription}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-neutral-gray rounded-xl">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-neutral-gray transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-neutral-gray transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-2xl text-primary">
                        PKR {(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-sm text-neutral-dark">
                          PKR {item.product.price.toFixed(2)} each
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between">
              <Link href="/shop">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
              <Button variant="ghost" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-soft sticky top-24">
              <h2 className="font-serif text-2xl text-primary mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-neutral-dark">
                  <span>Subtotal</span>
                  <span>PKR {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-dark">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `PKR ${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-dark">
                  <span>Tax</span>
                  <span>PKR {tax.toFixed(2)}</span>
                </div>
                {subtotal < 50 && (
                  <p className="text-sm text-secondary">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>
              
              <div className="border-t border-neutral-gray pt-4 mb-6">
                <div className="flex justify-between text-xl font-semibold text-primary">
                  <span>Total</span>
                  <span>PKR {total.toFixed(2)}</span>
                </div>
              </div>
              
              <Link href="/checkout">
                <Button variant="primary" size="lg" className="w-full mb-4">
                  Proceed to Checkout
                </Button>
              </Link>
              
              <div className="bg-neutral-offwhite rounded-xl p-4 text-sm text-neutral-dark">
                <p className="font-medium mb-2">Secure checkout</p>
                <p>All transactions are secure and encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

