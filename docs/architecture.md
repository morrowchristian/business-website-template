# Project Architecture

This document provides a high-level overview of the architecture for the Business Website Template.  
It explains how the project is structured, how components interact, and how data flows through the system.

---

## 1. Technology Stack

- Astro — Static-first framework for building fast, content-driven websites  
- Tailwind CSS — Utility-first CSS framework for styling  
- TypeScript (optional) — For type safety and maintainability  
- Markdown/MDX (future) — For content-driven pages or blog support  

---

## 2. Folder Structure

"""
src/
├── components/        # Reusable UI components
├── layouts/           # Page layouts (BaseLayout, etc.)
├── pages/             # Route-based pages
├── data/              # Global navigation, site metadata, etc.
├── styles/            # Global styles and Tailwind config
└── assets/            # Images, icons, and static assets
"""

---

## 3. Component Architecture

Components follow a reusable, atomic-inspired structure:

- Base components (Button, Card)  
- Layout components (Header, Footer)  
- Section components (Hero, etc.)  
- Page templates (Services, About, Contact)  

Each component is self-contained, styled with Tailwind, and documented in `components.md`.

---

## 4. Page Architecture

Pages live in `src/pages/` and follow Astro’s file-based routing:

- `/services` → Services page template  
- `/about` → About page template  
- `/contact` → Contact page template  

Pages use shared layouts, components, and global navigation data.

---

## 5. Data Flow

The project uses a simple, centralized data model:

- `src/data/navigation.ts` — global nav links  
- `src/data/site.ts` — site metadata (future)  
- `src/data/services.ts` — service listings (future)  

Data is imported directly into pages and components.

---

## 6. Styling Architecture

Styling is handled through:

- Tailwind utilities  
- Global styles in `src/styles/global.css`  
- Design tokens (future)  
- Animation presets (future)  

The goal is a consistent, scalable design system.

---

## 7. Future Architectural Enhancements

- Add MDX support  
- Add theme system (light/dark)  
- Add CMS integration  
- Add image optimization pipeline  
