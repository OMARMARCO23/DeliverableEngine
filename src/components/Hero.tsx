/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  FileText,
  ShieldCheck,
  Zap,
  Check,
  Clock
} from 'lucide-react';

interface HeroProps {
  onOpenGenerate: (initialData?: { 
    rfp_text?: string; 
    positioning?: string 
  }) => void;
  onOpenVideo?: () => void;
}

// Exemples rotatifs pour le placeholder
const RFP_EXAMPLES = [
  "Le prestataire devra réaliser un audit complet du système d'information existant...",
  "Consultation ouverte aux cabinets spécialisés en transformation digitale...",
  "Le CHU de Montpellier lance un appel d'offres pour l'optimisation de son SIH...",
  "BatiNova recherche un cabinet conseil pour accompagner sa transformation numérique..."
];

export default function Hero({ onOpenGenerate }: HeroProps) {
  const [pastedText, setPastedText] = useState('');
  const [positioning, setPositioning] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPastedText(e.target.value);
    setCharCount(e.target.value.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenGenerate({
      rfp_text: pastedText,
      positioning: positioning
    });
  };

  const handleCTAClick = () => {
    onOpenGenerate({
      rfp_text: pastedText || '',
      positioning: positioning || ''
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#1B263B] text-white 
                        py-16 sm:py-24">
      {/* Background décoratif */}
      <div className="absolute inset-0 -z-10 
                      bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
                         linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] 
                      bg-[size:3rem_3rem]" />
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full 
                      bg-[#B8935A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full 
                      bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Colonne gauche */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Badge offre */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start rounded-full 
                         bg-[#B8935A]/15 border border-[#B8935A]/30 
                         px-3.5 py-1 text-xs font-semibold text-[#B8935A] mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 fill-[#B8935A]" />
              Offre de lancement — 19 € par génération
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl 
                         font-extrabold tracking-tight leading-[1.15] text-white"
            >
              Votre réponse à l'appel d'offres{' '}
              <span className="text-[#B8935A] underline decoration-[#B8935A]/40 
                               underline-offset-8">
                prête en 10 minutes
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-5 text-sm sm:text-base text-slate-300 
                         leading-relaxed max-w-xl"
            >
              Collez votre cahier des charges. Recevez une proposition 
              structurée de 8 à 11 pages, avec vos chiffres, vos dates 
              et votre positionnement — prête à personnaliser et envoyer.
            </motion.p>

            {/* Bénéfices */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 
                         max-w-2xl font-sans"
            >
              {[
                "Extraction automatique : budget, dates, effectifs",
                "9 sections structurées prêtes à personnaliser",
                "Vos chiffres réels — aucune donnée inventée",
                "PDF livré par email en moins de 10 minutes"
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-slate-800/80 
                             border border-slate-700/80 px-3.5 py-2.5 
                             rounded-xl text-slate-200 text-xs sm:text-sm 
                             font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 
                                  text-emerald-400 flex items-center 
                                  justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA principal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-start gap-4"
            >
              <button
                onClick={handleCTAClick}
                className="group relative inline-flex items-center justify-center 
                           gap-3 rounded-lg text-lg font-bold text-[#1B263B] 
                           bg-[#B8935A] hover:bg-[#a17e47] shadow-2xl 
                           shadow-[#B8935A]/25 hover:-translate-y-0.5 
                           transition-all active:scale-[0.98] cursor-pointer
                           px-9 py-5"
              >
                <Zap className="h-5 w-5 fill-[#1B263B]" />
                <span>Générer ma réponse — 19 €</span>
                <ArrowRight className="h-5 w-5 transition-transform 
                                       group-hover:translate-x-1" />
              </button>

              {/* Badges réassurance */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 
                              text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5 bg-slate-800/80 
                                 px-2.5 py-1 rounded-md border border-slate-700">
                  <Clock className="h-3.5 w-3.5 text-[#B8935A]" />
                  <span>Livraison en moins de 10 min</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 
                                 px-2.5 py-1 rounded-md border border-slate-700">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#B8935A]" />
                  <span>Paiement sécurisé</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 
                                 px-2.5 py-1 rounded-md border border-slate-700">
                  <FileText className="h-3.5 w-3.5 text-[#B8935A]" />
                  <span>Facture disponible</span>
                </span>
              </div>
            </motion.div>

          </div>

          {/* Colonne droite — Aperçu interactif */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-slate-700 bg-slate-900/90 
                         p-5 sm:p-6 shadow-2xl relative backdrop-blur-sm"
            >
              {/* Barre titre fenêtre */}
              <div className="flex items-center justify-between pb-3 mb-4 
                              border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    Deliverable Engine
                  </span>
                </div>
                <span className="text-[10px] bg-[#B8935A]/20 text-[#B8935A] 
                                 border border-[#B8935A]/40 px-2 py-0.5 
                                 rounded font-mono">
                  19 €
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">

                {/* Champ RFP */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 
                                    mb-1.5">
                    Collez votre appel d'offres
                  </label>
                  <textarea
                    rows={6}
                    placeholder={RFP_EXAMPLES[0]}
                    value={pastedText}
                    onChange={handleTextChange}
                    className="w-full text-xs bg-slate-800/90 border 
                               border-slate-700 rounded-xl p-3 text-slate-200 
                               placeholder-slate-500 focus:outline-none 
                               focus:border-[#B8935A] focus:ring-1 
                               focus:ring-[#B8935A] resize-none"
                  />
                  {/* Compteur + indicateur */}
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-[10px] text-slate-500">
                      Budget, dates, effectifs extraits automatiquement.
                    </p>
                    <span className={`text-[10px] font-mono ${
                      charCount >= 200 
                        ? 'text-emerald-400' 
                        : 'text-slate-500'
                    }`}>
                      {charCount} car.
                    </span>
                  </div>
                </div>

                {/* Champ positionnement */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1">
                    Votre cabinet / positionnement{' '}
                    <span className="text-slate-500 font-normal">
                      (facultatif)
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex : Cabinet conseil RH, 10 ans d'exp. secteur public…"
                    value={positioning}
                    onChange={(e) => setPositioning(e.target.value)}
                    className="w-full text-xs bg-slate-800 border border-slate-700 
                               rounded-lg p-2.5 text-slate-200 
                               focus:outline-none focus:border-[#B8935A]"
                  />
                </div>

                {/* Bouton formulaire */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#B8935A] hover:bg-[#9e7b45] 
                             text-[#1B263B] font-bold text-sm rounded-xl 
                             shadow-lg transition-all active:scale-[0.98] 
                             cursor-pointer flex items-center justify-center 
                             gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Générer ma réponse — 19 €
                </button>

                {/* Mini réassurance sous le bouton */}
                <p className="text-center text-[10px] text-slate-500">
                  Paiement sécurisé · Livraison par email · Sans abonnement
                </p>

              </form>
            </motion.div>

            {/* Indicateur social proof sous la carte */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 flex items-center justify-center gap-3 
                         text-xs text-slate-400"
            >
              <div className="flex -space-x-2">
                {['bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 
                  'bg-amber-500'].map((color, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${color} border-2 
                                border-slate-900 flex items-center 
                                justify-center text-white text-[9px] 
                                font-bold`}
                  >
                    {['C', 'M', 'S', 'A'][i]}
                  </div>
                ))}
              </div>
              <span>
                Utilisé par des consultants indépendants et cabinets conseil
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
