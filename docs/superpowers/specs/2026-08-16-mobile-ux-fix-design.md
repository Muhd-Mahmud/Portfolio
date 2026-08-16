# Mobile UX fix — design

## Context

Repo is pinned at commit `257b52d` ("Add silver metallic M favicon") on both `master`/`main` and the `gh-pages` deploy — see memory `portfolio-hero-rollback`. That commit predates all mobile-responsiveness work, which was intentionally discarded because the later hero change (`min-h-[600px]` full-viewport-height mobile hero) re-triggered a Spline scroll-block bug. Desktop layout at this commit is approved and must not change. Mobile is currently broken:

1. **Nav** (`src/components/ui/nav-menu.tsx`) — 7 `NavLink`s in one unconditional `flex` row inside a fixed-position pill, no wrapping/collapse. Overflows on any narrow viewport.
2. **Hero** (`src/pages/Home.tsx`) — outer visual box is `h-[360px]` on mobile; text (badge, h1, subtitle, paragraph, chip row, CV/social buttons) is `absolute inset-0 ... flex items-center` inside it. Content is taller than 360px, so it clips inside the `Card`'s `overflow-hidden`.
3. **Research interests cards** (`src/pages/Home.tsx`, same section) — skewed `grid-area: stack` card treatment is unconditional: each card is a fixed `w-[22rem]` (352px), absolutely stacked via `grid-template-areas`. Overflows/overlaps illegibly under ~400px viewport width.

Constraint carried over from the rollback: the hero's mobile height must stay capped (never full-viewport), or the Spline wheel-block bug returns.

## Non-goals

- No changes to `src/components/ui/splite.tsx` (today's scroll-intercept fix stays as-is).
- No changes to desktop rendering at `md:` (≥768px) and up — verified structurally per-section below.
- No audit of other pages (About, Lab, Projects, Publications, Blog, Resume, Contact) in this pass — nav fix covers all of them since it's shared; flag separately if issues turn up.
- No new dependencies.

## Design

### 1. Nav — mobile hamburger

`src/components/ui/nav-menu.tsx`:
- Existing desktop `<nav>` (the pill) gets `hidden md:flex` added to its wrapper (currently unconditional `flex`).
- New sibling block, `md:hidden`, containing:
  - A fixed circular button, top-right (`fixed right-5 top-5 ... rounded-full`), toggling local `open` state. Icon swaps between hamburger/X (`lucide-react`'s `Menu`/`X`, already a project dependency).
  - A backdrop (`fixed inset-0 bg-black/50`) shown when open, closes the menu on click.
  - A slide-down panel (`fixed right-4 top-20 ... rounded-2xl`) listing the same 7 links via `NavLink`, closing the menu `onClick`.
- Link list is deduplicated into a `LINKS` array (used by both desktop pill and mobile panel) to avoid maintaining two copies.

This is the same code that existed in the (now-discarded) commit `7d483c7`, re-added standalone — that commit's nav changes were never implicated in the scroll bug (only its *paired* hero commit `3d9de10` was).

Desktop impact: none — the pill's own classes are unchanged other than the added `hidden md:flex`, which is a no-op at ≥768px (`md:flex` already made it flex there).

### 2. Hero — stack below instead of overlay-clip on mobile

`src/pages/Home.tsx`, hero block:
- Outer visual container: `h-[360px] md:h-[460px] lg:h-[560px]` → `h-[240px] sm:h-[300px] md:h-[460px] lg:h-[560px]`. Only the mobile/sm values change; `md:`/`lg:` untouched.
- Text container: `pointer-events-none absolute inset-0 p-8 md:p-12 flex items-center` → `pointer-events-none relative md:absolute md:inset-0 p-8 md:p-12 md:flex md:items-center` (both `flex` and `items-center` become `md:`-only; on mobile the container is a plain block, no flex context needed since it's just stacked content flowing top-to-bottom).
- Net effect: on mobile the text container is a normal in-flow block (not absolutely positioned), so it renders **after** the visual box in document order — i.e. stacked below it — and can grow to whatever height its content needs. On `md:`+ it's pulled back to `absolute inset-0` against the visual box, identical to current desktop behavior.
- `Card`'s height is otherwise unset (auto): on mobile it becomes visual-height + text-block-height (stacked, a few hundred px total — not full-viewport). On desktop, the text block is removed from flow (`md:absolute`), so `Card`'s auto height is still just the visual box's height, unchanged from today.

Desktop impact: none — every changed utility is either unprefixed-and-unchanged or newly `md:`-prefixed at exactly the value it already had unprefixed, so the computed style at ≥768px is identical to current.

### 3. Research interests — mobile vertical list, desktop skew stack unchanged

`src/pages/Home.tsx`, research-interests section:
- Outer grid: `grid [grid-template-areas:'stack'] place-items-center ... min-h-[320px]` → `flex flex-col gap-3 md:grid md:[grid-template-areas:'stack'] md:place-items-center md:gap-0 ... md:min-h-[320px]`.
- Each card's className template and the per-card `className` values (currently unprefixed `[grid-area:stack] hover:-translate-y-10 before:...` etc.) get `md:` prefixes throughout; base (mobile) card classes become `h-auto w-full flex-col justify-between` (plain block, full width, no skew/absolute stacking).

Desktop impact: none — every class that exists today unprefixed at this breakpoint is reproduced identically under a `md:` prefix, which fires at the same ≥768px boundary.

## Testing

- `npm run build` + `npx tsc --noEmit` after implementation.
- Manual check in browser dev tools at a narrow viewport (375×667-ish) and at desktop width, confirming desktop is pixel-identical to current live site and mobile no longer clips/overflows.
- No automated test suite exists in this repo currently; not adding one as part of this change (out of scope).
