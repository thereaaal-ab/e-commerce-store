'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Collection {
  id: number
  name: string
  price: string
  image: string
  category: string
}

const collections: Collection[] = [
  {
    id: 1,
    name: 'Classic Hoodie',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
    category: 'Oversized, Boxy',
  },
  {
    id: 2,
    name: 'Tactical Vest',
    price: '$429',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80',
    category: 'Exaggerated Proportions',
  },
  {
    id: 3,
    name: 'Varsity Jacket',
    price: '$389',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80',
    category: 'Dropped Shoulders',
  },
  {
    id: 4,
    name: 'Low-Top Sneakers',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    category: 'Bold, Purposeful',
  },
  {
    id: 5,
    name: 'Distressed Jeans',
    price: '$279',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200&q=80',
    category: 'Boxy, Structural',
  },
  {
    id: 6,
    name: 'Oversized T-Shirt',
    price: '$449',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80',
    category: 'Exaggerated, Oversized',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="group relative bg-primary-black/20 rounded-lg overflow-hidden border border-accent-white/10 hover:border-accent-metallic-gray/50 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Collection Image */}
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Collection Info */}
              <div className="p-4 bg-primary-black/40 rounded-b-lg">
                <p className="text-accent-metallic-gray font-body text-xs uppercase tracking-[0.15em] mb-2">
                  {collection.category}
                </p>
                <h3 className="text-accent-white font-heading font-bold text-lg mb-2 uppercase tracking-wide">
                  {collection.name}
                </h3>
                <p className="text-accent-white font-heading font-bold text-xl">
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
