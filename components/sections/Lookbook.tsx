'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const lookbookImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80',
    alt: 'Street style lookbook',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80',
    alt: 'Urban fashion editorial',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80',
    alt: 'Contemporary streetwear',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200&q=80',
    alt: 'Youth fashion style',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
    alt: 'Bold street style',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    alt: 'Urban lifestyle',
  },
]

export default function Lookbook() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % lookbookImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + lookbookImages.length) % lookbookImages.length)
  }

  return (
    <section id="lookbook" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
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
            <span className="text-accent-white">STYLE</span>{' '}
            <span className="text-gradient">INSPIRATION</span>
          </h2>
          <p className="text-accent-white/60 font-body text-lg max-w-2xl mx-auto">
            Editorial looks. Real style. Your vibe.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative h-[600px] lg:h-[800px] rounded-lg overflow-hidden">
            {lookbookImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === currentIndex}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-primary-black/80 rounded-full text-accent-white hover:bg-accent-electric-blue transition-colors z-10"
            onClick={prevImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-primary-black/80 rounded-full text-accent-white hover:bg-accent-electric-blue transition-colors z-10"
            onClick={nextImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {lookbookImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-accent-electric-blue'
                    : 'w-2 bg-accent-white/30 hover:bg-accent-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid View (Mobile/Tablet) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {lookbookImages.slice(0, 6).map((image, index) => (
            <motion.div
              key={image.id}
              className="relative h-48 lg:h-64 rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

