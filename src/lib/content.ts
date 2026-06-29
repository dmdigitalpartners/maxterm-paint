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
  tagline: 'Всичко за Вашия Ремонт',
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
    address: 'ул. Захаридово 46А, гр. Пловдив',
    phone: '0876 032868',
    phoneHref: 'tel:+359876032868',
    mapsHref: 'https://maps.google.com/?q=ул.+Захаридово+46А,+Пловдив',
    image: '/assets/images/warehouse-interior.png',
    imageAlt: 'Складова база Макстерм — строителни материали на склад',
    badge: 'Склад',
    highlight: '2 000 кв.м. | Собствен транспорт',
    products: 'XPS · EPS · Baumit · Mapei · Technogips Pro',
    hours: {
      weekdays: 'Пон–Пет: 08:30–17:30',
      saturday: 'Събота: 08:30–13:30',
      sunday: 'Неделя: Почивен ден',
    },
  },
  store: {
    name: 'Магазин MaxDecor',
    address: 'бул. Освобождение 39, ж.к. Тракия, Пловдив',
    phone: '0893 305306',
    phoneHref: 'tel:+359893305306',
    mapsHref: 'https://maps.google.com/?q=бул.+Освобождение+39,+Тракия,+Пловдив',
    image: '/assets/images/shop-interior.png',
    imageAlt: 'Магазин MaxDecor — бои, паркет и декоративни материали',
    badge: 'Магазин',
    highlight: 'Мостри налични',
    products: 'Бои · Паркет · Декор · Лайсни · Мазилки',
    hours: {
      weekdays: 'Пон–Пет: 09:00–19:00',
      saturday: 'Събота: 10:00–16:00',
      sunday: 'Неделя: Почивен ден',
    },
  },
} as const

// ─── TRUST BAR ────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md — all figures verified
export const TRUST_BAR = {
  stats: [
    { value: '2010', label: 'година основаване', icon: 'Building2' },
    { value: '16', label: 'години опит', icon: 'Star' },
    { value: '2000', label: 'кв.м. склад', icon: 'Warehouse' },
    { value: '22', label: 'водещи марки', icon: 'Tag' },
    { value: 'Собствен', label: 'транспорт', icon: 'Truck' },
  ],
} as const

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md + homepage-blueprint.md
export const CATEGORIES = {
  sectionTitle: 'Нашите Продукти',
  sectionSubtitle: 'Изберете категория и намерете точно това, от което се нуждаете',
  items: [
    {
      title: 'Интериорни и Фасадни Бои',
      description: 'Benjamin Moore, PPG, Vitex, Colorstyle — над 6 000 цвята',
      image: '/assets/images/shop-interior.png',
      alt: 'Рафтове с бои и декоративни материали в магазин MaxDecor',
      href: '/paints',
    },
    {
      title: 'Ламиниран Паркет',
      description: 'Kronopol, Swiss Krono, Tarkett, Classen — мостри в двата обекта',
      image: '/assets/images/store-tools.png',
      alt: 'Мостри от ламиниран паркет и инструменти в магазина',
      href: '/laminatefloor',
    },
    {
      title: 'Строителни Материали',
      description: 'XPS, EPS, Baumit, Mapei, Technogips Pro, хидроизолации и още',
      image: '/assets/images/warehouse-interior.png',
      alt: 'Строителни материали и изолация в складовата база Макстерм',
      href: '/строителни-материали-xps',
    },
    {
      title: 'Лайсни и Первази',
      description: 'Алуминиеви, ПВЦ и МДФ лайсни — перфектен завършек за всяка настилка',
      image: '/assets/images/warehouse-exterior.png',
      alt: 'Алуминиеви и ПВЦ лайсни и первази за подове',
      href: '/europrofil',
    },
  ],
} as const

// ─── BRANDS ───────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md (22 confirmed brands)
// ⚠️ Logo image files are not yet available — section uses styled text badges
export const BRANDS = {
  sectionTitle: 'Официален представител на водещи световни марки',
  sectionSubtitle: 'В наши складове и магазин ще намерите продуктите на:',
  logos: [
    { name: 'Benjamin Moore', category: 'paint' },
    { name: 'PPG', category: 'paint' },
    { name: 'Vitex', category: 'paint' },
    { name: 'Colorstyle', category: 'paint' },
    { name: 'Rives', category: 'paint' },
    { name: 'Dessa Decor', category: 'paint' },
    { name: 'Baumit', category: 'build' },
    { name: 'Mapei', category: 'build' },
    { name: 'Angro', category: 'build' },
    { name: 'Technogips Pro', category: 'build' },
    { name: 'Thrakon', category: 'build' },
    { name: 'Ceresit', category: 'build' },
    { name: 'Bostik', category: 'build' },
    { name: 'Kronopol', category: 'floor' },
    { name: 'Swiss Krono', category: 'floor' },
    { name: 'Classen', category: 'floor' },
    { name: 'AGT', category: 'floor' },
    { name: 'Camsan', category: 'floor' },
    { name: 'Alsapan', category: 'floor' },
    { name: 'Tarkett', category: 'floor' },
    { name: 'Peli', category: 'floor' },
    { name: 'Nirlat', category: 'paint' },
  ],
} as const

// ─── WHY US ───────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md — all claims verified
export const WHY_US = {
  sectionTitle: 'Защо Макстерм?',
  sectionSubtitle: 'Четири причини, поради които строители и домакинства избират нас',
  items: [
    {
      icon: 'Clock',
      title: '16 Години Опит',
      description:
        'Работим от 2010 г. и познаваме нуждите на строители и домакинства в Пловдив.',
    },
    {
      icon: 'Award',
      title: 'Официален Представител',
      description:
        'Носим оригинални продукти от Benjamin Moore, PPG, Baumit, Mapei и над 20 световни марки — с гаранция за автентичност.',
    },
    {
      icon: 'Truck',
      title: 'Собствен Транспорт',
      description:
        'Доставяме материали от нашата складова база директно до Вашия обект — удобно и навреме.',
    },
    {
      icon: 'Users',
      title: 'Компетентен Персонал',
      description:
        'Нашият екип ще Ви насочи към точния материал спрямо Вашия проект, бюджет и желания.',
    },
  ],
} as const

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md + homepage-blueprint.md
export const FINAL_CTA = {
  headline: 'Посетете ни в Пловдив',
  subheadline:
    'Намерете всичко за Вашия ремонт — на едно място. Складова база и магазин с мостри.',
  cta1Label: '0876 032868 — Склад',
  cta1Href: 'tel:+359876032868',
  cta2Label: '0893 305306 — Магазин',
  cta2Href: 'tel:+359893305306',
  cta3Label: 'Напишете ни',
  cta3Href: '/kontakti',
  hoursNote: 'Пон–Пет: Склад 8:30–17:30 | Магазин 9:00–19:00',
} as const

// ─── SOCIAL PROOF ─────────────────────────────────────────────────────────────
// Source: Google Maps reviews (all 5-star, public)
// Last scraped: June 2026
export const SOCIAL_PROOF = {
  sectionTitle: 'Клиентите за нас',
  sectionSubtitle: 'Реални отзиви от Google Maps',
  // TODO: replace placeholder with real Google Business shortlink
  googleMapsUrl: 'https://maps.app.goo.gl/YOUR_SHORTLINK',
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

// ─── HEADER NAV ───────────────────────────────────────────────────────────────
export const HEADER = {
  logoAlt: 'Макстерм — Бои, Паркет и Строителни Материали',
  hoursLabel: 'Пон–Пет: 8:30–17:30',
  navItems: [
    { label: 'Бои', href: '/paints' },
    { label: 'Паркет', href: '/laminatefloor' },
    { label: 'Строителни Материали', href: '/строителни-материали-xps' },
    { label: 'Лайсни', href: '/europrofil' },
    { label: 'Промоции', href: '/promotions' },
  ],
  ctaLabel: 'Контакти',
  ctaHref: '/kontakti',
} as const

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export const FOOTER = {
  description: 'Търгуваме със строителни материали, бои, паркет и декор от 2010 г. Два обекта в Пловдив.',
  copyrightYear: '2010–2026',
  navItems: [
    { label: 'Интериорни и Фасадни Бои', href: '/paints' },
    { label: 'Ламиниран Паркет', href: '/laminatefloor' },
    { label: 'Строителни Материали', href: '/строителни-материали-xps' },
    { label: 'Лайсни и Первази', href: '/europrofil' },
    { label: 'Промоции', href: '/promotions' },
    { label: 'Контакти', href: '/kontakti' },
    { label: 'Общи Условия', href: '/terms' },
  ],
} as const
