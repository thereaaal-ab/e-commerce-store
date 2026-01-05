'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface EditorialStory {
  id: number
  title: string
  caption: string
  image: string
  location: string
}

const editorialStories: EditorialStory[] = [
  {
    id: 1,
    title: 'Asymmetrical Layering for Urban Exploration',
    caption: 'Oversized silhouettes meet brutalist architecture. Technical materials in industrial environments.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80',
    location: 'Concrete Warehouse, Berlin',
  },
  {
    id: 2,
    title: 'Heavy-Duty Knits with Purposeful Detailing',
    caption: '500GSM cotton meets ripstop nylon. Structural design for the modern urban explorer.',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=80',
    location: 'Industrial District, Tokyo',
  },
  {
    id: 3,
    title: 'Tactical Utility in Brutalist Settings',
    caption: 'Full-outfit styling with technical straps and dropped shoulders. Purpose-driven fashion.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80',
    location: 'Urban Alley, New York',
  },
  {
    id: 4,
    title: 'Distressed Denim and Structural Footwear',
    caption: 'Multi-textured layers with chunky lifestyle footwear. Avant-garde urbanism redefined.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1600&q=80',
    location: 'Brutalist Complex, London',
  },
  {
    id: 5,
    title: 'Exaggerated Proportions in Urban Landscapes',
    caption: 'Boxy silhouettes with asymmetrical layering. Technical materials meet editorial aesthetics.',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1600&q=80',
    location: 'Concrete Structure, Seoul',
  },
]

export default function Lookbook() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % editorialStories.length)
  }

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + editorialStories.length) % editorialStories.length)
  }

  return (
    <section id="editorial" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
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
            <span className="text-accent-white">EDITORIAL</span>{' '}
            <span className="text-gradient">STORIES</span>
          </h2>
          <p className="text-accent-white/50 font-body text-sm uppercase tracking-[0.2em] max-w-2xl mx-auto mt-4">
            High-Fashion Lookbooks in Industrial Environments
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="relative h-[700px] lg:h-[900px] rounded-sm overflow-hidden border border-primary-navy/40">
            {editorialStories.map((story, index) => (
              <motion.div
                key={story.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === currentIndex}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-primary-black/50 to-transparent" />
                <div className="absolute inset-0 brutalist-overlay" />

                {/* Story Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 20 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-accent-metallic-gray font-body text-xs uppercase tracking-[0.2em] mb-3">
                      {story.location}
                    </p>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent-white mb-4 uppercase tracking-tight">
                      {story.title}
                    </h3>
                    <p className="text-accent-white/70 font-body text-base lg:text-lg max-w-3xl leading-relaxed">
                      {story.caption}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-primary-black/90 rounded-sm text-accent-white hover:bg-accent-metallic-gray transition-colors z-10 border border-accent-metallic-gray/30"
            onClick={prevStory}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous story"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-primary-black/90 rounded-sm text-accent-white hover:bg-accent-metallic-gray transition-colors z-10 border border-accent-metallic-gray/30"
            onClick={nextStory}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next story"
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {editorialStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-[2px] rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-accent-metallic-gray'
                    : 'w-2 bg-accent-white/20 hover:bg-accent-white/40'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {editorialStories.slice(0, 4).map((story, index) => (
            <motion.div
              key={story.id}
              className="relative h-64 lg:h-80 rounded-sm overflow-hidden group border border-primary-navy/40 hover:border-accent-metallic-gray/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-accent-white font-body text-xs uppercase tracking-wider">
                  {story.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
