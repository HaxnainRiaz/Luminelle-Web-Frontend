import Image from 'next/image'
import { Leaf, Heart, Shield, CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: '100% Organic',
      description: 'We source only the finest certified organic ingredients from trusted suppliers around the world.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Cruelty-Free',
      description: 'Our commitment to ethical beauty means we never test on animals and support cruelty-free practices.',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Dermatologically Tested',
      description: 'All our products undergo rigorous testing to ensure they\'re safe for all skin types.',
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Sustainable',
      description: 'We prioritize eco-friendly packaging and sustainable sourcing to protect our planet.',
    },
  ]
  
  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Luminell was founded with a vision to bring premium organic beauty to everyone.',
    },
    {
      year: '2021',
      title: 'First Collection',
      description: 'We launched our signature skincare line with carefully selected organic ingredients.',
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Extended our range to include haircare and body care products.',
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Continuing to innovate and expand while staying true to our organic, ethical values.',
    },
  ]
  
  return (
    <div className="min-h-screen bg-neutral-offwhite">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920"
          alt="About Luminell"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Story</h1>
          <p className="text-xl text-white/90">
            Born from a passion for natural beauty and sustainable living
          </p>
        </div>
      </section>
      
      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-neutral-dark">
            <h2 className="font-serif text-4xl text-primary mb-6">Who We Are</h2>
            <p className="text-lg leading-relaxed mb-6">
              Luminell was born from a simple belief: that beauty products should be as natural 
              as they are effective. Founded in 2020, we set out to create a brand that combines 
              the luxury of premium skincare with the purity of organic ingredients.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Every product in our collection is thoughtfully crafted with certified organic 
              ingredients sourced from trusted suppliers. We believe in transparency, sustainability, 
              and the power of nature to transform your skincare routine.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to make organic beauty accessible without compromising on quality or 
              effectiveness. We're committed to ethical practices, sustainable packaging, and 
              creating products that not only enhance your natural beauty but also respect our planet.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-gradient-organic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="text-secondary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl text-primary mb-3">{value.title}</h3>
                <p className="text-neutral-dark">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="Milestones that shaped Luminell"
          />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center font-serif text-xl text-primary">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-neutral-gray last:border-0">
                  <h3 className="font-serif text-2xl text-primary mb-2">{item.title}</h3>
                  <p className="text-neutral-dark">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-neutral-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet the Team"
            subtitle="The passionate people behind Luminell"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' },
              { name: 'Emma Rodriguez', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' },
              { name: 'Maya Patel', role: 'Sustainability Director', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-soft">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl text-primary mb-1">{member.name}</h3>
                  <p className="text-neutral-dark">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

