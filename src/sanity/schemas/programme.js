import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'programme',
  title: 'Weekly programme',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'detail', title: 'Detail', type: 'string', description: 'e.g. “Every Sunday · 7:00 – 9:00 AM”' }),
    defineField({ name: 'poster', title: 'Poster / banner', type: 'image' }),
    defineField({ name: 'order', title: 'Sort order', type: 'number', initialValue: 100 }),
  ],
  orderings: [{ title: 'Sort order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'detail', media: 'poster' } },
})
