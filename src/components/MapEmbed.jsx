import { IconMapPin, IconArrowRight } from './icons.jsx'

/**
 * Google Maps embed with a static fallback underneath, so the block is never
 * blank if the iframe is slow or blocked.
 */
export default function MapEmbed({ query, title = 'Map', addressLines = [], className = '' }) {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
  const linkSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}`

  return (
    <div
      className={`relative h-[360px] w-full overflow-hidden bg-brand text-white md:h-full md:min-h-[420px] ${className}`}
    >
      {/* Fallback content (covered by the iframe when it loads) */}
      <div className="absolute inset-0 flex flex-col justify-center gap-3 p-8">
        <IconMapPin className="h-8 w-8 text-gold" />
        <div className="text-lg font-semibold">
          {(addressLines.length ? addressLines : [query]).map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <a
          href={linkSrc}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
        >
          Open in Google Maps <IconArrowRight className="h-4 w-4" />
        </a>
      </div>

      <iframe
        title={title}
        src={embedSrc}
        className="relative h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
