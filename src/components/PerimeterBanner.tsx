/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronRight, X, Check, AlertCircle, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PerimeterBannerProps {
  onOpenGenerate?: () => void;
}

export default function PerimeterBanner({ onOpenGenerate }: PerimeterBannerProps) {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <>
      {/* ═══ BANDEAU PÉRIMÈTRE ULTRA-FIN & RAFFINÉ ═══ */}
      <div
        id="bandeau-perimetre"
        className="w-full bg-[#090E17]/95 backdrop-blur-md border-b border-slate-800/80 text-slate-300 text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 transition-all"
        role="region"
        aria-label="Périmètre d'éligibilité des candidatures"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          
          {/* Left: Tag + Accepted and Excluded scopes in a harmonious single line */}
          <div className="flex-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 leading-snug">
            
            {/* Minimalist Executive Tag */}
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-[#B8935A] bg-[#B8935A]/10 border border-[#B8935A]/25 rounded-md px-1.5 py-0.5 shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              Périmètre
            </span>

            {/* Scope description */}
            <span className="text-slate-300 font-medium">
              Consultations acceptées :
            </span>

            {/* Accepted categories in soft elegant gold/slate */}
            <span className="inline-flex items-center gap-1 text-slate-100 font-semibold">
              <span className="text-emerald-400/90 text-[10px]">✓</span> AMO & Conseil stratégique
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1 text-slate-100 font-semibold">
              <span className="text-emerald-400/90 text-[10px]">✓</span> Candidatures SAD
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1 text-slate-100 font-semibold">
              <span className="text-emerald-400/90 text-[10px]">✓</span> Conseil privé
            </span>

            {/* Excluded types (discreet but crystal clear) */}
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-400 hidden md:inline text-[11px]">
              <span className="text-rose-400/90 font-medium">Non éligibles :</span> Travaux BTP, fournitures, gardiennage/nettoyage, enquêtes & sondages
            </span>

            {/* Quick Details Trigger */}
            <button
              type="button"
              onClick={() => setShowDetailModal(true)}
              className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#B8935A] hover:text-[#e4c284] underline underline-offset-2 transition-colors cursor-pointer ml-1"
            >
              <span>Détails</span>
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>

          {/* Right: Discreet close button */}
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="text-slate-500 hover:text-slate-300 transition-colors p-0.5 rounded-sm shrink-0 cursor-pointer"
            title="Masquer le bandeau"
            aria-label="Fermer le bandeau d'information"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ═══ MODAL DÉTAILS DU PÉRIMÈTRE (DESIGN RAFFINÉ & ÉPURÉ) ═══ */}
      <AnimatePresence>
        {showDetailModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetailModal(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="relative w-full max-w-lg bg-[#0D1522] rounded-2xl border border-slate-800 shadow-2xl p-6 text-slate-200 z-10 space-y-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-[#B8935A]/15 border border-[#B8935A]/30 flex items-center justify-center text-[#D4AF37]">
                    <ShieldAlert className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-serif-heading text-base font-bold text-white">
                    Périmètre d'application du moteur
                  </h3>
                </div>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Deliverable Engine est conçu avec une extrême précision pour les <strong>prestations intellectuelles à haute valeur ajoutée</strong>. Afin de garantir un rendu sans faille, le moteur applique une stricte règle de spécialisation :
              </p>

              {/* Grid: Accepté vs Rejeté */}
              <div className="space-y-3 pt-1">
                {/* Accepté */}
                <div className="p-3 rounded-xl bg-[#111A29] border border-emerald-900/40 text-xs space-y-1.5">
                  <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5" />
                    <span>Candidatures acceptées & entièrement outillées :</span>
                  </div>
                  <ul className="space-y-1 text-slate-300 pl-5 list-disc text-[11px] leading-relaxed">
                    <li><strong>AMO & Conseil stratégique :</strong> Cadrage, assistance à maîtrise d'ouvrage, conduite du changement, études d'opportunité.</li>
                    <li><strong>Systèmes d'Acquisition Dynamiques (SAD) :</strong> Dossiers de candidature au référencement initial et offres sur marchés subséquents.</li>
                    <li><strong>Conseil privé & devis :</strong> Propositions commerciales structurées pour grands comptes, ETI et PME.</li>
                  </ul>
                </div>

                {/* Rejeté */}
                <div className="p-3 rounded-xl bg-[#111A29] border border-rose-900/40 text-xs space-y-1.5">
                  <div className="font-semibold text-rose-400 flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>Consultations strictement hors périmètre (rejetées d'office) :</span>
                  </div>
                  <ul className="space-y-1 text-slate-300 pl-5 list-disc text-[11px] leading-relaxed">
                    <li><strong>Enquêtes & sondages :</strong> Études de marché d'opinion, panels quantitatifs.</li>
                    <li><strong>Travaux BTP & génie civil :</strong> Gros œuvre, chantiers, réfection d'infrastructures.</li>
                    <li><strong>Fournitures & matériel :</strong> Achats d'équipements, fournitures de bureau, quincaillerie.</li>
                    <li><strong>Services opérationnels :</strong> Gardiennage physique, nettoyage, transport, restauration collective.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowDetailModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  J'ai compris
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
