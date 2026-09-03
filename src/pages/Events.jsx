import { useSite } from '../content/ContentContext.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import EventCard from '../components/EventCard.jsx'
import ServiceTimes from '../components/ServiceTimes.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { formatEventDate, upcomingEvents } from '../lib/format.js'

export default function Events() {
  const site = useSite()
  const events = upcomingEvents(site.events)
  const featured = events.find((e) => e.featured)
  const rest = events.filter((e) => e !== featured)

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="What's happening at CAOIM"
        intro="Sundays, midweek gatherings and special events. Everyone is welcome — bring a friend."
        image="/media/worship-dance.jpg"
      />

      {featured && (
        <section className="border-b border-black/10">
          <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-20 lg:gap-16">
            <Reveal variant="zoom" className="overflow-hidden">
              <img
                src="/media/worship-hands.jpg"
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Don&apos;t miss</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-lg text-black/65">{featured.summary}</p>
              <p className="mt-4 font-semibold text-ink">
                {formatEventDate(featured.date)}
                {featured.time ? ` · ${featured.time}` : ''}
              </p>
              <p className="text-black/60">{featured.location}</p>
            </Reveal>
          </div>
        </section>
      )}

      <section className="container-page py-20 md:py-24">
        <SectionHeading eyebrow="Calendar" title="Upcoming" />
        {rest.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((e, i) => (
              <Reveal key={e.slug || e.title} delay={(i % 3) * 80} className="h-full">
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-black/65">
            No other events on the calendar right now — check back soon, or follow us on social media.
          </p>
        )}
      </section>

      <section className="bg-brand text-white">
        <div className="container-page grid gap-10 py-20 md:grid-cols-2 md:py-24 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Every week" title="Our weekly rhythm" tone="light" />
            <ServiceTimes times={site.serviceTimes} tone="dark" className="mt-6" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Watch live on YouTube</h3>
            <p className="mt-3 text-white/80">
              Can&apos;t join us in {site.campus}? Every Sunday service streams live on{' '}
              {site.youtube.handle}.
            </p>
            <div className="mt-6">
              <Button href={site.youtube.channelUrl} external variant="gold" arrow>
                Open our channel
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
