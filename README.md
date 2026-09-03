# CAOIM website

Website for **Christ the Alpha & Omega International Ministries – Maya (CAOIM)**.

Built with **Vite + React + React Router** and **Tailwind CSS**. Content is editable
either in a local data file or through **Sanity** (a free headless CMS) once connected.

---

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other commands:

```bash
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

Requires Node 18+ (Node 22 recommended).

---

## Where the content lives

Until Sanity is connected, **everything** is in one file:

```
src/content/site.js
```

Church name, tagline, address, phone/email, service times, ministries, events,
leadership, giving details, beliefs — all there. Search the file for `TODO` to
find every placeholder that still needs real information:

| Placeholder | What to replace |
|---|---|
| `contact.phone`, `contact.phoneAlt`, `contact.email` | Real phone numbers and email |
| `serviceTimes` | Confirm real service days/times |
| `leadership` | Names, roles, bios and photos for the 6 team members after Pr. Robert Tamale |
| `giving.mobileMoney[].code` | Real Airtel Money & MTN MoMo merchant codes |
| `giving.bank` | Real bank details, or delete the block |
| `youtube.featuredVideoId` | A YouTube video/live ID to feature the latest message on the Home page |
| `events` | Keep the events list current |

Add team or event photos by dropping images into `public/` and pointing to them
(e.g. `photo: '/team/robert.jpg'`).

The logo is `public/logo.png`. If you get a transparent-background SVG/PNG,
replace that file (keep the name) — the footer already shows it on a white chip.

---

## Connecting Sanity (optional, do this later)

See **[SANITY.md](./SANITY.md)**. In short: create a free Sanity project, copy the
schemas from `src/sanity/schemas/`, then add to a `.env` file:

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

The site automatically prefers Sanity content when those variables are set and
falls back to `src/content/site.js` if anything is missing or offline.

---

## Project structure

```
src/
  App.jsx                 routes
  content/
    site.js               ← all editable content (local source of truth)
    ContentContext.jsx    provides content to every page
  hooks/useContent.js     loads local content, merges Sanity on top if configured
  sanity/                 client, GROQ queries, and Studio schemas
  components/             Header, Footer, Hero, cards, icons, …
  pages/                  Home, About, Ministries, Events, Give, NotFound
  lib/format.js           date helpers
```

Pages/nav: **Home · About · Ministries · Events · Give**.

---

## Deploying (free)

**Netlify** or **Vercel** — connect the repo and it just works
(`netlify.toml` / `vercel.json` are already set up for single-page-app routing).
Add the two `VITE_SANITY_*` environment variables in the host dashboard if/when
you connect Sanity.

Manual: `npm run build` and upload the `dist/` folder to any static host.

---

## Not yet a git repo

```bash
git init && git add -A && git commit -m "Initial CAOIM website"
```
# caoim-website
