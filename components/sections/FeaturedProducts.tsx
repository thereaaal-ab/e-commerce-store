'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Info } from 'lucide-react'
import Image from 'next/image'

interface Collection {
  id: number
  name: string
  description: string
  price: string
  image: string
  materials: string[]
  silhouette: string
}

const collections: Collection[] = [
  {
    id: 1,
    name: 'Asymmetrical Cargo Set',
    description: 'Full outfit with dropped shoulders and technical straps',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
    materials: ['500GSM Cotton', 'Ripstop Nylon', 'Technical Straps'],
    silhouette: 'Oversized, Boxy',
  },
  {
    id: 2,
    name: 'Tactical Vest Layering',
    description: 'Multi-textured knits with structural outerwear',
    price: '$429',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80',
    materials: ['Heavyweight Knits', 'Distressed Denim', 'Leather Accents'],
    silhouette: 'Exaggerated Proportions',
  },
  {
    id: 3,
    name: 'Varsity Utility Jacket',
    description: 'Leather contrasts with oversized fit',
    price: '$389',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80',
    materials: ['500GSM Cotton', 'Leather', 'Ripstop Nylon'],
    silhouette: 'Dropped Shoulders',
  },
  {
    id: 4,
    name: 'Structural Footwear Set',
    description: 'Chunky lifestyle footwear with cargo pants',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    materials: ['Technical Mesh', 'Heavy-Duty Sole', 'Ripstop'],
    silhouette: 'Bold, Purposeful',
  },
  {
    id: 5,
    name: 'Distressed Denim Essentials',
    description: 'Asymmetrical layering with multi-textured elements',
    price: '$279',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200&q=80',
    materials: ['Distressed Denim', '500GSM Cotton', 'Technical Straps'],
    silhouette: 'Boxy, Structural',
  },
  {
    id: 6,
    name: 'Oversized Utility Layers',
    description: 'Complete look with tactical elements',
    price: '$449',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80',
    materials: ['Ripstop Nylon', 'Heavyweight Knits', 'Leather'],
    silhouette: 'Exaggerated, Oversized',
  },
]

export default function FeaturedProducts() {
  return (
    <section id="collections" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 tracking-tight">
            <span className="text-accent-white">FEATURED</span>{' '}
            <span className="text-gradient">COLLECTIONS</span>
          </h2>
          <p className="text-accent-white/50 font-body text-sm uppercase tracking-[0.2em] max-w-2xl mx-auto mt-4">
            Full-Outfit Styling. Technical Materials. Purposeful Design.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="group relative bg-primary-navy/20 rounded-sm overflow-hidden border border-primary-navy/40 hover:border-accent-metallic-gray/50 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Collection Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 brutalist-overlay opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    className="p-2.5 bg-primary-black/90 rounded-sm text-accent-white hover:bg-accent-metallic-gray transition-colors border border-accent-metallic-gray/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View details"
                  >
                    <Info size={16} />
                  </motion.button>
                  <motion.button
                    className="p-2.5 bg-primary-black/90 rounded-sm text-accent-white hover:bg-primary-navy transition-colors border border-primary-navy/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Add to cart"
                  >
                    <ShoppingBag size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Collection Info */}
              <div className="p-6 bg-primary-black/40">
                <p className="text-accent-metallic-gray font-body text-xs uppercase tracking-[0.15em] mb-2">
                  {collection.silhouette}
                </p>
                <h3 className="text-accent-white font-heading font-bold text-xl mb-2 uppercase tracking-wide">
                  {collection.name}
                </h3>
                <p className="text-accent-white/60 font-body text-sm mb-4 leading-relaxed">
                  {collection.description}
                </p>
                
                {/* Materials */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {collection.materials.map((material, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary-navy/50 text-accent-metallic-gray font-body text-xs uppercase tracking-wider border border-primary-navy"
                    >
                      {material}
                    </span>
                  ))}
                </div>

                <p className="text-accent-white font-heading font-bold text-2xl">
                  {collection.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
