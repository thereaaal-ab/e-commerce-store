'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { name: 'New Arrivals', href: '#new-arrivals' },
      { name: 'Hoodies', href: '#shop' },
      { name: 'Sneakers', href: '#shop' },
      { name: 'Tees', href: '#shop' },
      { name: 'Accessories', href: '#shop' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  return (
    <footer className="bg-primary-navy border-t border-primary-navy/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-bold text-accent-white mb-4">
              STREET<span className="text-accent-electric-blue">STYLE</span>
            </h3>
            <p className="text-accent-white/60 font-body text-sm leading-relaxed mb-4">
              Wear the Attitude. Street. Style. Unfiltered.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-accent-white/60 hover:text-accent-electric-blue transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-accent-white font-body font-semibold uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-accent-white/60 hover:text-accent-electric-blue transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-accent-white font-body font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-accent-white/60 hover:text-accent-electric-blue transition-colors font-body text-sm"
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
            <h4 className="text-accent-white font-body font-semibold uppercase tracking-wider mb-4">
              Join the Crew
            </h4>
            <p className="text-accent-white/60 font-body text-sm mb-4">
              Get exclusive drops and street style inspiration.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-primary-black/50 border border-primary-navy/50 rounded text-accent-white placeholder-accent-white/40 focus:outline-none focus:border-accent-electric-blue transition-colors font-body text-sm"
              />
              <motion.button
                type="submit"
                className="w-full px-6 py-2 bg-gradient-to-r from-accent-electric-blue to-accent-hot-pink text-accent-white font-body font-semibold uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
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
          className="mt-12 pt-8 border-t border-primary-navy/50 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-accent-white/40 font-body text-xs mb-4 md:mb-0">
            © {currentYear} Street Style. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-accent-white/40 hover:text-accent-white/60 font-body text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-accent-white/40 hover:text-accent-white/60 font-body text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

