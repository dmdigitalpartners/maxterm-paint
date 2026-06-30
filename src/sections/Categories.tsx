'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { CATEGORIES } from '@/lib/content'

interface CategoryCardProps {
  title: string
  description: string
  image: string
  alt: string
  href: string
  delay: number
  visible: boolean
  featured?: boolean
  className?: string
}

function CategoryCard({
  title,
  description,
  image,
  alt,
  href,
  delay,
  visible,
  featured = false,
  className = '',
}: CategoryCardProps) {
  return (
    <a
      href={href}
      className={`group relative block overflow-hidden rounded-2xl
        h-64 sm:h-72 lg:h-auto
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
        transition-all duration-500
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${className}
      `}
      style={visible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {/* Full-bleed image */}
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Permanent gradient — ensures text legibility at all times */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />

      {/* Subtle hover tint */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-300" />

      {/* Text anchored to bottom */}
      <div className={`absolute bottom-0 left-0 right-0 ${featured ? 'p-7 lg:p-9' : 'p-5 lg:p-6'}`}>
        <h3
          className={`font-display font-bold text-white leading-tight
            ${featured ? 'text-2xl lg:text-[28px]' : 'text-lg lg:text-xl'}`}
        >
          {title}
        </h3>
        <p
          className={`text-white/75 text-sm leading-snug mt-1.5
            ${featured ? 'line-clamp-3 max-w-[340px]' : 'line-clamp-2'}`}
        >
          {description}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-200">
          Разгледай
          <ChevronRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  )
}

export function Categories() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const items = CATEGORIES.items as ReadonlyArray<{
    title: string
    description: string
    image: string
    alt: string
    href: string
  }>

  return (
    <section
      ref={ref}
      id="produkti"
      aria-labelledby="categories-heading"
      className="bg-white py-14 lg:py-20"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 lg:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            Асортимент
          </p>
          <h2
            id="categories-heading"
            className="font-display font-bold text-2xl sm:text-3xl lg:text-[40px] text-textPrimary leading-tight"
          >
            {CATEGORIES.sectionTitle}
          </h2>
          <p className="text-muted text-base lg:text-lg mt-3 max-w-xl">
            {CATEGORIES.sectionSubtitle}
          </p>
        </div>

        {/*
          Desktop bento grid (3 cols × 2 rows):
          ┌───────────────┬─────────┬─────────┐
          │               │         │         │
          │  Бои  (2 rows)│ Паркет  │ Строит. │  340 px
          │               ├─────────┴─────────┤
          │               │  Лайсни (2 cols)  │  280 px
          └───────────────┴───────────────────┘
          Cards are direct grid children so CSS grid stretch controls height on desktop.
        */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:grid-rows-[340px_280px] lg:gap-5">

          {/* Paints — featured tall card, spans 2 rows on desktop */}
          <CategoryCard
            {...items[0]}
            delay={0}
            visible={visible}
            featured
            className="lg:row-span-2"
          />

          {/* Laminate — top-right square */}
          <CategoryCard
            {...items[1]}
            delay={100}
            visible={visible}
          />

          {/* Building Materials — top-far-right square */}
          <CategoryCard
            {...items[2]}
            delay={200}
            visible={visible}
          />

          {/* Skirting — panoramic wide card, spans 2 cols on desktop */}
          <CategoryCard
            {...items[3]}
            delay={300}
            visible={visible}
            className="lg:col-span-2"
          />
        </div>
      </div>
    </section>
  )
}
