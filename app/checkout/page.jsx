'use client'

import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { Check, CreditCard, Truck, FileText } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const { items, getTotal } = useCart()
  const [step, setStep] = useState(1)
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
  })
  const [paymentMethod, setPaymentMethod] = useState('jazzcash')
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-offwhite py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading title="Your cart is empty" />
          <Link href="/shop">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }
  
  const subtotal = getTotal()
  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax
  
  const steps = [
    { number: 1, label: 'Shipping', icon: <Truck className="w-5 h-5" /> },
    { number: 2, label: 'Payment', icon: <CreditCard className="w-5 h-5" /> },
    { number: 3, label: 'Review', icon: <FileText className="w-5 h-5" /> },
  ]
  
  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }
  
  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Checkout" align="left" />
        
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((s, index) => (
              <div key={s.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      step >= s.number
                        ? 'bg-primary text-white'
                        : 'bg-neutral-gray text-neutral-dark'
                    } transition-colors`}
                  >
                    {step > s.number ? <Check className="w-6 h-6" /> : s.icon}
                  </div>
                  <span className="mt-2 text-sm font-medium text-primary">{s.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-4 ${
                      step > s.number ? 'bg-primary' : 'bg-neutral-gray'
                    } transition-colors`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="bg-white rounded-2xl p-8 shadow-soft space-y-6">
                <h2 className="font-serif text-2xl text-primary mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Address *</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">City *</label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">State *</label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.zip}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="bg-white rounded-2xl p-8 shadow-soft space-y-6">
                <h2 className="font-serif text-2xl text-primary mb-6">Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { key: 'jazzcash', label: 'JazzCash' },
                    { key: 'easypaisa', label: 'EasyPaisa' },
                    { key: 'nayapay', label: 'NayaPay' },
                    { key: 'sadapay', label: 'SadaPay' },
                    { key: 'cod', label: 'Cash on Delivery' },
                  ].map((method) => (
                    <button
                      key={method.key}
                      onClick={() => setPaymentMethod(method.key)}
                      className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
                        paymentMethod === method.key
                          ? 'border-primary bg-primary/5'
                          : 'border-neutral-gray hover:border-secondary'
                      }`}
                      type="button"
                    >
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <span className="font-medium text-primary">{method.label}</span>
                      </div>
                      <p className="text-xs text-neutral-dark mt-2">
                        {method.key === 'cod'
                          ? 'Pay in cash when your order arrives.'
                          : 'You will be guided to confirm via your payment app.'}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="bg-neutral-offwhite rounded-xl p-4 text-sm text-neutral-dark">
                  <p className="font-medium text-primary mb-2">Secure checkout</p>
                  <p>
                    We&apos;ll confirm order details and then prompt you to approve payment through your selected method.
                    For cash on delivery, please have the exact amount ready.
                  </p>
                </div>
              </div>
            )}
            
            {/* Step 3: Review */}
            {step === 3 && (
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <h2 className="font-serif text-2xl text-primary mb-6">Review Your Order</h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between items-center py-4 border-b border-neutral-gray">
                      <div>
                        <p className="font-medium text-primary">{item.product.name}</p>
                        <p className="text-sm text-neutral-dark">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-medium text-primary">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-neutral-dark">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-dark">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-neutral-dark">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-semibold text-primary pt-4 border-t border-neutral-gray">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Place Order
                </Button>
              </div>
            )}
            
            {/* Navigation */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button variant="outline" onClick={handlePrevious}>
                  Previous
                </Button>
              )}
              {step < 3 && (
                <Button variant="primary" onClick={handleNext} className="ml-auto">
                  Continue
                </Button>
              )}
            </div>
          </div>
          
          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-soft sticky top-24">
              <h3 className="font-serif text-xl text-primary mb-4">Order Summary</h3>
              <div className="space-y-2 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-neutral-dark">{item.product.name} × {item.quantity}</span>
                    <span className="text-primary">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-neutral-gray pt-4 space-y-2">
                <div className="flex justify-between text-neutral-dark">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-dark">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-neutral-dark">
                  <span>Tax</span>
                  <span>PKR {tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-primary pt-4 border-t border-neutral-gray">
                  <span>Total</span>
                  <span>PKR {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

