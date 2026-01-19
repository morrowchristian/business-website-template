# Contributing Guide

Thank you for your interest in contributing to the **Business Website Template** project.  
This guide outlines the standards, workflows, and expectations for contributing code, documentation, or ideas.

---

## 1. Project Philosophy

This project values:

- **Clarity** — clean structure, readable code, and consistent naming  
- **Reusability** — components and patterns that scale  
- **Professionalism** — documentation, commit hygiene, and thoughtful PRs  
- **Simplicity** — avoid unnecessary complexity  

Contributions should align with these principles.

---

## 2. How to Contribute

### **2.1 Open an Issue**
Before starting work, create an issue or comment on an existing one.  
This ensures alignment with the roadmap and avoids duplicate work.

Types of issues include:

- Feature requests  
- Bug reports  
- Documentation improvements  
- Architectural proposals  

---

### **2.2 Branch Naming Convention**

Use the following format:

'''
<type>/<short-description>
'''

Examples:

'''
feature/add-hero-component
fix/header-mobile-menu
docs/setup-documentation-structure
refactor/card-layout
'''

If the work relates to a specific issue, you may optionally include the issue number:

'''
feature/12-hero-component
'''

---

### **2.3 Commit Message Style**

Use clear, descriptive commit messages:

'''
type(scope): short description

Optional longer explanation if needed.
'''

Examples:

'''
feat(components): add initial Hero component
fix(layout): correct footer spacing on mobile
docs: add architecture.md outline
'''

Accepted commit types:

- **feat** — new feature  
- **fix** — bug fix  
- **docs** — documentation changes  
- **refactor** — code restructuring  
- **style** — formatting, no logic changes  
- **chore** — maintenance tasks  

---

## 3. Pull Request Guidelines

### **3.1 PR Requirements**

A good pull request includes:

- A clear title  
- A short summary of changes  
- A link to the related issue (e.g., “Closes #20”)  
- Clean commit history  
- Passing build (if applicable)  
- Updated documentation when needed  

### **3.2 PR Size**

Aim for **small, focused PRs**.  
Large PRs slow down review and increase merge conflicts.

---

## 4. Code Style

### **4.1 Astro Components**

- Use `.astro` files for UI components  
- Keep components small and focused  
- Use props for customization  
- Avoid page‑specific logic inside components  

### **4.2 Tailwind CSS**

- Use utility classes  
- Follow shared spacing and typography scales  
- Avoid inline styles unless necessary  

### **4.3 File Naming**

- Components: `PascalCase`  
- Data files: `camelCase`  
- Pages: `kebab-case`  

---

## 5. Documentation Standards

When adding new components, pages, or architectural decisions:

- Update `components.md`, `pages.md`, or `decisions.md`  
- Keep explanations concise and consistent  
- Use triple quotes (`'''`) for code blocks  

---

## 6. Testing & Verification

Before submitting a PR:

- Run the project locally  
- Verify layout and component behavior  
- Check responsive breakpoints  
- Ensure no console errors  

---

## 7. Code of Conduct

By contributing, you agree to follow the project’s `CODE_OF_CONDUCT.md`.  
Be respectful, constructive, and collaborative.

---

## 8. Getting Help

If you’re unsure about anything:

- Comment on the issue  
- Ask for clarification before starting work  
- Propose ideas early  

Collaboration is encouraged, and thoughtful contributions are always welcome.
