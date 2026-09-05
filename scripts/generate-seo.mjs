// Generates public/robots.txt and public/sitemap.xml from src/content/site.js
// so the domain only ever has to be typed in one place. Runs automatically
// before `npm run dev` / `npm run build` (see package.json).
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import site from '../src/content/site.js'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const base = site.siteUrl.replace(/\/$/, '')

// Keep in sync with the <Route> list in src/App.jsx.
const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/ministries', changefreq: 'monthly', priority: '0.8' },
  { path: '/events', changefreq: 'weekly', priority: '0.9' },
  { path: '/give', changefreq: 'monthly', priority: '0.6' },
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${base}${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`

writeFileSync(path.join(root, 'public', 'sitemap.xml'), sitemap)
writeFileSync(path.join(root, 'public', 'robots.txt'), robots)
console.log(`[seo] wrote public/robots.txt + public/sitemap.xml for ${base}`)
