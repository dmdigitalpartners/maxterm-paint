import type { Metadata } from 'next'
import { Layers } from 'lucide-react'
import { ComingSoon } from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Паркет — Скоро | Макстерм',
  description: 'Каталогът с ламиниран паркет очаквайте съвсем скоро.',
}

export default function LaminateFloorPage() {
  return (
    <ComingSoon
      eyebrow="Каталог Паркет"
      heading="Тази страница все още е в изработка"
      description="Каталогът с ламиниран паркет от водещи европейски марки се подрежда ред по ред."
      icon={Layers}
    />
  )
}
