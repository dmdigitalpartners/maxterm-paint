import { BRANDS } from '@/lib/content'

const FEATURED_BRAND_NAMES = new Set([
  'Benjamin Moore', 'PPG', 'Mapei', 'Baumit', 'Ceresit', 'Tarkett',
])

const categoryMeta: Record<string, { badge: string; label: string }> = {
  paint: { badge: 'bg-amber-50 border-amber-200 text-amber-700',   label: 'Бои' },
  build: { badge: 'bg-blue-50 border-blue-200 text-blue-700',      label: 'Строителни' },
  floor: { badge: 'bg-emerald-50 border-emerald-200 text-emerald-700', label: 'Паркет' },
}

function FeaturedCard({ name, category, logo }: { name: string; category: string; logo: string }) {
  const meta = categoryMeta[category] ?? categoryMeta.build
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm flex flex-col hover:shadow-md transition-shadow duration-200">
      {/* Logo area — neutral white so brand colors read cleanly */}
      <div className="flex-1 flex items-center justify-center px-6 py-7 min-h-[120px]">
        <img
          src={logo}
          alt={name}
          className="max-h-16 max-w-full object-contain"
          draggable={false}
        />
      </div>
      {/* Category pill */}
      <div className="px-4 pb-4 flex justify-center">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${meta.badge}`}>
          {meta.label}
        </span>
      </div>
    </div>
  )
}

function StripLogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="bg-white rounded-xl border border-border px-5 py-3 flex items-center justify-center shrink-0 shadow-sm">
      <img
        src={logo}
        alt={name}
        className="h-8 w-auto object-contain max-w-[110px]"
        loading="lazy"
        draggable={false}
      />
    </div>
  )
}

export function BrandShowcase() {
  const featured = BRANDS.logos.filter(b => FEATURED_BRAND_NAMES.has(b.name))
  const rest     = BRANDS.logos.filter(b => !FEATURED_BRAND_NAMES.has(b.name))

  return (
    <section
      aria-labelledby="brands-heading"
      className="bg-surface py-14 lg:py-20"
    >
      {/* Section header */}
      <div className="max-w-content mx-auto px-6 lg:px-8 mb-10 lg:mb-12">
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

      {/* Tier 1 — Featured brand cards */}
      <div className="max-w-content mx-auto px-6 lg:px-8 mb-10 lg:mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5">
          {featured.map(brand => (
            <FeaturedCard
              key={brand.name}
              name={brand.name}
              category={brand.category}
              logo={brand.logo}
            />
          ))}
        </div>
      </div>

      {/* Tier 2 — Secondary logo strip (contained marquee) */}
      <div className="max-w-content mx-auto px-6 lg:px-8 mb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Също представляваме
        </p>
      </div>
      <div className="max-w-[900px] mx-auto relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div
          className="flex w-max hover:[animation-play-state:paused]"
          style={{ animation: 'marqueeLeft 50s linear infinite' }}
        >
          <ul className="flex items-center gap-4 pr-4" aria-label="Допълнителни марки">
            {rest.map((brand, i) => (
              <li key={`a-${i}`} className="shrink-0">
                <StripLogoCard name={brand.name} logo={brand.logo} />
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 pr-4" aria-hidden="true">
            {rest.map((brand, i) => (
              <li key={`b-${i}`} className="shrink-0">
                <StripLogoCard name={brand.name} logo={brand.logo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
