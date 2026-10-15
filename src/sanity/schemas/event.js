import { defineType, defineField } from 'sanity'

const WEEKDAYS = [
  { title: 'Sunday', value: 0 },
  { title: 'Monday', value: 1 },
  { title: 'Tuesday', value: 2 },
  { title: 'Wednesday', value: 3 },
  { title: 'Thursday', value: 4 },
  { title: 'Friday', value: 5 },
  { title: 'Saturday', value: 6 },
]

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  groups: [
    { name: 'main', title: 'Details', default: true },
    { name: 'when', title: 'When it happens' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'main',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'main',
      options: { source: 'title' },
      description: 'Auto-filled from the title — just click Generate',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      group: 'main',
      description: 'e.g. “None Found Like Them” — Daniel 1:19',
    }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3, group: 'main' }),
    defineField({ name: 'location', title: 'Location', type: 'string', group: 'main' }),
    defineField({ name: 'speakers', title: 'Speakers / ministering', type: 'string', group: 'main' }),
    defineField({
      name: 'poster',
      title: 'Poster / photo',
      type: 'image',
      group: 'main',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Feature on the Home page',
      type: 'boolean',
      group: 'main',
      initialValue: false,
      description: 'Only one event should be featured at a time',
    }),

    // --- Timing: pick ONE of the three approaches below -------------------
    defineField({
      name: 'date',
      title: 'Date (one-off events)',
      type: 'date',
      group: 'when',
      description: 'For a specific dated event. Leave empty for weekly or “to be announced” events.',
    }),
    defineField({
      name: 'repeatWeekday',
      title: 'Repeats every (weekly events)',
      type: 'number',
      group: 'when',
      options: { list: WEEKDAYS, layout: 'dropdown' },
      description:
        'For services that happen every week — the site always shows the next one automatically, so you never have to update the date.',
    }),
    defineField({
      name: 'dateNote',
      title: 'Date note (when there is no fixed date)',
      type: 'string',
      group: 'when',
      description: 'e.g. “A full week every January” or “Dates announced through the year”',
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      group: 'when',
      description: 'e.g. “7:00 AM & 9:00 AM” or “6:00 – 9:00 PM”',
    }),
    defineField({
      name: 'recurring',
      title: 'Badge label',
      type: 'string',
      group: 'when',
      description: 'Small gold badge on the card, e.g. “Every Sunday” or “Annual · January”',
    }),
  ],
  // An event needs at least one way of saying when it happens.
  validation: (rule) =>
    rule.custom((doc) =>
      doc?.date || typeof doc?.repeatWeekday === 'number' || doc?.dateNote
        ? true
        : 'Set a date, a weekly repeat, or a date note so the event shows when it happens.',
    ),
  orderings: [{ title: 'Date', name: 'date', by: [{ field: 'date', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', date: 'date', note: 'dateNote', rec: 'recurring', media: 'poster' },
    prepare: ({ title, date, note, rec, media }) => ({
      title,
      subtitle: date || rec || note || 'No date set',
      media,
    }),
  },
})
