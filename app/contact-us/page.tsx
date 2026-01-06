'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react'

export default function ContactUsPage() {
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
            <span className="text-accent-white">CONTACT</span>{' '}
            <span className="text-gradient">US</span>
          </h1>
          <p className="text-accent-white/50 font-body text-sm uppercase tracking-[0.2em] max-w-2xl mx-auto mt-4">
            Get in Touch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-heading font-bold text-accent-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-black/50 rounded-lg border border-accent-white/10">
                    <Mail size={20} className="text-accent-metallic-gray" />
                  </div>
                  <div>
                    <p className="text-accent-white/50 font-body text-sm uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@nexora.com"
                      className="text-accent-white font-body hover:text-accent-metallic-gray transition-colors"
                    >
                      info@nexora.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-black/50 rounded-lg border border-accent-white/10">
                    <Phone size={20} className="text-accent-metallic-gray" />
                  </div>
                  <div>
                    <p className="text-accent-white/50 font-body text-sm uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+1234567890"
                      className="text-accent-white font-body hover:text-accent-metallic-gray transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-black/50 rounded-lg border border-accent-white/10">
                    <MapPin size={20} className="text-accent-metallic-gray" />
                  </div>
                  <div>
                    <p className="text-accent-white/50 font-body text-sm uppercase tracking-wider mb-1">
                      Address
                    </p>
                    <p className="text-accent-white font-body">
                      123 Urban Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-accent-white mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="p-3 bg-primary-black/50 rounded-lg border border-accent-white/10 text-accent-white hover:bg-accent-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-3 bg-primary-black/50 rounded-lg border border-accent-white/10 text-accent-white hover:bg-accent-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-heading font-bold text-accent-white mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-accent-white/70 font-body text-sm uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-primary-black/50 border border-accent-white/10 rounded-lg text-accent-white placeholder-accent-white/30 focus:outline-none focus:border-accent-metallic-gray/50 transition-colors font-body"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-accent-white/70 font-body text-sm uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-primary-black/50 border border-accent-white/10 rounded-lg text-accent-white placeholder-accent-white/30 focus:outline-none focus:border-accent-metallic-gray/50 transition-colors font-body"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-accent-white/70 font-body text-sm uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-primary-black/50 border border-accent-white/10 rounded-lg text-accent-white placeholder-accent-white/30 focus:outline-none focus:border-accent-metallic-gray/50 transition-colors font-body"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-accent-white/70 font-body text-sm uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-primary-black/50 border border-accent-white/10 rounded-lg text-accent-white placeholder-accent-white/30 focus:outline-none focus:border-accent-metallic-gray/50 transition-colors font-body resize-none"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-primary-black text-accent-white font-body font-medium uppercase tracking-[0.15em] text-sm rounded-lg border border-accent-metallic-gray/30 hover:border-accent-metallic-gray hover:bg-accent-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

