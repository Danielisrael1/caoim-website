import { formatEventDate } from '../lib/format.js'
import { IconMapPin, IconClock, IconCalendar } from './icons.jsx'

export default function EventCard({ event, featured = false }) {
  // Undated events (e.g. "dates announced through the year") fall back to
  // their note so the calendar row never renders empty.
  const when = event.date ? formatEventDate(event.date) : event.dateNote

  return (
    <article
      className={`hover-lift group flex h-full flex-col border bg-white p-6 ${
        featured ? 'border-brand' : 'border-black/10 hover:border-brand/40'
      }`}
    >
      {event.recurring && (
        <span className="mb-3 w-fit bg-gold px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
          {event.recurring}
        </span>
      )}
      <h3 className="text-xl font-bold text-ink transition-colors duration-200 group-hover:text-brand">
        {event.title}
      </h3>
      {event.theme && <p className="mt-1.5 text-sm font-semibold text-brand">{event.theme}</p>}
      {event.summary && (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-black/65">{event.summary}</p>
      )}

      <dl className="mt-4 space-y-2 text-sm text-black/70">
        {when && (
          <div className="flex items-center gap-2">
            <IconCalendar className="h-4 w-4 shrink-0 text-brand" />
            <dd>{when}</dd>
          </div>
        )}
        {event.time && (
          <div className="flex items-center gap-2">
            <IconClock className="h-4 w-4 shrink-0 text-brand" />
            <dd>{event.time}</dd>
          </div>
        )}
        {event.location && (
          <div className="flex items-center gap-2">
            <IconMapPin className="h-4 w-4 shrink-0 text-brand" />
            <dd>{event.location}</dd>
          </div>
        )}
      </dl>
    </article>
  )
}
