'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Heart } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Urban Hoodie Pro',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    category: 'Hoodies',
  },
  {
    id: 2,
    name: 'Street Sneakers',
    price: '$129.99',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    category: 'Sneakers',
  },
  {
    id: 3,
    name: 'Bold Graphic Tee',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    category: 'Tees',
  },
  {
    id: 4,
    name: 'Vintage Denim Jacket',
    price: '$119.99',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    category: 'Outerwear',
  },
  {
    id: 5,
    name: 'Cargo Pants',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    category: 'Pants',
  },
  {
    id: 6,
    name: 'Street Cap',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
    category: 'Accessories',
  },
]

export default function FeaturedProducts() {
  return (
    <section id="new-arrivals" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-accent-white">NEW</span>{' '}
            <span className="text-gradient">ARRIVALS</span>
          </h2>
          <p className="text-accent-white/60 font-body text-lg max-w-2xl mx-auto">
            Fresh drops. Bold styles. Your next favorite piece is here.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-primary-navy/30 rounded-lg overflow-hidden border border-primary-navy/50 hover:border-accent-electric-blue/50 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    className="p-2 bg-primary-black/80 rounded-full text-accent-white hover:bg-accent-hot-pink transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Add to favorites"
                  >
                    <Heart size={18} />
                  </motion.button>
                  <motion.button
                    className="p-2 bg-primary-black/80 rounded-full text-accent-white hover:bg-accent-electric-blue transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Add to cart"
                  >
                    <ShoppingBag size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-accent-white/40 font-body text-xs uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h3 className="text-accent-white font-body font-semibold text-lg mb-2">
                  {product.name}
                </h3>
                <p className="text-accent-electric-blue font-body font-bold text-xl">
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

