'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Filter, X } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  size: string[]
  color: string[]
}

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Classic Hoodie',
    price: 349,
    image: '/logo.jpg',
    category: 'Hoodies',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Black', 'Navy'],
  },
  {
    id: 2,
    name: 'Tactical Vest',
    price: 429,
    image: '/logo.jpg',
    category: 'Outerwear',
    size: ['M', 'L', 'XL'],
    color: ['Black', 'Olive'],
  },
  {
    id: 3,
    name: 'Varsity Jacket',
    price: 389,
    image: '/logo.jpg',
    category: 'Outerwear',
    size: ['S', 'M', 'L'],
    color: ['Black', 'Navy'],
  },
  {
    id: 4,
    name: 'Low-Top Sneakers',
    price: 299,
    image: '/logo.jpg',
    category: 'Sneakers',
    size: ['8', '9', '10', '11'],
    color: ['Black', 'White'],
  },
  {
    id: 5,
    name: 'Distressed Jeans',
    price: 279,
    image: '/logo.jpg',
    category: 'Pants',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Blue', 'Black'],
  },
  {
    id: 6,
    name: 'Oversized T-Shirt',
    price: 449,
    image: '/logo.jpg',
    category: 'Tops',
    size: ['M', 'L', 'XL'],
    color: ['Black', 'Grey'],
  },
  {
    id: 7,
    name: 'Cargo Pants',
    price: 199,
    image: '/logo.jpg',
    category: 'Pants',
    size: ['S', 'M', 'L'],
    color: ['Black', 'Olive'],
  },
  {
    id: 8,
    name: 'Heavyweight Hoodie',
    price: 159,
    image: '/logo.jpg',
    category: 'Hoodies',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Black', 'Grey'],
  },
  {
    id: 9,
    name: 'Classic Sneakers',
    price: 249,
    image: '/logo.jpg',
    category: 'Sneakers',
    size: ['8', '9', '10', '11', '12'],
    color: ['Black', 'White'],
  },
  {
    id: 10,
    name: 'Classic Sweatpants',
    price: 129,
    image: '/logo.jpg',
    category: 'Sweatpants',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Black', 'Grey'],
  },
  {
    id: 11,
    name: 'Baseball Cap',
    price: 49,
    image: '/logo.jpg',
    category: 'Headwear',
    size: ['One Size'],
    color: ['Black', 'Navy'],
  },
  {
    id: 12,
    name: 'Graphic T-Shirt',
    price: 79,
    image: '/logo.jpg',
    category: 'Tops',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Black', 'White'],
  },
]

const categories = ['All', 'Hoodies', 'Pants', 'Outerwear', 'Sweatpants', 'Sneakers', 'Headwear', 'Tops', 'Accessories']
const sizes = ['S', 'M', 'L', 'XL', '8', '9', '10', '11', '12', 'One Size']
const colors = ['Black', 'Navy', 'White', 'Grey', 'Olive', 'Blue']

export default function CollectionsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    )
  }

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    )
  }

  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false
    if (selectedSizes.length > 0 && !selectedSizes.some(size => product.size.includes(size))) return false
    if (selectedColors.length > 0 && !selectedColors.some(color => product.color.includes(color))) return false
    if (product.price < priceRange.min || product.price > priceRange.max) return false
    return true
  })

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-accent-white mb-4">
            <span className="text-gradient">COLLECTIONS</span>
          </h1>
          <p className="text-accent-white/50 font-body text-sm uppercase tracking-[0.2em]">
            All Products
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div>
                <h3 className="text-accent-white font-body font-semibold uppercase tracking-wider text-sm mb-4">
                  Categories
                </h3>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-primary-black/50 border border-accent-white/10 rounded-lg text-accent-white focus:outline-none focus:border-accent-metallic-gray/50 font-body text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-primary-black">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-accent-white font-body font-semibold uppercase tracking-wider text-sm mb-4">
                  Price
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                      className="w-full px-3 py-2 bg-primary-black/50 border border-accent-white/10 rounded-lg text-accent-white placeholder-accent-white/30 focus:outline-none focus:border-accent-metallic-gray/50 font-body text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                      className="w-full px-3 py-2 bg-primary-black/50 border border-accent-white/10 rounded-lg text-accent-white placeholder-accent-white/30 focus:outline-none focus:border-accent-metallic-gray/50 font-body text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-accent-white font-body font-semibold uppercase tracking-wider text-sm mb-4">
                  Sizes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-1 rounded-lg border transition-colors font-body text-sm ${
                        selectedSizes.includes(size)
                          ? 'bg-accent-white/10 text-accent-white border-accent-white/20'
                          : 'bg-primary-black/50 text-accent-white/60 border-accent-white/10 hover:border-accent-white/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-accent-white font-body font-semibold uppercase tracking-wider text-sm mb-4">
                  Colors
                </h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`px-3 py-1 rounded-lg border transition-colors font-body text-sm ${
                        selectedColors.includes(color)
                          ? 'bg-accent-white/10 text-accent-white border-accent-white/20'
                          : 'bg-primary-black/50 text-accent-white/60 border-accent-white/10 hover:border-accent-white/30'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-accent-white/50 font-body text-sm">
                Showing {filteredProducts.length} products
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="group relative bg-primary-black/20 rounded-lg overflow-hidden border border-accent-white/10 hover:border-accent-metallic-gray/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 bg-primary-black/40 rounded-b-lg">
                    <p className="text-accent-metallic-gray font-body text-xs uppercase tracking-[0.15em] mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-accent-white font-heading font-bold text-lg mb-2 uppercase tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-accent-white font-heading font-bold text-xl">
                      ${product.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-40 p-4 bg-primary-black border border-accent-white/10 rounded-full text-accent-white shadow-lg"
        >
          <Filter size={24} />
        </button>

        {/* Mobile Filter Overlay */}
        {isFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-primary-black">
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-heading font-bold text-accent-white">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-accent-white"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-accent-white font-body font-semibold uppercase tracking-wider text-sm mb-4">
                    Categories
                  </h3>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-primary-black/50 border border-accent-white/10 rounded-lg text-accent-white focus:outline-none focus:border-accent-metallic-gray/50 font-body text-sm"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-primary-black">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h3 className="text-accent-white font-body font-semibold uppercase tracking-wider text-sm mb-4">
                    Price
                  </h3>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                      className="w-full px-3 py-2 bg-primary-black/50 border border-accent-white/10 rounded-lg text-accent-white placeholder-accent-white/30 focus:outline-none focus:border-accent-metallic-gray/50 font-body text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                      className="w-full px-3 py-2 bg-primary-black/50 border border-accent-white/10 rounded-lg text-accent-white placeholder-accent-white/30 focus:outline-none focus:border-accent-metallic-gray/50 font-body text-sm"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-accent-white font-body font-semibold uppercase tracking-wider text-sm mb-4">
                    Sizes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-1 rounded-lg border transition-colors font-body text-sm ${
                          selectedSizes.includes(size)
                            ? 'bg-accent-white/10 text-accent-white border-accent-white/20'
                            : 'bg-primary-black/50 text-accent-white/60 border-accent-white/10 hover:border-accent-white/30'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-accent-white font-body font-semibold uppercase tracking-wider text-sm mb-4">
                    Colors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {colors.map(color => (
                      <button
                        key={color}
                        onClick={() => toggleColor(color)}
                        className={`px-3 py-1 rounded-lg border transition-colors font-body text-sm ${
                          selectedColors.includes(color)
                            ? 'bg-accent-white/10 text-accent-white border-accent-white/20'
                            : 'bg-primary-black/50 text-accent-white/60 border-accent-white/10 hover:border-accent-white/30'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
