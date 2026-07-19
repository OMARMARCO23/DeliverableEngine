/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import BeforeAfter from './components/BeforeAfter';
import CostCalculator from './components/CostCalculator';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import DeliverablesShowcase from './components/DeliverablesShowcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Modals
import DemoModal from './components/DemoModal';
import VideoModal from './components/VideoModal';
import DocViewerModal from './components/DocViewerModal';

// Type helper
import { DeliverableExample } from './types';

export default function App() {
  // Modal states
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Document reader states
  const [activeDoc, setActiveDoc] = useState<DeliverableExample | null>(null);
  const [isDocViewerOpen, setIsDocViewerOpen] = useState(false);

  // Trigger demo with specific plan
  const handleOpenDemoWithPlan = (planId?: string) => {
    setSelectedPlanId(planId || null);
    setIsDemoOpen(true);
  };

  // Open Document Viewer
  const handleViewDocument = (doc: DeliverableExample) => {
    setActiveDoc(doc);
    setIsDocViewerOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      {/* 1. Header Navigation Bar */}
      <Header onOpenDemo={() => handleOpenDemoWithPlan()} />

      <main>
        {/* 2. BLOC 1: Hero Section */}
        <Hero
          onOpenDemo={() => handleOpenDemoWithPlan()}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* 3. BLOC 2: Problem Section */}
        <Problem />

        {/* 3.5 BLOC 2.5: Before / After Comparison */}
        <BeforeAfter />

        {/* 4. BLOC 3: Cost of the Problem (Interactive Visual Calculator) */}
        <CostCalculator />

        {/* 5. BLOC 4: Solution Section */}
        <Solution />

        {/* 6. BLOC 5: How It Works Section */}
        <HowItWorks onOpenVideo={() => setIsVideoOpen(true)} />

        {/* 7. BLOC 6: Deliverables Showcase (3 side-by-side with viewer) */}
        <DeliverablesShowcase onViewDoc={handleViewDocument} />

        {/* 7.5 BLOC 6.5: Testimonials with detailed quantitative results */}
        <Testimonials />

        {/* 8. BLOC 7: Pricing Section (3 Tiers with Value Anchoring) */}
        <Pricing onOpenDemo={handleOpenDemoWithPlan} />

        {/* 9. BLOC 8: FAQ Accordion */}
        <FAQ />
      </main>

      {/* 10. BLOC 9 & FOOTER: Final CTA + Footer Details */}
      <Footer onOpenDemo={() => handleOpenDemoWithPlan()} />

      {/* --- Interactive Modals --- */}
      
      {/* Simulated Calendly Appointment Booking Scheduler */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => {
          setIsDemoOpen(false);
          setSelectedPlanId(null);
        }}
        selectedPlanId={selectedPlanId}
      />

      {/* Simulated Loom Video Presentation Overlay */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      {/* Fullscreen Simulated Google Docs Reader Workspace */}
      <DocViewerModal
        isOpen={isDocViewerOpen}
        onClose={() => {
          setIsDocViewerOpen(false);
          setActiveDoc(null);
        }}
        doc={activeDoc}
      />
    </div>
  );
}
