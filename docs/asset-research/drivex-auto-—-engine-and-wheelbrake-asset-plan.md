# Drivex Auto — engine and wheel/brake asset plan

13 October 2026. Strategy B approved: conditional CarConcept exterior + separate high-quality mechanical scenes. This inventory and plan is for review. No new models downloaded, purchased, commissioned or edited. No full website implementation. All 14 categories remain confirmed; no catalogue re-request needed. Antigravity remains a separate development workstream.

## Recommendation
First investigate three free CC BY 4.0 candidates at file level: david.gnzlv's Rigged 4-Cylinder Engine, Vladi's Brake Disk and Caliper, and neosearch's tire and wheel rim. Compare the wheel candidate with an isolated CarConcept wheel assembly before choosing; do not assume CarConcept geometry is suitable for close-up removal or brake anatomy. No paid model recommended now. Free files can still require extensive art work.

Use separate studio scenes, not a literal camera journey into CarConcept's engine bay. Match lighting/materials/color grading and transition language; label anatomy illustrative where it does not represent the concept car. Never imply a specific Drivex-compatible vehicle or claim every service has a corresponding rig.

## 1. Candidate sources and licensing evidence

| Candidate | Reached-source evidence | Proposed role | Remaining checks |
| --- | --- | --- | --- |
| Rigged 4-Cylinder Engine (FREE), david.gnzlv | Free download; CC BY 4.0; 78.8k triangles; creator describes rig/animation and crankshaft control | Primary engine intake candidate | Complete engine-service exterior versus exposed mechanism; materials; source formats/bytes; export clips; constraints; anatomy; third-party marks |
| Brake Disk and Caliper, Vladi (@vladivpg) | Free download; CC BY 4.0; 6.2k triangles | Primary brake intake candidate | Pads/caliper/hub separation, clearances, UVs/PBR quality, brands, source formats/bytes |
| tire and wheel rim, neosearch | Download option; CC BY 4.0; 35.2k triangles | Alternate wheel intake candidate | Tire/rim separation, tread normals, sidewall brands, UVs/materials, hub fit, formats/bytes |
| CarConcept, Eric Chadwick / Darmstadt Graphics Group GmbH | Previously downloaded and rendered; CC BY 4.0 model/textures, restricted Khronos/3D Commerce marks | Exterior; existing wheels as reuse comparison | Branding removal, mobile-tier optimization, close-up quality and corrected brake hierarchy |

Exact sources:
- Engine: https://sketchfab.com/3d-models/rigged-4-cylinder-engine-free-e14ebe68273d49a3becda6802270b4b0
- Brake: https://sketchfab.com/3d-models/brake-disk-and-caliper-5feda9dbf20a49cf9fd29d550e55e4b9
- Wheel: https://sketchfab.com/3d-models/tire-and-wheel-rim-5264bedf765742e284b2b9f15ef4259c
- CarConcept license: https://github.com/KhronosGroup/glTF-Sample-Assets/blob/7d4ba189827916452eeadc82d4b712dbc6280a6f/Models/CarConcept/LICENSE.md
- CC BY 4.0 terms: https://creativecommons.org/licenses/by/4.0/

Evidence boundary: engine/brake listings were reached in the preceding research turn; wheel listing reached in this turn. Only CarConcept has actual downloaded-file/rendering evidence. Published triangle counts are not measured runtime counts. No claim of GLB availability, downloadable rig fidelity, file size, NoAI absence, commercial warranty or photorealistic performance for these new candidates.

### Held-back/excluded leads
Car Engine by Bora Özakaltun: free CC Attribution listing, 38.1k triangles, Blender/Substance workflow. Creator says they do not know engine anatomy and used an unidentified reference model. This is a provenance/anatomy concern, not proof of infringement. Hold until provenance and accuracy are resolved, rather than assuming the license label cures all issues.
https://sketchfab.com/3d-models/car-engine-2ee0cab6e1654f0eb5f92adc51ff4244

Car Wheel and Tire by Adriano.Azevedo: creator describes realistic PBR; 232.7k triangles; NoAI displayed; no visible download or license on reached page. Excluded from free commercial shortlist.
https://sketchfab.com/3d-models/car-wheel-and-tire-afda886eabae4557b27b287344c3718b

Other race-wheel/Brembo leads failed extraction; not license-verified or accepted. Prefer generic parts over branded motorsport assemblies. Earlier CC BY-NC suspension is excluded for commercial use without separate rights. No need to buy or commission while viable free candidates await inspection.

## 2. Engine scene inventory
Mandatory first-scene package:
- Coherent generic four-cylinder assembly with block/head, cover and sensible visible service points.
- Separately addressable oil filter and oil cap/dipstick or agreed fluid-service elements; intake and selected belts/pulleys only where relevant.
- Stable scene root, metric scale, rest pose, named meshes and component IDs.
- Polished cast/machined metal, painted/plastic covers and rubber materials with consistent PBR workflow.
- One camera-ready poster and matching detail poster; GLB mobile tier and editable source.
- Engine overview and bounded service-point reveal/exploded sequence. Avoid gratuitous piston animation when service explanation does not require it.

Optional second pass: sectional/internal crankshaft/piston/valve scene, only after mechanical accuracy and mobile budget review. A working combustion rig does not establish oil-filter replacement or an accurate complete service assembly.

Currently missing/unverified: intake candidate's complete exterior, filter/caps/dipstick/reservoir parts, independent meshes, source licence bundle, exported animations, materials, branded textures and runtime cost. Reservoir/bracket variants must not be added as false literal CarConcept anatomy. Do not show oil spilling or advertise procedures as DIY instruction.

Target story: exterior transition → separate engine overview → one relevant service point selected → clear service panel → return/reassemble. A skip and ordinary service selection remain available. Primarily serves Periodic Car Servicing; Diagnostics and Custom Repairs can link to panels without inventing fault readings or repair scope. AC/Battery scenes remain separate future inventory, not hidden additions to this phase.

## 3. Wheel/brake scene inventory
Mandatory first-scene package:
- Tire, rim, hub/mounting face and lug fasteners, separately addressable where removal is shown.
- Brake disc, caliper/body/bracket and inner/outer pad or accurately simplified pad pair.
- Knuckle/mount reference only if needed for physically credible caliper mounting; no full suspension scope expansion.
- Controlled tire tread/sidewall materials with generic, cleared markings; metal/rubber/brake finish matched to engine scene.
- Rest, wheel-off, brake-reveal and reassembled states; matching poster(s), GLB tier, editable source and manifest.

Pivot hierarchy:
scene_root → stationary_corner → steering_pivot (optional) → hub_spin → hub/disc/rim/tire.
Caliper/bracket attaches to knuckle/stationary steering assembly, not hub_spin. Axial explosion uses an explicit axle vector; pad movement is bounded and separate. Wheel-off rim/tire can be grouped for removal while disc remains mounted. Separate rolling and steering axes; do not casually turn wheels and stationary calipers together.

Currently missing/unverified: hub, lug hardware, pads, mounting references, consistent fit between candidate parts, correct pivots/clearance, textures and editable exports. Existing CarConcept brakes share wheel groups and need a reviewed hierarchy before reuse. New wheel plus existing brake is a designed illustrative assembly, not automatically accurate by juxtaposition.

Target story: wheel overview → wheel removed along axis → disc/caliper reveal → tap service hotspots → reassemble. Tyres & Wheel Care is the confirmed category; brake-specific explanatory content can be mapped to Periodic/Custom Repairs only after approved wording, not invented as a new 15th category. Suspension is a future scene, not implied by a wheel corner.

## 4. Cohesive quality requirements
Synthetic premium studio lighting across exterior/engine/wheel; reference camera distances and common material library. Charcoal/yellow UI accent does not mean painting every mechanical part yellow. Use believable metallic/roughness values, correct texture color space, baked details rather than expensive microgeometry, and clean silhouettes. Final Drivex logo/palette assets still pending, so no exact logo/color sampling claimed.

Artist/runtime delivery requirements: editable sources with resolved textures; GLB per scene; named node/pivot map; local axes/limits; service mapping; named clips only if approved; posters; source/high-detail bake assets where relevant; license/attribution manifest; export/decoder instructions. Blender constraints must be baked or deliberately recreated, never assumed to export.

## 5. Licensing checklist
CC BY 4.0 allows commercial adaptation with appropriate credit, license link and modification disclosure; no endorsement implication. For each accepted asset retain title, creator, original URL, licence text, retrieval revision/checksum and actual changes. Site credits plus distributable asset notices should carry the provenance. For CarConcept credit Eric Chadwick, © 2024 Darmstadt Graphics Group GmbH.

Audit geometry and textures for Khronos, 3D Commerce, tire manufacturer, engine maker and brake-company marks. Remove/replace where rights are not separately established; license copyright alone does not clear trademarks. Preserve required copyright notices even when visual marks are removed. Check fonts/HDRIs/reference images/embedded textures independently. Avoid NC assets, ND assets requiring adaptation, unclear copied sources; review SA obligations before acceptance. If NoAI is attached, do not feed the model into generative AI tools. Current modelling cleanup is not authorized.

## 6. Progressive implementation plan — review gates
1. Approve this candidate intake shortlist separately. Strategy approval is not automatic download permission.
2. Download originals to an isolated inspection folder, not website repository. Record license bundle/hash/byte size. Parse nodes/textures/animations; inspect anatomy/provenance and reject unsupported candidates. No edits yet.
3. Render each asset separately in the disposable inspection workflow. Compare closed/detail/exploded feasibility, material quality, loading and draw cost. If free candidates pass, recommend adaptation; if not, document exact gaps before suggesting paid alternatives or an artist quote.
4. Seek separate approval for narrowly scoped adaptation/modelling. Build wheel/brake first as the lower-dependency visual slice, followed by engine; no full website. Review material consistency and anatomy before replication.
5. Export compressed GLB/texture tiers, posters and license manifests. Compare compression visually; verify decoders and clips in Three.js. Mechanical assets should load only near the selected scene or on explicit request; do not preload the whole catalogue.
6. Mobile quality gate: actual target phones where available, loading on documented network profiles, movement/clearance, reduced motion, WebGL failure, scene disposal and context loss. Narrow desktop containers are not real-device evidence.
7. Only after review authorize a mobile hero + one scroll interaction. Full website remains separately gated; Strawberry produces planning/source, Antigravity handles its separate development workflow.

Proposed starting budgets (recommendations, not verified guarantees): 50k–100k visible triangles, <=60 ordinary draw calls, <=4 MB compressed transfer per mechanical scene; 1K textures generally, 2K only where visibly necessary. Start with one active scene and cap DPR/device tiers. Adjust only through measured quality/performance review. Desktop rAF median from CarConcept is not transferable to the new scenes or phones. Progressive loading should provide immediate licensed poster and complete readable service content independent of 3D. Do not replace premium quality with unchecked decimation to hit a number.

## 7. Acceptance and unresolved work
Accept only after commercial rights/provenance pass; anatomy review; stable named hierarchy; correct caliper/rotor and engine motion; readable medium/close-up views; no detached meshes/collisions at sampled poses; tested GLB export/compressed loading; consistent materials and reduced-motion/fallback content. Record glTF Validator results, texture dimensions, measured byte sizes, draw passes, frame-time distribution, GPU memory where measurable and real-device configurations. No benchmarks exist for new candidates.

Estimated adaptation complexity: wheel/brake medium, engine medium-high; both may become high if meshes are merged or materials/rigs unusable. No supplier quote, actual file size, paid requirement or confirmed modelling cost yet. Free sourcing is exhausted only after file-level inspection of these candidates, not after a search snippet.

Inventory is final for this review stage, NOT a claim that every required component is sourced. Candidate acquisition and further implementation remain pending approval.
