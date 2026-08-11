/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Upload, FileText, CheckCircle2, ShieldCheck, Zap, Check } from 'lucide-react';

interface HeroProps {
  onOpenGenerate: (initialData?: { rfp_text?: string; positioning?: string }) => void;
  onOpenVideo?: () => void;
}

export default function Hero({ onOpenGenerate }: HeroProps) {
  const [rfpFileName, setRfpFileName] = useState<string | null>(null);
  const [pastedText, setPastedText] = useState('');
  const [positioning, setPositioning] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenGenerate({
      rfp_text: pastedText,
      positioning: positioning
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#1B263B] text-white py-16 sm:py-24">
      {/* Decorative subtle background accents */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#B8935A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines and Main Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start rounded-full bg-[#B8935A]/15 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#B8935A] mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 fill-[#B8935A]" />
              Offre de lancement : 19 € par génération (au lieu de 29 €)
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white"
            >
              Créez une réponse RFP professionnelle{' '}
              <span className="text-[#B8935A] underline decoration-[#B8935A]/40 underline-offset-8">
                sans partir de zéro
              </span>
            </motion.h1>

            {/* Subtitle Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 text-sm sm:text-base text-[#B8935A] font-semibold tracking-wide font-sans flex flex-wrap items-center gap-x-2 gap-y-1"
            >
              <span>Structure générée en 10 minutes</span>
              <span className="text-slate-500">•</span>
              <span>Personnalisation en 30 minutes</span>
              <span className="text-slate-500">•</span>
              <span>PDF prêt à finaliser</span>
            </motion.p>

            {/* Clear Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl font-sans"
            >
              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/80 px-3.5 py-2.5 rounded-xl text-slate-200 text-xs sm:text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span>Économisez plusieurs heures de rédaction</span>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/80 px-3.5 py-2.5 rounded-xl text-slate-200 text-xs sm:text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span>Personnalisez avec vos données, références et tarifs</span>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/80 px-3.5 py-2.5 rounded-xl text-slate-200 text-xs sm:text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span>Structure pro inspirée des meilleures pratiques RFP</span>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/80 px-3.5 py-2.5 rounded-xl text-slate-200 text-xs sm:text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span>Export PDF clair, soigné et prêt à partager</span>
              </div>
            </motion.div>

            {/* CTA Button Block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-start gap-4"
            >
              <button
                onClick={onOpenGenerate}
                style={{ backgroundColor: '#B8935A', padding: '18px 36px' }}
                className="group relative inline-flex items-center justify-center gap-3 rounded-lg text-lg font-bold text-[#1B263B] shadow-2xl shadow-[#B8935A]/25 hover:bg-[#a17e47] hover:-translate-y-0.5 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Zap className="h-5 w-5 fill-[#1B263B]" />
                <span>Générer ma réponse (19€)</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Reassurance Badges Row */}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                  <Zap className="h-3.5 w-3.5 text-[#B8935A]" />
                  <span>Livraison en quelques minutes</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#B8935A]" />
                  <span>Paiement sécurisé</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                  <FileText className="h-3.5 w-3.5 text-[#B8935A]" />
                  <span>Facture disponible</span>
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Dropzone & Extraction Simulator */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-slate-700 bg-slate-900/90 p-5 sm:p-6 shadow-2xl relative backdrop-blur-sm"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">Deliverable Engine / Analyse Express</span>
                </div>
                <span className="text-[10px] bg-[#B8935A]/20 text-[#B8935A] border border-[#B8935A]/40 px-2 py-0.5 rounded font-mono">
                  19 €
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center justify-between">
                    <span>1. Votre Appel d'Offres (RFP)</span>
                    <span className="text-[10px] text-[#B8935A]">Texte brut</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Collez ici le texte complet de votre cahier des charges, brief client ou sujet d'appel d'offres (ex: Le prestataire devra réaliser un diagnostic organisationnel en 6 semaines...)"
                    value={pastedText}
                    onChange={(e) => setPastedText(e.target.value)}
                    className="w-full text-xs bg-slate-800/90 border border-slate-700 rounded-xl p-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Analyse automatique : extraction du budget, des dates et des exigences.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1">
                    2. Vos points forts & positionnement (facultatif)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Expert agile, 10 ans d'exp, méthodologie lean..."
                    value={positioning}
                    onChange={(e) => setPositioning(e.target.value)}
                    className="w-full text-xs bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-[#B8935A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#B8935A] hover:bg-[#9e7b45] text-[#1B263B] font-bold text-xs rounded-xl shadow-lg transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Lancer l'extraction & Générer ma réponse (19 €)
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

