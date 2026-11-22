# Changelog
All notable changes to this project will be documented in this file.

The format is based on **Keep a Changelog**, and this project adheres to **semantic versioning**.

---

## [Unreleased]

### Added
- Component catalog rework — the explorer now covers 14 components (BackButton, Button, ButtonGroup, Card, CodeBlock, CopyButton, DarkModeToggle, FAQAccordion, Footer, Header, Hero, PricingTable, TeamGrid, TestimonialCarousel), each with an `export const docs` API doc string, an `interface Props`, and a preview-first explorer page (Live Preview, Variants, API Documentation, Code Example, Related Components); the sidebar groups components into "Global UI & Layout" and "Page-Specific Functional Components" with active highlighting via `Astro.url.pathname`. (ContactChat is the 15th component — it has no explorer page, it is rendered by the layouts.)
- Example site — Cedar Creek Plumbing, a fictional Cleveland, TN plumbing company, under `/examples/plumbing/` (Home, Services, About, Reviews, Contact), with its own `ExampleLayout` (business header/nav/footer, "Back to template" link, icon-only BackButton) and an `/examples` index listing the complete example sites; placeholder reviews/team/prices and a fictional-demo note in the footer
- Guides — `/guides` index, Page Catalog (5 business types: Local Service, E-Commerce, Restaurant, Design/Portfolio, Health/Wellness), Technical Checklist (6 sections: Responsive, Performance/Core Web Vitals, Accessibility/WCAG 2.2 AA, SEO, Security, Analytics; items tagged Implemented or Setup step), and Design Tokens (audited from the components)
- Dark mode — class-based via `@custom-variant dark` in `global.css`; `DarkModeToggle` component (sun/moon button, toggles `.dark` on `<html>`, persists to `localStorage` key `theme`) with its own explorer page; dark variants across all 3 layouts and 13 components; no-FOUC script in all 3 layouts that only respects an explicit saved `localStorage` choice, so the template stays light by default
- ContactChat — navbar "Message Me" button (solid blue, `data-open-contact-chat`) opening a genie-morph panel (FLIP via the Web Animations API, 550ms open / 400ms close), first-person wording ("Message Me", "I'll get back to you soon"), no floating bubble; demo-only, no backend
- Technical Checklist implementations — `@astrojs/sitemap` installed with `site` set in `astro.config.mjs`, canonical / Open Graph / Twitter Card tags in `BaseLayout`, meta description on the explorer layout, alt text + lazy loading on Card and testimonial images, and a global `:focus-visible` rule in `global.css`; landmarks confirmed in place
- Global Style Polish (#18) — consistent spacing and heading styles across the explorer pages, layouts, and components (e.g. styled API Documentation headings, aligned Variants heading spacing, consistent card/accordion padding)

### Changed
- Nav rework (PR #50) — Home and Services tabs removed; Examples tab added (`/examples` index); the site now starts on Components — `/` is a redirect page (meta refresh + canonical) to `/components`; header logo and example "Back to template" links point to `/components` directly; Hero default CTA changed to "Browse Components" linking to `/components`
- Dark mode toggle removed from headers (PR #54, 2026-11-22) — the toggle is no longer in the template header or the example header; the component, its explorer page, and the dark variants are kept so it lives in the component index for template users to add to their own site
- Explorer layout fixed for horizontal scroll — the sidebar now stacks full-width on top on mobile and sits side-by-side from `md` up (previously a fixed 256px sidebar forced overflow on narrow viewports); main content got `min-w-0` and tighter mobile padding
- BackButton gained an `iconOnly` prop (arrow only, `aria-label="Back"`), supported by a new `ariaLabel` prop on Button; the example header uses the icon-only variant
- Hero gained an optional `primaryCta` prop (previously its CTA was hardcoded to the template's `/services`)

### Fixed
- All component explorer pages previously showed "No documentation available" — components now use `export const docs` and pages import `{ docs }`
- Live demo link added to the README

### Removed
- Services page and `src/data/services.ts` deleted in the nav rework (PR #50); the Services/About/Contact pages from the 0.2.0 era were removed in the same rework — the template has no Services, About, or Contact page, and no `src/data/site.ts`
- DarkModeToggle removed from the template and example headers (PR #54) — see Changed above

### Notes
- Zero open issues and zero open PRs as of 2026-11-22. #18 (Global Style Polish) and #19 (Roadmap umbrella) were both auto-closed by PR #53. #16 (About) was closed as out of scope (`not_planned`). PR #28 (Tailwind v4→v3 switch) was closed, not merged; main stays on Tailwind v4.

---

## [0.2.0] — Components & Core Pages
### Added
- Reusable UI components (Button, Card, Hero, Header, Footer)
- Core page templates (Services, About, Contact) — as they were then; see [Unreleased] Removed — these pages were later removed in the nav rework
- Centralized navigation data model
- Shared layout structure
- Initial responsive styling

### Changed
- Improved component structure for reusability
- Updated folder organization for clarity

---

## [0.1.0] — Project Foundation
### Added
- Astro project initialization
- Tailwind CSS configuration
- Base folder structure (`src/components`, `src/pages`, `src/data`, `src/styles`)
- Global styles and layout scaffolding
- Full documentation system:
  - `architecture.md`
  - `components.md`
  - `pages.md`
  - `decisions.md`
  - `CONTRIBUTING.md`
  - `README.md`

---

## Versioning Strategy
This project uses **semantic versioning**:

- **MAJOR** — breaking changes
- **MINOR** — new features
- **PATCH** — fixes and small improvements

---

## How to Update This File
Each pull request should include an entry under:

- **Added**
- **Changed**
- **Fixed**
- **Removed**

inside the **[Unreleased]** section.
When a new version is released, move those entries into a new version block.
