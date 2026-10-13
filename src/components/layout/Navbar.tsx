'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { NAV_LINKS, getWhatsAppUrl } from '@/lib/constants';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const generalWhatsAppUrl = getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08090C]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg p-1"
            aria-label="Drive X Auto Homepage"
          >
            <div className="relative w-9 h-9 md:w-11 md:h-11 flex-shrink-0 bg-[#12141C] border border-yellow-400/40 rounded-lg p-1 flex items-center justify-center group-hover:border-yellow-400 transition-colors shadow-sm">
              <Image
                src="/brand/emblem.png"
                alt="Drive X Auto Shield Emblem"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-1">
                Drive <span className="text-yellow-400">X</span> Auto
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 ml-0.5" aria-hidden="true"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                Complete Car Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-yellow-400 transition-colors tracking-wide py-1 focus-visible:outline-none focus-visible:text-yellow-400 focus-visible:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a service with Drive X Auto on WhatsApp"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] transition-all rounded-md tracking-wider uppercase shadow-sm shadow-yellow-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[40px]"
            >
              <span>Book a Service</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.188 8.188 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.196 8.196 0 0 1-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24z" />
              </svg>
            </a>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-md text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0B0D12] px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-yellow-400 hover:bg-white/5 rounded-md transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 text-center text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 rounded-md tracking-wider uppercase flex items-center justify-center gap-2 min-h-[44px] shadow-sm shadow-yellow-400/20"
            >
              <span>Book a Service on WhatsApp</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
