'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

const instagramPosts = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    alt: 'Instagram post',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80',
    alt: 'Instagram post',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    alt: 'Instagram post',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80',
    alt: 'Instagram post',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    alt: 'Instagram post',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    alt: 'Instagram post',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    alt: 'Instagram post',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80',
    alt: 'Instagram post',
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={32} className="text-accent-electric-blue" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
              <span className="text-accent-white">@STREET</span>
              <span className="text-gradient">STYLE</span>
            </h2>
          </div>
          <p className="text-accent-white/60 font-body text-lg max-w-2xl mx-auto">
            Join the movement. Tag us in your fits.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={post.url}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram size={24} className="text-accent-white" />
              </div>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-electric-blue to-accent-hot-pink text-accent-white font-body font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={20} />
            Follow Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

