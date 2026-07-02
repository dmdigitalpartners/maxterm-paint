import type { Metadata } from 'next'
import { Ruler } from 'lucide-react'
import { ComingSoon } from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Лайсни — Скоро | Макстерм',
  description: 'Каталогът с лайсни и первази очаквайте съвсем скоро.',
}

export default function SkirtingPage() {
  return (
    <ComingSoon
      eyebrow="Каталог Лайсни"
      heading="Довършваме последния щрих"
      description="Каталогът с алуминиеви и ПВЦ профили за финалния акцент в интериора е почти готов."
      icon={Ruler}
    />
  )
}
