# Business Website Template

A reusable, component-driven starter/template for building small business websites, built with **Astro** and **Tailwind CSS**. It doubles as a resume/portfolio piece for its author, [Christian Morrow](https://github.com/morrowchristian).

It is a template, not a complete fictional business site — business content pages are out of scope. What it provides is the reusable foundation: components, layouts, guides, and one complete example site showing how the pieces fit together.

**Live Demo:** [business-website-template-three.vercel.app](https://business-website-template-three.vercel.app) (Vercel, auto-deploys on push to `main`)

---

## 🚀 Features

- Fast, static-first architecture using Astro
- Fully responsive layout
- 14 reusable UI components, each with a live preview and API documentation in the component explorer
- Component explorer at `/components` — preview-first pages (Live Preview, Variants, API Documentation, Code Example, Related Components)
- Guides at `/guides` — Page Catalog, Technical Checklist, and Design Tokens
- A complete example site: Cedar Creek Plumbing, a fictional local plumbing company, under `/examples/plumbing/`
- Dark mode support via a `DarkModeToggle` component (class-based, persisted to `localStorage`)
- Contact chat panel (`ContactChat`) with a genie-morph open/close animation — demo-only, no backend
- SEO basics built in: sitemap, canonical URLs, Open Graph / Twitter Card tags, meta descriptions
- Accessibility basics built in: alt text and lazy loading on images, a global `:focus-visible` rule, semantic landmarks
- No images in the template's pages — pages are imageless by design

---

## 📁 Project Structure

```
src/
├── components/        # 14 reusable UI components
├── layouts/           # BaseLayout, ComponentExplorerLayout, ExampleLayout
├── pages/             # Route-based pages (26 total)
│   ├── components/    # Component explorer (index + 14 component pages)
│   ├── examples/      # Examples index + Cedar Creek Plumbing example site
│   └── guides/        # Guides index, page-catalog, technical-checklist, design-tokens
├── data/              # Navigation data (src/data/navigation.ts)
├── styles/            # Global styles (global.css)
└── assets/            # Branding and placeholder assets (pages themselves use no images)

astro.config.mjs       # Astro config; `site` is set for the sitemap and canonical URLs
```

Navigation (Components, Examples, Guides) is defined in `src/data/navigation.ts`. `/` is a redirect page (meta refresh + canonical) to `/components`. There is no Home page, no Services page, no About page, and no Contact page.

---

## 🧱 Components

All 15 components live in `src/components/`. Each has an `export const docs` (Markdown API doc string) in its frontmatter, an `interface Props`, and Tailwind markup — except `ContactChat`, which takes no props, has no `docs` export, and no explorer page (it is rendered by the layouts).

| Component | What it does |
| --- | --- |
| BackButton | Back link/button, including an icon-only variant |
| Button | Primary button |
| ButtonGroup | Grouped buttons |
| Card | Content card |
| CodeBlock | Code display block |
| CopyButton | Copy-to-clipboard button (used by CodeBlock) |
| ContactChat | Navbar "Message Me" chat panel (genie-morph, demo-only) |
| DarkModeToggle | Sun/moon button; toggles `.dark` on `<html>`, persists to `localStorage` |
| FAQAccordion | Expandable FAQ list |
| Footer | Site footer |
| Header | Site header |
| Hero | Hero section |
| PricingTable | Pricing table |
| TeamGrid | Team member grid |
| TestimonialCarousel | Rotating testimonial carousel |

The explorer sidebar groups them into "Global UI & Layout" and "Page-Specific Functional Components", with the active page highlighted via `Astro.url.pathname`.

---

## 📄 Pages

26 pages total:

- **`/components`** — explorer index + 14 component pages
- **`/examples`** — examples index, plus `/examples/plumbing/` (5 pages: Home, Services, About, Reviews, Contact for Cedar Creek Plumbing, a fictional Cleveland, TN plumbing company — phone (423) 555-0147, email hello@cedarcreekplumbing.example, placeholder reviews/team/prices, and a fictional-demo note in the footer)
- **`/guides`** — guides index, plus:
  - **Page Catalog** — 5 business types: Local Service, E-Commerce, Restaurant, Design/Portfolio, Health/Wellness
  - **Technical Checklist** — 6 sections (Responsive, Performance/Core Web Vitals, Accessibility/WCAG 2.2 AA, SEO, Security, Analytics), each item tagged Implemented or Setup step
  - **Design Tokens** — audited from the components: blue-600 `#2563eb` accent, blue-700 `#1d4ed8` hover, gray-900 headings, gray-600 body, type scale, spacing 1 unit = 4px, breakpoints sm 640 / md 768 / lg 1024 / xl 1280

---

## 🌙 Dark Mode

Dark mode is class-based via `@custom-variant dark` in `global.css`. The `DarkModeToggle` component toggles `.dark` on `<html>` and persists the choice to `localStorage` (key `theme`).

The toggle is **not** in the template header or the example header — it lives only in the component index, for template users to add to their own site. The no-FOUC script in all three layouts only respects an explicit saved `localStorage` choice (no `prefers-color-scheme` auto-apply), so the template stays light by default. Dark variants exist across all three layouts and 13 components.

Dark mode on the author's portfolio (morrow-portfolio) is a separate job, not this repo.

---

## 💬 ContactChat

The navbar "Message Me" button (solid blue, `data-open-contact-chat`) opens a chat panel with a genie-morph animation (FLIP via the Web Animations API, 550ms open / 400ms close). Wording is first-person ("Message Me", "I'll get back to you soon"). There is no floating bubble and no contact page, and the form is demo-only — there is no backend.

---

## 🛠️ Tech Stack

- **Astro 5.16.11** — static-first framework
- **Tailwind CSS v4** (via `@tailwindcss/vite` 4.1.18) — utility-first styling
- **@astrojs/sitemap 3.7.6** — sitemap generation
- **TypeScript** in `.astro` frontmatter

No MDX, no CMS, and no image optimization pipeline.

---

## 📦 Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Start the development server

```
npm run dev
```

Runs at `http://localhost:4321`.

### 3. Build for production

```
npm run build
```

### 4. Preview the production build

```
npm run preview
```

---

## 🔀 Git Workflow

Work happens on feature branches (`feat/<name>`) and lands via pull requests with merge commits. PRs close their issue with "Closes #NN" in the description. Commit messages follow the conventional format (`type(scope): description`).

---

## 📄 License

MIT License — Copyright (c) 2026 Christian Morrow. See `LICENSE` for the full text.

---

## ⭐ Acknowledgments

Built with a focus on clarity, modularity, and professional development workflows.
Designed to serve as a reusable foundation for future client projects.
