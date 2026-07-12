# Agentic Pedagogy Lab — Website

Static site for UF's Agentic Pedagogy Lab. No build step — open `index.html`
in a browser, or serve the folder with any static server.

## Structure

```
index.html      Home — hero, three pillars, featured research, PATHS band
research.html   Research product catalog (APL-### cards) + publications stub
paths.html      PATHS program — step-by-step "path", logistics, cohort CTA
people.html     Faculty/staff + student grids
about.html      Mission, contact, visit, partner, newsletter
css/site.css    All styles + design tokens (top of file)
js/main.js      Mobile nav, scroll reveals, hero path animation
```

## Design system

- **Colors** (CSS custom properties in `css/site.css`): UF blue `#0021A5`
  carries the identity (headings, bands, footer); UF orange `#FA4616` is the
  single accent (eyebrows, hover states, the "path" motif).
- **Type**: Bricolage Grotesque (display), Atkinson Hyperlegible (body — a
  typeface designed for education), IBM Plex Mono (catalog codes, labels).
  Loaded from Google Fonts.
- **Signature motif**: the *path* — an orange stroke drawn under the hero
  headline, and the connected step-line on the PATHS page. Research products
  are indexed like a course catalog (`APL-001`, `APL-002`, …).

## Filling in content

Placeholders are marked with `<!-- TODO -->` or `PLACEHOLDER` comments:

- **Research cards** — duplicate a `.card` block per project; give each a
  catalog code, title, 2-sentence blurb, tags, and a real link. Swap the
  gradient `.card-media` for `<img>` thumbnails when available.
- **PATHS steps** — rename/reorder the `.path-step` items to match the real
  program structure. If PATHS is an acronym, spell it out in the page hero.
- **People** — duplicate `.person` blocks; replace the `PHOTO` div with an
  `<img>` (put photos in `img/people/`).
- **Stats strip** (home) — replace the `N` values with real numbers.
- **Contact** — `hello@example.ufl.edu` and the phone/address on `about.html`
  and every footer are placeholders.
