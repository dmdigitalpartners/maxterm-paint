import Image from 'next/image'
import { MapPin, Phone, Clock, Truck, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/Button'
import { CONTACT } from '@/lib/content'

type LocationData = (typeof CONTACT)[keyof typeof CONTACT]

function LocationCard({
  location,
  isStore,
}: {
  location: LocationData
  isStore: boolean
}) {
  return (
    <div className="bg-white rounded-[10px] border border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col">
      {/* Photo */}
      <div className="relative aspect-video">
        <Image
          src={location.image}
          alt={location.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Badge */}
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
            isStore ? 'bg-accent' : 'bg-primary'
          }`}
        >
          {location.badge}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 lg:p-8 flex flex-col gap-5 flex-1">
        <h3 className="font-display font-bold text-xl lg:text-2xl text-textPrimary leading-snug">
          {location.name}
        </h3>

        {/* Info rows */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm text-textPrimary">
            <MapPin size={16} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
            <span>{location.address}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone size={16} className="text-accent shrink-0" aria-hidden="true" />
            <a
              href={location.phoneHref}
              className="text-primary font-semibold hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              {location.phone}
            </a>
          </div>

          <div className="flex items-start gap-3 text-sm text-muted">
            <Clock size={16} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
            <div className="space-y-0.5">
              <p>{location.hours.weekdays}</p>
              <p>{location.hours.saturday}</p>
              <p>{location.hours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Highlight badge */}
        <div className="flex items-center gap-2 text-sm text-muted border-t border-border pt-4">
          {isStore ? (
            <ShoppingBag size={15} className="text-accent shrink-0" aria-hidden="true" />
          ) : (
            <Truck size={15} className="text-accent shrink-0" aria-hidden="true" />
          )}
          <span className="font-medium text-textPrimary">{location.highlight}</span>
        </div>

        <p className="text-xs text-muted">{location.products}</p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
          <Button
            variant="primary"
            href={location.phoneHref}
            fullWidth
            className="sm:flex-1"
          >
            <Phone size={16} aria-hidden="true" />
            Обади се
          </Button>
          <a
            href={location.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-medium rounded-md py-3 px-5 min-h-[48px] text-base hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <MapPin size={16} aria-hidden="true" />
            Виж на картата
          </a>
        </div>
      </div>
    </div>
  )
}

export function Locations() {
  return (
    <section
      aria-labelledby="locations-heading"
      className="bg-white py-14 lg:py-24"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            Намерете ни
          </p>
          <h2
            id="locations-heading"
            className="font-display font-bold text-2xl sm:text-3xl lg:text-[40px] text-textPrimary leading-tight"
          >
            Два обекта в Пловдив
          </h2>
          <p className="text-muted text-base lg:text-lg mt-3">
            Складова база и магазин на Ваше разположение — с реален избор на място
          </p>
        </div>

        {/* Cards — store first on mobile (order-first), warehouse second */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="order-2 lg:order-1">
            <LocationCard location={CONTACT.warehouse} isStore={false} />
          </div>
          <div className="order-1 lg:order-2">
            <LocationCard location={CONTACT.store} isStore={true} />
          </div>
        </div>
      </div>
    </section>
  )
}
