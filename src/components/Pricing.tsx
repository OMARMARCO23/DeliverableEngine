/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ShieldCheck, ArrowRight, Zap, RefreshCw, Globe, Lock, FileText } from 'lucide-react';
import { PRICING_DATA } from '../data';

interface PricingProps {
  onOpenGenerate: () => void;
  onOpenLegal?: () => void;
}

export default function Pricing({ onOpenGenerate, onOpenLegal }: PricingProps) {
  const tier = PRICING_DATA[0];

  return (
    <section id="tarif" className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
            Offre de lancement exclusive
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B]">
            Juste une offre de lancement
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans">
            Aucun abonnement mensuel, aucun engagement. Juste une offre de lancement à 19 € pour obtenir votre dossier de réponse complet prêt à déposer.
          </p>
        </div>

        {/* Single Transparent Pricing Card */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl p-8 sm:p-10 bg-[#1B263B] text-white border-2 border-[#B8935A] shadow-2xl flex flex-col justify-between"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B8935A] text-[#1B263B] text-[11px] font-bold uppercase tracking-wider py-1 px-5 rounded-full shadow-md">
              Offre de lancement
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif-heading text-2xl font-bold text-white">
                  {tier.name}
                </h3>
                <span className="text-xs font-mono font-bold bg-[#B8935A]/20 text-[#B8935A] border border-[#B8935A]/40 px-3 py-1 rounded-full">
                  1 dossier complet
                </span>
              </div>

              <p className="text-xs sm:text-sm mt-2 text-slate-300 font-sans">
                {tier.description}
              </p>

              {/* Price Block */}
              <div className="my-8 pb-8 border-b border-slate-700/80">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl font-extrabold font-serif-heading text-[#B8935A]">
                    {tier.price}
                  </span>
                  <span className="text-slate-400 text-sm font-sans">
                    TTC · Paiement unique
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2 font-sans flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-[#B8935A]" />
                  Paiement sécurisé via Lemon Squeezy · Facture téléchargeable automatiquement
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 text-xs sm:text-sm font-sans mb-8">
                {tier.features.map((item, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#B8935A]/20 text-[#B8935A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={onOpenGenerate}
                className="w-full py-4 px-6 rounded-xl text-sm sm:text-base font-bold bg-[#B8935A] hover:bg-[#a17e47] text-[#1B263B] transition-all shadow-lg active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-4 font-sans px-1">
                <span>⚡ Livraison sous 10 minutes</span>
                <span>🛡️ Garantie révision 24h</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 24h Revision Guarantee Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto rounded-3xl bg-white border border-[#B8935A]/40 p-8 sm:p-10 shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#B8935A]/15 text-[#B8935A] flex items-center justify-center shrink-0 border border-[#B8935A]/30">
              <RefreshCw className="h-7 w-7" />
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B8935A] uppercase tracking-wider font-mono mb-1.5">
                <ShieldCheck className="h-4 w-4" />
                Garantie Révision & Sérénité 24h
              </div>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1B263B]">
                « Une section ne correspond pas à votre appel d'offres ? Nous le révisons ou le régénérons gratuitement sous 24h — sans justification à fournir. »
              </h3>
              <p className="mt-3 text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                <strong>1 révision ou régénération gratuite</strong> est systématiquement incluse avec votre génération à 19 €. Un simple email avec vos remarques déclenche immédiatement l'ajustement par notre équipe.
              </p>
            </div>
          </div>

          {/* Verified Badges Row */}
          <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#B8935A] shrink-0" />
              <span>Garantie révision 24h incluse</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#B8935A] shrink-0" />
              <span>Paiement sécurisé via Lemon Squeezy</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-[#B8935A] shrink-0" />
              <span>Conforme France & Belgique</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
