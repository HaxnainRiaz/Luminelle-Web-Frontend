import { cn } from '@/lib/utils'

export default function Card({ children, className, hover = false }) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-medium hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}

