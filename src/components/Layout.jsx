import { useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useSite } from '../content/ContentContext.jsx'

export default function Layout({ children }) {
  const site = useSite()
  const isHome = useLocation().pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <Header site={site} />
      {/* Header is fixed. The home hero sits behind it; every other page needs
          to start below it. */}
      <main className={`flex-1 ${isHome ? '' : 'pt-16 md:pt-20'}`}>{children}</main>
      <Footer site={site} />
    </div>
  )
}
