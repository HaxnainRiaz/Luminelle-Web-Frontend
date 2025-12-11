'use client'

import { useState, ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <div key={index} className="border border-neutral-gray rounded-xl overflow-hidden">
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-neutral-gray transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium text-primary">{item.title}</span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-primary transition-transform',
                openIndex === index && 'transform rotate-180'
              )}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-neutral-offwhite text-neutral-dark">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

