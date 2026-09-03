import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks.jsx'

export default function Footer({ site }) {
  const year = new Date().getFullYear()
  const tel = site.contact.phone.replace(/\s+/g, '')

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 items-center rounded-lg bg-white px-2.5">
              <img src="/logo.png" alt={`${site.shortName} logo`} className="h-7 w-auto" />
            </span>
            <span className="text-lg font-extrabold text-white">{site.shortName}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{site.legalNote}</p>
          <SocialLinks social={site.social} className="mt-6" />
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-white">About us</Link></li>
            <li><Link to="/ministries" className="hover:text-white">Ministries</Link></li>
            <li><Link to="/events" className="hover:text-white">Events</Link></li>
            <li><Link to="/give" className="hover:text-white">Give</Link></li>
            <li>
              <a href={site.youtube.channelUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                Watch on YouTube
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Find us</h4>
          <address className="mt-4 space-y-1 text-sm not-italic">
            {site.contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="pt-2 text-white/50">{site.contact.addressNote}</p>
          </address>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Get in touch</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${tel}`} className="hover:text-white">{site.contact.phone}</a>
            </li>
            {site.contact.phoneAlt && (
              <li>
                <a href={`tel:${site.contact.phoneAlt.replace(/\s+/g, '')}`} className="hover:text-white">
                  {site.contact.phoneAlt}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 text-xs text-white/50">
          © {year} {site.legalNote}
        </div>
      </div>
    </footer>
  )
}
