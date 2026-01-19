# Components Documentation

This document describes the reusable UI components that make up the Business Website Template.  
Components follow a modular, atomic‑inspired structure and are designed for consistency, clarity, and scalability.

---

## 1. Component Philosophy

Components in this project are:

- **Reusable** — built to be used across multiple pages  
- **Composable** — small pieces that combine into larger sections  
- **Consistent** — follow shared styling, spacing, and naming conventions  
- **Documented** — each component includes purpose, props, and usage examples  

The goal is to create a flexible design system that supports future expansion.

---

## 2. Component Categories

### **2.1 Base Components**
These are the smallest building blocks of the UI.

- **Button**  
  - Purpose: Trigger actions or navigate between pages  
  - Variants: primary, secondary, outline (future)  
  - Notes: Uses Tailwind utility classes for styling  

- **Card**  
  - Purpose: Display grouped content such as services or features  
  - Structure: image → title → description → optional CTA  
  - Notes: Designed for grid layouts and responsive scaling  

---

### **2.2 Layout Components**
These components define the global structure of the site.

- **Header**  
  - Purpose: Display navigation and branding  
  - Data Source: `src/data/navigation.ts`  
  - Notes: Responsive mobile menu planned for future enhancement  

- **Footer**  
  - Purpose: Provide site‑wide links, copyright, and contact info  
  - Notes: May include social icons or legal links in future versions  

---

### **2.3 Section Components**
These components represent major content sections.

- **Hero**  
  - Purpose: Introduce the page with a strong headline and CTA  
  - Variants: centered, left‑aligned (future)  
  - Notes: Supports background images or gradients  

---

## 3. Component Structure

Each component follows a consistent file pattern:

'''
src/components/
├── Button.astro
├── Card.astro
├── Header.astro
├── Footer.astro
└── Hero.astro
'''

Future components will follow the same naming and placement conventions.

---

## 4. Styling Conventions

All components use:

- Tailwind utility classes  
- Shared spacing scale  
- Shared typography scale  
- Consistent responsive breakpoints  

Future enhancements may include:

- animation presets  
- design tokens  
- theme variants  

---

## 5. Usage Examples

### Button Example

'''
---
import Button from '../components/Button.astro';
---

<Button href="/contact" variant="primary">
  Get Started
</Button>
'''

### Card Example

'''
---
import Card from '../components/Card.astro';
---

<Card
  title="Web Design"
  description="Modern, responsive layouts built with Astro."
  href="/services"
  image="/assets/design.jpg"
/>
'''

---

## 6. Future Component Additions

- FeatureSection  
- TestimonialSection  
- PricingTable  
- FAQAccordion  
- ContactForm  
- NavigationDrawer (mobile)  

These will be added as the project evolves.

---

## 7. Component Guidelines

- Keep components **small and focused**  
- Avoid embedding page‑specific logic  
- Use props for customization  
- Keep styling consistent with global design rules  
- Document new components in this file as they are added  

---

## 8. Related Documentation

- `architecture.md` — overall project structure  
- `pages.md` — page templates and routing  
- `decisions.md` — architectural decisions (ADR)  
