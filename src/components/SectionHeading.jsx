import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  className = '',
}) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : ''
  const titleColor = tone === 'light' ? 'text-white' : 'text-ink'
  const introColor = tone === 'light' ? 'text-white/80' : 'text-black/65'
  const eyebrowColor = tone === 'light' ? 'text-gold' : 'text-brand'

  return (
    <Reveal className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${introColor}`}>{intro}</p>}
    </Reveal>
  )
}
