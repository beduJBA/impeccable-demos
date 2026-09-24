# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers evaluating the Impeccable design skill. They are judging whether the skill's critique, detection, and design capabilities are worth adopting into their own workflow. The demos are their first impression of what the skill can do.

## Product Purpose

A curated set of demo artifacts that showcase the Impeccable skill's capabilities — particularly its critique and design-detection features — in live presentations or self-guided evaluation. Success means a developer walks away convinced the skill catches real design problems they would have missed.

## Positioning

A demo kit that proves a design skill's value by running it against intentionally mediocre work. Unlike generic showcases, these demos are designed to be arguable: the median page looks fine until the detector reveals what the eye glosses over.

## Operating Context

- Demos are served locally (`python3 -m http.server`) and narrated or explored solo
- The median page is a deliberately bland SaaS landing — warm-cream bg, Inter, three icon-tile cards, manifesto copy — tuned to trigger the detector's rule hits
- A second demo proves the hook fires automatically on file edits, no skill invocation required
- Pre-run checklist ensures demos work before a live presentation

## Capabilities and Constraints

- Static HTML only, no build step, no framework
- Local serving via `python3 -m http.server` on configurable ports
- No image generation available — all assets are inline emoji or CSS
- The median page must NOT be fixed or improved; its mediocrity is the point
- Demo 2 (hook) requires a compatible harness (Claude Code or equivalent) to show the system-reminder injection

## Evidence on Hand

- `median-page/index.html` — the primary demo target, a deliberately median SaaS landing page
- `README.md` — full demo runbook with step-by-step instructions and fallback screenshots
- `.impeccable/config.local.json` — hook consent already accepted

## Product Principles

1. **Show, don't tell.** Every demo runs real tool output, not slides or mockups.
2. **The detector can't be sweet-talked.** The median page looks fine to humans; the deterministic detector catches what prose reviews miss.
3. **The hook works uninvited.** The scariest demo is the one nobody called — it watches edits and pushes back.
4. **Pre-run reliability.** Demos must work night-before so the presenter narrates output, not troubleshooting.
