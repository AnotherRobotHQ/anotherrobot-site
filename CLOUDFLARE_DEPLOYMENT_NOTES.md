# Cloudflare Pages Deployment Notes

This project is set up as a static Next.js export.

## Why this is the simpler path

The site does not need a backend, database, API routes, login system, or server-side rendering. It can be built into static files and hosted by Cloudflare Pages.

## Steps

1. Put this project in a GitHub repository.
2. In Cloudflare, create a new Pages project.
3. Connect the GitHub repository.
4. Use the build command `npm run build`.
5. Use the output directory `out`.
6. Deploy.
7. After it works on the Cloudflare preview URL, connect `AnotherRobot.com`.

## Later upgrades

If AnotherRobot.com becomes a bigger site with dynamic content, forms, server-rendered pages, or API routes, that may be a separate Cloudflare Workers / full-stack Next.js path.

For version 1, keep it static.
