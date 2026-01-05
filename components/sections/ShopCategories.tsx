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
    image: '/hoodies.jpg',
    href: '#collections',
  },
  {
    id: 2,
    name: 'Pants',
    image: '/pants.jpg',
    href: '#collections',
  },
  {
    id: 3,
    name: 'Outerwear',
    image: '/jacket.jpg',
    href: '#collections',
  },
  {
    id: 4,
    name: 'Sweatpants',
    image: '/sweatpants.jpg',
    href: '#collections',
  },
  {
    id: 5,
    name: 'Sneakers',
    image: '/sneakers.jpg',
    href: '#collections',
  },
  {
    id: 6,
    name: 'Headwear',
    image: '/hat.jpg',
    href: '#collections',
  },
  {
    id: 7,
    name: 'Tops',
    image: '/tops.jpg',
    href: '#collections',
  },
  {
    id: 8,
    name: 'Accessories',
    image: '/accessories.jpg',
    href: '#collections',
  },
]

export default function ShopCategories() {
  return (
    <section id="categories" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-primary-black">
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
            <span className="text-gradient">CATEGORIES</span>
          </h2>
          <p className="text-accent-white/50 font-body text-sm uppercase tracking-[0.2em] max-w-2xl mx-auto mt-4">
            Purpose-Driven Design. Technical Materials.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group relative h-[400px] rounded-lg overflow-hidden border border-accent-white/10 hover:border-accent-metallic-gray/50 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link href={category.href}>
                <div className="relative h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-primary-black/40 to-transparent group-hover:from-primary-black/90 group-hover:via-primary-black/60 transition-all duration-700 rounded-lg" />

                  {/* Category Info */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8 z-10">
                    <motion.h3
                      className="text-2xl sm:text-3xl font-heading font-bold text-accent-white uppercase tracking-wide mb-2 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {category.name}
                    </motion.h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
