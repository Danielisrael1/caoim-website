// Reads published content from the CAOIM admin's database (Supabase).
//
// One request: POST /rest/v1/rpc/site_content returns everything the site
// needs, already in the shape of src/content/site.js. Uses plain fetch, so no
// extra library is shipped to visitors.
//
// The publishable key is meant to be public: the database only lets it read
// published website content, never church records or finances.

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const isCmsConfigured = Boolean(url && key)

export async function fetchSiteContent({ signal } = {}) {
  if (!isCmsConfigured) return null
  const headers = { apikey: key, 'Content-Type': 'application/json' }
  // Older "anon" keys are JWTs and also go in the Authorization header.
  if (key.startsWith('eyJ')) headers.Authorization = `Bearer ${key}`

  const res = await fetch(`${url.replace(/\/$/, '')}/rest/v1/rpc/site_content`, {
    method: 'POST',
    headers,
    body: '{}',
    signal,
  })
  if (!res.ok) throw new Error(`CMS responded ${res.status}`)
  return res.json()
}
