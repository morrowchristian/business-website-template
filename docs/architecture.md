# Project Architecture

A reusable, component-driven Astro + Tailwind starter/template for building small business websites, doubled as a resume/portfolio piece for its author, Christian Morrow. It is **not** a complete fictional business site — business content pages (About, Services, Contact as template pages) are out of scope. The one fictional business in the repo, Cedar Creek Plumbing, lives only under `/examples/plumbing/` as a demo of what the template can build.

Live site: https://business-website-template-three.vercel.app (Vercel, auto-deploys on push to `main`).

---

## 1. Technology Stack

| Piece | Version / detail |
|---|---|
| Astro | 5.16.11 |
| Tailwind CSS | v4, via `@tailwindcss/vite` 4.1.18 |
| Sitemap | `@astrojs/sitemap` 3.7.6 |
| TypeScript | In `.astro` frontmatter (`interface Props`, typed data) |
| Scripts | `npm run dev` (localhost:4321), `npm run build`, `npm run preview` |

There is no MDX, no CMS, and no image optimization pipeline. Pages are imageless — no stock photos, no hotlinked images. `src/assets/` holds branding files (`branding/logo.svg`, `branding/logo-dark.svg`, `branding/brand.json`) and an empty `placeholders/` directory, but template pages do not render images.

`site` is set in `astro.config.mjs` to the live Vercel URL; it drives the sitemap and the canonical URLs in `BaseLayout`.

---

## 2. Folder Structure

Verified against the repo (26 pages build to 26 HTML files in `dist/`):

```
src/
├── assets/
│   ├── branding/          # brand.json, logo.svg, logo-dark.svg
│   └── placeholders/      # empty (.gitkeep only)
├── components/            # 15 components + index.astro (see §4)
│   ├── BackButton.astro
│   ├── Button.astro
│   ├── ButtonGroup.astro
│   ├── Card.astro
│   ├── CodeBlock.astro
│   ├── ContactChat.astro
│   ├── CopyButton.astro
│   ├── DarkModeToggle.astro
│   ├── FAQAccordion.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── PricingTable.astro
│   ├── TeamGrid.astro
│   └── TestimonialCarousel.astro
├── data/
│   └── navigation.ts      # THE only data file (see §5)
├── layouts/
│   ├── BaseLayout.astro
│   ├── ComponentExplorerLayout.astro
│   └── ExampleLayout.astro
├── pages/
│   ├── index.astro                    # redirect to /components
│   ├── components/                    # explorer index + 14 component pages
│   ├── examples/
│   │   ├── index.astro
│   │   └── plumbing/                  # 5-page fictional demo site
│   └── guides/                        # index + 3 guide pages
└── styles/
    └── global.css                     # Tailwind import, dark variant, :focus-visible
```

There is no `src/data/site.ts` and no `src/data/services.ts` — both were removed or never existed. Do not reference them. A `tailwind.config.mjs` file exists in the repo root, but Tailwind v4 is configured CSS-first via `@tailwindcss/vite` and `src/styles/global.css` (see §6).

---

## 3. Layouts (3)

### BaseLayout (`src/layouts/BaseLayout.astro`)

The default wrapper for standard pages. Props: `title` (default `"Business Website"`), `description` (default `"Professional business website template built with Astro"`). It:

- imports `src/styles/global.css`,
- renders `Header`, a `<main>` slot, `Footer`, and `ContactChat`,
- emits SEO metadata: `<meta name="description">`, canonical URL (built from `Astro.site` + `Astro.url.pathname`), `og:` tags and Twitter Card tags,
- includes the no-FOUC dark-mode script (see §6).

### ComponentExplorerLayout (`src/layouts/ComponentExplorerLayout.astro`)

The Storybook-style shell for the component explorer. It renders `Header` and `Footer`, a sidebar, and a `<main>` slot. The sidebar groups the 14 component pages into two catalog layers (see §4) and highlights the active page by comparing `Astro.url.pathname` against each item's `href`. On mobile the sidebar stacks full-width above the content (`flex-col md:flex-row`); the main column uses `min-w-0` with tighter mobile padding. It has its own meta description and the same no-FOUC script as `BaseLayout`.

### ExampleLayout (`src/layouts/ExampleLayout.astro`)

The shell for example sites. It does **not** reuse the template `Header`/`Footer`: it has its own business header (with an icon-only `BackButton` linking back to `/components`) and footer (contact details, hours, fictional-demo note), so an example site reads as a standalone business site. It also carries the no-FOUC script.

The root page (`src/pages/index.astro`) uses **no** layout: it is a plain HTML redirect page (meta refresh + canonical) to `/components`.

---

## 4. Component Architecture

There are 15 components, all in `src/components/` — 14 of them have explorer pages; `ContactChat` does not (it is rendered by `BaseLayout`, not documented in the sidebar):

| Component | Role |
|---|---|
| Header | Template navigation (from `navigation.ts`) |
| Footer | Template footer |
| Button | Primary/secondary button with variants and sizes |
| ButtonGroup | Grouped buttons |
| BackButton | Outlined button with back arrow; `iconOnly` prop (arrow only, `aria-label="Back"`) |
| Card | Content card |
| CodeBlock | Syntax-highlighted code display (with `CopyButton`) |
| CopyButton | Copy-to-clipboard button |
| DarkModeToggle | Sun/moon toggle (see §6) |
| Hero | Page hero with optional `primaryCta` prop |
| FAQAccordion | Expandable FAQ list |
| PricingTable | Pricing tiers |
| TestimonialCarousel | Rotating testimonials |
| TeamGrid | Team member grid |
| ContactChat | Navbar-triggered contact panel (see below) |

(`src/components/index.astro` is also present, but it is a page-like entry point, not a 16th component.)

Every component follows the same contract:

- an `interface Props` in the frontmatter (typed props),
- an `export const docs` — a Markdown string documenting the component's API, rendered by its explorer page,
- Tailwind utility markup, with `dark:` variants where applicable.

### Explorer grouping

The explorer sidebar groups the component pages into two layers:

- **Global UI & Layout** — Header, Footer, Button, Button Group, Back Button, Card, CodeBlock, CopyButton, Dark Mode Toggle.
- **Page-Specific Functional Components** — Hero, FAQ Accordion, Pricing Table, Testimonial Carousel, Team Grid.

`ContactChat` has no explorer page — it is rendered by `BaseLayout` and reached from the navbar button, not the sidebar.

### ContactChat

`ContactChat` is opened by a solid-blue navbar **"Message Me"** button (`data-open-contact-chat`), not a floating bubble (there is none). The panel opens with a genie-morph animation (FLIP via the Web Animations API: 550ms open, 400ms close). Wording is first-person ("Message Me", "I'll get back to you soon"). It is demo-only — there is no backend, no contact page, and no form submission.

---

## 5. Data Model

There is exactly **one** data file:

- `src/data/navigation.ts` — exports a `NavItem` interface (`label`, `href`) and a `navigation` array with three items: Components (`/components`), Examples (`/examples`), Guides (`/guides`). It is consumed by `Header` and `Footer`.

There are no other data files. Component content is defined inline in each page's frontmatter (e.g. the plumbing example's pricing, team, and reviews are hardcoded in their pages), and each component's API documentation lives in that component's own `export const docs`.

---

## 6. Styling Architecture

- **Tailwind v4, CSS-first.** `src/styles/global.css` starts with `@import "tailwindcss";` and is imported by all three layouts. Tailwind is wired through `@tailwindcss/vite` in `astro.config.mjs`. Styling is utility classes in component markup; there is no per-component stylesheet.
- **Design tokens.** The audited token set lives in the Design Tokens guide (`/guides/design-tokens`): blue-600 `#2563eb` accent, blue-700 `#1d4ed8` hover, gray-900 headings, gray-600 body, a type scale, spacing of 1 unit = 4px, and breakpoints sm 640 / md 768 / lg 1024 / xl 1280.
- **Dark mode — class-based, opt-in.** `global.css` declares `@custom-variant dark (&:where(.dark, .dark *));`, so `dark:` utilities apply when `.dark` is set on `<html>`. `DarkModeToggle` is a sun/moon button that toggles `.dark` on `<html>` and persists the choice to `localStorage` under the key `theme`. The toggle is **not** in the template header or the example header (removed in PR #54, 2026-11-22) — it lives only in the component index, for template users to add to their own sites. The no-FOUC inline script in all three layouts only respects an explicit saved `localStorage` choice (no `prefers-color-scheme` auto-apply), so the template stays light by default. Dark variants exist across all three layouts and 13 components (78 `.dark` selectors in the built CSS). Dark mode on the author's portfolio (`morrow-portfolio`) is a separate job, not this repo.
- **Accessibility baseline.** `global.css` has a global `:focus-visible` rule (2px solid `#2563eb` outline, 2px offset) covering links, nav items, and anything else focusable; components with their own focus styles (Button, Card) keep those. Images that do exist in components use real `alt` text and `loading="lazy"`, and landmarks are in place (see the Technical Checklist guide).

---

## 7. Routing and Sitemap

Astro file-based routing; 26 routes total (see `pages.md` for the full list):

- `/` — redirect page to `/components` (meta refresh + canonical).
- `/components` — explorer index + 14 component pages.
- `/examples` — index + the 5-page Cedar Creek Plumbing demo under `/examples/plumbing/`.
- `/guides` — index + Page Catalog, Technical Checklist, Design Tokens.

There is no `/services` page and no About or Contact page in the template itself — Home and Services were removed in PR #50, and the About issue (#16) was closed as out of scope. The Services/About/Contact pages that exist live under `/examples/plumbing/` and belong to the fictional demo business.

`@astrojs/sitemap` (registered in `astro.config.mjs`) generates `sitemap-index.xml` / `sitemap-0.xml` at build time from the `site` URL. `BaseLayout` emits a canonical URL for every page it wraps.

---

## 8. Git Workflow

- Feature branches named `feat/<name>`, work landed via pull requests.
- PRs reference the issue they close with `Closes #NN` in the description so merging auto-closes the issue.
- Merge commits (no squash/rebase).
- Conventional commit messages: `type(scope): description`.
- As of 2026-11-22 there are **zero open issues and zero open PRs**. #18 (Global Style Polish) and #19 (Roadmap umbrella) were both auto-closed by PR #53. #16 (About) was closed as out of scope (`not_planned`). PR #28 (Tailwind v4 → v3 switch) was closed, not merged — `main` stays on Tailwind v4.

---

## 9. What This Template Is Not

- Not a complete business website — it is a starter/template plus one fictional demo site.
- No blog, no CMS, no MDX, no image pipeline, no backend (ContactChat is demo-only).
- No Services, About, or Contact pages in the template itself.
- No dark-mode toggle in the template chrome — dark mode is a component users add to their own sites.

---

## Related Documentation

- `pages.md` — the 26 routes, page by page
- `components.md` — reusable components
- `decisions.md` — architectural decisions
- `guides/` (on the site) — Page Catalog, Technical Checklist, Design Tokens
