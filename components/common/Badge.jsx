import { cn } from '@/lib/utils'

export default function Badge({ children, variant = 'primary', className }) {
  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-primary',
    success: 'bg-green-100 text-green-800',
    info: 'bg-blue-100 text-blue-800',
  }
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

