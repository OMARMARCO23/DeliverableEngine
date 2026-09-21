/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Solution from './components/Solution';
import DeliverablesShowcase from './components/DeliverablesShowcase';
import PdfPreviewSection from './components/PdfPreviewSection';
import HowItWorks from './components/HowItWorks';
import ComparisonTable from './components/ComparisonTable';
import ForWho from './components/ForWho';
import Pricing from './components/Pricing';
import AboutAndContact from './components/AboutAndContact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Modals & Pages
import { RfpFormWizard } from './components/RfpFormWizard';
import VideoModal from './components/VideoModal';
import LegalModal, { LegalTab } from './components/LegalModal';
import MerciPage from './components/MerciPage';

export default function App() {
  const [urlLocation, setUrlLocation] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash
  }));
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [initialHeroData, setInitialHeroData] = useState<{ rfp_text?: string; positioning?: string } | undefined>(undefined);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState<{ isOpen: boolean; tab: LegalTab }>({
    isOpen: false,
    tab: 'cgv'
  });

  useEffect(() => {
    const handleUrlChange = () => {
      setUrlLocation({
        pathname: window.location.pathname,
        hash: window.location.hash
      });
    };
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleGoHome = () => {
    window.history.pushState({}, '', '/');
    window.location.hash = '';
    setUrlLocation({ pathname: '/', hash: '' });
  };

  const handleOpenGenerate = (data?: { rfp_text?: string; positioning?: string }) => {
    if (data && typeof data === 'object' && !('nativeEvent' in data) && ('rfp_text' in data || 'positioning' in data)) {
      setInitialHeroData(data);
    } else {
      setInitialHeroData(undefined);
    }
    setIsGenerateModalOpen(true);
  };

  const handleOpenLegal = (tab: LegalTab = 'cgv') => {
    setLegalModalState({
      isOpen: true,
      tab
    });
  };

  // Render Merci Page if URL is /merci, /merci/ or #merci (with or without query parameters)
  const isMerci =
    urlLocation.pathname === '/merci' ||
    urlLocation.pathname === '/merci/' ||
    urlLocation.pathname.startsWith('/merci') ||
    urlLocation.hash === '#merci' ||
    urlLocation.hash.startsWith('#merci');

  if (isMerci) {
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

        {/* 3. Stats Bar (En chiffres & gages de qualité) */}
        <StatsBar />

        {/* 4. Section: Bénéfices */}
        <Solution />

        {/* 5. Section visuelle: Regardez ce que le moteur génère en 10 minutes */}
        <DeliverablesShowcase onOpenGenerate={handleOpenGenerate} />

        {/* 6. Section: Aperçu de votre réponse (Modèles SAD & Conseil) */}
        <PdfPreviewSection />

        {/* 6. Section: Comment ça marche (3 étapes) */}
        <HowItWorks />

        {/* 7. Section: Deliverable Engine vs ChatGPT */}
        <ComparisonTable />

        {/* 8. Section: Pour qui ? (3 Personas) */}
        <ForWho />

        {/* 9. Section: Tarification (19 €) */}
        <Pricing onOpenGenerate={handleOpenGenerate} />

        {/* 10. Section: À propos du fondateur & Contact */}
        <AboutAndContact onOpenGenerate={handleOpenGenerate} />


        {/* 11. Section: FAQ */}
        <FAQ onOpenGenerate={handleOpenGenerate} />
      </main>

      {/* 12. Final CTA & Footer */}
      <Footer
        onOpenGenerate={handleOpenGenerate}
        onOpenLegal={handleOpenLegal}
      />

      {/* --- Interactive Modals --- */}
      <RfpFormWizard
        isOpen={isGenerateModalOpen}
        initialData={initialHeroData}
        onClose={() => setIsGenerateModalOpen(false)}
        onOpenLegal={handleOpenLegal}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={() => setLegalModalState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
