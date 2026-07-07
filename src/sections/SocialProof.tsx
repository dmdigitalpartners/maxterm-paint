'use client'

import { useState, useRef, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight, ExternalLink, MapPin } from 'lucide-react'
import { SOCIAL_PROOF } from '@/lib/content'

// ─── Types ────────────────────────────────────────────────────────────────────

type Review = {
  id: string
  name: string
  rating: number
  location: string
  text: string
}

// ─── Carousel constants ───────────────────────────────────────────────────────

const VISIBLE = 3
const REVIEWS = SOCIAL_PROOF.featured as ReadonlyArray<Review>
const N = REVIEWS.length // 8

// Build display array: [last VISIBLE clones] + [all originals] + [first VISIBLE clones]
// This enables seamless infinite looping: when we slide past either edge we silently
// jump to the mirror position inside the originals block.
const CLONES = VISIBLE
const DISPLAY = [
  ...REVIEWS.slice(N - CLONES), // tail clones  (indices 0 – CLONES-1)
  ...REVIEWS,                    // originals    (indices CLONES – CLONES+N-1)
  ...REVIEWS.slice(0, CLONES),  // head clones  (indices CLONES+N – CLONES+N+CLONES-1)
]
const TOTAL = DISPLAY.length // 14

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} от 5 звезди`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-accent fill-accent' : 'text-border'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function ReviewCard({ name, rating, location, text }: Review) {
  return (
    <article className="bg-white rounded-[10px] border border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-3 h-full select-none">
      <StarRating rating={rating} />
      <p className="text-textPrimary text-sm leading-relaxed line-clamp-5 flex-1 italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="pt-3 border-t border-border">
        <p className="font-semibold text-sm text-textPrimary">{name}</p>
        <div className="flex items-center gap-1 mt-0.5">
          <MapPin size={11} className="text-muted shrink-0" aria-hidden="true" />
          <span className="text-xs text-muted">{location}</span>
        </div>
      </div>
    </article>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function SocialProof() {
  // idx is the index of the leftmost visible card in DISPLAY
  const [idx, setIdx] = useState(CLONES) // start at originals[0]
  const trackRef = useRef<HTMLDivElement>(null)
  // Guards against rapid clicks racing idx past the clone buffer (only
  // VISIBLE clones exist on each side) before the loop-boundary correction
  // below has a chance to run, which briefly slides the track past the
  // last real card into empty space. Extra clicks during an animation are
  // queued instead of dropped, so fast repeated clicking still keeps the
  // carousel cycling continuously rather than stalling.
  const isAnimating = useRef(false)
  const queue = useRef<Array<1 | -1>>([])

  const move = useCallback((dir: 1 | -1) => {
    if (isAnimating.current) {
      queue.current.push(dir)
      return
    }
    isAnimating.current = true
    setIdx(prev => prev + dir)
  }, [])

  // After each animation completes, check if we slid into a clone region.
  // If so, silently jump to the mirrored position in the originals block.
  const onTransitionEnd = useCallback(() => {
    setIdx(prev => {
      let next = prev
      if (prev < CLONES) next = prev + N         // slid left into tail clones
      else if (prev >= CLONES + N) next = prev - N // slid right into head clones
      if (next !== prev) {
        // Disable transition for the silent jump, then re-enable
        const el = trackRef.current
        if (el) {
          el.style.transitionDuration = '0ms'
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              if (trackRef.current) trackRef.current.style.transitionDuration = ''
            }),
          )
        }
      }
      return next
    })

    const next = queue.current.shift()
    if (next !== undefined) {
      setIdx(prev => prev + next)
    } else {
      isAnimating.current = false
    }
  }, [])

  // Track is TOTAL/VISIBLE times the container width.
  // Each card occupies 1/TOTAL of the track = 1/VISIBLE of the container.
  // translateX moves by one card = (100/TOTAL)% of track width per step.
  const trackWidth = `${(TOTAL / VISIBLE) * 100}%`
  const cardWidth = `${100 / TOTAL}%`
  const translateX = `${-(idx * 100) / TOTAL}%`

  return (
    <section
      aria-labelledby="social-proof-heading"
      className="bg-surface py-14 lg:py-20"
    >
      <div className="max-w-content mx-auto px-4 lg:px-6">

        {/* Section header */}
        <div className="mb-10 lg:mb-14 text-center">
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

        {/* Mobile carousel — native scroll-snap, 1 card at a time */}
        <div className="block sm:hidden mb-10">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-none">
            {REVIEWS.map((review) => (
              <div key={review.id} className="snap-center shrink-0 w-full">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop carousel — JS-driven infinite loop */}
        <div className="hidden sm:block">
        <div className="relative mb-10">
          {/* Prev arrow */}
          <button
            onClick={() => move(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Предишен отзив"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next arrow */}
          <button
            onClick={() => move(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Следващ отзив"
          >
            <ChevronRight size={18} />
          </button>

          {/* Track container — clips overflow */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ width: trackWidth, transform: `translateX(${translateX})` }}
              onTransitionEnd={onTransitionEnd}
            >
              {DISPLAY.map((review, i) => (
                <div
                  key={`${review.id}-${i}`}
                  className="px-2.5"
                  style={{ width: cardWidth }}
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* CTA to Google */}
        <div className="text-center">
          {/* TODO: replace placeholder with real Google Business shortlink before launch */}
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

        {/* Google Maps embeds — temporarily removed; data preserved in content.ts SOCIAL_PROOF.maps */}

      </div>
    </section>
  )
}
