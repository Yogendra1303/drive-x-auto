# Drivex Auto — 3D & Component Integration Plan

**Version**: 1.0.0  
**Project Path**: `/Users/yogendra/Downloads/drivex-auto`  
**Backup / Staging Path**: `/Users/yogendra/drivex-auto`  
**Role Scope**: Antigravity IDE (Project Readiness, Architectural Contracts, Verification)  
**Partner Agent**: Strawberry Browser (3D Vehicle Model Research, Asset Evaluation, Mechanical-Asset Strategy, Implementation Deliverables)

---

## 1. Project Overview & Current Architecture

Drivex Auto is an automotive service web application engineered with a mobile-first, cyber-luxury aesthetic.

### 1.1 Core Stack Specifications
- **Framework**: Next.js 16.4.0 (App Router, Turbopack enabled)
- **Runtime / Language**: React 19.3.0, TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/turbopack`) with CSS custom properties
- **Linting & Code Quality**: ESLint 9 (`eslint-config-next`)

### 1.2 Existing Project Layout
```
drivex-auto/
├── .agents/
│   └── skills/
│       └── mobile-first-3d-automotive/
│           └── SKILL.md                 # 3D performance & mobile standards
├── docs/
│   └── INTEGRATION_PLAN.md              # This integration document
├── public/                              # Static public assets (SVGs, icons)
├── src/
│   ├── app/
│   │   ├── globals.css                  # Tailwind tokens, dark mode baseline
│   │   ├── layout.tsx                   # HTML shell, metadata, font loading
│   │   └── page.tsx                     # Landing page entry point
│   ├── components/
│   │   ├── common/                      # Reusable primitives (buttons, drawers)
│   │   ├── layout/                      # Navbar, mobile bottom bar, footer
│   │   ├── automotive/                  # Service cards, specs, booking UI
│   │   └── three/                       # 3D canvas loader, studio rig, fallbacks
│   ├── data/
│   │   └── services.ts                  # Typed automotive service catalog
│   ├── hooks/
│   │   └── useMobile.ts                 # React 19 useSyncExternalStore mobile hook
│   ├── lib/
│   │   └── constants.ts                 # Brand constants, navigation, contact data
│   └── types/
│       └── index.ts                     # Strict TypeScript interfaces
├── AGENTS.md                            # Next.js agent rules & Drivex Auto standards
├── next.config.ts                       # Next.js Turbopack configuration
├── package.json                         # Dependencies & scripts
└── tsconfig.json                        # Strict compiler settings
```

---

## 2. Integration Mapping for Strawberry Deliverables

Strawberry Browser is responsible for delivering the 3D vehicle assets, mechanical animations, and associated 3D view components. When these deliverables arrive, they will be mapped into the following locations:

| Deliverable Type | Source Origin | Target Destination in Project | Expected Format / Convention |
| :--- | :--- | :--- | :--- |
| **Vehicle 3D Model** | Strawberry Asset Evaluation | `public/models/vehicle-showcase.glb` | DRACO-compressed GLB (≤ 80k polys for mobile) |
| **Studio Environments & Textures** | Strawberry 3D Assets | `public/textures/` | Low-res HDR/EXR (1K max) or baked shadow PNGs |
| **3D Vehicle Scene Component** | Strawberry Implementation | `src/components/three/VehicleCanvas.tsx` | Client-only React component (`"use client"`) |
| **Vehicle Model & Shaders** | Strawberry Implementation | `src/components/three/VehicleModel.tsx` | MeshPhysicalMaterial with clearcoat paint |
| **Lighting & Environment Rig** | Strawberry Implementation | `src/components/three/StudioLighting.tsx` | Baked contact shadows, minimal point lights |
| **Camera & Viewport Rig** | Strawberry Implementation | `src/components/three/CameraRig.tsx` | Non-blocking orbit controls with angle presets |
| **Pre-rendered 2D Fallback** | Strawberry Asset Strategy | `src/components/three/FallbackPoster.tsx` | High-fidelity static/multi-angle responsive images |
| **3D Hotspot Interactivity** | Strawberry Implementation | `src/components/three/VehicleHotspots.tsx` | Hotspots pegged to 3D vehicle coordinates |

---

## 3. Component & State Interface Contracts

To ensure that Strawberry deliverables integrate cleanly without refactoring existing types or UI components, the following interface contracts must be observed.

### 3.1 Vehicle Scene Props (`src/components/three/VehicleCanvas.tsx`)
```typescript
export interface VehicleCanvasProps {
  /** Active paint finish hex color */
  bodyColor: string;
  /** Finish type affecting roughness and clearcoat */
  paintFinish: 'gloss' | 'matte' | 'metallic' | 'satin';
  /** Currently selected camera preset or null for free orbit */
  cameraPreset?: 'hero' | 'front' | 'side' | 'engine' | 'wheels' | 'rear';
  /** Active service hotspot ID if user clicked a service highlight */
  activeHotspotId?: string | null;
  /** Callback when user clicks or taps a 3D hotspot on the car */
  onSelectHotspot?: (hotspotId: string) => void;
  /** Whether the device is running in battery-saver or low-performance mode */
  isLowPowerMode?: boolean;
}
```

### 3.2 Mechanical Hotspot & Service Linkage Interface
```typescript
export interface MechanicalHotspot {
  id: string;
  /** Associated service ID from src/data/services.ts */
  serviceId: string;
  /** 3D coordinate vector on the model surface [x, y, z] */
  position: [number, number, number];
  /** Display title for tooltip / marker */
  title: string;
  /** Short summary of mechanical service performed at this location */
  summary: string;
  /** Recommended camera angle when this hotspot is activated */
  cameraPreset: 'engine' | 'wheels' | 'side' | 'front' | 'rear';
}
```

### 3.3 Service Panel & Booking Drawer Contract
When a user clicks a 3D hotspot or a service card, the booking UI receives the event payload:
```typescript
export interface BookingDrawerState {
  isOpen: boolean;
  preselectedServiceId?: string;
  preselectedVehicleDetails?: {
    make?: string;
    model?: string;
    year?: number;
  };
}
```

---

## 4. Review Protocol for Incoming Deliverables

Before merging any code or assets provided by Strawberry, Antigravity will perform the following pre-merge review:

1. **Asset Sanity Check**:
   - Verify that 3D files are in `.glb` format with DRACO compression.
   - Confirm texture sizes do not exceed 2048x2048 (1024x1024 preferred for mobile).
   - Ensure asset total weight stays within mobile bandwidth budget (target ≤ 5MB total).
2. **Architecture & Framework Compliance**:
   - Check that all Three.js / WebGL components declare `"use client"`.
   - Verify dynamic loading via `next/dynamic` with `{ ssr: false }` to avoid SSR hydration mismatches.
   - Ensure React 19 compatibility (e.g. no direct `setState` calls in `useEffect` bodies, use `useSyncExternalStore` or callback subscriptions).
3. **Ergonomic & Touch Non-Interference**:
   - Verify that 3D canvas does not hijack vertical page scrolling on touch screens (touch-action CSS property or explicit activation overlays).
   - Ensure all touch targets meet or exceed 44x44 CSS pixels.
4. **Style Alignment**:
   - Ensure styles adhere to Tailwind CSS v4 and the cyber-luxury palette defined in `AGENTS.md`.

---

## 5. Post-Integration Verification Pipeline

Every time an integration step is executed, the following non-destructive checks must be executed in sequence:

```bash
# 1. Type validation across all files
npx tsc --noEmit

# 2. Code style and ESLint rules
npm run lint

# 3. Turbopack production compilation
npm run build
```

**Pass Criteria**:
- `tsc --noEmit`: 0 TypeScript errors.
- `eslint`: 0 warnings, 0 errors.
- `next build`: Static generation completes without runtime exceptions.
- Zero horizontal overflow (`overflow-x`) on mobile viewport test (375px - 430px).

---

## 6. Required Dependencies & Unresolved Risks

### 6.1 Dependencies Requiring Installation upon Implementation Approval
The current project has not yet installed 3D or animation packages to keep the workspace clean. Once Strawberry deliverables are ready to integrate, the following packages should be installed:

```bash
# 3D Graphics
npm install three @react-three/fiber @react-three/drei
npm install -D @types/three

# UI Animation & Icons
npm install motion lucide-react
```

### 6.2 Identified Risks & Mitigations

| Risk | Severity | Mitigation Strategy |
| :--- | :--- | :--- |
| **React 19 & React Three Fiber Peer Compatibility** | Medium | `@react-three/fiber` v9 supports React 19. If npm reports peer dependency warnings, verify with `--legacy-peer-deps` or use compatible releases. |
| **Mobile GPU Overheating / Memory Leaks** | High | Enforce `dpr={[1, 1.5]}` on mobile viewports; set canvas frameloop to `demand`; dispose of geometries and textures on component unmount. |
| **Touch Gesture Hijacking** | High | Provide dedicated touch interaction zones or angle preset buttons ([Front], [Side], [Engine], [Wheels]) so users do not get trapped in canvas orbit on mobile. |
| **Two Project Folders (Backup vs Downloads)** | Low | The active work will proceed in `/Users/yogendra/Downloads/drivex-auto` while `/Users/yogendra/drivex-auto` is maintained as a safety backup. |
