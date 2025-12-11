'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, User } from 'lucide-react'
import Button from '@/components/common/Button'
import SectionHeading from '@/components/common/SectionHeading'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle registration
    console.log('Register:', formData)
  }
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12 flex items-center">
      <div className="max-w-md mx-auto w-full px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Create Account"
          subtitle="Join Luminell and discover organic beauty"
          align="left"
          className="mb-8"
        />
        
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark" />
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark" />
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark" />
                <input
                  type="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark" />
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 rounded border-neutral-gray" required />
              <span className="text-sm text-neutral-dark">
                I agree to the{' '}
                <Link href="/terms" className="text-primary hover:text-secondary">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link href="/privacy-policy" className="text-primary hover:text-secondary">
                  Privacy Policy
                </Link>
              </span>
            </label>
            
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Create Account
            </Button>
            
            <p className="text-center text-sm text-neutral-dark">
              Already have an account?{' '}
              <Link href="/account/login" className="text-primary hover:text-secondary font-medium">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

