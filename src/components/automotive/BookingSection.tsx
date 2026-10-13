'use client';

import React, { useState } from 'react';
import { CONFIRMED_SERVICES } from '@/data/services';
import { AutomotiveService } from '@/types';
import { getWhatsAppUrl, WHATSAPP_COUNTRY_CODE, WHATSAPP_RAW_PHONE } from '@/lib/constants';

interface BookingSectionProps {
  selectedService: AutomotiveService | null;
  onClearSelectedService: () => void;
}

export function BookingSection({ selectedService, onClearSelectedService }: BookingSectionProps) {
  const initialServiceId = selectedService ? selectedService.id : 'custom-repairs';
  const [serviceId, setServiceId] = useState<string>(initialServiceId);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [vehicle, setVehicle] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedServiceObj = CONFIRMED_SERVICES.find((s) => s.id === serviceId);
  const serviceTitle = selectedServiceObj ? selectedServiceObj.title : 'Custom Repair & Diagnosis';
  const generalWhatsAppUrl = getWhatsAppUrl({ serviceTitle });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!customerPhone.trim() || customerPhone.trim().length < 8) {
      setErrorMessage('Please provide a valid contact mobile number.');
      return;
    }
    if (!vehicle.trim()) {
      setErrorMessage('Please specify your vehicle make and model.');
      return;
    }

    setErrorMessage(null);

    const directWhatsAppUrl = getWhatsAppUrl({
      serviceTitle,
      vehicle: vehicle.trim(),
      customerName: customerName.trim(),
      phone: customerPhone.trim(),
      notes: notes.trim() || undefined,
    });

    window.open(directWhatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="custom-repair" className="py-16 md:py-24 border-b border-white/[0.08] bg-[#0A0C13] scroll-mt-16">
      {/* Hidden anchor for backward compatibility with #enquiry */}
      <div id="enquiry" className="scroll-mt-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold">
              CUSTOM ENQUIRY
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Looking for a Specific Repair?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Tell us what your car needs, and our workshop team will review the symptoms and share an itemised estimate with clear next steps.
          </p>
        </div>

        {/* Quick WhatsApp Alternative Banner */}
        <div className="mb-8 p-4 rounded-xl bg-yellow-400/[0.04] border border-yellow-400/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-slate-300">
            <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
            <span>
              Prefer instant chat? Connect directly on WhatsApp with our service desk ({WHATSAPP_COUNTRY_CODE} {WHATSAPP_RAW_PHONE}).
            </span>
          </div>
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-yellow-400 hover:text-yellow-300 transition-colors whitespace-nowrap min-h-[44px]"
          >
            <span>Message on WhatsApp</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="bg-[#10131E] border border-white/[0.1] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="p-3.5 bg-red-950/60 border border-red-500/50 rounded-lg text-xs text-red-200">
                {errorMessage}
              </div>
            )}

            {/* Service Category Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="custom-service-select" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Service Category:
                </label>
                {selectedService && (
                  <button
                    type="button"
                    onClick={onClearSelectedService}
                    className="text-xs text-yellow-400 hover:underline"
                  >
                    Clear Selected Service
                  </button>
                )}
              </div>
              <select
                id="custom-service-select"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full bg-[#161926] border border-white/15 focus:border-yellow-400 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-colors cursor-pointer"
              >
                {CONFIRMED_SERVICES.map((s) => (
                  <option key={s.id} value={s.id} className="bg-[#12141F] text-white">
                    Category {String(s.categoryNumber).padStart(2, '0')}: {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Vehicle & Customer Details in Responsive 2-Col Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="custom-customer-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Your Full Name <span className="text-yellow-400">*</span>
                </label>
                <input
                  id="custom-customer-name"
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full bg-[#161926] border border-white/15 focus:border-yellow-400 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="custom-customer-phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Mobile Number <span className="text-yellow-400">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">
                    +91
                  </span>
                  <input
                    id="custom-customer-phone"
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="9971715176"
                    maxLength={10}
                    className="w-full bg-[#161926] border border-white/15 focus:border-yellow-400 rounded-lg pl-14 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-colors font-mono"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="custom-vehicle" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Vehicle Make & Model <span className="text-yellow-400">*</span>
                </label>
                <input
                  id="custom-vehicle"
                  type="text"
                  required
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  placeholder="e.g. 2021 Honda City Petrol / Hyundai Creta Diesel"
                  className="w-full bg-[#161926] border border-white/15 focus:border-yellow-400 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-colors"
                />
              </div>
            </div>

            {/* Repair Symptoms / Description */}
            <div>
              <label htmlFor="custom-notes" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                Describe the Issue or Symptoms:
              </label>
              <textarea
                id="custom-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe any warning indicators, unusual noises, brake feel, AC cooling drop, or specific repair requests..."
                className="w-full bg-[#161926] border border-white/15 focus:border-yellow-400 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-colors"
              />
            </div>

            {/* Form Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] rounded-lg tracking-wider uppercase transition-all shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2 min-h-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Enquire on WhatsApp</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                Submitting opens WhatsApp with your prefilled details to connect directly with Drive X Auto.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
