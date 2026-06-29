import { Clock, Award, Truck, Users } from 'lucide-react'
import { WHY_US } from '@/lib/content'

const ICON_MAP = { Clock, Award, Truck, Users } as const
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
  const Icon = ICON_MAP[icon as IconName] ?? Clock

  return (
    <div
      className="flex flex-col items-center text-center gap-3 px-4 pt-2 pb-4 lg:pb-6"
    >
      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
        <Icon size={28} className="text-accent" aria-hidden="true" />
      </div>
      <h3 className="font-display font-bold text-lg lg:text-xl text-white leading-snug">
        {title}
      </h3>
      <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-[240px]">
        {description}
      </p>
    </div>
  )
}

export function WhyUs() {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="bg-primary py-10 lg:py-14"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-4 lg:mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            Нашите предимства
          </p>
          <h2
            id="why-us-heading"
            className="font-display font-bold text-2xl sm:text-3xl lg:text-[40px] text-white leading-tight"
          >
            {WHY_US.sectionTitle}
          </h2>
          <p className="text-white/70 text-base lg:text-lg mt-3 max-w-xl mx-auto">
            {WHY_US.sectionSubtitle}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-0 lg:divide-x divide-white/10">
          {WHY_US.items.map((item) => (
            <FeatureCell
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
