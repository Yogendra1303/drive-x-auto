'use client';

import React from 'react';
import Image from 'next/image';
import { BRAND_NAME, BRAND_TAGLINE, getWhatsAppUrl } from '@/lib/constants';
import { CONFIRMED_SERVICES } from '@/data/services';

export function Footer() {
  const generalWhatsAppUrl = getWhatsAppUrl();

  return (
    <footer id="contact" className="bg-[#050608] border-t border-white/10 pt-16 pb-28 md:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0 bg-[#0F1118] border border-yellow-400/40 rounded-lg p-1 flex items-center justify-center">
                <Image
                  src="/brand/emblem.png"
                  alt="Drive X Auto Shield Emblem"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white tracking-tight flex items-center gap-1">
                Drive <span className="text-yellow-400">X</span> Auto
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              {BRAND_TAGLINE}
            </p>
            <div className="inline-block px-2.5 py-1 rounded border border-yellow-400/30 text-[11px] font-mono text-yellow-400 bg-yellow-400/5">
              14 Service Categories
            </div>
          </div>

          {/* Service Directory Lines 1-7 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
              Categories 01 — 07
            </h4>
            <ul className="space-y-2">
              {CONFIRMED_SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a
                    href={`#service-${s.id}`}
                    className="hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:underline focus-visible:text-yellow-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Directory Lines 8-14 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
              Categories 08 — 14
            </h4>
            <ul className="space-y-2">
              {CONFIRMED_SERVICES.slice(7, 14).map((s) => (
                <li key={s.id}>
                  <a
                    href={`#service-${s.id}`}
                    className="hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:underline focus-visible:text-yellow-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:underline focus-visible:text-yellow-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#interactive-stage"
                  className="hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:underline focus-visible:text-yellow-400"
                >
                  3D Experience
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:underline focus-visible:text-yellow-400"
                >
                  Service Process
                </a>
              </li>
              <li>
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:underline focus-visible:text-yellow-400 inline-flex items-center gap-1.5"
                >
                  <span>WhatsApp Enquiry</span>
                  <span className="text-[10px] text-yellow-400 font-mono">↗</span>
                </a>
              </li>
            </ul>
            <div className="pt-2 text-[11px] text-slate-500">
              Clear estimates before work begins.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 {BRAND_NAME}. All rights reserved.</p>
          <p className="font-mono">
            Automotive Workshop Platform • 14 Confirmed Categories
          </p>
        </div>
      </div>
    </footer>
  );
}
