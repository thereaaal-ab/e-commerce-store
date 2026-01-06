'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const behindScenesImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    alt: 'Brutalist shoot',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
    alt: 'Industrial setting',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
    alt: 'Urban exploration',
  },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 tracking-tight">
            <span className="text-accent-white">ABOUT</span>{' '}
            <span className="text-gradient">US</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 tracking-tight">
              <span className="text-accent-white">AVANT-GARDE</span>{' '}
              <span className="text-gradient">URBANISM</span>
            </h2>
            <div className="space-y-6 text-accent-white/70 font-body text-base lg:text-lg leading-relaxed">
              <p>
                We reject basic streetwear tropes. Instead, we embrace innovative design with oversized, 
                boxy, and structural silhouettes. Every piece features exaggerated proportions, dropped shoulders, 
                and asymmetrical layering—purposeful design for the modern urban explorer.
              </p>
              <p>
                Our materials are technical and heavy-duty: 500GSM cotton, ripstop nylon, distressed denim, 
                and multi-textured knits. We promote full-outfit styling with cargo pants equipped with 
                technical straps, tactical vests, varsity jackets with leather contrasts, and chunky 
                lifestyle footwear.
              </p>
              <p>
                The aesthetic is editorial, gritty, and purposeful. Shot in industrial and brutalist 
                environments, our lookbooks tell a raw, immersive urban narrative. This is fashion 
                for those seeking self-expression through utility-driven design.
              </p>
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {behindScenesImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`relative h-64 lg:h-80 rounded-lg overflow-hidden group border border-accent-white/10 ${
                  index === 0 ? 'col-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="px-6 py-4 bg-primary-black/50 rounded-lg border border-accent-white/10 text-center">
            <p className="text-3xl font-heading font-bold text-accent-metallic-gray mb-1">500GSM</p>
            <p className="text-xs text-accent-white/50 font-body uppercase tracking-wider">Heavyweight Cotton</p>
          </div>
          <div className="px-6 py-4 bg-primary-black/50 rounded-lg border border-accent-white/10 text-center">
            <p className="text-3xl font-heading font-bold text-accent-metallic-gray mb-1">100%</p>
            <p className="text-xs text-accent-white/50 font-body uppercase tracking-wider">Technical Materials</p>
          </div>
          <div className="px-6 py-4 bg-primary-black/50 rounded-lg border border-accent-white/10 text-center">
            <p className="text-3xl font-heading font-bold text-accent-metallic-gray mb-1">2020</p>
            <p className="text-xs text-accent-white/50 font-body uppercase tracking-wider">Founded</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

