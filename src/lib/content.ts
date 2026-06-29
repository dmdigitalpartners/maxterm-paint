// ─── HERO ─────────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md + homepage-blueprint.md
export const HERO = {
  headline: 'Всичко за Вашия Ремонт — на едно място в Пловдив',
  subheadline:
    'Официален представител на Benjamin Moore, PPG, Baumit, Mapei и над 20 водещи марки. Два обекта в Пловдив с наш транспорт.',
  ctaPrimaryLabel: 'Обади се: 0876 032868',
  ctaPrimaryHref: 'tel:+359876032868',
  ctaSecondaryLabel: 'Разгледай продуктите',
  ctaSecondaryHref: '/paints',
  imageAlt: 'Интериор на магазин Макстерм с бои Benjamin Moore и ламинирани подове',
} as const

// ─── BUSINESS ─────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md
export const BUSINESS = {
  name: 'Макстерм ООД',
  nameEn: 'Maxterm OOD',
  tagline: 'Бои, Паркет и Строителни Материали',
  city: 'Пловдив',
  website: 'https://www.maxterm.eu',
  facebook: 'https://www.facebook.com/MaxtermOOD',
  email: {
    primary: 'office@maxterm.eu',
    secondary: 'maxterm@abv.bg',
  },
} as const

// ─── CONTACT ──────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md
export const CONTACT = {
  warehouse: {
    name: 'Складова База Макстерм',
    address: 'Захаридово, Пловдив',
    phone: '0876 032868',
    phoneHref: 'tel:+359876032868',
    hours: {
      weekdays: 'Понеделник – Петък: 08:00 – 17:30',
      saturday: 'Събота: 09:00 – 14:00',
      sunday: 'Неделя: Затворено',
    },
  },
  store: {
    name: 'Магазин MaxDecor',
    address: 'бул. „Марица" 115, Тракия, Пловдив',
    phone: '0893 305306',
    phoneHref: 'tel:+359893305306',
    hours: {
      weekdays: 'Понеделник – Петък: 09:00 – 18:00',
      saturday: 'Събота: 10:00 – 15:00',
      sunday: 'Неделя: Затворено',
    },
  },
} as const

// ─── TRUST BAR ────────────────────────────────────────────────────────────────
// TODO: verify exact numbers with business owner before going live
export const TRUST_BAR = {
  stats: [
    { value: '20+', label: 'водещи марки' },
    { value: '2', label: 'обекта в Пловдив' },
    { value: '15+', label: 'години опит' },
    { value: '1', label: 'ден доставка' },
  ],
} as const

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
// TODO: populate with real category images and hrefs in Session 2
export const CATEGORIES = {
  sectionTitle: 'Открийте нашите продукти',
  sectionSubtitle: 'От декоративни бои до ламинирани подове — всичко на едно място',
  items: [] as Array<{
    title: string
    description: string
    image: string
    alt: string
    href: string
  }>,
} as const

// ─── BRANDS ───────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md
// ⚠️ BRANDS TO ADD — confirmed from store signage photo (not yet in BI report):
// - Nirlat (visible on exterior sign, right side)
// - V-TAC (LED lighting, visible in store window)
// Source logos before adding to the showcase section
export const BRANDS = {
  sectionTitle: 'Официален представител на водещи световни марки',
  logos: [] as Array<{ name: string; file: string; alt: string }>,
} as const

// ─── LOCATIONS ────────────────────────────────────────────────────────────────
// TODO: populate in Session 2 — uses CONTACT data + warehouse/store images
export const LOCATIONS = {
  sectionTitle: 'Намерете ни в Пловдив',
  sectionSubtitle: 'Два обекта на ваше разположение',
} as const

// ─── WHY US ───────────────────────────────────────────────────────────────────
// TODO: populate in Session 2
export const WHY_US = {
  sectionTitle: 'Защо да изберете Макстерм?',
  items: [] as Array<{ icon: string; title: string; description: string }>,
} as const

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
// TODO: populate in Session 2
export const FINAL_CTA = {
  headline: 'Готови да започнете ремонта?',
  subheadline: 'Свържете се с нас за безплатна консултация',
  ctaLabel: 'Обади се сега',
  ctaHref: 'tel:+359876032868',
} as const

// ─── SOCIAL PROOF ─────────────────────────────────────────────────────────────
// Source: Google Maps reviews (all 5-star, public)
// Last scraped: June 2026
// Featured reviews: first 4 items shown on homepage Section 7
export const SOCIAL_PROOF = {
  sectionTitle: 'Клиентите за нас',
  googleMapsUrl: 'https://maps.app.goo.gl/YOUR_SHORTLINK', // TODO: add shortlink from Google Business
  maps: {
    store: {
      label: 'Магазин MaxDecor — Тракия',
      embedSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d739.6395047757408!2d24.7918827!3d42.13834430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd13931593b01%3A0x6f18c717095a0df6!2zQmVuamFtaW4gTW9vcmUg0JzQsNC60YEg0JTQtdC60L7RgA!5e0!3m2!1sen!2sbg!4v1782709941992!5m2!1sen!2sbg',
    },
    warehouse: {
      label: 'Складова База Макстерм — Захаридово',
      embedSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.6454691072636!2d24.70363287698714!3d42.09364505189013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd13947d975c3%3A0xb1beee1f4c16c867!2z0JzQkNCa0KHQotCV0KDQnCDQntCe0JQgLyBNQVhURVJNIExURA!5e0!3m2!1sen!2sbg!4v1782710132249!5m2!1sen!2sbg',
    },
  },
  featured: [
    {
      id: 'nikolay-z',
      name: 'Nikolay Zhelyazkov',
      badge: null as null | string,
      rating: 5,
      ageLabel: 'преди месец',
      text: 'Много добър екип. Учтиви хора. Хубави бои и материали!',
    },
    {
      id: 'atanas-a',
      name: 'Atanas Atanasov',
      badge: 'Local Guide' as null | string,
      rating: 5,
      ageLabel: 'преди 4 месеца',
      text: 'Невероятен професионализъм и компетентно мнение по зададената поръчка! Любезен персонал, препоръчвам магазина!',
    },
    {
      id: 'simeon-g',
      name: 'Simeon Georgiev',
      badge: 'Local Guide' as null | string,
      rating: 5,
      ageLabel: 'преди 11 месеца',
      text: 'Най-добрите! Получих много съвети, най-добрия латекс и ламинат, и с помощта на отзивчивите хора в магазина спестих пари от майстори.',
    },
    {
      id: 'tanya-i',
      name: 'Таня Иванова',
      badge: 'Local Guide' as null | string,
      rating: 5,
      ageLabel: 'преди 3 години',
      text: 'Огромно разнообразие от паркети, бои, мазилки. Изключително любезен и компетентен персонал.',
    },
  ],
} as const
