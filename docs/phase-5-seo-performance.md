# Phase 5 — SEO + Performance Baseline

## Objective
Ship a clean baseline: metadata, social previews, performance hygiene.

## Implementation Steps (Codex)
1) Metadata
- Add metadata in `src/app/layout.tsx`:
  - title template
  - description placeholder
  - OpenGraph basics (placeholder)

2) Images
- Ensure large crest asset is optimized (when added).
- Prefer `next/image` for local images.

3) Lighthouse Basics
- Avoid huge JS bundles.
- Keep motion lightweight.

## Acceptance Criteria
- No console errors.
- Basic metadata exists on all pages.