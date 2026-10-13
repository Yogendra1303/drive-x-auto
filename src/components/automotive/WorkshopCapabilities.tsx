'use client';

import React from 'react';
import { WHY_CHOOSE_US_BENEFITS } from '@/lib/constants';

export function WorkshopCapabilities() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'transparent-estimates':
        return (
          <svg className="w-6 h-6 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'multi-system-coverage':
        return (
          <svg className="w-6 h-6 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'fast-whatsapp-support':
        return (
          <svg className="w-6 h-6 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'equipped-facility':
        return (
          <svg className="w-6 h-6 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-24 border-b border-white/[0.08] bg-[#0A0C12] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Built for Transparency and Dependable Care
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We prioritize straightforward communication, itemised estimates before starting any repair work, and multi-system coverage so you always know your vehicle is in good hands.
          </p>
        </div>

        {/* 4 Benefit Cards Grid with Distinct Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_BENEFITS.map((benefit, i) => (
            <div
              key={benefit.id}
              className="bg-[#10131D] border border-white/[0.08] hover:border-yellow-400/40 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between shadow-lg group hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center group-hover:border-yellow-400/50 transition-colors">
                    {getIcon(benefit.id)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-yellow-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
