# William Pradana Putra — Portfolio

A premium, **Apple-homepage-style** single-page portfolio. Each section sits on its
own background color to signal a new context, with alternating light/dark tiles.
Bilingual (EN | ID). Built with **Next.js (App Router) · Tailwind CSS · Framer Motion**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Production: `npm run build && npm start`

## Layout — a hub + four detail pages (Apple-style)

The homepage only *previews* the sections (hero + four clickable cards with icon +
tagline + "Learn more"). Each card opens its own dedicated detail page — like Apple's
homepage tiles → product pages.

| Route | Section | Hero color |
|---|---|---|
| `/` | **Hub** — hero + 4 section cards | Black hero → light-gray card grid |
| `/about` | **About Me** — the Journey (Groundwork → Growth → Leadership) + ethos | Light |
| `/portfolio` | **Portfolio** — Kafanku case study (philosophy → circular innovation → pivot → result) | Light + black band |
| `/projects` | **Projects** — Commerce OS bands + lead magnets | Light + alternating bands |
| `/photoshoot` | **Photo Shoot Project** — commercial modeling (intro, categories, gallery) | Light + dark band |

The sticky glass nav uses route links with an active-state pill. Text is light while
over the homepage's black hero, dark on the light detail pages. Each section/card has
an icon (currently lucide-react placeholders — swap for real brand icons later).
Hub cards + section metadata live in `lib/content.js` (`hub`, `photoshoot`, etc.).

## Commerce OS — four featured screens

Shown as **alternating-color bands** (Apple product-section style), each a **live
React mockup** (not an image) framed in a browser window with a **"Simulated Data ·
Privacy Protected"** badge:

1. **Dashboard** (dark band) — revenue KPIs, channel split, order pipeline, recent orders
2. **Inventory** (light band) — BOM / Produce: fabric off-cuts → Paket Ekonomis SKUs
3. **Finance / Keuangan** (dark band) — net-profit engine per brand & channel
4. **Web Builder** (gradient band) — drag-and-drop landing-page builder

Extra mockups (Marketing/ROAS, Orders) still live in `components/commerce/views.jsx`
if you want to feature them too.

## Live demos (open in a new tab)

- **Commerce OS demo** at `/demo/commerce-os/` — a static build of the real Portal RHK
  Inertia/React admin, fed with dummy data. Source in `demo-src/commerce-os/`.
- **Kepulanganku (Amanah Terakhir)** at `/games/amanah-terakhir/` — the real Phaser game,
  rebuilt from `kOS Development/kos/games/amanah-terakhir` with the portfolio base path.

The Commerce OS screenshots on `/projects` are deliberately **not responsive**: they render
at a fixed 1040px desktop layout and are scaled down to fit (`components/commerce/FixedScale.jsx`),
so the app looks identical everywhere, just smaller on a phone.

## Lead magnets & creative

- **Kepulanganku** — educational game (colorful tile)
- **Rukunku App** — community-admin PWA
- **Visual / Creative** — freelance commercial model note

## Editing content & translations

All copy lives in **`lib/content.js`**, every string as `{ en, id }`. Edit there and
both languages update. Language choice persists via `localStorage`.

## Where to add real assets

1. **Portrait** — replace the placeholder in the Hero (`app/page.jsx`) with a Next
   `<Image>` pointing at `/public/portrait.jpg`.
2. **Campaign imagery** — same idea in the Creative tile.
3. **Section icons** — currently lucide placeholders in `app/page.jsx`
   (`SectionKicker` / `SCREEN_ICON`); swap for your real icon set.
4. **Contact email** — `wpputra90@gmail.com` in `Nav.jsx` / `Footer.jsx`.

## Design tokens (`tailwind.config.js`)

- `applegray` `#f5f5f7`, `appleink` `#1d1d1f`, `applesub` `#6e6e73`, `appleline`,
  `appleblue` — Apple light system
- `ink` / `chalk` / `muted` — dark tiles
