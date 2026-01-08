'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import CircularGallery to avoid SSR issues
const CircularGallery = dynamic(() => import('@/components/CircularGallery'), {
  ssr: false,
})

interface Category {
  id: number
  name: string
  image: string
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Hoodies',
    image: '/hoodies.jpg',
  },
  {
    id: 2,
    name: 'Pants',
    image: '/pants.jpg',
  },
  {
    id: 3,
    name: 'Outerwear',
    image: '/jacket.jpg',
  },
  {
    id: 4,
    name: 'Sweatpants',
    image: '/sweatpants.jpg',
  },
  {
    id: 5,
    name: 'Sneakers',
    image: '/sneakers.jpg',
  },
  {
    id: 6,
    name: 'Headwear',
    image: '/hat.jpg',
  },
  {
    id: 7,
    name: 'Tops',
    image: '/tops.jpg',
  },
  {
    id: 8,
    name: 'Accessories',
    image: '/accessories.jpg',
  },
]

export default function ShopCategories() {
  // Transform categories to the format CircularGallery expects
  const galleryItems = categories.map((category) => ({
    image: category.image,
    text: category.name,
  }))

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

        {/* Circular Gallery with Categories */}
        <div className="relative" style={{ height: '600px' }}>
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            font="bold 30px Futura, Helvetica Neue, Arial, sans-serif"
          />
        </div>
      </div>
    </section>
  )
}
