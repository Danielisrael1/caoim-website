import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useSite } from '../content/ContentContext.jsx'

export default function Layout({ children }) {
  const site = useSite()

  return (
    <div className="flex min-h-screen flex-col">
      <Header site={site} />
      <main className="flex-1">{children}</main>
      <Footer site={site} />
    </div>
  )
}
