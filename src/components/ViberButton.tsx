import Image from 'next/image'
import { CONTACT } from '@/lib/content'

export function ViberButton() {
  return (
    <a
      href={`viber://chat?number=+359${CONTACT.store.phone.replace(/\D/g, '').slice(1)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Пишете ни в Viber"
      title="Пишете ни в Viber"
      className="fixed z-40 w-14 h-14 rounded-full overflow-hidden hover:scale-110 active:scale-100 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7360F2]"
      style={{
        bottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))',
        right: '2rem',
        boxShadow: '0 0 18px rgba(115,96,242,0.45), 0 4px 16px rgba(0,0,0,0.18)',
      }}
    >
      <Image
        src="/assets/icons/viber-icon.png"
        alt="Viber"
        fill
        sizes="56px"
        className="object-cover"
      />
    </a>
  )
}
