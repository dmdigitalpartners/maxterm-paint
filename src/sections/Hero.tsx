import Image from 'next/image'
import { HERO } from '@/lib/content'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden h-[calc(100svh-180px)] min-h-[400px] lg:h-auto lg:flex-1"
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
      <div className="relative z-10 flex flex-col justify-center h-full max-w-content mx-auto px-6 text-center lg:text-left">
        <h1
          id="hero-heading"
          className="font-display font-bold text-white text-[22px] lg:text-[56px] tracking-tight leading-tight animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          {HERO.headlineLine1}
          <br />
          {HERO.headlineLine2}
        </h1>

        <p
          className="text-white/85 text-sm lg:text-lg leading-relaxed mt-4 lg:mt-6 max-w-[600px] mx-auto lg:mx-0 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          {HERO.subheadline}
        </p>

        <div
          className="flex flex-row justify-center lg:justify-start gap-2 lg:gap-3 mt-6 lg:mt-10 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href={HERO.ctaContactHref}
            className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 font-medium rounded-md transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-accent text-white hover:bg-accent/90 active:scale-[0.97] focus-visible:ring-accent text-sm py-2.5 px-3 min-h-[44px] lg:text-lg lg:py-4 lg:px-8 lg:min-h-[56px]"
          >
            {HERO.ctaContactLabel}
          </a>
          <a
            href={HERO.ctaCatalogHref}
            className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 font-medium rounded-md transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-white text-white bg-white/20 hover:bg-white/30 active:scale-[0.97] focus-visible:ring-white text-sm py-2.5 px-3 min-h-[44px] lg:text-lg lg:py-4 lg:px-8 lg:min-h-[56px]"
          >
            {HERO.ctaCatalogLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
