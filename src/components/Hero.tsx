/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Upload, FileText, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenGenerate: () => void;
  onOpenVideo?: () => void;
}

export default function Hero({ onOpenGenerate }: HeroProps) {
  const [rfpFileName, setRfpFileName] = useState<string | null>(null);
  const [pastedText, setPastedText] = useState('');
  const [positioning, setPositioning] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simComplete, setSimComplete] = useState(false);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setSimComplete(true);
    }, 1800);
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
              Répondez à vos appels d'offres en{' '}
              <span className="text-[#B8935A] underline decoration-[#B8935A]/40 underline-offset-8">
                10 minutes
              </span>{' '}
              au lieu de{' '}
              <span className="text-slate-400 line-through decoration-red-400/60 decoration-2">
                3 jours
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl font-sans"
            >
              Uploadez ou collez votre RFP. Notre IA génère une réponse professionnelle, structurée et prête à envoyer. Livraison PDF par email en 5 minutes.
            </motion.p>

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
                  <span>Livraison en 5 min</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#B8935A]" />
                  <span>Paiement sécurisé Stripe</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                  <FileText className="h-3.5 w-3.5 text-[#B8935A]" />
                  <span>Facturation française</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Satisfait ou regénéré</span>
                </span>
              </div>
            </motion.div>

            {/* Micro Social Proof / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-xs text-slate-300"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>+450 réponses générées ce mois</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1 text-[#B8935A]">
                ★★★★★ <span className="text-white font-bold ml-1">4.9/5</span> (Consultants & Freelances)
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
                  <span className="text-xs font-mono text-slate-400 ml-2">rfp-engine.io / analyse-express</span>
                </div>
                <span className="text-[10px] bg-[#B8935A]/20 text-[#B8935A] border border-[#B8935A]/40 px-2 py-0.5 rounded font-mono">
                  19 €
                </span>
              </div>

              {!simComplete ? (
                <form onSubmit={handleSimulate} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center justify-between">
                      <span>1. Votre Appel d'Offres (RFP)</span>
                      <span className="text-[10px] text-slate-400">PDF, Word ou Texte brut</span>
                    </label>

                    {/* Upload box */}
                    <div className="relative border-2 border-dashed border-slate-700 hover:border-[#B8935A] rounded-xl p-4 text-center transition-colors bg-slate-800/50 group cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setRfpFileName(e.target.files[0].name);
                          }
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload className="mx-auto h-7 w-7 text-[#B8935A] mb-1 group-hover:scale-110 transition-transform" />
                      <p className="text-xs font-semibold text-slate-200">
                        {rfpFileName ? (
                          <span className="text-emerald-400 font-mono">✓ {rfpFileName}</span>
                        ) : (
                          "Glisse ton RFP ici ou clique pour parcourir"
                        )}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">Cahier des charges, brief client ou sujet RFP</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1">
                      Ou colle un extrait de votre RFP :
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ex: Le prestataire devra réaliser un diagnostic organisationnel en 6 semaines..."
                      value={pastedText}
                      onChange={(e) => setPastedText(e.target.value)}
                      className="w-full text-xs bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-[#B8935A]"
                    />
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
                    type="button"
                    onClick={onOpenGenerate}
                    disabled={isSimulating}
                    className="w-full py-3 px-4 bg-[#B8935A] hover:bg-[#9e7b45] text-[#1B263B] font-bold text-xs rounded-xl shadow-lg transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSimulating ? (
                      <>
                        <Zap className="h-4 w-4 animate-spin" />
                        Analyse du RFP et structuration...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Lancer l'extraction & Générer ma réponse (19 €)
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-4 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-white">
                    Analyse du RFP terminée !
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Nous avons extrait 12 exigences clés, 3 livrables attendus et 4 critères d'évaluation.
                  </p>
                  <button
                    onClick={onOpenGenerate}
                    className="w-full py-3 bg-[#B8935A] hover:bg-[#9e7b45] text-[#1B263B] font-bold text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Recevoir ma réponse finale par email (19 €)
                  </button>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

