# Drivex Auto — Strawberry Research Handoff & Asset Index

**Date**: 13 October 2026  
**Status**: Import & Reconciliation Complete — Architecture Aligned with Strategy B  
**Project Path**: `/Users/yogendra/Downloads/drivex-auto`

---

## 1. Copied & Canonical Research Reports in `docs/asset-research/`

| Canonical File Name | Source / Aliases | Description |
| :--- | :--- | :--- |
| **`drivex-mechanical-asset-strategy.md`** | `drivex-auto-—-mechanical-asset-strategy-and-3d-art.md` | Primary strategic recommendation and 3D artist technical brief. Details approval of **Strategy B** (CarConcept exterior + standalone illustrative mechanical scenes), maps the 14 confirmed service categories to mechanical assemblies, defines mobile performance budgets (50k–100k polys, ≤60 draw calls, ≤4MB transfer), and establishes the 7-stage implementation roadmap. |
| **`drivex-engine-wheel-asset-plan.md`** | `drivex-auto-—-engine-and-wheelbrake-asset-plan.md` | Candidate-level evaluation for the first mechanical scenes: Rigged 4-Cylinder Engine by david.gnzlv, Brake Disk and Caliper by Vladi, and Tire & Wheel Rim by neosearch (all CC BY 4.0 listings). Recommends Wheel/Brake as the first milestone, followed by Powertrain. |
| **`RENDERING-REPORT.md`** | `carconcept-rendering-only-inspection.md` | Verification report of disposable CarConcept viewer: Three.js 0.186.1, ~11.78 MB, 213k triangles, coarse 60-triangle engine, operable doors and clamshell hood. Documents need for texture de-branding before any production release. |
| **`DRIVEX_ANTIGRAVITY_IMPLEMENTATION_GUIDE.md`** | `docs/ANTIGRAVITY_IMPLEMENTATION_GUIDE.md` | Master implementation brief for Antigravity: operational ownership, file reconciliation, non-3D foundation construction, and strict boundary requirements. |
| **`STRAWBERRY-HANDOFF-README.md`** | Renamed from imported `README.md` | Asset index preserving Next.js project root `README.md`. |

---

## 2. Status of Additional Referenced Files

Per inspection protocol, internal private browser storage was not accessed, and no missing reports were fabricated:

- ❌ **`drivex-discovery.md`**: Not present in `~/Downloads` or local repository.
- ❌ **`carconcept-inspection/REPORT.md`**: Generic inspection markdown not separately exported (mesh metrics and hierarchy findings are fully recorded in `carconcept-rendering-only-inspection.md`).
- ❌ **Exported standalone `SKILL.md`**: Not in `~/Downloads` (the workspace already maintains the verified automotive skill at `.agents/skills/mobile-first-3d-automotive/SKILL.md`).
- ❌ **`CarConcept.glb` & experimental viewer source code**: Not bundled in local repository. 3D integration remains decoupled behind `VehicleStageBoundary.tsx`.

---

## 3. Findings Status: Verified vs. Provisional

### Verified Findings
- **Approved Architecture**: Strategy B is user-approved (CarConcept exterior storytelling + separate illustrative mechanical scenes).
- **Service Inventory**: All 14 confirmed service categories strictly verified.
- **Mobile Engineering Budgets (Target Guidance)**:
  - Visible assembly: 50,000 – 100,000 triangles.
  - Exterior mobile tier: ≤ 150,000 triangles.
  - Draw calls: ≤ 60 per isolated mechanical scene, ≤ 100 for exterior.
  - Compressed transfer: ≤ 4 MB per mechanical scene, ≤ 6 MB exterior.
  - Texture resolution: 1K maps preferred, 2K reserved for hero close-ups.

### Provisional Findings & Constraints
- **CarConcept Viability**: Usable only as a conditional exterior candidate pending texture mark review, attribution sign-off, and mobile WebGL testing. Coarse 60-triangle engine cannot be used for internal mechanical teardowns.
- **Mechanical Candidates**: Sourced listings (Engine, Wheel, Brake) await file-level intake, GLB validation, and user approval prior to production intake.
- **Effort Estimates**: 4–8 artist-weeks for Strategy B remain planning estimates.

---

## 4. Outstanding Licensing & Implementation Dependencies

1. **Licensing & Attribution**:
   - Ensure all incoming GLB models carry CC0 or CC BY 4.0 licenses with clean commercial rights.
   - Maintain attribution in code and documentation colophons.
2. **Asset Intake Gate**:
   - Zero models are to be downloaded or integrated without separate, explicit user approval.
3. **Runtime 3D Dependencies**:
   - WebGL packages (`three`, `@react-three/fiber`, `@react-three/drei`) to be installed only when validated assets are approved for integration.
