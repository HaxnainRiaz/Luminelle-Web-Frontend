'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Tabs({ tabs, className }) {
  const [activeTab, setActiveTab] = useState(0)
  
  return (
    <div className={className}>
      <div className="border-b border-neutral-gray">
        <div className="flex space-x-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={cn(
                'py-4 px-1 border-b-2 font-medium transition-colors',
                activeTab === index
                  ? 'border-primary text-primary'
                  : 'border-transparent text-neutral-dark hover:text-primary hover:border-primary/50'
              )}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

