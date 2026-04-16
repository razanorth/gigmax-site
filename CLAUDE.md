# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

This repo holds source materials and deliverables for **GigMax** — a productized service that builds and launches in-house organic UGC programs for consumer apps. The repo is not a conventional application codebase; it is a hybrid of (a) static HTML pitch/deck buildouts that are deployed to Vercel, and (b) a handoff pack of briefs and PRDs used to drive construction of the GigMax marketing site.

There is no package.json at the root, no framework, no test suite, and no lint config. Treat each subtree as self-contained.

## Layout

- `pitch/buildouts/` — primary deployed artifact: a single `index.html` slide-based pitch experience with inline CSS/JS and assets in `assets/`. This is what `gigmax.xyz/pitch/buildouts/` serves.
- `pitch/buildouts/screenshot-slide1.mjs` — Puppeteer script that renders slide 1 of `index.html` at 1200×630 and writes `assets/og-image.png`. Run after meaningful visual changes to slide 1 so OG previews stay in sync. Requires puppeteer installed ad hoc (`npm i puppeteer` in that dir, then `node screenshot-slide1.mjs`).
- `pitch/zencastr/` — a separate captured/static HTML artifact (very large single file). Treat as reference material, not something to edit.
- `Docs/Gigmax-website-handoff/` — the **source of truth for the still-to-be-built GigMax marketing site**. When the user asks to "build the site," work from these in order: `gigmax-master-prompt.md` → `gigmax-prd-clean.md` → `gigmax-website-copy-template.md` → `gigmax-assets-and-references.md`. The master prompt is intentionally strict; follow its constraints (no invented proof, no slide-deck feel, premium/editorial/minimal).
- `.vercel/` — project is linked to Vercel project `gigmax` (org `team_hao3WHQBNIGi9HPpVqUK76UL`). Gitignored.

## Deployment

Vercel deploys the repo as static content. There is no build step — files are served as-is. `gigmax.xyz/pitch/buildouts/` is the live slide experience. Use the Vercel CLI or `mcp__vercel__deploy_to_vercel` when the user asks to deploy; do not invent a build pipeline.

## Editing conventions for `pitch/buildouts/index.html`

- Everything (HTML, CSS, JS) lives inline in one file. Keep it that way unless the user asks to split.
- Design tokens are defined as CSS custom properties at the top of `<style>` (`--bg`, `--gold`, `--text`, etc.) — reuse them rather than introducing new hex values.
- Fonts: DM Sans (body) and Playfair Display (display), loaded from Google Fonts.
- If you change slide 1's visual layout, re-run `screenshot-slide1.mjs` to refresh `assets/og-image.png`.

## When building the full marketing site

Follow `Docs/Gigmax-website-handoff/gigmax-master-prompt.md` literally. Key non-obvious constraints from that brief:
- Single-page scrolling site, not a deck-on-web.
- Stack target is React + Tailwind (per the handoff instructions), even though nothing is scaffolded yet.
- Do not fabricate testimonials, metrics, or logos — use only what's in the copy template and assets reference.
- Visitor must grasp what GigMax is, who it's for, and the CTA within 5 seconds.

## Critical project constraints

- Preserve the existing pages at `pitch/buildouts/index.html` and `pitch/zencastr/index.html`.
- Do not delete, overwrite, or restructure those existing pitch pages unless the user explicitly approves it.
- Before making major code changes, first inspect the current structure and explain:
  1. where the new GigMax marketing site should live
  2. whether the implementation should remain static HTML or be converted to React/Next
  3. what routes or files could be affected
  4. the safest implementation plan
- Do not begin major implementation until that plan is shown to the user.
- When building the new GigMax marketing site, use `Docs/Gigmax-website-handoff/` as the source of truth.
- The new site must not feel like a slide deck, creator portfolio, or generic SaaS template.
- Prioritize clarity, trust, hierarchy, and mobile responsiveness over visual tricks.
- Do not fabricate proof, metrics, logos, testimonials, or founder stats.
- Keep the project ready for Vercel deployment, but do not change deployment structure unless necessary and explained first.