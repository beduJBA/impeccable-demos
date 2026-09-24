---
target: ./median-page/index.html
total_score: 18
max_score: 36
na_heuristics: 7,9
p0_count: 0
p1_count: 2
p2_count: 2
p3_count: 1
target_identity: "file:/home/justbeginagain/sites/skills/playground/impeccable/demos/median-page/index.html"
target_fingerprint: "sha256:5ae3d2d1d719eee2a2f2808c382c6f696c169a0f93c147ed5c8bd5ed8a6ca232"
target_path: /home/justbeginagain/sites/skills/playground/impeccable/demos/median-page/index.html
timestamp: 2026-09-23T23-29-45Z
slug: median-page-index-html
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Mobile menu toggle works; no feedback on CTA clicks, no loading states |
| 2 | Match Between System and Real World | 3 | Plain language throughout; "Now with AI" eyebrow is hollow |
| 3 | User Control and Freedom | 2 | Mobile menu has close paths; no keyboard Escape, no undo |
| 4 | Consistency and Standards | 3 | Cohesive color/type system; identical card layout everywhere |
| 5 | Error Prevention | 1 | No forms to validate, but zero guardrails on any interaction |
| 6 | Recognition Rather Than Recall | 2 | Main actions visible; SVG icons have no text labels |
| 7 | Flexibility and Efficiency | n/a | Landing page — no task efficiency applies |
| 8 | Aesthetic and Minimalist Design | 3 | Clean, uncluttered; every element present, nothing extra |
| 9 | Error Recovery | n/a | No interactive states produce errors |
| 10 | Help and Documentation | 1 | No help, tooltips, or guidance anywhere |
| **Total** | | **18/36** | **50% — Acceptable** |

## Design Specificity Verdict

**LLM assessment:** Category-interchangeable. Swap "Nimbus" for any SaaS name and nothing breaks. Warm-cream background, icon-tile-over-heading cards, generic value propositions, and Space Grotesk + Inter pairing are the exact template every AI generator produces. No visual or verbal signature belongs to Nimbus specifically.

**Deterministic scan:** 7 findings — 3x icon-tile-stack, 2x overused-font, 1x cream-palette, 1x low-contrast. The detector confirmed every LLM finding and caught the contrast issue the eye glosses over.

## Priority Issues

1. **[P1] Icon-tile-stack on all three feature cards** — Universal AI-slop pattern. Fix: inline icons with heading or drop containers.
2. **[P1] Overused font pairing (Space Grotesk + Inter)** — Cheapest signal of authorship, currently erased. Fix: choose a display face with character.
3. **[P2] Cream/beige background palette** — Most common SaaS landing page colorway. Fix: choose a palette that reflects what Nimbus is.
4. **[P2] Hero eyebrow ("Now with AI")** — Banned scaffold, semantically empty. Fix: delete or make specific.
5. **[P3] Low-contrast hover state** — 2.2:1 on CTA hover, below WCAG AA. Fix: lighten hover text or darken accent.

## Persona Red Flags

- **Jordan (First-Timer):** "Now with AI" raises unanswered questions; copy assumes technical knowledge; no social proof.
- **Casey (Distracted Mobile):** Identical cards on mobile mean no hierarchy; single CTA with no secondary path.
- **Riley (Stress Tester):** All nav links go to `#`; menu closes on placeholder taps; no edge-case states.
