import { Link } from 'react-router-dom'
import { IconArrowRight } from './icons.jsx'

export default function MinistryCard({ ministry, to }) {
  return (
    <Link
      to={to || `/ministries#${ministry.slug}`}
      className="hover-lift group flex h-full flex-col bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-paper">
        {ministry.image ? (
          <>
            <img
              src={ministry.image}
              alt={ministry.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] motion-reduce:transform-none"
            />
            {/* Deepens slightly on hover so the card feels responsive. */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-brand/30">
            <IconArrowRight className="h-8 w-8" />
          </div>
        )}
        <span className="absolute left-4 top-4 bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand shadow-sm">
          {ministry.audience}
        </span>
      </div>
      <div className="flex flex-1 flex-col border border-t-0 border-black/10 p-6 transition-colors duration-300 group-hover:border-brand/30">
        <h3 className="text-xl font-bold text-ink transition-colors duration-200 group-hover:text-brand">
          {ministry.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-black/65">{ministry.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Learn more
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none" />
        </span>
      </div>
    </Link>
  )
}
