export interface Product {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  price: number
  compareAtPrice?: number
  images: string[]
  category: string
  tags: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  variants?: ProductVariant[]
  ingredients: string[]
  benefits: string[]
  howToUse?: string
}

export interface ProductVariant {
  id: string
  name: string
  price: number
  inStock: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  variant?: ProductVariant
}

export interface Collection {
  id: string
  slug: string
  name: string
  description: string
  image: string
  productCount: number
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  readTime: number
}

export interface Review {
  id: string
  productId: string
  userName: string
  rating: number
  title: string
  comment: string
  verified: boolean
  date: string
}

export interface Testimonial {
  id: string
  name: string
  location?: string
  rating: number
  comment: string
  image?: string
}

