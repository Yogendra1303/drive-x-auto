'use client';

import React, { useState } from 'react';
import { AutomotiveService } from '@/types';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/automotive/HeroSection';
import { VehicleStageBoundary } from '@/components/three/VehicleStageBoundary';
import { ServiceDirectory } from '@/components/automotive/ServiceDirectory';
import { WorkshopCapabilities } from '@/components/automotive/WorkshopCapabilities';
import { ServiceWorkflow } from '@/components/automotive/ServiceWorkflow';
import { BookingSection } from '@/components/automotive/BookingSection';
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
    const enquiryElement = document.getElementById('enquiry');
    if (enquiryElement) {
      enquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDetails = (service: AutomotiveService) => {
    setDetailModalService(service);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08090C] text-slate-100 font-sans selection:bg-yellow-400 selection:text-black">
      {/* Branded Header with WhatsApp Enquire Button */}
      <Navbar />

      <main className="flex-1 pb-16 md:pb-0">
        {/* Hero Section */}
        <HeroSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Strategy B Decoupled 3D Interactive Stage Showcase */}
        <VehicleStageBoundary />

        {/* 14 Confirmed Service Categories Directory */}
        <ServiceDirectory
          onViewDetails={handleViewDetails}
        />

        {/* Workshop Capabilities */}
        <WorkshopCapabilities />

        {/* 4-Step Transparent Service Workflow */}
        <ServiceWorkflow />

        {/* Customer Enquiry Section */}
        <BookingSection
          key={selectedServiceForEnquiry?.id ?? 'default'}
          selectedService={selectedServiceForEnquiry}
          onClearSelectedService={() => setSelectedServiceForEnquiry(null)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Bottom Action Bar for Mobile Viewports */}
      <MobileBottomBar />

      {/* Persistent Floating WhatsApp Contact Button */}
      <FloatingWhatsAppButton />

      {/* Service Detail Modal / Slide-up Bottom Sheet with WhatsApp Book Now */}
      <ServiceDetailModal
        service={detailModalService}
        onClose={() => setDetailModalService(null)}
      />
    </div>
  );
}
