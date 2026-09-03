const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

/** True once a Sanity project id is present in the environment. */
export const isSanityConfigured = Boolean(projectId)

export const sanityConfig = {
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
}

/**
 * Lazily create the Sanity client. The @sanity/client library is only
 * downloaded by the browser when a project id is actually configured, so the
 * default (local-content) build stays small.
 */
export async function getClient() {
  if (!isSanityConfigured) return null
  const { createClient } = await import('@sanity/client')
  return createClient(sanityConfig)
}
