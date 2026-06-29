'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Building2, Star, Warehouse, Tag, Truck } from 'lucide-react'

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
    icon: Warehouse,
    numericValue: 2000,
    displayValue: '2 000',
    label: 'кв.м. склад',
    suffix: '',
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
}: (typeof STATS)[0] & { triggered: boolean }) {
  const count = useCountUp(numericValue, 1200, triggered)

  const formatted =
    numericValue !== null
      ? numericValue === 2000
        ? count.toLocaleString('bg-BG')
        : String(count)
      : displayValue

  return (
    <div className="flex flex-col items-center text-center gap-3 py-8 px-4">
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
        <Icon size={22} className="text-accent" aria-hidden="true" />
      </div>
      <p className="font-display font-bold text-3xl lg:text-4xl text-textPrimary leading-none tabular-nums">
        {formatted}
        {numericValue !== null && suffix ? (
          <span className="text-accent">{suffix}</span>
        ) : null}
      </p>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted">{label}</p>
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
      className="bg-white border-t-[3px] border-accent"
    >
      <h2 id="trust-bar-heading" className="sr-only">
        Факти за Макстерм
      </h2>
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr_1px_1fr] divide-y lg:divide-y-0 divide-border">
          {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div
                className={
                  i === 4
                    ? 'col-span-2 lg:col-span-1 border-t border-border lg:border-t-0'
                    : ''
                }
              >
                <StatCell {...stat} triggered={triggered} />
              </div>
              {i < STATS.length - 1 && (
                <div
                  className="hidden lg:flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-px bg-border self-stretch my-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
