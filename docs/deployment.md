# Deployment Guide

This document explains how the Business Website Template is deployed.  
Astro supports static site output, which makes deployment simple and flexible.

The live site is hosted on **Vercel** at https://business-website-template-three.vercel.app and **auto-deploys on every push to `main`**.  
`@astrojs/sitemap` is installed and the `site` URL is set in `astro.config.mjs`, so the sitemap and canonical URLs are generated automatically on build.

---

## 1. Build the Project

Before deploying, generate the production build:

'''
npm run build
'''

The output will be created in the `dist/` directory.

---

## 2. Deploy to Vercel

1. Install the Vercel CLI (optional):

'''
npm install -g vercel
'''

2. Push your project to GitHub
3. Import the repo at https://vercel.com/new
4. Use these settings:

- **Framework preset:** Astro  
- **Build command:** `npm run build`  
- **Output directory:** `dist`  

Vercel will handle the rest, and will auto-deploy on every push to `main`.

---

## 3. Environment Variables (Optional)

If you add features that require environment variables:

- Create a `.env` file
- Add variables like:

'''
PUBLIC_API_URL="https://example.com"
'''

Astro automatically loads `.env` files during build.

---

## 4. Deployment Checklist

Before deploying:

- Test the site locally  
- Verify responsive behavior  
- Check for console errors  
- Confirm navigation links work  
- Ensure images and assets load correctly  

---

## 5. Troubleshooting

### Build fails
- Delete `node_modules` and reinstall  
- Ensure Node.js version is compatible with Astro  
- Check for missing imports or typos  

### Styles not loading
- Confirm Tailwind is configured correctly  
- Ensure global styles are imported in `src/styles/global.css`  

---

This guide ensures the template can be deployed quickly and reliably on Vercel.
