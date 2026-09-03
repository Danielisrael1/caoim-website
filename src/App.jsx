import { Routes, Route } from 'react-router-dom'
import { ContentProvider } from './content/ContentContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Ministries from './pages/Ministries.jsx'
import Events from './pages/Events.jsx'
import Give from './pages/Give.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <ContentProvider>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/give" element={<Give />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ContentProvider>
  )
}
