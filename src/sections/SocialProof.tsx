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
//
// Instead of a finite array of clone cards that needs an occasional silent
// "jump back" once you scroll past it, this carousel uses a small FIXED
// number of card slots that each independently recycle to a new review once
// they've scrolled fully outside the visible+buffer window (i.e. while
// completely hidden by overflow-hidden). `position` — the one value that
// actually drives the visible motion — just counts ...,-1,0,1,2,3,... and
// never resets, so there is no backward jump in the value anything on
// screen is animated from, ever, no matter how many times you click.

const VISIBLE = 3
const REVIEWS = SOCIAL_PROOF.featured as ReadonlyArray<Review>
const N = REVIEWS.length // 8
// Extra off-screen slots buffered on each side, so a card sliding into view
// is already rendered (just clipped) before its transition starts, and so a
// recycled slot's teleport always happens while fully hidden.
const BUFFER = 2
const SLOT_COUNT = VISIBLE + BUFFER * 2 // fixed forever — never grows
const TRANSITION_MS = 500

const mod = (n: number, m: number) => ((n % m) + m) % m

type Slot = { key: string; absoluteIndex: number; instant: boolean }

function makeInitialSlots(): Slot[] {
  return Array.from({ length: SLOT_COUNT }, (_, i) => ({
    key: `slot-${i}`,
    absoluteIndex: i - BUFFER,
    instant: false,
  }))
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} от 5 звезди`}>
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

function ReviewCard({ name, rating, location, text }: Review) {
  return (
    <article className="bg-white rounded-xl border border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-8 flex flex-col gap-4 h-[290px] select-none">
      <StarRating rating={rating} />
      <p className="text-textPrimary text-base leading-relaxed line-clamp-5 flex-1 italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="pt-4 border-t border-border">
        <p className="font-semibold text-base text-textPrimary">{name}</p>
        <div className="flex items-center gap-1.5 mt-1">
          <MapPin size={13} className="text-muted shrink-0" aria-hidden="true" />
          <span className="text-sm text-muted">{location}</span>
        </div>
      </div>
    </article>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function SocialProof() {
  const [position, setPositionState] = useState(0)
  const [slots, setSlotsState] = useState<Slot[]>(makeInitialSlots)
  const positionRef = useRef(position)
  const slotsRef = useRef(slots)
  // Guards against rapid clicks overlapping mid-animation. Clicks that land
  // while a move is still animating are ignored (not queued), so the
  // carousel always advances exactly one review per finished animation,
  // regardless of how many extra times it was clicked in the meantime.
  const isAnimating = useRef(false)

  const move = useCallback((dir: 1 | -1) => {
    if (isAnimating.current) return
    isAnimating.current = true

    const prevPosition = positionRef.current
    const newPosition = prevPosition + dir

    // Recycle exactly the one slot that's about to scroll fully outside the
    // visible+buffer window to the far side of it, reassigning it to the
    // next review that will be needed there. It's flagged `instant` so its
    // own (large) reposition skips the CSS transition — invisible either
    // way since it only ever happens while that slot is fully clipped by
    // overflow-hidden, both before and after.
    const dropIndex = dir === 1 ? prevPosition - BUFFER : prevPosition + VISIBLE + BUFFER - 1
    const newSlots = slotsRef.current.map(s =>
      s.absoluteIndex === dropIndex
        ? { ...s, absoluteIndex: s.absoluteIndex + dir * SLOT_COUNT, instant: true }
        : { ...s, instant: false },
    )

    positionRef.current = newPosition
    slotsRef.current = newSlots
    setPositionState(newPosition)
    setSlotsState(newSlots)

    window.setTimeout(() => {
      isAnimating.current = false
    }, TRANSITION_MS + 20)
  }, [])

  const cardWidthPercent = 100 / VISIBLE

  const mobileScrollRef = useRef<HTMLDivElement>(null)
  const scrollMobile = useCallback((dir: 1 | -1) => {
    const el = mobileScrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
  }, [])

  return (
    <section
      aria-labelledby="social-proof-heading"
      className="bg-surface py-14 lg:py-20"
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">

        {/* Section header */}
        <div className="mb-10 lg:mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            Отзиви
          </p>
          <h2
            id="social-proof-heading"
            className="font-display font-bold text-2xl sm:text-3xl lg:text-[40px] text-textPrimary leading-tight tracking-normal"
          >
            {SOCIAL_PROOF.sectionTitle}
          </h2>
          <p className="text-muted text-base lg:text-lg mt-3">
            {SOCIAL_PROOF.sectionSubtitle}
          </p>
        </div>

        {/* Mobile carousel — native scroll-snap, 1 card at a time */}
        <div className="block sm:hidden mb-10">
          <div
            ref={mobileScrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-none"
          >
            {REVIEWS.map((review) => (
              <div key={review.id} className="snap-center shrink-0 w-full">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>

          {/* Prev/next buttons — supplement swiping, don't replace it */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => scrollMobile(-1)}
              className="w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Предишен отзив"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scrollMobile(1)}
              className="w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Следващ отзив"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Desktop carousel — JS-driven infinite loop */}
        <div className="hidden sm:block">
        <div className="relative mb-10">
          {/* Prev arrow */}
          <button
            onClick={() => move(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Предишен отзив"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next arrow */}
          <button
            onClick={() => move(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Следващ отзив"
          >
            <ChevronRight size={22} />
          </button>

          {/* Viewport — clips overflow. Each slot below is independently
              absolutely-positioned rather than laid out in a single sliding
              track, so recycling one slot never has to move the shared
              "camera" position. */}
          <div className="overflow-hidden relative min-h-[290px]">
            {slots.map(slot => {
              const review = REVIEWS[mod(slot.absoluteIndex, N)]
              const offset = slot.absoluteIndex - position
              return (
                <div
                  key={slot.key}
                  className={
                    'absolute top-0 left-0 px-2.5' +
                    (slot.instant ? '' : ' transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]')
                  }
                  style={{ width: `${cardWidthPercent}%`, transform: `translateX(${offset * 100}%)` }}
                >
                  <ReviewCard {...review} />
                </div>
              )
            })}
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
