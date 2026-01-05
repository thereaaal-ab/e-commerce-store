'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Category {
  id: number
  name: string
  image: string
  href: string
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    href: '#shop',
  },
  {
    id: 2,
    name: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    href: '#shop',
  },
  {
    id: 3,
    name: 'Tees',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    href: '#shop',
  },
  {
    id: 4,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
    href: '#shop',
  },
  {
    id: 5,
    name: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    href: '#shop',
  },
]

export default function ShopCategories() {
  return (
    <section id="shop" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-black to-primary-navy/20">
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
            <span className="text-accent-white">SHOP</span>{' '}
            <span className="text-gradient">CATEGORIES</span>
          </h2>
          <p className="text-accent-white/60 font-body text-lg max-w-2xl mx-auto">
            Explore our curated collections
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.href}>
                <div className="relative h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/50 to-transparent group-hover:from-primary-navy/90 group-hover:via-primary-navy/70 transition-all duration-500" />

                  {/* Category Name */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h3
                      className="text-3xl sm:text-4xl font-heading font-bold text-accent-white uppercase tracking-wider z-10"
                      whileHover={{ scale: 1.1 }}
                    >
                      {category.name}
                    </motion.h3>
                  </div>

                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-electric-blue/50 transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

