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

/** Sort by date ascending; keep only events from today onward. */
export function upcomingEvents(events = []) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return [...events]
    .filter((e) => {
      if (!e.date) return true
      const d = new Date(`${e.date}T00:00:00`)
      return Number.isNaN(d.getTime()) || d >= today
    })
    .sort((a, b) => String(a.date).localeCompare(String(b.date)))
}
