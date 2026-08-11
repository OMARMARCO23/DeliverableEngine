/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Clock,
  RefreshCw,
  FileText
} from 'lucide-react';

interface PricingProps {
  onOpenGenerate: () => void;
}

export default function Pricing({ onOpenGenerate }: PricingProps) {

  const features = [
    {
      text: "8 à 11 pages structurées — prêtes à personnaliser",
      detail: "Lettre d'accompagnement, enjeux, proposition, planning, équipe, tarification, cadre juridique"
    },
    {
      text: "Vos vrais chiffres — budget, dates, effectifs extraits automatiquement",
      detail: "Aucune donnée inventée. Tout vient de votre appel d'offres."
    },
    {
      text: "Livraison PDF par email en moins de 10 minutes",
      detail: "Format haute qualité, directement exploitable"
    },
    {
      text: "Personnalisable en 30 minutes",
      detail: "Références, tarifs, équipe — vous complétez ce qui vous appartient"
    },
    {
      text: "Facture disponible",
      detail: "Déductible de vos frais professionnels"
    }
  ];

  return (
    <section id="tarif" className="py-20 lg:py-28 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full 
                          bg-[#B8935A]/10 border border-[#B8935A]/30 
                          px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
            Tarification transparente
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl 
                         font-extrabold text-[#1B263B]">
            Un prix fixe. Zéro abonnement.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans">
            Payez uniquement quand vous en avez besoin. 
            Aucun engagement, aucune surprise.
          </p>
        </div>

        {/* Card + Aside */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 
                        items-start">

          {/* Colonne gauche — Carte principale */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative rounded-3xl bg-[#1B263B] 
                       text-white p-8 sm:p-10 border-2 border-[#B8935A] 
                       shadow-2xl"
          >
            {/* Badge offre */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold tracking-widest 
                               text-[#B8935A] uppercase bg-[#B8935A]/10 
                               border border-[#B8935A]/30 py-1.5 px-4 
                               rounded-full">
                Offre de lancement
              </span>
              <span className="text-xs text-slate-400 line-through">29 €</span>
            </div>

            {/* Prix */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3">
                <span className="text-6xl sm:text-7xl font-extrabold 
                                 font-serif-heading text-[#B8935A]">
                  19 €
                </span>
                <div className="text-left">
                  <p className="text-xs text-slate-300 font-medium">
                    par génération
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    sans abonnement
                  </p>
                </div>
              </div>

              {/* Indicateur temps */}
              <div className="mt-4 inline-flex items-center gap-2 
                              bg-emerald-500/10 border border-emerald-500/30 
                              rounded-lg px-3 py-1.5">
                <Clock className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-300">
                  Livré par email en moins de 10 minutes
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-slate-700/80 pt-6 space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B8935A]/20 
                                  flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-[#B8935A] stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold 
                                  text-slate-100">
                      {item.text}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-slate-700/80">
              <button
                onClick={() => onOpenGenerate()}
                className="w-full group inline-flex items-center justify-center 
                           gap-2.5 rounded-xl bg-[#B8935A] hover:bg-[#9e7b45] 
                           px-6 py-4 text-base font-bold text-[#1B263B] 
                           shadow-xl transition-all cursor-pointer 
                           active:scale-[0.98]"
              >
                Générer ma réponse maintenant
                <ArrowRight className="h-5 w-5 transition-transform 
                                       group-hover:translate-x-1" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 
                              text-xs text-slate-400">
                <ShieldCheck className="h-4 w-4 text-[#B8935A]" />
                <span>Paiement sécurisé · Facture disponible</span>
              </div>
            </div>

          </motion.div>

          {/* Colonne droite — Arguments complémentaires */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Bloc garantie */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 
                            p-5">
              <div className="flex items-center gap-2 mb-3">
                <RefreshCw className="h-4 w-4 text-[#B8935A]" />
                <span className="text-xs font-bold text-[#1B263B]">
                  Satisfait ou régénéré
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Si le document généré ne correspond pas à votre appel d'offres, 
                nous le régénérons sans frais supplémentaires.
              </p>
            </div>

            {/* Bloc pour qui */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-4 w-4 text-[#B8935A]" />
                <span className="text-xs font-bold text-[#1B263B]">
                  Conçu pour
                </span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {[
                  "Consultants indépendants",
                  "Freelances (stratégie, RH, digital...)",
                  "Petits cabinets 2 à 15 personnes",
                  "Tous secteurs : BTP, Santé, IT, RH..."
                ].map((who, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B8935A]" />
                    {who}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bloc calcul ROI */}
            <div className="rounded-2xl border border-[#B8935A]/30 
                            bg-[#B8935A]/5 p-5">
              <p className="text-xs font-bold text-[#1B263B] mb-2">
                Le calcul est simple
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Une réponse RFP prend en moyenne{' '}
                <strong>6 à 12 heures</strong> à rédiger.
                À 400 €/jour, c'est{' '}
                <strong>300 à 600 € de temps</strong>{' '}
                pour produire une base de travail.
              </p>
              <p className="text-xs font-bold text-[#1B263B] mt-3">
                Deliverable Engine : 19 €.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
