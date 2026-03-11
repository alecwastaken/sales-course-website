# Feature: Tier Detail Locking (Gold visible, Platinum/Black progressive lock)

## Objective
When the user scrolls to tier detail sections:
- Gold shows all details (bullet points fully visible).
- Platinum and Black show their bullet points briefly, then progressively fade/lock the content.

This should feel premium, not gimmicky.

## UX Spec

### Tier detail layout (all tiers)
Each tier section contains:
- Title (Gold / Platinum / Black)
- Short paragraph:
  - “This is for you if…”
  - “This is not for you if…”
- Bullet list (the “membership includes” items)
- CTA row:
  - Primary button: “Book a call”
  - Secondary link (optional): “Request access” (can be same booking for now)

## Visibility Rules (Final)

### Gold
- All bullet points always visible.
- No lock overlay.
- No fade or blur logic.

### Platinum
- First 2 bullet points:
  - Always visible.
  - Never blurred.
- Remaining bullet points:
  - Fully visible for ~2 seconds after section enters viewport.
  - Then progressively:
    1) Opacity reduces
    2) Blur increases
    3) Lock overlay appears
- Lock overlay message:
  - “Platinum is reserved. Book a call to unlock full access.”

### Black
- First 2 bullet points:
  - Always visible.
- Remaining bullet points:
  - Fully visible for ~1 second after section enters viewport.
  - Then:
    1) Faster fade
    2) Slightly stronger blur
    3) Lock overlay appears
- Lock overlay message:
  - “Black is invitation-only. Book a call to unlock full access.”

## Lock Behavior Rules (Final)

- Lock effect runs only once per page load.
- Use a ref flag (hasTriggered) per tier section.
- When section enters viewport:
    if (!hasTriggered) {
        start timer
        set hasTriggered = true
    }

- If user scrolls away and returns:
    - Do NOT replay reveal.
    - Section remains in locked state (for Platinum/Black).

- Gold tier never uses lock logic.

## Timing & Behavior (Desktop)
- Trigger: when tier section enters viewport (at least 40–60% visible)
- Platinum:
  - Visible duration: ~1.5–2.5s
  - Fade duration: ~1.0–1.5s
  - Lock overlay appears at end of fade
- Black:
  - Visible duration: ~0.8–1.5s
  - Fade duration: ~0.8–1.2s
  - Lock overlay appears at end of fade

## Mobile Rules
- Keep it lighter:
  - Either no progressive lock
  - OR lock after a longer delay
Because mobile scroll is fast and we don’t want “annoying”.

## Implementation Notes
- Implement locking with CSS classes + state timers per section.
- Use IntersectionObserver (or motion in-view) to start the timer only once per page load.
- Provide a “reveal again” behavior:
  - If the user scrolls away and comes back, do NOT replay the full reveal repeatedly (feels cheap).
  - Option: replay only once per session OR only on hard refresh.

  ## Implementation Strategy (Technical)

- Each TierDetail section receives:
  - tierType: "gold" | "platinum" | "black"
  - bullets: string[]

- For Platinum/Black:
  - Render bullets.slice(0, 2) normally.
  - Render bullets.slice(2) inside a wrapper div:
    - This wrapper is controlled by state: isLocked.

- Use IntersectionObserver (or motion in-view) to trigger:
  - startRevealTimer() once per section load.

- Timer logic:
  - After delay:
      setIsLocked(true)

- When isLocked:
  - Apply:
      opacity: 0.3
      filter: blur(4px–6px)
      pointer-events: none
  - Show lock overlay absolutely positioned inside section.

## Acceptance Criteria
- Gold = always readable bullet list.
- Platinum/Black = user sees bullets briefly, then content becomes partially unreadable and clearly “locked”.
- Lock overlay looks premium (soft border, subtle glass blur, lock icon).
- No pricing shown.
- Performance stays smooth (no heavy effects).