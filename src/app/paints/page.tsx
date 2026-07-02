import type { Metadata } from 'next'
import { PaintRoller } from 'lucide-react'
import { ComingSoon } from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Бои — Скоро | Макстерм',
  description: 'Каталогът с интериорни и фасадни бои очаквайте съвсем скоро.',
}

export default function PaintsPage() {
  return (
    <ComingSoon
      eyebrow="Каталог Бои"
      heading="Тази страница все още е в изработка"
      icon={PaintRoller}
    />
  )
}
