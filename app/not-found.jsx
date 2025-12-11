import Link from 'next/link'
import Button from '@/components/common/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-offwhite flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-6xl md:text-8xl text-primary mb-4">404</h1>
        <h2 className="font-serif text-3xl text-primary mb-4">Page Not Found</h2>
        <p className="text-neutral-dark mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

