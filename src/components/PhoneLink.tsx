import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PhoneLinkProps {
  phone: string
  href: string
  className?: string
  ariaLabel?: string
  size?: number
}

export function PhoneLink({
  phone,
  href,
  className,
  ariaLabel,
  size = 20,
}: PhoneLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel ?? `Обади се на ${phone}`}
      className={cn(
        'inline-flex items-center gap-2 font-medium',
        'text-accent hover:underline',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm',
        'transition-opacity duration-150 active:opacity-70',
        className
      )}
    >
      <Phone size={size} aria-hidden="true" />
      {phone}
    </a>
  )
}
