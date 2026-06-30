import { BRANDS } from '@/lib/content'

const FEATURED_BRAND_NAMES = new Set([
  'Benjamin Moore', 'PPG', 'Mapei', 'Baumit', 'Ceresit', 'Tarkett',
])

function FeaturedCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm flex items-center justify-center min-h-[130px] px-6 py-8 hover:shadow-md transition-shadow duration-200">
      <img
        src={logo}
        alt={name}
        className="max-h-16 max-w-full object-contain"
        draggable={false}
      />
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
      <div className="max-w-content mx-auto px-6 lg:px-8 mb-10 lg:mb-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5">
          {featured.map(brand => (
            <FeaturedCard key={brand.name} name={brand.name} logo={brand.logo} />
          ))}
        </div>
      </div>

      {/* Tier 2 — Infinite logo marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges matching the section background */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        {/* Two identical lists side-by-side; CSS translates by -50% of the combined width,
            looping back to start for a seamless infinite scroll */}
        <div className="flex w-max animate-marquee">
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
