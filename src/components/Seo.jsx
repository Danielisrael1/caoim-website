import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSite } from '../content/ContentContext.jsx'
import { absoluteUrl } from '../lib/seo.js'

function upsertMeta(attr, key, content) {
  if (content == null) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Updates the document <head> for the current route: title, description,
 * canonical, Open Graph / Twitter tags, robots, and (optionally) one or more
 * JSON-LD blocks. No dependency — plain DOM, safe to call from every page.
 *
 * Note: this only helps crawlers that execute JavaScript (Google does; most
 * link-preview bots don't). Non-JS bots fall back to the static tags in
 * index.html, which is why those are kept sensible too.
 */
export default function Seo({ title, description, image, noindex = false, jsonLd, jsonLdId }) {
  const site = useSite()
  const { pathname } = useLocation()

  useEffect(() => {
    const url = absoluteUrl(site.siteUrl, pathname)

    if (title) {
      document.title = title
      upsertMeta('property', 'og:title', title)
      upsertMeta('name', 'twitter:title', title)
    }
    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
      upsertMeta('name', 'twitter:description', description)
    }
    if (image) {
      const abs = absoluteUrl(site.siteUrl, image)
      upsertMeta('property', 'og:image', abs)
      upsertMeta('name', 'twitter:image', abs)
    }
    upsertMeta('property', 'og:url', url)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    upsertLink('canonical', url)
  }, [site.siteUrl, pathname, title, description, image, noindex])

  useEffect(() => {
    if (!jsonLd) return undefined
    const id = jsonLdId || 'ld-json'
    let el = document.getElementById(id)
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.id = id
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(jsonLd)

    return () => {
      document.getElementById(id)?.remove()
    }
  }, [jsonLd, jsonLdId])

  return null
}
