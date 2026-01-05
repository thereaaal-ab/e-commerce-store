'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const heroImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80',
    alt: 'Oversized silhouettes in brutalist setting',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1920&q=80',
    alt: 'Technical utility wear',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80',
    alt: 'Avant-garde urbanism',
  },
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0">
            <Image
              src={heroImages[currentImageIndex].url}
              alt={heroImages[currentImageIndex].alt}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-black/90 via-primary-black/70 to-primary-black/95" />
            <div className="absolute inset-0 brutalist-overlay" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-6 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-accent-white block mb-2">URBAN UTILITY</span>
            <span className="text-gradient block">REDEFINED</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-accent-white/60 font-body mb-10 max-w-3xl mx-auto uppercase tracking-[0.15em] font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Avant-Garde Layers for the Streets
          </motion.p>

          <motion.p
            className="text-sm sm:text-base text-accent-metallic-gray font-body mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Technical materials. Oversized silhouettes. Purposeful design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link href="#collections">
              <motion.button
                className="px-10 py-4 bg-primary-navy text-accent-white font-body font-medium uppercase tracking-[0.2em] text-sm border border-accent-metallic-gray/30 hover:border-accent-metallic-gray hover:bg-primary-navy/90 transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Explore Collections</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} className="text-accent-white/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-[2px] rounded-full transition-all ${
              index === currentImageIndex
                ? 'w-8 bg-accent-metallic-gray'
                : 'w-2 bg-accent-white/20 hover:bg-accent-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
