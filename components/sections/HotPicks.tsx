'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

const hotPicks: Product[] = [
  {
    id: 1,
    name: 'Classic Hoodie',
    price: '$349',
    image: '/logo.jpg',
    category: 'Hoodies',
  },
  {
    id: 2,
    name: 'Tactical Vest',
    price: '$429',
    image: '/logo.jpg',
    category: 'Outerwear',
  },
  {
    id: 3,
    name: 'Varsity Jacket',
    price: '$389',
    image: '/logo.jpg',
    category: 'Outerwear',
  },
  {
    id: 4,
    name: 'Low-Top Sneakers',
    price: '$299',
    image: '/logo.jpg',
    category: 'Sneakers',
  },
  {
    id: 5,
    name: 'Distressed Jeans',
    price: '$279',
    image: '/logo.jpg',
    category: 'Pants',
  },
  {
    id: 6,
    name: 'Oversized T-Shirt',
    price: '$449',
    image: '/logo.jpg',
    category: 'Tops',
  },
]

export default function HotPicks() {
  return (
    <section id="hot-picks" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
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
            <span className="text-accent-white">HOT</span>{' '}
            <span className="text-gradient">PICKS</span>
          </h2>
          <p className="text-accent-white/50 font-body text-sm uppercase tracking-[0.2em] max-w-2xl mx-auto mt-4">
            Most Purchased Products
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {hotPicks.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-primary-black/20 rounded-lg overflow-hidden border border-accent-white/10 hover:border-accent-metallic-gray/50 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Product Info */}
              <div className="p-4 bg-primary-black/40 rounded-b-lg">
                <p className="text-accent-metallic-gray font-body text-xs uppercase tracking-[0.15em] mb-2">
                  {product.category}
                </p>
                <h3 className="text-accent-white font-heading font-bold text-lg mb-2 uppercase tracking-wide">
                  {product.name}
                </h3>
                <p className="text-accent-white font-heading font-bold text-xl">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

