'use client'

import { useState } from 'react'
import Button from '@/components/common/Button'
import SectionHeading from '@/components/common/SectionHeading'

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Profile" align="left" />
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button variant="primary" size="lg">Save Changes</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

