import React from 'react'
import { Users, ShieldCheck, Truck, Compass } from 'lucide-react'
import { WHY_US } from '@/lib/content'

const ICON_MAP = { Users, ShieldCheck, Truck, Compass } as const
type IconName = keyof typeof ICON_MAP

function FeatureCell({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  const Icon = ICON_MAP[icon as IconName] ?? Users

  return (
    <div className="flex flex-col items-center text-center gap-4 px-8 lg:px-10 py-8 lg:py-10">
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
        <Icon size={30} className="text-accent" aria-hidden="true" />
      </div>
      <h3 className="font-display font-bold text-lg lg:text-xl text-white leading-snug">
        {title}
      </h3>
      <p className="text-white/75 text-sm lg:text-base leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  )
}

export function WhyUs() {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="bg-primary py-16 lg:py-24"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Защо клиентите се връщат
          </p>
          <h2
            id="why-us-heading"
            className="font-display font-bold text-2xl sm:text-3xl lg:text-[40px] text-white leading-tight"
          >
            {WHY_US.sectionTitle}
            <br className="hidden lg:block" />
            {' '}{WHY_US.sectionTitleLine2}
          </h2>
          <p className="text-white/65 text-base lg:text-lg mt-4 max-w-xl mx-auto">
            {WHY_US.sectionSubtitle}
          </p>
        </div>

        {/* Feature grid with elegant separators */}
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr]">
          {WHY_US.items.map((item, i) => (
            <React.Fragment key={item.title}>
              <FeatureCell {...item} />
              {i < WHY_US.items.length - 1 && (
                <div
                  className="hidden lg:flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-px bg-white/15 self-stretch my-10" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
