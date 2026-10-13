'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/constants';

export function MobileBottomBar() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0C11]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="#services"
          className="flex flex-col items-center justify-center py-2 px-1 text-slate-300 hover:text-yellow-400 active:bg-white/5 rounded-lg text-center transition-colors min-h-[44px]"
        >
          <svg className="w-5 h-5 mb-0.5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <span className="text-[11px] font-medium tracking-tight">Services</span>
        </a>

        <a
          href="#interactive-stage"
          className="flex flex-col items-center justify-center py-2 px-1 text-slate-300 hover:text-yellow-400 active:bg-white/5 rounded-lg text-center transition-colors min-h-[44px]"
        >
          <svg className="w-5 h-5 mb-0.5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
          <span className="text-[11px] font-medium tracking-tight">3D Stage</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire on WhatsApp"
          className="flex flex-col items-center justify-center py-2 px-1 bg-yellow-400 hover:bg-yellow-300 active:scale-[0.97] text-black font-bold rounded-lg text-center transition-all min-h-[44px] shadow-sm shadow-yellow-400/30"
        >
          <svg className="w-5 h-5 mb-0.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
          </svg>
          <span className="text-[11px] font-bold tracking-tight uppercase">Enquire</span>
        </a>
      </div>
    </div>
  );
}
