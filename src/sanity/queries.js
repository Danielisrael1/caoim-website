// GROQ queries used by useContent(). Field names line up with the schemas in
// src/sanity/schemas so that Sanity data can drop straight into the local shape.

export const CONTENT_QUERY = /* groq */ `{
  "settings": *[_type == "siteSettings"][0]{
    name, shortName, campus, legalNote, tagline, taglineRef, hero, homeWelcome,
    contact, social, youtube, serviceTimes, about, values, beliefs,
    "giving": giving{ intro, accountName, scripture, mobileMoney, inPerson, "poster": poster.asset->url },
    "leadPastors": leadPastors{
      names, role, bio, highlights, galleryCaption,
      "photo": photo.asset->url,
      "gallery": gallery[].asset->url
    }
  },
  "leadership": *[_type == "leader"] | order(order asc){
    name, department, bio, "photo": photo.asset->url
  },
  "ministries": *[_type == "ministry"] | order(order asc){
    "slug": slug.current, name, audience, summary, meets, details,
    "image": image.asset->url,
    "gallery": gallery[].asset->url
  },
  // Keep undated events (weekly repeats and "to be announced" ones) — the
  // frontend's upcomingEvents() does the real filtering and date maths.
  "events": *[_type == "event" && (!defined(date) || date >= now() - 60*60*24*2)] | order(date asc){
    "slug": slug.current, title, theme, date, dateNote, repeatWeekday,
    time, location, speakers, recurring, featured, summary,
    "poster": poster.asset->url
  },
  "programmes": *[_type == "programme"] | order(order asc){
    title, detail, "poster": poster.asset->url
  }
}`
