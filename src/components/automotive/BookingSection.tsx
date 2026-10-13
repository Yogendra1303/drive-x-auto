'use client';

import React, { useState } from 'react';
import { CONFIRMED_SERVICES } from '@/data/services';
import { AutomotiveService, BookingInquiry } from '@/types';
import { getWhatsAppUrl } from '@/lib/constants';

interface BookingSectionProps {
  selectedService: AutomotiveService | null;
  onClearSelectedService: () => void;
}

export function BookingSection({ selectedService, onClearSelectedService }: BookingSectionProps) {
  const initialServiceId = selectedService ? selectedService.id : 'periodic-car-servicing';
  const [serviceId, setServiceId] = useState<string>(initialServiceId);
  const [formData, setFormData] = useState<BookingInquiry>({
    serviceId: initialServiceId,
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName.trim() || !formData.customerPhone.trim() || !formData.vehicleMake.trim()) {
      setErrorMessage('Please provide your name, phone number, and vehicle make to submit your enquiry.');
      return;
    }
    setErrorMessage(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClearSelectedService();
    setFormData({
      serviceId: 'periodic-car-servicing',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      preferredDate: '',
      notes: '',
    });
  };

  const currentServiceName = CONFIRMED_SERVICES.find((s) => s.id === serviceId)?.title || 'Selected Service';
  const conciergeWhatsAppUrl = getWhatsAppUrl(currentServiceName);

  return (
    <section id="enquiry" className="py-16 md:py-24 border-b border-white/[0.08] bg-[#0A0C13] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold">
              Customer Enquiry
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Enquire About a Service
          </h2>
          <p className="text-sm text-slate-300">
            Tell us about your vehicle and the service you are looking for. Our workshop team will review your enquiry and get back to you with guidance and an itemised estimate.
          </p>
        </div>

        {/* Quick WhatsApp Alternative Banner */}
        <div className="mb-8 p-4 rounded-xl bg-yellow-400/[0.04] border border-yellow-400/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-slate-300">
            <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
            <span>Prefer instant messaging with our service desk?</span>
          </div>
          <a
            href={conciergeWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-yellow-400 hover:text-yellow-300 transition-colors whitespace-nowrap min-h-[44px]"
          >
            <span>Message on WhatsApp</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="bg-[#10131E] border border-white/[0.1] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {submitted ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 bg-yellow-400/10 border border-yellow-400 rounded-full flex items-center justify-center mx-auto text-yellow-400">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Enquiry Received
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.customerName}</strong>. Your enquiry regarding your{' '}
                <strong className="text-white">
                  {formData.vehicleYear ? `${formData.vehicleYear} ` : ''}{formData.vehicleMake} {formData.vehicleModel}
                </strong>{' '}
                for <strong className="text-white">{currentServiceName}</strong> has been logged. Our workshop team will review your request and get in touch directly.
              </p>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 text-xs font-bold text-black bg-yellow-400 hover:bg-yellow-300 rounded-lg uppercase tracking-wider transition-all min-h-[44px]"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3.5 bg-red-950/50 border border-red-500/50 rounded-lg text-xs text-red-200">
                  {errorMessage}
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label htmlFor="service-select" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Service Category:
                </label>
                <select
                  id="service-select"
                  value={serviceId}
                  onChange={(e) => {
                    setServiceId(e.target.value);
                    setFormData((prev) => ({ ...prev, serviceId: e.target.value }));
                  }}
                  className="w-full bg-[#0A0C11] border border-white/15 focus:border-yellow-400 text-white rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors min-h-[48px]"
                >
                  {CONFIRMED_SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#0D0F16] text-white">
                      Category {String(s.categoryNumber).padStart(2, '0')}: {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="vehicle-make" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Vehicle Make <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    id="vehicle-make"
                    type="text"
                    required
                    placeholder="e.g. Honda, BMW, Toyota"
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full bg-[#0A0C11] border border-white/15 focus:border-yellow-400 text-white rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="vehicle-model" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Model
                  </label>
                  <input
                    id="vehicle-model"
                    type="text"
                    placeholder="e.g. City, 3 Series, Corolla"
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full bg-[#0A0C11] border border-white/15 focus:border-yellow-400 text-white rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="vehicle-year" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Model Year
                  </label>
                  <input
                    id="vehicle-year"
                    type="text"
                    placeholder="e.g. 2021"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full bg-[#0A0C11] border border-white/15 focus:border-yellow-400 text-white rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors min-h-[48px]"
                  />
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Your Name <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full bg-[#0A0C11] border border-white/15 focus:border-yellow-400 text-white rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="customer-phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Contact Phone <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.customerPhone}
                    onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                    className="w-full bg-[#0A0C11] border border-white/15 focus:border-yellow-400 text-white rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors min-h-[48px]"
                  />
                </div>
              </div>

              {/* Message / Symptoms */}
              <div>
                <label htmlFor="service-notes" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  What does your car need? (Optional):
                </label>
                <textarea
                  id="service-notes"
                  rows={3}
                  placeholder="Tell us about any specific symptoms, noises, or services you would like us to look into..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#0A0C11] border border-white/15 focus:border-yellow-400 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-center text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] transition-all rounded-lg uppercase tracking-wider shadow-lg shadow-yellow-400/20 min-h-[48px]"
                >
                  Send Service Enquiry
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2.5">
                  Direct inquiry to Drive X Auto service team. We review your request and provide itemised details.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
