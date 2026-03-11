# Phase 1 — Foundation (Project Setup + Layout Shell)

## Objective
Create the base layout, routing, and reusable structure so feature work is fast.

## Deliverables
- Clean global layout with dark theme baseline.
- Navbar component.
- Route skeletons: Home, About, Blog, Contact.
- Basic footer.

## Implementation Steps (Codex)
### Step 1: Folder Structure
Create:
- `src/components/layout/`
- `src/components/sections/`
- `src/components/ui/`
- `src/lib/`

### Step 2: Layout + Global Styles
- Ensure `src/app/globals.css` supports dark theme default.
- In `src/app/layout.tsx`:
  - Set body background to near-black.
  - Add base font smoothing.
  - Include Navbar + Footer wrapping `{children}`.

### Step 3: Navbar
Create `src/components/layout/Navbar.tsx`
Requirements:
- Left: crest placeholder (image later) + “Sales University”
- Right links: Home, About, Blog, Contact
- Rightmost primary button: “Book a call”
- Sticky optional (nice-to-have); if sticky, use subtle translucent background on scroll.

### Step 4: Footer
Create `src/components/layout/Footer.tsx`
- Minimal copyright line.

### Step 5: Route Pages
Create routes:
- `src/app/about/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/contact/page.tsx`

Use placeholders (clean, centered) for now.

## Acceptance Criteria
- `npm run dev` runs with no errors.
- Navigation works between pages.
- Dark theme baseline is consistent.