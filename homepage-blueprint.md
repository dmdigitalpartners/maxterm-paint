# Homepage Redesign Blueprint — Макстерм ООД
**Phase:** 3 — Design Strategy
**Input files:** business-intelligence-report.md + ux-audit.md
**Scope:** Homepage only (desktop + mobile)
**Audience:** Two segments — homeowners renovating (B2C), contractors/builders (B2B)
**Primary conversion goal:** Phone call or store visit
**Secondary goal:** Routing visitors to the right product category

---

## Design System

---

### Color Palette

All colors derived from building materials industry conventions and the implicit brand positioning (premium, established, locally trusted). No existing brand colors were found in the site — palette is proposed from scratch.

| Role | Name | Hex | Usage |
|---|---|---|---|
| **Primary** | Navy Blue | `#1B3A5C` | Header background, primary buttons, section accents, H-tags |
| **Secondary** | Steel Blue | `#2E6DA4` | Links, hover states, secondary buttons, badges |
| **Accent / CTA** | Warm Orange | `#E07B2A` | Primary CTA buttons, icon accents, highlight badges |
| **Background** | Pure White | `#FFFFFF` | Default page background, card backgrounds |
| **Surface** | Light Gray | `#F4F6F9` | Alternating section backgrounds, input fields |
| **Text Primary** | Near-Black | `#1C1C2E` | All headings, primary body copy |
| **Text Muted** | Medium Gray | `#6B7280` | Secondary copy, captions, labels, meta text |
| **Border** | Cool Gray | `#E2E8F0` | Card borders, dividers, input borders |
| **Success** | Forest Green | `#2D6A4F` | Checkmarks, positive indicators, "open now" states |
| **Overlay** | Navy @ 65% | `#1B3A5C` at 65% opacity | Hero image overlay for text legibility |

**Colour logic:**
- Navy establishes authority and trust — the dominant color across the building industry
- Warm orange CTAs create urgency without being aggressive; it contrasts cleanly on both white and navy backgrounds
- Steel blue for interactive elements signals clickability while staying on-brand
- Green only for affirmative trust signals (checkmarks, "open now," verified claims)

**Accessibility:** All foreground/background pairs meet WCAG AA minimum (4.5:1 contrast ratio). Orange `#E07B2A` on white = 3.1:1 — use only for button backgrounds with white text, never for text on white.

---

### Typography

**Font Pairing:**
- **Display / Headings:** Montserrat — geometric, bold, professional; widely used in construction and retail; full Cyrillic support in Google Fonts
- **Body / UI:** Inter — neutral, highly legible at small sizes, web-optimized, excellent Cyrillic support

**Google Fonts import:**
```
Montserrat: 600, 700
Inter: 400, 500, 600
```

**Type Scale:**

| Level | Element | Desktop | Mobile | Weight | Font | Line Height | Letter-spacing |
|---|---|---|---|---|---|---|---|
| **Display** | Hero H1 | 56px | 36px | 700 | Montserrat | 1.1 | -0.02em |
| **H2** | Section titles | 40px | 28px | 700 | Montserrat | 1.2 | -0.01em |
| **H3** | Card titles, subsection | 24px | 20px | 600 | Montserrat | 1.3 | 0 |
| **H4** | Feature titles, labels | 18px | 16px | 600 | Montserrat | 1.4 | 0 |
| **Lead** | Hero subheadline, intro text | 18px | 16px | 400 | Inter | 1.6 | 0 |
| **Body** | Default copy | 16px | 15px | 400 | Inter | 1.7 | 0 |
| **Small** | Captions, addresses, meta | 14px | 13px | 400 | Inter | 1.5 | 0 |
| **Label** | Category chips, badges | 12px | 12px | 600 | Inter | 1.4 | 0.06em |

**Typography rules:**
- Maximum 60–70 characters per line for body text (control with max-width on text blocks)
- H1 appears only once per page (in the hero)
- Never use Montserrat for body copy below 16px — switch to Inter
- Sentence case for all headings (not Title Case), never ALL CAPS outside single-word labels

---

### Spacing System

**Base unit:** 8px

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Micro-gaps, inline icon offsets |
| `space-2` | 8px | Component internal padding minimum |
| `space-3` | 12px | Icon-to-label gap |
| `space-4` | 16px | Default component padding, small gaps |
| `space-5` | 24px | Card gaps, list item spacing |
| `space-6` | 32px | Component internal padding (cards) |
| `space-7` | 48px | Heading-to-content gap, section sub-spacing |
| `space-8` | 64px | Between major content blocks within a section |
| `space-9` | 96px | **Section padding desktop (top + bottom)** |
| `space-10` | 128px | Hero only — breathing room |

**Mobile section padding:** 56px top + bottom (space-9 × 0.58)
**Max content width:** 1200px centered
**Content padding (horizontal):** 32px desktop → 16px mobile

---

### Component Conventions

**Buttons:**

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| Primary | `#E07B2A` | `#FFFFFF` | none | Main CTA (call now, visit us) |
| Secondary | `#1B3A5C` | `#FFFFFF` | none | Product navigation, secondary actions |
| Outline | transparent | `#1B3A5C` | 2px `#1B3A5C` | Tertiary actions, "view all" |
| Ghost | transparent | `#E07B2A` | none | Subtle links in dark sections |

Button sizing: min-height 48px (WCAG tap target), padding 12px 28px, border-radius 6px, font Montserrat 600 14px uppercase with 0.05em letter spacing

**Cards:**
- Border-radius: 10px
- Background: `#FFFFFF`
- Border: 1px `#E2E8F0`
- Box-shadow: `0 2px 8px rgba(0,0,0,0.06)` (resting state)
- Box-shadow hover: `0 8px 24px rgba(0,0,0,0.12)` (hover state)
- Transition: `box-shadow 0.2s ease, transform 0.2s ease`
- Hover transform: `translateY(-3px)`

**Icons:** Use Lucide Icons (open source, clean, consistent stroke weight). Size 24px for UI, 32px for feature icons, 48px for section icons.

**Dividers:** `1px solid #E2E8F0` — use sparingly. Prefer whitespace to lines.

---

## Section-by-Section Blueprint

---

### Section 0: Sticky Header (Persistent — Not Scrollable)

**Position:** Fixed to top of viewport, z-index above all content. Collapses on mobile to a simpler bar.

**Purpose:** Eliminate the #1 conversion blocker identified in the UX audit — zero phone number visibility at all times. Every second on the site, the phone number must be reachable in one tap/click. Also establishes brand identity on every pageview.

**Content (from BI report):**
- Logo: "Макстерм" wordmark (to be designed — currently no logo exists)
- Warehouse phone: 0876 032868
- Store phone: 0893 305306
- Hours hint: "Пон–Пет 8:30–17:30"
- Navigation items: Бои | Паркет | Строителни Материали | Лайсни | Промоции | Контакти

**Layout — Desktop (two-tier header):**

```
┌────────────────────────────────────────────────────────────────────┐
│ UTILITY BAR (bg: #1B3A5C, text: white, height: 38px)              │
│  [📞 Склад: 0876 032868]  [📞 Магазин: 0893 305306]  [🕐 Пон–Пет 8:30–17:30]  [Viber icon] │
├────────────────────────────────────────────────────────────────────┤
│ MAIN NAV (bg: white, shadow: 0 2px 8px rgba(0,0,0,0.08))         │
│  [МАКСТЕРМ logo]          [Бои ▾] [Паркет ▾] [Строителни ▾] [Лайсни] [Промоции]  [КОНТАКТИ button] │
└────────────────────────────────────────────────────────────────────┘
```

**Layout — Mobile (single collapsed bar):**
```
┌───────────────────────────────────┐
│ [МАКСТЕРМ logo]          [📞] [☰] │
└───────────────────────────────────┘
```
- 📞 = tap-to-call (primary store number: 0876 032868)
- ☰ = hamburger opens full-screen menu overlay
- Mobile menu overlay shows: nav items stacked + both phone numbers as large tap-to-call buttons + Viber + hours

**Components:**
- Utility bar: small text links (tel: hrefs) + Viber icon
- Logo: text wordmark "Макстерм" in Montserrat 700 (no logomark until brand identity is created)
- Nav items with ▾ dropdown indicators for product categories
- "Контакти" styled as outline button (not plain link) to signal CTA
- Mobile: hamburger icon + phone icon always visible

**Primary CTA:** Phone number tap-to-call (both locations)
**Trust element:** Real phone numbers visible = trust through reachability
**Mobile adaptation:** Single-tier sticky bar, phone icon always visible alongside logo

**Interaction:** On scroll past hero, main nav background gains subtle shadow to reinforce sticky state. Dropdown menus appear on hover (desktop) / tap (mobile). Mobile menu slides in from right.

**Why this position:** The header is the only persistent UI element. Every problem diagnosed in the UX audit began with "the user must navigate away to find contact information." This structure eliminates that problem at the structural level, before any content is even read.

---

### Section 1: Hero

**Position:** 1 of 9 scrollable sections. Immediately below the sticky header.

**Purpose:** Answer three questions within 5 seconds: Who is this for? What do they sell? What should I do next? Convert high-intent visitors (from Google Search, Facebook ads, referrals) immediately. Set the brand positioning.

**Content (from BI report — zero invented):**
- Headline: **"Всичко за Вашия Ремонт — на едно място в Пловдив"**
  *(Justified: BI report copy states "materials for building, finishing or renovating your Home" — this directly mirrors the company's own stated purpose)*
- Subheadline: **"Официален представител на Benjamin Moore, PPG, Baumit, Mapei и над 20 водещи марки. Два обекта в Пловдив с наш транспорт."**
  *(Justified: all facts from BI report — brands confirmed, "над 20 марки" confirmed by count of 22 brands, "два обекта" confirmed, transport confirmed)*
- Primary CTA button: **"📞 Обади се: 0876 032868"** (tel: link)
- Secondary CTA text link: **"Разгледай продуктите →"** (→ /paints as the highest-traffic product category)
- Background: Full-bleed high-quality interior photo [see Images Needed section]
- Overlay: Navy `#1B3A5C` at 65% opacity to ensure headline legibility

**Layout — Desktop:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [hero image with navy overlay — beautiful renovated interior]  │
│                                                                 │
│   ┌──────────────────────────────────────────────────────┐     │
│   │                                                      │     │
│   │  Всичко за Вашия Ремонт —        [product image]    │     │
│   │  на едно място в Пловдив                             │     │
│   │                                                      │     │
│   │  Официален представител на BM, PPG,                  │     │
│   │  Baumit, Mapei и над 20 марки.                       │     │
│   │  Два обекта. Наш транспорт.                          │     │
│   │                                                      │     │
│   │  [📞 Обади се: 0876 032868]  [Разгледай продуктите →] │    │
│   │                                                      │     │
│   └──────────────────────────────────────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
         Height: 85vh (min 600px, max 760px)
```

**Layout — Mobile:**
```
┌────────────────────────────┐
│  [hero image + overlay]    │
│                            │
│  Всичко за Вашия Ремонт   │
│  — на едно място           │
│  в Пловдив                 │
│                            │
│  Официален представител    │
│  на над 20 марки.          │
│  Два обекта. Наш транспорт │
│                            │
│  [📞 Обади се: 0876...]    │
│  [Разгледай продуктите →]  │
│                            │
└────────────────────────────┘
      Height: 100svh
```

**Components:**
- Single static background image (never a slider — ux-audit H-08)
- Text block left-aligned on desktop, centered on mobile
- Primary button: orange `#E07B2A`, white text, Montserrat 600, tel: link
- Secondary link: white text with arrow, Inter 400, underline on hover
- Scroll indicator: subtle animated chevron-down icon at bottom of hero (encourages scroll)

**Primary CTA:** Phone call
**Trust element:** Brand names in subheadline (Benjamin Moore, PPG, Baumit, Mapei) — instant recognition
**Mobile adaptation:** Full-height, text centered, single column, slightly reduced H1 font size (36px), primary CTA full-width button

**Interaction:** Subtle Ken Burns effect on the background image (slow 12s zoom, scale 1.0 → 1.05) — adds life without distraction. Scroll indicator pulses gently. Hero text fades in on load (opacity 0 → 1, 0.6s delay).

**Why section 1:** The hero is the single most important section by traffic weight. Every visitor sees it. Every bounce that happens here is a lost customer. The combination of a clear geographic claim ("в Пловдив"), a product category breadth signal ("над 20 марки"), and an immediate phone CTA converts the three most common visitor intents: local searchers, brand-aware customers, and category browsers.

---

### Section 2: Trust Bar

**Position:** 2 of 9 — immediately below the hero fold, first thing seen on scroll.

**Purpose:** Validate the hero claim instantly with concrete, scannable proof points. Prevent the "sounds good but can I trust this?" objection. The UX audit identified zero trust signals on the homepage — this section exists entirely to fix that.

**Content (from BI report — all facts verified):**

| Stat | Copy | Source |
|---|---|---|
| Founded | **Основана 2010 г.** | BI report: "Създадена през 2010г." |
| Experience | **16 г. опит** | 2026 - 2010 = 16 years |
| Warehouse | **2 000 кв.м.** складова база | BI report: "2000кв.м." |
| Brands | **22 марки** | BI report: counted 22 named brands |
| Delivery | **Собствен транспорт** | BI report: "Фирмата разполага с транспорт" |

**Layout — Desktop (5-column stat strip):**
```
┌───────────────────────────────────────────────────────────────────────┐
│  [bg: #F4F6F9, border-top: 3px #E07B2A]                              │
│                                                                       │
│  [🏢]           [⭐]          [📦]          [🏷️]          [🚚]       │
│  Основана       16 год.       2 000 кв.м.   22 марки      Собствен   │
│  2010 г.        опит          склад          на склад      транспорт  │
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘
   Height: 120px
```

**Layout — Mobile (2 columns × 3 rows, last item full-width):**
```
┌─────────────────────────────────┐
│  [🏢]              [⭐]         │
│  Основана          16 год.      │
│  2010 г.           опит         │
├─────────────────────────────────┤
│  [📦]              [🏷️]         │
│  2 000 кв.м.       22 марки     │
│  склад             на склад     │
├─────────────────────────────────┤
│           [🚚]                  │
│      Собствен транспорт         │
└─────────────────────────────────┘
```

**Components:**
- 5 stat cells — each: icon (32px, color `#E07B2A`) + stat value (H3, Montserrat 700) + label (Body, Inter 400, muted color)
- Thin orange top border (3px) connects visually to hero CTA button color
- Section background: `#F4F6F9` (alternating surface color — distinguishes from white hero)
- Vertical dividers between cells on desktop (1px `#E2E8F0`)

**Primary CTA:** None — this is a trust reinforcement station, not a conversion point
**Trust element:** This entire section IS the trust element
**Mobile adaptation:** 2-column grid, all cells equal sizing, icons remain visible
**Interaction:** Stat numbers count up with a brief animation on first scroll into view (e.g., "2000" increments from 0 → 2000 over 0.8s). This draws attention and makes the numbers feel earned, not static. Use IntersectionObserver — only triggers once.

**Why section 2:** The UX audit established that trust signals must appear immediately after the hero — visitors who scroll are already partially interested, and they need validation before they'll invest more time. The 3px orange top border creates a visual thread from the hero CTA button to this section, tying them together psychologically.

---

### Section 3: Product Categories

**Position:** 3 of 9

**Purpose:** Let visitors self-route to their relevant product area. The homepage serves two audiences (homeowners + contractors) and multiple use cases (painting, flooring, building, waterproofing). Category cards allow each visitor to immediately select their intent and go deeper. Reduces reliance on navigation clicks.

**Content (from BI report):**
Four cards representing the four main navigation categories:

| Card | Title | Description | Link |
|---|---|---|---|
| 1 | **Интериорни и Фасадни Бои** | Benjamin Moore, PPG, Vitex, Colorstyle — над 6 000 цвята | /paints |
| 2 | **Ламиниран Паркет** | Kronopol, Swiss Krono, Tarkett, Classen и още — мостри в двата обекта | /laminatefloor |
| 3 | **Строителни Материали** | XPS, EPS, Baumit, Mapei, Technogips Pro, хидроизолации и още | /строителни-материали-xps |
| 4 | **Лайсни и Первази** | Алуминиеви, ПВЦ и МДФ — перфектен завършек за всяка настилка | /europrofil |

**Layout — Desktop (4-column card grid):**
```
┌──────────────────────────────────────────────────────────────────────┐
│  Нашите Продукти                          [white bg section]         │
│  ─────────────────────────                                           │
│                                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ [image]  │  │ [image]  │  │ [image]  │  │ [image]  │           │
│  │          │  │          │  │          │  │          │           │
│  │ Бои и    │  │Ламиниран │  │Строителни│  │ Лайсни   │           │
│  │ Мазилки  │  │  Паркет  │  │Материали │  │и Первази │           │
│  │          │  │          │  │          │  │          │           │
│  │ BM, PPG, │  │ Kronopol,│  │ XPS,EPS, │  │ Алум.,   │           │
│  │ Vitex... │  │ Swiss Kr.│  │ Baumit...│  │ ПВЦ, МДФ│           │
│  │          │  │          │  │          │  │          │           │
│  │[Разгледай]│ │[Разгледай]│ │[Разгледай]│ │[Разгледай]│          │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘           │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Layout — Mobile (2×2 grid):**
```
┌────────────────────────────────┐
│  Нашите Продукти               │
│                                │
│  ┌──────────┐  ┌──────────┐   │
│  │ [image]  │  │ [image]  │   │
│  │ Бои      │  │ Паркет   │   │
│  │[Разгледай│  │[Разгледай│   │
│  └──────────┘  └──────────┘   │
│  ┌──────────┐  ┌──────────┐   │
│  │ [image]  │  │ [image]  │   │
│  │Строителни│  │ Лайсни   │   │
│  │[Разгледай│  │[Разгледай│   │
│  └──────────┘  └──────────┘   │
└────────────────────────────────┘
```

**Components:**
- Section header: H2 "Нашите Продукти" left-aligned, H3 subtitle "Изберете категория" muted
- 4 cards — each: top image (16:9 ratio, object-fit cover), card body with title (H3) + 1-line description (Body, muted) + "Разгледай →" outline button
- Cards have hover lift effect (see Component Conventions)
- Image overlay on hover: navy at 10% to signal interactivity
- Section background: `#FFFFFF`

**Primary CTA:** "Разгледай →" on each card (routes to category hub page)
**Trust element:** Brand names embedded in card descriptions act as embedded trust signals
**Mobile adaptation:** 2-column grid, images maintain 16:9 ratio, card descriptions shortened to brand names only
**Interaction:** Cards lift on hover (translateY -3px, shadow deepens). On mobile: none (tap feedback only). Cards fade-in sequentially on scroll (stagger: 0.1s between cards).

**Why section 3:** After the hero establishes what Maxterm is and the trust bar validates why to trust them, the visitor's next question is "do you have what I need?" Category cards answer this immediately without requiring a menu interaction. This is especially important on mobile where navigation dropdowns are less discoverable.

---

### Section 4: Brand Showcase

**Position:** 4 of 9

**Purpose:** Leverage the brand equity of internationally recognized names (Benjamin Moore, Baumit, Mapei, Swiss Krono, etc.) to close any remaining credibility gap. For Bulgarian renovation customers, seeing a trusted paint brand represented locally by a specific dealer is a major conversion driver — it answers "are these products genuinely available here?"

**Content (from BI report):**
The BI report confirms Maxterm is an official representative / stockist for the following brands, organized by category:

*Paints & Plasters:* Benjamin Moore, PPG, Vitex, Colorstyle, Rives, Dessa Decor
*Flooring:* Kronopol, Swiss Krono, Classen, AGT, Camsan, Alsapan, Tarkett, Peli
*Building Materials:* Baumit, Mapei, Angro, Technogips Pro, Thrakon, Ceresit, Bostik

Section header: **"Официален представител на водещи световни марки"**
Sub-label: "В наши складове и магазин ще намерите продуктите на:"

**Layout — Desktop:**
```
┌──────────────────────────────────────────────────────────────────────┐
│  [bg: #F4F6F9]                                                       │
│                                                                      │
│  Официален представител на водещи световни марки                     │
│  В наши складове ще намерите продуктите на:                          │
│                                                                      │
│  [BM logo] [PPG logo] [Vitex logo] [Colorstyle] [Baumit] [Mapei]   │
│  [Kronopol] [Swiss Krono] [Tarkett] [Classen] [Technogips] [Thrakon]│
│                                                                      │
│  ← auto-scrolls slowly on loop (no user controls needed) →          │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Layout — Mobile:**
- Same infinite logo marquee, slightly smaller logos
- Touch-scroll enabled so user can drag

**Components:**
- Section label: small uppercase label "Нашите Марки" in orange above H2
- H2: "Официален представител на водещи световни марки" — Montserrat 700
- Logo marquee strip: infinite horizontal scroll loop at constant slow speed (30s per cycle, `animation: marquee 30s linear infinite`). Logos in grayscale at rest, fade to color on hover.
- Logos sized consistently: 120px wide, auto height, contained in 60px height cells with padding
- Two rows: Row 1 paints + building materials logos / Row 2 flooring logos — or a single scrolling row with all 22+ logos

**Primary CTA:** None — brand recognition closes the trust loop; no action needed here
**Trust element:** The entire section is the trust element — brand logos from globally recognized companies
**Mobile adaptation:** Single marquee row, logos slightly reduced, touch-drag enabled
**Interaction:** Continuous marquee scroll (CSS animation, no JS). Pauses on hover (desktop). Logos grayscale → color on hover (desktop only).

**Why section 4:** Trust is built in layers. Section 2 established company facts; section 4 establishes product authority. Customers who recognize Benjamin Moore or Baumit from previous research will immediately feel "these people are the real deal." The marquee format efficiently presents 20+ brand logos without requiring space for all of them simultaneously.

---

### Section 5: Two Locations

**Position:** 5 of 9

**Purpose:** Convert visitors whose intent is "I want to visit" — which is likely the plurality of homepage visitors for a local business. Remove every friction point between "I'm interested" and "I know where to go and when to go."

**Content (from BI report):**

**Location 1 — Складова База (Warehouse):**
- Name: Складова База "Макстерм"
- Address: ул. Захаридово 46А, гр. Пловдив
- Phone: 0876 032868
- Hours: Пон–Пет 08:30–17:30 / Събота 08:30–13:30
- What's here: XPS, EPS, Baumit, Mapei, Angro, Technogips Pro, Ceresit, Bostik — heavy building materials
- Size: 2,000 кв.м. (indoor + outdoor)
- Transport: Yes — company-owned delivery from this location
- For: contractors, builders, larger orders

**Location 2 — Магазин MaxDecor (Retail Store):**
- Name: Магазин "MaxDecor"
- Address: бул. Освобождение 39, ж.к. Тракия, комплекс Елит
- Phone: 0893 305306
- Hours: Пон–Пет 09:00–19:00 / Събота 10:00–16:00 / Неделя: Почивен ден
- What's here: Benjamin Moore, PPG, Vitex, Colorstyle, laminate flooring, decorative plasters, moldings
- For: homeowners, DIY renovators

**Layout — Desktop (2-column side-by-side cards):**
```
┌──────────────────────────────────────────────────────────────────────┐
│  Два обекта в Пловдив                [bg: white]                     │
│  ─────────────────────────────────                                   │
│                                                                      │
│  ┌───────────────────────────┐  ┌───────────────────────────┐       │
│  │ [warehouse photo]         │  │ [store photo]             │       │
│  │                           │  │                           │       │
│  │ 🏗️ Складова База          │  │ 🛍️ Магазин MaxDecor       │       │
│  │ "Макстерм"                │  │                           │       │
│  │                           │  │                           │       │
│  │ 📍 ул. Захаридово 46А    │  │ 📍 бул. Освобождение 39  │       │
│  │ 📞 0876 032868 [call]    │  │ 📞 0893 305306 [call]    │       │
│  │ 🕐 Пон-Пет 8:30-17:30   │  │ 🕐 Пон-Пет 9:00-19:00   │       │
│  │    Съб 8:30-13:30        │  │    Съб 10:00-16:00       │       │
│  │    Нед: Почивен          │  │    Нед: Почивен           │       │
│  │                           │  │                           │       │
│  │ XPS · EPS · Baumit        │  │ Бои · Паркет · Декор     │       │
│  │ Mapei · Technogips Pro    │  │ Лайсни · Мазилки         │       │
│  │ 2 000 кв.м. | Транспорт  │  │ Мостри наличен            │       │
│  │                           │  │                           │       │
│  │ [📍 Виж на картата]       │  │ [📍 Виж на картата]       │       │
│  │ [📞 Обади се]             │  │ [📞 Обади се]             │       │
│  └───────────────────────────┘  └───────────────────────────┘       │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Layout — Mobile (stacked, store first):**
```
┌──────────────────────────────────┐
│  Два обекта в Пловдив            │
│                                  │
│  ┌──────────────────────────┐    │
│  │ [store photo]            │    │
│  │ 🛍️ Магазин MaxDecor      │    │
│  │ 📍 бул. Освобождение 39  │    │
│  │ 📞 0893 305306           │    │
│  │ [full-width call button] │    │
│  │ [full-width map button]  │    │
│  └──────────────────────────┘    │
│                                  │
│  ┌──────────────────────────┐    │
│  │ [warehouse photo]        │    │
│  │ 🏗️ Складова База         │    │
│  │ 📍 ул. Захаридово 46А    │    │
│  │ 📞 0876 032868           │    │
│  │ [full-width call button] │    │
│  │ [full-width map button]  │    │
│  └──────────────────────────┘    │
└──────────────────────────────────┘
```
*Note: Store card appears first on mobile because the homeowner/retail audience is the majority of mobile traffic.*

**Components:**
- Section header: H2 "Два обекта в Пловдив"
- Two tall cards (equal height) each containing:
  - Header photo (16:9, store/warehouse interior — see Images Needed)
  - Location icon (emoji or Lucide map-pin) + location name H3
  - Icon row: map-pin + address / phone icon + tel: link / clock + hours table
  - Mini product tag list (3–4 comma-separated brand/category names, muted text)
  - Unique differentiator badge (Warehouse: "2 000 кв.м. | Транспорт" / Store: "Мостри налични")
  - Two equal-width buttons: "📍 Виж на картата" (Google Maps link) + "📞 Обади се" (tel: link)
- "Отворено сега" / "Затворено" badge (green/red) that dynamically shows open/closed status based on current time — or a simple static "Работно Време" label if dynamic status is not implemented in Phase 1

**Primary CTA:** "Обади се" (call button) — orange primary button
**Trust element:** Real addresses + real phone numbers + hours = verifiable legitimacy
**Mobile adaptation:** Store first (homeowner priority), stacked, full-width buttons
**Interaction:** None beyond hover states. No animation needed — information density is the priority here.

**Why section 5:** This section serves the single most common intent for local business website visits — "where are you and when can I come?" Placing it at position 5 (after the value proposition, trust, categories, and brands) means visitors who reach it are already qualified and ready to act. Making both phone numbers tap-to-call and both addresses link directly to Google Maps removes every remaining barrier between desire and action.

---

### Section 6: Why Choose Us (Differentiators)

**Position:** 6 of 9

**Purpose:** Pre-empt the final objection before a visitor converts: "Why Maxterm specifically, vs. any other building materials shop in Plovdiv?" This section translates the company's genuine operational advantages into customer-facing benefits. All claims derived directly from BI report — zero invented content.

**Content (from BI report — 4 differentiators with real justification):**

| Differentiator | Headline | Body | Source |
|---|---|---|---|
| 1 | **16 Години Опит** | Работим от 2010 г. и познаваме нуждите на строители и домакинства в Пловдив. | BI: "Създадена през 2010г." |
| 2 | **Официален Представител** | Носим оригинални продукти от Benjamin Moore, PPG, Baumit, Mapei и над 20 световни марки — с гаранция за автентичност. | BI: all brand names confirmed |
| 3 | **Собствен Транспорт** | Доставяме материали от нашата складова база до Вашия обект — удобно и навреме. | BI: "Фирмата разполага с транспорт, което е допълнително удобство" |
| 4 | **Компетентен Персонал** | Нашият екип ще Ви насочи към точния материал спрямо Вашия проект, бюджет и желания. | BI: "нашият любезен и отзивчив персонал ще Ви насочи" |

**Layout — Desktop (4-column feature grid):**
```
┌──────────────────────────────────────────────────────────────────────┐
│  [bg: #1B3A5C (navy), white text]                                    │
│                                                                      │
│  Защо Макстерм?                                                      │
│  ─────────────────                                                   │
│                                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │  [icon]  │  │  [icon]  │  │  [icon]  │  │  [icon]  │           │
│  │ 16 Год.  │  │ Офиц.    │  │ Собствен │  │Компетент.│           │
│  │  Опит    │  │ Предст.  │  │Транспорт │  │ Персонал │           │
│  │          │  │          │  │          │  │          │           │
│  │ Работим  │  │ Оригин.  │  │ Доставя- │  │ Нашият   │           │
│  │ от 2010  │  │ продукти │  │ ме до    │  │ екип ще  │           │
│  │ г.       │  │ от 20+   │  │ обекта   │  │ Ви помог │           │
│  │          │  │ марки    │  │          │  │          │           │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘           │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Layout — Mobile (2×2 grid on navy background):**
```
┌─────────────────────────────────┐
│  Защо Макстерм?   [white/navy]  │
│                                 │
│  ┌──────────┐  ┌──────────┐    │
│  │ [icon]   │  │ [icon]   │    │
│  │ 16 Год.  │  │ Офиц.    │    │
│  │ Опит     │  │ Предст.  │    │
│  └──────────┘  └──────────┘    │
│  ┌──────────┐  ┌──────────┐    │
│  │ [icon]   │  │ [icon]   │    │
│  │ Транспорт│  │ Персонал │    │
│  └──────────┘  └──────────┘    │
└─────────────────────────────────┘
```

**Components:**
- Section background: Navy `#1B3A5C` — creates strong visual contrast after the white/gray sections above
- White text throughout
- 4 feature cells: each with icon (48px, `#E07B2A` orange), H3 headline (white), Body copy (white at 85% opacity, Inter 400)
- Icons: Lucide — Clock (experience), Award (official rep), Truck (transport), Users (staff)
- No card borders — cells are column dividers only on desktop, grid cells on mobile

**Primary CTA:** None — this is a belief section, not an action section
**Trust element:** The differentiators themselves are proof — specific, verifiable, not generic
**Mobile adaptation:** 2×2 grid, icons remain at 40px, copy condensed to 1–2 sentences each
**Interaction:** Icon has a subtle scale animation on scroll entry (scale 0.8 → 1.0, 0.3s ease). Text fades in below it (0.2s stagger). Nothing distracting.

**Why section 6:** This section serves the comparison-shopping visitor — someone who is choosing between Maxterm and a competitor. By this point they've seen what Maxterm sells (section 3), which brands (section 4), and where they are (section 5). The remaining barrier is "are they the best option?" Placing this section in the navy brand color also provides strong visual rhythm — it breaks the white/gray alternation and signals a different kind of content.

---

### Section 7: Social Proof (Placeholder — Requires Content Collection)

**Position:** 7 of 9

**Purpose:** This section exists in the blueprint as a structural placeholder. The UX audit confirmed zero testimonials, reviews, or customer quotes exist anywhere in the business's current web presence. This section CANNOT be launched without real reviews.

**⚠️ CONTENT GAP — ACTION REQUIRED BEFORE LAUNCH:**
The following steps must be completed before this section goes live:
1. Claim and verify Google Business Profile for both locations
2. Add correct hours, addresses, phone numbers, and photos to Google Business
3. Ask satisfied customers (staff can identify regulars) to leave Google Reviews
4. Once minimum 5 reviews with 4+ star average exist, embed the Google Reviews widget here
5. If a dedicated testimonial is provided by a real customer, add a quote card

**Interim solution (launches with the site, replaced later):**
Display a Google Reviews widget showing the profile with a "Виж всички отзиви в Google" link — even if zero reviews are visible yet, the widget establishes the channel and invites future reviewers.

**Layout placeholder (for Google Reviews widget):**
```
┌──────────────────────────────────────────────────────────────────────┐
│  [bg: #F4F6F9]                                                       │
│                                                                      │
│  Клиентите за нас                                                    │
│  ──────────────────                                                  │
│                                                                      │
│  ⭐⭐⭐⭐⭐  [Google Reviews widget]  ⭐⭐⭐⭐⭐                      │
│                                                                      │
│  [Google reviews cards — 3 across on desktop]                        │
│                                                                      │
│         [Виж всички отзиви в Google →]                               │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Why include now:** Building the section structure now ensures it's ready the moment reviews exist. If launched without it, retrofitting requires a full redesign cycle. Design the container; fill it when the content arrives.

---

### Section 8: Final CTA Banner

**Position:** 8 of 9

**Purpose:** Re-capture visitors who have scrolled the entire page without converting. This is the last persuasion attempt before the footer. Statistically, a visitor who scrolls to the bottom is highly interested — they just haven't acted yet. A strong, specific CTA here captures this high-intent segment.

**Content (from BI report):**
- Headline: **"Посетете ни в Пловдив"** — direct, geographic, action-oriented
- Subheadline: **"Намерете всичко за Вашия ремонт — на едно място. Складова база и магазин с мостри."**
  *(Every word sourced from BI report: "всичко за Вашия ремонт", "на едно място", "складова база", "мостри")*
- CTA 1: **"📞 Склад: 0876 032868"** (tel: link, orange button)
- CTA 2: **"📞 Магазин: 0893 305306"** (tel: link, secondary navy button)
- CTA 3: **"Напишете ни →"** (link to /kontakti contact form, ghost/outline button)
- Hours reminder: small text — "Пон–Пет: Склад 8:30–17:30 | Магазин 9:00–19:00"

**Layout — Desktop:**
```
┌──────────────────────────────────────────────────────────────────────┐
│  [full-width bg: navy gradient #1B3A5C → #2E6DA4, or store photo]   │
│                                                                      │
│     Посетете ни в Пловдив                                            │
│                                                                      │
│     Намерете всичко за Вашия ремонт — на едно място.                 │
│     Складова база и магазин с мостри.                                │
│                                                                      │
│     [📞 Склад: 0876 032868]  [📞 Магазин: 0893 305306]  [Напишете ни] │
│                                                                      │
│     Пон–Пет: Склад 8:30–17:30 | Магазин 9:00–19:00                 │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
   Height: 320px desktop / 420px mobile
```

**Layout — Mobile:**
```
┌──────────────────────────────────┐
│  [navy gradient background]      │
│                                  │
│  Посетете ни в Пловдив           │
│                                  │
│  Намерете всичко за              │
│  Вашия ремонт — на едно          │
│  място.                          │
│                                  │
│  [📞 Склад: 0876 032868]         │
│  [📞 Магазин: 0893 305306]       │
│  [Напишете ни]                   │
│                                  │
│  Пон–Пет 8:30–17:30             │
└──────────────────────────────────┘
```

**Components:**
- Full-width section, navy background or navy overlay on photo
- H2 white, Lead white, 3 buttons (primary orange, secondary outline white, ghost white)
- Hours in small text, white at 70% opacity
- Optional: thin animated orange underline on headline (simple CSS keyframe)

**Primary CTA:** Phone call — two numbers simultaneously visible
**Trust element:** Hours reassure the visitor that calling will be productive
**Mobile adaptation:** Full-width stacked buttons, all three visible
**Interaction:** Subtle background gradient shimmer (very low key — only if implementation allows, not a requirement)

**Why section 8:** The bottom CTA banner is standard practice for local service businesses. Visitors who read all the way to the bottom are the warmest leads on the page. Not having a clear final CTA here wastes the most motivated segment of visitors.

---

### Section 9: Footer

**Position:** 9 of 9 (final element)

**Purpose:** Complete information resource + legal compliance + brand coherence. The footer serves both the "I need to look something up" visitor and the Google indexing crawlers (structured NAP data).

**Content (from BI report):**
Column 1 — Brand:
- "Макстерм" wordmark
- Tagline (once established): "Всичко за Вашия Ремонт"
- Short description (2 lines): "Търгуваме със строителни материали, бои, паркет и декор от 2010 г. Два обекта в Пловдив."
- Facebook icon: https://www.facebook.com/maxdecor.bg

Column 2 — Складова База (Warehouse):
- 📍 ул. Захаридово 46А, гр. Пловдив
- 📞 0876 032868 (tel: link)
- 🕐 Пон–Пет: 08:30–17:30
- 🕐 Събота: 08:30–13:30
- 🕐 Неделя: Почивен ден

Column 3 — Магазин MaxDecor:
- 📍 бул. Освобождение 39, ж.к. Тракия
- 📞 0893 305306 (tel: link)
- ✉️ maxterm@abv.bg
- ✉️ office.maxterm@gmail.com
- 🕐 Пон–Пет: 09:00–19:00
- 🕐 Събота: 10:00–16:00
- 🕐 Неделя: Почивен ден

Column 4 — Navigation:
- Интериорни и Фасадни Бои
- Ламиниран Паркет
- Строителни Материали
- Лайсни и Первази
- Промоции
- Контакти
- Общи Условия *(fix broken link before launch)*

Bottom bar:
- "© 2010–2026 Макстерм ООД. Всички права запазени."
- *(Remove SuperHosting.BG branding)*

**Layout — Desktop (4-column footer):**
```
┌──────────────────────────────────────────────────────────────────────┐
│  [bg: #1C1C2E (near-black), white text]                              │
│                                                                      │
│  [Макстерм]    [Складова База]   [Магазин MaxDecor]  [Навигация]    │
│  logo + desc   📍 адрес         📍 адрес            • Бои          │
│  [Facebook]    📞 тел.          📞 тел.              • Паркет       │
│                🕐 часове        ✉️ имейл             • Строителни   │
│                                 🕐 часове             • Лайсни      │
│                                                      • Контакти     │
│                                                      • Усл.         │
│──────────────────────────────────────────────────────────────────────│
│  © 2010–2026 Макстерм ООД. Всички права запазени.                   │
└──────────────────────────────────────────────────────────────────────┘
```

**Layout — Mobile (stacked columns):**
All 4 columns stack vertically with accordion-style expand/collapse for contact columns (reduces scroll depth on small screens).

**Components:**
- Background: `#1C1C2E` (near-black — distinct from navy, acts as "end of page" signal)
- White text, muted gray for secondary info
- All phone numbers as tel: links
- All emails as mailto: links
- Social icon: Facebook (SVG, 24px, white) — add more as accounts are created
- Bottom divider line + copyright row

**Primary CTA:** None (footer is informational)
**Trust element:** Complete, accurate contact info in a structured format = legitimacy signal
**Mobile adaptation:** Accordion columns, tap to expand each location's details
**Interaction:** None beyond link hover states.

---

### Floating Element: WhatsApp / Viber Button

**Position:** Fixed bottom-right, z-index above all content, visible across ALL pages

**Purpose:** Capture the high percentage of Bulgarian mobile users who prefer messaging over calling — especially for out-of-hours inquiries and product photo consultations.

**Content:** WhatsApp icon OR Viber icon (whichever number the business actively monitors)
- Button: circle 56px diameter, Viber purple `#7360F2` or WhatsApp green `#25D366`
- Tooltip on hover (desktop): "Пишете ни в Viber" / "Пишете ни в WhatsApp"
- Links to: viber://chat?number=+359876032868 OR wa.me/359876032868

**Mobile adaptation:** Button shrinks slightly to 48px, positioned to not overlap swipe gesture zones (iOS/Android system bars)

**Interaction:** Button scales from 0 to 1.0 after 3-second page delay (doesn't interrupt initial load). Pulse animation on first appearance to draw attention (2 pulses, then static).

---

## Content Inventory

Every piece of content required for the homepage, with its source from the BI report or a flag for new content needed.

### Text Content

| Content Item | Copy | Source | Status |
|---|---|---|---|
| Page `<title>` | "Макстерм — Бои, Паркет и Строителни Материали в Пловдив" | BI: company name + product categories + city | ✅ Available |
| Meta description | "Официален представител на Benjamin Moore, PPG, Baumit, Mapei и 20+ марки. Два обекта в Пловдив. Складова база 2 000 кв.м. Собствен транспорт." | BI: all facts confirmed | ✅ Available |
| Hero H1 | "Всичко за Вашия Ремонт — на едно място в Пловдив" | BI: "материали за изграждането, довършването или обновяването" + "два обекта в гр. Пловдив" | ✅ Available |
| Hero subheadline | "Официален представител на Benjamin Moore, PPG, Baumit, Mapei и над 20 водещи марки. Два обекта в Пловдив с наш транспорт." | BI: brands confirmed, 22 counted, transport confirmed | ✅ Available |
| Hero CTA button | "📞 Обади се: 0876 032868" | BI: warehouse phone | ✅ Available |
| Hero secondary CTA | "Разгледай продуктите →" | Standard UX copy | ✅ Available |
| Trust stat 1 | "Основана 2010 г." | BI: "Създадена през 2010г." | ✅ Available |
| Trust stat 2 | "16 год. опит" | Calculated: 2026-2010 | ✅ Available |
| Trust stat 3 | "2 000 кв.м. склад" | BI: "площ от 2000кв.м" | ✅ Available |
| Trust stat 4 | "22 марки" | BI: counted 22 named brands | ✅ Available |
| Trust stat 5 | "Собствен транспорт" | BI: "Фирмата разполага с транспорт" | ✅ Available |
| Category card 1 title | "Интериорни и Фасадни Бои" | BI: navigation label | ✅ Available |
| Category card 1 desc | "Benjamin Moore, PPG, Vitex, Colorstyle — над 6 000 цвята" | BI: brands + "Над 6000 цвята" | ✅ Available |
| Category card 2 title | "Ламиниран Паркет" | BI: navigation label | ✅ Available |
| Category card 2 desc | "Kronopol, Swiss Krono, Tarkett, Classen и още — мостри в двата обекта" | BI: flooring brands + "Мостри...в двата търговски обекта" | ✅ Available |
| Category card 3 title | "Строителни Материали" | BI: navigation label | ✅ Available |
| Category card 3 desc | "XPS, EPS, Baumit, Mapei, Technogips Pro, хидроизолации и още" | BI: subcategory names | ✅ Available |
| Category card 4 title | "Лайсни и Первази" | BI: navigation label | ✅ Available |
| Category card 4 desc | "Алуминиеви, ПВЦ и МДФ — перфектен завършек за всяка настилка" | BI: europrofil page content | ✅ Available |
| Brand section H2 | "Официален представител на водещи световни марки" | BI: describes official representative relationships | ✅ Available |
| Location 1 name | "Складова База Макстерм" | BI: exact label | ✅ Available |
| Location 1 address | "ул. Захаридово 46А, гр. Пловдив" | BI: confirmed | ✅ Available |
| Location 1 phone | "0876 032868" | BI: confirmed | ✅ Available |
| Location 1 hours | "Пон–Пет 08:30–17:30 / Събота 08:30–13:30 / Неделя: Почивен ден" | BI: confirmed | ✅ Available |
| Location 1 tags | "XPS · EPS · Baumit · Mapei · Technogips Pro · 2 000 кв.м. · Транспорт" | BI: confirmed | ✅ Available |
| Location 2 name | "Магазин MaxDecor" | BI: exact label | ✅ Available |
| Location 2 address | "бул. Освобождение 39, ж.к. Тракия, Пловдив" | BI: confirmed | ✅ Available |
| Location 2 phone | "0893 305306" | BI: confirmed | ✅ Available |
| Location 2 hours | "Пон–Пет 09:00–19:00 / Събота 10:00–16:00 / Неделя: Почивен ден" | BI: confirmed | ✅ Available |
| Location 2 tags | "Бои · Паркет · Декор · Лайсни · Мазилки · Мостри налични" | BI: confirmed | ✅ Available |
| Diff 1 headline | "16 Години Опит" | Calculated + BI | ✅ Available |
| Diff 1 body | "Работим от 2010 г. и познаваме нуждите на строители и домакинства в Пловдив." | BI: "Създадена през 2010г." | ✅ Available |
| Diff 2 headline | "Официален Представител" | BI: brands described as official rep | ✅ Available |
| Diff 2 body | "Носим оригинални продукти от Benjamin Moore, PPG, Baumit, Mapei и над 20 световни марки." | BI: all brand relationships confirmed | ✅ Available |
| Diff 3 headline | "Собствен Транспорт" | BI: "Фирмата разполага с транспорт" | ✅ Available |
| Diff 3 body | "Доставяме материали от нашата складова база до Вашия обект — удобно и навреме." | BI: "допълнително удобство за нашите клиенти" | ✅ Available |
| Diff 4 headline | "Компетентен Персонал" | BI: "любезен и отзивчив персонал" | ✅ Available |
| Diff 4 body | "Нашият екип ще Ви насочи към точния материал спрямо Вашия проект и желания." | BI: "ще Ви насочи към точния избор на материали" | ✅ Available |
| Final CTA H2 | "Посетете ни в Пловдив" | Derived from all location data | ✅ Available |
| Final CTA sub | "Намерете всичко за Вашия ремонт — на едно място." | BI: company description | ✅ Available |
| Footer about | "Търгуваме със строителни материали, бои, паркет и декор от 2010 г. Два обекта в Пловдив." | BI: confirmed | ✅ Available |
| Footer copyright | "© 2010–2026 Макстерм ООД. Всички права запазени." | BI: founded 2010, legal name confirmed | ✅ Available |
| Testimonials | — | **❌ NOT AVAILABLE — No testimonials exist. Do not invent. Collect from Google Reviews before launch.** | ❌ Missing |

---

### Brand Logos (Section 4)

| Brand | Category | Logo Source |
|---|---|---|
| Benjamin Moore | Paint | Available at benjaminmoore.com/media |
| PPG Pittsburgh Paints | Paint | Available at ppgpaint.com |
| Vitex | Paint | Available at vitexpaints.gr |
| Colorstyle | Paint | Official brand assets |
| Baumit | Building | Available at baumit.com |
| Mapei | Building | Available at mapei.com |
| Angro | Building | Source from packaging/distributor |
| Technogips Pro | Building | Available at technogips.com |
| Thrakon | Building | Available at thrakon.gr |
| Ceresit | Building | Available at ceresit.com |
| Bostik | Building | Available at bostik.com |
| Kronopol | Flooring | Available at kronopol.com |
| Swiss Krono | Flooring | Available at swisskrono.com |
| Tarkett | Flooring | Available at tarkett.com |
| Classen | Flooring | Available at classen.eu |
| AGT | Flooring | Source from distributor |
| Camsan | Flooring | Source from distributor |
| Alsapan | Flooring | Available at alsapan.com |
| Peli | Flooring | Source from distributor |

*⚠️ All brand logos must be used per each brand's respective usage guidelines. Obtain permission or use press kit versions.*

---

## CTA Strategy

### Primary CTA
**"📞 Обади се: 0876 032868"**
- A phone call to the warehouse number
- Appears: Hero button, sticky header (desktop utility bar + mobile icon), Section 8 final CTA, footer
- Reasoning: For a local Plovdiv building materials business, a phone call to discuss product availability or delivery is the highest-value conversion event. The warehouse number serves both B2B (contractors) and B2C (larger orders) traffic.

### Secondary CTA
**"📞 Магазин: 0893 305306"**
- Phone call to the retail store
- Appears: Hero (optional second button), Section 5 location card, Section 8 final CTA, footer
- Reasoning: Homeowners and retail customers are more likely to call the store. Having both numbers consistently available lets users self-select.

### Tertiary CTA
**"Разгледай продуктите →"**
- Links to /paints (most product-rich section)
- Appears: Hero (secondary text link), each category card
- Reasoning: Visitors who aren't ready to call need a low-commitment next step. Browsing products is the lowest-friction action that keeps them on the site and builds purchase intent.

### Micro-CTAs
- "📍 Виж на картата" — Google Maps link, in each location card. Converts the "I want to visit" intent into a navigation action.
- "Напишете ни →" — links to /kontakti form. Serves out-of-hours and messaging-preferred visitors.
- WhatsApp/Viber floating button — serves messaging-first visitors, appears on all pages.

### CTA Hierarchy Rule
At no point should more than 2 CTAs compete for attention in the same visual area. The hero has 1 primary (call) + 1 secondary (browse). The final CTA section has 2 calls + 1 write-us = 3 buttons in the same section, which is acceptable because that section is explicitly a multi-option contact hub.

---

## Images Needed

All images must be real photographs — no stock photo substitutions for business-critical sections.

### Priority 1 — Must Shoot Before Launch

| Image | Purpose | Description | Where Used |
|---|---|---|---|
| **Hero background** | Section 1 hero | Wide-format (16:9 or wider) interior of a beautifully renovated room showing painted walls (warm/neutral tone), laminate flooring, and natural light. Unbranded. | Hero background |
| **Store interior (MaxDecor)** | Location card | Wide shot of the store interior showing organized shelving, paint displays, and color samples. Well-lit. Shows the store as welcoming and well-stocked. | Section 5 location card |
| **Warehouse interior** | Location card | Wide shot of the warehouse showing stacked materials, organized rows, scale of the 2,000 sqm space. | Section 5 location card |
| **Staff helping customer** | Social proof / differentiator | Photo of a Maxterm employee showing paint samples or discussing materials with a customer. Candid and warm, not posed. | Section 6 "Компетентен Персонал" cell, optional Section 7 |
| **Benjamin Moore paint display** | Category card | Close-up of the Benjamin Moore display in the store — paint cans, color chips, organized samples. | Section 3 category card "Бои" |
| **Laminate flooring samples** | Category card | Close-up or mid-shot of laminate flooring sample boards displayed on a rack or floor. | Section 3 category card "Паркет" |
| **XPS/EPS insulation stack** | Category card | Clean photo of insulation board stacks in the warehouse — shows scale and availability. | Section 3 category card "Строителни" |
| **Moldings / trim display** | Category card | Close-up of molding/baseboard samples, preferably showing the variety (aluminum, PVC, MDF). | Section 3 category card "Лайсни" |

### Priority 2 — Nice to Have

| Image | Description | Where Used |
|---|---|---|
| Paint color swatches flat-lay | Styled shot of multiple paint chips/fans arranged aesthetically | Homepage blog section (future), social media |
| Before/after renovation | If any customer projects exist with documented photos — before/after of painted room or installed floor | Social proof section (future) |
| Delivery truck | Company delivery vehicle — reinforces "Собствен транспорт" differentiator | Section 6 delivery differentiator |

### What NOT to Use
- Random stock photos of interiors unrelated to actual products sold
- Manufacturer's marketing images as hero content (violates brand guidelines)
- Low-resolution Viber/camera screenshots (current homepage images fall in this category — all need replacement)
- Images with visible product price tags (compliance risk)

---

## What NOT to Do

Derived directly from ux-audit.md — these patterns are explicitly prohibited in implementation.

| # | Rule | Reason |
|---|---|---|
| 1 | **No image sliders or carousels** | UX audit H-08: carousels reduce engagement, delay LCP, have no text/CTA in current form — replace with single static hero permanently |
| 2 | **No plain text phone numbers** | UX audit H-04 + MOB-03: all phone numbers must be `<a href="tel:+359...">` links — no exceptions, anywhere on the site |
| 3 | **No "My Site" in any title or meta tag** | UX audit H-03: destroys credibility in browser tab and Google SERP. Page title must read "Макстерм — Бои, Паркет и Строителни Материали в Пловдив" |
| 4 | **No invented testimonials or statistics** | Strategic constraint: no testimonials exist in the business intelligence report. Using invented quotes is a legal and ethical risk. Section 7 is a placeholder until real reviews exist. |
| 5 | **No footer copyright crediting SuperHosting.BG** | UX audit L-03: the client's footer should credit the client's business, not the hosting provider |
| 6 | **No CTA-less promotions page** | UX audit: /promo is currently an image with no text and no CTA. The new Promotions page must have at minimum: headline, description, and contact CTA |
| 7 | **No JPEG hero images without WebP fallback** | UX audit MOB-05: all hero and above-fold images must be served in WebP format with `<picture>` srcset for multiple breakpoints |
| 8 | **No hidden phone numbers** (buried in /kontakti only) | UX audit H-04: contact info belongs in the header, hero, location section, and final CTA — not only on the contact page |
| 9 | **No all-caps or excessive italic/bold body copy** | UX audit M-08 + brand voice analysis: current site over-uses bold+italic in blocks of body text. Use typographic hierarchy instead — not formatting weight |
| 10 | **No generic section headings** like "Контакти" as a section title | Every section heading must be a benefit or context statement: "Два обекта в Пловдив" not just "Контакти", "Официален представител" not just "Нашите Марки" |
| 11 | **No brand logo strip as a passive decorative element** | The brand showcase must be introduced with the label "Официален представител на" — without this framing, logos appear generic rather than trust-building |
| 12 | **No Sunday hours listed as available** | BI report confirms both locations closed Sunday. Any hours display must accurately show "Неделя: Почивен ден" |
| 13 | **No linking to the broken /obshti-usloviq** | UX audit H-06: this 404 link must be fixed or removed before any code goes live |
| 14 | **No WhatsApp/Viber button appearing on page load** | It should fade in after a 3-second delay — appearing immediately is annoying and triggers immediate dismissal |
| 15 | **Do not treat the MaxDecor Facebook page as the primary social channel** | The website is branded "Макстерм" but the only social link goes to "maxdecor.bg" — this brand split confuses visitors. Resolve by (a) creating a Maxterm.eu Facebook/Instagram or (b) clearly labeling the link as "Магазин MaxDecor в Facebook" |

---

*End of Homepage Redesign Blueprint — Макстерм ООД*
*Total sections: 9 (+ sticky header + floating button = 11 UI elements)*
*Total copywriting items: 35 (all sourced from BI report)*
*Images required: 8 priority-1 (must shoot) + 3 priority-2*
*Blocked items: Social proof section (requires Google Review collection before launch)*
