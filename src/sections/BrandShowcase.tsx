import { BRANDS } from '@/lib/content'

const categoryColors: Record<string, string> = {
  paint: 'bg-amber-50 border-amber-200 hover:border-accent hover:text-accent',
  build: 'bg-blue-50 border-blue-200 hover:border-secondary hover:text-secondary',
  floor: 'bg-emerald-50 border-emerald-200 hover:border-success hover:text-success',
}

function BrandBadge({ name, category }: { name: string; category: string }) {
  const colorClass =
    categoryColors[category] ??
    'bg-white border-border hover:border-accent hover:text-accent'
  return (
    <span
      className={`inline-flex items-center px-6 py-3 rounded-full border text-base font-semibold text-textPrimary whitespace-nowrap shadow-sm transition-colors duration-200 cursor-default select-none ${colorClass}`}
    >
      {name}
    </span>
  )
}

export function BrandShowcase() {
  const logos = BRANDS.logos

  return (
    <section
      aria-labelledby="brands-heading"
      className="bg-surface py-14 lg:py-20 overflow-hidden"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8 mb-8 lg:mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          Нашите Марки
        </p>
        <h2
          id="brands-heading"
          className="font-display font-bold text-2xl sm:text-3xl lg:text-[40px] text-textPrimary leading-tight max-w-2xl"
        >
          {BRANDS.sectionTitle}
        </h2>
        <p className="text-muted text-base lg:text-lg mt-3">{BRANDS.sectionSubtitle}</p>
      </div>

      {/* Marquee strip — animation on wrapper div, two identical lists for seamless loop */}
      <div
        className="relative"
        role="region"
        aria-label="Марки, официален представител на Макстерм"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          {/* The wrapper div animates — contains 2 identical lists for seamless 50% → loop */}
          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
            <ul className="flex items-center gap-4 pr-4" aria-label="Марки">
              {logos.map((brand, i) => (
                <li key={`a-${i}`} className="shrink-0">
                  <BrandBadge name={brand.name} category={brand.category} />
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-4 pr-4" aria-hidden="true">
              {logos.map((brand, i) => (
                <li key={`b-${i}`} className="shrink-0">
                  <BrandBadge name={brand.name} category={brand.category} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
