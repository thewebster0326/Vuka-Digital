interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand-green">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="text-base text-white/70 sm:text-lg">{description}</p>}
    </div>
  )
}
