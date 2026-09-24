---
version: 1
slug: "median-page-guides-html"
primary_target: "median-page/guides.html"
related_targets: []
---

# Surface Brief: guides.html

## Job and audience
Fitness enthusiasts looking for practical guidance on movement, recovery, food, and mindset. Developers evaluating the Impeccable design skill. Both arrive to find useful, scannable content that builds trust.

## Outcome and proof
Primary task: inspire visitors to read a guide that matches their current need. Success: visitors immediately understand the content hierarchy, find a relevant article, and feel confident clicking "Read the guide." Real proof: the design demonstrates how the Nimbus design system adapts to a content-heavy guides page while maintaining fitness product authenticity.

## Selected direction
Apply the established Nimbus dark world from index.html. Extract shared styles into a reusable stylesheet. Use bento grid for article cards with category-specific accent colors. Visual authority: the design system is already established; we apply its components and palette to guides content.

## Direction contract

### THESIS
The page owns "guides without pressure" — practical fitness information framed as helpful friends, not authoritative lectures. The card layout establishes this immediately: each guide gets visual weight proportional to its relevance. The category-default flat list is refused; each category gets distinct treatment through color, size, and position.

### OWN-WORLD
Nimbus dark world applied to guides: deep dark (#0d0f0e) background, surface (#151816) cards, electric lime (#c8ff3d) accent for CTAs. Space Grotesk for headlines, Inter for body copy, IBM Plex Mono for category labels and read times. Cards with category-specific accent colors: Movement (teal), Recovery (blue), Food (pink), Mind (purple), Strength (orange), Outdoors (green). Bento grid with featured article spanning 2 columns.

### STORY
Visitor arrives uncertain about where to start with fitness information, leaves understanding there's a guide for their specific situation. First impression: "These guides are written for real people." Core belief: practical advice beats authoritative lectures. Primary action: choose a guide and start reading.

### FIRST VIEWPORT
Hero section with headline "Useful things nobody taught you about feeling good" in Space Grotesk, subtitle about practical fitness information. Featured article card spanning 2 columns with larger treatment. Remaining 5 articles in responsive grid. Each card has category label (IBM Plex Mono), headline (Space Grotesk), description (Inter), read time badge, and CTA. Background: deep dark with subtle gradient. Navigation: minimal, matching index.html with active state.

### FORM
Read mode guides page. Hero section with headline and subtitle. Featured article in bento layout. Article grid with category color coding. FAQ section with styled accordions. Closing section with CTA. Footer with minimal links.

### FINISH
Unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Scope and boundaries
Fidelity: production-ready guides page. Breadth: single page (guides.html). Interactivity: hover states, focus states, accordion animations. Target: guides.html file. What remains untouched: content copy, FAQ questions, article order. Anti-goals: avoid generic article grid, maintain the design system's integrity, don't overwhelm with options.

## States and ranges
Content: hero section, 6 article cards (with featured state), FAQ accordion, closing CTA. States: default, hover, focus, active nav. Responsive: mobile, tablet, desktop.

## Interaction and layout
Hierarchy: hero → featured article → article grid → FAQ → closing → footer. Topology: hero section, bento grid for articles, single column for FAQ. Responsiveness: fluid columns, mobile-first. Affordances: clear CTAs, hover effects, focus indicators, accordion expand/collapse. Feedback: visual transitions on interaction.

## Constraints and open decisions
Platform: web. Delivery: static HTML/CSS. Accessibility: keyboard navigation, screen reader support. Localization: English only. Reusable components: extract shared styles from index.html. Choices a builder must not invent: color palette, typography system, spacing scale.
