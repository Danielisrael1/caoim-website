import { useEffect, useState } from 'react'
import localSite from '../content/site.js'
import { getClient, isSanityConfigured } from '../sanity/client.js'
import { CONTENT_QUERY } from '../sanity/queries.js'

/**
 * Returns the site content object.
 *
 * - Always starts from the local content in src/content/site.js, so the site
 *   renders instantly and works with no back end.
 * - If Sanity is configured (VITE_SANITY_PROJECT_ID), it fetches published
 *   content and merges any non-empty values on top of the local defaults.
 *
 * `_source` is 'local', 'loading' or 'sanity' for debugging / status badges.
 */
function mergeContent(base, remote) {
  if (!remote) return base
  const out = { ...base }

  if (remote.settings) {
    for (const [key, value] of Object.entries(remote.settings)) {
      if (value === null || value === undefined) continue
      if (Array.isArray(value) && value.length === 0) continue
      out[key] = value
    }
  }
  if (Array.isArray(remote.leadership) && remote.leadership.length) out.leadership = remote.leadership
  if (Array.isArray(remote.ministries) && remote.ministries.length) out.ministries = remote.ministries
  if (Array.isArray(remote.events) && remote.events.length) out.events = remote.events

  return out
}

export default function useContent() {
  const [content, setContent] = useState(localSite)
  const [source, setSource] = useState(isSanityConfigured ? 'loading' : 'local')

  useEffect(() => {
    if (!isSanityConfigured) return
    let alive = true

    getClient()
      .then((client) => (client ? client.fetch(CONTENT_QUERY) : null))
      .then((data) => {
        if (!alive || !data) return
        setContent(mergeContent(localSite, data))
        setSource('sanity')
      })
      .catch((err) => {
        console.warn('[CAOIM] Sanity fetch failed — using local content.', err)
        if (alive) setSource('local')
      })

    return () => {
      alive = false
    }
  }, [])

  return { ...content, _source: source }
}
