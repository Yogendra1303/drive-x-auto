'use client';

import React from 'react';
import { SERVICE_WORKFLOW_STEPS } from '@/lib/constants';

export function ServiceWorkflow() {
  return (
    <section id="process" className="py-16 md:py-24 border-b border-white/[0.08] bg-[#08090C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold">
              Transparent Workflow
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Our Service Process
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            From initial drop-off to final handover, every step is communicated clearly with straightforward recommendations and itemised estimates.
          </p>
        </div>

        {/* 4 Steps Timeline Grid with Connected Progress */}
        <div className="relative">
          {/* Subtle connecting progression line on desktop */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-[2px] bg-gradient-to-r from-yellow-400/40 via-yellow-400/20 to-yellow-400/5 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {SERVICE_WORKFLOW_STEPS.map((step, i) => (
              <div
                key={step.stepNumber}
                className="bg-[#0F1118] border border-white/[0.08] hover:border-yellow-400/30 rounded-xl p-6 relative flex flex-col justify-between shadow-lg group transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-sm font-mono font-extrabold text-yellow-400 shadow-sm">
                      {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Step 0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-yellow-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
