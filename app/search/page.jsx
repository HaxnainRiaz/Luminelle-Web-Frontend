'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search as SearchIcon } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { products, collections, blogPosts } from '@/data/mockData'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'collections' | 'blog'>('all')
  
  const searchProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  )
  
  const searchCollections = collections.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  )
  
  const searchBlogPosts = blogPosts.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(query.toLowerCase())
  )
  
  const hasResults = searchProducts.length > 0 || searchCollections.length > 0 || searchBlogPosts.length > 0
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Search"
          subtitle="Find products, collections, and articles"
          align="left"
        />
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-neutral-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            />
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-neutral-gray">
          <button
            onClick={() => setActiveTab('all')}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === 'all'
                ? 'text-primary border-b-2 border-primary'
                : 'text-neutral-dark hover:text-primary'
            }`}
          >
            All ({searchProducts.length + searchCollections.length + searchBlogPosts.length})
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === 'products'
                ? 'text-primary border-b-2 border-primary'
                : 'text-neutral-dark hover:text-primary'
            }`}
          >
            Products ({searchProducts.length})
          </button>
          <button
            onClick={() => setActiveTab('collections')}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === 'collections'
                ? 'text-primary border-b-2 border-primary'
                : 'text-neutral-dark hover:text-primary'
            }`}
          >
            Collections ({searchCollections.length})
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === 'blog'
                ? 'text-primary border-b-2 border-primary'
                : 'text-neutral-dark hover:text-primary'
            }`}
          >
            Blog ({searchBlogPosts.length})
          </button>
        </div>
        
        {/* Results */}
        {query === '' ? (
          <div className="text-center py-12">
            <p className="text-neutral-dark">Start typing to search...</p>
          </div>
        ) : !hasResults ? (
          <div className="text-center py-12">
            <p className="text-neutral-dark mb-4">No results found for "{query}"</p>
            <p className="text-sm text-neutral-dark">Try different keywords or browse our collections</p>
          </div>
        ) : (
          <div>
            {/* Products */}
            {(activeTab === 'all' || activeTab === 'products') && searchProducts.length > 0 && (
              <div className="mb-12">
                <h2 className="font-serif text-2xl text-primary mb-6">Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {searchProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
            
            {/* Collections */}
            {(activeTab === 'all' || activeTab === 'collections') && searchCollections.length > 0 && (
              <div className="mb-12">
                <h2 className="font-serif text-2xl text-primary mb-6">Collections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {searchCollections.map((collection) => (
                    <Link key={collection.id} href={`/collections/${collection.slug}`}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                        <div className="relative aspect-square">
                          <Image
                            src={collection.image}
                            alt={collection.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-serif text-xl text-primary mb-2">{collection.name}</h3>
                          <p className="text-sm text-neutral-dark">{collection.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Blog Posts */}
            {(activeTab === 'all' || activeTab === 'blog') && searchBlogPosts.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl text-primary mb-6">Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {searchBlogPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <article className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all">
                        <div className="relative aspect-video">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-serif text-xl text-primary mb-2">{post.title}</h3>
                          <p className="text-sm text-neutral-dark line-clamp-2">{post.excerpt}</p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

