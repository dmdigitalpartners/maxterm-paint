import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
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

      {/* Layered overlays: lighter gradient depth + softer brand navy */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-primary/38" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-content mx-auto px-8 pb-20 lg:pb-0 text-center lg:text-left">
        <h1
          id="hero-heading"
          className="font-display font-bold text-white text-4xl lg:text-[56px] tracking-tight leading-tight animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          {HERO.headline}
        </h1>

        <p
          className="text-white/85 text-base lg:text-lg leading-relaxed mt-5 lg:mt-6 max-w-[600px] mx-auto lg:mx-0 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          {HERO.subheadline}
        </p>

        <div
          className="flex justify-center lg:justify-start mt-8 lg:mt-10 animate-fade-in"
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
        </div>
      </div>

      {/* Ribbon scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-pulse-2x">
        <a
          href="#produkti"
          aria-label="Разгледайте продуктите"
          className="flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-colors focus-visible:outline-none"
        >
          <span className="text-xs font-medium tracking-widest uppercase select-none">
            Разгледайте
          </span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 backdrop-blur-sm bg-white/10">
            <ChevronDown size={16} aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  )
}
