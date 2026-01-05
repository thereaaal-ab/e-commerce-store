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

export default function AboutBrand() {
  return (
    <section id="manifesto" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-navy/10 to-primary-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-8 tracking-tight">
              <span className="text-accent-white">AVANT-GARDE</span>{' '}
              <span className="text-gradient">URBANISM</span>
            </h2>
            <div className="space-y-6 text-accent-white/70 font-body text-base lg:text-lg leading-relaxed">
              <p className="uppercase tracking-[0.1em] text-accent-metallic-gray text-sm font-medium">
                Our Manifesto
              </p>
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
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="px-6 py-4 bg-primary-navy/30 rounded-sm border border-primary-navy/50">
                <p className="text-3xl font-heading font-bold text-accent-metallic-gray mb-1">500GSM</p>
                <p className="text-xs text-accent-white/50 font-body uppercase tracking-wider">Heavyweight Cotton</p>
              </div>
              <div className="px-6 py-4 bg-primary-navy/30 rounded-sm border border-primary-navy/50">
                <p className="text-3xl font-heading font-bold text-accent-metallic-gray mb-1">100%</p>
                <p className="text-xs text-accent-white/50 font-body uppercase tracking-wider">Technical Materials</p>
              </div>
              <div className="px-6 py-4 bg-primary-navy/30 rounded-sm border border-primary-navy/50">
                <p className="text-3xl font-heading font-bold text-accent-metallic-gray mb-1">2020</p>
                <p className="text-xs text-accent-white/50 font-body uppercase tracking-wider">Founded</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {behindScenesImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`relative h-64 lg:h-80 rounded-sm overflow-hidden group border border-primary-navy/40 ${
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
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 brutalist-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
