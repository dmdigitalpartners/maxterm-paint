import type { Metadata } from 'next'
import { montserrat, inter } from '@/lib/fonts'
import { Header } from '@/sections/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Макстерм — Бои, Паркет и Строителни Материали в Пловдив',
  description:
    'Официален представител на Benjamin Moore, PPG, Baumit, Mapei и 20+ марки. Два обекта в Пловдив с наш транспорт. Безплатна консултация.',
  openGraph: {
    title: 'Макстерм — Бои, Паркет и Строителни Материали в Пловдив',
    description:
      'Официален представител на Benjamin Moore, PPG, Baumit, Mapei и 20+ марки. Два обекта в Пловдив с наш транспорт.',
    url: 'https://www.maxterm.eu',
    siteName: 'Макстерм ООД',
    locale: 'bg_BG',
    type: 'website',
  },
  appleWebApp: { title: 'Макстерм' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:font-medium focus:shadow-lg"
        >
          Към основното съдържание
        </a>
        <Header />
        {children}
      </body>
    </html>
  )
}
