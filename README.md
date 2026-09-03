# CAOIM website

Website for **Christ the Alpha & Omega International Ministries – Maya (CAOIM)**.

**Vite + React + React Router**, **Tailwind CSS**, styled to match the reference
site (`calvarymd.com` — a "The Church Co" template): Poppins type, `#003DA5`
blue + `#FBC457` gold, full-screen video hero, alternating photo bands.

Content is editable in a local data file now, and through **Sanity** (free
headless CMS) once connected.

---

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build
```

Node 18+ (Node 22 recommended).

---

## Editing content

Until Sanity is connected, everything is in **`src/content/site.js`**. Search the
file for `TODO` — those are placeholders that still need real information:

| Placeholder | What to replace |
|---|---|
| `contact.phone` / `contact.phoneAlt` / `contact.email` | Real phone(s) and email |
| `serviceTimes` | Confirm real days/times |
| `leadership` | Names / roles / bios / photos for the 6 people after Pr. Robert Tamale |
| `giving.mobileMoney[].code` | Real Airtel Money & MTN MoMo merchant codes |
| `giving.bank` | Real bank details, or delete the block |
| `youtube.featuredVideoId` | A YouTube video ID to embed the latest message on the Home page |
| `events` | Keep the list current (ISO dates) |

### Images & video

Processed, web-ready media lives in **`public/media/`** (each photo has a full
`name.jpg` and a smaller `name-sm.jpg`). The hero background is
`public/media/hero.mp4` (+ `hero-poster.jpg`).

Originals (HEIC / raw phone photos / the full-res video) are kept in
**`_source-media/`** (git-ignored, not deployed). To add or swap photos, drop
originals there and re-run the conversion, or just add optimised JP/WebP files
straight into `public/media/` and reference them from `site.js`.

The church logo is `public/logo.png` (cropped from the original in
`_source-media/IMG_6273.PNG`).

---

## Structure

```
src/
  App.jsx                    routes
  content/
    site.js                  ← editable content (local source of truth)
    ContentContext.jsx       provides content to every page
  hooks/useContent.js        local content, merges Sanity on top when configured
  sanity/                    client, GROQ queries, Studio schemas  (see SANITY.md)
  components/                Header, Footer, Hero, Marquee, FeatureRow, cards, icons
  pages/                     Home, About, Ministries, Events, Give, NotFound
  lib/format.js              date helpers
public/media/                web-ready photos + hero video
_source-media/               original photos / video  (git-ignored)
```

Pages / nav: **Home · About · Ministries · Events · Give**.

---

## Sanity (optional, later)

See **[SANITY.md](./SANITY.md)**. Create a free project, copy the schemas from
`src/sanity/schemas/`, then add a `.env`:

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

The site prefers published Sanity content when those are set and falls back to
`src/content/site.js` otherwise.

---

## Deploying (free)

**Netlify** or **Vercel** — connect the repo; `netlify.toml` / `vercel.json`
already handle SPA routing. Add the `VITE_SANITY_*` env vars in the host
dashboard if you connect Sanity. Manual: upload `dist/` to any static host.

---

## Not yet a git repo

```bash
git init && git add -A && git commit -m "Initial CAOIM website"
```
