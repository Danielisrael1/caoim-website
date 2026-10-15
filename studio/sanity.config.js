import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Schemas are shared with the website (src/sanity/schemas) so the two can
// never drift apart — edit them in one place only.
import { schemaTypes } from '../src/sanity/schemas/index.js'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

/**
 * "Site settings" is a singleton — there should only ever be one of them, so
 * it opens straight into the document instead of showing a list with a
 * confusing "create new" button.
 */
const structure = (S) =>
  S.list()
    .title('Website')
    .items([
      S.listItem()
        .title('Site settings')
        .id('siteSettings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings').title('Site settings'),
        ),
      S.divider(),
      S.documentTypeListItem('event').title('Events'),
      S.documentTypeListItem('ministry').title('Ministries'),
      S.documentTypeListItem('leader').title('Leaders'),
      S.documentTypeListItem('programme').title('Weekly programme'),
    ])

export default defineConfig({
  name: 'caoim',
  title: 'CAOIM — Website Editor',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
    // Hide siteSettings from the global "create new" menu — it's a singleton.
    templates: (prev) => prev.filter((t) => t.schemaType !== 'siteSettings'),
  },
  document: {
    // Same, for the "create" button inside the editor.
    newDocumentOptions: (prev) => prev.filter((i) => i.templateId !== 'siteSettings'),
  },
})
