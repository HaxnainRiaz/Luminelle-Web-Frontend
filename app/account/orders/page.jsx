import Link from 'next/link'
import SectionHeading from '@/components/common/SectionHeading'
import Button from '@/components/common/Button'

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Order History" align="left" />
        <div className="bg-white rounded-2xl p-8 shadow-soft text-center py-12">
          <p className="text-neutral-dark mb-4">You haven't placed any orders yet.</p>
          <Link href="/shop">
            <Button variant="primary">Start Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

