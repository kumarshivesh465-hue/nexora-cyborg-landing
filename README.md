# NEXORA — Cyborg-Themed Landing Page

A responsive, animated landing page for a fictional cybernetic augmentation company,
built for the Cyborg-Themed Landing Page Development challenge.

**Stack:** React (Vite) · Tailwind CSS · Framer Motion · Lucide React

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally
```

The build output goes to `dist/`, ready to deploy to GitHub Pages, Vercel, or Netlify.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx           Sticky nav, scroll-spy, mobile hamburger menu
│   ├── Hero.jsx              Headline, typed-text module line, CTAs, SVG illustration
│   ├── About.jsx              Mission / Vision / AI Integration / Cybernetic Innovation
│   ├── Features.jsx          6 capability cards
│   ├── Technology.jsx        6 tech stack cards
│   ├── Stats.jsx               Scroll-triggered animated counters
│   ├── Testimonials.jsx     3 patient/user quotes
│   ├── Gallery.jsx            4 SVG-rendered panels (swap in real photos anytime)
│   ├── CTA.jsx                  "Become More Than Human" call to action
│   ├── Footer.jsx              Logo, nav, contact, socials, copyright
│   ├── ScrollProgress.jsx  Top-of-page scroll progress bar
│   └── ParticleBackground.jsx  Canvas particle field with pointer-reactive glow
├── hooks/
│   └── useActiveSection.js  IntersectionObserver hook powering navbar highlighting
├── App.jsx                     Assembles all sections in order
├── main.jsx                    React entry point
└── index.css                   Tailwind directives + glass/glow/gradient utilities
```

## Notes on the Gallery section

The PRD calls for cyborg / robotics / futuristic-city / AI-lab imagery. Rather than use
stock photography (licensing risk, and nothing subject-specific was provided), the four
panels render live SVG patterns in the site's neon palette. The card frames, captions,
and hover animation are fully wired up — drop real photos or renders into `PanelArt` in
`Gallery.jsx` whenever you have them.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `section` with ids)
- Keyboard-visible focus states (`:focus-visible` outline)
- `aria-label` / `aria-hidden` on icon-only controls and decorative SVGs
- Respects `prefers-reduced-motion` (particle background, page animations, scroll behavior)

## Deployment

Any static host works. For GitHub Pages:

```bash
npm run build
# push the dist/ folder to a gh-pages branch, or use a GitHub Action
```

For Vercel or Netlify, just connect the repo — both auto-detect Vite projects
(`npm run build`, output directory `dist`).
