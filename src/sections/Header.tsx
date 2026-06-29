'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { CONTACT, HEADER } from '@/lib/content'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50">
      {/* ── Main nav ─────────────────────────────────────────────── */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.10)]' : 'shadow-[0_1px_0_#E2E8F0]'
        }`}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8 h-[72px] lg:h-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            aria-label="Макстерм — начало"
          >
            <Image
              src="/assets/logo.png"
              alt={HEADER.logoAlt}
              width={160}
              height={56}
              className="h-12 lg:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Главна навигация" className="hidden lg:flex items-center gap-1">
            {HEADER.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-textPrimary hover:text-primary rounded-md transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop phone CTAs */}
          <div className="hidden lg:flex items-center gap-1 shrink-0">
            <div className="w-px h-5 bg-border mx-2" aria-hidden="true" />
            <a
              href={CONTACT.warehouse.phoneHref}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-primary hover:text-accent transition-colors rounded-md hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent whitespace-nowrap"
              aria-label={`Обади се на склада: ${CONTACT.warehouse.phone}`}
            >
              <Phone size={15} aria-hidden="true" />
              {CONTACT.warehouse.phone}
            </a>
            <span className="text-border text-sm select-none" aria-hidden="true">|</span>
            <a
              href={CONTACT.store.phoneHref}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-primary hover:text-accent transition-colors rounded-md hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent whitespace-nowrap"
              aria-label={`Обади се на магазина: ${CONTACT.store.phone}`}
            >
              <Phone size={15} aria-hidden="true" />
              {CONTACT.store.phone}
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={CONTACT.warehouse.phoneHref}
              aria-label={`Обади се на склада: ${CONTACT.warehouse.phone}`}
              className="p-2 text-primary rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Phone size={22} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Отвори менюто"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 text-textPrimary rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu overlay ──────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Мобилно меню"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-border">
          <Image
            src="/assets/logo.png"
            alt={HEADER.logoAlt}
            width={130}
            height={44}
            className="h-10 w-auto object-contain"
          />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Затвори менюто"
            className="p-2 text-textPrimary rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Мобилна навигация" className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-1">
            {HEADER.navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-textPrimary hover:bg-surface hover:text-primary rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone CTAs */}
        <div className="px-6 pb-8 pt-4 border-t border-border space-y-3">
          <p className="text-xs text-muted font-medium uppercase tracking-wide mb-3">Свържете се с нас</p>
          <a
            href={CONTACT.warehouse.phoneHref}
            className="flex items-center gap-3 w-full bg-accent text-white font-semibold rounded-lg px-4 py-3.5 hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Phone size={18} aria-hidden="true" />
            <div className="text-left">
              <div className="text-sm opacity-80 font-normal">Склад</div>
              <div>{CONTACT.warehouse.phone}</div>
            </div>
          </a>
          <a
            href={CONTACT.store.phoneHref}
            className="flex items-center gap-3 w-full bg-primary text-white font-semibold rounded-lg px-4 py-3.5 hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Phone size={18} aria-hidden="true" />
            <div className="text-left">
              <div className="text-sm opacity-80 font-normal">Магазин MaxDecor</div>
              <div>{CONTACT.store.phone}</div>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}
