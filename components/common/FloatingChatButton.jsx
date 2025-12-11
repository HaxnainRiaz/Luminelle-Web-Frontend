'use client'

import { MessageCircle } from 'lucide-react'

export default function HelpButton() {
  return (
    <button
      className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-large flex items-center justify-center hover:bg-primary-dark transition-all hover:scale-110 z-40"
      aria-label="Get help"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}

