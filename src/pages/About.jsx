import { useSite } from '../content/ContentContext.jsx'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceTimes from '../components/ServiceTimes.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { telHref } from '../lib/format.js'
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
  const highlights = Array.isArray(data.highlights) ? data.highlights : []
  const gallery = Array.isArray(data.gallery) ? data.gallery.filter(Boolean) : []

  return (
    <div className="overflow-hidden border border-black/10 bg-white">
      <div className="grid md:grid-cols-2">
        <div className="group aspect-[4/3] overflow-hidden bg-paper md:aspect-auto">
          <img
            src={data.photo}
            alt={data.names}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
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

          {highlights.length > 0 && (
            <dl
              className={`mt-8 grid gap-4 border-t border-black/10 pt-6 ${
                highlights.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'
              }`}
            >
              {highlights.map((h) => (
                <div key={h.label}>
                  <dt className="text-2xl font-extrabold text-brand sm:text-3xl">{h.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-black/55">{h.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>

      {gallery.length > 0 && (
        <div className="border-t border-black/10">
          {data.galleryCaption && (
            <p className="px-8 pt-6 text-xs font-semibold uppercase tracking-[0.22em] text-brand md:px-12">
              {data.galleryCaption}
            </p>
          )}
          <div
            className={`mt-4 grid gap-px bg-black/10 ${
              gallery.length > 2 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
            }`}
          >
            {gallery.map((src, i) => (
              <div key={src} className="group aspect-[3/2] overflow-hidden bg-paper">
                <img
                  src={src}
                  alt={`${data.names} — ${data.galleryCaption || 'photo'} ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function About() {
  const site = useSite()

  return (
    <>
      <Seo
        title={`About Us – ${site.shortName}`}
        description={site.about.intro}
        image="/media/congregation.jpg"
      />
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

      {/* Leadership */}
      <section id="leadership" className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the team"
          intro="Our pastors and leaders serve the church family with teaching, care and oversight."
          align="center"
        />

        {site.leadPastors && (
          <Reveal variant="zoom" id="lead-pastors" className="mt-14">
            <LeadPastors data={site.leadPastors} />
          </Reveal>
        )}

        {/* Column count follows the roster size so the last row never sits
            half-empty (4 leaders read better as one row of 4 than 3 + 1). */}
        <div
          className={`mt-6 grid items-start gap-6 sm:grid-cols-2 ${
            site.leadership.length % 3 === 0 || site.leadership.length % 4 !== 0
              ? 'lg:grid-cols-3'
              : 'lg:grid-cols-4'
          }`}
        >
          {site.leadership.map((l, i) => (
            <Reveal key={`${l.name}-${i}`} delay={(i % 3) * 80} className="h-full">
              <LeaderCard leader={l} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* History */}
      {Array.isArray(site.about.history) && site.about.history.length > 0 && (
        <section className="bg-brand py-20 text-white md:py-28">
          <div className="container-page">
            <SectionHeading
              eyebrow="Our history"
              title="How we got here"
              intro="From a rented room in Maya to a growing family of churches — a story of God’s faithfulness."
              tone="light"
            />

            <div className="mt-14 space-y-10 border-l-2 border-white/20 pl-8">
              {site.about.history.map((m, i) => (
                <Reveal key={m.title} delay={i * 90} className="relative">
                  <span className="absolute -left-[2.375rem] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-brand" />
                  <p className="eyebrow text-gold">
                    {m.year}
                    {m.label ? ` · ${m.label}` : ''}
                  </p>
                  <h3 className="mt-1 text-xl font-bold">{m.title}</h3>
                  <p className="mt-2 max-w-2xl text-white/75">{m.body}</p>
                </Reveal>
              ))}
            </div>

            {site.about.historyClosing && (
              <Reveal delay={site.about.history.length * 90} className="mt-14 border-t border-white/15 pt-10">
                <blockquote className="max-w-3xl text-lg italic text-white/85">
                  “{site.about.historyClosing}”
                </blockquote>
              </Reveal>
            )}
          </div>
        </section>
      )}

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
                  <span className="mt-1 block text-black/60">{site.contact.addressNote}</span>
                  {site.contact.poBox && (
                    <span className="mt-1 block text-black/60">{site.contact.poBox}</span>
                  )}
                </span>
              </li>
              <li className="flex gap-2">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="flex flex-wrap gap-x-2 gap-y-1">
                  {(site.contact.phones || []).map((phone, i) => (
                    <span key={phone}>
                      <a href={telHref(phone)} className="inline-block py-0.5 hover:text-brand">
                        {phone}
                      </a>
                      {i < site.contact.phones.length - 1 && (
                        <span aria-hidden="true" className="text-black/60">
                          {' '}
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-2">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-block break-all py-0.5 hover:text-brand"
                >
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
