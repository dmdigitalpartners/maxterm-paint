import { Phone, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { FINAL_CTA } from '@/lib/content'

export function FinalCTA() {
  return (
    <section
      id="kontakti"
      aria-labelledby="final-cta-heading"
      className="relative bg-gradient-to-br from-primary via-primary to-secondary py-20 lg:py-28 overflow-hidden"
    >
      {/* Decorative background accent */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #E07B2A 0%, transparent 50%), radial-gradient(circle at 80% 50%, #2E6DA4 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
          Готови сте?
        </p>

        {/* Headline */}
        <h2
          id="final-cta-heading"
          className="font-display font-bold text-2xl sm:text-3xl lg:text-5xl text-white leading-tight mb-4"
        >
          {FINAL_CTA.headline}
        </h2>

        {/* Subheadline */}
        <p className="text-white/75 text-base lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          {FINAL_CTA.subheadline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={FINAL_CTA.cta1Href}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-accent text-white font-semibold rounded-md py-3.5 px-8 min-h-[52px] text-base hover:bg-accent/90 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <Phone size={18} aria-hidden="true" />
            <span>{FINAL_CTA.cta1Label}</span>
          </a>

          <a
            href={FINAL_CTA.cta2Href}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-white/40 text-white font-semibold rounded-md py-3.5 px-8 min-h-[52px] text-base hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <Phone size={18} aria-hidden="true" />
            <span>{FINAL_CTA.cta2Label}</span>
          </a>

          <Link
            href={FINAL_CTA.cta3Href}
            className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto text-white/80 font-medium py-3.5 px-6 min-h-[52px] text-base hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
          >
            {FINAL_CTA.cta3Label}
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Hours note */}
        <p className="text-white/50 text-sm">{FINAL_CTA.hoursNote}</p>
      </div>
    </section>
  )
}
