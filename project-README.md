# Макстерм ООД — Website Redesign Project
**Domain:** https://www.maxterm.eu
**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Lucide Icons
**Status:** Phase 5 complete — Ready for Claude Code implementation

---

## Project Phases

| Phase | Output | Status |
|---|---|---|
| 1 — Research | `business/business-intelligence-report.md` | ✅ Complete |
| 2 — UX Audit | `business/ux-audit.md` | ✅ Complete |
| 3 — Design Blueprint | `business/homepage-blueprint.md` | ✅ Complete |
| 4 — Task Split | `business/task-split.md` | ✅ Complete |
| 5 — Dev Handoff | SYSTEM.md + PROMPT.md + this README | ✅ Complete |
| 6 — Build | `/src/` components + sections | 🔄 Ready to start |

---

## Start Here (Developer)

1. Read `SYSTEM.md` — your operating rules
2. Read `PROMPT.md` — copy the prompt and send it to Claude Code to begin
3. Check `asset-checklist.md` — confirm what's ready before building
4. Reference `business/homepage-blueprint.md` for all design decisions
5. Reference `business/business-intelligence-report.md` for all content

## Folder Structure

```
/maxterm-website
├── /assets
│   ├── /images          → Client photos (see asset-checklist.md)
│   ├── /icons           → Custom SVG icons (Viber, WhatsApp, Facebook)
│   ├── /fonts           → Empty — fonts loaded via next/font/google
│   └── /logos           → All 21+ partner brand logos
├── /reference
│   ├── /screenshots     → Current site screenshots for comparison
│   ├── /inspiration     → Screenshots from inspiration-sites.md references
│   └── /brand           → Brand guidelines (pending logo creation)
├── /business
│   ├── business-intelligence-report.md   ← ALL business facts live here
│   ├── ux-audit.md                       ← All identified problems
│   ├── homepage-blueprint.md             ← Design system + section blueprints
│   └── task-split.md                     ← Developer task breakdown + time estimates
├── /src
│   ├── /components      → Reusable UI components (Button, Card, PhoneLink, etc.)
│   ├── /sections        → Homepage sections (Hero, TrustBar, Categories, etc.)
│   ├── /styles          → globals.css, animations.css
│   └── /lib             → fonts.ts, content.ts, constants.ts, hooks.ts, schema.ts
├── SYSTEM.md            ← Claude Code operating instructions
├── PROMPT.md            ← First message to send to Claude Code
├── inspiration-sites.md ← 8 reference sites with annotations
├── asset-checklist.md   ← Every asset needed before launch
└── README.md            ← This file
```

## Key Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Next.js 14 App Router | SSG-compatible, Claude Code native, Vercel deploy |
| Language | TypeScript strict | Component prop safety, better refactoring |
| Styling | Tailwind CSS v3 | Maps to blueprint spacing tokens, no runtime overhead |
| Icons | lucide-react | Open source, consistent stroke, full Cyrillic layout compatible |
| Fonts | next/font/google | Montserrat + Inter, cyrillic subsets, zero layout shift |
| Images | next/image | WebP auto-conversion, lazy loading, LCP optimization |
| Animation | CSS @keyframes + IntersectionObserver | No heavy libraries, respects prefers-reduced-motion |
| Deployment | Vercel (recommended) OR static export to any host | One-click deploy, preview URLs per branch |

## Business Context (Summary)

**Макстерм ООД** — building materials retailer, Пловдив, Bulgaria. Founded 2010.
Two locations: 2,000 sqm warehouse (heavy/structural) + retail store "MaxDecor" (paints, flooring, decor).
Official representative of 22+ brands including Benjamin Moore, PPG, Baumit, Mapei, Kronopol, Swiss Krono, Tarkett.
Own delivery transport. B2C (homeowners) + B2B (contractors) audience.
Primary conversion goal: phone call + store visit. No e-commerce.

## Contact

Business phones: 0876 032868 (warehouse) · 0893 305306 (store)
Business emails: maxterm@abv.bg · office.maxterm@gmail.com
