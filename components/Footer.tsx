'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    collections: [
      { name: 'Oversized Silhouettes', href: '#collections' },
      { name: 'Technical Utility', href: '#utility' },
      { name: 'Tactical Outerwear', href: '#utility' },
      { name: 'Structural Footwear', href: '#utility' },
      { name: 'Distressed Denim', href: '#utility' },
    ],
    brand: [
      { name: 'Manifesto', href: '#manifesto' },
      { name: 'Contact', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  return (
    <footer className="bg-primary-black border-t border-accent-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-heading font-bold text-accent-white mb-4 uppercase tracking-wide">
              NEXORA
            </h3>
            <p className="text-accent-white/50 font-body text-sm leading-relaxed mb-6">
              Avant-Garde Urbanism. Utility-driven design for the modern explorer.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-accent-white/40 hover:text-accent-metallic-gray transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Collections Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-accent-white font-body font-medium uppercase tracking-[0.15em] text-xs mb-4">
              Collections
            </h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-accent-white/50 hover:text-accent-white transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Brand Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-accent-white font-body font-medium uppercase tracking-[0.15em] text-xs mb-4">
              Brand
            </h4>
            <ul className="space-y-3">
              {footerLinks.brand.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-accent-white/50 hover:text-accent-white transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-accent-white font-body font-medium uppercase tracking-[0.15em] text-xs mb-4">
              Join the Urban Collective
            </h4>
            <p className="text-accent-white/50 font-body text-sm mb-4 leading-relaxed">
              Get exclusive drops and editorial content.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 bg-primary-black/50 border border-accent-white/10 rounded-sm text-accent-white placeholder-accent-white/30 focus:outline-none focus:border-accent-metallic-gray/50 transition-colors font-body text-sm"
              />
              <motion.button
                type="submit"
                className="w-full px-6 py-2.5 bg-primary-black text-accent-white font-body font-medium uppercase tracking-[0.15em] text-xs rounded-sm border border-accent-metallic-gray/30 hover:border-accent-metallic-gray hover:bg-accent-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-accent-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-accent-white/30 font-body text-xs mb-4 md:mb-0">
            © {currentYear} Nexora. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-accent-white/30 hover:text-accent-white/50 font-body text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-accent-white/30 hover:text-accent-white/50 font-body text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
