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
    "PDF professionnel & structuré",
    "PDF envoyé rapidement par email",
    "Format prêt à l'envoi client",
    "Facture disponible",
    "Support dédié par email"
  ];

  return (
    <section id="tarif" className="py-20 lg:py-28 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
            Tarification transparente
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B]">
            Un tarif simple sans engagement
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans">
            Aucun abonnement mensuel obligatoire. Payez uniquement à la génération.
          </p>
        </div>

        {/* Single Centered Pricing Card */}
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-[#1B263B] text-white p-8 sm:p-10 border-2 border-[#B8935A] shadow-2xl text-center"
          >
            {/* Header Title */}
            <div className="text-xs font-mono font-bold tracking-widest text-[#B8935A] uppercase bg-[#B8935A]/10 border border-[#B8935A]/30 py-1.5 px-4 rounded-full inline-block mb-4">
              RÉPONSE RFP UNIQUE
            </div>

            {/* Price display */}
            <div className="my-6">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl sm:text-7xl font-extrabold font-serif-heading text-[#B8935A]">
                  19 €
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium mt-1">
                par génération
              </p>
            </div>

            <div className="my-6 border-t border-slate-700/80 pt-6">
              <ul className="space-y-3.5 text-left max-w-xs mx-auto text-xs sm:text-sm text-slate-200 font-sans">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 font-medium">
                    <Check className="h-4 w-4 text-[#B8935A] shrink-0 stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4 border-t border-slate-700/80">
              <button
                onClick={() => onOpenGenerate()}
                style={{ backgroundColor: '#B8935A' }}
                className="w-full group inline-flex items-center justify-center gap-2.5 rounded-xl hover:bg-[#9e7b45] px-6 py-4 text-base font-bold text-[#1B263B] shadow-xl transition-all cursor-pointer active:scale-98"
              >
                Commander maintenant (19 €)
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-300 font-medium">
                <ShieldCheck className="h-4 w-4 text-[#B8935A]" />
                <span>Paiement sécurisé · Facture disponible</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

