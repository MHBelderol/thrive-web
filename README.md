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

The site is deployed to GitHub Pages by `.github/workflows/deploy.yml`:
**https://mhbelderol.github.io/thrive-web/**

- **Pull requests to `main`** run lint + build only (no deploy).
- **Pushes to `main`** run lint + build, then deploy to GitHub Pages.
- One-time setup: repo **Settings → Pages → Source → GitHub Actions**.

Subpath handling:

- `vite.config.ts` sets `base: '/thrive-web/'` for production builds only (`npm run dev` still serves at `/`).
- `BrowserRouter` uses `basename={import.meta.env.BASE_URL}`, and the favicon uses `%BASE_URL%`.
- If the repo is renamed or a custom domain is added, update `base` in `vite.config.ts`.

SPA fallback: GitHub Pages has no rewrite rules, so the workflow copies `dist/index.html` to
`dist/404.html`. Deep links and refreshes (e.g. `/thrive-web/about`) then load the app and React Router
renders the right page. Note that such requests return an HTTP 404 status even though the page
displays correctly.

To preview the production build locally: `npm run build && npm run preview`, then open
`http://localhost:4173/thrive-web/`.

## License / attribution

The UI is based on the free CONSULT template by HTML Codex, licensed under
[Creative Commons Attribution 4.0](https://htmlcodex.com/license). See `LICENSE.txt` and `READ-ME.txt`.

**The "Designed by HTML Codex" credit link in the footer (`src/components/layout/Footer.tsx`) must not be removed.**
The template may not be resold or redistributed as a template.
