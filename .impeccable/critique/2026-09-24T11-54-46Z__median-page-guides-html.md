---
target: ./median-page/guides.html
total_score: 10
max_score: 36
na_heuristics: 7,10
p0_count: 2
p1_count: 2
target_identity: "file:/home/justbeginagain/sites/skills/playground/impeccable/demos/median-page/guides.html"
target_fingerprint: "sha256:a68b4f194e0155d3b67cb8455688e25565755921382b0553ac9cd2a4d8f05a85"
target_path: /home/justbeginagain/sites/skills/playground/impeccable/demos/median-page/guides.html
timestamp: 2026-09-24T11-54-46Z
slug: median-page-guides-html
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 0 | No feedback on any interaction — links have no hover/active/focus states, no loading indicators, no confirmation of navigation intent |
| 2 | Match System / Real World | 2 | Copy is warm and human, but unstyled HTML reads as a wireframe, not a finished product |
| 3 | User Control and Freedom | 3 | Native `<details>` FAQ works correctly; back navigation exists in header/footer |
| 4 | Consistency and Standards | 1 | All six article cards are structurally identical but visually undifferentiated — no card boundaries, no spacing rhythm, no category treatment |
| 5 | Error Prevention | 1 | `#` hrefs on all guide links will navigate to the page top; no indication these are placeholders |
| 6 | Recognition Rather Than Recall | 1 | Category labels are plain `<p>` tags with zero visual distinction from body text; no icons, no color coding |
| 7 | Flexibility and Efficiency | n/a | Read-mode content index — no power-user actions to optimize |
| 8 | Aesthetic and Minimalist Design | 0 | Every element competes at the same visual weight. No hierarchy, no breathing room, no intentional white space |
| 9 | Error Recovery | 0 | No error states exist; `#` links offer no fallback or graceful degradation |
| 10 | Help and Documentation | 2 | The FAQ section is genuinely useful and well-written, but lacks visual affordance (unstyled `<details>`) |

**Total: 10/36** (2 heuristics scored n/a · Critical)

## Design Specificity Verdict

**LLM assessment:** This page could belong to any product. There is zero product character — no color, no typography choices, no visual language. The Pulse brand appears only in copy. Strip the words and nothing identifies this as Pulse versus any other fitness content site. The copy is the only authored element; everything else is browser defaults.

**Deterministic scan:** 2 findings flagged: flat-type-hierarchy (warning) — all heading roles render at 16px, 1.00:1 size ratio; design-system-color (advisory) — default rgb(0,0,0) text is outside the DESIGN.md palette. The page has no DESIGN.md tokens applied at all.

## Overall Impression

The writing is excellent. The content architecture is sound. But the page ships as raw, unstyled HTML with zero hierarchy, zero brand expression, and zero interaction feedback. The content deserves a frame that earns its quality.

## What's Working

1. Copywriting is exceptional — specific, memorable, tonally consistent.
2. Content architecture is logical — hero, article grid, FAQ, closing CTA.
3. Information density is appropriate — six guides, four FAQ items.

## Priority Issues

**[P0] What:** Every element renders at the same visual weight — no typography hierarchy exists.
**Why it matters:** Users cannot scan the page. The eye has no entry point.
**Fix:** Apply the DESIGN.md type scale with minimum 1.25:1 size steps between heading levels.
**Suggested command:** `/impeccable typeset`

**[P0] What:** The entire page is unstyled HTML. No colors, no spacing, no cards, no brand.
**Why it matters:** Pulse's identity exists only in copy. No visual trust signal or emotional register.
**Fix:** Apply the Nimbus design system from DESIGN.md.
**Suggested command:** `/impeccable shape`

**[P1] What:** No interactive states on any element — no hover, focus, or active states.
**Why it matters:** Zero feedback that elements are interactive. Keyboard users cannot navigate.
**Fix:** Add focus-visible outlines, hover color shifts, and a styled CTA pill.
**Suggested command:** `/impeccable adapt`

**[P1] What:** Category labels are plain paragraph tags with no visual treatment.
**Why it matters:** Primary navigation signal within the article grid is invisible.
**Fix:** Style as monospace uppercase labels with color-coded accents per category.
**Suggested command:** `/impeccable colorize`

**[P2] What:** All guide links point to `#` — clicking navigates to page top with no feedback.
**Why it matters:** Users expect navigation; a silent jump to top is disorienting.
**Fix:** Wire real URLs or visually indicate placeholders.
**Suggested command:** `/impeccable clarify`

## Persona Red Flags

**Jordan (First-Timer):** Cannot identify content hierarchy without reading everything. Unstyled FAQ may not register as interactive. Guide link placeholders cause disorientation.

**Sam (Accessibility-Dependent):** No focus indicators. Category labels not semantically distinguished. No color differentiation. `#` hrefs announced as links but lead nowhere.

**Riley (Stress Tester):** Guide links silently fail. FAQ is visually ambiguous. Zero responsive behavior detected.

## Minor Observations

- `<details>` FAQ is a strong accessibility pattern needing visual treatment
- No `<meta description>` tag — missed SEO opportunity
- No favicon — generic browser tab icon

## Questions to Consider

1. "What if each guide card had a color accent matching its category?"
2. "Does the FAQ deserve the same visual weight as the guide cards?"
3. "What's the smallest change that makes this page feel authored rather than defaulted?"
4. "Should the closing section feel like a manifesto moment or a quiet nudge?"
