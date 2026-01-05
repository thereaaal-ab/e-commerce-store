'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMousePosition)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Structural metallic pointer */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-sm bg-accent-metallic-gray pointer-events-none z-[10000] mix-blend-difference"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)',
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      {/* Outer structural frame */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference ${
          isHovering
            ? 'w-16 h-16 border-2 border-accent-metallic-gray bg-transparent'
            : 'w-10 h-10 border border-accent-white/20 bg-accent-white/5'
        }`}
        style={{
          clipPath: isHovering 
            ? 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
            : 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 32 : 20),
          y: mousePosition.y - (isHovering ? 32 : 20),
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  )
}
