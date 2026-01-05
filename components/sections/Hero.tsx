'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const heroImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80',
    alt: 'Streetwear model',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1920&q=80',
    alt: 'Urban fashion',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1920&q=80',
    alt: 'Contemporary style',
  },
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImages[currentImageIndex].url})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary-black/80 via-primary-black/60 to-primary-black/90" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-accent-white">WEAR THE</span>
            <br />
            <span className="text-gradient">ATTITUDE</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-accent-white/80 font-body mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Street. Style. Unfiltered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="#shop">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-accent-electric-blue to-accent-hot-pink text-accent-white font-body font-semibold uppercase tracking-wider rounded-lg glow-effect hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 212, 255, 0.3)',
                    '0 0 30px rgba(0, 212, 255, 0.5)',
                    '0 0 20px rgba(0, 212, 255, 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Shop Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={32} className="text-accent-white/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? 'w-8 bg-accent-electric-blue'
                : 'w-2 bg-accent-white/30 hover:bg-accent-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

