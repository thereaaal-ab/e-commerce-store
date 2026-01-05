import Hero from '@/components/sections/Hero'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import ShopCategories from '@/components/sections/ShopCategories'
import Lookbook from '@/components/sections/Lookbook'
import AboutBrand from '@/components/sections/AboutBrand'
import Community from '@/components/sections/Community'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <FeaturedProducts />
      <ShopCategories />
      <Lookbook />
      <AboutBrand />
      <Community />
    </div>
  )
}

