'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart, Share2, Minus, Plus, Check } from 'lucide-react'
import { products } from '@/data/mockData'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import RatingStars from '@/components/ui/RatingStars'
import Tabs from '@/components/ui/Tabs'
import ProductCard from '@/components/ui/ProductCard'
import { useCart } from '@/lib/cart-context'

export default function ProductPage({ params }) {
  const slug = params?.slug
  const product = slug ? products.find((p) => p.slug === slug) : undefined
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-primary mb-4">Product Not Found</h1>
          <Link href="/shop">
            <Button variant="primary">Back to Shop</Button>
          </Link>
        </div>
      </div>
    )
  }
  
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
  
  const handleAddToCart = () => {
    addToCart(product, quantity)
  }
  
  const tabs = [
    {
      label: 'Description',
      content: (
        <div className="prose max-w-none">
          <p className="text-lg text-neutral-dark leading-relaxed">{product.description}</p>
        </div>
      ),
    },
    {
      label: 'Ingredients',
      content: (
        <div>
          <p className="text-neutral-dark mb-4">
            All ingredients are certified organic and carefully selected for their benefits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-neutral-offwhite rounded-lg"
              >
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-primary">{ingredient}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'Benefits',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
              <p className="text-neutral-dark">{benefit}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: 'How to Use',
      content: (
        <div>
          {product.howToUse ? (
            <p className="text-lg text-neutral-dark leading-relaxed">{product.howToUse}</p>
          ) : (
            <p className="text-neutral-dark">
              Follow your regular skincare routine. Apply to clean skin and gently massage in
              upward motions until fully absorbed.
            </p>
          )}
        </div>
      ),
    },
  ]
  
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-neutral-dark">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-primary">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white mb-4">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary'
                      : 'border-transparent hover:border-secondary'
                  }`}
                >
                  <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <RatingStars rating={product.rating} size="lg" showNumber />
              <span className="text-neutral-dark">
                ({product.reviewCount} reviews)
              </span>
            </div>
            
            <p className="text-lg text-neutral-dark mb-8">{product.shortDescription}</p>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-4xl text-primary">PKR {product.price}</span>
              {product.compareAtPrice && (
                <>
                  <span className="text-xl text-neutral-dark line-through">
                    PKR {product.compareAtPrice}
                  </span>
                  <Badge variant="success">
                    Save PKR {product.compareAtPrice - product.price}
                  </Badge>
                </>
              )}
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary font-medium">Quantity:</span>
              <div className="flex items-center border border-neutral-gray rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-neutral-gray transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-neutral-gray transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Save
              </Button>
              <Button variant="ghost" size="lg">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h3 className="font-medium text-primary mb-3">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-neutral-dark">
                  <Check className="w-5 h-5 text-secondary" />
                  Certified organic ingredients
                </li>
                <li className="flex items-center gap-2 text-neutral-dark">
                  <Check className="w-5 h-5 text-secondary" />
                  Cruelty-free & vegan
                </li>
                <li className="flex items-center gap-2 text-neutral-dark">
                  <Check className="w-5 h-5 text-secondary" />
                  Suitable for all skin types
                </li>
                <li className="flex items-center gap-2 text-neutral-dark">
                  <Check className="w-5 h-5 text-secondary" />
                  Free shipping on orders over $50
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-2xl p-8 shadow-soft mb-20">
          <Tabs tabs={tabs} />
        </div>
        
        {/* Reviews Section */}
        <div className="bg-white rounded-2xl p-8 shadow-soft mb-20">
          <h2 className="font-serif text-3xl text-primary mb-6">Customer Reviews</h2>
          <div className="border-t border-neutral-gray pt-6">
            <div className="text-center py-12">
              <p className="text-neutral-dark mb-4">
                Average rating: <span className="font-semibold text-primary">{product.rating}</span>
              </p>
              <RatingStars rating={product.rating} size="lg" className="justify-center mb-6" />
              <Button variant="outline">Write a Review</Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl text-primary mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

