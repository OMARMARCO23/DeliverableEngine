/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { MASTER_MODELS, MasterModelData } from '../data';

interface DeliverablesShowcaseProps {
  onViewDoc?: (doc: MasterModelData) => void;
}

export default function DeliverablesShowcase({ onViewDoc }: DeliverablesShowcaseProps) {
  return (
    <section id="showcase" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
            Modèles de livrables
          </div>
          <h2 className="font-serif-heading text-3xl font-extrabold tracking-tight text-[#1B263B] sm:text-4xl">
            Modèles SAD, Conseil & MAPA en <span className="text-[#B8935A]">10 minutes</span>
          </h2>
          <p className="mt-4 text-slate-600 font-sans">
            Consultez les trames complètes générées pour les marchés publics (SAD, MAPA) et consultations de conseil.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {MASTER_MODELS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col justify-between bg-white border border-slate-200 hover:border-[#B8935A] hover:shadow-xl rounded-2xl p-6 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#B8935A] uppercase bg-[#B8935A]/10 px-2.5 py-1 rounded-md">
                    {doc.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-sans">{doc.targetMarket}</span>
                </div>

                <h4 className="text-lg font-bold text-[#1B263B] mb-2 font-serif-heading">
                  {doc.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-sans">
                  {doc.subtitle}
                </p>

                <div className="border-t border-slate-100 pt-3 space-y-2">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Sections clés incluses :
                  </h5>
                  <ul className="space-y-1.5">
                    {doc.sampleSections.map((sec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{sec.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  {doc.estimatedPages} · {doc.timeSaved}
                </span>
                {onViewDoc && (
                  <button
                    onClick={() => onViewDoc(doc)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#B8935A] hover:underline cursor-pointer"
                  >
                    Voir le modèle
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
