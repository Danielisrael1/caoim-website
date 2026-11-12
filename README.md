# CAOIM website

Website for **Christ the Alpha & Omega International Ministries – Maya (CAOIM)**.

**Vite + React + React Router**, **Tailwind CSS**, styled to match the reference
site (`calvarymd.com` — a "The Church Co" template): Poppins type, `#003DA5`
blue + `#FBC457` gold, full-screen video hero, alternating photo bands.

Content is edited in the **CAOIM admin** (a separate app, `caoim-admin`, hosted
on its own admin domain). The site reads what staff publish there, and falls
back to `src/content/site.js` whenever the admin isn't connected or can't be
reached.

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

Until the admin is connected, everything is in **`src/content/site.js`**. Search the
file for `TODO` — those are placeholders that still need real information:

| Placeholder / to keep current | Notes |
|---|---|
| `siteUrl` | Real domain, once you have one (see the SEO section) |
| `leadership` — Pr. Ampaire Jackson `photo` | Still `''`; add the photo when provided |
| `leadership` bios | Marked `TODO` — confirm with the leaders |
| `beliefs` | Marked `TODO` — review against your doctrine |
| `events` | Keep the list current (ISO dates) |
| `youtube.featuredVideoId` | Optional — pins one video instead of the channel's latest |

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
  hooks/useContent.js        local content, merges the admin's content on top when configured
  lib/cms.js                 one fetch to the admin database (no extra library)
  components/                Header, Footer, Hero, Marquee, FeatureRow, cards, icons
  pages/                     Home, About, Ministries, Events, Give, NotFound
  lib/format.js              date helpers
public/media/                web-ready photos + hero video
_source-media/               original photos / video  (git-ignored)
```

Pages / nav: **Home · About · Ministries · Events · Give**.

---

## SEO

- **One domain to set**: `siteUrl` in `src/content/site.js` (currently the
  placeholder `https://caoim.org`). It drives the sitemap, robots.txt,
  canonical links, and structured data. When you get a real domain, update it
  there **and** the matching fallback tags near the top of `index.html`, then
  rebuild — `public/robots.txt` and `public/sitemap.xml` regenerate
  automatically (`scripts/generate-seo.mjs`, wired into `predev`/`prebuild`).
- **Per-page titles, descriptions, canonical links and Open Graph/Twitter
  tags** update automatically as you navigate (`src/components/Seo.jsx`,
  used on every page). This helps Google (which renders JavaScript when
  indexing) but not link-preview bots that don't run JS — that's what the
  static tags in `index.html` are for, as a sitewide fallback.
- **Structured data (JSON-LD)**: a `Church` schema (address, phone, socials,
  service times) on every page, plus an `Event` schema per upcoming event on
  the Events page — built from `site.js` in `src/lib/seo.js`, so it stays
  correct as you edit content.
- The 404 page is marked `noindex`.

---

## Content from the CAOIM admin

Staff edit the site in the CAOIM admin. To connect this site to it, set two
variables (locally in `.env`, and in the Netlify/Vercel dashboard):

```
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_…
```

Both come from the admin's Supabase project → Project Settings → API Keys. The
publishable key is meant to be public: the database only lets it read published
website content, never church records or finances.

On each visit the site makes one request (`/rest/v1/rpc/site_content`) and puts
the published content over the built-in defaults. Until the admin's import has
been run, its settings are empty and the site keeps showing `site.js`. Once
content exists, the admin's lists (events, leaders, ministries, programme) are
used as they are, so hiding or deleting something there removes it here.

`siteUrl` and the hero video stay in the code.

---

## Deploying (free)

**Netlify** or **Vercel** — connect the repo; `netlify.toml` / `vercel.json`
already handle SPA routing. Add the `VITE_SUPABASE_*` env vars in the host
dashboard to connect the admin. Manual: upload `dist/` to any static host.

---

## Not yet a git repo

```bash
git init && git add -A && git commit -m "Initial CAOIM website"
```
