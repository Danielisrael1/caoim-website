import { useSite } from '../content/ContentContext.jsx'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import FeatureRow from '../components/FeatureRow.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'

const INTRO =
  'From our youngest children to our elders, CAOIM has a community where you can grow in faith and use your gifts.'

export default function Ministries() {
  const site = useSite()

  return (
    <>
      <Seo
        title={`Ministries – ${site.shortName}`}
        description={`${INTRO} Children, Youth, Men's and Women's ministries at ${site.shortName} in ${site.campus}.`}
        image="/media/celebration.jpg"
      />
      <PageHeader
        eyebrow="Ministries"
        title="Grow, serve and belong"
        intro={INTRO}
        image="/media/celebration.jpg"
      />

      {site.ministries.map((m, i) => (
        <div key={m.slug} id={m.slug}>
          <FeatureRow
            image={m.image || '/media/worship.jpg'}
            imageAlt={m.name}
            imageSide={i % 2 === 0 ? 'left' : 'right'}
            tone={i % 2 === 0 ? 'light' : 'paper'}
            eyebrow={m.audience}
            title={m.name}
          >
            <p>{m.summary}</p>
            {Array.isArray(m.details) && m.details.length > 0 && (
              <ul className="space-y-2 text-base">
                {m.details.map((d, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            )}
            {m.meets && (
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
                Meets: {m.meets}
              </p>
            )}
          </FeatureRow>
        </div>
      ))}

      <section className="bg-brand text-white">
        <Reveal className="container-page py-20 text-center md:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Not sure where to start?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Come to a Sunday service and let us know you are new. We will help you find your place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/about" variant="gold" arrow>
              Plan your visit
            </Button>
            <Button to="/events" variant="outlineLight">
              See what&apos;s on
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
