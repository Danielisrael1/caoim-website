import { useSite } from '../content/ContentContext.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceTimes from '../components/ServiceTimes.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import Button from '../components/Button.jsx'
import { IconMapPin, IconPhone, IconMail, IconUser } from '../components/icons.jsx'

function LeaderCard({ leader }) {
  return (
    <div className="flex flex-col border border-black/10 bg-white">
      {leader.photo ? (
        <div className="aspect-[4/5] overflow-hidden bg-paper">
          <img src={leader.photo} alt={leader.name} loading="lazy" className="h-full w-full object-cover" />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-brand/5">
          <IconUser className="h-9 w-9 text-brand/30" />
        </div>
      )}
      <div className="flex-1 p-5">
        <h3 className="font-bold text-ink">{leader.name}</h3>
        <p className="text-sm font-medium text-brand">{leader.role}</p>
        {leader.bio && <p className="mt-2 text-sm text-black/60">{leader.bio}</p>}
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
          <div className="border border-black/10 bg-white p-8">
            <p className="eyebrow">Mission</p>
            <p className="mt-4 text-lg leading-relaxed text-ink">{site.about.mission}</p>
          </div>
          <div className="border border-black/10 bg-white p-8">
            <p className="eyebrow">Vision</p>
            <p className="mt-4 text-lg leading-relaxed text-ink">{site.about.vision}</p>
          </div>
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
          {site.beliefs.map((b) => (
            <div key={b.title} className="bg-white p-6">
              <h3 className="font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm text-black/65">{b.body}</p>
            </div>
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
            {site.values.map((v) => (
              <div key={v.title} className="border-t-2 border-gold pt-5">
                <p className="text-sm font-semibold text-gold">{v.ref}</p>
                <h3 className="mt-1 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-white/75">{v.body}</p>
              </div>
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
        <div className="mt-14 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.leadership.map((l, i) => (
            <LeaderCard key={`${l.name}-${i}`} leader={l} />
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
