'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const lifestyleImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    alt: 'Urban lifestyle',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80',
    alt: 'Street culture',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80',
    alt: 'Youth culture',
  },
]

export default function AboutBrand() {
  return (
    <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-navy/20 to-primary-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-accent-white">ABOUT</span>{' '}
              <span className="text-gradient">THE BRAND</span>
            </h2>
            <div className="space-y-4 text-accent-white/80 font-body text-lg leading-relaxed">
              <p>
                Born from the streets, built for the bold. We're not just a clothing brand—we're a movement.
              </p>
              <p>
                Our mission is simple: empower the next generation to express themselves fearlessly through style.
                Every piece we create is designed to make a statement, to break boundaries, and to celebrate
                individuality.
              </p>
              <p>
                We believe fashion is more than fabric—it's identity, culture, and self-expression. Join us in
                redefining what streetwear means.
              </p>
            </div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-primary-navy/50 rounded-lg border border-primary-navy">
                  <p className="text-2xl font-heading font-bold text-accent-electric-blue">100K+</p>
                  <p className="text-sm text-accent-white/60 font-body">Community Members</p>
                </div>
                <div className="px-6 py-3 bg-primary-navy/50 rounded-lg border border-primary-navy">
                  <p className="text-2xl font-heading font-bold text-accent-hot-pink">50+</p>
                  <p className="text-sm text-accent-white/60 font-body">Countries Served</p>
                </div>
                <div className="px-6 py-3 bg-primary-navy/50 rounded-lg border border-primary-navy">
                  <p className="text-2xl font-heading font-bold text-accent-electric-blue">2020</p>
                  <p className="text-sm text-accent-white/60 font-body">Founded</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {lifestyleImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`relative h-64 lg:h-80 rounded-lg overflow-hidden group ${
                  index === 0 ? 'col-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

