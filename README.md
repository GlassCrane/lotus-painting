# LOTUS · Painting & Handy-Man Services

A cinematic, scroll-animated marketing site for **Lotus Painting & Handy-Man Services**
(Steven McCorry Sr.). Built with **React + Vite**, **GSAP / ScrollTrigger**, and **Lenis**
smooth scrolling. Dark-and-gold theme drawn straight from the business card.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the build
```

## ⭐ Add the real logo (recommended)

The site ships with a hand-built SVG lotus so it looks complete out of the box, but it will
automatically use your real artwork the moment you add these files to the **`public/`** folder:

| File                     | What it is                                | Used in            |
| ------------------------ | ----------------------------------------- | ------------------ |
| `public/lotus-logo.png`  | Full logo — lotus **+ “LOTUS” wordmark**  | Loader, footer     |
| `public/lotus-mark.png`  | Lotus **flower only** (transparent PNG)   | Nav, hero, contact |

> Tip: the full card logo you provided is perfect for `lotus-logo.png`. For `lotus-mark.png`,
> crop just the flower (no text) and export as a transparent PNG. If a file is missing, the
> SVG fallback is used — nothing breaks.

## Add real project photos (optional)

The horizontal gallery uses elegant duotone placeholders until you add photos. Drop JPGs into
`public/work/` named to match `src/data.js`:

```
public/work/p1.jpg   public/work/p2.jpg   ...   public/work/p6.jpg
```

## Editing content

All copy lives in **`src/data.js`** — business info, services, projects, process steps,
stats, and testimonials. Phone/email are already set to `585-797-7845` /
`smccorry7845@gmail.com`.

## Structure

```
src/
  App.jsx              section composition + intro state
  data.js              ← all editable content
  hooks/
    useSmoothScroll.js Lenis ↔ ScrollTrigger sync
  components/
    Loader, Nav, Hero, Marquee, About, Divider, Services,
    Gallery, Process, Stats, Testimonials, Contact, Footer,
    Brandmark (logo w/ PNG→SVG fallback), LotusLogo, GrainOverlay
```

## Notes

- Respects `prefers-reduced-motion` (disables smooth scroll + animations).
- Fonts: Cinzel, Cormorant Garamond, Inter (Google Fonts).
