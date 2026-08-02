/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Solution from './components/Solution';
import PdfPreviewSection from './components/PdfPreviewSection';
import HowItWorks from './components/HowItWorks';
import ComparisonTable from './components/ComparisonTable';
import ForWho from './components/ForWho';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Modals & Pages
import RfpFormWizard from './components/RfpFormWizard';
import VideoModal from './components/VideoModal';
import MerciPage from './components/MerciPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleGoHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
  };

  const handleOpenGenerate = () => {
    setIsGenerateModalOpen(true);
  };

  // Render Merci Page if URL is /merci or #merci
  if (currentPath === '/merci' || currentPath === '/merci/' || window.location.hash === '#merci') {
    return <MerciPage onGoHome={handleGoHome} />;
  }

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

        {/* 3. Stats Bar (En chiffres) */}
        <StatsBar />

        {/* 4. Section: Bénéfices */}
        <Solution />

        {/* 5. Section: Aperçu de votre réponse (PDF Mockup) */}
        <PdfPreviewSection />

        {/* 6. Section: Comment ça marche (3 étapes) */}
        <HowItWorks />

        {/* 7. Section: Deliverable Engine vs ChatGPT */}
        <ComparisonTable />

        {/* 8. Section: Pour qui ? (3 Personas) */}
        <ForWho />

        {/* 9. Section: Tarification */}
        <Pricing onOpenGenerate={handleOpenGenerate} />

        {/* 11. Section: FAQ */}
        <FAQ />
      </main>

      {/* 12. Final CTA & Footer */}
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

