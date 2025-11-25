# MBA University — Next.js 14 + Tailwind CSS

A fully responsive MBA university website built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Features
- Mobile-first, clean UI with Maroon (#800000) as the primary color
- Sticky header with animated dropdown menus (data-driven)
- Hero, About, Programs (cards with hover), Contact form, Footer with social icons
- All menus/cards/links are dynamic arrays
- Tailwind only (no external CSS files)

## Quick Start
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Project Structure
```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Header.tsx
  Hero.tsx
  About.tsx
  Programs.tsx
  Contact.tsx
  Footer.tsx
data/
  nav.ts
  programs.ts
  footerLinks.ts
public/
  favicon.ico
tailwind.config.ts
postcss.config.mjs
next.config.mjs
tsconfig.json
package.json
```

## Notes
- The contact form is client-side only (console logs & success state). Hook it to your backend as needed.
- Adjust `data/*.ts` files to modify menus, links, and program cards.
- Built with modern, accessible Tailwind utility classes and smooth transitions.
