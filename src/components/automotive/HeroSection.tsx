'use client';

import React from 'react';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
}

export function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-24 md:pb-28 border-b border-white/[0.08] bg-radial from-[#131724] via-[#090A0E] to-[#07080B]">
      {/* Background technical grid and subtle gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Cyber-luxury halo glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-400/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Introductory Label */}
          <div className="mb-4 md:mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 shadow-sm shadow-yellow-400/10">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              14 SERVICE CATEGORIES
            </span>
          </div>

          {/* Main Customer Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Complete Car Care. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
              All in One Place.
            </span>
          </h1>

          {/* Customer Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
            From routine servicing and AC repair to tyres, diagnostics, detailing and bodywork, explore the services your vehicle needs.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] transition-all rounded-lg uppercase tracking-wider shadow-lg shadow-yellow-400/20 text-center min-h-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Services</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="#enquiry"
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center px-7 py-4 text-sm font-semibold text-white bg-[#151822]/90 hover:bg-[#1E2230] border border-white/15 hover:border-yellow-400/50 active:scale-[0.98] transition-all rounded-lg tracking-wider text-center min-h-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Enquire About a Service
            </a>
          </div>

          {/* Customer-Oriented Category Shortcut Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
            <a
              href="#services"
              className="group bg-[#0D0F16]/80 hover:bg-[#151926] border border-white/[0.08] hover:border-yellow-400/40 rounded-xl p-4 transition-all duration-200 block shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">Routine Care</span>
                <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
              </div>
              <span className="text-xs text-slate-400 line-clamp-2">Periodic checks, oil, filters, and battery</span>
            </a>

            <a
              href="#services"
              className="group bg-[#0D0F16]/80 hover:bg-[#151926] border border-white/[0.08] hover:border-yellow-400/40 rounded-xl p-4 transition-all duration-200 block shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">Mechanical & AC</span>
                <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
              </div>
              <span className="text-xs text-slate-400 line-clamp-2">Cooling, AC, brakes, clutch, and suspension</span>
            </a>

            <a
              href="#services"
              className="group bg-[#0D0F16]/80 hover:bg-[#151926] border border-white/[0.08] hover:border-yellow-400/40 rounded-xl p-4 transition-all duration-200 block shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">Tyres & Bodywork</span>
                <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
              </div>
              <span className="text-xs text-slate-400 line-clamp-2">Alignment, dent repair, and paint refinishing</span>
            </a>

            <a
              href="#services"
              className="group bg-[#0D0F16]/80 hover:bg-[#151926] border border-white/[0.08] hover:border-yellow-400/40 rounded-xl p-4 transition-all duration-200 block shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">Care & Support</span>
                <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
              </div>
              <span className="text-xs text-slate-400 line-clamp-2">Diagnostics, spa, detailing, and roadside triage</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
