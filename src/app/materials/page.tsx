import type { Metadata } from 'next'
import { HardHat } from 'lucide-react'
import { ComingSoon } from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Строителни Материали — Скоро | Макстерм',
  description: 'Каталогът със строителни материали очаквайте съвсем скоро.',
}

export default function BuildingMaterialsPage() {
  return (
    <ComingSoon
      eyebrow="Каталог Строителни Материали"
      heading="Тази страница все още е в изработка"
      icon={HardHat}
    />
  )
}
