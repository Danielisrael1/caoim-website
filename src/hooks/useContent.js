import { useEffect, useState } from 'react'
import localSite from '../content/site.js'
import { fetchSiteContent, isCmsConfigured } from '../lib/cms.js'

/**
 * Returns the site content object.
 *
 * - Always starts from the local content in src/content/site.js, so the site
 *   renders instantly and still works if the CMS is unreachable.
 * - If the CMS is configured (VITE_SUPABASE_URL), it fetches what staff have
 *   published in the CAOIM admin and puts it on top of the local defaults.
 *
 * `_source` is 'local', 'loading' or 'cms' for debugging / status badges.
 */
function mergeContent(base, remote) {
  const settings = remote?.settings ?? {}
  // Until the website has been imported into the CMS, its settings are empty —
  // keep showing the built-in content rather than a blank site.
  if (!Object.keys(settings).length) return base

  const out = { ...base }
  for (const [k, value] of Object.entries(settings)) {
    if (value === null || value === undefined) continue
    if (Array.isArray(value) && value.length === 0) continue
    // Nested sections keep any built-in keys the CMS doesn't have (e.g. a new
    // field added to the site before staff have filled it in).
    out[k] =
      value && typeof value === 'object' && !Array.isArray(value) && base[k] && typeof base[k] === 'object'
        ? { ...base[k], ...value }
        : value
  }
  // Once the CMS is in use, its lists are the truth — including an empty list
  // when staff have removed or hidden everything.
  for (const k of ['leadership', 'ministries', 'events', 'programmes']) {
    if (Array.isArray(remote[k])) out[k] = remote[k]
  }
  return out
}

export default function useContent() {
  const [content, setContent] = useState(localSite)
  const [source, setSource] = useState(isCmsConfigured ? 'loading' : 'local')

  useEffect(() => {
    if (!isCmsConfigured) return
    const controller = new AbortController()

    fetchSiteContent({ signal: controller.signal })
      .then((data) => {
        if (!data) return
        setContent(mergeContent(localSite, data))
        setSource('cms')
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        console.warn('[CAOIM] CMS fetch failed — using built-in content.', err)
        setSource('local')
      })

    return () => controller.abort()
  }, [])

  return { ...content, _source: source }
}
