import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-accent text-white hover:bg-accent/90 active:scale-[0.97] focus-visible:ring-accent',
  secondary:
    'bg-primary text-white hover:bg-primary/90 active:scale-[0.97] focus-visible:ring-white',
  outline:
    'border-2 border-primary text-primary bg-transparent hover:bg-primary/5 active:bg-primary/10 focus-visible:ring-primary',
  ghost:
    'text-accent hover:underline active:opacity-70 focus-visible:ring-accent',
}

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'text-sm py-2 px-5 min-h-[40px]',
  md: 'text-base py-3 px-7 min-h-[48px]',
  lg: 'text-lg py-4 px-8 min-h-[56px]',
}

export function Button({
  variant,
  size = 'md',
  href,
  onClick,
  children,
  className,
  fullWidth,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-medium rounded-md',
    'transition-transform duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
