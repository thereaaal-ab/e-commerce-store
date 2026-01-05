'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

const communityPosts = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    alt: 'User styling tactical vest',
    user: '@urbanexplorer',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
    alt: 'Chunky footwear styling',
    user: '@streetutility',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    alt: 'Oversized silhouette',
    user: '@avanturban',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    alt: 'Cargo pants styling',
    user: '@technicalwear',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80',
    alt: 'Distressed denim look',
    user: '@brutaliststyle',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    alt: 'Structural footwear',
    user: '@utilityfashion',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    alt: 'Full outfit styling',
    user: '@urbanlayers',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
    alt: 'Tactical outerwear',
    user: '@purposefuldesign',
  },
]

export default function Community() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={28} className="text-accent-metallic-gray" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight">
              <span className="text-accent-white">URBAN</span>{' '}
              <span className="text-gradient">COLLECTIVE</span>
            </h2>
          </div>
          <p className="text-accent-white/50 font-body text-sm uppercase tracking-[0.2em] max-w-2xl mx-auto mt-4">
            Real-World Styling. Purpose-Driven Fashion.
          </p>
        </motion.div>

        {/* Community Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {communityPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-sm border border-primary-navy/40 hover:border-accent-metallic-gray/50 transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={post.url}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-4">
                <Instagram size={20} className="text-accent-white mb-2" />
                <p className="text-accent-white font-body text-xs uppercase tracking-wider text-center">
                  {post.user}
                </p>
              </div>
              <div className="absolute inset-0 brutalist-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary-navy text-accent-white font-body font-medium uppercase tracking-[0.2em] text-sm border border-accent-metallic-gray/30 hover:border-accent-metallic-gray hover:bg-primary-navy/90 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Instagram size={18} />
            Join the Collective
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

