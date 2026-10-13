'use client';

import React, { useState } from 'react';
import { AutomotiveService } from '@/types';
import { CONFIRMED_SERVICES } from '@/data/services';
import { ServiceCard } from './ServiceCard';

interface ServiceDirectoryProps {
  onViewDetails: (service: AutomotiveService) => void;
}

type FilterGroup = 'all' | 'maintenance' | 'mechanical' | 'body-detailing' | 'safety-support';

export function ServiceDirectory({ onViewDetails }: ServiceDirectoryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterGroup>('all');

  const filterTabs: { id: FilterGroup; label: string }[] = [
    { id: 'all', label: 'All Categories' },
    { id: 'maintenance', label: 'Scheduled Maintenance' },
    { id: 'mechanical', label: 'Mechanical & AC' },
    { id: 'body-detailing', label: 'Body, Paint & Detailing' },
    { id: 'safety-support', label: 'Diagnostics & Support' },
  ];

  const filteredServices = CONFIRMED_SERVICES.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'maintenance') {
      return ['periodic-servicing', 'batteries', 'car-spa-cleaning'].includes(service.category);
    }
    if (activeFilter === 'mechanical') {
      return ['ac-repair', 'tyres-wheel-care', 'suspension-fitments', 'clutch-body-parts', 'custom-repairs'].includes(
        service.category
      );
    }
    if (activeFilter === 'body-detailing') {
      return ['denting-painting', 'detailing-services', 'windshields-lights'].includes(service.category);
    }
    if (activeFilter === 'safety-support') {
      return ['inspections-diagnostics', 'insurance-claims', 'sos-emergency'].includes(service.category);
    }
    return true;
  });

  return (
    <section id="services" className="py-16 md:py-24 border-b border-white/10 bg-[#08090C] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold">
                OUR SERVICES
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 font-medium">
                All Categories
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Explore Our Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
            From routine servicing and AC repair to tyres, diagnostics, detailing, and bodywork, find the right care for your vehicle across 14 specialized categories.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
          role="tablist"
          aria-label="Service Filter Categories"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`whitespace-nowrap px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                activeFilter === tab.id
                  ? 'bg-yellow-400 text-black font-bold shadow-md shadow-yellow-400/20'
                  : 'bg-[#12141D] text-slate-300 hover:text-white hover:bg-[#1A1D2A] border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 14 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
