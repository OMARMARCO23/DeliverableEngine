/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import ForWho from './components/ForWho';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Modals
import RfpFormWizard from './components/RfpFormWizard';
import VideoModal from './components/VideoModal';

export default function App() {
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenGenerate = () => {
    setIsGenerateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#B8935A]/20 selection:text-[#1B263B] scroll-smooth">
      {/* 1. Navigation Header */}
      <Header onOpenGenerate={handleOpenGenerate} />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenGenerate={handleOpenGenerate}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* 3. Section 2: Bénéfices */}
        <Solution />

        {/* 4. Section 3: Comment ça marche */}
        <HowItWorks />

        {/* 5. Section 4: Pour qui ? */}
        <ForWho />

        {/* 6. Section 5: Tarification */}
        <Pricing onOpenGenerate={handleOpenGenerate} />

        {/* 7. Section 6: FAQ */}
        <FAQ />
      </main>

      {/* 8. Section 7: Final CTA & Footer */}
      <Footer onOpenGenerate={handleOpenGenerate} />

      {/* --- Interactive Modals --- */}
      <RfpFormWizard
        isOpen={isGenerateModalOpen}
        onClose={() => setIsGenerateModalOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}

