'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Category {
  id: number
  name: string
  description: string
  image: string
  href: string
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Oversized Silhouettes',
    description: 'Exaggerated proportions, dropped shoulders',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
    href: '#collections',
  },
  {
    id: 2,
    name: 'Technical Utility Pants',
    description: 'Cargo pants with technical straps',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200&q=80',
    href: '#collections',
  },
  {
    id: 3,
    name: 'Layered Tactical Outerwear',
    description: 'Tactical vests, varsity jackets',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80',
    href: '#collections',
  },
  {
    id: 4,
    name: 'Structural Footwear',
    description: 'Chunky lifestyle footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    href: '#collections',
  },
  {
    id: 5,
    name: 'Distressed Denim Essentials',
    description: 'Multi-textured, purposeful design',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80',
    href: '#collections',
  },
]

export default function ShopCategories() {
  return (
    <section id="utility" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-black via-primary-navy/10 to-primary-black">
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
            <span className="text-accent-white">UTILITY</span>{' '}
            <span className="text-gradient">CATEGORIES</span>
          </h2>
          <p className="text-accent-white/50 font-body text-sm uppercase tracking-[0.2em] max-w-2xl mx-auto mt-4">
            Purpose-Driven Design. Technical Materials.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group relative h-[500px] rounded-sm overflow-hidden border border-primary-navy/40 hover:border-accent-metallic-gray/50 transition-all"
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
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/60 to-transparent group-hover:from-primary-navy/95 group-hover:via-primary-navy/80 transition-all duration-700" />
                  <div className="absolute inset-0 brutalist-overlay opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Category Info */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8 z-10">
                    <motion.h3
                      className="text-3xl sm:text-4xl font-heading font-bold text-accent-white uppercase tracking-wide mb-2 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {category.name}
                    </motion.h3>
                    <p className="text-accent-metallic-gray font-body text-xs uppercase tracking-[0.15em] text-center">
                      {category.description}
                    </p>
                  </div>

                  {/* Asymmetrical Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-metallic-gray/30 transition-all duration-500" 
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
