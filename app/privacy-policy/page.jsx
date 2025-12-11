import SectionHeading from '@/components/common/SectionHeading'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Privacy Policy"
          subtitle="Last updated: January 2024"
          align="left"
        />
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft prose prose-lg max-w-none">
          <h2 className="font-serif text-2xl text-primary mb-4">Introduction</h2>
          <p className="text-neutral-dark mb-6">
            At Luminell, we are committed to protecting your privacy. This Privacy Policy explains 
            how we collect, use, disclose, and safeguard your information when you visit our website 
            and use our services.
          </p>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Information We Collect</h2>
          <p className="text-neutral-dark mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-neutral-dark mb-6 space-y-2">
            <li>Name and contact information (email address, phone number, mailing address)</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Account information (username, password, preferences)</li>
            <li>Purchase history and transaction details</li>
            <li>Communications with our customer service team</li>
          </ul>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">How We Use Your Information</h2>
          <p className="text-neutral-dark mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-neutral-dark mb-6 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Send you order confirmations and updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Information Sharing</h2>
          <p className="text-neutral-dark mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share 
            your information with service providers who assist us in operating our website and 
            conducting our business, but only as necessary to provide these services.
          </p>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Data Security</h2>
          <p className="text-neutral-dark mb-6">
            We implement appropriate technical and organizational security measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction. 
            However, no method of transmission over the Internet is 100% secure.
          </p>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Your Rights</h2>
          <p className="text-neutral-dark mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-neutral-dark mb-6 space-y-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          
          <h2 className="font-serif text-2xl text-primary mb-4 mt-8">Contact Us</h2>
          <p className="text-neutral-dark mb-6">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@luminell.com" className="text-primary hover:text-secondary">
              privacy@luminell.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

