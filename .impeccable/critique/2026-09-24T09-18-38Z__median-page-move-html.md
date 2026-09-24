---
target: ./median-page/move.html
total_score: 10
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 2
target_identity: "file:/home/justbeginagain/sites/skills/playground/impeccable/demos/median-page/move.html"
target_fingerprint: "sha256:bc3945e116ded58023d3d789a3c8431888a063031c4732b21fdac13d6902931f"
target_path: /home/justbeginagain/sites/skills/playground/impeccable/demos/median-page/move.html
timestamp: 2026-09-24T09-18-38Z
slug: median-page-move-html
closed: true
---
# Critique Report: `median-page/move.html`

**Target**: `./median-page/move.html` — Pulse fitness app, "Move" section
**Mode**: Persuade (landing page for a movement/fitness product)

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | No loading states, no interaction feedback, no confirmation on any action |
| 2 | Match System / Real World | 3 | Copy is natural and encouraging ("Don't train. Play"), but unstyled HTML breaks trust |
| 3 | User Control and Freedom | 2 | Basic nav links exist, but no escape from dead-end `#` hrefs or unresponsive CTAs |
| 4 | Consistency and Standards | 0 | Zero styling; relies entirely on browser defaults; no design system applied |
| 5 | Error Prevention | 0 | No form validation, no guardrails, no confirmation before destructive actions |
| 6 | Recognition Rather Than Recall | 2 | Semantic HTML provides some structure, but no visual cues or icons to aid recognition |
| 7 | Flexibility and Efficiency | 1 | No keyboard shortcuts, no customization, no power-user affordances |
| 8 | Aesthetic and Minimalist Design | 1 | Completely unstyled — every element has identical visual weight; nothing earns its pixel |
| 9 | Error Recovery | 0 | No error states exist; broken `#` hrefs silently fail |
| 10 | Help and Documentation | 0 | No help, tooltips, or contextual guidance anywhere |
| **Total** | | **10/40** | **Critical** |

---

## Design Specificity Verdict

**LLM assessment**: This page has zero design specificity. It is raw, unstyled HTML — the browser's default rendering of `<h1>`, `<h2>`, `<h3>`, `<p>`, and `<a>` tags. Nothing about the visual presentation belongs to "Pulse" or any fitness product. The copy is warm and encouraging, but the visual shell is an empty vessel.

**Deterministic scan**: 2 findings:
- **Color outside DESIGN.md** (advisory): Default black text (`rgb(0, 0, 0)`) is not in the Pulse/Nimbus palette.
- **Flat type hierarchy** (warning): All heading levels and body text render at the same 16px browser default. The 1.00:1 ratio between adjacent sizes violates the 1.25:1 minimum target.

---

## Overall Impression

The copy is the only thing working here. "Don't train. Play" and "Pick a feeling, not a muscle group" are genuinely good lines. But the complete absence of CSS makes the page feel like an abandoned wireframe. The single biggest opportunity is applying any visual design at all.

---

## What's Working

1. **Copy voice**: Warm, direct, product-specific.
2. **Information architecture**: Logical flow — hero → philosophy → movement library → daily challenge → footer.
3. **Semantic HTML**: Proper use of landmark elements. Solid accessibility foundation.

---

## Priority Issues

### P0: No visual design applied
**Fix**: Apply a complete design system — typography, color, spacing, layout, component styles.
**Suggested command**: `/impeccable new-work`

### P1: Flat type hierarchy
**Fix**: Define a type scale with at least 3 distinct size steps.
**Suggested command**: `/impeccable typeset`

### P1: No layout structure
**Fix**: Apply a grid layout for the movement cards, add consistent spacing, create visual containers.
**Suggested command**: `/impeccable layout`

### P2: All CTAs are dead `#` hrefs
**Fix**: Wire up real destinations or add visual feedback for mock CTAs.
**Suggested command**: `/impeccable harden`

### P2: No color — monochrome default
**Fix**: Introduce a brand palette with at least an accent color for CTAs and section highlights.
**Suggested command**: `/impeccable colorize`

---

## Persona Red Flags

### Jordan (First-Timer)
- No visual cues on CTAs
- No icons or imagery in movement library
- Dead links everywhere

### Casey (Distracted Mobile User)
- No responsive design
- No thumb-friendly targets
- No loading states or feedback

### Sam (Accessibility-Dependent User)
- Flat heading hierarchy
- No skip navigation
- No ARIA landmarks

---

## Minor Observations
- Blockquote is semantically correct but visually invisible
- Footer duplicates header nav
- Hero CTA copy differs from header CTA copy

---

## Questions to Consider
1. What would Pulse look like if it had a visual identity?
2. Is this a wireframe or a product?
3. What's the emotional arc, and does the design support it?
