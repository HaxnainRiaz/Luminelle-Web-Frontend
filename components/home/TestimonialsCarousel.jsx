'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import RatingStars from '@/components/common/RatingStars'

export default function TestimonialsCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
                <RatingStars rating={testimonial.rating} size="lg" className="mb-4" />
                <p className="text-lg md:text-xl text-neutral-dark mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-4">
                  {testimonial.image && (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    {testimonial.location && (
                      <p className="text-sm text-neutral-dark">{testimonial.location}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-medium hover:shadow-large transition-shadow"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-medium hover:shadow-large transition-shadow"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-secondary'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

