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
}

function CategoryCard({
  title,
  description,
  image,
  alt,
  href,
  delay,
  visible,
}: CategoryCardProps) {
  return (
    <a
      href={href}
      className={`group block bg-white rounded-[10px] border border-border overflow-hidden
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1
        transition-all duration-200 ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
        ${visible ? 'opacity-100 translate-y-0' : ''}
      `}
      style={visible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-surface">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
      </div>

      {/* Card body */}
      <div className="p-5 lg:p-6 flex flex-col gap-3">
        <h3 className="font-display font-semibold text-lg lg:text-xl text-textPrimary leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">{description}</p>
        <div className="mt-auto pt-2 flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
          Разгледай
          <ChevronRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      aria-labelledby="categories-heading"
      className="bg-white py-14 lg:py-24"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 lg:mb-14">
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

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {(CATEGORIES.items as ReadonlyArray<{ title: string; description: string; image: string; alt: string; href: string }>).map((item, i) => (
            <CategoryCard
              key={item.href}
              {...item}
              delay={i * 100}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
