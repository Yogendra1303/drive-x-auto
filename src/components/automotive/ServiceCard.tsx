'use client';

import React from 'react';
import { AutomotiveService } from '@/types';
import { getWhatsAppUrl } from '@/lib/constants';

interface ServiceCardProps {
  service: AutomotiveService;
  onViewDetails: (service: AutomotiveService) => void;
}

export function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  const whatsappUrl = getWhatsAppUrl(service.title);

  return (
    <article
      id={`service-${service.id}`}
      className="group bg-[#0F1118] hover:bg-[#141722] border border-white/10 hover:border-yellow-400/50 rounded-xl p-5 md:p-6 transition-all duration-200 flex flex-col justify-between shadow-lg relative scroll-mt-24"
    >
      <div className="flex-1 flex flex-col">
        {/* Top Header Badge & Category Number */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/25 px-2.5 py-0.5 rounded">
            CATEGORY {String(service.categoryNumber).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2.5">
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
          className="w-full min-h-[44px] py-2.5 px-3 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-center flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
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
