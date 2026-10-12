/** Format an ISO date (YYYY-MM-DD) as e.g. "Sunday, 6 September 2026". */
export function formatEventDate(iso) {
  if (!iso) return ''
  const d = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Short form, e.g. "6 Sep". */
export function formatEventDateShort(iso) {
  if (!iso) return ''
  const d = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

/**
 * Build a `tel:` href from a display phone number.
 * "0393 256 329" -> "tel:+256393256329"; leaves +/00-prefixed numbers alone.
 */
export function telHref(phone = '') {
  const digits = String(phone).replace(/[^\d+]/g, '')
  if (digits.startsWith('+')) return `tel:${digits}`
  if (digits.startsWith('00')) return `tel:+${digits.slice(2)}`
  if (digits.startsWith('0')) return `tel:+256${digits.slice(1)}`
  if (digits.startsWith('256')) return `tel:+${digits}`
  return `tel:${digits}`
}

/** International form of a local phone number, e.g. "0393 256 329" -> "+256393256329". */
export function intlPhone(phone = '') {
  return telHref(phone).replace(/^tel:/, '')
}

/** ISO date of the next given weekday (0 = Sunday … 6 = Saturday); today counts. */
function nextWeekday(weekday) {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + ((weekday - d.getDay() + 7) % 7))
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/**
 * Upcoming events, soonest first.
 *
 * - Events with `repeatWeekday` (0–6) get their date computed from today, so
 *   the weekly services never go stale.
 * - Events with no date at all (e.g. "dates announced through the year") are
 *   kept and sorted last.
 * - One-off events in the past drop off automatically.
 */
export function upcomingEvents(events = []) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return [...events]
    .map((e) => (typeof e.repeatWeekday === 'number' ? { ...e, date: nextWeekday(e.repeatWeekday) } : e))
    .filter((e) => {
      if (!e.date) return true
      const d = new Date(`${e.date}T00:00:00`)
      return Number.isNaN(d.getTime()) || d >= today
    })
    .sort((a, b) => {
      if (!a.date) return 1
      if (!b.date) return -1
      return String(a.date).localeCompare(String(b.date))
    })
}

/** Best human-readable "when" for an event, dated or not. */
export function eventWhen(event = {}) {
  if (event.date) {
    const day = formatEventDate(event.date)
    return event.time ? `${day} · ${event.time}` : day
  }
  return event.dateNote || event.recurring || ''
}
