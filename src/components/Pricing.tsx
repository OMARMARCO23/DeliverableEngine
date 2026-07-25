/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

interface PricingProps {
  onOpenGenerate: () => void;
}

export default function Pricing({ onOpenGenerate }: PricingProps) {
  const features = [
    "Analyse du RFP",
    "Extraction des exigences",
    "Réponse structurée et professionnelle",
    "Document PDF + version éditable",
    "Livraison par email"
  ];

  return (
    <section id="tarif" className="py-16 sm:py-24 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
            Pas d'engagement, pas de frais cachés
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B]">
            Tarification simple
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Génère ta réponse à la demande. Paye uniquement au résultat.
          </p>
        </div>

        {/* Pricing Card Centered */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-[#1B263B] text-white p-8 sm:p-10 border-2 border-[#B8935A] shadow-2xl"
          >
            {/* Launch offer badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8935A] text-[#1B263B] font-bold text-xs uppercase px-4 py-1.5 rounded-full shadow-md tracking-wider flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 fill-[#1B263B]" />
              Offre de lancement – 50 premières générations
            </div>

            <div className="text-center mt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B8935A]">
                Paiement à la demande
              </span>

              {/* Price display with crossed-out price */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-400 line-through decoration-red-400 decoration-2">
                  29 €
                </span>
                <span className="text-5xl sm:text-6xl font-extrabold font-serif-heading text-[#B8935A]">
                  19 €
                </span>
                <span className="text-sm text-slate-300 font-medium text-left leading-tight">
                  par<br />génération
                </span>
              </div>

              <p className="mt-3 text-xs text-slate-300 bg-slate-800/80 border border-slate-700/80 rounded-lg py-2 px-3 inline-block font-sans">
                Aucun abonnement. Tu paies uniquement quand tu en as besoin.
              </p>
            </div>

            {/* Included list */}
            <div className="mt-8 border-t border-slate-700/80 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4 text-center">
                Ce qui est inclus :
              </h4>
              <ul className="space-y-3.5 max-w-md mx-auto">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B8935A]/20 border border-[#B8935A]/40 text-[#B8935A]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={onOpenGenerate}
                className="w-full group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#B8935A] hover:bg-[#9e7b45] px-6 py-4 text-sm sm:text-base font-bold text-[#1B263B] shadow-xl transition-all cursor-pointer active:scale-98"
              >
                Générer ma première réponse à 19 €
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="mt-4 text-center flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="h-4 w-4 text-[#B8935A]" />
                <span>Formatage prêt à l'envoi · Version PDF & éditable incluses</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

