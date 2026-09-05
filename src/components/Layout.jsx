import { useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Seo from './Seo.jsx'
import { useSite } from '../content/ContentContext.jsx'
import { buildChurchJsonLd } from '../lib/seo.js'

export default function Layout({ children }) {
  const site = useSite()
  const isHome = useLocation().pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      {/* Sitewide: keeps canonical/og:url correct on every route and carries
          the Church structured data. Each page adds its own <Seo> for
          title/description on top of this. */}
      <Seo jsonLd={buildChurchJsonLd(site)} jsonLdId="ld-json-church" />
      <Header site={site} />
      {/* Header is fixed. The home hero sits behind it; every other page needs
          to start below it. */}
      <main className={`flex-1 ${isHome ? '' : 'pt-16 md:pt-20'}`}>{children}</main>
      <Footer site={site} />
    </div>
  )
}
