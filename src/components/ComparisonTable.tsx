/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Zap, Layers } from 'lucide-react';

export default function ComparisonTable() {
  const criteria = [
    {
      label: "Document structuré",
      chatgpt: {
        supported: false,
        text: "Texte brut à reformater manuellement"
      },
      deliverable: {
        supported: true,
        text: "9 sections complètes, prêtes à personnaliser"
      }
    },
    {
      label: "Extraction des données du RFP",
      chatgpt: {
        supported: false,
        text: "Vous devez ressaisir budget, dates, effectifs..."
      },
      deliverable: {
        supported: true,
        text: "Budget, dates, effectifs extraits automatiquement"
      }
    },
    {
      label: "Chiffres dans le document",
      chatgpt: {
        supported: false,
        text: "Données génériques ou inventées"
      },
      deliverable: {
        supported: true,
        text: "Vos vrais chiffres injectés — aucune donnée inventée"
      }
    },
    {
      label: "Relecture et cohérence",
      chatgpt: {
        supported: false,
        text: "Aucune vérification automatique"
      },
      deliverable: {
        supported: true,
        text: "Validation automatique des chiffres et de la cohérence"
      }
    },
    {
      label: "Temps d'obtention",
      chatgpt: {
        supported: false,
        text: "1 à 3h de rédaction et mise en forme"
      },
      deliverable: {
        supported: true,
        text: "Moins de 10 minutes — PDF livré par email"
      },
      highlight: true
    },
    {
      label: "Format de livraison",
      chatgpt: {
        supported: false,
        text: "Texte dans le navigateur — à copier-coller"
      },
      deliverable: {
        supported: true,
        text: "PDF haute qualité envoyé directement par email"
      }
    }
  ];

  return (
    <section
      id="comparatif"
      className="py-20 lg:py-28 bg-white border-y border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full
                          bg-[#1B263B]/5 border border-[#1B263B]/10
                          px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Layers className="h-3.5 w-3.5 text-[#B8935A]" />
            <span>Comparatif</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl
                         font-extrabold text-[#1B263B] tracking-tight">
            Deliverable Engine vs ChatGPT
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            ChatGPT génère du texte. Deliverable Engine génère
            un document structuré avec vos données réelles,
            livré en PDF en moins de 10 minutes.
          </p>
        </div>

        {/* Table */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200
                        shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-[#1B263B] text-white">
                  <th className="py-5 px-6 font-serif-heading font-semibold
                                 text-xs sm:text-sm uppercase tracking-wider
                                 w-5/12">
                    Critère
                  </th>
                  <th className="py-5 px-6 font-semibold text-xs sm:text-sm
                                 uppercase tracking-wider text-slate-300
                                 w-3/12 text-center">
                    ChatGPT
                  </th>
                  <th className="py-5 px-6 font-bold text-xs sm:text-sm
                                 uppercase tracking-wider text-[#B8935A]
                                 w-4/12 text-center bg-slate-900/80
                                 border-l border-[#B8935A]/30">
                    <div className="flex items-center justify-center gap-1.5">
                      <Zap className="h-4 w-4 text-[#B8935A]" />
                      <span>Deliverable Engine</span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200/70 text-xs
                                sm:text-sm font-sans">
                {criteria.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.highlight
                        ? 'bg-[#B8935A]/8 font-medium'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    {/* Critère */}
                    <td className="py-4 px-6 font-semibold text-[#1B263B]">
                      {row.label}
                      {row.highlight && (
                        <span className="ml-2 text-[10px] font-bold
                                         bg-[#B8935A]/20 text-[#B8935A]
                                         px-2 py-0.5 rounded-full">
                          Clé
                        </span>
                      )}
                    </td>

                    {/* ChatGPT */}
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-start justify-center
                                      gap-2">
                        <X className="h-4 w-4 text-slate-300 shrink-0
                                       mt-0.5" />
                        <span className="text-slate-500 text-xs
                                          text-left">
                          {row.chatgpt.text}
                        </span>
                      </div>
                    </td>

                    {/* Deliverable Engine */}
                    <td className="py-4 px-6 text-center bg-[#B8935A]/5
                                   border-l border-[#B8935A]/20">
                      <div className="flex items-start justify-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100
                                        flex items-center justify-center
                                        shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-emerald-700
                                            stroke-[3]" />
                        </div>
                        <span className="text-xs font-semibold
                                          text-[#1B263B] text-left">
                          {row.deliverable.text}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
