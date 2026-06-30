import { Hero } from '@/sections/Hero'
import { TrustBar } from '@/sections/TrustBar'
import { Categories } from '@/sections/Categories'
import { BrandShowcase } from '@/sections/BrandShowcase'
import { Locations } from '@/sections/Locations'
import { WhyUs } from '@/sections/WhyUs'
import { SocialProof } from '@/sections/SocialProof'
import { FinalCTA } from '@/sections/FinalCTA'
import { Footer } from '@/sections/Footer'
import { ViberButton } from '@/components/ViberButton'

export default function Home() {
  return (
    <>
      <main id="main-content">
        {/* Wrapper makes hero + strip fill exactly the desktop viewport below the header */}
        <div className="lg:h-[calc(100vh-80px)] lg:flex lg:flex-col">
          <Hero />
          <TrustBar />
        </div>
        <Categories />
        <BrandShowcase />
        <Locations />
        <WhyUs />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
      <ViberButton />
    </>
  )
}
