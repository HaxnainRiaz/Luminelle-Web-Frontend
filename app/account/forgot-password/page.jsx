'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft } from 'lucide-react'
import Button from '@/components/common/Button'
import SectionHeading from '@/components/common/SectionHeading'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password reset
    console.log('Password reset requested for:', email)
    setSubmitted(true)
  }
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12 flex items-center">
      <div className="max-w-md mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Link href="/account/login" className="inline-flex items-center gap-2 text-primary hover:text-secondary mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>
        
        <SectionHeading
          title="Reset Password"
          subtitle="Enter your email address and we'll send you a link to reset your password"
          align="left"
          className="mb-8"
        />
        
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          {submitted ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-2xl text-primary mb-4">Check Your Email</h2>
              <p className="text-neutral-dark mb-6">
                We've sent password reset instructions to {email}
              </p>
              <Link href="/account/login">
                <Button variant="primary">Back to Login</Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Reset Link
              </Button>
              
              <p className="text-center text-sm text-neutral-dark">
                Remember your password?{' '}
                <Link href="/account/login" className="text-primary hover:text-secondary font-medium">
                  Sign in
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

