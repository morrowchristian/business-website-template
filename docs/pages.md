# Pages Documentation

This document describes the structure, purpose, and behavior of each page in the Business Website Template.  
Pages follow Astro’s file-based routing and use shared layouts and components.

---

## 1. Page Philosophy

Pages should:

- Use shared layouts for consistency  
- Pull content from centralized data sources  
- Avoid embedding component logic  
- Remain lightweight and content-focused  

---

## 2. Page Templates

### **2.1 Services Page (`/services`)**

Purpose:  
Display a list of services using Card components.

Data Sources:  
- `src/data/services.ts` (future)

Components Used:  
- Card  
- Header  
- Footer  

---

### **2.2 About Page (`/about`)**

Purpose:  
Introduce the business, mission, and team.

Components Used:  
- Hero  
- Card (optional)  
- Header  
- Footer  

---

### **2.3 Contact Page (`/contact`)**

Purpose:  
Provide contact information and a future contact form.

Components Used:  
- Hero  
- ContactForm (future)  
- Header  
- Footer  

---

## 3. Page Structure

Each page follows this pattern:

"""
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout>
  <Header />

  <!-- Page content here -->

  <Footer />
</BaseLayout>
"""

---

## 4. Routing Rules

Astro uses file-based routing:

- `src/pages/index.astro` → `/`  
- `src/pages/services.astro` → `/services`  
- `src/pages/about.astro` → `/about`  
- `src/pages/contact.astro` → `/contact`  

---

## 5. Future Page Additions

- Blog index page  
- Blog post template  
- Pricing page  
- Testimonials page  

---

## 6. Related Documentation

- `architecture.md` — project structure  
- `components.md` — reusable components  
- `decisions.md` — architectural decisions  
