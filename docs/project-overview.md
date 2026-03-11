# Project: Sales University Website

## Primary Goal
- Convert visitors into booked discovery calls.
- Metric of success: number of booked appointments (primary KPI).

## Positioning
- Target audience: young entrepreneurs / business-minded.
- B2B + B2C.
- Visual vibe: dark, premium, “Apple-style” feel (overall look/feel, not an exact replica).
- Motion: subtle premium motion (not cinematic scroll stories).

## Hard Requirements
- No prices displayed on the site.
- Primary CTA: “Book a call”.
- Static imagery only (no background videos).
- Navbar should be simple and always available.
- “See more” style interactions should scroll the user to the tier cards section.

## Pages (MVP)
- Home (landing)
- About (Meet Lucas / Meet Lorenzo)
- Blog (placeholder allowed for now)
- Contact (or “Book a call” section; may route to scheduling)

## Key Sections (Home)
1) Hero (crest/logo + headline + subtext + CTA)
2) Tiers preview (Gold / Platinum / Black) with blurred details and “Details / See more”
3) Tier detail sections (one section per tier card; can reuse component)
4) Final CTA strip (book call)

## Future/Expandable
- Tier pages (if client wants each tier to have its own page later)
- AI chat receptionist add-on (optional feature)

## Tech Decisions (Current)
- Next.js (App Router) + TypeScript + Tailwind.
- Motion library decision deferred to motion-system.md (spec-first).

## Definition of Done (MVP)
- Responsive desktop-first, works on mobile.
- Clear CTA path to booking.
- Smooth scroll interactions to tiers.
- Performance acceptable (no huge images, basic SEO metadata).