---
name: mobile-first-3d-automotive
description: Guides the design, performance optimization, and implementation of responsive, mobile-first 3D vehicle viewers, configurators, and interactive automotive showcases in Next.js.
---

# Mobile-First 3D Automotive Skill

This skill defines the technical standards, component architecture, and mobile performance patterns for creating luxury 3D automotive experiences on the web.

## 1. When to Use

Apply this skill whenever building or refining:
- Interactive 3D vehicle showcases, digital showrooms, or car inspection widgets.
- Real-time vehicle configurators (paint finish, rim styles, tint levels, aerodynamic packages).
- Touch-optimized 3D canvas controls on mobile viewports.
- WebGL progressive enhancement and fallback mechanisms for low-tier devices.

## 2. Core Architectural Patterns

### Dynamic Client-Only Instantiation
3D graphics libraries (Three.js, `@react-three/fiber`, `@react-three/drei`) rely on browser-specific WebGL context and window objects. Never render them server-side:

```tsx
// src/components/three/VehicleCanvasLoader.tsx
import dynamic from 'next/dynamic';

export const VehicleShowcaseCanvas = dynamic(
  () => import('./VehicleShowcaseCanvas').then((mod) => mod.VehicleShowcaseCanvas),
  {
    ssr: false,
    loading: () => <VehicleCanvasSkeleton />,
  }
);
```

### Touch Non-Interference Pattern
Mobile users frequently scroll through long pages with vertical swipes. An interactive 3D canvas that occupies the full screen width can accidentally intercept vertical swipes and trap the user.

**Rules for Touch Interaction:**
1. **Interactive Trigger / Focus Overlay**: By default, require a tap to activate full 3D manipulation ("Tap to interact in 3D"), or isolate touch orbit controls to horizontal rotation only with `enableZoom={false}` and `enablePan={false}` unless in full-screen inspection mode.
2. **Dedicated Control Pill**: Provide thumb-friendly floating control pills (e.g., [Front], [Side], [3/4 View], [Reset]) that invoke camera lerps, allowing one-tap camera transitions without manual dragging.
3. **Color & Finish Swatches**: Position mobile swatches in a thumb-friendly bottom horizontal carousel with snap scrolling (`overflow-x-auto flex-nowrap snap-x`).

## 3. Automotive 3D Asset Guidelines

- **File Format**: Prefer GLB format compressed with **DRACO compression** and KTX2 / Basis Universal textures.
- **Polycount Budget**:
  - Mobile tier: Maximum 50,000 - 80,000 triangles for the complete vehicle model.
  - Desktop tier: Up to 150,000 triangles.
- **Material Realism**:
  - Car Paint: `MeshPhysicalMaterial` with `clearcoat = 1.0`, `clearcoatRoughness = 0.05 - 0.1`, `metalness = 0.7 - 0.9`, and `roughness = 0.1 - 0.3`.
  - Glass/Windows: Translucent `MeshPhysicalMaterial` with `transmission = 0.9`, `ior = 1.5`, and `opacity = 0.3`.
  - Wheels/Rims: High metalness brushed aluminum or satin black finish.
- **Lighting & Studio Rig**:
  - Avoid heavy dynamic shadow maps on mobile GPUs. Use a static baked contact shadow plane under the chassis (`ContactShadows` or baked shadow plane texture).
  - Studio HDRI environment map for crisp reflections (use low resolution, e.g., 512x256 or 1k, compressed).

## 4. Progressive Degradation & Fallback Strategy

Always implement a dual-mode approach:
1. **WebGL Capability Check**: Detect WebGL availability and hardware concurrency.
2. **Graceful Fallback Mode**: If WebGL is unavailable, fails to load within a 5-second timeout, or the user is on battery-saver / low-power mode:
   - Render a high-resolution, multi-angle pre-rendered visual carousel or interactive 2D angle scrubber.
   - Maintain the exact same UI controls (color switcher, spec sheet, booking CTA) so functionality is never lost.

## 5. Performance Checklist

- [ ] Canvas uses `dpr={[1, 1.5]}` on mobile rather than `[1, 2]` to prevent overheating high-DPI displays.
- [ ] Frameloop set to `demand` where appropriate so the GPU sleeps when the car is stationary.
- [ ] Clean unmount: Dispose of geometries, materials, and textures when the component unmounts to prevent WebGL context leaks.
