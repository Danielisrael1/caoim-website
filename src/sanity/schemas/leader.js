import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'leader',
  title: 'Leader',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'department', title: 'Department / role', type: 'string' }),
    defineField({ name: 'bio', title: 'Short bio', type: 'text', rows: 3 }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Sort order', type: 'number', initialValue: 100 }),
  ],
  orderings: [{ title: 'Sort order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'department', media: 'photo' } },
})
