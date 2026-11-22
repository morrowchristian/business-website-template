# Architectural Decision Records (ADR)

This document captures key architectural decisions made during the development
of the Business Website Template. Each decision includes context, options
considered, and the final outcome.

---

## ADR 001 — Use Astro as the Primary Framework

**Status:** Accepted
**Date:** v0.1 Foundation

### Context
The project requires a fast, modern, content-focused framework with strong
component support.

### Options Considered
- React
- Next.js
- Astro

### Decision
Astro was chosen for its static-first architecture, performance benefits, and
simple component model. The template runs Astro 5.16.11, with TypeScript in
`.astro` frontmatter. There is no MDX and no CMS.

---

## ADR 002 — Use Tailwind CSS for Styling

**Status:** Accepted
**Date:** v0.1 Foundation

### Context
The project needs a scalable, utility-first styling system.

### Options Considered
- CSS Modules
- Styled Components
- Tailwind CSS

### Decision
Tailwind CSS was selected for its speed, consistency, and design-system-friendly
approach. See ADR 005 for the decision to stay on Tailwind v4.

---

## ADR 003 — Centralize Navigation Data

**Status:** Accepted
**Date:** v0.2 Core Components

### Context
Navigation links should be editable in one place and reused across Header
and Footer.

### Decision
Create `src/data/navigation.ts` to store global navigation items. The nav
holds three items — Components, Examples, Guides — per ADR 006. There is no
`src/data/site.ts` and no Services data file (`src/data/services.ts` was
deleted with the Services page).

---

## ADR 004 — Use a `docs/` Directory for Technical Documentation

**Status:** Accepted
**Date:** v0.2 Core Components

### Context
Documentation needs to be organized, scalable, and easy to navigate.

### Decision
Create a dedicated `docs/` folder containing architecture, components, pages,
and ADR files. (This file is one of them.)

---

## ADR 005 — Stay on Tailwind CSS v4 (do not switch to v3)

**Status:** Accepted
**Date:** 2026-11-18

### Context
PR #28 proposed switching the template from Tailwind v4 to Tailwind v3
(15 commits, ~1,766 lines, on branch `feat/19-design-system-roadmap`).
Tailwind v4 is installed via `@tailwindcss/vite` (4.1.18) and the codebase —
including the class-based dark mode via `@custom-variant dark` in
`global.css` — is built around v4 idioms.

### Options Considered
- Merge PR #28 and move to Tailwind v3
- Close PR #28 and stay on Tailwind v4

### Decision
PR #28 was **closed, not merged**, and its branch was deleted. Main stays on
Tailwind CSS v4. The v4-to-v3 switch was abandoned work, not a rejected
experiment to revisit: the template's styling, dark-mode variant, and
component markup all assume v4.

---

## ADR 006 — Nav rework: the site starts on Components; no Home or Services

**Status:** Accepted
**Date:** 2026-11-22 (PR #50, merged)

### Context
The template is a reusable starter, not a business site, so a marketing-style
Home page and a Services page misrepresented what it is. Visitors arrive to
browse components, not to read about a fictional company.

### Options Considered
- Keep Home and Services tabs alongside Components
- Start the site on Components, with Examples and Guides as the other tabs

### Decision
Home and Services tabs were removed; the nav is now Components, Examples,
Guides (in `src/data/navigation.ts`). `/` is a redirect page (meta refresh +
canonical) to `/components`. The Services page and `src/data/services.ts`
were deleted. The Hero's default CTA changed with it, from
`{ label: "Our Services", href: "/services" }` to
`{ label: "Browse Components", href: "/components" }`, and Card docs/code
examples now link to `/components`. There is no About page and no Contact
page — business content pages are out of scope for the template (see ADR 008).

---

## ADR 007 — DarkModeToggle is a component only, not in the template headers

**Status:** Accepted
**Date:** 2026-11-22 (PR #54, merged)

### Context
Dark mode was first shipped with the toggle in the header on every page
(PR #53, which also closed issues #18 and #19). But the template is an
example website, not a finished site: baking a theme switcher into its
headers implied dark mode was part of the template's own chrome, and a
visitor on a dark OS would get a dark site with no obvious way back if the
toggle were ever removed.

### Options Considered
- Keep the toggle in the Header (all layouts) and the example-site header
- Remove it from the headers and keep it as a standalone component for template users

### Decision
DarkModeToggle was removed from the Header (all three layouts) and from the
ExampleLayout header. The component, its explorer page, the `dark:` variants
across all three layouts and 13 components, and the `@custom-variant dark`
rule in `global.css` are all kept, so it lives in the component index for
template users to add to their own site with `<DarkModeToggle />`. The
no-FOUC script in all three layouts now only respects an explicit saved
localStorage choice (key `theme`) — no `prefers-color-scheme` auto-apply —
so the template stays light by default. Dark mode on the author's portfolio
(morrow-portfolio) is a separate job, not this repo.

---

## ADR 008 — Example sites are fictional demos under `/examples`, with their own layout

**Status:** Accepted
**Date:** 2026-11-22 (PR #49, merged)

### Context
The template needed a complete example to prove the components work together
as a real business site — but the template itself must stay a reusable
starter, not become a fictional business site. Business content pages (About,
Services) in the template proper are out of scope: issue #16 (About) was
closed as out of scope (`not_planned`).

### Options Considered
- Build the example as pages of the template itself, reusing the template Header/Footer
- Build the example as a self-contained demo under `/examples`, with its own layout

### Decision
Example sites live under `/examples`, each with its own layout. The first
(and only) example is Cedar Creek Plumbing, a fictional local plumbing
company in Cleveland, TN, under `/examples/plumbing/` — Home, Services,
About, Reviews, and Contact pages. It uses its own `ExampleLayout` with a
business header/nav/footer and a "Back to template" link (plus an icon-only
BackButton in the header, added in PR #51), and does not reuse the template
Header/Footer. All of its content is clearly fictional and placeholder:
phone (423) 555-0147, email hello@cedarcreekplumbing.example, placeholder
reviews/team/prices, and a fictional-demo note in the footer. The Hero gained
an optional `primaryCta` prop so the example home can point its CTA at the
example services page instead of the template's `/services`. The `/examples`
index lists the complete example sites. Known limitation: ContactChat's
wording is first-person ("Message Me", "I'll get back to you soon"), which is
off-brand for a plumbing company; making its copy configurable is a
follow-up, not part of this decision.

---

## ADR 009 — Explorer organized by layers, with active highlighting

**Status:** Accepted
**Date:** 2026-11-22 (PR #52, merged)

### Context
As the catalog grew to 14 components, a flat alphabetical sidebar stopped
communicating which pieces are the everyday building blocks and which are
single-purpose page modules. The sidebar was also fixed at 256px wide and
never shrank, forcing horizontal overflow on narrow viewports.

### Options Considered
- Flat alphabetical sidebar
- Sidebar grouped by catalog layer, with the active component highlighted

### Decision
The sidebar (`ComponentExplorerLayout`) and the `/components` index group
components into two layers — **Global UI & Layout** (reusable elements that
appear across multiple pages: Header, Footer, Button, Button Group, Back
Button, Card, CodeBlock, CopyButton, Dark Mode Toggle) and **Page-Specific
Functional Components** (distinct modules for individual pages: Hero, FAQ
Accordion, Pricing Table, Testimonial Carousel, Team Grid) — and highlight
the active component via `Astro.url.pathname`. The same change fixed the
responsive layout: the explorer now stacks full-width on top on mobile
(`flex-col md:flex-row`), side-by-side from `md` up, with `min-w-0` on the
main content and tighter mobile padding. Every component explorer page is
preview-first, in a fixed order: Live Preview, Variants, API Documentation,
Code Example, Related Components.

---

## Out of scope (decided)

These were considered and are not part of the template's direction:

- **CMS integration** — the template is static content in Astro files; there
  is no CMS, and none is planned.
- **Image optimization pipeline** — there is no image pipeline, and template
  pages are imageless (`src/assets/` holds branding and placeholders only).
- **Business content pages in the template proper** — About (#16, closed as
  `not_planned`) and Services (removed, ADR 006) belong in example sites
  under `/examples`, not in the template (ADR 008).
- **Tailwind v3** — see ADR 005.
