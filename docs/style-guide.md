# Style Guide

This document defines the coding, naming, and structural conventions  
used throughout the Business Website Template project.

---

## 1. Naming Conventions

### Components
- Use **PascalCase**
- Example: `Hero.astro`, `ServiceCard.astro`

### Data Files
- Use **camelCase**
- Example: `navigation.ts`, `services.ts`

### Pages
- Use **kebab-case**
- Example: `about.astro`, `contact.astro`

### Branches
- Use `<type>/<short-description>`
- Example: `feature/add-hero`, `docs/update-readme`

---

## 2. File Structure Rules

- Keep components small and focused  
- Place reusable UI elements in `src/components/`  
- Place layout wrappers in `src/layouts/`  
- Place route pages in `src/pages/`  
- Place global data in `src/data/`  

---

## 3. Tailwind CSS Conventions

- Prefer utility classes over custom CSS  
- Use consistent spacing scale (`px-4`, `py-8`, etc.)  
- Use responsive prefixes (`md:`, `lg:`)  
- Avoid inline styles unless necessary  

---

## 4. Commit Message Style

Follow the conventional commit format:

'''
type(scope): short description
'''

Examples:

'''
feat(components): add Hero component
docs: update architecture.md
fix(layout): correct footer spacing
'''

---

## 5. Documentation Standards

- Use triple quotes (`'''`) for code blocks  
- Keep explanations concise  
- Update docs when adding new components or pages  
- Add ADR entries for major architectural decisions  

---

## 6. Code Quality Expectations

- Keep functions and components small  
- Avoid duplication  
- Prefer clarity over cleverness  
- Use descriptive variable and prop names  
- Maintain consistent formatting  

---

## 7. Pull Request Expectations

- Small, focused PRs  
- Clear description of changes  
- Link to related issues  
- Update documentation when needed  
- Ensure no console errors or broken layouts  

---

This style guide ensures consistency, clarity, and long‑term maintainability  
across the entire project.
