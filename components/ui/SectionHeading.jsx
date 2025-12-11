import { cn } from '@/lib/utils'

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
  children,
}) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }
  
  return (
    <div className={cn('mb-12', alignments[align], className)}>
      <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}

