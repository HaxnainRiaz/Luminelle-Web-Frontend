'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'
import Button from '@/components/common/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', topic: '', message: '' })
  }
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Email</h4>
                    <a href="mailto:hello@luminell.com" className="text-neutral-dark hover:text-primary">
                      hello@luminell.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-neutral-dark hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Address</h4>
                    <p className="text-neutral-dark">
                      123 Beauty Street<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h4 className="font-medium text-primary mb-3">Customer Support</h4>
              <p className="text-sm text-neutral-dark mb-4">
                Our support team is available Monday-Friday, 9 AM - 6 PM PST.
              </p>
              <p className="text-sm text-neutral-dark">
                For urgent matters, please call us directly or email support@luminell.com
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-soft space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-primary mb-2">
                  Topic *
                </label>
                <select
                  id="topic"
                  required
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="order">Order Support</option>
                  <option value="return">Returns & Exchanges</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              
              <Button type="submit" variant="primary" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
            
            {/* Map Placeholder */}
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl text-primary mb-4">Find Us</h3>
              <div className="aspect-video bg-neutral-gray rounded-xl flex items-center justify-center">
                <p className="text-neutral-dark">Map placeholder - integrate with Google Maps API</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

