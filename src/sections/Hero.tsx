import Image from 'next/image'
import { Button } from '@/components/Button'
import { HERO } from '@/lib/content'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden h-screen [height:100svh] lg:h-[85vh] lg:min-h-[600px] lg:max-h-[780px]"
    >
      {/* Ken Burns applied to wrapper div, NOT to Image — avoids Next.js optimization conflicts */}
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/assets/images/hero-interior.png"
          alt={HERO.imageAlt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Layered overlays: gradient depth + 35% black overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-content mx-auto px-8 pb-20 lg:pb-0 text-center lg:text-left">
        <h1
          id="hero-heading"
          className="font-display font-bold text-white text-4xl lg:text-[56px] tracking-tight leading-tight animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          {HERO.headlineLine1}
          <br />
          {HERO.headlineLine2}
        </h1>

        <p
          className="text-white/85 text-base lg:text-lg leading-relaxed mt-5 lg:mt-6 max-w-[600px] mx-auto lg:mx-0 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          {HERO.subheadline}
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-8 lg:mt-10 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          <Button
            variant="primary"
            size="lg"
            href={HERO.ctaContactHref}
            className="w-full sm:w-auto"
          >
            {HERO.ctaContactLabel}
          </Button>
          <Button
            variant="outline"
            size="lg"
            href={HERO.ctaCatalogHref}
            className="w-full sm:w-auto border-white text-white hover:bg-white/15 focus-visible:ring-white"
          >
            {HERO.ctaCatalogLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
