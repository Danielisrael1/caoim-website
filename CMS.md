# Editing the website (CMS)

The website content lives in a **Sanity Studio** — a web page you log into and
edit, like a simple admin dashboard. No code, no deployments. You change
something, press **Publish**, and the live site picks it up.

- Studio code: `studio/`
- Schemas (what fields exist): `src/sanity/schemas/` — shared with the website
  so the two can never drift apart

---

## Part 1 — One-time setup (about 15 minutes)

You only ever do this once.

### 1. Create the free Sanity project

```bash
cd studio
npm install
npx sanity login          # opens a browser — sign in with Google or GitHub
npx sanity init --create-project "CAOIM" --dataset production
```

When it asks about an output path or template, choose the **current directory**
and **don't** overwrite the existing files.

It will print a **project ID** (something like `7xk2p1ab`). Copy it.

### 2. Save the project ID

Create `studio/.env` (copy `studio/.env.example`):

```
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

And create `.env` in the **repo root** so the website can read the content:

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

### 3. Import the current website content

This copies everything that's on the site today — all the text **and all the
photos** — into the CMS, so you start from the real site rather than a blank
page.

Get a write token first: [sanity.io/manage](https://sanity.io/manage) → your
project → **API** → **Tokens** → *Add API token* → name it `seed`, permission
**Editor**. Copy the token (it's only shown once).

```bash
cd studio
SANITY_STUDIO_PROJECT_ID=your_project_id SANITY_WRITE_TOKEN=your_token npm run seed
```

You should see it upload the images and write the documents.

### 4. Allow the website to read the content

[sanity.io/manage](https://sanity.io/manage) → **API** → **CORS origins** →
*Add origin*, for each of:

- `http://localhost:5173` (local development)
- your live site URL (e.g. `https://caoim.org`)

Leave "Allow credentials" **off**.

---

## Part 2 — Editing, day to day

```bash
cd studio
npm run dev          # opens http://localhost:3333
```

Or use the hosted version once it's deployed (see Part 3) — that's the one to
share with other church staff, since it needs no setup on their computer.

### What you can edit

| Section | What's in it |
|---|---|
| **Site settings** | Church name, tagline, contact details, phone numbers, service times, social links, the About page (story, mission, vision, history timeline), beliefs, the lead pastors' card, and the Give page details |
| **Events** | Add, edit and schedule events. Upload a poster for each |
| **Ministries** | The ministry pages, with a photo and optional photo gallery each |
| **Leaders** | The leadership team cards — name, department, short bio, photo |
| **Weekly programme** | The three service posters on the Events page |

### Scheduling events — three ways

When you add an event, open the **"When it happens"** tab and use **one** of:

1. **Date** — for a one-off, e.g. a conference on a specific day. It disappears
   from the site automatically once it's past.
2. **Repeats every** — for weekly services. Pick the weekday and the site
   always shows the next one. **You never have to update it.**
3. **Date note** — for things with no fixed date yet, e.g. *"A full week every
   January"* or *"Dates announced through the year"*.

Tick **Feature on the Home page** for the one event you want highlighted on the
homepage and at the top of the Events page. Only tick one at a time.

### Adding photos

Any photo field lets you drag an image straight in. Sanity resizes and serves
them automatically — you don't need to shrink them first.

### Publishing

Edits are drafts until you press **Publish**. The live site updates within about
a minute (Sanity's CDN caches briefly).

---

## Part 3 — Hosting the Studio on a subdomain

### Easiest: free Sanity hosting

```bash
cd studio
npx sanity deploy
```

It asks for a hostname and gives you `https://<name>.sanity.studio`. Free, no
server to run. Good enough for most churches.

### On your own subdomain (e.g. `admin.caoim.org`)

The Studio is a static site, so host it like the main site:

1. **Netlify/Vercel** → new site from this repo, on the `cms` branch
2. Base directory: `studio`
3. Build command: `npm run build`
4. Publish directory: `studio/dist`
5. Environment variables: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`
6. Point `admin.caoim.org` at it in your DNS

Then add that subdomain to **CORS origins** in sanity.io/manage as well.

---

## If the CMS is empty or unreachable

The website **falls back to `src/content/site.js`** whenever Sanity isn't
configured or can't be reached. So the site never breaks — worst case it shows
the content that's committed in the code. That's also why the site worked fine
before any of this was set up.

---

## Adding other editors

[sanity.io/manage](https://sanity.io/manage) → **Members** → invite by email.

⚠️ The **free plan includes 3 users total**. Beyond that Sanity charges per
seat, so decide who actually needs an account — one shared "church office"
login is a common way to stay inside the free tier.
