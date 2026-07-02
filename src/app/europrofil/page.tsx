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
      heading="Тази страница все още е в изработка"
      icon={Ruler}
    />
  )
}
