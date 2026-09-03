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
