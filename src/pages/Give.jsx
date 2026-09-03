import { useSite } from '../content/ContentContext.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

function MobileMoneyCard({ method }) {
  return (
    <div className="border border-black/10 bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-ink">{method.provider}</h3>
        <span className="bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {method.label}
        </span>
      </div>
      <p className="mt-3 text-3xl font-extrabold tracking-[0.15em] text-brand">{method.code}</p>
      {Array.isArray(method.steps) && (
        <ol className="mt-4 space-y-2 text-sm text-black/65">
          {method.steps.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-gold text-xs font-bold text-ink">
                {i + 1}
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default function Give() {
  const site = useSite()
  const g = site.giving

  return (
    <>
      <PageHeader
        eyebrow="Give"
        title="Give with a cheerful heart"
        intro={g.intro}
        image="/media/worship-hands.jpg"
      />

      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Mobile money"
          title="Give by Airtel Money or MTN MoMo"
          intro="Use the merchant code for your provider, and enter your name as the reference so we can thank you and keep good records."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {g.mobileMoney.map((m) => (
            <MobileMoneyCard key={m.provider} method={m} />
          ))}
        </div>

        {g.bank && (
          <div className="mt-16">
            <SectionHeading eyebrow="Bank transfer" title="Give by bank" />
            <dl className="mt-6 max-w-lg border border-black/10">
              {[
                ['Bank', g.bank.bankName],
                ['Account name', g.bank.accountName],
                ['Account number', g.bank.accountNumber],
                ['Branch', g.bank.branch],
                ['SWIFT', g.bank.swift],
              ]
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between gap-4 border-b border-black/10 px-5 py-3 text-sm last:border-0"
                  >
                    <dt className="text-black/55">{k}</dt>
                    <dd className="font-medium text-ink">{v}</dd>
                  </div>
                ))}
            </dl>
          </div>
        )}

        {g.inPerson && (
          <div className="mt-16 bg-paper p-8 md:p-10">
            <h2 className="text-xl font-bold text-ink">Giving in person</h2>
            <p className="mt-3 max-w-2xl text-black/65">{g.inPerson}</p>
          </div>
        )}

        {g.scripture?.text && (
          <blockquote className="mt-16 border-l-4 border-gold pl-5 text-lg text-black/70">
            “{g.scripture.text}”
            {g.scripture.ref && (
              <cite className="mt-2 block text-sm font-semibold not-italic text-black/45">
                — {g.scripture.ref}
              </cite>
            )}
          </blockquote>
        )}

        <p className="mt-10 text-sm text-black/55">
          Thank you for partnering with the work of the gospel through {site.shortName}. Every gift
          is handled with care and accountability.
        </p>
      </section>
    </>
  )
}
