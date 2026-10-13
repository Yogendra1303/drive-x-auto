'use client';

import React from 'react';
import { AutomotiveService, ServiceCategory } from '@/types';
import { getWhatsAppUrl } from '@/lib/constants';

interface ServiceCardProps {
  service: AutomotiveService;
  onViewDetails: (service: AutomotiveService) => void;
}

export function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  const whatsappUrl = getWhatsAppUrl({
    serviceTitle: service.title,
  });

  const getCategoryIcon = (category: ServiceCategory) => {
    switch (category) {
      case 'periodic-servicing':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
      case 'ac-repair':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18m-18 0l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M6.5 6.5l11 11m-11 0l11-11" />
          </svg>
        );
      case 'batteries':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <rect x="2" y="7" width="16" height="12" rx="2" strokeWidth={1.75} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 11v4m-2-2h4m10-2h4m2-4v6" />
          </svg>
        );
      case 'tyres-wheel-care':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeWidth={1.75} />
            <circle cx="12" cy="12" r="3" strokeWidth={1.75} />
            <path strokeLinecap="round" strokeWidth={1.5} d="M12 3v6m0 6v6M3 12h6m6 0h6" />
          </svg>
        );
      case 'denting-painting':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'detailing-services':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'car-spa-cleaning':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'custom-repairs':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'windshields-lights':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'suspension-fitments':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v3m0 10v3m-4-13h8m-8 10h8m-6-8l4 2-4 2 4 2-4 2" />
          </svg>
        );
      case 'clutch-body-parts':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" strokeWidth={1.75} />
            <circle cx="12" cy="12" r="3" strokeWidth={1.75} />
            <path strokeLinecap="round" strokeWidth={1.5} d="M12 2v2m0 16v2M2 12h2m16 0h2" />
          </svg>
        );
      case 'inspections-diagnostics':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'insurance-claims':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'sos-emergency':
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-yellow-400 stroke-current fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        );
    }
  };

  return (
    <article
      id={`service-${service.id}`}
      className="group bg-[#0F1118] hover:bg-[#131622] border border-white/10 hover:border-yellow-400/40 rounded-xl p-5 md:p-6 transition-all duration-200 flex flex-col justify-between shadow-lg relative scroll-mt-24 hover:-translate-y-0.5"
    >
      <div className="flex-1 flex flex-col">
        {/* Top Header Badge & Category Icon */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center group-hover:border-yellow-400/50 transition-colors">
            {getCategoryIcon(service.category)}
          </div>
          <span className="font-mono text-[11px] font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/25 px-2 py-0.5 rounded">
            CAT {String(service.categoryNumber).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
          {service.title}
        </h3>

        {/* Short Summary */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {service.summary}
        </p>

        {/* Scope Checklist Items */}
        <div className="space-y-1.5 mb-5 pt-3 border-t border-white/5 mt-auto">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
            Key Inclusions:
          </span>
          {service.inspectionScope.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
              <span className="text-yellow-400 font-bold" aria-hidden="true">›</span>
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons: View Details & Book Now */}
      <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 mt-4">
        <button
          type="button"
          onClick={() => onViewDetails(service)}
          aria-label={`View details for ${service.title}`}
          className="w-full min-h-[44px] py-2.5 px-3 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-colors text-center flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
        >
          View Details
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Book ${service.title} on WhatsApp`}
          className="w-full min-h-[44px] py-2.5 px-3 text-xs font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] rounded-lg transition-all text-center uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm shadow-yellow-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span>Book Now</span>
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
          </svg>
        </a>
      </div>
    </article>
  );
}
