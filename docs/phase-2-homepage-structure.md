# Phase 2 — Home Page Structure (No fancy motion yet)

## Objective
Build the homepage sections and content scaffolding with clean components.

## Sections
1) Hero
2) Tier Cards (Gold/Platinum/Black)
3) Tier Detail Sections
4) Final CTA

## Implementation Steps (Codex)
### Step 1: Hero Section Component
Create `src/components/sections/Hero.tsx`
Include:
- Crest placeholder (large centered)
- H1: “Welcome to Sales University”
- Subtext lines:
  - “Ran by winners for winners”
  - “Join the community today”
- CTA button: “Book a call”
- Optional secondary text link: “See tiers” (scrolls to tier cards)

### Step 2: Tier Cards Component (teaser only)
Create `src/components/sections/TierCards.tsx`
- Render 3 cards: Gold, Platinum, Black
- Each card includes:
  - Title
  - 1–2 sentence brief description (NO bullet list here)
  - Button: “See details” (scroll to tier section)

### Step 3: Tier Detail Sections (full details + locking behavior)
Create `src/components/sections/TierDetails.tsx`
- Render 3 stacked sections with IDs:
  - `tier-gold`
  - `tier-platinum`
  - `tier-black`

For each tier section:
- Title
- Two short paragraphs:
  - “This is for you if…”
  - “This is not for you if…”
- Bullet list (membership includes)

Rules:
- Gold: bullet list fully visible.
- Platinum/Black: implement progressive locking behavior per `docs/feature-tier-locking.md`.

Each section ends with CTA:
- Primary: “Book a call”
- Platinum/Black show locked message on top of blurred bullets.

(Do not implement the motion yet; just structure and basic locking with CSS/state is fine for Phase 2.)

### Step 4: Final CTA Strip
Create `src/components/sections/FinalCTA.tsx`
- Simple headline + CTA button.

### Step 5: Wire Into Home Page
Update `src/app/page.tsx` to render:
- `<Hero />`
- `<TierCards />`
- `<TierDetails />`
- `<FinalCTA />`

## Hero Crest Sizing

- Use next/image
- Centered horizontally
- Responsive sizing:
  - Desktop: width: 35vw, max-width: 560px
  - Mobile: width: 70vw, max-width: 360px
- Maintain aspect ratio (height auto)
- Add margin-bottom spacing before headline

## Acceptance Criteria
- All sections render with clean spacing.
- Scroll-to behavior works (smooth).
- No pricing shown anywhere.