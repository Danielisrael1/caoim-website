import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'date', title: 'Date', type: 'date', validation: (r) => r.required() }),
    defineField({ name: 'time', title: 'Time', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'recurring', title: 'Recurring label', type: 'string', description: 'e.g. “Every Sunday”' }),
    defineField({ name: 'featured', title: 'Feature on Home page', type: 'boolean', initialValue: false }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
  ],
  orderings: [{ title: 'Date', name: 'date', by: [{ field: 'date', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'date' } },
})
