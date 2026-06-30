# Mobile UX Audit — maxterm-paint.vercel.app
**Auditor:** Senior Mobile UX / Frontend QA Specialist
**Target:** https://maxterm-paint.vercel.app/ (Vercel redesign preview)
**Codebase:** Next.js 14 · Tailwind CSS · TypeScript
**Viewport tested:** 375px (iPhone SE / baseline) · 390px (iPhone 14) · 430px (iPhone 14 Plus)
**Date:** June 2026

---

## Executive Summary

The redesign is a strong foundation. Typography, colour system, accessibility markup, and component architecture are all well-executed. However, **three sections have critical mobile layout failures** that will make them unusable on any phone viewport:

1. The **Reviews carousel** shows 3 cards simultaneously on mobile, collapsing each card to ~94px wide — completely unreadable.
2. The **Why Us** section renders a 2-column grid with very long copy in cells that are only ~100px wide on a 375px phone.
3. The **Prev/Next carousel buttons** extend outside the viewport boundary on small screens.

Fixing these three issues should be the immediate priority before any public launch. All remaining issues are medium or minor polish items.

---

## Section-by-Section Audit

---

### 1 — Header + Mobile Menu

**Component:** `src/sections/Header.tsx`

#### Layout
- Mobile header height `h-[72px]` is correct and appropriate.
- Mobile shows: logo (left) · phone icon (centre-right) · hamburger (far right). Clean and minimal.
- Mobile menu slides in from the right at `w-[85vw] max-w-sm` — good width, does not fully occlude the backdrop.

#### Touch Targets
- Phone icon in header: `p-2` padding + `size={22}` icon = effective tap area ≈ **38×38px** — 6px below the 44px minimum.
- Hamburger button: `p-2` + `size={24}` = **40×40px** — also slightly below minimum.
- Menu close (X) button: same `p-2` — **40×40px**.
- Menu nav links: `py-3` ≈ 44px height — ✓ acceptable.
- Phone CTA buttons inside the menu: `py-3.5 w-full` ≈ **56px** — ✓ excellent.

#### Interaction
- Body scroll is locked when menu is open — ✓ correct.
- Backdrop click closes the menu — ✓ correct.
- No swipe-to-close gesture for the slide-in panel (not critical but a polish improvement).
- Only the **warehouse** phone number is shown as an icon in the header on mobile. The **store phone is only accessible after opening the menu**. Many users may miss this.

#### Content
- The menu bottom section clearly labels both phone numbers with location context (Склад / Магазин MaxDecor) — ✓ well done.

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🟠 Medium | Phone icon touch target too small | `p-2` gives 38–40px; change to `p-2.5` or `p-3` to reach 44px |
| 🟠 Medium | Only warehouse phone visible without opening menu | Store phone is hidden behind 2 taps; consider adding second phone link to mobile header area or making it visible in another way |

---

### 2 — Hero

**Component:** `src/sections/Hero.tsx`

#### Layout
- Height `calc(100svh - 180px)` with `min-h-[400px]`: the 180px subtraction is ~108px larger than the actual header (`h-[72px]`). On a 667px iPhone SE this yields a 487px hero — adequate. On an 844px iPhone 14: 664px — fine. The over-subtraction wastes some vertical space but doesn't break layout.
- Content uses `px-8` (32px) horizontal padding — inconsistent with `px-6` (24px) used by every other section. On a 375px phone this leaves 311px for content — enough, but creates a subtle visual misalignment when scrolling past other sections.

#### Typography
- Headline `text-4xl` (36px) on mobile — good size for impact.
- Headline has a forced `<br />` — always 2 lines on all viewports — appropriate.
- Subheadline at `text-base` (16px) with `max-w-[600px] mx-auto` — on mobile the max-width has no effect (phone is narrower); copy fits well within the constrained width.

#### CTAs
- Both buttons stack vertically on mobile (`flex-col`) — ✓ correct.
- Both are `w-full` — ✓ full-width touch targets.
- The outline (catalog) CTA label: **"Разгледайте нашия каталог"** (29 chars). At full width with internal padding this fits fine, but is long for a secondary CTA. A tighter label would reduce cognitive load.

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🟢 Minor | `px-8` inconsistent with rest of site | All other sections use `px-6`; hero uses `px-8`. Unify to `px-6` |
| 🟢 Minor | Hero height subtraction overshoots | `calc(100svh-180px)` subtracts 108px more than actual header height; consider `calc(100svh-72px)` or just `100svh` with sticky header |
| 🟢 Minor | Catalog CTA label slightly long | "Разгледайте нашия каталог" → consider shortening to "Разгледай каталога" |

---

### 3 — Trust Bar

**Component:** `src/sections/TrustBar.tsx`

#### Layout
- Mobile grid: `grid-cols-2` → 4 items display as a 2×2 grid. Structure is logical.
- `divide-y` applies horizontal dividers between rows — ✓ correct.
- No vertical dividers in the 2-column mobile layout; cells are separated only by whitespace.

#### Spacing
- Each `StatCell` uses `px-8` (32px each side) internal padding.
- On a 375px phone: section has `px-6` (24px each side) → grid width = 327px → each cell = ~163px → content area per cell = 163 - 64 = **~99px**.
- "Собствен" (stat value, `text-2xl font-bold`) ≈ 96px — fits just barely. For cells with shorter values (2010, 16+, 22), no issue.
- The `text-[10px] font-semibold uppercase tracking-widest` label (e.g., "Година основаване", "Водещи марки") — at 10px with wide tracking on a 99px content column, "Година основаване" = 18 chars will likely wrap to 2 lines. This is awkward.

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🟠 Medium | `px-8` too wide for 2-col mobile cells | Reduce StatCell padding to `px-4` on mobile: `px-4 lg:px-8`. Labels like "Година основаване" currently wrap at 99px content width |
| 🟢 Minor | No vertical divider between same-row cells on mobile | Consider adding `divide-x` logic or a subtle border between columns to visually separate the 2×2 grid |

---

### 4 — Categories (Bento Grid)

**Component:** `src/sections/Categories.tsx`

#### Layout
- Mobile (`<640px`): single column, all cards `h-64` (256px tall) — clean and readable.
- `sm:` (640–1023px): 2 columns, cards `h-72` (288px) — good.
- The featured bento layout (asymmetric spans) only activates at `lg:` — on mobile all cards are visually equal height. This is expected and not a problem.

#### Cards
- Text anchored to bottom with gradient overlay — ✓ legible at all sizes.
- Featured card description: `line-clamp-3` + `max-w-[340px]` — on mobile the max-width has no effect (card is narrower); clamp works correctly.
- Regular card description: `line-clamp-2` — ✓ good density for card format.
- "Разгледай →" affordance is clearly visible — ✓.

#### Performance
- `sizes` attribute correctly specifies `100vw` for mobile — ✓ correct image loading.

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🟢 Minor | All 4 cards have identical height on mobile (256px) | The bento visual hierarchy is lost on mobile. Not a usability issue, but consider setting the featured card to `h-72` or `h-80` on mobile to maintain visual emphasis |

---

### 5 — Brand Showcase

**Component:** `src/sections/BrandShowcase.tsx`

#### Featured Grid
- Mobile: `grid-cols-2 gap-4` → 6 brands in 3 rows of 2.
- Card dimensions at 375px: section `px-6` = 327px grid → each cell = (327 - 16px gap) / 2 = **~155px wide**.
- Card internal padding: `px-6 py-8` (24px each side) → **~107px usable for logo**.
- `max-h-16` (64px) logo height with `max-w-full object-contain` — logos fit within the 107px constraint, but horizontal logos (Benjamin Moore, Swiss Krono) will be very compressed.
- `min-h-[130px]` card height — fine.

#### Marquee Strip
- The `max-w-[900px] mx-auto overflow-hidden` marquee container: on mobile it is full-viewport width. 
- Animation pause on hover (`animate-marquee:hover { animation-play-state: paused }`) — **does not work on touch devices**. Users cannot pause the marquee by tapping it.
- Fade edges `w-10` (40px) on a 375px screen = 10.7% of width masked — slightly aggressive at mobile sizes.

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🟠 Medium | Logo cards too narrow on mobile — some logos may be compressed | 107px usable logo space may be insufficient for wide-format logos. Consider reducing `px-6` to `px-4` on FeaturedCard for mobile, or switching to `grid-cols-3` at mobile for a 3-row layout with more horizontal space per card |
| 🟢 Minor | Marquee has no touch-pause mechanism | `hover:` pause is desktop-only. Not critical but consider adding `aria-label` noting the logos are scrolling, or a static fallback below the marquee |

---

### 6 — Locations

**Component:** `src/sections/Locations.tsx`

#### Layout
- Single-column stacked cards on mobile — ✓ correct.
- Store displayed first on mobile (`order-1`) — ✓ correct priority for most users.
- Each card: full-width, `aspect-video` photo (~184px tall at 375px), card body `p-6`.

#### Touch Targets
- "Обади се" button: `min-h-[48px] w-full` — ✓ excellent.
- "Виж на картата" button: `min-h-[48px] flex-1` — ✓ excellent.
- Inline phone link (`<a>` inside the info row): **no min-height**, renders as text-height only (~20px touch target). Below minimum.
- CTA buttons stack vertically on mobile (`flex-col sm:flex-row`) — ✓ correct.

#### Content Density
- Each card contains: photo, badge, name, address, phone, hours (3 lines), highlight, product list, 2 CTAs. This is a lot of information for a mobile card.
- `location.products` field ("XPS · EPS · Baumit · Mapei · Technogips Pro") at `text-xs text-muted` is supplementary detail that adds density without adding decision-making value on mobile.

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🟠 Medium | Inline phone link touch target too small | The `<a>` phone link in the info row is text-only (~20px tall). Wrap it in a `py-1.5` or add `min-h-[36px] flex items-center` to the row |
| 🟢 Minor | Product tag line adds density without value on mobile | `location.products` at `text-xs` is supplementary info; consider `hidden lg:block` if card length is a concern |
| 🟢 Minor | Two buttons of equal visual weight stacked — hierarchy unclear | "Обади се" (primary action) and "Виж на картата" (secondary) could be differentiated more clearly |

---

### 7 — Why Us

**Component:** `src/sections/WhyUs.tsx`

#### Layout — CRITICAL
- Mobile grid: `grid-cols-2` → 4 items in a 2×2 layout.
- Cell width at 375px: section `px-6` = 327px → each column = 327/2 = **~163px**.
- Each cell uses `px-8` (32px each side) padding → **content area ≈ 99px**.
- At 99px width, the cell must render:
  - A 64×64px icon circle (wider than 99px → **the icon itself overflows its container!**)
  - `text-lg font-bold` title — e.g., "Правилният продукт за вашия проект" = 38 chars → wraps into ~6 lines at 99px
  - `text-sm` description — e.g., "16 години работа с обекти в Пловдив..." = 127 chars → wraps into ~10 lines at 99px

This means each cell becomes very tall (potentially 400px+ per cell) with dense wrapped text, creating an extremely cramped and unreadable dark-background section.

#### Section Heading
- Title joins two parts: "Правилен материал, честен съвет" + " " + "и доставка директно до вашия обект" → the `<br className="hidden lg:block" />` means mobile renders this as one long line: **"Правилен материал, честен съвет и доставка директно до вашия обект"** at `text-2xl`. At 375px with `px-6` padding = 327px content width, this wraps to ~3 lines — acceptable but dense.

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🔴 Critical | `grid-cols-2` with `px-8` creates ~99px content cells — too narrow for the content | The 64px icon + long titles + long descriptions cannot fit in a 99px-wide cell. Switch to `grid-cols-1` on mobile: remove `grid-cols-2` (make it just `lg:grid-cols-[...]`). This gives each feature cell its own row with full content width |
| 🔴 Critical | Description copy too long for 2-column mobile display | Even reducing padding, 127-char descriptions in 2-col dark-bg layout will be hard to read. A `grid-cols-1` layout resolves this issue entirely |
| 🟠 Medium | Section heading is one long concatenated line on mobile | Add a dedicated `<br className="sm:hidden" />` or rephrase to a 2-line mobile heading. Current line: ~66 chars at text-2xl wraps to 3 lines |

---

### 8 — Social Proof (Reviews Carousel)

**Component:** `src/sections/SocialProof.tsx`

#### Layout — CRITICAL
- `VISIBLE = 3` is hardcoded. The carousel always shows 3 cards simultaneously — there is no responsive adjustment for mobile.
- On a 375px phone (section `px-4`, container = 343px): each of the 3 visible cards = **343/3 ≈ 114px wide**.
- Subtracting `px-2.5` (10px each side) inter-card padding → **card content width = 94px**.
- Each `ReviewCard` has internal `p-6` (24px padding) → **usable text area = 46px wide**.
- At 46px, **no text is readable**. Stars, reviewer name, review text, and location all overflow into unreadable lines.

#### Buttons
- Prev/Next buttons: `w-10 h-10`, positioned with `-translate-x-5` (left) / `translate-x-5` (right), which offsets them **20px outside** the carousel container.
- Container has `px-4` (16px) section padding — the left button extends `-20px` from the container edge, which is **4px outside the viewport** at 375px.
- The buttons are `z-10` and `absolute` — they may be clipped by the `overflow-hidden` carousel wrapper.

#### Interaction
- No swipe/drag gesture support. Mobile users instinctively swipe carousels.
- Buttons are the only navigation mechanism — on mobile they may be clipped or invisible (see above).

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🔴 Critical | 3 visible cards on mobile creates ~94px-wide unreadable cards | Show 1 card on mobile, 2 on `sm:`, 3 on `lg:`. Implement `VISIBLE` as responsive (or via CSS width trick): at mobile, set each card to `100%` width and adjust translateX math accordingly |
| 🔴 Critical | Prev/Next buttons extend outside viewport on mobile | The `-translate-x-5` offset pushes the left button partially off-screen. On mobile, move buttons to below the carousel as inline prev/next controls, or change positioning |
| 🟠 Medium | No swipe support | Mobile users expect swipe navigation. Add `touchstart`/`touchend` handlers to detect swipe direction and call `move()` |

---

### 9 — Final CTA

**Component:** `src/sections/FinalCTA.tsx`

#### Layout
- `py-20 lg:py-28` — 80px vertical padding on mobile. Proportionate and readable.
- Both CTA buttons: `w-full sm:w-auto` stacked vertically on mobile — ✓ correct.
- Both buttons: `min-h-[52px]` — ✓ excellent touch targets.

#### Content
- Button labels include phone numbers: "Склад: 0876 032868" and "Магазин: 0893 305306". Both fit within full-width buttons at `text-base`.
- `hoursNote`: "Пон–Пет: Склад 8:30–17:30 | Магазин 9:00–19:00" = 48 chars at `text-sm`. At 327px content width this fits in ~2 lines — acceptable. The pipe separator `|` may cause visual ambiguity on wrap.
- Two phone-call buttons visible simultaneously. On mobile, after scrolling through 10 sections, this is the right moment for both — the duplication serves a purpose here.

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🟢 Minor | `hoursNote` pipe separator may cause awkward wrap | If the 48-char string wraps, the `|` separator becomes meaningless mid-line. Consider using a bullet `·` or new line instead: `Склад 8:30–17:30 · Магазин 9:00–19:00` |

---

### 10 — Footer

**Component:** `src/sections/Footer.tsx`

#### Layout
- Mobile: single column, all 4 sections stack — ✓ correct.
- `<details open>` accordion for warehouse and store info columns — open by default.

#### Interaction Issue
- `<summary>` elements have `list-none cursor-pointer` but no visible affordance (no chevron, no + / - icon). They **look like static headings** but are actually interactive collapse controls.
- Because `open` is a static HTML attribute (not React state), the browser handles expand/collapse natively — clicking the summary will collapse the section, but users don't know this is possible.
- There is no chevron or icon indicating interactivity.

#### Touch Targets
- Footer nav links (`ul > li > Link`): `space-y-2.5` (10px gap) between items, each link is text-height only (~20px). **Touch target ≈ 20px** — far below the 44px minimum.
- Footer phone links (inside `<a>` in IconRow): same issue — text-height only.

#### Content
- Logo in footer: `h-14` (56px) — good size.
- Brand description: `max-w-[220px]` — on single-column mobile layout this constrains text width unnecessarily (shows at less than full card width even on mobile). Should likely be `max-w-sm` or `max-w-full`.
- Email addresses in store column: `space-y-0.5` (2px gap) — extremely tight for interactive links.

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🟠 Medium | `<details>` summary has no visual collapse affordance | Add a chevron icon to `<summary>` on mobile (e.g., `ChevronDown` from lucide, rotated when open via `group-open:rotate-180`) so users understand the sections are collapsible |
| 🟠 Medium | Footer nav link touch targets are too small (~20px) | Add `py-2` to each `<li>` or each `<Link>` in footer nav to bring touch targets closer to 36–44px |
| 🟠 Medium | Footer phone/email links are text-height only | Wrap IconRow links in a `flex items-center min-h-[36px]` to increase tap surface |
| 🟢 Minor | `max-w-[220px]` clips brand description unnecessarily on mobile | Change to `max-w-xs` or remove the constraint on mobile |
| 🟢 Minor | Email addresses `space-y-0.5` creates 2px gap — too tight to tap | Increase to `space-y-1.5` or `space-y-2` |

---

### 11 — Floating Viber Button

**Component:** `src/components/ViberButton.tsx`

#### Positioning
- `fixed bottom-8 right-8` = 32px from bottom and right edges.
- Modern iPhones (X and later) have a **home indicator bar** at the bottom consuming approximately 34px of physical space. The `bottom-8` (32px) does not use `env(safe-area-inset-bottom)`, which means the Viber button sits **directly behind or touching the home swipe gesture area**.
- The button is `w-16 h-16` (64px) — good size for a touch target.

#### Overlap
- No z-index conflict with FinalCTA section (which is `relative`), but the floating button visually overlays page content at all scroll positions, including over text near the right edge.

**Issues found:**

| Priority | Issue | Detail |
|----------|-------|--------|
| 🟠 Medium | No safe-area-inset-bottom compensation | Change `bottom-8` to use CSS: `bottom: calc(2rem + env(safe-area-inset-bottom))` via inline style, or add a Tailwind `pb-safe` plugin. Prevents conflict with iPhone home indicator |

---

## Copy & Content Density Review

| Section | Issue | Suggestion |
|---------|-------|------------|
| WhyUs descriptions | Each description is 100–130 chars, displayed in a 2-col narrow grid on mobile (~99px content width) | Move to `grid-cols-1` mobile layout (see Critical finding above). No copy changes needed — the copy itself is good, the layout is the problem |
| Hero subheadline | "Официален представител на Benjamin Moore, PPG, Baumit, Mapei и над 20 водещи марки. Два обекта в Пловдив с наш транспорт." — 2 sentences, fine for mobile | No change needed |
| FinalCTA hoursNote | "Пон–Пет: Склад 8:30–17:30 | Магазин 9:00–19:00" — single-line intent, wraps awkwardly | Change `|` to `·` separator |
| Categories descriptions | Long descriptions are correctly clamp-limited (2–3 lines) — well handled | No change needed |
| Social Proof reviews | Review text is `line-clamp-5` — once carousel is fixed to 1 card per mobile view, the full card width will be comfortable | No change needed (dependent on carousel fix) |

---

## Interaction & UI Issues Summary

| # | Issue | Component | Priority |
|---|-------|-----------|----------|
| 1 | 3-card carousel unreadable on mobile — no responsive `VISIBLE` count | SocialProof.tsx | 🔴 Critical |
| 2 | Carousel prev/next buttons clip off viewport left edge | SocialProof.tsx | 🔴 Critical |
| 3 | `grid-cols-2` with `px-8` creates unusable 99px cells on mobile | WhyUs.tsx | 🔴 Critical |
| 4 | No swipe support on carousel | SocialProof.tsx | 🟠 Medium |
| 5 | Marquee cannot be paused on touch (hover-only) | BrandShowcase.tsx | 🟢 Minor |
| 6 | Only warehouse phone visible in mobile header without opening menu | Header.tsx | 🟠 Medium |
| 7 | Footer `<details>` collapse has no visual affordance | Footer.tsx | 🟠 Medium |
| 8 | ViberButton ignores iPhone safe-area-inset-bottom | ViberButton.tsx | 🟠 Medium |

---

## Prioritised Optimisation Plan

> **Important:** All items below are suggestions for approval — no code has been changed.

---

### 🔴 Critical — Fix before any public launch

#### C1 — Reviews carousel: show 1 card on mobile, not 3

**File:** `src/sections/SocialProof.tsx`

Change `VISIBLE` from a constant `3` to a responsive value detected on mount (or use CSS). The simplest approach:

- On mobile (`< 640px`): `VISIBLE = 1`, each card = 100% container width
- On `sm:` (640–1023px): `VISIBLE = 2`
- On `lg:` (1024px+): `VISIBLE = 3`

This requires the carousel math (`trackWidth`, `cardWidth`, `translateX`) to be recalculated based on `VISIBLE`. Use a `useWindowWidth` hook or a CSS-only approach (set card width via CSS classes instead of inline style math).

Also: move the prev/next buttons **below** the carousel on mobile (not absolutely positioned outside the container) to fix the off-screen clipping issue.

---

#### C2 — Why Us: switch to single-column layout on mobile

**File:** `src/sections/WhyUs.tsx`

Change the grid from:
```
grid-cols-2 lg:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr]
```
to:
```
grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr]
```

Also reduce FeatureCell padding on mobile:
```
px-4 sm:px-8 lg:px-10
```

This gives each feature cell full width on mobile where the long descriptions and centered layout can breathe.

---

### 🟠 Medium — Fix before soft launch

#### M1 — Trust Bar: reduce StatCell padding on mobile

**File:** `src/sections/TrustBar.tsx`
Change `py-5 px-8` → `py-5 px-4 sm:px-8` in `StatCell` to prevent the "Година основаване" label from wrapping.

#### M2 — Brand Showcase featured cards: reduce logo cell padding on mobile

**File:** `src/sections/BrandShowcase.tsx`
Change `FeaturedCard` padding: `px-6 py-8` → `px-4 py-6 sm:px-6 sm:py-8` to give logos more horizontal room at 155px cell width.

#### M3 — Header: increase touch target for phone icon and hamburger

**File:** `src/sections/Header.tsx`
Change `p-2` → `p-2.5` on both the phone icon `<a>` and the hamburger `<button>` in the mobile controls `div`. This brings touch targets from 38px to ~43px.

#### M4 — Locations: fix inline phone link touch target

**File:** `src/sections/Locations.tsx`
In the phone `<a>` inside the info row, add `flex items-center min-h-[36px]` to the parent `div.flex.items-center.gap-3` that wraps the phone icon row.

#### M5 — Footer: add collapse affordance to `<details>` sections

**File:** `src/sections/Footer.tsx`
Add a `ChevronDown` icon inside each `<summary>` on the right side, and rotate it 180° when the `<details>` is open using the `open` attribute selector in CSS or Tailwind's `group-open:` variant.

#### M6 — Footer: increase nav link touch targets

**File:** `src/sections/Footer.tsx`
In the navigation `<ul>`, change `space-y-2.5` → `space-y-1` and add `py-2` to each `<Link>` in footer nav, bringing touch target to ~36px.

#### M7 — Footer: fix IconRow phone/email link touch targets

**File:** `src/sections/Footer.tsx`
In `IconRow`, add `min-h-[36px] flex items-center` to the `<span>` wrapper, or add `py-1` to links inside it.

#### M8 — Viber button: respect iPhone safe area

**File:** `src/components/ViberButton.tsx`
Replace the Tailwind `bottom-8` class with an inline style:
```tsx
style={{ bottom: 'calc(2rem + env(safe-area-inset-bottom))', ... }}
```
This ensures the button clears the iPhone home indicator on notched devices.

#### M9 — Header: make store phone accessible without opening menu

**File:** `src/sections/Header.tsx`
Consider adding a second phone icon in the mobile header for the store number, or restructuring the mobile header to show a dual-phone row (warehouse + store) as compact icon+label links. Alternatively, a single "Контакти" text link could suffice.

#### M10 — Social Proof: add swipe support to carousel

**File:** `src/sections/SocialProof.tsx`
Add `touchstart` / `touchend` event handlers to the track container. If `touchend.clientX - touchstart.clientX < -50`, call `move(1)` (swipe left → next); if `> 50`, call `move(-1)` (swipe right → prev). This is a minimal, no-dependency addition.

---

### 🟢 Minor — Polish before or after launch

#### P1 — Hero: unify horizontal padding with rest of site
**File:** `src/sections/Hero.tsx` · Change `px-8` → `px-6` in the content wrapper.

#### P2 — Hero: shorten catalog CTA label
**File:** `src/lib/content.ts` · Change `ctaCatalogLabel` from "Разгледайте нашия каталог" → "Разгледай каталога".

#### P3 — FinalCTA: improve hoursNote separator
**File:** `src/lib/content.ts` · Change `|` separator in `hoursNote` → `·`: "Пон–Пет: Склад 8:30–17:30 · Магазин 9:00–19:00".

#### P4 — Footer: remove `max-w-[220px]` on mobile brand description
**File:** `src/sections/Footer.tsx` · Change `max-w-[220px]` → `max-w-[220px] lg:max-w-[220px]` (or remove for mobile).

#### P5 — Footer: increase email link spacing
**File:** `src/sections/Footer.tsx` · Change `space-y-0.5` → `space-y-2` for email addresses in store column.

#### P6 — Categories: increase featured card height on mobile for visual emphasis
**File:** `src/sections/Categories.tsx` · Change `h-64 sm:h-72` → `h-72 sm:h-80` for the featured (Paints) card only to distinguish it from regular cards on mobile.

#### P7 — WhyUs: improve mobile section heading line break
**File:** `src/sections/WhyUs.tsx` · Add `<br className="hidden sm:block lg:hidden" />` before "и доставка" to create a mobile-friendly 2-line heading without changing the desktop layout.

---

## Success Criteria

Before marking mobile as launch-ready, verify:

1. ✅ Reviews carousel shows 1 card on 375px viewport — full width, readable
2. ✅ Carousel prev/next buttons visible and tappable on 375px
3. ✅ WhyUs renders single-column on 375px — all text readable without horizontal overflow
4. ✅ All primary buttons and interactive elements have ≥44px touch targets
5. ✅ ViberButton does not conflict with iPhone home indicator (test on real device or Xcode Simulator)
6. ✅ Footer `<details>` sections show a visible collapse/expand affordance
7. ✅ Scrolling the full page produces no horizontal overflow at 375px

---

*Audit completed — no code was modified during this process.*
