# Components

The business-website-template is a reusable, component-driven Astro + Tailwind
starter for building small business websites. This document lists all 14
components in `src/components/`, with each component's purpose and key props.
Props below are taken from each component's own `export const docs` API string
(or, for ContactChat, from its source — see its note).

There is no CMS, no MDX, and no image optimization pipeline. Template pages
are imageless: a few components accept an image URL prop (`Card`, `Hero`,
`TeamGrid`, `TestimonialCarousel`), but no template page supplies one.

## Component pattern

Every component follows the same pattern:

- **`export const docs`** — a markdown API doc string in the component's
  frontmatter, with an overview, a props table, variants, and usage examples.
  (Exception: ContactChat has no `docs` export — see below.)
- **`interface Props`** — the typed props for the component.
- **Tailwind markup** — styling is Tailwind utility classes only
  (Tailwind CSS v4, via `@tailwindcss/vite`); there are no CSS modules or
  styled-components.
- **Explorer page** — each component (except ContactChat) has a page under
  `src/pages/components/` that imports its docs with
  `import Component, { docs } from "../../components/Component.astro"` and
  renders them with `<CodeBlock code={docs} language="markdown" />`.

## Explorer page order

Every component explorer page follows the same preview-first order:

1. **Live Preview** — the component rendered live
2. **Variants** — each visual variant / layout, rendered live
3. **API Documentation** — the component's `docs` string, rendered as markdown in a CodeBlock
4. **Code Example** — copyable usage code
5. **Related Components** — links to components commonly used alongside it

The explorer sidebar (`ComponentExplorerLayout`) groups the 14 explorer pages
into two layers and highlights the active page via `Astro.url.pathname`:

- **Global UI & Layout** — Header, Footer, Button, Button Group, Back Button,
  Card, CodeBlock, CopyButton, Dark Mode Toggle
- **Page-Specific Functional Components** — Hero, FAQ Accordion, Pricing Table,
  Testimonial Carousel, Team Grid

## Global UI & Layout

### BackButton — `src/components/BackButton.astro`

Consistent navigation back to a previous page or a specified URL. Wraps the
core Button component with a standardized "back" style and a left-aligned
back-arrow icon. If no `href` is given it calls `history.back()`.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `href` | `string \| null` | `null` | Navigates to the URL instead of going back in history. |
| `variant` | `"text" \| "button"` | `"text"` | `"text"` is a plain link with an arrow; `"button"` is an outlined button. |
| `iconOnly` | `boolean` | `false` | Arrow only, no "Back" text (with `aria-label="Back"`). Used in the example-site header, where space is tight. |

### Button — `src/components/Button.astro`

The variant-driven button for primary and secondary actions across the site.
Renders as `<button>` by default, or `<a>` when `href` is provided. Supports
a loading spinner (which disables interaction), full-width mode, and an
optional leading icon. The default slot holds the label.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `variant` | `"primary" \| "secondary" \| "ghost" \| "outline" \| "danger"` | `"primary"` | Primary is blue/white; danger is red/white for destructive actions. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls padding and font size. |
| `href` | `string \| null` | `null` | When provided, renders as a link. |
| `loading` | `boolean` | `false` | Shows a spinner and disables interaction. |
| `fullWidth` | `boolean` | `false` | Expands to 100% width. |
| `icon` | `string \| null` | `null` | Optional icon name, shown before the label. |
| `ariaLabel` | `string \| null` | `null` | Accessible label, e.g. for an icon-only button with no visible text. |

### ButtonGroup — `src/components/ButtonGroup.astro`

Arranges multiple Buttons in a horizontal or vertical layout, with optional
full-width behavior, customizable spacing, and left/center/right alignment.
Also renders as a segmented (attached) control with shared borders and no gap.
Children go in the default slot.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `direction` | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction. |
| `fullWidth` | `boolean` | `false` | Group stretches to full width. |
| `gap` | `string` | `"gap-2"` | Tailwind gap utility between children; ignored in `segmented` mode. |
| `align` | `"left" \| "center" \| "right"` | `"left"` | Center/right stretch the group to full width so the alignment is visible. |
| `variant` | `"default" \| "segmented"` | `"default"` | `segmented` attaches buttons edge to edge (outer corners rounded, inner corners square); intended for horizontal groups. |

### Card — `src/components/Card.astro`

A flexible, multi-variant card for navigation tiles, content previews, and
structured information blocks. The whole card becomes clickable when `href`
is provided. The default slot holds optional extra content (actions, tags).
`title` is required; `image` is optional and adapts to the variant.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `variant` | `"base" \| "horizontal" \| "minimal" \| "featured"` | `"base"` | `base`: image-top, white, subtle shadow. `horizontal`: image left, content right. `minimal`: text-first, no border/background/shadow. `featured`: blue border, light blue background, stronger shadow. |
| `href` | `string \| null` | `null` | Makes the entire card a clickable link (pointer cursor, hover shadow, focus-visible ring). |
| `image` | `string \| null` | `null` | Optional image URL. No template page supplies one. |
| `title` | `string` | — (required) | Card heading. |
| `description` | `string \| undefined` | `undefined` | Optional supporting text. |

### CodeBlock — `src/components/CodeBlock.astro`

Displays code examples in a consistent block with a language label and a
CopyButton. Accepts code as a `code` prop (which takes precedence) or as slot
content, and normalizes indentation for slot input. No framework hydration
required (vanilla scripts only). This is the component that renders every
other component's `docs` string on its explorer page.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `code` | `string` | — | Code as a prop; takes precedence over slot content. |
| `language` | `string` | `"text"` | Label shown in the header (e.g. `"astro"`, `"tsx"`, `"bash"`). |
| `id` | `string` | auto-generated | Optional id for the block. |
| `theme` | `"dark" \| "light"` | `"dark"` | Dark is the classic code-editor look; light is a light gray background with dark text. |
| `compact` | `boolean` | `false` | Hides the header row (language label + CopyButton). |

### CopyButton — `src/components/CopyButton.astro`

Copies a string to the clipboard on click and briefly shows a "Copied!"
confirmation (1.5 seconds). Uses the Clipboard API with a hidden-textarea
fallback for older browsers. No framework hydration required. Used by
CodeBlock's header.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `text` | `string` | — (required) | The text to copy. |
| `label` | `string` | `"Copy"` | Button label shown before copying. |
| `variant` | `"primary" \| "secondary" \| "ghost"` | `"primary"` | Visual style. |
| `size` | `"sm" \| "md"` | `"md"` | Controls padding, font size, and icon size. |

### DarkModeToggle — `src/components/DarkModeToggle.astro`

A sun/moon button that toggles the `.dark` class on `<html>`, activating the
`dark:` Tailwind variants (enabled by the `@custom-variant dark` rule in
`src/styles/global.css`). The icon shows the mode you switch to (moon in
light mode, sun in dark mode). The choice persists to localStorage under the
key `theme` (`"dark"` / `"light"`).

Takes **no props**.

This is a component for your own site, not a part of the template chrome:
it is **not** in the template header or the example-site header (removed in
PR #54, 2026-11-22). Add `<DarkModeToggle />` to your own header to use it.
The no-FOUC script in all three layouts only respects an explicit saved
`localStorage` choice — there is no `prefers-color-scheme` auto-apply — so
the template stays light by default. See ADR 007 in `decisions.md`.

### Footer — `src/components/Footer.astro`

Site-wide footer with navigation links, an About section, and copyright, in
semantic `<footer>` markup. Fully responsive (1–3 column grid in the default
layout). Navigation comes from `src/data/navigation.ts`.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `layout` | `"default" \| "simple" \| "centered"` | `"default"` | `default`: multi-column (links, About, copyright). `simple`: single line, copyright left, links right. `centered`: everything centered and stacked. |

### Header — `src/components/Header.astro`

Global site navigation and branding, in semantic `<header>` markup. Loads
navigation links from `src/data/navigation.ts`; the logo links to
`/components`. Includes the navbar "Message Me" button (which opens
ContactChat) and a mobile menu button.

> Note: Header's in-file `docs` string still mentions a dark-mode toggle in
> every layout. That is stale — the markup has no toggle. DarkModeToggle was
> removed from the header in PR #54 (2026-11-22); see ADR 007.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `layout` | `"default" \| "centered" \| "minimal"` | `"default"` | `default`: logo left, navigation right, Message Me button, mobile menu button. `centered`: logo centered on its own row, navigation and Message Me below. `minimal`: logo only — no navigation, Message Me, or mobile menu button. |

## Page-Specific Functional Components

### ContactChat — `src/components/ContactChat.astro`

The "Message Me" chat panel. Any element with `data-open-contact-chat`
(e.g. the navbar button) opens it; the panel morphs out of the button that
opened it with a genie-morph (FLIP via the Web Animations API, 550ms open /
400ms close) and shrinks back into it on close. First-person wording
("Message Me", "I'll get back to you soon"). No floating bubble, no contact
page. **Demo-only: there is no backend** — submitting the form shows a
success message and goes nowhere.

Takes **no props**, and unlike every other component it has **no
`export const docs`** and **no explorer page**. It is rendered directly by
`BaseLayout` and `ExampleLayout`, so it is present on template and example
pages. Its form fields are name, email, and message (all required).

### FAQAccordion — `src/components/FAQAccordion.astro`

A list of questions that expand to reveal answers — the standard FAQ module
for business sites. Accessible and keyboard-navigable: each question is a
`<button>` with `aria-expanded`/`aria-controls`, answers live in a
`role="region"` panel, Tab moves between questions, Enter/Space toggles, and
ArrowUp/ArrowDown moves to the previous/next question. Smooth expand/collapse
via a grid-rows transition; closed panels are `visibility: hidden` so screen
readers skip them. Content comes entirely through the `items` prop (no slot).
No framework hydration required.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `items` | `{ question: string, answer: string }[]` | — (required) | The FAQ entries. |
| `allowMultiple` | `boolean` | `false` | When true, more than one answer can be open at a time; otherwise opening one closes the others. |
| `defaultOpen` | `number \| null` | `null` | Index of the item open on load; `null` means all closed. |
| `variant` | `"default" \| "card" \| "minimal"` | `"default"` | `default`: bordered rows in one container. `card`: each Q&A in its own white card with soft shadow. `minimal`: dividers only. |

### Hero — `src/components/Hero.astro`

A large headline with supporting text and call-to-action buttons.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `title` | `string` | `"Build Your Business Presence"` | Main headline. |
| `subtitle` | `string` | A default marketing subtitle | Supporting description. |
| `layout` | `"centered" \| "left" \| "split"` | `"centered"` | `centered`: text and CTAs centered. `left`: left-aligned. `split`: two-column, text left, image right — requires `image`, and falls back to left-aligned without one. |
| `image` | `string \| null` | `null` | Optional image URL; used only by the `split` layout. No template page supplies one. |
| `primaryCta` | `{ label: string; href: string }` | `{ label: "Browse Components", href: "/components" }` | Primary CTA button. Override the href when the hero is used on a site whose landing page lives elsewhere (e.g. an example site). |

### PricingTable — `src/components/PricingTable.astro`

Tiered plans side by side for comparing price, features, and calls to
action. One tier can be marked featured (accent border, "Most Popular" badge,
elevated shadow). Responsive grid: 1 column on mobile, 2 on tablet, `columns`
on desktop. CTAs use the Button component (primary for featured, secondary
otherwise). Content comes entirely through the `plans` prop (no slot). No
framework hydration required (a small vanilla script only when
`billingToggle` is on).

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `plans` | `Plan[]` | — (required) | The pricing tiers. Each plan: `name` (string), `price` (string, e.g. `"$49"`), `yearlyPrice` (string, optional — falls back to `price`), `period` (string, e.g. `"/month"`, optional), `description` (string, optional), `features` (array of strings, or `{ text, included? }` objects — `included: false` renders with an x marker), `featured` (boolean, optional), `cta` (`{ label, href }`, optional). |
| `columns` | `2 \| 3` | `3` | Columns on desktop. |
| `billingToggle` | `boolean` | `false` | When true, renders a Monthly/Yearly switch above the table; Yearly shows each plan's `yearlyPrice`. |

### TeamGrid — `src/components/TeamGrid.astro`

A team as a responsive grid of bio cards. Each card shows a photo, name,
role, bio, and social links; a missing photo falls back to an initial
placeholder. Responsive grid: 1 column on mobile, 2 on tablet, `columns` on
desktop. Photos use a square aspect ratio with object-cover. Content comes
entirely through the `members` prop (no slot). No framework hydration
required.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `members` | `Member[]` | — (required) | Each member: `name` (string), `role` (string), `bio` (string, optional), `photo` (string URL, optional — falls back to an initial), `socials` (`{ label, href }[]`, optional). |
| `columns` | `number` | `3` | Columns on desktop (1–4). |
| `cardStyle` | `"default" \| "compact" \| "circle"` | `"default"` | `default`: photo on top (square), text below. `compact`: smaller card, photo left, text right. `circle`: round photo centered above centered text. |

### TestimonialCarousel — `src/components/TestimonialCarousel.astro`

Customer reviews shown one at a time, advancing automatically with manual
prev/next arrows and dot indicators. Autoplay pauses on hover and on focus
and resumes on leave/blur; manual navigation restarts the autoplay timer.
Screen-reader announcements via an `aria-live="polite"` region (current
testimonial number and reviewer). Smooth fade/slide transition. Content comes
entirely through the `testimonials` prop (no slot). No framework hydration
required (vanilla script).

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `testimonials` | `Testimonial[]` | — (required) | Each testimonial: `quote` (string), `name` (string), `role` (string, optional), `company` (string, optional), `avatar` (string URL, optional — falls back to an initial), `rating` (number 1–5, optional). |
| `autoplay` | `boolean` | `true` | Whether the carousel advances automatically. |
| `interval` | `number` | `5000` | Autoplay interval in milliseconds. |
| `layout` | `"card" \| "minimal" \| "split"` | `"card"` | `card`: bordered white card with soft shadow. `minimal`: large centered quote, no card. `split`: avatar left, quote and reviewer right, inside a card. |

## Related documentation

- `architecture.md` — overall project structure
- `pages.md` — page templates and routing
- `decisions.md` — architectural decisions (ADR)
- `guides/design-tokens` — design tokens audited from these components
  (blue-600 `#2563eb` accent, blue-700 `#1d4ed8` hover, gray-900 headings,
  gray-600 body, type scale, spacing 1 unit = 4px, breakpoints sm 640 /
  md 768 / lg 1024 / xl 1280)
