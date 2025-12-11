'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart, Eye } from 'lucide-react'
import Card from './Card'
import Badge from './Badge'
import RatingStars from './RatingStars'
import Button from './Button'
import { useCart } from '@/lib/cart-context'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  
  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
  }
  
  return (
    <Card hover className="h-full">
      <div
        className="relative aspect-square overflow-hidden bg-neutral-gray"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        </a>
        {product.compareAtPrice && (
          <Badge variant="success" className="absolute top-3 left-3">
            Sale
          </Badge>
        )}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Button
            variant="outline"
            size="sm"
            className="bg-white/90 hover:bg-white"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
          <a href={`/products/${product.slug}`}>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/90 hover:bg-white"
            >
              <Eye className="w-4 h-4 mr-1" />
              Quick View
            </Button>
          </a>
        </div>
      </div>
      <div className="p-5">
        <a href={`/products/${product.slug}`} className="block">
          <h3 className="font-serif text-xl text-primary mb-1">{product.name}</h3>
        </a>
        <p className="text-sm text-neutral-dark mb-3 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mb-3">
          <RatingStars rating={product.rating} showNumber size="sm" />
          <span className="text-xs text-neutral-dark">
            ({product.reviewCount} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl text-primary">
              PKR {product.price}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-neutral-dark line-through">
                PKR {product.compareAtPrice}
              </span>
            )}
          </div>
          {!product.inStock && (
            <Badge variant="info" className="text-xs">
              Out of Stock
            </Badge>
          )}
        </div>
      </div>
    </Card>
  )
}

