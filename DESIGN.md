---
name: Nimbus
description: Volt-inspired dark SaaS landing page — deep dark background, electric lime accent, bento grid layout, three distinct feature cards
colors:
  bg: "#0d0f0e"
  ink: "#e8e8e8"
  muted: "#9a9a9a"
  accent: "#c8ff3d"
  accent-dim: "#a3d632"
  surface: "#151816"
  surface-raised: "#1a1e1c"
  border: "#2a302c"
  card-speed: "#34d399"
  card-secure: "#60a5fa"
  card-scale: "#f472b6"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: "clamp(1rem, 2vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.08em"
    textTransform: "uppercase"
rounded:
  pill: "999px"
  card: "16px"
  icon: "12px"
spacing:
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  xxl: "64px"
  hero: "96px"
components:
  pill-cta:
    backgroundColor: "{colors.accent}"
    textColor: "#0d0f0e"
    fontFamily: "IBM Plex Mono"
    fontSize: "13px"
    fontWeight: 500
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "32px"
    border: "1px solid {colors.border}"
  bento-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "32px"
    border: "1px solid {colors.border}"
    hoverBorder: "color-matched accent"
---

# Design System: Nimbus (Volt World)

## Overview

**Creative North Star: "Electric Precision"**

A dark, high-contrast SaaS landing page built on the Volt design language. Deep charcoal backgrounds create depth, electric lime accents demand attention, and a bento grid layout breaks the three-identical-cards anti-pattern. Every surface recedes so the content and CTAs can glow.

**Key Characteristics:**
- Deep dark (`#0d0f0e`) background with light text
- Electric lime (`#c8ff3d`) accent — high-energy, high-contrast
- Three-typeface system: Space Grotesk (display), Inter (body), IBM Plex Mono (labels)
- Bento grid with varied card proportions (2-col, tall, 2-col)
- Layered elevation with color-matched glows on hover
- Subtle gradient borders and top-edge highlights on interaction

## Colors

### Primary
- **Deep Dark** (`#0d0f0e`): Page background. Near-black with a slight cool undertone.
- **Surface** (`#151816`): Card and panel backgrounds. One step above the page.
- **Surface Raised** (`#1a1e1c`): Elevated elements, hover states.

### Accent
- **Electric Lime** (`#c8ff3d`): Primary accent. Used on CTAs, labels, glows, and hover states.
- **Lime Dim** (`#a3d632`): Hovered CTA state.

### Neutral
- **Ink** (`#e8e8e8`): Primary text. Near-white for maximum contrast on dark.
- **Muted** (`#9a9a9a`): Secondary text — card descriptions, footer.
- **Border** (`#2a302c`): Subtle separator between surfaces.

### Card Accents
- **Speed** (`#34d399`): Teal-green for performance card
- **Secure** (`#60a5fa`): Blue for security card
- **Scale** (`#f472b6`): Pink for scale card

## Typography

**Display:** Space Grotesk — geometric, modern, high-impact at large sizes
**Body:** Inter — clean, readable, workhorse at small sizes
**Label:** IBM Plex Mono — monospace for category labels, adds technical character

### Hierarchy
- **Display** (Space Grotesk 700, `clamp(2.5rem, 6vw, 4.25rem)`, 1.05): Hero headline
- **Headline** (Inter 600, 18px): Card titles
- **Body** (Inter 400, `clamp(1rem, 2vw, 1.25rem)`): Hero subtitle, card descriptions
- **Label** (IBM Plex Mono 500, 11px, 0.08em, uppercase): Card category labels, eyebrow

## Layout

Max-width 1120px centered container with 24px padding. Bento grid for features:
- **Desktop:** 4-column grid — Speed (2-col), Secure (2-row tall), Scale (2-col)
- **Tablet:** 2-column grid — all cards full-width, secure loses tall span
- **Mobile:** Single column, all cards centered

## Elevation & Depth

- **sm:** Resting cards and pills
- **md:** Hovered buttons
- **lg:** Hovered cards + color-matched border glow
- **accent:** Lime glow on CTA hover
- **Gradient top edge:** Cards reveal a subtle accent gradient line on hover via `::before`

## Components

### Pill CTA
- Electric lime background, dark text, IBM Plex Mono for technical feel
- Hover: darkens, lifts with lime glow shadow

### Bento Cards
- Varied proportions break the identical-cards pattern
- Each card has its own accent color for icon, border glow, and title shift
- Monospace category label above title for structure
- Top-edge gradient reveal on hover

### Navigation
- Space Grotesk logo, Inter links with animated underline
- Mobile: slide-in drawer with dark overlay

## Do's and Don'ts

### Do:
- **Do** use the electric lime sparingly — its intensity gives it power
- **Do** maintain high contrast (ink on dark) for readability
- **Do** use bento grid to give each card visual weight
- **Do** respect `prefers-reduced-motion`

### Don't:
- **Don't** use more than three typefaces
- **Don't** apply shadows at rest — reserved for interaction states
- **Don't** make all cards identical — bento proportions are intentional
- **Don't** use muted text below 4.5:1 contrast ratio
