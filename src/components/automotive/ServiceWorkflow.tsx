'use client';

import React from 'react';
import { SERVICE_WORKFLOW_STEPS, getWhatsAppUrl } from '@/lib/constants';

export function ServiceWorkflow() {
  const generalWhatsAppUrl = getWhatsAppUrl();

  return (
    <section id="how-it-works" className="py-16 md:py-24 border-b border-white/[0.08] bg-[#08090C] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold">
                HOW IT WORKS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Simple, Transparent 4-Step Booking
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We keep the entire service workflow straightforward. No unexpected repairs and no hidden costs—work only proceeds after your approval.
            </p>
          </div>

          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 rounded-lg uppercase tracking-wider transition-all shadow-sm shadow-yellow-400/20 whitespace-nowrap self-start md:self-auto min-h-[44px]"
          >
            <span>Start on WhatsApp</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
          </a>
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
