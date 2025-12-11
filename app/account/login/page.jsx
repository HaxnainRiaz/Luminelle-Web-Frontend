'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock } from 'lucide-react'
import Button from '@/components/common/Button'
import SectionHeading from '@/components/common/SectionHeading'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login
    console.log('Login:', formData)
  }
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12 flex items-center">
      <div className="max-w-md mx-auto w-full px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Welcome Back"
          subtitle="Sign in to your account to continue"
          align="left"
          className="mb-8"
        />
        
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-6">
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
            
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-neutral-gray" />
                <span className="text-sm text-neutral-dark">Remember me</span>
              </label>
              <Link href="/account/forgot-password" className="text-sm text-primary hover:text-secondary">
                Forgot password?
              </Link>
            </div>
            
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Sign In
            </Button>
            
            <p className="text-center text-sm text-neutral-dark">
              Don't have an account?{' '}
              <Link href="/account/register" className="text-primary hover:text-secondary font-medium">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

