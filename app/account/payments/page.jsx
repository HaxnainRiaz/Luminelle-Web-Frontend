import SectionHeading from '@/components/common/SectionHeading'
import Button from '@/components/common/Button'

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Payment Methods" align="left" />
        <div className="bg-white rounded-2xl p-8 shadow-soft text-center py-12">
          <p className="text-neutral-dark mb-4">No saved payment methods.</p>
          <Button variant="primary">Add Payment Method</Button>
        </div>
      </div>
    </div>
  )
}

