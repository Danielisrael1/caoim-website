import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IconMenu, IconClose } from './icons.jsx'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/events', label: 'Events' },
]

export default function Header({ site }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Transparent only while sitting over the home hero, un-scrolled and closed.
  const overHero = isHome && !scrolled && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        overHero
          ? 'bg-transparent'
          : 'bg-white shadow-[0_1px_0_rgba(0,0,0,0.08),0_8px_24px_-16px_rgba(0,0,0,0.25)]'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt={`${site.shortName} logo`} className="h-9 w-auto md:h-11" />
          <span
            className={`hidden text-lg font-extrabold leading-none tracking-tightest transition-colors duration-300 sm:block ${
              overHero ? 'text-white' : 'text-brand'
            }`}
          >
            {site.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  overHero
                    ? isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                    : isActive
                      ? 'text-brand'
                      : 'text-ink/70 hover:text-brand'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/give"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-dark"
          >
            Give
          </Link>
        </nav>

        <button
          type="button"
          className={`-mr-1 inline-flex h-10 w-10 items-center justify-center transition-colors md:hidden ${
            overHero ? 'text-white' : 'text-ink'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <nav className="container-page flex flex-col py-3">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `py-3 text-base font-medium ${isActive ? 'text-brand' : 'text-ink/80'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/give"
              className="mt-3 rounded-full bg-gold px-6 py-3 text-center text-base font-semibold text-ink"
            >
              Give
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
