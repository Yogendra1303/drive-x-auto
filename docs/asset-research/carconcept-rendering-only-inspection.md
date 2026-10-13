# CarConcept rendering-only inspection

Date: 13 October 2026. Recommendation: USE ONLY FOR THE EXTERIOR, not as the complete mechanical-service model. Full Drivex website remains paused pending review.

## Scope and reproducibility
Disposable viewer in this folder; no existing project replaced. Original GLB retained at ../carconcept-inspection/glTF-Binary/CarConcept.glb. SHA-256 rechecked unchanged: c272098089d78c5cd9fd9f24ff50ee8acf8d932c55f2d55fc10adb6c8998966b. Asset revision 7d4ba189827916452eeadc82d4b712dbc6280a6f. Three.js 0.186.1 pinned with lockfile. Tested in Strawberry Browser at reported viewport 1440x900, devicePixelRatio 2, rendering pixel ratio capped at 1.5. Synthetic RoomEnvironment PMREM, directional light, ACES tone mapping, no production HDR environment or shadows. Inspect viewer source for exact settings. No production website was built.

## Successful rendering evidence
GLTFLoader loaded the actual uncompressed GLB. Screenshots: closed-panels.png, open-panels.png and overhead-graphite.png. Geometry, paint, glass, cabin and wheel surfaces appeared in the renderer. Graphite variant applied and changed paint/interior appearance using explicit material mapping. This verifies two visual states (original Carmine and Graphite), not all variants/materials against a reference renderer. Pearly variant not tested. No reported JavaScript errors in saved diagnostic snapshot; console-wide warning audit not performed.

The hood and door controls were exercised using keyboard slider endpoints. Both doors moved outward with attached handles/glass/mirrors/interiors. The hood opened as a large front clamshell including headlights, exposing coarse dark mechanical surfaces. An initial rotation direction was wrong and corrected in viewer code; original GLB was not edited. These are manual real-time node transformations, not asset animation clips or scroll choreography. Closed/open endpoints and intermediate slider interactions do not establish exhaustive collision clearance or correct physical hinge limits.

## Geometry and mechanical limitations
Prior file-level inspection verified 101 nodes, 97 mesh definitions, 109 primitives, 213,347 indexed triangles; 29 materials, 15 texture definitions, 14 embedded PNGs; zero animation clips/skins. Separate hood/door assemblies, wheel groups, brake-disc/pad-named meshes, steering parts and axles exist. Engine is a single 60-triangle mesh, no subcomponents; axles are one 180-triangle mesh. The overhead rendered screenshot confirms coarse surface detail, not a credible close-up mechanical teardown. Body concept is futuristic, with two side doors and a clamshell rather than a familiar everyday workshop vehicle.

## Measured rendering/loading observations
Saved browser-metrics.json captured an open-panel Graphite overhead state:
- 218 renderer.info draw calls; 426,694 submitted triangles per frame; 109 renderer geometries; 16 renderer textures (includes viewer/environment resources).
- Recent frame interval median approximately 16.7 ms in the saved active desktop session. This is requestAnimationFrame timing, not GPU timing and not a phone FPS benchmark.
- Example render submission CPU time 5.9 ms, a single snapshot, not a percentile or pure GPU cost.
- GLTFLoader callback around 165.6 ms on repeat local-server load; other local snapshots ~287–323 ms. Includes local fetch/parse/setup to callback, excludes a controlled cold-network test and first-frame/first-interaction completion.
- First-frame/narrow-layout instrumentation also captured a ~400.8 ms submission spike and a large initial interval contaminated by setup/browser scheduling. Do not claim smoothness or guaranteed 60 FPS from the rolling median.

The submission triangle count is twice the asset count, consistent with extra transmission rendering work; not evidence of duplicated source geometry. Shader/pass analysis not performed. No actual GPU memory measurement. README figures (~48.8 MB uncompressed texture GPU memory; ~14.9 MB KTX2 compressed texture memory) remain publisher figures.

## Narrow layout and fallback
Tested body/canvas containers 360, 390 and 430 CSS pixels inside the 1440-pixel desktop viewport. Final settled bodyWidth/bodyScrollWidth/canvasWidth matched each width. ResizeObserver camera framing was corrected to avoid narrow-view clipping. narrow-390-final.png is the final visual evidence. Early narrow-layout-results.json contains pre-settle readings and startup instrumentation; it is not final acceptance evidence. Height continued to use desktop viewport svh, so this is not faithful mobile viewport/browser emulation.

Manual fallback button hid canvas (computed display:none), showed text fallback (display:block) and retained controls; see fallback-test.json and fallback.png. No actual WebGL initialization failure/context-loss recovery was forced. Inspection fallback is explanatory text, not a polished production fallback. Production requires a lightweight licensed poster plus accessible service content/contact actions; none should depend on WebGL. Reduced-motion and offscreen-pausing production behavior are not implemented here.

## License and actual texture branding
Model/textures CC BY 4.0, © 2024 Darmstadt Graphics Group GmbH, artist Eric Chadwick. Commercial adaptation permitted with credit, source/license link and truthful change notice; no endorsement implication. Khronos/3D Commerce trademarks excluded; actual maps contain branding including tire-side branding. Remove/replace marks before Drivex release or separately verify usage permission. No branding removal performed.
Source license: https://github.com/KhronosGroup/glTF-Sample-Assets/blob/7d4ba189827916452eeadc82d4b712dbc6280a6f/Models/CarConcept/LICENSE.md
License deed: https://creativecommons.org/licenses/by/4.0/
Mark terms saved in ../carconcept-inspection/LICENSES/LicenseRef-LegalMark-Khronos.txt

## Confirmed 14 service categories — asset implications
Exact user-confirmed names saved separately in confirmed-service-reference.json. No need to request catalogue again.

| Category | Asset use / missing content |
| --- | --- |
| Periodic Car Servicing | General exterior entry; realistic oil/filter/fluid/engine service parts absent as independent assemblies |
| AC Service & Repair | AC compressor, condenser, evaporator/lines missing |
| Batteries | Independent battery, terminals/cables missing |
| Tyres & Wheel Care | Existing wheels/tires useful; service-accurate manipulation and alignment visuals need review |
| Denting & Painting | Existing body panels/paint useful; no dent/deformation or repair stages |
| Detailing Services | Exterior useful; no verified detailing-state textures/effects |
| Car Spa & Cleaning | Exterior useful; cleaning stages not supplied |
| Inspections & Diagnostics | Body entry point only; diagnostics tools/sensors/OBD visuals absent |
| Windshields & Lights | Existing windshield/lights useful; replacement separation/sequence not verified |
| Suspension & Fitments | Axles/wheels insufficient; struts, springs, dampers/control arms missing as assemblies |
| Clutch & Body Parts | Body parts partly useful; clutch/transmission/flywheel missing |
| Insurance Claims | Workflow/content service, not a mechanical mesh requirement; no damage inspection assets |
| SOS / Emergency Services | Workflow/content service; roadside/towing context assets not supplied |
| Custom Repairs | Define repair scope first; cannot imply every repair has a supplied assembly |

These are proposed visual mappings, not newly invented business scope. Not every category needs a 3D breakdown; accessible panels should remain primary information.

## Recommendation and practical alternative
Use this model only for exterior/cabin/panel storytelling and selected wheels/lights. Do not market it as a complete service anatomy model. Premium appearance is achievable in the tested studio treatment, but exterior concept styling and expensive transmission need device-quality review.

Most practical quality-preserving alternative: commission a mobile-ready generic workshop vehicle or compatible mechanical upgrade from a 3D artist, with separated hood, doors, rotating wheel subassemblies, brake components, realistic engine-service assemblies, AC, battery, suspension and clutch/transmission. Require correct pivots, consistent scales, named nodes, source authoring files, GLB exports, LODs and documented commercial rights. A realistic rendered hero plus separately authored mechanical scenes is also viable and avoids pretending this coarse engine is suitable. Do not combine unrelated component models without consistent art direction/anatomy. Purchase/commissioning not authorized.

## Not verified / not claimed
Real iOS Safari or Android Chrome; mobile GPU/FPS; cold/throttled network or mobile data cost; compressed Draco/KTX2 variant decoding/render; formal glTF Validator; Blender import; exhaustive geometry topology/collision audit; shader fidelity against a calibrated reference; GPU memory; field Core Web Vitals; full keyboard/screen-reader production accessibility; booking/contact flow; full scroll narrative. No full website or real contact details created.
