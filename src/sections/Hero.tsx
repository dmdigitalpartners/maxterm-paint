import Image from 'next/image'
import Link from 'next/link'
import { Phone, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { HERO } from '@/lib/content'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden h-screen [height:100svh] lg:h-[85vh] lg:min-h-[600px] lg:max-h-[760px]"
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

      {/* Layered overlays (bottom → top): gradient depth + brand navy */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute inset-0 bg-primary/65" />

      {/* pb-16 on mobile = clear zone above ChevronDown to prevent overlap on short screens */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-content mx-auto px-8 pb-16 lg:pb-0 text-center lg:text-left">
        <h1
          id="hero-heading"
          className="font-display font-bold text-white text-4xl lg:text-[56px] tracking-tight leading-tight animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          {HERO.headline}
        </h1>

        <p
          className="text-white/85 text-base lg:text-lg leading-relaxed mt-4 lg:mt-6 max-w-[640px] mx-auto lg:mx-0 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          {HERO.subheadline}
        </p>

        <div
          className="flex flex-col items-center gap-4 mt-8 lg:flex-row lg:items-center lg:gap-6 lg:mt-10 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          <Button
            variant="primary"
            href={HERO.ctaPrimaryHref}
            fullWidth
            className="lg:w-auto"
          >
            <Phone size={18} aria-hidden="true" />
            {HERO.ctaPrimaryLabel}
          </Button>

          <Link
            href={HERO.ctaSecondaryHref}
            className="inline-flex items-center gap-1.5 text-white font-medium hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none rounded-sm transition-opacity duration-200 active:opacity-70"
          >
            {HERO.ctaSecondaryLabel}
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <ChevronDown
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-pulse-2x"
        size={28}
        aria-hidden="true"
      />
    </section>
  )
}
