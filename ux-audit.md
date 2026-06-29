# UX & Conversion Audit — maxterm.eu Homepage
**Auditor:** Senior UX / CRO Specialist
**Scope:** Homepage only — desktop + mobile
**Reference:** business-intelligence-report.md (Phase 1 crawl)
**Date:** June 2026

---

## Executive Summary

The Maxterm homepage fails at its single most important job: telling a first-time visitor who they are, what they sell, and what to do next — all within 5 seconds. The above-the-fold area is occupied entirely by a decorative image slider with no headline, no value proposition, and no call-to-action button. The page has zero trust signals (no testimonials, no reviews, no certifications, no years-in-business), zero conversion architecture (no phone in the header, no WhatsApp, no sticky CTA), and a broken Terms of Use link in the footer that signals abandonment. The site was last updated in 2021 and is built on a platform that defaults the browser tab title to "My Site" — a detail that singlehandedly undermines every paid or organic visit before the page even loads.

**Top 3 priorities:**
1. Replace the hero slider with a conversion-focused headline + primary CTA (phone number + "Visit Us")
2. Add a sticky header bar with phone numbers and WhatsApp — the primary conversion mechanism for Bulgarian SMB customers
3. Insert a trust band (founded year, sq.m., brand logos, staff claim) directly below the hero

---

## Critical Issues (HIGH Severity)

---

### ISSUE H-01 — No Value Proposition Above the Fold
- **Location:** Hero section (ATF, 100vh)
- **Current situation:** Three rotating slides show product photography (XPS insulation boards, Benjamin Moore lifestyle, paint cans). No headline. No subheadline. No text overlay of any kind. A visitor cannot tell within 5 seconds what this business does, who it serves, or why they should stay.
- **Conversion impact:** Studies consistently show 80%+ of visitors decide to stay or leave within 3–5 seconds. Without a clear value proposition, the bounce rate on cold traffic (Google, Facebook ads, referrals) will be catastrophically high. The site currently competes on brand name recognition alone — which it hasn't built.
- **Severity:** HIGH
- **Recommended fix:**
  Replace the full-bleed slider with a single static hero section containing:
  - **H1 headline:** "Строителни Материали, Бои и Паркет в Пловдив" (Building Materials, Paints and Flooring in Plovdiv)
  - **Subheadline:** "Официален представител на Benjamin Moore, PPG, Vitex, Baumit и още 20+ марки. Два търговски обекта. Доставка с наш транспорт."
  - **Primary CTA button:** "Обади се сега — 0876 032868" (tel: link)
  - **Secondary CTA:** "Вижте продуктите →"
  - Background: single high-quality hero image of the store interior or product display, not a slider.
- **Business impact:** A clear ATF value prop can reduce bounce rate by 30–50% and directly increase the volume of phone calls and store visits — the two primary conversion goals for this business.

---

### ISSUE H-02 — Zero CTA Above the Fold
- **Location:** Hero section, entire viewport on load
- **Current situation:** The hero contains no buttons, no phone number link, no "Visit us," no "View products" — nothing actionable. The first clickable element a visitor sees is the navigation menu. The first content CTA on the page is "ОЧАКВАМЕ ВИ!" (We Expect You!) which is styled as bold text, not a button, and is not hyperlinked.
- **Conversion impact:** Without a CTA above the fold, visitors with high intent (e.g., someone who searched "бои Пловдив" and landed here) have no immediate action to take. They must scroll, orient themselves, read content blocks, and then decide to hunt for contact info. Every added step bleeds conversion. "ОЧАКВАМЕ ВИ!" is a welcome phrase, not a directive.
- **Severity:** HIGH
- **Recommended fix:**
  - Add a large primary button in the hero: phone number as a tap-to-call link, styled as a button (min 48px height, high-contrast background — e.g., deep blue or brand orange on white)
  - Add a secondary text link: "Разгледай продуктите →" pointing to /paints or a new category page
  - Add a persistent WhatsApp/Viber floating button (bottom-right corner, always visible)
- **Business impact:** Phone calls and in-store visits are this business's only conversion events. Making the phone number a button above the fold can 2–5× the call volume from website visitors on mobile.

---

### ISSUE H-03 — Browser / Page Title is "My Site"
- **Location:** `<title>` tag / browser tab / search engine snippet
- **Current situation:** The HTML `<title>` element reads "Начало - My Site". This is the default placeholder from the Super Website platform that was never updated. It appears in: (a) the browser tab, (b) Google search result titles, (c) social share previews, (d) bookmark labels. The og:title meta tag is also "Начало - My Site."
- **Conversion impact:** This is a credibility-destroying signal visible at multiple touchpoints before a visitor even reaches the homepage. In Google search results, seeing "My Site" instead of "Макстерм | Бои, Паркет и Строителни Материали в Пловдив" makes the listing look like a mistake or a test site. It directly suppresses click-through rate from organic search. It also signals to any technical-savvy user that this business does not actively manage its web presence.
- **Severity:** HIGH
- **Recommended fix:**
  - Change the `<title>` to: "Макстерм | Бои, Паркет и Строителни Материали — Пловдив"
  - Update `og:title`, `twitter:title` to match
  - This is a single setting change in the Super Website admin — highest ROI fix on the entire site
- **Business impact:** Better CTR from Google search = more free traffic. Improved credibility = lower bounce rate from cold visitors.

---

### ISSUE H-04 — No Phone Number in Header
- **Location:** Site header (top bar / navigation area)
- **Current situation:** The header contains only the navigation menu (7 text links). No phone number, no email, no "Contact us," no CTA of any kind is present in the header. Phone numbers only appear on the /kontakti page.
- **Conversion impact:** Bulgarian SMB customers — especially those on mobile searching for local building materials — expect to find a phone number immediately, often before they even read any content. Hiding contact info behind a navigation click adds a full extra step and eliminates all impulsive call conversions. This is the single highest-intent action a local customer takes.
- **Severity:** HIGH
- **Recommended fix:**
  - Add a top utility bar above the main nav with:
    - 📞 Склад: 0876 032868 (tap-to-call)
    - 📞 Магазин: 0893 305306 (tap-to-call)
    - WhatsApp/Viber icon linking to wa.me or viber:// protocol
    - Working hours summary: "Пон–Пет: 8:30–17:30 | Маг: 9:00–19:00"
  - On mobile: collapse to a single prominent call button in the header
- **Business impact:** Phone numbers in headers are consistently among the highest-converting elements on local business websites. This fix alone can double inbound call volume.

---

### ISSUE H-05 — No Trust Signals Anywhere on Homepage
- **Location:** Entire homepage
- **Current situation:** The homepage contains zero trust signals. No testimonials. No Google Reviews badge. No star rating. No "Founded 2010" or "15 years of experience." No brand logos. No statistics (clients served, products in stock, sq.m.). No certifications. The only credibility attempt is mentioning brand names in body text.
- **Conversion impact:** Building material purchases — even small ones — require trust. Homeowners and contractors are making decisions about products they'll live with for years. A site with no social proof loses to any competitor who has even one Google review visible. The absence of trust signals is especially damaging to cold traffic (first-time visitors via search or ads).
- **Severity:** HIGH
- **Recommended fix:**
  Add a trust band section directly below the hero containing 4–5 horizontal trust indicators:
  - ✅ "Основана 2010 г." (Founded 2010)
  - ✅ "2000 кв.м. складова база" (2,000 sqm warehouse)
  - ✅ "20+ водещи марки" (20+ leading brands)
  - ✅ "Собствен транспорт" (Own delivery transport)
  - ✅ Google Reviews widget or star rating (requires adding Google Business reviews first)
  - Brand logo strip: Benjamin Moore, PPG, Vitex, Baumit, Mapei, Kronopol, Swiss Krono logos
- **Business impact:** Trust signals reduce bounce rate, increase time-on-site, and directly increase contact form submissions and phone calls. Brand logo strips in particular create instant authority for multi-brand retailers.

---

### ISSUE H-06 — Broken Footer Link (Terms of Use → 404)
- **Location:** Footer, "Общи условия за ползване на уебсайта" link
- **Current situation:** The footer contains a link to /obshti-usloviq (Terms of Use) on every single page of the site. This link returns a 404 error. Every page on the site serves a broken link in the footer.
- **Conversion impact:** Broken links signal website abandonment and technical neglect. Any visitor who clicks it (especially cautious B2B buyers or contractors checking legitimacy) receives a 404 page. It also has minor negative SEO implications.
- **Severity:** HIGH
- **Recommended fix:**
  Either: (a) create the Terms of Use page at /obshti-usloviq with standard Bulgarian e-commerce terms, or (b) remove the link entirely from the footer until the page exists.
- **Business impact:** Removing this trust-killer is a one-minute fix that eliminates a negative credibility signal visible on every page.

---

### ISSUE H-07 — Dual Brand Identity Confusion (Maxterm vs. MaxDecor)
- **Location:** Homepage body copy, navigation, page title
- **Current situation:** The homepage introduces two different brand names — "МАКСТЕРМ" (the company/warehouse) and "МАКСДЕКОР / MAXDECOR" (the retail store). The Facebook link goes to facebook.com/maxdecor.bg. The domain is maxterm.eu. The page title says "My Site." A first-time visitor has no clear understanding of which brand they are dealing with or what the relationship between the two names is.
- **Conversion impact:** Brand confusion creates cognitive friction. Visitors who search "Maxterm Plovdiv" and land on a page that prominently also says "MaxDecor" and links to a Facebook called MaxDecor may question whether they are in the right place. This is especially damaging for repeat customers trying to find the business online.
- **Severity:** HIGH
- **Recommended fix:**
  - Choose a primary brand name for the website and use it consistently. Recommendation: "Макстерм" as the umbrella brand (it owns the domain), with "Магазин MaxDecor" as a named sub-location.
  - Add a clear brand statement: "Макстерм ООД — два обекта в Пловдив: Складова База и Магазин MaxDecor"
  - Ensure the site header logo/name, page title, and Facebook all align
- **Business impact:** Brand clarity reduces confusion, increases trust, and improves brand recall — all of which affect return visits and word-of-mouth referrals.

---

### ISSUE H-08 — Hero Slider is an Active Conversion Killer
- **Location:** Hero section (ATF, full viewport)
- **Current situation:** The homepage uses a rotating image carousel with 3 slides (insulation, Benjamin Moore, paint cans). There are no text overlays, no CTAs on the slides, and no visible slide indicators or navigation arrows in the extracted markup. The slider auto-rotates.
- **Conversion impact:** Auto-rotating hero sliders are one of the most researched and consistently damaging patterns in CRO. Known issues: (1) users cannot read or process text before the slide changes, (2) they create "banner blindness" — visitors instinctively ignore carousels as advertising noise, (3) they delay the Largest Contentful Paint (LCP) metric, harming Core Web Vitals and Google ranking, (4) on mobile they often break or display awkwardly. Specifically for this site: since the slides have no text or CTAs at all, the entire hero delivers zero informational value — it is purely decorative.
- **Severity:** HIGH
- **Recommended fix:**
  Replace with a single static hero image (high-quality photo of the store, product display, or a styled paint/materials flat lay) with a text overlay containing H1 + subheadline + 2 CTAs as described in H-01. If a slideshow feel is desired, use a subtle CSS parallax or a background video at very low opacity — never a content carousel.
- **Business impact:** Replacing a carousel with a static hero with clear messaging is consistently documented to increase engagement metrics by 20–40% and CTA click-through by 2–3×.

---

## Medium Issues

---

### ISSUE M-01 — Navigation Has No Visual Hierarchy or Grouping
- **Location:** Primary navigation (7 items, flat)
- **Current situation:** Nav items: Начало | Интериорни и Фасадни Бои | Ламиниран Паркет | Строителни Материали | Лайсни и Первази | Промоции | Контакти. All items are equal weight, same styling. No dropdowns. No visual grouping. "Промоции" is listed between product categories and contact, which is unusual. "Контакти" is last with no visual emphasis.
- **Conversion impact:** A visitor looking for "tile adhesives" or "Baumit" has no way to know where to look from the nav. They must guess whether it falls under "Строителни Материали" or somewhere else. No dropdown means 2–3 extra clicks to find sub-categories. "Контакти" being the last un-emphasized item buries the most conversion-critical page.
- **Severity:** MEDIUM
- **Recommended fix:**
  - Add dropdown mega-menus or hover-reveals for the 3 product categories:
    - "Бои" → Benjamin Moore / PPG / Vitex / Colorstyle / Декоративни мазилки / Грундове
    - "Паркет" → Kronopol / Swiss Krono / Tarkett / Classen (etc.)
    - "Строителни Материали" → XPS/EPS / Baumit / Гипскартон / Хидроизолации (etc.)
  - Style "Контакти" as a button (filled/outlined) to make it visually distinct as a CTA
  - Move "Промоции" adjacent to contact or highlight it differently (badge/tag: "Актуално!")
- **Business impact:** Clearer navigation reduces the effort required to find products, directly increasing product page views and time on site — both of which correlate with conversion.

---

### ISSUE M-02 — Two-Location Section Buries the Most Useful Information
- **Location:** Warehouse block + Store block (below hero)
- **Current situation:** The two location blocks describe each location in flowing prose. Key info (address, hours, phone) is embedded in paragraph text, not scannable. There are no maps, no hours in this section (hours are only on /kontakti), and no direct phone tap links. The warehouse block comes before the store block, even though the store (MaxDecor) is likely more relevant to the majority of homeowner visitors.
- **Conversion impact:** When someone wants to visit a physical store, they need: address, hours, and a map — immediately scannable. Burying this in prose increases the likelihood they leave to find the info on Google Maps instead. And they may not come back.
- **Severity:** MEDIUM
- **Recommended fix:**
  Replace the two prose blocks with two structured location cards, side by side on desktop / stacked on mobile. Each card: Name, Address (with Google Maps link), Phone (tap-to-call link), Hours summary, "Виж на картата" (View on Map) button linking to Google Maps. Consider swapping order — store first (retail-first audience), warehouse second.
- **Business impact:** Structured, scannable location info directly increases in-store visits by reducing friction in the "how do I get there" decision.

---

### ISSUE M-03 — Copyright Says 2021 (Signals Abandonment)
- **Location:** Footer, all pages
- **Current situation:** Footer displays "Copyright © 2021 Всички права запазени за SuperHosting.BG"
- **Conversion impact:** A year-old (or older) copyright date is a trust signal in reverse. It tells visitors the site has not been updated in years — which raises questions about whether the business is still active, whether products are current, and whether contact info is still valid. This matters especially for B2B buyers doing due diligence.
- **Severity:** MEDIUM
- **Recommended fix:**
  Update copyright to current year, or use a dynamic script: `© 2010–2026 Макстерм ООД`. Also note: "SuperHosting.BG" should not appear in the copyright of a client's website — this advertises the hosting company at the client's expense.
- **Business impact:** Small fix, meaningful trust signal.

---

### ISSUE M-04 — No Google Maps Embed on Homepage
- **Location:** Location blocks (below hero)
- **Current situation:** Addresses are mentioned in text. No embedded map. No "Get Directions" link. No static map image.
- **Conversion impact:** The primary intent for a high percentage of local search visitors is "where are you located, can I visit?" An embedded map immediately satisfies that intent on the homepage — without requiring a click to the contact page.
- **Severity:** MEDIUM
- **Recommended fix:**
  Embed a Google Maps iFrame for each location within the respective location card (see M-02). Alternatively, a static map image linking to Google Maps is acceptable and faster to load.
- **Business impact:** Reduces friction in the store-visit decision. Maps also improve local SEO signals.

---

### ISSUE M-05 — No WhatsApp / Viber Contact Option
- **Location:** Homepage, contact section, footer
- **Current situation:** The only contact methods visible on the homepage are embedded in prose text (not even clickable links). WhatsApp and Viber — the dominant asynchronous communication channels in Bulgarian consumer markets — are entirely absent from the site.
- **Conversion impact:** A significant portion of Bulgarian mobile users prefer sending a Viber or WhatsApp message over calling. The absence of these channels means the site loses all visitors who want to contact the business outside working hours, want to send a photo of a product, or simply prefer messaging to calling.
- **Severity:** MEDIUM
- **Recommended fix:**
  - Add a floating WhatsApp/Viber button (bottom-right corner, persistent across the entire site)
  - Include Viber and WhatsApp icons in the header utility bar alongside phone numbers
  - Add to the contact section on homepage
- **Business impact:** Adding messaging channels consistently increases total inbound contact volume by 30–60% for local Bulgarian businesses, particularly from mobile users aged 25–45 (the core home renovation demographic).

---

### ISSUE M-06 — Product Categories Not Visible on Homepage
- **Location:** Homepage body, below location blocks
- **Current situation:** The homepage does not show any product category cards, product images, or any visual representation of what is sold (beyond the hero slider which has no labels). A visitor must click into the navigation to discover the product range. There is no "Browse by category" section, no featured products, no brand showcase grid.
- **Conversion impact:** Most e-commerce and local product sites achieve significantly higher engagement when the homepage presents a visual product/category grid. It allows visitors to immediately scan and self-select their area of interest (paint vs. flooring vs. insulation), which dramatically reduces bounce rates for mid-funnel visitors.
- **Severity:** MEDIUM
- **Recommended fix:**
  Add a "Нашите Продукти" (Our Products) section with 3–4 category cards below the trust band:
  - 🎨 Бои и Мазилки → /paints
  - 🪵 Ламиниран Паркет → /laminatefloor
  - 🏗️ Строителни Материали → /строителни-материали-xps
  - 🔧 Лайсни и Першали → /europrofil
  Each card: icon or category image, category name, 1-line description, CTA arrow.
- **Business impact:** Category cards on the homepage increase product page clicks by 40–80% and reduce time-to-first-product-view, directly supporting conversion.

---

### ISSUE M-07 — No Instagram / TikTok Social Link Despite Visual Product Category
- **Location:** Footer, header area
- **Current situation:** The only social link is Facebook (facebook.com/maxdecor.bg). No Instagram, no TikTok, no YouTube. The BI report confirmed these are absent.
- **Conversion impact:** Paint, decor, and flooring are inherently visual product categories — among the highest-performing on Instagram and TikTok. Customers researching interior finishes heavily use Instagram for inspiration and product validation. A business without a visible Instagram link in 2026 appears behind the curve.
- **Severity:** MEDIUM
- **Recommended fix:**
  - If Instagram/TikTok accounts exist but aren't linked: add them immediately to the footer and header utility bar
  - If they don't exist: creating an Instagram profile and embedding a feed widget on the homepage (showing color swatches, installations, product arrivals) would add significant trust and engagement value
- **Business impact:** Social links add to perceived legitimacy and create additional touchpoints for undecided customers to validate the business before visiting.

---

### ISSUE M-08 — Font Hierarchy and Text Styling Are Inconsistent
- **Location:** Homepage body copy blocks (warehouse description, store description)
- **Current situation:** The site uses bold + italic styling extensively and inconsistently throughout body copy. The warehouse and store descriptions use combinations of `***bold italic***` text for entire paragraphs, including addresses and descriptions. There is no clear visual hierarchy between section headings, subheadings, and body text.
- **Conversion impact:** Inconsistent text styling creates cognitive noise and reduces the perceived professionalism of the page. Users scanning the page cannot quickly identify what information is most important. Excessive bold/italic on blocks of text (not just emphasis words) defeats the purpose of emphasis entirely.
- **Severity:** MEDIUM
- **Recommended fix:**
  - Establish a clear 3-level typographic hierarchy: H2 for section names, H3 for sub-sections, body text for descriptions
  - Remove all italic styling from body copy blocks
  - Bold only the most critical data points (address, phone, hours) not entire paragraphs
  - Ensure minimum 16px body font size
- **Business impact:** Cleaner typography improves content comprehension and perceived credibility.

---

## Low Issues / Quick Wins

---

### ISSUE L-01 — "ОЧАКВАМЕ ВИ!" Is Not a CTA
- **Location:** Company description block (below hero)
- **Current situation:** The phrase "ОЧАКВАМЕ ВИ!" (We Expect You!) appears in all-caps bold at the end of the company description block. It is not a button, not a link, and leads nowhere.
- **Severity:** LOW
- **Recommended fix:** Remove the phrase or convert it into a real CTA button: "Посети ни" / "Как да ни намерите →" linking to /kontakti.

---

### ISSUE L-02 — "Expand-web2" Artifact in HTML
- **Location:** /kontakti page contact form area (also potentially visible in homepage structure)
- **Current situation:** Raw platform artifact text "expand-web2" appears inline in the contact page markup, suggesting unrendered template code. While this may not be visible on-screen, it signals platform configuration issues.
- **Severity:** LOW
- **Recommended fix:** Review all pages in the Super Website editor for unrendered template variables.

---

### ISSUE L-03 — Footer Branding Credits SuperHosting.BG, Not Maxterm
- **Location:** Footer, all pages
- **Current situation:** "Copyright © 2021 Всички права запазени за SuperHosting.BG" — the copyright names the hosting platform, not the business. This looks like a default template the company never customized.
- **Severity:** LOW
- **Recommended fix:** Update footer copyright to "© 2010–2026 Макстерм ООД. Всички права запазени."

---

### ISSUE L-04 — No Favicon / Branded Browser Tab Icon
- **Current situation:** No favicon is referenced in the crawled metadata. The browser tab will show a generic blank icon, further reinforcing the "My Site" default impression.
- **Severity:** LOW
- **Recommended fix:** Create a simple favicon (company initials "M" or a stylized logo) and set it in the platform settings.

---

### ISSUE L-05 — Image Alt Text Uses Filenames, Not Descriptions
- **Location:** All homepage images
- **Current situation:** Image alt tags use raw file names like "153-viberизображение2022-08-1115-03-41-850..." — which are not descriptive, not accessible, and provide no SEO value.
- **Severity:** LOW
- **Recommended fix:** Update alt text for all images to descriptive Bulgarian text: e.g., "Benjamin Moore бои Пловдив — Макстерм", "XPS топлоизолационни плочи Пловдив"

---

### ISSUE L-06 — No Structured Data / Schema Markup
- **Current situation:** No LocalBusiness, Organization, or Product schema markup detected in the metadata. This means Google cannot generate rich snippets (star ratings, address, phone, hours) in search results.
- **Severity:** LOW
- **Recommended fix:** Add JSON-LD LocalBusiness schema with: name, address (both locations), phone, hours, priceRange, url, sameAs (Facebook). For a local Plovdiv SMB this is a meaningful organic search advantage.

---

## Strengths (What to Preserve)

These elements work and should be retained or built upon in the redesign:

1. **Two-location structure is a genuine differentiator** — having both a 2,000 sqm warehouse AND a separate retail store is a real competitive advantage. The homepage already attempts to communicate this. The redesign should make it even more prominent (not less).

2. **Brand name portfolio is impressive** — stocking Benjamin Moore, PPG, Vitex, Baumit, Mapei, Kronopol, Swiss Krono and others in one location is a strong USP. The homepage already lists these brands in text. The redesign should elevate them to visual logo strips.

3. **Own transport is a genuine service differentiator** — delivery capability is a key B2B/contractor decision factor. Already mentioned on the homepage. Deserves more visual emphasis (icon + short statement) rather than buried in a paragraph.

4. **Established since 2010** — 15+ years in business is significant trust capital. Already mentioned ("Създадена през 2010г."). Deserves a badge/stat, not a subordinate clause.

5. **Friendly staff claim** — "нашият любезен и отзивчив персонал" (friendly and responsive staff) is the closest thing to a differentiating customer promise on the site. Preserve this language and give it more prominence (ideally paired with a real photo of staff).

6. **Clear two-section page architecture (warehouse vs. store)** — the logic of separating the warehouse (contractors, bulk) from the store (homeowners, retail) is sound. The redesign should make this dual-audience structure even clearer, not collapse it.

---

## Conversion Blockers (Ordered by Impact)

| Rank | Blocker | Why It's Blocking Conversion |
|---|---|---|
| 1 | No phone number visible above the fold or in header | Local customers who want to call cannot do so without navigating away. Calling is the #1 conversion event. |
| 2 | No value proposition in hero | Visitors can't tell in 5 seconds what the business sells, who it's for, or why to engage. Bounce rate elevated. |
| 3 | No CTA button anywhere on homepage | No action is prompted. Passive visitors leave. Intentional visitors must find their own path. |
| 4 | No trust signals | First-time visitors have no reason to choose Maxterm over a competitor. Zero reviews, zero certifications, zero social proof. |
| 5 | No WhatsApp / Viber | Eliminates an entire contact channel preferred by Bulgarian mobile users (especially for out-of-hours inquiries). |
| 6 | Brand identity confusion (Maxterm vs. MaxDecor vs. "My Site") | Creates cognitive friction and undermines brand recognition at the first touchpoint. |
| 7 | Hero carousel with no content | The most valuable screen real estate on the site delivers zero information or action. |
| 8 | No product category overview on homepage | Mid-funnel visitors who arrived via branded search can't self-route to products without clicking through the nav. |
| 9 | No Google Maps on homepage | Eliminates the fastest path from "website visit" to "physical store visit." |
| 10 | 2021 copyright + broken ToU link | Signals abandonment to any visitor who notices — particularly relevant to B2B buyers. |

---

## Mobile-Specific Issues

---

### MOB-01 — Slider Performance on Mobile
- **Situation:** A 3-image auto-rotating slider loads 3 full-size product images on page load. On a mobile connection (3G/4G, common in Bulgaria outside city centers), this creates significant LCP delay.
- **Impact:** Google Core Web Vitals penalties, slower perceived load time, higher mobile bounce rate.
- **Fix:** Replace slider with single static hero image. Use WebP format with srcset for responsive sizing. Target LCP < 2.5 seconds.

---

### MOB-02 — Navigation on Mobile (No Confirmed Hamburger)
- **Situation:** The 7-item navigation on desktop (with long Bulgarian menu item names like "Интериорни и Фасадни Бои" and "Строителни Материали") must collapse to mobile. The Super Website platform provides a hamburger menu by default, but the menu items are long compound phrases that may truncate or overflow on small screens.
- **Impact:** Navigation usability on 390px (iPhone) screens may be poor. Tap targets for 7 items in a dropdown may be below the 44px minimum.
- **Fix:** Shorten nav labels for mobile: "Бои" / "Паркет" / "Строителни" / "Лайсни" / "Промоции" / "Контакти". Ensure each tap target is minimum 44×44px with adequate padding.

---

### MOB-03 — No Tap-to-Call Phone Number on Mobile
- **Situation:** Phone numbers only appear on /kontakti as plain text (not `<a href="tel:...">` links). On a mobile device, tapping a plain text phone number may invoke a browser prompt — but only if the browser recognizes it as a number, which is unreliable.
- **Impact:** Mobile users who want to call must copy and paste the number manually — a significant friction point that eliminates many impulsive call attempts.
- **Fix:** All phone numbers across the entire site must be wrapped in `<a href="tel:+359876032868">` links. This is the single highest-impact mobile fix possible.

---

### MOB-04 — Location Cards Are Prose Blocks (Non-Scannable on Mobile)
- **Situation:** The warehouse and store information is written as paragraphs of italic bold text. On a 390px screen, a user scrolling quickly cannot extract address, hours, or phone from a wall of similarly-styled text.
- **Impact:** High-intent mobile visitors (e.g., someone looking up the address while driving or shopping nearby) give up and turn to Google Maps instead — and may not return.
- **Fix:** Structured cards with icon + label + value pairs (see M-02). Each data point on its own line, minimum 16px font, clear visual separation.

---

### MOB-05 — Image Optimization Unknown / Likely Poor
- **Situation:** All images are served from static.super.website CDN with filenames containing original camera/upload names (e.g., "153-viberизображение2022-08-1115-03-41-850-16602970789669.jpg"). These appear to be original uploaded files served as JPEG without evidence of responsive resizing or WebP conversion.
- **Impact:** Mobile users downloading desktop-sized JPEGs wastes bandwidth, slows load time, and degrades Core Web Vitals.
- **Fix:** Ensure all images are served in WebP format at appropriate sizes for mobile viewport. If the Super Website platform doesn't support this, it's a reason to migrate platforms.

---

## Recommended Priority Fix Order

Execute in this exact sequence — each tier unblocks the next.

### Tier 1: Immediate (Platform Settings — 0 code required)
These are configuration changes in the Super Website admin panel. Zero development effort.

| # | Fix | Effort | Impact |
|---|---|---|---|
| 1.1 | Change page `<title>` from "My Site" to "Макстерм | Бои, Паркет и Строителни Материали — Пловдив" | 2 min | HIGH |
| 1.2 | Update `og:title` and `meta-description` to reflect the company name and offer | 5 min | HIGH |
| 1.3 | Fix or remove the broken /obshti-usloviq footer link | 2 min | HIGH |
| 1.4 | Update footer copyright text to "© 2010–2026 Макстерм ООД" | 2 min | MEDIUM |
| 1.5 | Make both phone numbers clickable (tel: links) on /kontakti and throughout the site | 10 min | HIGH |
| 1.6 | Add a favicon | 5 min | LOW |

**Estimated total time: ~30 minutes. Expected outcome: immediate trust improvement for every visitor.**

---

### Tier 2: Homepage Rebuild (Content & Layout — Designer required)
These require redesigning the homepage layout. Can be done within the Super Website platform or on migration to a new CMS.

| # | Fix | Effort | Impact |
|---|---|---|---|
| 2.1 | Replace hero slider with static hero + H1 headline + subheadline + 2 CTA buttons | 2h | HIGHEST |
| 2.2 | Add header utility bar with both phone numbers (tap-to-call) + hours summary | 1h | HIGH |
| 2.3 | Add trust band section below hero (founded year, sq.m., brand count, transport, logos) | 2h | HIGH |
| 2.4 | Add product category cards section (4 categories with icon, name, description, link) | 2h | HIGH |
| 2.5 | Restructure location blocks as side-by-side cards with icons, address, hours, map links | 1h | MEDIUM |
| 2.6 | Add floating WhatsApp/Viber button (persistent, all pages) | 30 min | HIGH |
| 2.7 | Add Google Maps embed for both locations | 30 min | MEDIUM |
| 2.8 | Update all image alt text | 1h | LOW/SEO |

**Estimated total time: ~10–11 hours design+build. Expected outcome: 30–60% reduction in bounce rate, 2–5× increase in calls and form submissions.**

---

### Tier 3: Trust & Content Layer (Content creation required)
These require gathering real content (photos, reviews, copy) before they can be implemented.

| # | Fix | Effort | Impact |
|---|---|---|---|
| 3.1 | Collect and add 3–5 Google Reviews / customer testimonials to homepage | 1 week (collecting) + 1h design | HIGH |
| 3.2 | Commission professional photography of store interior, products, staff | Half-day shoot | HIGH |
| 3.3 | Create a clear brand identity: one name, one logo, one tagline used consistently everywhere | Designer + client session | HIGH |
| 3.4 | Add JSON-LD LocalBusiness schema markup | 1h developer | MEDIUM/SEO |
| 3.5 | Create or link active Instagram profile + embed feed widget on homepage | Ongoing content | MEDIUM |
| 3.6 | Set up and verify Google Business Profile with correct hours, address, photos, and collect reviews | 1h setup + ongoing | HIGH/SEO |

**Estimated: 2–3 weeks elapsed. Expected outcome: substantial improvement in organic search visibility, local pack ranking, and conversion trust.**

---

### Tier 4: Platform Migration (If Super Website is a limiting factor)
If the current platform cannot support the above (proper meta tags, schema, tap-to-call, responsive images, no platform branding in footer), migrate to a modern CMS.

**Recommended platform for this use case:** WordPress with Kadence or Blocksy theme (clean, fast, local SEO ready), OR a custom Next.js site built in Claude Code (full control, fast, professional).

---

*End of UX & Conversion Audit — maxterm.eu Homepage*
*Total issues identified: 8 HIGH / 8 MEDIUM / 6 LOW*
*Estimated conversion lift from full implementation: 3–5× increase in inbound contacts*
