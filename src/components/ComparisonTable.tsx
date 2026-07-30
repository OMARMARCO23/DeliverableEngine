/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function ComparisonTable() {
  const criteria = [
    {
      label: "Mise en page & Formatage",
      chatgpt: { supported: false, text: "Texte brut (à copier-coller)" },
      deliverable: { supported: true, text: "PDF haute résolution prêt à l'envoi" },
    },
    {
      label: "Structure de proposition RFP",
      chatgpt: { supported: false, text: "Plan standard non adapté" },
      deliverable: { supported: true, text: "10 sections selon standards consulting" },
    },
    {
      label: "Personnalisation du profil",
      chatgpt: { supported: false, text: "Nécessite de soumettre vos prompts à chaque fois" },
      deliverable: { supported: true, text: "Intégration automatique de votre expertise" },
    },
    {
      label: "Vérification & Évaluation IA",
      chatgpt: { supported: false, text: "Aucune relecture critique" },
      deliverable: { supported: true, text: "Double validation des exigences du cahier des charges" },
    },
    {
      label: "Temps moyen d'obtention",
      chatgpt: { supported: false, text: "2 à 3 heures d'échanges et de mise en forme" },
      deliverable: { supported: true, text: "5 à 10 minutes (livraison automatique par email)" },
      highlight: true,
    },
    {
      label: "Export editable & PDF",
      chatgpt: { supported: false, text: "Non disponible" },
      deliverable: { supported: true, text: "Inclus dans l'offre à 19 €" },
    },
  ];

  return (
    <section id="comparatif" className="py-20 lg:py-28 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1B263B]/5 border border-[#1B263B]/10 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Layers className="h-3.5 w-3.5 text-[#B8935A]" />
            <span>Comparatif d'efficacité</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B] tracking-tight">
            Pourquoi utiliser Deliverable Engine plutôt que ChatGPT ?
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            ChatGPT génère des bribes de texte. Deliverable Engine prend en charge l'ensemble de la chaîne de valeur : de l'analyse du cahier des charges jusqu'au livrable commercial final.
          </p>
        </div>

        {/* Executive Comparison Table */}
        <div className="max-w-4xl mx-auto bg-slate-50/50 rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-[#1B263B] text-white">
                  <th className="py-5 px-6 font-serif-heading font-semibold text-xs sm:text-sm uppercase tracking-wider w-5/12">
                    Critères de performance
                  </th>
                  <th className="py-5 px-6 font-serif-heading font-semibold text-xs sm:text-sm uppercase tracking-wider text-slate-300 w-3/12 text-center">
                    ChatGPT classique
                  </th>
                  <th className="py-5 px-6 font-serif-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#B8935A] w-4/12 text-center bg-slate-900/80 border-l border-[#B8935A]/30">
                    <div className="flex items-center justify-center gap-1.5">
                      <Zap className="h-4 w-4 text-[#B8935A]" />
                      <span>Deliverable Engine</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 text-xs sm:text-sm font-sans">
                {criteria.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.highlight ? 'bg-[#B8935A]/10 font-medium' : 'hover:bg-slate-100/60'
                    }`}
                  >
                    {/* Criterion Label */}
                    <td className="py-4 px-6 font-semibold text-[#1B263B]">
                      {row.label}
                    </td>

                    {/* ChatGPT Standard */}
                    <td className="py-4 px-6 text-slate-500 text-center font-sans">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-4 w-4 text-slate-400 shrink-0" />
                        <span className="text-slate-600 text-xs">{row.chatgpt.text}</span>
                      </div>
                    </td>

                    {/* Deliverable Engine */}
                    <td className="py-4 px-6 text-center font-medium text-[#1B263B] bg-[#B8935A]/5 border-l border-[#B8935A]/20">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs font-semibold text-[#1B263B]">{row.deliverable.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Reassurance */}
          <div className="bg-slate-100/80 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 font-sans gap-2">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-4 w-4 text-[#B8935A]" />
              Garantie satisfait ou ré-analyse offerte sous 14 jours
            </span>
            <span className="text-slate-500 font-mono">
              Deliverable Engine v2.4 • Modèle spécialisé consulting
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

