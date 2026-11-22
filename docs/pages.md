# Pages Documentation

This document describes every route in the Business Website Template — what it is, what layout it uses, and what it is for. Pages follow Astro's file-based routing: a file at `src/pages/<path>.astro` becomes the route `/<path>`.

**26 routes total** (verified: the build outputs 26 HTML files):

| Group | Routes |
|---|---|
| Root redirect | 1 (`/`) |
| Components explorer | 15 (`/components` + 14 component pages) |
| Examples | 6 (`/examples` + 5 plumbing demo pages) |
| Guides | 4 (`/guides` + 3 guide pages) |

There is **no** `/services` page, no About page, and no Contact page in the template itself. Home and Services were removed from the navigation (PR #50), and the About issue (#16) was closed as out of scope. The Services, About, and Contact pages that exist live under `/examples/plumbing/` and belong to the fictional demo business, Cedar Creek Plumbing — not to the template. See §3.

---

## 1. Page Philosophy

Pages should:

- Use shared layouts for consistency (`BaseLayout` for standard pages, `ComponentExplorerLayout` for the explorer, `ExampleLayout` for example sites).
- Keep content in the page's own frontmatter — there is no CMS and no data file beyond `src/data/navigation.ts`.
- Avoid embedding component logic; pages compose components, they don't reimplement them.
- Remain lightweight and content-focused. Template pages are imageless.

---

## 2. Root — Redirect

### `/` — `src/pages/index.astro`

The site root is a redirect page, not a homepage. It uses **no layout**: plain HTML with a meta refresh (`0; url=/components`), a canonical link to `/components`, and a fallback link ("Redirecting to the Component Explorer…") for browsers without refresh support.

The Components explorer is the template's home now — Home and Services were removed (PR #50) — so the root URL lands on the explorer instead of a dead homepage.

---

## 3. Components Explorer — `/components`

The explorer is the heart of the template: a Storybook-style catalog of 14 components, reached from the Components nav item. (ContactChat is the 15th component — it is rendered by the layouts and has no explorer page.) All explorer pages use `ComponentExplorerLayout`, which renders the template `Header`/`Footer` plus a sidebar.

### 3.1 Explorer index — `/components` (`src/pages/components/index.astro`)

A landing page for the explorer. It currently just prompts the reader to select a component from the sidebar ("Select a component from the sidebar to view its documentation and live preview").

### 3.2 Sidebar

The sidebar groups the 14 component pages into two catalog layers and highlights the active page (via `Astro.url.pathname`):

- **Global UI & Layout** — reusable elements that appear across multiple pages: Header, Footer, Button, Button Group, Back Button, Card, CodeBlock, CopyButton, Dark Mode Toggle.
- **Page-Specific Functional Components** — distinct modules that serve specific purposes on individual pages: Hero, FAQ Accordion, Pricing Table, Testimonial Carousel, Team Grid.

On mobile the sidebar stacks full-width above the content; from the `md` breakpoint it sits side-by-side with the main column.

`ContactChat` has no explorer page and no sidebar entry — it is rendered by `BaseLayout` and opened from the navbar "Message Me" button.

### 3.3 Component pages (14)

Each page is preview-first, in this order:

1. **Live Preview** — the component rendered live.
2. **Variants** — the component's options/styles.
3. **API Documentation** — rendered from the component's `export const docs` Markdown string in its frontmatter.
4. **Code Example** — usage code (rendered with `CodeBlock`).
5. **Related Components** — links to related explorer pages.

| Route | Component documented |
|---|---|
| `/components/back-button` | BackButton (outlined, back arrow; `iconOnly` prop) |
| `/components/button` | Button |
| `/components/button-group` | ButtonGroup |
| `/components/card` | Card |
| `/components/code-block` | CodeBlock (with CopyButton) |
| `/components/copy-button` | CopyButton |
| `/components/dark-mode-toggle` | DarkModeToggle (sun/moon toggle; see §5) |
| `/components/faq-accordion` | FAQAccordion |
| `/components/footer` | Footer |
| `/components/header` | Header |
| `/components/hero` | Hero (optional `primaryCta` prop) |
| `/components/pricing-table` | PricingTable |
| `/components/team-grid` | TeamGrid |
| `/components/testimonial-carousel` | TestimonialCarousel |

---

## 4. Examples — `/examples`

### 4.1 Examples index — `/examples` (`src/pages/examples/index.astro`)

Lists the complete example sites built from the template. Currently one: Cedar Creek Plumbing (linked at `/examples/plumbing/`).

### 4.2 Cedar Creek Plumbing — `/examples/plumbing/*`

A fictional local plumbing company in Cleveland, TN, built entirely from the template's components as a demo of what the template can produce. It uses its own `ExampleLayout` (own business header/footer, **not** the template `Header`/`Footer`) with an icon-only back button to `/components` and a "Back to template" link in the footer.

All copy is fictional/placeholder: phone **(423) 555-0147**, email **hello@cedarcreekplumbing.example**, placeholder reviews, placeholder team members, placeholder prices — and the footer carries a fictional-demo note. Do not treat any of it as a real business.

| Route | Page | Contents |
|---|---|---|
| `/examples/plumbing/` | Home | Hero (CTA to the example Services page), intro, links to Services |
| `/examples/plumbing/services` | Services | 6 service Cards + PricingTable ($89 / $199 / $149) |
| `/examples/plumbing/about` | About | TeamGrid with 3 placeholder members |
| `/examples/plumbing/reviews` | Reviews | TestimonialCarousel (minimal), 5 placeholder reviews |
| `/examples/plumbing/contact` | Contact | Hours, service area, phone/email, `ContactChat` panel |

Known limitation: the `ContactChat` wording on these pages is first-person ("Message Me", "I'll get back to you soon") — off-brand for a plumbing company. Making its copy configurable is a follow-up, not done yet.

**Scope note:** these five pages are the *only* Services/About/Contact pages in the repo, and they belong to the demo business. They are not template pages, and the template does not ship business content pages.

---

## 5. Guides — `/guides`

All guide pages use `BaseLayout`. The guides index links to all three guides and to the plumbing example.

### 5.1 Guides index — `/guides` (`src/pages/guides/index.astro`)

Lists the three guides below.

### 5.2 Page Catalog — `/guides/page-catalog`

Which pages a given type of business site needs. Covers 5 business types — Local Service, E-Commerce, Restaurant, Design/Portfolio, Health/Wellness — and points at Cedar Creek Plumbing as the complete Local Service example site.

### 5.3 Technical Checklist — `/guides/technical-checklist`

A build-quality checklist in 6 sections — Responsive Breakpoints, Performance/Core Web Vitals, Accessibility/WCAG 2.2 AA, SEO, Security, Analytics — with each item tagged **Implemented** or **Setup step**. Items already implemented in the template include: `@astrojs/sitemap` installed with the `site` URL set, canonical + `og:`/Twitter Card tags in `BaseLayout`, real `alt` text + `loading="lazy"` on images, a global `:focus-visible` rule, and landmarks in place.

### 5.4 Design Tokens — `/guides/design-tokens`

The template's audited design tokens, drawn from the components: blue-600 `#2563eb` accent, blue-700 `#1d4ed8` hover, gray-900 headings, gray-600 body, the type scale, spacing of 1 unit = 4px, and breakpoints sm 640 / md 768 / lg 1024 / xl 1280.

---

## 6. Shared Page Behavior

### Navigation

The header nav (Components, Examples, Guides) comes from `src/data/navigation.ts` — the only data file in the repo. The example site's header is separate (its own nav in `ExampleLayout`).

### Dark mode

Dark mode is class-based (`@custom-variant dark` in `global.css`). The `DarkModeToggle` component toggles `.dark` on `<html>` and persists the choice to `localStorage` (`theme` key). The toggle is **not** in the template header or the example header — it lives only in the component index (`/components/dark-mode-toggle`) for template users to add to their own sites. The no-FOUC script in all three layouts only respects an explicit saved choice, so the template stays light by default.

### Contact

There is no Contact page in the template. Contact is handled by `ContactChat`, rendered by `BaseLayout` on standard pages and opened from the navbar "Message Me" button with a genie-morph panel (550ms open / 400ms close). It is demo-only — no backend, no form submission. The plumbing example has its own Contact page (§4.2), which is demo content.

### SEO

`BaseLayout` emits a meta description, canonical URL, `og:` tags, and Twitter Card tags for every page it wraps. `ComponentExplorerLayout` has its own meta description. The sitemap (`@astrojs/sitemap`, `site` set in `astro.config.mjs`) covers all 26 routes.

---

## 7. Routing Rules

Astro uses file-based routing:

- `src/pages/index.astro` → `/` (redirect to `/components`)
- `src/pages/components/index.astro` → `/components`
- `src/pages/components/<name>.astro` → `/components/<name>`
- `src/pages/examples/index.astro` → `/examples`
- `src/pages/examples/plumbing/<name>.astro` → `/examples/plumbing/<name>`
- `src/pages/guides/index.astro` → `/guides`
- `src/pages/guides/<name>.astro` → `/guides/<name>`

There are no dynamic routes, no `src/pages/services.astro`, no `src/pages/about.astro`, and no `src/pages/contact.astro`.

---

## 8. Related Documentation

- `architecture.md` — project structure, layouts, styling, workflow
- `components.md` — reusable components
- `decisions.md` — architectural decisions
