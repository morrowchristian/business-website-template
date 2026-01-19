# Architectural Decision Records (ADR)

This document captures key architectural decisions made during the development of the Business Website Template.  
Each decision includes context, options considered, and the final outcome.

---

## ADR 001 — Use Astro as the Primary Framework

**Status:** Accepted  
**Date:** v0.1 Foundation  

### Context  
The project requires a fast, modern, content-focused framework with strong component support.

### Options Considered  
- React  
- Next.js  
- Astro  

### Decision  
Astro was chosen for its static-first architecture, performance benefits, and simple component model.

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
Tailwind CSS was selected for its speed, consistency, and design-system-friendly approach.

---

## ADR 003 — Centralize Navigation Data

**Status:** Accepted  
**Date:** v0.2 Core Components  

### Context  
Navigation links should be editable in one place and reused across Header and Footer.

### Decision  
Create `src/data/navigation.ts` to store global navigation items.

---

## ADR 004 — Use a `docs/` Directory for Technical Documentation

**Status:** Accepted  
**Date:** v0.2 Core Components  

### Context  
Documentation needs to be organized, scalable, and easy to navigate.

### Decision  
Create a dedicated `docs/` folder containing architecture, components, pages, and ADR files.

---

## Future ADRs

- Theme system (light/dark)  
- CMS integration  
- Animation presets  
- Image optimization pipeline  
