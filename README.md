# ഇന്ദ്രയ (Indraya) – College Union, NSS College of Engineering

A modern, high-performance React application featuring smooth 3D portal zoom and momentum-scrolled entrance animations for **Indraya**, the College Union of **NSS College of Engineering, Palakkad**.

---

## ✨ Features & Architecture

- **🏛️ 3D Portal Gate Hero Animation**:
  - Bespoke 3D temple gate entrance leaves that swing open with dynamic perspective as the user scrolls.
  - Smooth camera zoom into the gate opening, seamlessly revealing the high-resolution NSS College of Engineering administrative block.
  - Floating typography transitions for **ഇന്ദ്രയ** and union mottos.
  - Floating glassmorphic navigation pill with active section tracking.
- **🌊 Silky Smooth Scrolling (Lenis + GSAP ScrollTrigger)**:
  - Powered by **Lenis** momentum scrolling synchronized with **GSAP ScrollTrigger** ticker for 60–120 FPS buttery-smooth scrubbing on both trackpads and mouse wheels.
  - Zero jitter or wheel lag.
- **⚡ Modern React 18 + Vite + TypeScript**:
  - Instant hot module replacement (HMR), tree-shaking, and optimized production builds.
  - Fully typed configuration in `src/data/unionData.ts` for easily updating events, notices, team members, and circulars.
- **🎨 Tailwind CSS + Custom Design System**:
  - Preserves the bespoke institutional color palette:
    - Navy: `#0a2f8f`
    - Electric Blue: `#1a4fd1`
    - Sky: `#dbeafe`
    - Mist: `#f2f7ff`
    - Ink: `#0e1f4d`
  - Malayalam typography (`Noto Sans Malayalam`) + Modern UI typography (`Sora`).
- **📱 Fully Responsive**:
  - Fluid layouts tailored for mobile, tablet, and desktop aspect ratios.
  - Mobile glass drawer navigation with animated burger toggle.
- **✨ Rich Interactive Sections**:
  - **About**: College heritage, union mission, and live student stats.
  - **Events**: Filterable event cards (Tech, Cultural, Sports, Academic) with modal view & registration CTAs.
  - **Team**: Executive union office bearers with role badges, academic year tags, and quotes.
  - **Gallery**: Lightbox modal view for campus celebration photos.
  - **Notices**: Searchable circular board with PDF download badges.
  - **Contact**: Interactive message & volunteer committee submission form.

---

## 🚀 Getting Started

### 1. Development Server
Run the local dev server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 2. Production Build
Build for production:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
indraya/
├── public/
│   ├── assets/
│   │   ├── hero.webp          # NSSCE Admin block campus image
│   │   ├── frame.webp         # Portal arch frame
│   │   ├── leaf-left.webp     # Left gate door leaf (3D)
│   │   ├── leaf-right.webp    # Right gate door leaf (3D)
│   │   └── window-view.webp   # View through gate window
│   └── favicon.svg            # Indraya emblem favicon
├── src/
│   ├── components/
│   │   ├── Preloader.tsx      # Smooth asset preloader with branding
│   │   ├── Navbar.tsx         # Floating glassmorphic header
│   │   ├── PortalHero.tsx     # 3D Gate & ScrollTrigger hero
│   │   ├── AboutSection.tsx   # Heritage & 4 union pillars
│   │   ├── EventsSection.tsx  # Filterable events & detail modals
│   │   ├── TeamSection.tsx    # Executive council members
│   │   ├── GallerySection.tsx # Filterable photo gallery & lightbox
│   │   ├── NoticesSection.tsx # Searchable circulars & notice board
│   │   ├── ContactSection.tsx # Interactive form & contact links
│   │   └── Footer.tsx         # Campus footer & back-to-top scroll
│   ├── data/
│   │   └── unionData.ts       # Central data configuration
│   ├── hooks/
│   │   └── useSmoothScroll.ts # Lenis + GSAP integration hook
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

