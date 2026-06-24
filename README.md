# AnotherRobot Landing Page

A simple responsive Next.js static site for the AnotherRobot landing page.

## What this is

This is version 1 of the AnotherRobot.com landing page: a fast, static, responsive link hub with a hero section, link cards, one featured video card, and an orange sign-off band.

It is intentionally not a newsletter funnel, not a full content dashboard, and not a complicated web app.

## Local setup

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open the local address printed by the terminal.

## Static build

```bash
npm run build
```

Because `next.config.mjs` uses `output: 'export'`, the finished static website is generated in the `out` folder.

## Cloudflare Pages settings

Use these settings for the simple static deployment path:

- Framework preset: Next.js, or None / Static if you prefer manual settings
- Build command: `npm run build`
- Output directory: `out`
- Root directory: leave blank unless the project is inside a subfolder

## Important files

- `app/page.tsx` — main page layout and content
- `app/globals.css` — all styling and responsive behavior
- `components/RobotHead.tsx` — inline SVG robot mark
- `components/LinkCard.tsx` — reusable card component
- `components/FeaturedVideo.tsx` — featured video section
- `public/assets/logo-horizontal.png` — processed logo/wordmark image from the provided asset

## Things to replace before going live

- Real YouTube URL
- Real Blog URL, once the blog exists
- Real Bluesky URL
- Real Instagram / Threads URLs
- Real AnotherRobot.games URL
- Real featured video title, description, and link
- Real thumbnail image, if you want one instead of the CSS placeholder

## Suggested next polish pass

- Replace `logo-horizontal.png` with the final exported SVG from Affinity when available
- Replace inline placeholder icons with final approved icon set if desired
- Add favicon and social preview image
- Run the page through mobile testing on an actual phone
