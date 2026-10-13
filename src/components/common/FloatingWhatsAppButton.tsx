'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/constants';

export function FloatingWhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <aside
      aria-label="Direct messaging contact"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Drive X Auto on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white p-3 md:px-4 md:py-3 rounded-full shadow-2xl shadow-black/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white border border-white/20 min-h-[48px] min-w-[48px]"
      >
        {/* Live indicator dot */}
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <svg
          className="w-5 h-5 md:w-6 md:h-6 fill-current flex-shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.188 8.188 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.196 8.196 0 0 1-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24z" />
          <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>

        {/* Desktop Label */}
        <span className="hidden md:inline font-bold text-xs tracking-wide pr-1">
          WhatsApp Concierge
        </span>
      </a>
    </aside>
  );
}
