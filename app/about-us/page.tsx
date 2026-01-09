'use client'

import { motion } from 'framer-motion'

export default function AboutUsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-8 tracking-tight">
              <span className="text-accent-white">WELCOME TO</span>{' '}
              <span className="text-gradient">SWAG</span>
            </h1>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="space-y-6 text-accent-white/70 font-body text-base lg:text-lg leading-relaxed text-left">
              <p className="uppercase tracking-[0.1em] text-accent-metallic-gray text-sm font-medium text-center">
                About Us
              </p>
              <p>
                We started this brand from the ground up. built on the influences of music, art, architecture, and the unspoken codes of the streets.
              </p>
              <p>
                Our focus is on creating pieces that last: premium fabrics sourced for durability and comfort, precise cuts that fit the way modern life demands, and designs that draw from raw, unfiltered inspiration. Every collection is intentional clean lines, subtle details, and graphics that hit without overwhelming.
              </p>
              <p>
                We release in limited runs to keep things exclusive and meaningful. No mass production, no chasing trends that fade overnight. Instead, we prioritize quality over quantity, ensuring each drop reflects craftsmanship and attention to detail.
              </p>
              <p>
                This is for the ones who navigate the city on their own path those who value authenticity, versatility, and edge in what they wear. We're here to provide gear that moves with you, stands up to the grind, and represents a mindset that's unapologetic and forward.
              </p>
              <p>
                Welcome to SWAG. Built different.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

