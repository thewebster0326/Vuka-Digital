const MARQUEE_ITEMS = [
  'Web Design',
  'SEO',
  'Branding',
  'Social Media',
  'Paid Ads',
  'Marketing for SA',
  'Content Strategy',
  'Google Ads',
]

export default function MarqueeBanner() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="group relative overflow-hidden border-y border-white/10 bg-bg py-8">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center gap-12 group-hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-12">
            <span
              className={`whitespace-nowrap font-heading text-4xl font-bold uppercase tracking-tight sm:text-6xl ${
                i % 2 === 0 ? 'text-white' : 'text-transparent'
              }`}
              style={i % 2 === 0 ? undefined : { WebkitTextStroke: '1.5px white' }}
            >
              {item}
            </span>
            <span className="h-3 w-3 shrink-0 rounded-full bg-brand-green" />
          </div>
        ))}
      </div>
    </div>
  )
}
