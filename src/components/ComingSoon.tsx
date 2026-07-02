import Link from 'next/link'
import { PaintBucket, Phone, ArrowLeft } from 'lucide-react'
import { CONTACT } from '@/lib/content'
import { Footer } from '@/sections/Footer'

type ComingSoonProps = {
  eyebrow: string
  heading: string
  description: string
  icon: React.ElementType
}

export function ComingSoon({ eyebrow, heading, description, icon: Icon }: ComingSoonProps) {
  return (
    <>
      <main id="main-content" className="bg-surface">
        <section className="max-w-content mx-auto px-6 py-20 lg:py-28 text-center">
          {/* Paint drip accent */}
          <div className="relative inline-flex mb-8">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent/10">
              <Icon size={36} className="text-accent" aria-hidden="true" />
            </div>
            <PaintBucket
              size={22}
              className="absolute -bottom-2 -right-2 text-accent bg-surface rounded-full p-1 animate-pulse-2x"
              aria-hidden="true"
            />
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            {eyebrow}
          </p>
          <h1 className="font-display font-bold text-3xl lg:text-5xl text-primary tracking-tight leading-tight mb-5">
            {heading}
          </h1>
          <p className="text-muted text-base lg:text-lg leading-relaxed max-w-[560px] mx-auto mb-10">
            {description} Тази страница е част от пълната версия на сайта и очаквайте
            съвсем скоро — междувременно ще се радваме да Ви помогнем лично.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CONTACT.store.phoneHref}
              className="inline-flex items-center justify-center gap-2 font-medium rounded-md transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-accent text-white hover:bg-accent/90 active:scale-[0.97] focus-visible:ring-accent text-base py-3.5 px-6 min-h-[48px]"
            >
              <Phone size={18} aria-hidden="true" />
              Обадете се: {CONTACT.store.phone}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 font-medium rounded-md transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-primary text-primary hover:bg-primary/5 active:scale-[0.97] focus-visible:ring-primary text-base py-3.5 px-6 min-h-[48px]"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              Обратно към началото
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
