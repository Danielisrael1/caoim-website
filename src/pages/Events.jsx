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
        image="/media/praise-team.jpg"
      />

      {featured && (
        <section className="border-b border-black/10">
          <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-20 lg:gap-16">
            <Reveal variant="zoom" className="overflow-hidden">
              <img
                src={featured.poster || '/media/worship.jpg'}
                alt={featured.poster ? `${featured.title} poster` : ''}
                loading="lazy"
                className={`w-full ${featured.poster ? 'border border-black/10' : 'aspect-[4/3] object-cover'}`}
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Don&apos;t miss</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{featured.title}</h2>
              {featured.theme && (
                <p className="mt-2 text-lg font-semibold text-brand">{featured.theme}</p>
              )}
              <p className="mt-4 text-lg text-black/65">{featured.summary}</p>
              <dl className="mt-5 space-y-1.5 text-black/70">
                <p>
                  <span className="font-semibold text-ink">When: </span>
                  {formatEventDate(featured.date)}
                  {featured.time ? ` · ${featured.time}` : ''}
                </p>
                <p>
                  <span className="font-semibold text-ink">Where: </span>
                  {featured.location}
                </p>
                {featured.speakers && (
                  <p>
                    <span className="font-semibold text-ink">Ministering: </span>
                    {featured.speakers}
                  </p>
                )}
              </dl>
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

      {Array.isArray(site.programmes) && site.programmes.length > 0 && (
        <section className="bg-paper py-20 md:py-24">
          <div className="container-page">
            <SectionHeading eyebrow="Weekly programme" title="Our regular services" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {site.programmes.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 90} className="h-full">
                  <figure className="flex h-full flex-col border border-black/10 bg-white">
                    <img
                      src={p.poster}
                      alt={p.title}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                    <figcaption className="p-4">
                      <p className="font-bold text-ink">{p.title}</p>
                      <p className="text-sm text-black/60">{p.detail}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
