# Connecting Sanity (the content dashboard)

The site works fine without this — content just lives in `src/content/site.js`.
Do this when you want non-technical people to edit events, sermons, leadership and
page text from a web dashboard instead of editing code.

## 1. Create a Sanity project

```bash
npm create sanity@latest -- --template clean --create-project "CAOIM" --dataset production
```

Follow the prompts (log in with Google/GitHub). When it finishes you'll have a
`sanity/` studio folder and a **project ID** (also visible at https://sanity.io/manage).

## 2. Add the schemas

Copy the four files from this repo's `src/sanity/schemas/` into your studio's
`schemaTypes/` folder, then register them in `sanity.config.js`:

```js
import { schemaTypes } from './schemaTypes'
// ...
schema: { types: schemaTypes }
```

(`src/sanity/schemas/index.js` already exports the `schemaTypes` array.)

Schemas included:

- **siteSettings** — one document: name, tagline, contact, socials, service times,
  about text, values, beliefs, giving details.
- **leader** — one per leadership team member (has a `order` field for sorting).
- **ministry** — one per ministry.
- **event** — one per event (`featured` toggles the Home-page highlight).

## 3. Run the studio and add content

```bash
cd sanity
npm run dev        # http://localhost:3333
```

Create **one** `Site settings` document and fill it in, then add leaders,
ministries and events. Hit **Publish** on each.

Deploy the studio so staff can reach it:

```bash
npx sanity deploy   # gives you a yourname.sanity.studio URL
```

## 4. Point the website at Sanity

Create a `.env` file in this project (copy from `.env.example`):

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

In the Sanity dashboard → **API → CORS origins**, add your website URLs
(`http://localhost:5173` and your live domain).

Restart `npm run dev`. The site now loads published Sanity content and falls back
to `src/content/site.js` for anything left blank.

Add the same two environment variables in your Netlify/Vercel dashboard for the
live site.
