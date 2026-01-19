# Deployment Guide

This document explains how to deploy the Business Website Template to popular hosting platforms.  
Astro supports static site output, which makes deployment simple and flexible.

---

## 1. Build the Project

Before deploying, generate the production build:

'''
npm run build
'''

The output will be created in the `dist/` directory.

---

## 2. Deploy to Netlify

### Option A: Drag-and-Drop

1. Run `npm run build`
2. Zip the `dist/` folder
3. Upload it to https://app.netlify.com/drop

### Option B: Git-Based Deployment

1. Push your project to GitHub
2. Create a new site in Netlify
3. Select your repository
4. Use these settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Netlify will automatically deploy on every push to `main`.

---

## 3. Deploy to Vercel

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

Vercel will handle the rest.

---

## 4. Deploy to GitHub Pages

### Option A: Using GitHub Actions (recommended)

1. Install the GitHub Pages adapter:

'''
npm install @astrojs/github
'''

2. Update `astro.config.mjs`:

'''
import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  output: 'static',
  adapter: github(),
});
'''

3. Push to GitHub  
4. Enable GitHub Pages in repository settings  
5. Select the `gh-pages` branch created by the adapter

### Option B: Manual Upload

1. Run `npm run build`
2. Upload the contents of `dist/` to the `gh-pages` branch

---

## 5. Environment Variables (Optional)

If you add features that require environment variables:

- Create a `.env` file
- Add variables like:

'''
PUBLIC_API_URL="https://example.com"
'''

Astro automatically loads `.env` files during build.

---

## 6. Deployment Checklist

Before deploying:

- Test the site locally  
- Verify responsive behavior  
- Check for console errors  
- Confirm navigation links work  
- Ensure images and assets load correctly  

---

## 7. Troubleshooting

### Build fails
- Delete `node_modules` and reinstall  
- Ensure Node.js version is compatible with Astro  
- Check for missing imports or typos  

### Styles not loading
- Confirm Tailwind is configured correctly  
- Ensure global styles are imported in `src/styles/global.css`  

### 404 errors on GitHub Pages
- Ensure the GitHub adapter is configured  
- Confirm the correct branch is selected in Pages settings  

---

This guide ensures the template can be deployed quickly and reliably across multiple platforms.
