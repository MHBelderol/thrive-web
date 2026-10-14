# thrive-web

React + Vite + TypeScript port of the **CONSULT – Consultancy Website Template** by [HTML Codex](https://htmlcodex.com).

## Scripts

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Stack

- React 19, Vite, TypeScript
- React-Bootstrap (navbar, dropdown, carousel) on top of the template's customized Bootstrap v5.0.0 CSS — no jQuery
- react-router-dom for routing (`/`, `/about`, `/service`, `/blog`, `/team`, `/contact`)
- Font Awesome 5 + Bootstrap Icons bundled from npm; Google Fonts (Barlow, Open Sans) linked in `index.html`

## Project layout

```
src/
  assets/img/         template images
  styles/             bootstrap.min.css + style.css (from template), app.css (React overrides)
  components/layout/  Topbar, AppNavbar, Footer, BackToTop, ScrollToTop, Layout
  components/sections Hero carousel, About, Services, Team, Blog, Contact
  components/cards/   ServiceCard, TeamCard, BlogCard
  data/               typed content — edit site.ts to rebrand
  hooks/              useScrolledPast, useMediaQuery
  pages/              one component per route
Consult/              original static HTML template (reference only, not built)
```

## Deployment

The app uses `BrowserRouter`, so the host must serve `index.html` for unknown paths (SPA fallback),
e.g. a rewrite rule on Netlify/Vercel/Azure Static Web Apps or `try_files $uri /index.html` on nginx.

## License / attribution

The UI is based on the free CONSULT template by HTML Codex, licensed under
[Creative Commons Attribution 4.0](https://htmlcodex.com/license). See `LICENSE.txt` and `READ-ME.txt`.

**The "Designed by HTML Codex" credit link in the footer (`src/components/layout/Footer.tsx`) must not be removed.**
The template may not be resold or redistributed as a template.
