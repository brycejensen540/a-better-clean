# A Better Clean — Website

A production-ready, static marketing website for **A Better Clean**, a high-throughput
outdoor cleanup company for festivals and events. We move tonnes of waste during public
gatherings so guests can focus on the event — never the cleanup. Built with
Astro + TypeScript + Tailwind CSS, with an auto-generated sitemap and SEO metadata
baked into every page.

> Design language: the same layout system as the Apollo Professional site
> (`../apollo`), rebuilt for a different business — **evergreen + safety-amber**
> palette replacing the teal/navy, festival-and-event photography throughout, and
> window-cleaning micro-effects (bubbles, drips, sparkles) swapped for
> cleanup-themed ones (sweeper route lines, venue-map floaters, ground paths).

## Pages

| Route                     | Purpose                                              |
| ------------------------- | ---------------------------------------------------- |
| `/`                       | Home — hero, stats, services, philosophy, event types, testimonials |
| `/about/`                 | Story, stats, crew section, values, who we serve      |
| `/services/<slug>/`       | 5 service pages (full-service, overnight, recycling, restrooms, washing) |
| `/events/`                | Event types overview                                 |
| `/events/<slug>/`         | 4 dedicated event pages (music festivals, fairs, parades, street fests) |
| `/contact/`               | Event-scoping quote form + details                   |

Service and event pages are **data-driven**: edit `src/data/services.ts` or
`src/data/events.ts` and the pages (plus sitemap entries) update automatically.

## Tech stack

- [Astro](https://astro.build) (static output) + TypeScript
- Tailwind CSS via `@astrojs/tailwind`
- `@astrojs/sitemap` — generates `sitemap-index.xml` + `sitemap-0.xml` at build
- Vanilla TypeScript only: mobile menu, scroll reveal, form enhancement
- No component frameworks, no UI libraries

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # astro check (type checking)
npm run build      # static build → dist/
npm run preview    # serve the built site
```

The repo root provides a portable Node in `.tooling/` (for machines without
system Node):

```bash
export PATH="$PWD/.tooling/node-v24.19.0-win-x64:$PATH"
```

## Where to edit things

- **Company info** (name, phone, email, hours, stats) → `src/data/site.ts`
- **Services** (content, benefits, FAQs, meta descriptions) → `src/data/services.ts`
- **Event types** → `src/data/events.ts`
- **Testimonials** → `src/data/reviews.ts` (currently illustrative placeholders)
- **Colors / fonts** → `tailwind.config.cjs` (evergreen + safety-amber, Inter-era pairing: Manrope + Fraunces)
- **Photos** → `public/images/`, wired through `src/data/images.ts`;
  see `ATTRIBUTIONS.md` for the CC0 source of every photo

## Photos & licensing

All photography is **CC0 (public domain)**, sourced via Openverse from
StockSnap, Rawpixel, Flickr CC0 accounts, and Wikimedia Commons. Full source
list in [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md). To swap any image: drop the new
file into `public/images/` (same name) or edit the path in
`src/data/images.ts`.

## SEO

- Unique `<title>` + meta description per page
- Open Graph + Twitter Card tags (branded `og-image.svg`)
- Canonical URLs, `robots.txt`, auto-generated `sitemap.xml`
- JSON-LD: `LocalBusiness` (home/events), `Service` (service pages), `AboutPage`, `ContactPage`
- Semantic HTML, one `h1` per page, aria labels, alt text on all photos

Update `site` in `astro.config.mjs` before deploying if the domain changes.

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and
pushes it to Cloudflare Pages:

- push to `main` → production (**a-better-clean.pages.dev**)
- push to `dev` → preview (**dev.a-better-clean.pages.dev**)

Build command (`npm run build`) and output directory (`dist`) are recorded in
`wrangler.toml`.

**One-time setup** (the only manual step is the API token):

1. Create a Cloudflare API token: dashboard → **My Profile → API Tokens →
   Create Token → "Edit Cloudflare Workers"** template (or a custom token)
   with *Account: Cloudflare Pages: Edit* and *Account: Workers Scripts: Edit*.
2. Add it as a repo secret:

   ```bash
   gh secret set CLOUDFLARE_API_TOKEN --repo brycejensen540/a-better-clean
   ```

3. Push to `main` (or `dev`) — the workflow builds and deploys automatically.

## Notes

- The contact form is intentionally static: submitting composes a pre-filled
  email to the company inbox in the visitor's mail app (no backend). The phone
  number is always the fastest path and is shown on every page.
- Testimonials in `src/data/reviews.ts` are placeholder quotes — replace with
  real client quotes before launch.
- Phone/email/domain are placeholders (`example.com`, `555` number) — update
  `src/data/site.ts` with the real contact details.
