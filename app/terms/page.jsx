import SectionHeading from '@/components/common/SectionHeading'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Terms & Conditions"
          subtitle="Last updated: January 2024"
          align="left"
        />
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft prose prose-lg max-w-none">
          <h2 className="font-serif text-2xl text-primary mb-4">Agreement to Terms</h2>
          <p className="text-neutral-dark mb-6">
            By accessing and using the Luminell website, you accept and agree to be bound by the 
            terms and provision of this agreement. If you do not agree to these Terms, please do 
            not use our website.
          </p>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Use License</h2>
          <p className="text-neutral-dark mb-6">
            Permission is granted to temporarily download one copy of the materials on Luminell's 
            website for personal, non-commercial transitory viewing only. This is the grant of a 
            license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-neutral-dark mb-6 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Product Information</h2>
          <p className="text-neutral-dark mb-6">
            We strive to provide accurate product descriptions and pricing. However, we do not 
            warrant that product descriptions or other content on this site is accurate, complete, 
            reliable, current, or error-free. If a product offered by us is not as described, your 
            sole remedy is to return it in unused condition.
          </p>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Pricing and Payment</h2>
          <p className="text-neutral-dark mb-6">
            All prices are in USD unless otherwise stated. We reserve the right to change prices 
            at any time. Payment must be received before we ship your order. We accept major credit 
            cards and PayPal.
          </p>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Shipping and Delivery</h2>
          <p className="text-neutral-dark mb-6">
            We ship to addresses within the United States. Shipping costs and estimated delivery 
            times will be provided during checkout. We are not responsible for delays caused by 
            shipping carriers or customs.
          </p>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Returns and Refunds</h2>
          <p className="text-neutral-dark mb-6">
            Please review our Return Policy for detailed information about returns and refunds. 
            Returns must be initiated within 30 days of receipt and items must be in unused condition.
          </p>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Limitation of Liability</h2>
          <p className="text-neutral-dark mb-6">
            In no event shall Luminell or its suppliers be liable for any damages arising out of 
            the use or inability to use the materials on our website, even if we have been notified 
            of the possibility of such damage.
          </p>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Contact Information</h2>
          <p className="text-neutral-dark mb-6">
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:legal@luminell.com" className="text-primary hover:text-secondary">
              legal@luminell.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

