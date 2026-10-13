<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Drivex Auto - Project Guidelines & Rules

Drivex Auto is a next-generation automotive service digital platform engineered for high-performance and luxury vehicles. These rules govern code architecture, mobile-first UX, design aesthetics, and interactive 3D implementation.

---

## 1. Core Architecture & Tech Stack

- **Framework**: Next.js 16+ (App Router, Turbopack, React 19).
- **Language**: TypeScript 5+ in strict mode. All data structures, component props, and API payloads must be strictly typed in `src/types/`.
- **Styling**: Tailwind CSS v4 with modern CSS variable tokens. Avoid ad-hoc inline styles.
- **Directory Layout**:
  - `src/app/`: App router routes, layouts, and page entry points.
  - `src/components/common/`: Reusable primitive UI elements (buttons, badges, inputs, modal drawers).
  - `src/components/layout/`: Global layout components (Navbar, MobileBottomBar, Footer).
  - `src/components/automotive/`: Domain-specific components (ServiceCard, BookingModal, PricingTable, SpecGrid).
  - `src/components/three/`: 3D canvas, model viewers, vehicle configurators, and fallback poster components.
  - `src/lib/`: Utilities, formatting, constants.
  - `src/types/`: Domain TypeScript types and interfaces.
  - `src/hooks/`: Custom React hooks (device capability detection, scroll progress, touch gestures).
  - `src/data/`: Static catalogs and mock data structures.

---

## 2. Mobile-First Experience Principles

1. **Touch-First Ergonomics**:
   - Primary actions must be thumb-accessible.
   - All interactive touch targets must meet or exceed 44x44 CSS pixels.
   - Fixed bottom quick-action bar for mobile viewports (e.g., "Book Service", "Call Concierge").
2. **Viewport Scaling & Typography**:
   - Layouts must be verified starting from mobile viewports (375px - 430px) and scale up gracefully (`sm:`, `md:`, `lg:`, `xl:`).
   - Prevent horizontal scrollbars (`overflow-x-hidden` on main container where appropriate).
3. **Modal & Drawer Interactions**:
   - Use bottom sheet slide-ups on mobile devices instead of centered modal dialogs for booking workflows.

---

## 3. Visual Aesthetics & Design System

- **Atmosphere**: Cyber-luxury, precision automotive workshop.
- **Color Palette**:
  - Base: Deep Obsidian (`#07080B`), Slate Carbon (`#111318`), Panel Glass (`#161922`).
  - Accents: High-voltage Cyan (`#00F2FE`), Neon Cobalt (`#4FACFE`), Racing Crimson (`#FF2A54`), Golden Amber (`#FFB800`).
  - Text: Bright White (`#F8FAFC`), Muted Steel (`#94A3B8`), Dark Ash (`#475569`).
- **Glassmorphism**: Subtle translucent backgrounds (`bg-white/5` or `bg-slate-900/60`), backdrop-blur (`backdrop-blur-md`), and razor-thin metallic borders (`border-white/10`).
- **Typography**: Clean, geometric sans-serif fonts with distinct uppercase tracking for badges and technical specifications.

---

## 4. 3D & Interactive Automotive Standards

1. **Lazy Loading & Code Splitting**:
   - Any Three.js, React Three Fiber, or WebGL-heavy modules must be client-only and loaded dynamically via `next/dynamic` with `ssr: false`.
2. **Progressive Enhancement & Low-Power Fallback**:
   - Detect device tier and WebGL support.
   - Provide high-fidelity pre-rendered visual posters/cards when WebGL is unavailable or on low-power battery-saver mode.
3. **Gesture Non-Interference**:
   - 3D canvases must not trap user touch gestures or block native vertical page scrolling.
   - Canvas orbit controls should require explicit focus/activation or use dedicated touch rotate zones.

---

## 5. Quality & Performance Mandates

- **Build Hygiene**: Zero lint warnings and zero TypeScript compilation errors.
- **Accessibility**: Semantic HTML5 elements (`<main>`, `<nav>`, `<section>`, `<article>`, `<button>`), descriptive `aria-label`s on icon-only buttons, and sufficient contrast ratios.
- **SEO Ready**: Every page must define descriptive metadata, OpenGraph cards, and schema tags.
