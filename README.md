# A2M 2027 — Honorary Country: Côte d'Ivoire (standalone concept page)

Single-page standalone extract of the **Honorary Country — Côte d'Ivoire**
page from the A2M 2027 site, published separately so the Côte d'Ivoire team
can review the concept as a **proposal** — it is framed as such by the ribbon
at the top of the page ("Concept proposal · Not yet published").

Live at: **https://asaklex.github.io/a2m-honorary-country/**

## Provenance

- Extracted verbatim from
  [`asaklex/kossoko-africa-mining-montreal-2026`](https://github.com/asaklex/kossoko-africa-mining-montreal-2026)
  branch `main`, commit `c236b1d` (2026-09-28) — page component
  `src/pages/HonoraryCountryPage.tsx` plus its `OnThisPageNav` /
  `ScrollableNav` components, design tokens (`src/index.css`), fonts and the
  seven referenced images.
- Deliberate local adaptations:
  - no site header/nav or footer — just the page (owner decision);
  - the four internal router links (Join the waitlist, Ministerial
    Roundtable, Back to Features, Women in Mining Forum) point to the live
    A2M production site so nothing 404s in this standalone;
  - a slim bilingual "concept proposal" ribbon sits above the page;
  - `tools/fix-paths.mjs` rewrites root-absolute `/images/` + `/fonts/`
    runtime refs to the GitHub Pages sub-path after `vite build`.

## Commands

```bash
npm run dev        # local dev server
npm run build      # tsc + vite build + asset-path rewrite → dist/
npm run preview    # serve dist/ (at /a2m-honorary-country/)
```

Pushing to `main` auto-deploys to GitHub Pages via
`.github/workflows/deploy-pages.yml`.
