import { useSite } from '../content/ContentContext.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceTimes from '../components/ServiceTimes.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { IconMapPin, IconPhone, IconMail, IconUser } from '../components/icons.jsx'

function LeaderCard({ leader }) {
  return (
    <div className="flex h-full flex-col border border-black/10 bg-white">
      {leader.photo ? (
        <div className="aspect-[4/3] overflow-hidden bg-paper">
          <img src={leader.photo} alt={leader.name} loading="lazy" className="h-full w-full object-cover" />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-brand/5">
          <IconUser className="h-10 w-10 text-brand/30" />
        </div>
      )}
      <div className="flex-1 p-6">
        <p className="eyebrow">{leader.department}</p>
        <h3 className="mt-2 text-lg font-bold text-ink">{leader.name}</h3>
        {leader.bio && <p className="mt-2 text-sm text-black/60">{leader.bio}</p>}
      </div>
    </div>
  )
}

function LeadPastors({ data }) {
  return (
    <div className="grid overflow-hidden border border-black/10 bg-white md:grid-cols-2">
      <div className="aspect-[4/3] bg-paper md:aspect-auto">
        <img
          src={data.photo}
          alt={data.names}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12">
        <p className="eyebrow">{data.role}</p>
        <h3 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">{data.names}</h3>
        <div className="mt-4 space-y-3 text-black/65">
          {(Array.isArray(data.bio) ? data.bio : [data.bio]).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const site = useSite()

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Christ is the Alpha and the Omega"
        intro={site.about.intro}
        image="/media/congregation.jpg"
      />

      {/* Our story */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our story" title="Isaiah 61 is our heartbeat" />
            <blockquote className="mt-8 border-l-4 border-gold pl-5 text-lg italic text-black/70">
              “{site.tagline}”
              <cite className="mt-2 block text-sm font-semibold not-italic text-brand">
                {site.taglineRef}
              </cite>
            </blockquote>
          </div>
          <div className="rich-text max-w-prose text-lg">
            {site.about.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal className="border border-black/10 bg-white p-8">
            <p className="eyebrow">Mission</p>
            <p className="mt-4 text-lg leading-relaxed text-ink">{site.about.mission}</p>
          </Reveal>
          <Reveal delay={120} className="border border-black/10 bg-white p-8">
            <p className="eyebrow">Vision</p>
            <p className="mt-4 text-lg leading-relaxed text-ink">{site.about.vision}</p>
          </Reveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="What we believe"
          title="The faith we hold"
          intro="We stand with the historic Christian church on these core truths."
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {site.beliefs.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 70} className="bg-white p-6">
              <h3 className="font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm text-black/65">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Isaiah 61 marks */}
      <section className="bg-brand py-20 text-white md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our calling"
            title="Six marks of Isaiah 61"
            intro="These six phrases from the prophet shape everything we do."
            tone="light"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {site.values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 90} className="border-t-2 border-gold pt-5">
                <p className="text-sm font-semibold text-gold">{v.ref}</p>
                <h3 className="mt-1 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-white/75">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the team"
          intro="Our pastors and leaders serve the church family with teaching, care and oversight."
          align="center"
        />

        {site.leadPastors && (
          <Reveal variant="zoom" className="mt-14">
            <LeadPastors data={site.leadPastors} />
          </Reveal>
        )}

        <div className="mt-6 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.leadership.map((l, i) => (
            <Reveal key={`${l.name}-${i}`} delay={(i % 3) * 80} className="h-full">
              <LeaderCard leader={l} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visit us */}
      <section id="visit" className="bg-paper py-20 md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Visit us" title="Come and see" />
            <p className="mt-4 text-black/65">
              We would love to meet you. Here is everything you need to find us and plan your first
              visit.
            </p>
            <ServiceTimes times={site.serviceTimes} className="mt-6" />

            <ul className="mt-6 space-y-3 text-sm text-black/75">
              <li className="flex gap-2">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  {site.contact.addressLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                  <span className="mt-1 block text-black/50">{site.contact.addressNote}</span>
                </span>
              </li>
              <li className="flex gap-2">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  <a href={`tel:${site.contact.phone.replace(/\s+/g, '')}`} className="hover:text-brand">
                    {site.contact.phone}
                  </a>
                  {site.contact.phoneAlt ? ` · ${site.contact.phoneAlt}` : ''}
                </span>
              </li>
              <li className="flex gap-2">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-brand">
                  {site.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <Button href={site.youtube.channelUrl} external variant="primary" arrow>
                Watch a service first
              </Button>
            </div>
          </div>
          <MapEmbed
            query={site.contact.mapQuery}
            addressLines={site.contact.addressLines}
            title="CAOIM location in Maya"
          />
        </div>
      </section>
    </>
  )
}
