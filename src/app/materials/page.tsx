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
      heading="Основите на тази страница се изливат"
      description="Каталогът с изолации, замазки и лепила от Baumit, Mapei и Ceresit се строи с всеки ден."
      icon={HardHat}
    />
  )
}
