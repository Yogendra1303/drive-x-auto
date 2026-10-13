'use client';

import React from 'react';
import Image from 'next/image';
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  getWhatsAppUrl,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  WORKING_HOURS,
  WHATSAPP_NUMBER,
} from '@/lib/constants';
import { CONFIRMED_SERVICES } from '@/data/services';

export function Footer() {
  const generalWhatsAppUrl = getWhatsAppUrl();

  return (
    <footer id="contact" className="bg-[#050608] border-t border-white/10 pt-16 pb-28 md:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-4 lg:col-span-2">
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
              <span className="text-xl font-bold text-white tracking-tight flex items-center gap-1">
                Drive <span className="text-yellow-400">X</span> Auto
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              {BRAND_TAGLINE} Providing multi-system workshop coverage with itemised estimates and clear communication.
            </p>
            <div className="inline-block px-2.5 py-1 rounded border border-yellow-400/30 text-[11px] font-mono text-yellow-400 bg-yellow-400/5">
              14 Confirmed Service Categories
            </div>

            {/* Direct WhatsApp Action in Brand Col */}
            <div className="pt-2">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-yellow-400 text-black font-bold uppercase tracking-wider text-xs hover:bg-yellow-300 transition-colors shadow-sm shadow-yellow-400/20"
              >
                <span>WhatsApp: +{WHATSAPP_NUMBER}</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Directory Categories 01 — 07 */}
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

          {/* Service Directory Categories 08 — 14 */}
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

          {/* Quick Navigation & Contact Details */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-yellow-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-yellow-400 transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-yellow-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#custom-repair" className="hover:text-yellow-400 transition-colors">
                    Custom Repair
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-yellow-400 transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-1.5 text-slate-300">
              <p className="font-semibold text-white">Contact & Support:</p>
              <p>Phone: {CONTACT_PHONE}</p>
              <p>Email: {CONTACT_EMAIL}</p>
              <p className="text-[11px] text-slate-400">{WORKING_HOURS}</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 {BRAND_NAME}. All rights reserved.</p>
          <p className="font-mono">
            Automotive Workshop Platform • Transparent Estimates
          </p>
        </div>
      </div>
    </footer>
  );
}
