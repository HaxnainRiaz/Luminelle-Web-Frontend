'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Heart, Shield, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import ProductCard from '@/components/ui/ProductCard'
import TestimonialCarousel from '@/components/home/TestimonialsCarousel'
import Badge from '@/components/ui/Badge'
import { products, collections, blogPosts, testimonials } from '@/data/mockData'

export default function Home() {
  const bestsellers = products.slice(0, 4)
  const featuredCollections = collections.slice(0, 4)
  
  const philosophyItems = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: '100% Organic',
      description: 'All ingredients sourced from certified organic farms',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Cruelty-Free',
      description: 'Never tested on animals, always compassionate',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Dermatologically Tested',
      description: 'Safe for all skin types, including sensitive',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Sustainable',
      description: 'Eco-friendly packaging and ethical sourcing',
    },
  ]
  
  const spotlightIngredients = [
    {
      name: 'Rosehip Oil',
      benefit: 'Rich in vitamin C and antioxidants',
      color: 'bg-pink-100',
    },
    {
      name: 'Argan Oil',
      benefit: 'Deeply nourishing and restorative',
      color: 'bg-amber-100',
    },
    {
      name: 'Hyaluronic Acid',
      benefit: 'Intense hydration and plumping',
      color: 'bg-blue-100',
    },
    {
      name: 'Aloe Vera',
      benefit: 'Soothing and healing properties',
      color: 'bg-green-100',
    },
  ]
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1920"
            alt="Luminell Organic Beauty"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            Nature's Beauty,<br />Refined
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90"
          >
            Discover the transformative power of organic ingredients in our premium beauty collection
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/shop">
              <Button variant="secondary" size="lg">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Learn Our Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Collections */}
      <section className="py-20 bg-neutral-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Collections"
            subtitle="Explore our carefully curated range of organic beauty essentials"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.map((collection) => (
              <Link key={collection.id} href={`/collections/${collection.slug}`}>
                <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl mb-2">{collection.name}</h3>
                    <p className="text-sm text-white/80 mb-2">{collection.description}</p>
                    <p className="text-sm font-medium">
                      {collection.productCount} products
                      <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bestsellers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Bestsellers"
            subtitle="Our most loved products, crafted with nature's finest ingredients"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy */}
      <section className="py-20 bg-gradient-organic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Philosophy"
            subtitle="What makes Luminell different—our commitment to natural, ethical beauty"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophyItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="text-secondary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-neutral-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Ingredient Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Ingredient Spotlight"
            subtitle="Discover the natural power behind our products"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlightIngredients.map((ingredient, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 ${ingredient.color} transition-transform duration-500 group-hover:scale-110`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <h3 className="font-serif text-2xl text-primary mb-2">{ingredient.name}</h3>
                  <p className="text-sm text-neutral-dark opacity-0 group-hover:opacity-100 transition-opacity">
                    {ingredient.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Journal Highlights */}
      <section className="py-20 bg-neutral-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="From Our Journal"
            subtitle="Expert insights, beauty tips, and stories from the world of organic beauty"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-neutral-dark">{post.readTime} min read</span>
                    </div>
                    <h3 className="font-serif text-2xl text-primary mb-2">{post.title}</h3>
                    <p className="text-neutral-dark mb-4 line-clamp-2">{post.excerpt}</p>
                    <span className="text-primary font-medium flex items-center gap-2">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Real experiences from the Luminell community"
          />
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </div>
  )
}

