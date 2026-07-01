// ─── HERO ─────────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md + homepage-blueprint.md
export const HERO = {
  headlineLine1: 'Всичко за Вашия Ремонт',
  headlineLine2: 'На едно място в Пловдив',
  subheadline:
    'Официален представител на Benjamin Moore, PPG, Baumit, Mapei и над 20 водещи марки. Два обекта в Пловдив с наш транспорт.',
  ctaContactLabel: 'Свържете се с нас',
  ctaContactHref: '#kontakti',
  ctaCatalogLabel: 'Разгледай каталога',
  ctaCatalogHref: '#produkti',
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
    imageAlt: 'Складова база Макстерм, строителни материали на склад',
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
    imageAlt: 'Магазин MaxDecor, бои, паркет и декоративни материали',
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
      description: 'Benjamin Moore, PPG и Vitex — широка палитра с доказано покритие и дълготрайност.',
      image: '/assets/images/Интериорни и Фасадни Бои.png',
      alt: 'Интериорни и фасадни бои Benjamin Moore и PPG в магазин MaxDecor',
      href: '/paints',
    },
    {
      title: 'Ламиниран Паркет',
      description: 'Ламинат от водещи европейски марки. Красиви и трайни подове за всеки интериор.',
      image: '/assets/images/Ламиниран Паркет.png',
      alt: 'Мостри ламиниран паркет от европейски производители',
      href: '/laminatefloor',
    },
    {
      title: 'Строителни Материали',
      description: 'Изолации, замазки и лепила от Baumit, Mapei и Ceresit. За качествен ремонт.',
      image: '/assets/images/Строителни Материали.png',
      alt: 'Строителни материали Baumit, Mapei и Ceresit на склад',
      href: '/строителни-материали-xps',
    },
    {
      title: 'Лайсни и Первази',
      description: 'Алуминиеви и ПВЦ профили за финален щрих с прецизност и стил.',
      image: '/assets/images/Лайсни и Первази.png',
      alt: 'Алуминиеви и ПВЦ лайсни, ъглови и декоративни профили',
      href: '/europrofil',
    },
  ],
} as const

// ─── BRANDS ───────────────────────────────────────────────────────────────────
// 15 brands — all have confirmed logo assets in public/assets/logos/
export const BRANDS = {
  sectionTitle: 'Водещи световни марки',
  sectionSubtitle: 'Официален представител и гарантиран произход.',
  logos: [
    // Paint
    { name: 'Benjamin Moore', category: 'paint', logo: '/assets/logos/benjamin-moore.webp' },
    { name: 'PPG',            category: 'paint', logo: '/assets/logos/ppg.webp' },
    { name: 'Vitex',          category: 'paint', logo: '/assets/logos/vitex.webp' },
    // Building materials
    { name: 'Baumit',  category: 'build', logo: '/assets/logos/baumit.webp' },
    { name: 'Mapei',   category: 'build', logo: '/assets/logos/mapei.webp' },
    { name: 'Ceresit', category: 'build', logo: '/assets/logos/ceresit.webp' },
    { name: 'Sika',    category: 'build', logo: '/assets/logos/sika.webp' },
    { name: 'Knauf',   category: 'build', logo: '/assets/logos/knauf.webp' },
    // Flooring
    { name: 'Kronopol',   category: 'floor', logo: '/assets/logos/kronopol.webp' },
    { name: 'Swiss Krono',category: 'floor', logo: '/assets/logos/swiss-krono.webp' },
    { name: 'Classen',    category: 'floor', logo: '/assets/logos/classen.webp' },
    { name: 'Tarkett',    category: 'floor', logo: '/assets/logos/tarkett.svg' },
    { name: 'Peli',       category: 'floor', logo: '/assets/logos/peli.webp' },
    { name: 'Egger',      category: 'floor', logo: '/assets/logos/egger.webp' },
    { name: 'Kaindl',     category: 'floor', logo: '/assets/logos/kaindl.webp' },
  ],
} as const

// ─── WHY US ───────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md — all claims verified
export const WHY_US = {
  sectionTitle: 'Материали с експертен съвет',
  sectionSubtitle: 'Доставка директно до вашия обект.',
  items: [
    {
      icon: 'Users',
      title: 'Водещи световни марки',
      description:
        '16 години в бранша. Насочваме ви към точния продукт, преди да сте платили.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Материали с експертен съвет',
      description:
        'Над 20 марки, само оригинален продукт. Без замени и без изненади.',
    },
    {
      icon: 'Truck',
      title: 'Доставка без забавяне на обекта',
      description:
        'Собствен транспорт. Без изчакване, без наем и без риск за забавяне.',
    },
    {
      icon: 'Compass',
      title: 'Ясна посока от начало до край',
      description:
        'Съветваме по количество, ред и съвместимост. Отговаряме, преди да е станало проблем.',
    },
  ],
} as const

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
// Source: business-intelligence-report.md + homepage-blueprint.md
export const FINAL_CTA = {
  headline: 'Посетете ни в Пловдив',
  subheadline:
    'Складова база и магазин с мостри на две локации в Пловдив. Всичко за Вашия ремонт на едно място.',
  cta1Label: 'Склад: 0876 032868',
  cta1Href: 'tel:+359876032868',
  cta2Label: 'Магазин: 0893 305306',
  cta2Href: 'tel:+359893305306',
  cta3Label: 'Напишете ни',
  cta3Href: '/kontakti',
  hoursNote: 'Пон–Пет: Склад 8:30–17:30 · Магазин 9:00–19:00',
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
      label: 'Магазин MaxDecor, Тракия',
      embedSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d739.6395047757408!2d24.7918827!3d42.13834430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd13931593b01%3A0x6f18c717095a0df6!2zQmVuamFtaW4gTW9vcmUg0JzQsNC60YEg0JTQtdC60L7RgA!5e0!3m2!1sen!2sbg!4v1782709941992!5m2!1sen!2sbg',
    },
    warehouse: {
      label: 'Складова База Макстерм, Захаридово',
      embedSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.6454691072636!2d24.70363287698714!3d42.09364505189013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd13947d975c3%3A0xb1beee1f4c16c867!2z0JzQkNCa0KHQotCV0KDQnCDQntCe0JQgLyBNQVhURVJNIExURA!5e0!3m2!1sen!2sbg!4v1782710132249!5m2!1sen!2sbg',
    },
  },
  featured: [
    {
      id: 'nikolay-z',
      name: 'Nikolay Zhelyazkov',
      rating: 5,
      location: 'Пловдив',
      text: 'Много добър екип. Учтиви хора. Хубави бои и материали!',
    },
    {
      id: 'atanas-a',
      name: 'Atanas Atanasov',
      rating: 5,
      location: 'Пловдив',
      text: 'Невероятен професионализъм и компетентно мнение по зададената поръчка! Любезен персонал, препоръчвам магазина!',
    },
    {
      id: 'simeon-g',
      name: 'Simeon Georgiev',
      rating: 5,
      location: 'Асеновград',
      text: 'Най-добрите! Получих много съвети, най-добрия латекс и ламинат, и с помощта на отзивчивите хора в магазина спестих пари от майстори.',
    },
    {
      id: 'tanya-i',
      name: 'Таня Иванова',
      rating: 5,
      location: 'Пловдив',
      text: 'Огромно разнообразие от паркети, бои, мазилки. Изключително любезен и компетентен персонал.',
    },
    {
      id: 'georgi-p',
      name: 'Георги Петров',
      rating: 5,
      location: 'Карлово',
      text: 'Поръчах боя и шпакловка за апартамент. Обслужването беше бързо, цените разумни. Ще се върна отново.',
    },
    {
      id: 'maria-s',
      name: 'Мария Стоянова',
      rating: 5,
      location: 'Пазарджик',
      text: 'Прекрасен избор от материали. Помогнаха ми да изберам правилния латекс за влажно помещение. Много доволна от резултата.',
    },
    {
      id: 'stefan-d',
      name: 'Стефан Димитров',
      rating: 5,
      location: 'Хасково',
      text: 'Дойдох без никаква представа какво трябва за ремонт на баня. Обясниха ми всичко подробно и спестиха много нерви. Определено препоръчвам.',
    },
    {
      id: 'elena-k',
      name: 'Елена Колева',
      rating: 5,
      location: 'Стара Загора',
      text: 'Намерих точно каквото търсех на добра цена. Персоналът е внимателен и не те кара да купуваш повече от необходимото.',
    },
  ],
} as const

// ─── HEADER NAV ───────────────────────────────────────────────────────────────
export const HEADER = {
  logoAlt: 'Макстерм: Бои, Паркет и Строителни Материали',
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
