'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/constants';

type StageScene = 'exterior' | 'wheel-brake' | 'engine' | 'suspension';

interface VehicleStageBoundaryProps {
  /** Optional container slot for future client-only 3D canvas (Strategy B) */
  children?: React.ReactNode;
}

export function VehicleStageBoundary({ children }: VehicleStageBoundaryProps) {
  const [activeScene, setActiveScene] = useState<StageScene>('exterior');

  const scenes: Record<
    StageScene,
    {
      sequenceNumber: string;
      title: string;
      phaseLabel: string;
      associatedService: string;
      status: string;
      badgeColor: string;
      description: string;
      scopePoints: string[];
      readinessNote: string;
      whatsAppQuery: string;
      telemetry: {
        focus: string;
        coordinates: string;
        scale: string;
        fov: string;
      };
    }
  > = {
    exterior: {
      sequenceNumber: '01',
      title: 'Exterior Vehicle Storytelling',
      phaseLabel: 'Phase 01 — Exterior Foundation',
      associatedService: 'Denting & Painting (#05) / Detailing (#06)',
      status: 'Asset Identified (De-branding Review)',
      badgeColor: 'border-yellow-400/40 text-yellow-400 bg-yellow-400/10',
      description:
        'A comprehensive exterior vehicle showcase engineered to explore aerodynamic body lines, specular surface reflections, glass clarity, and mechanical access kinematics including operable dihedral doors and front clamshell hood.',
      scopePoints: [
        'Aerodynamic body panels and specular finish reflections',
        'Kinematic door opening and front clamshell hood articulation',
        'Optical lens housing clarity and headlight beam alignment',
        'High-resolution paint texture and surface detailing states',
      ],
      readinessNote:
        'CarConcept candidate asset inspected (~11.78 MB, 213k triangles). Texture de-branding and commercial licensing audit in progress before production runtime integration.',
      whatsAppQuery: 'Exterior Detailing & Bodywork',
      telemetry: {
        focus: 'FULL CHASSIS SILHOUETTE',
        coordinates: 'X: 0.00 | Y: 1.15 | Z: 3.80',
        scale: '1:1 METRIC REST',
        fov: '42° ORBITAL',
      },
    },
    'wheel-brake': {
      sequenceNumber: '02',
      title: 'Wheel & Brake Service Assembly',
      phaseLabel: 'Phase 02 — First Mechanical Milestone',
      associatedService: 'Tyres & Wheel Care (#04)',
      status: 'Candidate Intake Under Evaluation',
      badgeColor: 'border-cyan-400/40 text-cyan-400 bg-cyan-400/10',
      description:
        'A dedicated close-up corner assembly demonstrating tire tread depth, rim mounting geometry, ventilated brake disc wear, and stationary caliper bracket alignment without visual clutter.',
      scopePoints: [
        'Brake caliper stationary bracket and hydraulic mount reference',
        'Ventilated rotor friction face and wear inspection clearance',
        'Hub mounting interface, lug bolt torque, and wheel seating',
        'Tire tread depth, sidewall integrity, and laser alignment geometry',
      ],
      readinessNote:
        'Candidate models (Brake by Vladi, Wheel by neosearch) under file-level review. Will load as a lightweight, independent module (~4 MB budget).',
      whatsAppQuery: 'Tyres & Wheel Care',
      telemetry: {
        focus: 'CORNER ASSEMBLY [FRONT-RIGHT]',
        coordinates: 'X: 0.85 | Y: 0.35 | Z: 1.45',
        scale: 'ISOLATED COMPONENT',
        fov: '35° MACRO FOCUS',
      },
    },
    engine: {
      sequenceNumber: '03',
      title: 'Powertrain & Engine Service Scene',
      phaseLabel: 'Phase 03 — Second Mechanical Milestone',
      associatedService: 'Periodic Car Servicing (#01) & Diagnostics (#08)',
      status: 'Planned Mechanical Scene',
      badgeColor: 'border-emerald-400/40 text-emerald-400 bg-emerald-400/10',
      description:
        'An illustrative four-cylinder powertrain scene exposing essential maintenance points: oil filter replacement, fluid reservoirs, serpentine drive belts, and diagnostic test ports.',
      scopePoints: [
        'Accessible engine bay service points and fluid level checks',
        'Air intake plumbing, filter housing, and throttle assembly',
        'Serpentine accessory belt tension and pulley clearances',
        'Diagnostic sensor locations and system wiring connections',
      ],
      readinessNote:
        'Rigged 4-cylinder candidate by david.gnzlv identified for review. Kept in a separate studio scene to avoid monolithic vehicle downloads.',
      whatsAppQuery: 'Periodic Engine Servicing',
      telemetry: {
        focus: '4-CYLINDER ENGINE BLOCK',
        coordinates: 'X: 0.00 | Y: 0.75 | Z: 1.20',
        scale: 'STANDALONE SCENE',
        fov: '38° TECHNICAL',
      },
    },
    suspension: {
      sequenceNumber: '04',
      title: 'Suspension & Chassis Geometry',
      phaseLabel: 'Phase 04 — Future Roadmap Assembly',
      associatedService: 'Suspension & Fitments (#10)',
      status: 'Roadmap Milestone (Pending Sourcing)',
      badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
      description:
        'A future mechanically coherent chassis corner scene demonstrating independent strut compression, damper spring rates, lower control arm bushings, and steering rack tie rods.',
      scopePoints: [
        'Shock absorber and coil spring dampening stroke inspection',
        'Control arm rubber bushings, ball joints, and dust boots',
        'Stabilizer sway-bar links and chassis mounting points',
        'Steering rack tie-rod ends and wheel knuckle integration',
      ],
      readinessNote:
        'Reserved modular slot in Strategy B. Sourcing will begin after wheel/brake and engine scene approvals.',
      whatsAppQuery: 'Suspension & Chassis Inspection',
      telemetry: {
        focus: 'INDEPENDENT STRUT GEOMETRY',
        coordinates: 'X: 0.72 | Y: 0.40 | Z: 1.10',
        scale: 'ROADMAP CONCEPT',
        fov: '40° ISOMETRIC',
      },
    },
  };

  const sceneKeys: StageScene[] = ['exterior', 'wheel-brake', 'engine', 'suspension'];
  const active = scenes[activeScene];

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % sceneKeys.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + sceneKeys.length) % sceneKeys.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = sceneKeys.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveScene(sceneKeys[nextIndex]);
  };

  const activeWhatsAppUrl = getWhatsAppUrl(active.whatsAppQuery);

  return (
    <section
      id="interactive-stage"
      aria-labelledby="stage-heading"
      className="py-16 md:py-24 border-b border-white/[0.08] bg-[#07080B] relative scroll-mt-20 overflow-hidden"
    >
      {/* Anchor alias for #3d-experience */}
      <span id="3d-experience" className="absolute -top-20 invisible pointer-events-none" aria-hidden="true" />

      {/* Cyber-luxury ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-yellow-400/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-cyan-400/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-bold">
                3D Experience in Development
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-white/[0.06] border border-white/10">
                Strategy B Roadmap
              </span>
            </div>
            <h2 id="stage-heading" className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Interactive Automotive Showcase
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
            Drive X Auto is engineering a cinematic 3D digital platform following Strategy B: exterior vehicle storytelling paired with independent, modular mechanical scenes for precision service clarity.
          </p>
        </div>

        {/* Viewport Stage Container */}
        <div className="rounded-2xl border border-white/[0.12] bg-gradient-to-b from-[#11141E] via-[#0D0F17] to-[#08090F] overflow-hidden shadow-2xl shadow-black/80">
          {/* Top Control Bar with Scene Selector Tabs */}
          <div className="border-b border-white/[0.08] bg-[#0E1019]/90 px-4 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              <span className="inline-block w-2.5 h-2.5 bg-yellow-400 rounded-sm"></span>
              <span>
                INTEGRATION STAGE:{' '}
                <strong className="text-yellow-400 font-semibold">
                  Modular Scene Architecture
                </strong>
              </span>
            </div>

            {/* Accessible Tab Navigation */}
            <div
              className="flex flex-wrap items-center gap-1.5"
              role="tablist"
              aria-label="Planned 3D Scenes"
            >
              {sceneKeys.map((key, idx) => {
                const item = scenes[key];
                const isSelected = activeScene === key;
                return (
                  <button
                    key={key}
                    id={`tab-${key}`}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`panel-${key}`}
                    tabIndex={isSelected ? 0 : -1}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    onClick={() => setActiveScene(key)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 min-h-[44px] flex items-center ${
                      isSelected
                        ? 'bg-yellow-400 text-black font-bold shadow-md shadow-yellow-400/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <span>{item.sequenceNumber}. {item.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Children Slot (for future WebGL canvas) or Cinematic Showcase Fallback */}
          {children ? (
            <div className="relative min-h-[380px] md:min-h-[460px] w-full">
              {children}
            </div>
          ) : (
            /* Cinematic Blueprint Showcase Area */
            <div
              id={`panel-${activeScene}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeScene}`}
              className="p-6 md:p-10 relative min-h-[400px] md:min-h-[460px] flex flex-col justify-between"
            >
              {/* Technical Blueprint Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

              {/* Stage Top Meta Badges & Real-time HUD Telemetry */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-md border ${active.badgeColor}`}>
                    {active.phaseLabel}
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-white/[0.06] border border-white/10 rounded-md">
                    SERVICE: {active.associatedService}
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-black/40 border border-white/[0.08] rounded-md">
                    STATUS: {active.status}
                  </span>
                </div>

                {/* Technical Coordinates Display */}
                <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] text-slate-400 bg-black/50 px-3 py-1.5 rounded-lg border border-white/[0.08]">
                  <span className="text-yellow-400 font-semibold">{active.telemetry.focus}</span>
                  <span className="text-slate-600">|</span>
                  <span>{active.telemetry.coordinates}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-cyan-400">{active.telemetry.fov}</span>
                </div>
              </div>

              {/* Middle Content: Visual CAD Blueprint Schematic & Content */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-2">
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {active.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {active.description}
                  </p>

                  <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] text-xs text-slate-300 space-y-2">
                    <div className="flex items-center gap-2 text-yellow-400 font-mono font-semibold text-[11px] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                      Engineering Readiness Note
                    </div>
                    <p className="leading-relaxed">
                      {active.readinessNote}
                    </p>
                  </div>

                  {/* Action Link to WhatsApp or Services */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={activeWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] transition-all rounded-lg uppercase tracking-wider shadow-sm shadow-yellow-400/20 min-h-[44px]"
                    >
                      <span>Enquire About {active.title.split(' ')[0]} Care</span>
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                      </svg>
                    </a>

                    <a
                      href="#services"
                      className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 rounded-lg transition-colors min-h-[44px]"
                    >
                      Explore All Categories
                    </a>
                  </div>
                </div>

                {/* Right Interactive CAD Schematic & Focal Points Column */}
                <div className="lg:col-span-5 bg-[#0B0D15]/95 backdrop-blur-md border border-white/[0.1] rounded-2xl p-5 space-y-4 shadow-xl">
                  {/* Dynamic Technical Schematic Graphic for Active Scene */}
                  <div className="h-44 w-full bg-[#07080D] border border-white/[0.08] rounded-xl relative overflow-hidden flex items-center justify-center p-3">
                    {/* Reticle Grid Lines */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                    
                    {/* Corner Target Markers */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-yellow-400/50" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-yellow-400/50" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-yellow-400/50" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-yellow-400/50" />

                    {/* Active Schematic Visualization */}
                    {activeScene === 'exterior' && (
                      <div className="flex flex-col items-center justify-center text-center space-y-1 relative z-10">
                        {/* Car Silhouette Vector */}
                        <svg className="w-36 h-20 text-yellow-400 stroke-current fill-none" viewBox="0 0 200 80">
                          <path
                            d="M 15 55 L 35 55 C 38 43, 52 43, 55 55 L 140 55 C 143 43, 157 43, 160 55 L 185 55 C 190 55, 192 48, 185 45 L 160 38 L 130 18 L 65 18 L 38 38 L 18 42 C 12 43, 10 50, 15 55 Z"
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                          />
                          <circle cx="45" cy="55" r="9" strokeWidth="2.5" className="text-cyan-400" />
                          <circle cx="150" cy="55" r="9" strokeWidth="2.5" className="text-cyan-400" />
                          {/* Hinge Arc & Callout */}
                          <path d="M 65 18 C 70 8, 85 8, 90 18" strokeWidth="1.5" strokeDasharray="3 3" className="text-yellow-400" />
                          <circle cx="65" cy="18" r="2" fill="#FACC15" />
                        </svg>
                        <span className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest font-semibold">
                          CAD PROFILE: CHASSIS & HINGE KINEMATICS
                        </span>
                      </div>
                    )}

                    {activeScene === 'wheel-brake' && (
                      <div className="flex flex-col items-center justify-center text-center space-y-1 relative z-10">
                        {/* Brake Rotor & Caliper Vector */}
                        <svg className="w-32 h-24 text-cyan-400 stroke-current fill-none" viewBox="0 0 100 80">
                          <circle cx="50" cy="40" r="32" strokeWidth="2" strokeDasharray="6 3" />
                          <circle cx="50" cy="40" r="24" strokeWidth="2" className="text-slate-400" />
                          <circle cx="50" cy="40" r="12" strokeWidth="1.5" className="text-yellow-400" />
                          <circle cx="50" cy="40" r="4" fill="#00F2FE" />
                          {/* Caliper block */}
                          <rect x="22" y="14" width="22" height="28" rx="3" strokeWidth="2.5" className="text-yellow-400" />
                          <line x1="33" y1="18" x2="33" y2="38" strokeWidth="1.5" strokeDasharray="2 2" />
                        </svg>
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                          CAD ISOMETRIC: VENTILATED ROTOR & CALIPER
                        </span>
                      </div>
                    )}

                    {activeScene === 'engine' && (
                      <div className="flex flex-col items-center justify-center text-center space-y-1 relative z-10">
                        {/* 4-Cylinder Engine Schematic Vector */}
                        <svg className="w-32 h-24 text-emerald-400 stroke-current fill-none" viewBox="0 0 100 80">
                          <rect x="20" y="20" width="60" height="42" rx="4" strokeWidth="2" />
                          <rect x="26" y="10" width="48" height="10" rx="2" strokeWidth="1.5" className="text-yellow-400" />
                          {/* 4 Piston chambers */}
                          <line x1="32" y1="26" x2="32" y2="54" strokeWidth="2" strokeDasharray="3 2" />
                          <line x1="44" y1="26" x2="44" y2="54" strokeWidth="2" strokeDasharray="3 2" />
                          <line x1="56" y1="26" x2="56" y2="54" strokeWidth="2" strokeDasharray="3 2" />
                          <line x1="68" y1="26" x2="68" y2="54" strokeWidth="2" strokeDasharray="3 2" />
                          {/* Oil cap service marker */}
                          <circle cx="34" cy="15" r="3" fill="#FACC15" />
                        </svg>
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                          CAD CROSS-SECTION: INLINE 4 SERVICE NODES
                        </span>
                      </div>
                    )}

                    {activeScene === 'suspension' && (
                      <div className="flex flex-col items-center justify-center text-center space-y-1 relative z-10">
                        {/* Strut & Coil Spring Vector */}
                        <svg className="w-28 h-24 text-amber-400 stroke-current fill-none" viewBox="0 0 100 80">
                          {/* Damper shaft */}
                          <line x1="50" y1="8" x2="50" y2="72" strokeWidth="3" className="text-slate-400" />
                          {/* Coil spring wave */}
                          <path d="M 40 22 Q 60 26 40 30 Q 60 34 40 38 Q 60 42 40 46 Q 60 50 40 54 Q 60 58 40 62" strokeWidth="2.5" />
                          {/* Control arm bracket */}
                          <path d="M 28 68 L 50 68 L 72 74" strokeWidth="2" />
                          <circle cx="50" cy="12" r="3" fill="#FFB800" />
                        </svg>
                        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold">
                          CAD SCHEMATIC: MCPHERSON STRUT & SPRING
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Target Scope Checklist */}
                  <span className="text-[11px] font-mono uppercase tracking-wider text-yellow-400 block font-semibold">
                    Target Inspection Focal Points:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {active.scopePoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-400 font-bold mt-0.5" aria-hidden="true">›</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2.5 border-t border-white/[0.08] text-[11px] text-slate-400">
                    <strong className="text-slate-300">Notice:</strong> Non-mechanical categories (Insurance, SOS, Diagnostics, Custom Repairs) are handled via dedicated service panels.
                  </div>
                </div>
              </div>

              {/* Bottom Footer Notice */}
              <div className="relative z-10 pt-6 mt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span>Decoupled stage boundary prepared for approved 3D model integration</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  Drive X Auto • Strategy B Architecture
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
