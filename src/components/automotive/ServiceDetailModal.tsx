'use client';

import React, { useEffect, useRef } from 'react';
import { AutomotiveService } from '@/types';
import { getWhatsAppUrl } from '@/lib/constants';

interface ServiceDetailModalProps {
  service: AutomotiveService | null;
  onClose: () => void;
  onEnquire?: (service: AutomotiveService) => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Auto-focus close button for screen reader & keyboard accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsappUrl = getWhatsAppUrl(service.title);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 bg-black/85 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0F1118] border border-white/15 rounded-t-2xl md:rounded-2xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col p-6 md:p-8 animate-in fade-in slide-in-from-bottom-6 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-2.5 py-0.5 rounded">
                CATEGORY {String(service.categoryNumber).padStart(2, '0')}
              </span>
              {service.recommendedInterval && (
                <span className="text-xs text-slate-400">
                  {service.recommendedInterval}
                </span>
              )}
            </div>
            <h2 id="modal-service-title" className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {service.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close service details"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Detailed Explanation */}
        <div className="space-y-6 flex-1 text-sm text-slate-300">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold mb-2">
              Service Overview:
            </h3>
            <p className="leading-relaxed text-slate-200 text-sm">
              {service.detail}
            </p>
          </div>

          {/* Inspection Scope Checklist */}
          <div className="bg-[#141722] border border-white/5 rounded-xl p-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              Inspection & Assessment Points:
            </h3>
            <ul className="space-y-2">
              {service.inspectionScope.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="text-yellow-400 font-bold mt-0.5" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Deliverables Checklist */}
          <div className="bg-[#141722] border border-white/5 rounded-xl p-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              Standard Inclusions & Deliverables:
            </h3>
            <ul className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="text-yellow-400 font-bold mt-0.5" aria-hidden="true">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions: Book Now via WhatsApp & Close */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book ${service.title} on WhatsApp`}
            className="w-full sm:flex-1 py-3.5 px-5 text-center font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] rounded-lg tracking-wider uppercase transition-all shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Book Now on WhatsApp</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto py-3.5 px-6 text-center font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
