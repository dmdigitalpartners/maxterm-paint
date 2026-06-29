import { Montserrat, Inter } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})
