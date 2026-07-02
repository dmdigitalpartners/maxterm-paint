import type { Metadata } from 'next'
import { Percent } from 'lucide-react'
import { ComingSoon } from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Промоции — Скоро | Макстерм',
  description: 'Страницата с промоции очаквайте съвсем скоро.',
}

export default function PromotionsPage() {
  return (
    <ComingSoon
      eyebrow="Промоции"
      heading="Пазарим се с доставчиците за Вас"
      description="Страницата с актуални отстъпки и промоции е в процес на договаряне."
      icon={Percent}
    />
  )
}
