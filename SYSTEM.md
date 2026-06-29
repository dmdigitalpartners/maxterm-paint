# SYSTEM.md — Claude Code Operating Instructions
## Project: Макстерм ООД — Website Redesign
## Stack: Next.js 14 · TypeScript · Tailwind CSS · Lucide Icons

This file governs how Claude Code behaves throughout this project.
Read this file first. Follow every rule. Do not deviate without flagging it.

---

## 0. START OF EVERY SESSION

Before writing any code or content, perform this exact sequence:

```
1. Read /business/business-intelligence-report.md (all business facts live here)
2. Read /business/homepage-blueprint.md (all design decisions live here)
3. Check /src/components/README.md for component status (avoid rebuilding done work)
4. Check /src/sections/README.md for section build order
5. State what you are about to build and why, in 2–3 sentences
6. Flag any missing assets or content before writing code around them
```

Do not skip step 1 or 2. Every session must begin with source-of-truth verification.

---

## 1. CONTENT RULES (non-negotiable)

### 1.1 — Never invent business information
Every piece of Bulgarian copy, business claim, phone number, address, product name,
brand name, or statistic MUST trace back to `/business/business-intelligence-report.md`.

If a piece of content is not in the intelligence report: **stop and ask**.
Do not fill in placeholders with invented text. Do not extrapolate.

### 1.2 — Content lives in content.ts
All hardcoded strings (Bulgarian or otherwise) must be defined in `/src/lib/content.ts`.
Never hardcode business copy inside component or section `.tsx` files.
Import from `content.ts` instead.

```tsx
// ❌ Wrong
<h1>Всичко за Вашия Ремонт — на едно място в Пловдив</h1>

// ✅ Correct
import { HERO } from '@/lib/content'
<h1>{HERO.headline}</h1>
```

### 1.3 — The testimonials rule
**There are no testimonials available.** Do not invent quotes or attribute fake reviews.
Section 7 (SocialProof) is a pre-built placeholder. Build the container; leave the
content empty with a clear `{/* TODO: Add Google Reviews widget when available */}` comment.

---

## 2. TECHNICAL RULES

### 2.1 — Mobile-first always
Write CSS in this order: base styles (390px) → tablet overrides (768px) → desktop overrides (1280px).
In Tailwind: `text-base md:text-lg lg:text-xl` (not the other way around).

Breakpoints:
- `sm`: 390px (base — iPhone 14 Pro)
- `md`: 768px (tablet)
- `lg`: 1280px (desktop)
- `xl`: 1440px (wide desktop, secondary)

### 2.2 — Images: always use next/image
Never use `<img>` tags for content images.
```tsx
// ❌ Wrong
<img src="/assets/images/hero.jpg" alt="..." />

// ✅ Correct
import Image from 'next/image'
<Image
  src="/assets/images/hero.jpg"
  alt="Интериор с бои и ламиниран паркет — Макстерм Пловдив"
  fill
  priority  // only for LCP images (hero)
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
  className="object-cover"
/>
```

Use `priority` ONLY for the hero image. All other images use lazy loading (default).

### 2.3 — All phone numbers must be tap-to-call
This was Issue H-04 in the UX audit (HIGH severity).
```tsx
// ❌ Wrong
<span>0876 032868</span>

// ✅ Correct
<a href="tel:+359876032868" className="...">
  <Phone size={20} />
  0876 032868
</a>
```

Always use international format `+359` in the href, display format `08XX XXX XXX` in text.

### 2.4 — Component structure: build pieces before pages
Build order is strictly:
```
/src/lib/ files first → /src/components/ → /src/sections/ → app/page.tsx
```
Never write a section that depends on a component that hasn't been built yet.

### 2.5 — TypeScript: no `any`, full prop typing
Every component must have a typed interface:
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}
```

### 2.6 — Accessibility (WCAG AA minimum)
- All interactive elements: visible focus ring (`focus-visible:ring-2 focus-visible:ring-accent`)
- All images: descriptive Bulgarian alt text (not "image" or filename)
- Color contrast: verify all text/bg combinations meet 4.5:1 (body) or 3:1 (large text)
- All buttons: minimum 44×44px tap target
- Skip-to-content link at top of every page
- `<nav>` with `aria-label`, `<main>`, `<header>`, `<footer>` semantic landmarks
- Icon-only buttons must have `aria-label`

### 2.7 — Animation: restrained and purposeful
Only these animations are approved (defined in `/src/styles/animations.css`):
- `fadeIn`: 0.5s ease on scroll entry (text blocks, section headers)
- `slideUp`: 0.4s ease on scroll entry (cards entering from below)
- `kenBurns`: 12s very slow zoom on hero background (scale 1.0 → 1.05)
- `marquee`: infinite 30s linear loop for brand logo strip
- `countUp`: number increments on TrustBar scroll entry (JS, via useCountUp hook)
- `pulse`: 2 pulses only for floating Viber button on first appearance

**No**: parallax scrolling, element rotations, scroll-triggered color changes,
background color transitions on scroll, anything that triggers layout reflow on scroll.

All animations must respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 2.8 — CSS: Tailwind classes, CSS variables for tokens
Use Tailwind utility classes as the primary styling method.
Use CSS custom properties (defined in `globals.css`) for design tokens.
Avoid inline `style` attributes except for dynamic values (e.g., animation delay).

```tsx
// ✅ Dynamic stagger delay — inline style is acceptable
<div style={{ animationDelay: `${index * 0.1}s` }}>
```

### 2.9 — Path aliases
Use `@/` alias for all imports from `/src/`:
```tsx
import { Button } from '@/components/Button'
import { HERO } from '@/lib/content'
```

---

## 3. DESIGN SYSTEM RULES

Always reference `/business/homepage-blueprint.md` for the design system.
These are the locked values — never deviate from them without flagging:

### Colors (Tailwind custom names → hex)
| Token | Hex | Tailwind class prefix |
|---|---|---|
| `primary` | `#1B3A5C` | `bg-primary`, `text-primary`, `border-primary` |
| `secondary` | `#2E6DA4` | `bg-secondary`, `text-secondary` |
| `accent` | `#E07B2A` | `bg-accent`, `text-accent` |
| `surface` | `#F4F6F9` | `bg-surface` |
| `textPrimary` | `#1C1C2E` | `text-textPrimary` |
| `muted` | `#6B7280` | `text-muted` |
| `border` | `#E2E8F0` | `border-border` |
| `success` | `#2D6A4F` | `text-success` |

### Typography (Tailwind custom classes)
| Element | Size (desktop) | Size (mobile) | Weight | Font |
|---|---|---|---|---|
| H1 (hero) | 56px / `text-5xl` | 36px / `text-4xl` | 700 | Montserrat |
| H2 (sections) | 40px / `text-4xl` | 28px / `text-3xl` | 700 | Montserrat |
| H3 (cards) | 24px / `text-2xl` | 20px / `text-xl` | 600 | Montserrat |
| Lead | 18px / `text-lg` | 16px / `text-base` | 400 | Inter |
| Body | 16px / `text-base` | 15px | 400 | Inter |
| Label | 12px / `text-xs` | 12px | 600 | Inter, uppercase |

### Spacing
- Base unit: 8px
- Section padding desktop: `py-24` (96px)
- Section padding mobile: `py-14` (56px)
- Max content width: `max-w-[1200px] mx-auto px-8 md:px-4`
- Card gap: `gap-6` (24px)

### Components Spec
- Button min-height: 48px (`min-h-[48px]`)
- Button padding: `py-3 px-7`
- Button border-radius: `rounded-md` (6px)
- Card border-radius: `rounded-[10px]`
- Card border: `border border-border`
- Card shadow rest: `shadow-sm`
- Card shadow hover: `shadow-lg`
- Card hover transform: `hover:-translate-y-[3px]`
- Card transition: `transition-all duration-200 ease-out`

---

## 4. PROCESS RULES

### 4.1 — One section at a time
Build and confirm each section before starting the next.
Default output: one section per response, unless explicitly asked for more.

### 4.2 — Explain before writing
Before writing any component or section, state:
1. What you're building
2. What components it depends on
3. What content.ts keys it uses
4. Any decision that deviates from the blueprint and why

### 4.3 — Comment non-obvious decisions
```tsx
{/* Ken Burns applied only to the wrapper div, not the Image component itself,
    to prevent Next.js image optimization conflicts */}
<div className="animate-ken-burns">
  <Image ... />
</div>
```

### 4.4 — Flag before building around missing assets
If a section requires an image that doesn't exist in `/assets/images/`:
```
⚠️ ASSET MISSING: Hero background image not found at /assets/images/hero-interior.jpg
Building section with a placeholder gradient (#1B3A5C) until image is provided.
Please add the hero photo before launch.
```
Never silently use a stock photo URL. Always use a placeholder and flag it.

### 4.5 — Ask before deviating from the blueprint
The blueprint in `/business/homepage-blueprint.md` is the single source of design truth.
If a technical constraint requires a different approach, state:
```
⚠️ BLUEPRINT DEVIATION: [what's different] because [technical reason].
Recommend: [alternative]. Shall I proceed?
```

### 4.6 — Test in isolation
Every section must render correctly when imported alone into a test page.
Do not assume a section works because the full homepage renders — test each independently.

---

## 5. ANTI-PATTERNS (never do these)

| Anti-pattern | Why it's banned |
|---|---|
| `<img>` tags | Use next/image always |
| Image carousels / sliders | UX audit H-08: proven conversion killers |
| Hardcoded Bulgarian strings in components | Violates content.ts rule |
| Invented testimonials or statistics | No source in intelligence report |
| `any` TypeScript type | Defeats the purpose of TypeScript |
| `!important` in CSS | Architecture problem — fix the specificity instead |
| Inline style for static values | Use Tailwind classes |
| `onClick` on `<div>` or `<span>` | Use `<button>` or `<a>` for accessibility |
| Phone numbers as plain text | Must be `<a href="tel:...">` always |
| `target="_blank"` without `rel="noopener noreferrer"` | Security vulnerability |
| Percentage widths on fixed layouts | Use max-width with auto margins |
| `vh` units for mobile height | Use `svh` (small viewport height) for mobile hero |
| The word "My Site" anywhere | It's a platform default — no exceptions |

---

## 6. DEFINITION OF DONE (per section)

A section is complete when:
- [ ] Renders correctly at 390px (mobile)
- [ ] Renders correctly at 768px (tablet)
- [ ] Renders correctly at 1280px (desktop)
- [ ] All phone numbers are `<a href="tel:...">` links
- [ ] All images have descriptive Bulgarian alt text
- [ ] All interactive elements have visible focus states
- [ ] No hardcoded Bulgarian strings (all from content.ts)
- [ ] All TypeScript types are explicit (no `any`)
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Section renders correctly in isolation (not just in full page)
- [ ] All placeholder states are commented and flagged

---

*Last updated: June 2026 | Reference: /business/ directory for all source documents*
