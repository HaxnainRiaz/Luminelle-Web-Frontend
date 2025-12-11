import { products, collections } from '@/data/mockData'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CollectionPage({ params }) {
  const slug = params?.category ?? ''

  const normalize = (value) => value.toLowerCase().replace(/\s+/g, '-')

  const collection = collections.find((c) => normalize(c.slug) === normalize(slug))
  const displayName =
    collection?.name ||
    slug
      .replace(/-/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

  const categoryProducts = products.filter(
    (p) =>
      normalize(p.category) === normalize(slug) ||
      normalize(p.category) === normalize(collection?.name || '')
  )

  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={displayName}
          subtitle={`Discover our ${displayName.toLowerCase()} collection`}
          align="left"
        />
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-dark">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

