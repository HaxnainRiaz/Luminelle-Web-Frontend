import SectionHeading from '@/components/common/SectionHeading'
import Button from '@/components/common/Button'

export default function PreferencesPage() {
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Preferences" align="left" />
        <div className="bg-white rounded-2xl p-8 shadow-soft space-y-6">
          <div>
            <h3 className="font-medium text-primary mb-4">Email Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded border-neutral-gray" defaultChecked />
                <span className="text-neutral-dark">Receive promotional emails</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded border-neutral-gray" defaultChecked />
                <span className="text-neutral-dark">Receive order updates</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded border-neutral-gray" />
                <span className="text-neutral-dark">Receive newsletter</span>
              </label>
            </div>
          </div>
          <Button variant="primary">Save Preferences</Button>
        </div>
      </div>
    </div>
  )
}

