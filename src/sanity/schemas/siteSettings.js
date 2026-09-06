import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Church name', type: 'string' }),
    defineField({ name: 'shortName', title: 'Short name / abbreviation', type: 'string' }),
    defineField({ name: 'campus', title: 'Campus / location name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'text', rows: 3 }),
    defineField({ name: 'taglineRef', title: 'Tagline scripture reference', type: 'string' }),
    defineField({
      name: 'hero',
      title: 'Home hero',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'subhead', type: 'text', rows: 2, title: 'Sub‑headline' },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        { name: 'phones', type: 'array', of: [{ type: 'string' }], title: 'Phone numbers' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'poBox', type: 'string', title: 'Postal address (P.O. Box)' },
        { name: 'addressLines', type: 'array', of: [{ type: 'string' }], title: 'Address lines' },
        { name: 'addressNote', type: 'text', rows: 2, title: 'Directions note' },
        { name: 'mapQuery', type: 'string', title: 'Google Maps search text' },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url' },
        { name: 'instagram', type: 'url' },
        { name: 'youtube', type: 'url' },
        { name: 'tiktok', type: 'url' },
      ],
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube',
      type: 'object',
      fields: [
        { name: 'handle', type: 'string', title: 'Handle' },
        { name: 'channelId', type: 'string', title: 'Channel ID', description: 'Starts with UC… — used to auto-embed the latest upload' },
        { name: 'channelUrl', type: 'url', title: 'Channel URL' },
        { name: 'featuredVideoId', type: 'string', title: 'Featured video ID (optional)', description: 'Pins one specific video instead of the latest upload' },
      ],
    }),
    defineField({
      name: 'serviceTimes',
      title: 'Service times',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'day', type: 'string' },
            { name: 'time', type: 'string' },
            { name: 'note', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'leadPastors',
      title: 'Lead pastors (featured card)',
      type: 'object',
      fields: [
        { name: 'names', type: 'string', title: 'Names' },
        { name: 'role', type: 'string', title: 'Role', initialValue: 'Lead Pastors' },
        { name: 'photo', type: 'image', title: 'Photo', options: { hotspot: true } },
        { name: 'bio', type: 'array', of: [{ type: 'text', rows: 3 }], title: 'Bio paragraphs' },
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        { name: 'intro', type: 'text', rows: 4 },
        { name: 'story', type: 'array', of: [{ type: 'text', rows: 3 }], title: 'Story paragraphs' },
        { name: 'mission', type: 'text', rows: 3 },
        { name: 'vision', type: 'text', rows: 3 },
      ],
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'ref', type: 'string', title: 'Scripture reference' },
            { name: 'body', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: 'beliefs',
      title: 'What we believe',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'body', type: 'text', rows: 3 },
          ],
        },
      ],
    }),
    defineField({
      name: 'giving',
      title: 'Giving',
      type: 'object',
      fields: [
        { name: 'intro', type: 'text', rows: 4 },
        { name: 'accountName', title: 'Registered account name', type: 'string' },
        { name: 'poster', title: 'Giving poster', type: 'image' },
        {
          name: 'scripture',
          type: 'object',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'ref', type: 'string' },
          ],
        },
        {
          name: 'mobileMoney',
          title: 'Mobile money',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'provider', type: 'string' },
                { name: 'label', type: 'string' },
                { name: 'code', type: 'string' },
                { name: 'steps', type: 'array', of: [{ type: 'string' }] },
              ],
            },
          ],
        },
        { name: 'inPerson', type: 'text', rows: 2 },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site settings' }) },
})
