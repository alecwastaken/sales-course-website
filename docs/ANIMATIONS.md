# Animation Skill — Sales University

## Stack
- **Framework**: Next.js (App Router)
- **Animation library**: Framer Motion
- **Language**: TypeScript + Tailwind CSS

---

## Design Philosophy
This site targets a **premium, luxury audience**. Every animation must feel intentional, restrained, and high-end — close to Apple's aesthetic. Nothing bouncy, nothing playful, nothing fast.

### Core principles
- **Slow is expensive.** Cheap sites animate fast. Luxury sites take their time.
- **Less is more.** One well-crafted animation beats five mediocre ones.
- **Never call attention to itself.** The animation should feel inevitable, not showy.
- **Gravity exists.** Things ease out gently, never spring or bounce.

---

## Easing Reference
Always use these easing values. Never use spring, bounce, or default easing.

```ts
// Primary — smooth deceleration (Apple-style)
ease: [0.25, 0.1, 0.25, 1]

// Enter — content appearing
ease: [0.0, 0.0, 0.2, 1]

// Exit — content leaving
ease: [0.4, 0.0, 1, 1]

// Slow reveal — hero elements, large text
ease: [0.16, 1, 0.3, 1]
```

Never use:
- `ease: "spring"`
- `bounce`
- `stiffness` / `damping` spring configs
- Linear easing for reveals

---

## Timing Reference
```ts
// Micro interactions (hover, tap)
duration: 0.2

// UI transitions (menus, panels)
duration: 0.5 – 0.7

// Page-level reveals
duration: 0.8 – 1.2

// Hero / cinematic moments
duration: 1.2 – 2.0
```

---

## Standard Animation Patterns

### Fade + rise (default reveal)
Use for: text blocks, cards, any content entering the viewport.
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
```

### Fade only (subtle)
Use for: images, backgrounds, overlays.
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
```

### Scale reveal (cards, images)
Use for: membership cards, product images.
```tsx
initial={{ opacity: 0, scale: 0.96 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
```

### Stagger children
Use for: lists, tier names, feature grids.
```tsx
// Parent
<motion.div
  variants={{
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  }}
  initial="hidden"
  animate="show"
>
// Child
<motion.div
  variants={{
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  }}
/>
```

### Scroll-triggered reveal
Use for: any section below the fold.
```tsx
import { useInView } from "framer-motion";
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-80px" });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 24 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
/>
```

### Hover — text/button
```tsx
whileHover={{ opacity: 0.7 }}
transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
```

### Hover — card lift
```tsx
whileHover={{ y: -4 }}
transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
```

---

## Rules

### Always
- Trigger scroll animations `once: true` — never repeat on scroll up
- Use `margin: "-80px"` on `useInView` so animation starts just before element enters view
- Stagger list items with `0.1 – 0.15s` between each
- Keep `y` values small: `12–24px` for body content, `32–48px` for hero
- Use `layout` prop on elements that change size

### Never
- Animate `width` or `height` directly — use `scaleX/scaleY` or `maxHeight` with overflow hidden
- Use `duration` below `0.2s` for anything visible
- Animate more than 2 properties at once on the same element
- Use `AnimatePresence` for simple show/hide — prefer opacity + pointer-events
- Add animation to elements already visible on page load without a delay
- Use rotation unless it is very subtle (< 5deg) and purposeful

---

## Color & Style Context
- Background: `#000` or `zinc-950`
- Text: `zinc-50` (primary), `zinc-400` (secondary), `zinc-600` (muted)
- Accents: Gold `#c9a84c`, Platinum `#b8c0cc`, Black `#e0e0e0`
- Borders: `white/10` — always subtle
- Never use colored backgrounds for animation highlights

---

## Existing Animations (do not modify)
- `TierCards.tsx` — SVG stroke draw animation on hover, custom implementation, not Framer Motion. Do not touch.
- `reveal.tsx` — existing Reveal wrapper component, enhance only if instructed.
