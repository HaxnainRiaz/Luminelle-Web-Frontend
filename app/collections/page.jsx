import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'
import { collections } from '@/data/mockData'

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Collections"
          subtitle="Explore our curated range of organic beauty products"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link key={collection.id} href={`/collections/${collection.slug}`}>
              <div className="group relative aspect-[3/2] rounded-2xl overflow-hidden cursor-pointer">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="font-serif text-3xl md:text-4xl mb-3">{collection.name}</h2>
                  <p className="text-white/90 mb-4">{collection.description}</p>
                  <div className="flex items-center gap-2 font-medium">
                    Explore Collection
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

