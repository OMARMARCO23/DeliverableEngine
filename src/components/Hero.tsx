/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Check, Globe, FileCode2, Clock, CheckCircle2, FileText } from 'lucide-react';

interface HeroProps {
  onOpenGenerate: (initialData?: { rfp_text?: string; positioning?: string }) => void;
  onOpenVideo?: () => void;
}

export default function Hero({ onOpenGenerate }: HeroProps) {
  const [pastedText, setPastedText] = useState('');
  const [positioning, setPositioning] = useState('');
  const [selectedQuickType, setSelectedQuickType] = useState<'sad' | 'conseil' | 'marche'>('sad');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenGenerate({
      rfp_text: pastedText,
      positioning: positioning
    });
  };

  const handlePresetSelect = (type: 'sad' | 'conseil' | 'marche') => {
    setSelectedQuickType(type);
    if (type === 'sad') {
      setPositioning('Cabinet expert Systèmes d\'Acquisition Dynamiques (SAD) & Marchés subséquents IT');
    } else if (type === 'conseil') {
      setPositioning('Cabinet de conseil en stratégie opérationnelle, cadrage et transformation');
    } else {
      setPositioning('Cabinet expert marchés publics, MAPA et accords-cadres de prestations intellectuelles');
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0D1522] text-white py-16 sm:py-24 border-b border-slate-800/80">
      {/* Background Architectural Mesh & Subtle Gold Flare */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
      <div className="absolute top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#B8935A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full bg-slate-800/30 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Executive Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 self-start rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#D4AF37] mb-6 shadow-xs"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Génération instantanée · 19 € par réponse · Sans engagement</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white"
            >
              Votre mémoire technique d'appel d'offres{' '}
              <span className="text-[#D4AF37] font-semibold italic">
                en 10 minutes
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="mt-5 text-base sm:text-lg text-slate-300 font-sans leading-relaxed"
            >
              Conçu spécifiquement pour les <strong>Systèmes d’Acquisition Dynamiques (SAD)</strong> et les <strong>missions de conseil</strong>. Obtenez une trame complète, structurée et conforme au droit des marchés publics (FR & BE).
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl font-sans"
            >
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>Trame complète rédigée sous 10 min</span>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>Format SAD & Prestations intellectuelles</span>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>Grille TJM & Bordereau de Prix inclus</span>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>1 révision / régénération 24h offerte</span>
              </div>
            </motion.div>

            {/* CTA & Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.26 }}
              className="mt-8 flex flex-col items-start gap-4"
            >
              <button
                onClick={() => onOpenGenerate({ rfp_text: pastedText, positioning })}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#B8935A] hover:bg-[#c49f64] px-7 py-3.5 text-sm sm:text-base font-bold text-[#0D1522] shadow-xl shadow-[#B8935A]/20 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <Zap className="h-4 w-4 fill-current" />
                <span>Lancer ma réponse RFP (19 €)</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1 bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-full">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                  Garantie révision 24h
                </span>
                <span className="flex items-center gap-1 bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-full">
                  <Zap className="h-3.5 w-3.5 text-[#D4AF37]" />
                  Paiement sécurisé Lemon Squeezy
                </span>
                <span className="flex items-center gap-1 bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-full">
                  <Globe className="h-3.5 w-3.5 text-[#D4AF37]" />
                  France & Belgique
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-End Interactive Form Terminal on Homepage */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-3xl border border-slate-800/90 bg-[#111A29]/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Subtle top card glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8935A]/50 to-transparent" />

              {/* Header of Form Terminal */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0D1522] border border-slate-700 text-[#D4AF37] font-serif-heading font-bold text-xs">
                    D
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">
                      Générateur Express RFP
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Analyse du cahier des charges
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center rounded-full bg-[#B8935A]/15 border border-[#B8935A]/30 px-2.5 py-0.5 text-[11px] font-mono font-bold text-[#D4AF37]">
                  19 €
                </span>
              </div>

              {/* Preset Selector */}
              <div className="mb-4">
                <label className="block text-[11px] font-semibold text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                  Type de consultation :
                </label>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => handlePresetSelect('sad')}
                    className={`py-1.5 px-2 rounded-xl border text-[11px] font-medium transition-all cursor-pointer truncate ${
                      selectedQuickType === 'sad'
                        ? 'bg-[#B8935A]/20 border-[#B8935A] text-[#D4AF37] font-bold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Accord SAD
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePresetSelect('conseil')}
                    className={`py-1.5 px-2 rounded-xl border text-[11px] font-medium transition-all cursor-pointer truncate ${
                      selectedQuickType === 'conseil'
                        ? 'bg-[#B8935A]/20 border-[#B8935A] text-[#D4AF37] font-bold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Conseil
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePresetSelect('marche')}
                    className={`py-1.5 px-2 rounded-xl border text-[11px] font-medium transition-all cursor-pointer truncate ${
                      selectedQuickType === 'marche'
                        ? 'bg-[#B8935A]/20 border-[#B8935A] text-[#D4AF37] font-bold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Marché public
                  </button>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-slate-200">
                      Cahier des charges ou texte de l'AO
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {pastedText.length} car.
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Collez ici l'extrait du DCE, CCTP, SAD ou cahier des charges..."
                    value={pastedText}
                    onChange={(e) => setPastedText(e.target.value)}
                    className="w-full text-xs bg-[#0D1522] border border-slate-800 rounded-2xl p-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]/50 transition-all font-sans leading-relaxed resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Positionnement & Spécialité du cabinet
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Expert cadrage IT, 10 ans d'expérience..."
                    value={positioning}
                    onChange={(e) => setPositioning(e.target.value)}
                    className="w-full text-xs bg-[#0D1522] border border-slate-800 rounded-xl px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]/50 transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-2xl bg-[#B8935A] hover:bg-[#c49f64] text-[#0D1522] font-bold text-xs shadow-lg transition-all duration-150 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-3.5 w-3.5 fill-current" />
                  <span>Compléter & Générer ma réponse (19 €)</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>

              {/* Mini reassurance underneath form */}
              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-[#D4AF37]" />
                  Livraison sous 10 min
                </span>
                <span>Word (.docx) & PDF</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
