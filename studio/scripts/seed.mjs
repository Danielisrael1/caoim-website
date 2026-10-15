#!/usr/bin/env node
/**
 * One-time import: pushes everything currently in src/content/site.js —
 * including the photos in public/media — into Sanity, so the CMS starts out
 * with the real site content instead of a blank slate.
 *
 * Safe to re-run: documents are created with fixed IDs and replaced, and each
 * image file is only uploaded once per run.
 *
 *   SANITY_STUDIO_PROJECT_ID=xxx SANITY_WRITE_TOKEN=yyy npm run seed
 */
import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import crypto from 'node:crypto'

const here = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(here, '..', '..')
const site = (await import(path.join(repoRoot, 'src/content/site.js'))).default

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_WRITE_TOKEN

if (!projectId || !token) {
  console.error(
    '\nMissing credentials.\n\n' +
      '  SANITY_STUDIO_PROJECT_ID  your project id (sanity.io/manage)\n' +
      '  SANITY_WRITE_TOKEN        an Editor token (sanity.io/manage → API → Tokens)\n\n' +
      'Example:\n' +
      '  SANITY_STUDIO_PROJECT_ID=abc123 SANITY_WRITE_TOKEN=sk... npm run seed\n',
  )
  process.exit(1)
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false })

/** Sanity requires a unique _key on every object inside an array. */
const key = () => crypto.randomBytes(6).toString('hex')
const withKeys = (value) => {
  if (Array.isArray(value)) {
    return value.map((v) =>
      v && typeof v === 'object' && !Array.isArray(v)
        ? { _key: key(), ...withKeys(v) }
        : withKeys(v),
    )
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withKeys(v)]))
  }
  return value
}

const uploaded = new Map()
async function uploadImage(webPath) {
  if (!webPath) return undefined
  if (uploaded.has(webPath)) return uploaded.get(webPath)
  const file = path.join(repoRoot, 'public', webPath.replace(/^\//, ''))
  if (!fs.existsSync(file)) {
    console.warn(`  ! missing image, skipped: ${webPath}`)
    return undefined
  }
  const asset = await client.assets.upload('image', fs.createReadStream(file), {
    filename: path.basename(file),
  })
  const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  uploaded.set(webPath, ref)
  console.log(`  ↑ ${webPath}`)
  return ref
}

const imageArray = async (paths = []) => {
  const out = []
  for (const p of paths) {
    const img = await uploadImage(p)
    if (img) out.push({ ...img, _key: key() })
  }
  return out
}

const docs = []

// ---- Site settings (singleton) -------------------------------------------
console.log('\nUploading images and building documents…')
const settings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  name: site.name,
  shortName: site.shortName,
  campus: site.campus,
  legalNote: site.legalNote,
  tagline: site.tagline,
  taglineRef: site.taglineRef,
  hero: site.hero,
  homeWelcome: withKeys(site.homeWelcome),
  contact: withKeys(site.contact),
  social: site.social,
  youtube: site.youtube,
  serviceTimes: withKeys(site.serviceTimes),
  about: withKeys(site.about),
  values: withKeys(site.values),
  beliefs: withKeys(site.beliefs),
  leadPastors: {
    ...withKeys({ ...site.leadPastors, photo: undefined, gallery: undefined }),
    photo: await uploadImage(site.leadPastors?.photo),
    gallery: await imageArray(site.leadPastors?.gallery),
  },
  giving: {
    ...withKeys({ ...site.giving, poster: undefined }),
    poster: await uploadImage(site.giving?.poster),
  },
}
docs.push(settings)

// ---- Leaders --------------------------------------------------------------
for (const [i, l] of (site.leadership || []).entries()) {
  docs.push({
    _id: `leader-${i + 1}`,
    _type: 'leader',
    name: l.name,
    department: l.department,
    bio: l.bio,
    order: (i + 1) * 10,
    photo: await uploadImage(l.photo),
  })
}

// ---- Ministries -----------------------------------------------------------
for (const [i, m] of (site.ministries || []).entries()) {
  docs.push({
    _id: `ministry-${m.slug}`,
    _type: 'ministry',
    name: m.name,
    slug: { _type: 'slug', current: m.slug },
    audience: m.audience,
    summary: m.summary,
    meets: m.meets,
    details: m.details,
    order: (i + 1) * 10,
    image: await uploadImage(m.image),
    gallery: await imageArray(m.gallery),
  })
}

// ---- Events ---------------------------------------------------------------
for (const e of site.events || []) {
  docs.push({
    _id: `event-${e.slug}`,
    _type: 'event',
    title: e.title,
    slug: { _type: 'slug', current: e.slug },
    theme: e.theme,
    date: e.date,
    dateNote: e.dateNote,
    repeatWeekday: e.repeatWeekday,
    time: e.time,
    location: e.location,
    speakers: e.speakers,
    recurring: e.recurring,
    featured: !!e.featured,
    summary: e.summary,
    poster: await uploadImage(e.poster),
  })
}

// ---- Weekly programme -----------------------------------------------------
for (const [i, p] of (site.programmes || []).entries()) {
  docs.push({
    _id: `programme-${i + 1}`,
    _type: 'programme',
    title: p.title,
    detail: p.detail,
    order: (i + 1) * 10,
    poster: await uploadImage(p.poster),
  })
}

// ---- Commit ---------------------------------------------------------------
console.log(`\nWriting ${docs.length} documents to ${projectId}/${dataset}…`)
let tx = client.transaction()
for (const d of docs) tx = tx.createOrReplace(d)
await tx.commit()

const counts = docs.reduce((a, d) => ({ ...a, [d._type]: (a[d._type] || 0) + 1 }), {})
console.log('\n✓ Done:', Object.entries(counts).map(([t, n]) => `${n} ${t}`).join(', '))
console.log(`  ${uploaded.size} images uploaded\n`)
