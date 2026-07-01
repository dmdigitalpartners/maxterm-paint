'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Building2, Star, Tag, Truck } from 'lucide-react'

const STATS = [
  {
    icon: Building2,
    numericValue: null,
    displayValue: '2010',
    label: 'Година основаване',
    suffix: '',
  },
  {
    icon: Star,
    numericValue: 16,
    displayValue: '16',
    label: 'Години опит',
    suffix: '+',
  },
  {
    icon: Tag,
    numericValue: 22,
    displayValue: '22',
    label: 'Водещи марки',
    suffix: '',
  },
  {
    icon: Truck,
    numericValue: null,
    displayValue: 'Собствен',
    label: 'Транспорт',
    suffix: '',
  },
]

function useCountUp(target: number | null, duration = 1200, triggered: boolean) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!triggered || hasRun.current || target === null) return
    hasRun.current = true

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCount(target)
      return
    }

    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [triggered, target, duration])

  return count
}

function StatCell({
  icon: Icon,
  numericValue,
  displayValue,
  label,
  suffix,
  triggered,
  compact = false,
}: (typeof STATS)[0] & { triggered: boolean; compact?: boolean }) {
  const count = useCountUp(numericValue, 1200, triggered)

  const formatted =
    numericValue !== null ? String(count) : displayValue

  if (compact) {
    return (
      <div className="flex flex-col items-center text-center gap-1 py-3 px-2">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
          <Icon size={15} className="text-accent" aria-hidden="true" />
        </div>
        <p className="font-display font-bold text-lg text-textPrimary leading-none tabular-nums">
          {formatted}
          {numericValue !== null && suffix ? (
            <span className="text-textPrimary">{suffix}</span>
          ) : null}
        </p>
        <p className="text-[9px] font-semibold uppercase tracking-wider text-muted">{label}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center text-center gap-2 py-5 px-4 sm:px-8">
      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-accent" aria-hidden="true" />
      </div>
      <p className="font-display font-bold text-2xl lg:text-3xl text-textPrimary leading-none tabular-nums">
        {formatted}
        {numericValue !== null && suffix ? (
          <span className="text-textPrimary">{suffix}</span>
        ) : null}
      </p>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">{label}</p>
    </div>
  )
}

export function TrustBar() {
  const ref = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      aria-labelledby="trust-bar-heading"
      className="bg-surface border-t-[3px] border-accent"
    >
      <h2 id="trust-bar-heading" className="sr-only">
        Факти за Макстерм
      </h2>
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Mobile: 3 items (no Transport), compact single row */}
        <div className="lg:hidden grid grid-cols-3 divide-x divide-border">
          {STATS.filter(s => s.icon !== Truck).map((stat) => (
            <StatCell key={stat.label} {...stat} triggered={triggered} compact />
          ))}
        </div>

        {/* Desktop: all 4 items with dividers */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr]">
          {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <StatCell {...stat} triggered={triggered} />
              {i < STATS.length - 1 && (
                <div className="flex items-center justify-center" aria-hidden="true">
                  <div className="w-px bg-border self-stretch my-5" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
