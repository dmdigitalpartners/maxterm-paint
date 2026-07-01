import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react'
import { BUSINESS, CONTACT, FOOTER } from '@/lib/content'

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-5">
      {children}
    </h3>
  )
}

function IconRow({
  icon: Icon,
  children,
}: {
  icon: React.ElementType
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3 text-sm text-white/70">
      <Icon size={15} className="text-white/40 mt-0.5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#1C1C2E]" aria-label="Информация за Макстерм">
      <div className="max-w-content mx-auto px-6 lg:px-8 pt-14 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Макстерм, начало" className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
              <Image
                src="/assets/logo.png"
                alt="Макстерм лого"
                width={160}
                height={54}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs sm:max-w-[220px]">
              {FOOTER.description}
            </p>

            {/* Social media */}
            <div>
              <FooterHeading>Социални мрежи</FooterHeading>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Макстерм във Facebook"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Column 2 — Warehouse */}
          <details className="group" open>
            <summary className="lg:hidden list-none cursor-pointer flex items-center justify-between">
              <FooterHeading>Складова База</FooterHeading>
              <ChevronDown size={15} className="text-white/40 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="lg:block">
              <div className="hidden lg:block">
                <FooterHeading>Складова База</FooterHeading>
              </div>
              <div className="space-y-3">
                <IconRow icon={MapPin}>{CONTACT.warehouse.address}</IconRow>
                <IconRow icon={Phone}>
                  <a
                    href={CONTACT.warehouse.phoneHref}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                  >
                    {CONTACT.warehouse.phone}
                  </a>
                </IconRow>
                <IconRow icon={Clock}>
                  <div className="space-y-0.5">
                    <p>{CONTACT.warehouse.hours.weekdays}</p>
                    <p>{CONTACT.warehouse.hours.saturday}</p>
                    <p>{CONTACT.warehouse.hours.sunday}</p>
                  </div>
                </IconRow>
              </div>
            </div>
          </details>

          {/* Column 3 — Store */}
          <details className="group" open>
            <summary className="lg:hidden list-none cursor-pointer flex items-center justify-between">
              <FooterHeading>Магазин MaxDecor</FooterHeading>
              <ChevronDown size={15} className="text-white/40 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="lg:block">
              <div className="hidden lg:block">
                <FooterHeading>Магазин MaxDecor</FooterHeading>
              </div>
              <div className="space-y-3">
                <IconRow icon={MapPin}>{CONTACT.store.address}</IconRow>
                <IconRow icon={Phone}>
                  <a
                    href={CONTACT.store.phoneHref}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                  >
                    {CONTACT.store.phone}
                  </a>
                </IconRow>
                <IconRow icon={Mail}>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${BUSINESS.email.secondary}`}
                      className="block hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                    >
                      {BUSINESS.email.secondary}
                    </a>
                    <a
                      href={`mailto:${BUSINESS.email.primary}`}
                      className="block hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                    >
                      {BUSINESS.email.primary}
                    </a>
                  </div>
                </IconRow>
                <IconRow icon={Clock}>
                  <div className="space-y-0.5">
                    <p>{CONTACT.store.hours.weekdays}</p>
                    <p>{CONTACT.store.hours.saturday}</p>
                    <p>{CONTACT.store.hours.sunday}</p>
                  </div>
                </IconRow>
              </div>
            </div>
          </details>

          {/* Column 4 — Navigation */}
          <div>
            <FooterHeading>Навигация</FooterHeading>
            <nav aria-label="Footer навигация">
              <ul className="space-y-0">
                {FOOTER.navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-sm text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {FOOTER.copyrightYear} {BUSINESS.name}. Всички права запазени.</p>
          <p>Пловдив, България</p>
        </div>
      </div>
    </footer>
  )
}
