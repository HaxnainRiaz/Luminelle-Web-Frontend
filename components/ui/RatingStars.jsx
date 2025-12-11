import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function RatingStars({ rating, size = 'md', showNumber = false, className }) {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }
  
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              sizes[size],
              i < fullStars
                ? 'fill-secondary text-secondary'
                : i === fullStars && hasHalfStar
                ? 'fill-secondary/50 text-secondary'
                : 'fill-neutral-gray text-neutral-gray'
            )}
          />
        ))}
      </div>
      {showNumber && (
        <span className="ml-1 text-sm text-neutral-dark">{rating.toFixed(1)}</span>
      )}
    </div>
  )
}

