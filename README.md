# Rosario Mensi - Portfolio

This repository contains my personal portfolio website, built to showcase selected work across software engineering, UX/UI design, and AI-first product development.

The site is bilingual (English and Spanish) and includes:
- Hero + personal positioning
- Featured projects (with brand logo strip)
- About section and skills
- My design process (Discover -> Define -> Design -> Test -> Iterate)
- Reviews / testimonials
- Contact links

Routes use a locale prefix (`/en`, `/es`). Visiting `/` redirects to the default locale (`/en`).

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) — you will be redirected to [http://localhost:3000/en](http://localhost:3000/en) (or open `/es` for Spanish).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Project Structure

- `src/middleware.ts` - redirects bare paths to `/{defaultLocale}`
- `src/app/[locale]/page.tsx` - server-rendered home: composes all sections for the active locale
- `src/app/[locale]/layout.tsx` - locale layout, `hreflang`-style alternates, metadata
- `src/app/components/` - UI pieces; most sections are **Server Components** (static markup and `next/image`). Client-only islands include `Navbar`, `BackToTopButton`, `ScrollToHashOnNavigation`, `ReviewsSection`, `TypewriterText` / `HeroEyebrowTypewriter`, and `SetDocumentLang` (`document.documentElement.lang`).
- `src/app/i18n/` - copy (`en.ts`, `es.ts`), `config.ts`, `types.ts`, `index.ts`
- `public/` - favicon, project and profile images, logos

Locale routes (`/en`, `/es`) are **pre-rendered at build time** (`generateStaticParams`), so HTML is generated on the server during `next build`, not only in the browser.

## Contact

- LinkedIn: [Rosario Mensi](https://www.linkedin.com/in/rosario-mensi-a5334640/)

---

Designed and developed by Rosario Mensi.
