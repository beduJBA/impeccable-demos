# Surface Brief: move.html

## Job and audience
Developers evaluating the Impeccable design skill and fitness enthusiasts exploring movement options. Both arrive to judge whether the skill's design capabilities are worth adopting, and whether the fitness product resonates with their needs.

## Outcome and proof
Primary task: inspire visitors to explore movement options and understand the product's philosophy. Success: visitors should be impressed by the visual transformation and feel compelled to explore the movement library. Real proof: the design demonstrates the skill's ability to transform a bland page into exceptional design while maintaining fitness product authenticity.

## Selected direction
Split layout hero with alternating left/right sections. Adapt the existing Nimbus dark SaaS design system for fitness context: deep dark background, electric lime accent, Space Grotesk display, Inter body, IBM Plex Mono labels. Visual authority: the design system is already established; we adapt its components and palette for fitness content.

## Direction contract

### THESIS
The page owns "movement as play" — fitness framed as joyful exploration rather than disciplined exercise. The split layout hero establishes this immediately: one side shows the human truth (movement), the other shows the system (structured options). The category-default arrangement of identical cards is refused; each movement category gets distinct visual weight through the bento grid.

### OWN-WORLD
Nimbus dark world adapted for fitness: deep dark (#0d0f0e) background, surface (#151816) cards, electric lime (#c8ff3d) accent for CTAs and highlights. Space Grotesk for display headlines, Inter for body copy, IBM Plex Mono for labels and durations. Bento grid with varied card proportions. Layered elevation with color-matched glows on hover.

### STORY
Visitor arrives skeptical of fitness marketing, leaves understanding this is movement for real people in real situations. First impression: "This isn't another workout app." Core belief: movement should fit your life, not the other way around. Primary action: explore the movement library and find something that resonates.

### FIRST VIEWPORT
Split layout: left side has headline "Your body wasn't designed to sit still" in Space Grotesk, subtitle, and "Explore movements" CTA. Right side: abstract visualization of movement (could be CSS-generated gradient animation or simple illustration). Background: deep dark with subtle gradient. Navigation: minimal, logo left, links right, CTA button with lime accent.

### FORM
Persuade mode landing page. Split layout hero with alternating left/right sections for content blocks. Bento grid for movement library. Single column for challenge section. Footer with minimal links.

### FINISH
Unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Scope and boundaries
Fidelity: production-ready landing page. Breadth: single page (move.html). Interactivity: basic hover states, focus states, simple animations. Target: move.html file. What remains untouched: complete freedom to change everything. Anti-goals: avoid generic fitness clichés, maintain the design system's integrity.

## States and ranges
Content: hero section with headline and subtitle, philosophy section with quote, movement library with 6 categories (each with title, description, duration), challenge section, footer. States: default, hover, focus. Responsive: mobile, tablet, desktop.

## Interaction and layout
Hierarchy: hero → philosophy → movement library → challenge → footer. Topology: split layout hero, alternating sections, bento grid for movement library. Responsiveness: fluid columns, mobile-first. Affordances: clear CTAs, hover effects, focus indicators. Feedback: visual transitions on interaction.

## Constraints and open decisions
Platform: web. Delivery: static HTML/CSS. Accessibility: keyboard navigation, screen reader support. Localization: English only. Reusable components: adapt existing Nimbus components for fitness context. Choices a builder must not invent: color palette, typography system, spacing scale.