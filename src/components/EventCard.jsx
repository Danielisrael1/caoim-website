import { formatEventDate } from '../lib/format.js'
import { IconMapPin, IconClock, IconCalendar } from './icons.jsx'

export default function EventCard({ event, featured = false }) {
  return (
    <article
      className={`flex h-full flex-col border p-6 ${
        featured ? 'border-brand bg-white' : 'border-black/10 bg-white'
      }`}
    >
      {event.recurring && (
        <span className="mb-3 w-fit bg-gold px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
          {event.recurring}
        </span>
      )}
      <h3 className="text-xl font-bold text-ink">{event.title}</h3>
      {event.summary && <p className="mt-2 text-sm leading-relaxed text-black/65">{event.summary}</p>}

      <dl className="mt-4 space-y-2 text-sm text-black/70">
        <div className="flex items-center gap-2">
          <IconCalendar className="h-4 w-4 shrink-0 text-brand" />
          <dd>{formatEventDate(event.date)}</dd>
        </div>
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
