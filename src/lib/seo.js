/** Helpers for building the site's structured data (JSON-LD). */

export function absoluteUrl(siteUrl, p = '') {
  const base = siteUrl.replace(/\/$/, '')
  if (!p) return base
  if (/^https?:\/\//i.test(p)) return p
  return `${base}${p.startsWith('/') ? '' : '/'}${p}`
}

const DAY_URL = {
  Sunday: 'https://schema.org/Sunday',
  Monday: 'https://schema.org/Monday',
  Tuesday: 'https://schema.org/Tuesday',
  Wednesday: 'https://schema.org/Wednesday',
  Thursday: 'https://schema.org/Thursday',
  Friday: 'https://schema.org/Friday',
  Saturday: 'https://schema.org/Saturday',
}

/**
 * Parse a display time range into 24h {opens, closes}, e.g.
 *   "7:00 – 9:00 AM"   -> { opens: '07:00', closes: '09:00' }
 *   "9:00 AM – 2:00 PM" -> { opens: '09:00', closes: '14:00' }
 *   "6:00 – 9:00 PM"    -> { opens: '18:00', closes: '21:00' }
 * A side with no AM/PM of its own borrows the other side's. Returns null if
 * it can't confidently parse (e.g. "7:00 AM & 9:00 AM" — not a range).
 */
export function parseTimeRange(str = '') {
  const parts = String(str)
    .split(/[–—-]/)
    .map((s) => s.trim())
  if (parts.length !== 2) return null

  let [a, b] = parts
  const meridiemOf = (s) => s.match(/am|pm/i)?.[0].toUpperCase() ?? null
  const ma = meridiemOf(a)
  const mb = meridiemOf(b)
  if (!ma && mb) a = `${a} ${mb}`
  if (!mb && ma) b = `${b} ${ma}`

  const to24 = (s) => {
    const m = s.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i)
    if (!m) return null
    let h = parseInt(m[1], 10)
    const min = m[2]
    const mer = m[3].toUpperCase()
    if (mer === 'PM' && h !== 12) h += 12
    if (mer === 'AM' && h === 12) h = 0
    return `${String(h).padStart(2, '0')}:${min}`
  }

  const opens = to24(a)
  const closes = to24(b)
  return opens && closes ? { opens, closes } : null
}

/** Extract the first clock time in a string as 24h "HH:MM", if any. */
export function firstTime24(str = '') {
  const m = String(str).match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i)
  if (!m) return null
  let h = parseInt(m[1], 10)
  const mer = m[3].toUpperCase()
  if (mer === 'PM' && h !== 12) h += 12
  if (mer === 'AM' && h === 12) h = 0
  return `${String(h).padStart(2, '0')}:${m[2]}`
}

/**
 * Best-guess start time for an event's display `time` string — used for
 * structured data's startDate. A range like "6:00 – 9:00 PM" should start at
 * 6 (not the first AM/PM-tagged number, 9), so try parseTimeRange first;
 * fall back to the first clock time for non-range strings like "3:00 PM" or
 * "7:00 AM & 9:00 AM".
 */
export function eventStartTime24(str = '') {
  return parseTimeRange(str)?.opens ?? firstTime24(str)
}

function churchAddress(site) {
  return {
    '@type': 'PostalAddress',
    streetAddress: site.contact?.addressLines?.[0],
    addressLocality: site.campus,
    addressRegion: site.contact?.addressLines?.[1],
    addressCountry: 'UG',
  }
}

/** Sitewide Church structured data (rendered on every page, from Layout). */
export function buildChurchJsonLd(site) {
  const openingHoursSpecification = (site.serviceTimes || [])
    .map((s) => {
      const range = parseTimeRange(s.time)
      if (!range || !DAY_URL[s.day]) return null
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DAY_URL[s.day],
        opens: range.opens,
        closes: range.closes,
      }
    })
    .filter(Boolean)

  return {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: site.name,
    alternateName: site.shortName,
    url: absoluteUrl(site.siteUrl),
    logo: absoluteUrl(site.siteUrl, '/logo.png'),
    image: absoluteUrl(site.siteUrl, '/media/hero-poster.jpg'),
    telephone: site.contact?.phone,
    email: site.contact?.email,
    address: churchAddress(site),
    sameAs: Object.values(site.social || {}).filter(Boolean),
    ...(openingHoursSpecification.length ? { openingHoursSpecification } : {}),
  }
}

/** One Event schema per upcoming event, for the Events page. */
export function buildEventsJsonLd(site, events = []) {
  return events.map((e) => {
    const time = eventStartTime24(e.time || '')
    return {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: e.title,
      description: e.summary || e.theme || e.title,
      startDate: time ? `${e.date}T${time}` : e.date,
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: e.location || site.name,
        address: churchAddress(site),
      },
      image: [absoluteUrl(site.siteUrl, e.poster || '/media/hero-poster.jpg')],
      organizer: { '@type': 'Organization', name: site.name, url: absoluteUrl(site.siteUrl) },
    }
  })
}
