# Drivex Auto — Antigravity Implementation Guide

**Purpose:** This document is the implementation brief for the existing Drivex Auto project in Google Antigravity. It explains how to use the supplied Strawberry reports and React components, what to implement now, and what must wait until missing 3D assets are available and approved.

**Project path:** `/Users/yogendra/Downloads/drivex-auto`  
**Primary priority:** Mobile-first website quality  
**Approved 3D direction:** Strategy B — conditional CarConcept exterior storytelling plus separate, visually cohesive mechanical scenes  
**Important:** This is an implementation instruction, not proof that referenced assets are present. Inspect the actual workspace before relying on any file or dependency.

---

## 1. Operating rules and ownership

We are using two tools in parallel:

- **Strawberry Browser:** completed research, asset inspection reports, candidate sourcing and the 3D asset strategy.
- **Antigravity IDE:** owns the actual application in this repository, integrates files supplied by the user, implements the website foundation, runs checks and later integrates approved 3D assets.

Do not repeat Strawberry's completed asset research unless the user explicitly asks. Do not assume that a file referenced in a report is present locally. Do not invent missing report contents, asset geometry, licence evidence, real workshop facts or test results.

Do not access or change the separate Fruito project. Do not recreate the Drivex project from scratch. Preserve existing code and Git history. Do not purchase assets, commission modelling, delete files, or commit changes automatically.

## 2. Inspect the project before editing

First inspect:

- `package.json` and its scripts/dependencies
- `AGENTS.md`
- `.agents/skills/` and any existing automotive skill
- `docs/INTEGRATION_PLAN.md`
- `src/app/`, `src/components/`, `src/data/`, `src/lib/`, `src/hooks/`, and `src/types/`
- `public/` and all existing brand assets
- current Git status
- any supplied Strawberry files copied into the workspace

Record the active workspace path. Identify existing code and changes before editing. If the current branch has unrelated changes, preserve them.

## 3. Source files: what each supplied file is for

The user may provide files with duplicate suffixes such as `(1)`. Compare duplicate copies before choosing one canonical version. If the contents are identical, retain one canonical copy in the documentation folder and report the duplicates; do not leave redundant copies scattered through the application. If contents differ, compare and preserve both until the difference is understood. Never overwrite a file silently.

### A. `carconcept-rendering-only-inspection.md`

**Destination:** `docs/asset-research/carconcept-rendering-only-inspection.md`

Use this as the primary technical report on the inspected CarConcept model. Keep its limits visible in implementation decisions.

Verified in the report:
- The actual CarConcept GLB rendered in Three.js 0.186.1 in Strawberry's desktop browser inspection.
- The model was reported as approximately 11.78 MB, with 101 nodes, 97 mesh definitions, 109 primitives and 213,347 indexed triangles.
- Hood and doors can be moved via viewer-side node transformations; the source model has no animation clips or skins.
- The engine is a single coarse 60-triangle mesh, not a detailed service assembly.
- The inspected desktop state reported 218 draw calls and about 426,694 submitted triangles per frame.
- Narrow 360/390/430 CSS-pixel containers were checked inside a desktop browser, but this is not real phone testing.
- A manual text fallback was tested; actual WebGL failure recovery was not.
- CC BY 4.0 attribution and modification disclosure are required; certain Khronos/3D Commerce marks are excluded and embedded branding needs separate review/removal or permission.

**Required treatment:** Use CarConcept only as a conditional exterior/storytelling candidate. Do not describe it as an approved production asset. Do not claim mobile FPS, phone compatibility, field Core Web Vitals or full mechanical-detail capability. Keep the original model unchanged. Do not render the model in production unless the actual GLB, textures and required licence files are present and the restricted marks issue is resolved.

### B. `drivex-auto-—-engine-and-wheelbrake-asset-plan.md`

**Destination:** `docs/asset-research/drivex-engine-wheel-asset-plan.md`

Use this as the scene-level plan for the first mechanical slices.

Primary candidates named in the report:
- Rigged 4-Cylinder Engine by `david.gnzlV` (check the exact creator spelling and source page when inspecting the file)
- Brake Disk and Caliper by Vladi
- Tire and Wheel Rim by neosearch

The report explicitly says these are listing-level candidates only: actual downloaded files, licence bundles, mesh separation, animation export, materials, component fit and runtime cost were not yet verified. Do not treat triangle counts from listing pages as runtime measurements.

**Implementation implication:** Do not add these candidates to production without actual-file inspection and explicit user approval. If later approved, the wheel/brake scene is the first mechanical quality milestone, followed by the engine. Caliper/bracket must remain attached to the stationary knuckle/assembly, not rotate with the wheel hub. Engine service points must be real separate parts or honestly illustrative; do not fake missing oil filters, battery terminals, AC parts, clutch or transmission anatomy.

### C. `drivex-auto-—-mechanical-asset-strategy-and-3d-art.md`

**Destination:** `docs/asset-research/drivex-mechanical-asset-strategy.md`

This is the primary strategy and artist brief. It records the user's approval of Strategy B:

- Retain CarConcept as a conditional exterior/hero/panel-motion candidate.
- Use separate mechanical scenes with consistent lighting, materials, camera language and transitions.
- Make the scenes clearly illustrative where components do not literally belong inside CarConcept.
- Keep all 14 services discoverable through ordinary page content; animate only when the animation improves understanding.
- Do not preload every model or force all service categories into a single mechanical animation.

Treat the asset inventory and proposed budgets as requirements/recommendations for review, not evidence that the assets are already sourced or that target performance has already been achieved.

### D. `README.md` supplied from Strawberry

**Destination:** `docs/asset-research/STRAWBERRY-HANDOFF-README.md`

The supplied README describes which handoff reports were found or missing at the time it was created. It must not replace the existing root `README.md` of the Next.js project. Rename the imported copy as shown above to preserve both files.

Use it as an inventory, then update the handoff index only with files actually present. The README notes that some reports, the exported skill, and viewer reports were missing from `~/Downloads` at the time of its check. Recheck the current state rather than assuming that those files have since appeared.

### E. `Footer.tsx`

**Destination:** integrate into the existing footer/component location only after checking the current project structure. Do not blindly create a duplicate footer.

The supplied component currently imports:
- `BRAND_NAME` and `BRAND_TAGLINE` from `@/lib/constants`
- `CONFIRMED_SERVICES` from `@/data/services`
- an image at `/brand/dxa-logo.png`

Tasks:
1. Check those imports and the logo file exist in this repository before integration.
2. Keep the reusable service-list rendering if compatible with the project's service type.
3. Ensure footer links point to actual, unique service targets or the valid service section. Avoid all 14 links pointing to a nonexistent target.
4. Remove unsupported claims such as **“14 Certified Service Lines”**, **“Verified Technical Catalogue”**, or any claim implying certification or verification that the business has not established.
5. Replace the technical architecture paragraph with customer-facing, factual copy. Avoid exposing internal phrases such as “Strategy B” or “Zero unapproved 3D downloads” to customers.
6. Preserve semantic HTML, responsive layout, accessible contrast, and keyboard focus.
7. Do not invent address, phone number, opening hours, warranties or contact details.
8. Use the actual supplied brand file if available. If `/public/brand/dxa-logo.png` is missing, report it and either add the user's supplied original logo to a documented path or retain a graceful placeholder. Do not invent a replacement logo.

### F. `VehicleStageBoundary.tsx`

**Destination:** integrate into the existing component structure after checking for duplicates and the homepage's section order.

The supplied file is a useful **UI and integration boundary**, not a completed 3D renderer. Its selector changes the informational panel state; it does not currently load a Three.js scene or a vehicle model.

Tasks:
1. Reuse the component structure and responsive blueprint-style stage where appropriate.
2. Replace language that could mislead users. For example, change **“Three.js Ready”** to a truthful status such as **“3D experience in development”** unless an actual tested canvas is integrated.
3. Keep wheel/brake, engine, exterior, and suspension states clearly distinguished as planned or available. Do not make the suspension tab appear implemented when the assembly is not available.
4. Add an integration prop or dedicated child boundary for the future scene; do not hardwire an unapproved model path.
5. Include a robust poster/text fallback so service information and actions remain usable when WebGL is unavailable or loading fails.
6. Ensure tab controls are keyboard accessible, use `aria-selected` correctly, show focus styles, and work at phone widths without horizontal overflow.
7. Keep accessible service descriptions separate from the 3D scene. Do not claim that the selected scene exposes actual parts unless the model supports it.
8. Do not add guessed assets, engine anatomy or made-up fault readings.

### G. Drivex Auto logo files supplied separately

Use the actual original Drivex Auto logo as the brand source. Check its file dimensions and background before placing it over the dark layout. The supplied original PNG has a white background; do not stretch it or assume it has transparency. If the background clashes with the design, use a light logo container or report that a transparent/vector asset is needed. Do not replace the original brand mark with a newly invented mark.

### H. `SKILL.md` / reusable automotive skill

The handoff README indicated an existing skill may be present at `.agents/skills/mobile-first-automotive/SKILL.md`. Inspect that location and any new supplied skill before changing it. Avoid creating multiple overlapping skill definitions. Keep the active skill mobile-first, performance-aware, accessibility-aware, and honest about tool availability. Do not claim Blender, Figma or real-device testing is available unless it is actually established in the environment.

### I. Future viewer/model files (only if actually supplied)

The reports refer to files such as `index.html`, `viewer.js`, `CarConcept.glb`, `browser-metrics.json`, screenshots, and licence files. References in reports are not the files themselves. Inspect the uploaded files list and workspace to determine what is physically available.

If the complete viewer source is supplied, place it in an isolated experiment folder such as `experiments/carconcept-viewer/`, including all referenced model, texture, module and licence assets. Preserve its README and dependency versions. Do not move experimental code straight into `src/app` and do not merge its package file blindly into the application's `package.json`.

If the `.glb`, referenced textures, licence bundle, or dependencies are missing, leave the viewer as a documented experiment and continue with the website foundation. Do not fabricate the missing files.

---

## 4. Confirmed service catalogue

Use these exact 14 category names, and no unconfirmed replacements:

1. Periodic Car Servicing
2. AC Service & Repair
3. Batteries
4. Tyres & Wheel Care
5. Denting & Painting
6. Detailing Services
7. Car Spa & Cleaning
8. Inspections & Diagnostics
9. Windshields & Lights
10. Suspension & Fitments
11. Clutch & Body Parts
12. Insurance Claims
13. SOS / Emergency Services
14. Custom Repairs

Inspect `src/data/services.ts` and `src/types/index.ts`. Correct inconsistencies such as unrelated or speculative entries. Store data separately from presentation components. Make pricing and duration optional and omit them from the UI until actual values are supplied. Do not invent prices, deals, warranties, reviews, addresses, contact numbers, response times, diagnostics results or OEM compatibility.

Not every service needs a 3D animation. Insurance claims, SOS, diagnostics, and custom repair are appropriate for readable service panels or process information, without fictional mechanical anatomy.

## 5. Build the actual mobile-first website foundation

The application should be a customer-facing site, not an internal technical dashboard or generic boilerplate.

### Required sections

- Compact brand header and responsive navigation.
- Hero with a clear promise and primary action. Recommended starting copy: **“Complete Car Care. All in One Place.”** Supporting copy should describe the 14 service categories without unsupported guarantees.
- A reserved, replaceable exterior 3D integration area, using a deliberate poster or designed fallback until an approved model is available.
- Service directory for the 14 confirmed categories, using reusable cards and service-detail panels.
- Clear inquiry/booking entry points that do not pretend to submit to a working backend unless one exists.
- Service process/capabilities section using only known facts.
- Footer with factual customer-facing copy.

### Design requirements

- Mobile first: design and review 360, 390 and 430 CSS-pixel widths before desktop refinement.
- Palette: charcoal, near-black, white and yellow derived from the supplied logo. Do not paint every mechanical component yellow.
- Use strong typography, deliberate hierarchy, generous spacing, premium automotive visual composition and restrained motion.
- No horizontal overflow, hover-only interactions, hijacked scrolling, text embedded only in images, or essential content hidden inside 3D.
- Respect reduced motion and provide a usable no-WebGL/no-asset fallback.
- Make the normal service directory accessible independently of the vehicle animation.
- Do not copy GoMechanic's layout, branding or wording. The GoMechanic research was used only for service inventory reference.

## 6. Asset, licence and performance rules

The asset reports specify that CarConcept uses CC BY 4.0 with attribution and modification disclosure, while certain Khronos/3D Commerce marks are excluded and brand marks in textures require separate resolution. No endorsement may be implied. Preserve source/creator, licence link, retrieval revision/checksum where available, and a truthful modification notice for accepted assets.

Do not use a new asset in the production experience until actual files, attribution and licence bundle have been reviewed. Do not use assets with NC restrictions for commercial use without separately obtained rights. Do not feed assets marked NoAI into generative AI systems. Do not assume an attribution licence clears embedded trademarks.

The reports propose starting performance budgets, not guaranteed results:
- Isolated mechanical scene target: roughly 50k–100k visible triangles.
- Mechanical scene: target no more than about 60 ordinary draw calls.
- Exterior mobile tier: target no more than about 150k triangles and about 100 ordinary draw calls.
- Compressed transfer target: up to about 4 MB per mechanical scene and 6 MB exterior tier.
- Prefer 1K textures; use 2K only when necessary for hero close-ups.
- Load one needed scene at a time, use progressive poster-first loading, cap device pixel ratio where appropriate, pause unnecessary offscreen work and handle load/WebGL failures.

These are proposed budgets that need measurement. Do not claim that they have been achieved until measured on the actual implementation. Desktop frame timing and narrow containers rendered inside a desktop browser are not real-device mobile results.

## 7. Recommended implementation order

### Phase 1 — Import and reconcile
- Create `docs/asset-research/` if absent.
- Copy the reports there under clear canonical filenames.
- Compare duplicate copies before discarding duplicates; retain project root `README.md` and rename the Strawberry handoff README.
- Store any actual viewer source under `experiments/carconcept-viewer/` only if its complete source and dependencies are present.
- Report missing files instead of creating fake placeholders for them.

### Phase 2 — Implement the non-3D foundation now
- Fix service data and types to match the 14 categories.
- Implement/refine the homepage, header, service directory, detail panels, footer and mobile layout.
- Integrate `Footer.tsx` and `VehicleStageBoundary.tsx` only after fixing the misleading content and verifying the imports/assets.
- Keep the 3D area replaceable and show an honest fallback.

### Phase 3 — Verify the website
- Run the existing lint command, TypeScript validation and production build.
- Launch the development server and return the exact URL.
- Inspect the rendered result at 360, 390 and 430 CSS-pixel widths, plus desktop.
- Verify navigation targets, service list count/names, keyboard focus, reduced motion, fallback visibility and no horizontal overflow.
- Report the real test results, screenshots if available, and issues that could not be tested.

### Phase 4 — Later, when actual 3D assets are available and approved
- Inspect each GLB and its licence files in an isolated folder.
- Compare actual render/geometry/hierarchy/animations, not listing thumbnails.
- Prototype the exterior first, then wheel/brake, then engine.
- Keep standalone mechanical scenes visually consistent but clearly illustrative if they are not literal components of CarConcept.
- Verify compressed exports, decoder compatibility, scene disposal, failed-load fallback, reduced motion and performance on actual target devices where available.
- Do not claim final mobile performance before testing it.

---

## 8. Required completion report from Antigravity

At the end of the current implementation phase, report:

1. Exact files imported, renamed, skipped or missing.
2. Which reports were duplicates and how that was determined.
3. Code files created/modified and why.
4. Confirmation that all 14 categories appear with correct names.
5. Confirmation that Footer and VehicleStageBoundary contain no unsupported user-facing claims.
6. Actual lint, TypeScript, build and browser results, with failures clearly stated.
7. Current local preview URL.
8. Missing 3D model/source/licence items required for later integration.
9. Confirmation that the original project, Fruito, backups and unrelated files were not changed.

Do not stop after writing another plan. Use the files actually available to build the website foundation. When a non-critical asset is missing, implement a clearly-labelled fallback and continue. Ask the user before purchases, commissions, destructive file operations, or materially changing the approved Strategy B architecture.
