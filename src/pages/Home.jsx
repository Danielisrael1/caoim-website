import { useSite } from '../content/ContentContext.jsx'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import FeatureRow from '../components/FeatureRow.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import MinistryCard from '../components/MinistryCard.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceTimes from '../components/ServiceTimes.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import YouTubeFacade from '../components/YouTubeFacade.jsx'
import { formatEventDate, upcomingEvents } from '../lib/format.js'

export default function Home() {
  const site = useSite()
  const events = upcomingEvents(site.events)
  const featured = events.find((e) => e.featured) || events[0]

  return (
    <>
      <Hero site={site} />
      <Marquee items={['Welcome home', 'Christ the Alpha & Omega', `${site.campus} · Uganda`]} />

      {/* Get to know us */}
      <FeatureRow
        image="/media/worship-family.jpg"
        imageAlt="A family worshipping together at CAOIM"
        imageSide="left"
        eyebrow="Get to know us"
        title="You belong here"
        cta={{ to: '/about', label: 'Learn more' }}
        secondaryCta={{ href: site.youtube.channelUrl, external: true, label: 'Watch a service' }}
      >
        <p>{site.about.intro}</p>
        <p className="text-base">
          Whether you are exploring faith for the first time or looking for a church to call home,
          come as you are. You will find friendly people, honest teaching from the Bible, and space
          to belong.
        </p>
      </FeatureRow>

      {/* This week's event */}
      {featured && (
        <FeatureRow
          image="/media/celebration.jpg"
          imageAlt="Celebration at CAOIM"
          imageSide="right"
          tone="paper"
          eyebrow="Coming up"
          title={featured.title}
          cta={{ to: '/events', label: 'See all events' }}
        >
          <p>{featured.summary}</p>
          <p className="text-base font-semibold text-ink">
            {formatEventDate(featured.date)}
            {featured.time ? ` · ${featured.time}` : ''}
            {featured.location ? ` · ${featured.location}` : ''}
          </p>
        </FeatureRow>
      )}

      {/* Mission statement */}
      <section className="bg-brand text-white">
        <Reveal className="container-page py-20 text-center md:py-28">
          <p className="eyebrow text-gold">Our mission</p>
          <p className="mx-auto mt-5 max-w-4xl text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
            {site.about.mission}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            We do this by helping you know God, grow together, discover your purpose, and make a
            difference — anchored in Isaiah 61.
          </p>
          <div className="mt-9 flex justify-center">
            <Button to="/about" variant="gold" arrow>
              What we believe
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Get connected */}
      <section className="bg-white">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="Get connected"
            title="A place for every member of your family"
            intro="Explore our ministries and discover meaningful ways to serve, grow in faith, and build relationships."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.ministries.map((m, i) => (
              <Reveal key={m.slug} delay={i * 90} className="h-full">
                <MinistryCard ministry={m} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <Button to="/ministries" variant="outlineDark">
              Explore all ministries
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Sermons / watch */}
      <section className="bg-ink text-white">
        <div className="container-page grid items-center gap-10 py-20 md:grid-cols-2 md:py-28 lg:gap-16">
          <Reveal variant="zoom">
            <YouTubeFacade
              videoId={site.youtube.featuredVideoId}
              channelId={site.youtube.channelId}
              poster="/media/worship.jpg"
              alt="Watch CAOIM's latest message on YouTube"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-gold">Sermons</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Watch or catch up any time</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Every Sunday service is streamed live and archived on our YouTube channel
              ({site.youtube.handle}). Tap the photo to play our latest message right here, grow in
              faith, and apply God’s Word to your life — from anywhere.
            </p>
            <div className="mt-8">
              <Button href={site.youtube.channelUrl} external variant="gold" arrow>
                Watch on YouTube
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Plan your visit */}
      <section className="bg-paper">
        <div className="container-page grid gap-10 py-20 md:grid-cols-2 md:py-28 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Plan your visit" title="Join us this week" />
            <Reveal delay={100}>
              <p className="mt-4 text-black/65">
                Services last a little over an hour, with a warm welcome, worship and teaching for
                every age. Children are cared for in CAOIM Kids during both Sunday services.
              </p>
              <ServiceTimes times={site.serviceTimes} className="mt-6" />
              <p className="mt-6 text-sm text-black/65">
                {site.contact.addressLines.join(', ')}. {site.contact.addressNote}
              </p>
              <div className="mt-6">
                <Button
                  href={`https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapQuery)}`}
                  external
                  variant="primary"
                  arrow
                >
                  Get directions
                </Button>
              </div>
            </Reveal>
          </div>
          <MapEmbed
            query={site.contact.mapQuery}
            addressLines={site.contact.addressLines}
            title="CAOIM location in Maya"
          />
        </div>
      </section>

      {/* Give */}
      <section className="bg-gold">
        <Reveal className="container-page flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Partner with the work</h2>
            <p className="mt-2 max-w-xl text-ink/75">
              Your generosity proclaims good news to the poor and builds the church in Maya and
              beyond.
            </p>
          </div>
          <Button to="/give" variant="primary" arrow className="shrink-0">
            Ways to give
          </Button>
        </Reveal>
      </section>
    </>
  )
}
