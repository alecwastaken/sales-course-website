# Motion System (Subtle Premium)

## Principles
- Motion should feel expensive, not loud.
- Default: subtle fades + small Y-translation + soft easing.
- Prefer consistency over “random cool animations”.

## Global Rules
- Respect prefers-reduced-motion:
  - If user has reduced motion enabled, disable transforms and use simple opacity changes.
- Avoid heavy scroll-jank:
  - Use lightweight reveal animations, not constant parallax.

## Motion Inventory (MVP)

### 1) Page Load
- Hero crest: fade in + slight scale from 0.98 -> 1
- H1: fade in + y 12px -> 0
- Subtext: fade in delayed
- CTA: fade in delayed
### Hero Crest (Entrance)
- Trigger: on initial page load
- Animation:
  - opacity: 0 → 1
  - scale: 0.98 → 1
  - y: 6px → 0 (very subtle)
- Duration: 0.7s
- Easing: easeOut (or spring with very low bounce)
- Reduced motion: opacity only (no scale/y)

### 2) Hover Micro-interactions
- Primary button: subtle scale 1.0 -> 1.03 + glow/border brighten
- Tier cards: lift 0 -> -6px + border highlight

### 3) Scroll Reveal (Tier section)
- Cards reveal with stagger as they enter viewport.
- Tier detail sections: fade in + y 16px -> 0 as section enters viewport.

### 4) Scroll-To Interaction
- “See more” on a tier card:
  - Smooth scroll to the matching tier detail section.
  - Optionally highlight target section briefly (soft outline glow 800ms).

## Acceptance Criteria
- Animations feel consistent across sections.
- No “bouncy toy” motion.
- Reduced-motion users still have a clean experience.