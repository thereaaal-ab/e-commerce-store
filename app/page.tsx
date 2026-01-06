import Hero from '@/components/sections/Hero'
import HotPicks from '@/components/sections/HotPicks'
import ShopCategories from '@/components/sections/ShopCategories'
import AboutBrand from '@/components/sections/AboutBrand'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <HotPicks />
      <ShopCategories />
      <AboutBrand />
    </div>
  )
}

