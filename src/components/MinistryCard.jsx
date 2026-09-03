import { Link } from 'react-router-dom'
import { IconArrowRight } from './icons.jsx'

export default function MinistryCard({ ministry, to }) {
  return (
    <Link
      to={to || `/ministries#${ministry.slug}`}
      className="group flex flex-col bg-white transition-shadow duration-200 hover:shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden bg-paper">
        {ministry.image ? (
          <img
            src={ministry.image}
            alt={ministry.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-brand/30">
            <IconArrowRight className="h-8 w-8" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col border border-t-0 border-black/10 p-6">
        <h3 className="text-xl font-bold text-ink">{ministry.name}</h3>
        <p className="mt-1 text-sm font-medium text-black/55">{ministry.audience}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-black/65">{ministry.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Learn more
          <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
