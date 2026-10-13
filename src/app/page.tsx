'use client';

import React, { useState } from 'react';
import { AutomotiveService } from '@/types';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/automotive/HeroSection';
import { ServiceDirectory } from '@/components/automotive/ServiceDirectory';
import { WorkshopCapabilities } from '@/components/automotive/WorkshopCapabilities';
import { ServiceWorkflow } from '@/components/automotive/ServiceWorkflow';
import { BookingSection } from '@/components/automotive/BookingSection';
import { FaqSection } from '@/components/automotive/FaqSection';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { ServiceDetailModal } from '@/components/automotive/ServiceDetailModal';
import { FloatingWhatsAppButton } from '@/components/common/FloatingWhatsAppButton';

export default function Home() {
  const [selectedServiceForEnquiry, setSelectedServiceForEnquiry] = useState<AutomotiveService | null>(null);
  const [detailModalService, setDetailModalService] = useState<AutomotiveService | null>(null);

  const handleOpenEnquiry = (service?: AutomotiveService) => {
    if (service) {
      setSelectedServiceForEnquiry(service);
    }
    const enquiryElement = document.getElementById('custom-repair') || document.getElementById('enquiry');
    if (enquiryElement) {
      enquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDetails = (service: AutomotiveService) => {
    setDetailModalService(service);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07080B] text-slate-100 font-sans selection:bg-yellow-400 selection:text-black">
      {/* Branded Sticky Header with Navigation & WhatsApp Book Action */}
      <Navbar />

      <main className="flex-1 pb-16 md:pb-0">
        {/* Hero Section — Primary Conversion & Fast Booking Area */}
        <HeroSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 14 Confirmed Service Categories Discovery Directory */}
        <ServiceDirectory onViewDetails={handleViewDetails} />

        {/* Why Choose Us — Workshop Capabilities & Trust Highlights */}
        <WorkshopCapabilities />

        {/* How It Works — 4-Step Transparent Customer Workflow */}
        <ServiceWorkflow />

        {/* Custom Repair & Symptom Enquiry Section */}
        <BookingSection
          key={selectedServiceForEnquiry?.id ?? 'default'}
          selectedService={selectedServiceForEnquiry}
          onClearSelectedService={() => setSelectedServiceForEnquiry(null)}
        />

        {/* FAQs — Concise, Accessible Questions & Answers Accordion */}
        <FaqSection />
      </main>

      {/* Professional Footer with Direct Links, Working Hours & Contact */}
      <Footer />

      {/* Fixed Bottom Action Bar for Mobile Viewports */}
      <MobileBottomBar />

      {/* Persistent Floating WhatsApp Concierge Widget */}
      <FloatingWhatsAppButton />

      {/* Accessible Service Detail Modal / Slide-up Bottom Sheet */}
      <ServiceDetailModal
        service={detailModalService}
        onClose={() => setDetailModalService(null)}
      />
    </div>
  );
}
