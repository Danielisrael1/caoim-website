import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

/**
 * Alternating image / text band, styled after the reference site's content rows.
 *  - imageSide: 'left' | 'right'
 *  - tone: 'light' (white) | 'paper' (#f4f4f4) | 'brand' (blue)
 */
export default function FeatureRow({
  image,
  imageAlt = '',
  imageSide = 'left',
  eyebrow,
  title,
  children,
  cta,
  secondaryCta,
  tone = 'light',
}) {
  const toneCls =
    tone === 'brand'
      ? 'bg-brand text-white'
      : tone === 'paper'
        ? 'bg-paper text-ink'
        : 'bg-white text-ink'
  const eyebrowCls = tone === 'brand' ? 'text-gold' : 'text-brand'
  const bodyCls = tone === 'brand' ? 'text-white/80' : 'text-black/65'

  return (
    <section className={toneCls}>
      <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
        <Reveal variant="zoom" className={imageSide === 'right' ? 'md:order-2' : ''}>
          <div className="overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120} className={imageSide === 'right' ? 'md:order-1' : ''}>
          {eyebrow && <p className={`eyebrow ${eyebrowCls}`}>{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          <div className={`mt-5 space-y-4 text-lg leading-relaxed ${bodyCls}`}>{children}</div>
          {(cta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {cta && (
                <Button
                  to={cta.to}
                  href={cta.href}
                  external={cta.external}
                  variant={tone === 'brand' ? 'gold' : 'primary'}
                  arrow
                >
                  {cta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  to={secondaryCta.to}
                  href={secondaryCta.href}
                  external={secondaryCta.external}
                  variant={tone === 'brand' ? 'outlineLight' : 'outlineDark'}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
