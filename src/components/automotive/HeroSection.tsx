'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CONFIRMED_SERVICES } from '@/data/services';
import { getWhatsAppUrl } from '@/lib/constants';

interface HeroSectionProps {
  onOpenEnquiry?: () => void;
}

export function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  const [vehicle, setVehicle] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(CONFIRMED_SERVICES[0]?.id || 'periodic-car-servicing');
  const [mobileNumber, setMobileNumber] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const selectedService = CONFIRMED_SERVICES.find((s) => s.id === selectedServiceId);
  const generalWhatsAppUrl = getWhatsAppUrl();

  const handleHeroBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicle.trim()) {
      setFormError('Please enter your vehicle make and model (e.g. Honda City, Swift).');
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.trim().length < 8) {
      setFormError('Please enter a valid mobile number for contact.');
      return;
    }

    setFormError(null);
    const serviceTitle = selectedService?.title || 'Automotive Service';
    const directUrl = getWhatsAppUrl({
      serviceTitle,
      vehicle: vehicle.trim(),
      phone: mobileNumber.trim(),
      notes: customerNote.trim() || undefined,
    });

    window.open(directUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-white/[0.08] bg-[#07080B]">
      {/* Background Photography with Sophisticated Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-workshop.jpg"
          alt="Drive X Auto Precision Workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 select-none pointer-events-none"
        />
        {/* Multilayered radial and linear dark gradients for crystal-clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080B] via-[#07080B]/90 to-[#07080B]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080B] via-transparent to-[#07080B]/80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition & Primary Conversion Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Introductory Service Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 shadow-sm shadow-yellow-400/10">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              COMPLETE CAR CARE • 14 SERVICE CATEGORIES
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Complete Car Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
                All in One Place.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              From routine servicing and AC repair to tyres, diagnostics, detailing, and bodywork, explore the verified services your vehicle needs with transparent estimates and clear communication.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] transition-all rounded-lg uppercase tracking-wider shadow-lg shadow-yellow-400/25 text-center min-h-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white gap-2"
              >
                <span>Book a Service</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-semibold text-white bg-[#151822]/90 hover:bg-[#1E2230] border border-white/15 hover:border-yellow-400/50 active:scale-[0.98] transition-all rounded-lg tracking-wider text-center min-h-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 gap-2"
              >
                <span>Explore Services</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {onOpenEnquiry && (
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/40 rounded-lg tracking-wide min-h-[50px] transition-colors gap-1.5"
                >
                  <span>Custom Repair</span>
                  <span className="text-yellow-400" aria-hidden="true">›</span>
                </button>
              )}
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold">✓</span>
                <span>Itemised Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold">✓</span>
                <span>14 Workshop Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold">✓</span>
                <span>Direct WhatsApp Updates</span>
              </div>
            </div>
          </div>

          {/* Right Column: GoMechanic-Inspired Fast Service Booking Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#0F121B]/95 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              {/* Subtle accent bar on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500" />

              <div className="mb-5">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <span>Quick Service Booking</span>
                  </h2>
                  <span className="text-[11px] font-mono text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">
                    Fast Response
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Select your vehicle and service to receive an itemised estimate and booking slot.
                </p>
              </div>

              {formError && (
                <div className="mb-4 p-2.5 rounded-lg bg-red-950/60 border border-red-500/40 text-xs text-red-200">
                  {formError}
                </div>
              )}

              <form onSubmit={handleHeroBookingSubmit} className="space-y-4">
                {/* Vehicle Make & Model Input */}
                <div>
                  <label htmlFor="hero-vehicle" className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Vehicle Make & Model:
                  </label>
                  <input
                    id="hero-vehicle"
                    type="text"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    placeholder="e.g. Honda City, Hyundai Creta, Swift"
                    className="w-full bg-[#161925] border border-white/15 focus:border-yellow-400 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-colors"
                  />
                </div>

                {/* Service Category Dropdown */}
                <div>
                  <label htmlFor="hero-service" className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Select Required Service:
                  </label>
                  <select
                    id="hero-service"
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full bg-[#161925] border border-white/15 focus:border-yellow-400 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-colors cursor-pointer"
                  >
                    {CONFIRMED_SERVICES.map((service) => (
                      <option key={service.id} value={service.id} className="bg-[#12141F] text-white">
                        {String(service.categoryNumber).padStart(2, '0')}. {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Contact Mobile Number */}
                <div>
                  <label htmlFor="hero-mobile" className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Contact Mobile Number:
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">
                      +91
                    </span>
                    <input
                      id="hero-mobile"
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/[^0-9]/g, ''))}
                      placeholder="9971715176"
                      maxLength={10}
                      className="w-full bg-[#161925] border border-white/15 focus:border-yellow-400 rounded-lg pl-12 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Symptoms / Notes (Optional) */}
                <div>
                  <label htmlFor="hero-note" className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Symptoms or Specific Requirements (Optional):
                  </label>
                  <input
                    id="hero-note"
                    type="text"
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    placeholder="e.g. AC not cooling, 50,000km scheduled service"
                    className="w-full bg-[#161925] border border-white/15 focus:border-yellow-400 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-center text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] rounded-lg tracking-wider uppercase transition-all shadow-md shadow-yellow-400/20 flex items-center justify-center gap-2 min-h-[46px]"
                  >
                    <span>Book on WhatsApp</span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                    </svg>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Itemised estimates reviewed with you before any servicing begins.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
