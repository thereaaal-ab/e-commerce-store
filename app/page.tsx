import Hero from '@/components/sections/Hero'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import ShopCategories from '@/components/sections/ShopCategories'
import AboutBrand from '@/components/sections/AboutBrand'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <FeaturedProducts />
      <ShopCategories />
      <AboutBrand />
    </div>
  )
}

