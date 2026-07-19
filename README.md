# 🤖 NEXORA — Cyborg-Themed Landing Page

A responsive, animated landing page for a fictional cybernetic augmentation company. Built for the Cyborg-Themed Landing Page Development challenge.

## Why I built this

The brief asked for a landing page that feels like the official site for a futuristic cyborg company — something that could pass as a real product page for AI-driven human augmentation. I wanted it to feel less like a template with neon colors slapped on, and more like a company that actually shipped a nervous-system interface: real spec language, a real procedure flow, and enough motion to feel alive without getting in the way.

## What it can do

* **Animated Hero** — headline, a typed-text readout cycling through live "modules," and a hand-built SVG cyborg illustration
* **Ambient Particle Background** — canvas-based particle field that reacts to pointer movement
* **Scroll-Spy Navigation** — the active nav link updates automatically as you scroll
* **Feature & Technology Grids** — 6 capability cards + 6 tech stack cards, staggered scroll-in animation, glow on hover
* **Animated Stat Counters** — counts up from zero when scrolled into view
* **Gallery** — 4 panels rendered as live SVG patterns instead of stock photos, ready to swap for real images
* **Dark, Neon Theme** — glassmorphism cards, gradient text, glow borders throughout
* **Fully Responsive** — desktop, tablet, and mobile, with a working hamburger menu
* **Accessible** — keyboard focus states, semantic landmarks, and respects `prefers-reduced-motion`

## Tech Stack

* **Frontend:** React + Vite, Tailwind CSS
* **Animation:** Framer Motion
* **Icons:** Lucide React
* **Deployment:** Vercel

## Challenges

The trickiest part was the Gallery section. The brief called for cyborg/robotics/cityscape imagery, but using random stock photos felt like it would undercut the "distinctive product" feel — and licensing was a concern. Instead I built four SVG patterns (circuit trace, grid, skyline, node cluster) that render live in the site's own palette, so the gallery still feels intentional rather than placeholder-y. The panels are wired up so real photos or renders can drop in later without touching the layout.

The other challenge was keeping the animation restrained. It's easy for a cyberpunk theme to turn into constant motion everywhere — I tried to save the boldest effects (particle field, hero illustration float, scroll progress bar) for a few spots and keep card hovers subtle.

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/kumarshivesh465-hue/nexora-cyborg-landing.git
cd nexora-cyborg-landing
```

2. Install dependencies

```bash
npm install
```

3. Run the project

```bash
npm run dev
```

Open **http://localhost:5173**

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              Sticky nav, scroll-spy, mobile menu
│   ├── Hero.jsx                 Headline, typed text, CTA, SVG illustration
│   ├── About.jsx                 Mission, vision, AI & cybernetic pillars
│   ├── Features.jsx             Capability cards
│   ├── Technology.jsx           Tech stack cards
│   ├── Stats.jsx                  Animated counters
│   ├── Testimonials.jsx        Patient quotes
│   ├── Gallery.jsx               SVG-rendered image panels
│   ├── CTA.jsx                     Closing call to action
│   ├── Footer.jsx                 Nav, contact, socials
│   ├── ScrollProgress.jsx     Scroll progress bar
│   └── ParticleBackground.jsx Canvas particle field
├── hooks/
│   └── useActiveSection.js   Scroll-spy logic
├── App.jsx
├── main.jsx
└── index.css
```

## Live Demo

🔗 https://nexora-cyborg-landing.vercel.app/

## Author

**Shivesh Kumar**
