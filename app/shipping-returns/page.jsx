import SectionHeading from '@/components/common/SectionHeading'
import Accordion from '@/components/common/Accordion'

export default function ShippingReturnsPage() {
  const shippingFaq = [
    {
      title: 'Shipping Methods',
      content: (
        <div>
          <p className="text-neutral-dark mb-4">
            We offer several shipping options to meet your needs:
          </p>
          <ul className="list-disc pl-6 text-neutral-dark space-y-2">
            <li><strong>Standard Shipping:</strong> 5-7 business days - $10 (Free on orders over $50)</li>
            <li><strong>Expedited Shipping:</strong> 2-3 business days - $20</li>
            <li><strong>Overnight Shipping:</strong> Next business day - $35</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Shipping Destinations',
      content: (
        <p className="text-neutral-dark">
          We currently ship within the United States. International shipping may be available in the future. 
          Please contact us for more information.
        </p>
      ),
    },
    {
      title: 'Order Processing Time',
      content: (
        <p className="text-neutral-dark">
          Orders are typically processed within 1-2 business days. During peak seasons, processing may 
          take up to 3 business days. You will receive a shipping confirmation email with tracking 
          information once your order has shipped.
        </p>
      ),
    },
    {
      title: 'Tracking Your Order',
      content: (
        <p className="text-neutral-dark">
          Once your order ships, you'll receive an email with a tracking number. You can use this 
          number to track your package on the carrier's website. If you have any issues tracking 
          your order, please contact our customer service team.
        </p>
      ),
    },
  ]
  
  const returnsFaq = [
    {
      title: 'Return Policy',
      content: (
        <div>
          <p className="text-neutral-dark mb-4">
            We want you to be completely satisfied with your purchase. If you're not happy with your 
            order, you may return items within 30 days of receipt for a full refund or exchange.
          </p>
          <p className="text-neutral-dark mb-4">Items must be:</p>
          <ul className="list-disc pl-6 text-neutral-dark space-y-2 mb-4">
            <li>Unused and in original condition</li>
            <li>In original packaging with all tags attached</li>
            <li>Accompanied by proof of purchase</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'How to Return',
      content: (
        <div>
          <p className="text-neutral-dark mb-4">
            To initiate a return:
          </p>
          <ol className="list-decimal pl-6 text-neutral-dark space-y-2">
            <li>Contact our customer service team at returns@luminell.com</li>
            <li>Provide your order number and reason for return</li>
            <li>Receive a return authorization and shipping label</li>
            <li>Package items securely and ship them back to us</li>
            <li>Once received, we'll process your refund within 5-7 business days</li>
          </ol>
        </div>
      ),
    },
    {
      title: 'Refund Processing',
      content: (
        <p className="text-neutral-dark">
          Refunds will be issued to the original payment method within 5-7 business days of receiving 
          your returned items. Shipping costs are non-refundable unless the return is due to an error 
          on our part.
        </p>
      ),
    },
    {
      title: 'Exchanges',
      content: (
        <p className="text-neutral-dark">
          Exchanges are available for different sizes or colors if the item is in stock. Please contact 
          us to arrange an exchange. You may need to return the original item and place a new order 
          for the desired item.
        </p>
      ),
    },
  ]
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Shipping & Returns"
          subtitle="Everything you need to know about shipping and returning your order"
          align="left"
        />
        
        <div className="space-y-12">
          {/* Shipping Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
            <h2 className="font-serif text-3xl text-primary mb-8">Shipping Information</h2>
            <Accordion items={shippingFaq} />
          </div>
          
          {/* Returns Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
            <h2 className="font-serif text-3xl text-primary mb-8">Returns & Exchanges</h2>
            <Accordion items={returnsFaq} />
          </div>
          
          {/* Contact Section */}
          <div className="bg-gradient-organic rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-serif text-2xl text-primary mb-4">Have Questions?</h3>
            <p className="text-neutral-dark mb-6">
              Our customer service team is here to help. Contact us at{' '}
              <a href="mailto:support@luminell.com" className="text-primary hover:text-secondary font-medium">
                support@luminell.com
              </a>
              {' '}or call us at{' '}
              <a href="tel:+1234567890" className="text-primary hover:text-secondary font-medium">
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

