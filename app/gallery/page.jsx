import Image from 'next/image'
import SectionHeading from '@/components/common/SectionHeading'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800', category: 'Lifestyle' },
  { src: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800', category: 'Lifestyle' },
  { src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800', category: 'Behind the Scenes' },
  { src: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800', category: 'Lifestyle' },
  { src: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800', category: 'Behind the Scenes' },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-neutral-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Gallery"
          subtitle="A visual journey through our products, process, and lifestyle"
        />
        
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {['All', 'Products', 'Lifestyle', 'Behind the Scenes'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all text-primary font-medium"
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

