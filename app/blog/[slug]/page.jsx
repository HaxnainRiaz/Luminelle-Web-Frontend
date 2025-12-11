import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { blogPosts } from '@/data/mockData'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/mockData'

export default function BlogPostPage({ params }) {
  const slug = params?.slug ?? ''
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)
  
  return (
    <div className="min-h-screen bg-neutral-offwhite">
      {/* Hero Image */}
      <div className="relative h-[60vh] mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-secondary mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Journal
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center gap-2 text-sm text-neutral-dark">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-dark">
            <Clock className="w-4 h-4" />
            {post.readTime} min read
          </div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl text-primary mb-6">{post.title}</h1>
        
        <div className="prose prose-lg max-w-none bg-white rounded-2xl p-8 md:p-12 shadow-soft">
          <p className="text-xl text-neutral-dark mb-6 leading-relaxed">{post.excerpt}</p>
          
          <div className="border-l-4 border-secondary pl-6 my-8">
            <p className="text-2xl font-serif text-primary italic">
              "Nature provides the finest ingredients for radiant, healthy skin."
            </p>
          </div>
          
          <div className="space-y-4 text-neutral-dark leading-relaxed">
            <p>
              {post.content || `This is a detailed article about ${post.title.toLowerCase()}. 
              Here you would find comprehensive information, expert insights, and practical tips 
              related to the topic. The content would be well-structured with multiple paragraphs, 
              images, and examples to help readers understand and apply the information.`}
            </p>
            <p>
              At Luminell, we believe in the power of natural ingredients to transform your skincare 
              routine. Every product in our collection is carefully crafted with certified organic 
              ingredients sourced from trusted suppliers who share our commitment to sustainability 
              and ethical practices.
            </p>
            <p>
              Whether you're new to organic beauty or looking to enhance your current routine, 
              we're here to guide you on your journey to healthier, more radiant skin.
            </p>
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-3xl text-primary mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.slug}`}>
                  <article className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all">
                    <div className="relative aspect-video">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl text-primary mb-2">{related.title}</h3>
                      <p className="text-sm text-neutral-dark line-clamp-2">{related.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

