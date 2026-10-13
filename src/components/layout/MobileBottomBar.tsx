'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/constants';

export function MobileBottomBar() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0C11]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-4 gap-1.5">
        <a
          href="#services"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-slate-300 hover:text-yellow-400 active:bg-white/5 rounded-lg text-center transition-colors min-h-[44px]"
        >
          <svg className="w-5 h-5 mb-0.5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <span className="text-[10px] font-medium tracking-tight">Services</span>
        </a>

        <a
          href="#why-us"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-slate-300 hover:text-yellow-400 active:bg-white/5 rounded-lg text-center transition-colors min-h-[44px]"
        >
          <svg className="w-5 h-5 mb-0.5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-[10px] font-medium tracking-tight">Why Us</span>
        </a>

        <a
          href="#custom-repair"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-slate-300 hover:text-yellow-400 active:bg-white/5 rounded-lg text-center transition-colors min-h-[44px]"
        >
          <svg className="w-5 h-5 mb-0.5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span className="text-[10px] font-medium tracking-tight">Enquire</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book on WhatsApp"
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-yellow-400 hover:bg-yellow-300 active:scale-[0.97] text-black font-bold rounded-lg text-center transition-all min-h-[44px] shadow-sm shadow-yellow-400/30"
        >
          <svg className="w-5 h-5 mb-0.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
          </svg>
          <span className="text-[10px] font-bold tracking-tight uppercase">Book Now</span>
        </a>
      </div>
    </div>
  );
}
