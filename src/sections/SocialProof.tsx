import { Star, ExternalLink } from 'lucide-react'
import { SOCIAL_PROOF } from '@/lib/content'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} от 5 звезди`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'text-accent fill-accent' : 'text-border'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

interface ReviewCardProps {
  id: string
  name: string
  badge: string | null
  rating: number
  ageLabel: string
  text: string
}

function ReviewCard({
  name,
  badge,
  rating,
  ageLabel,
  text,
}: ReviewCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <article className="bg-white rounded-[10px] border border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-4">
      {/* Stars */}
      <StarRating rating={rating} />

      {/* Review text */}
      <p className="text-textPrimary text-sm leading-relaxed line-clamp-4 flex-1 italic">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-sm text-textPrimary truncate">{name}</p>
          <div className="flex items-center gap-2 flex-wrap">
            {badge && (
              <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
            <span className="text-xs text-muted">{ageLabel}</span>
          </div>
        </div>
        {/* Google "G" attribution */}
        <div className="ml-auto shrink-0" aria-label="Отзив от Google">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
    </article>
  )
}

export function SocialProof() {
  return (
    <section
      aria-labelledby="social-proof-heading"
      className="bg-surface py-14 lg:py-24"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            Отзиви
          </p>
          <h2
            id="social-proof-heading"
            className="font-display font-bold text-2xl sm:text-3xl lg:text-[40px] text-textPrimary leading-tight"
          >
            {SOCIAL_PROOF.sectionTitle}
          </h2>
          <p className="text-muted text-base lg:text-lg mt-3">
            {SOCIAL_PROOF.sectionSubtitle}
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {(SOCIAL_PROOF.featured as ReadonlyArray<ReviewCardProps>).map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>

        {/* CTA to Google */}
        {/* TODO: replace googleMapsUrl placeholder with real shortlink before launch */}
        <div className="text-center mb-14">
          <a
            href={SOCIAL_PROOF.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            Виж всички отзиви в Google
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

        {/* Google Maps embeds */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[SOCIAL_PROOF.maps.store, SOCIAL_PROOF.maps.warehouse].map((loc) => (
            <figure key={loc.label} className="rounded-[10px] overflow-hidden border border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              <iframe
                src={loc.embedSrc}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={loc.label}
                className="block"
              />
              <figcaption className="px-5 py-3 bg-white text-sm font-medium text-textPrimary border-t border-border">
                {loc.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
