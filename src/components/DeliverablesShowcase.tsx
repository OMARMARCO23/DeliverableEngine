/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Eye, FileText, CheckCircle2, ChevronRight, FileCode, Clock } from 'lucide-react';
import { DELIVERABLE_EXAMPLES } from '../data';
import { DeliverableExample } from '../types';

interface DeliverablesShowcaseProps {
  onViewDoc: (doc: DeliverableExample) => void;
}

export default function DeliverablesShowcase({ onViewDoc }: DeliverablesShowcaseProps) {
  return (
    <section id="showcase" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <Eye className="h-3.5 w-3.5" />
            Livrables réels
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Voici ce que l'IA produit en <span className="text-indigo-600">10 minutes</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Cliquez sur « Voir » pour ouvrir les exemples de documents générés et constater la qualité de mise en page, de structure, et de contenu rédactionnel.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DELIVERABLE_EXAMPLES.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-xl rounded-2xl p-5 sm:p-6 transition-all duration-300"
            >
              <div>
                {/* Visual Header representing a Doc Header */}
                <div className="relative rounded-xl border border-slate-100 bg-slate-50/50 p-4 mb-5 overflow-hidden group-hover:bg-indigo-50/10 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-mono tracking-wider text-gray-400 font-semibold uppercase">
                      {doc.tag}
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-800 line-clamp-1 mb-1 font-display">
                    {doc.title}
                  </h4>
                  <div className="space-y-1">
                    <div className="h-1 w-20 bg-gray-200 rounded" />
                    <div className="h-1 w-24 bg-gray-200 rounded" />
                  </div>
                  {/* Watermark badge on hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                    <div className="bg-white/95 text-slate-900 text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5 text-indigo-600" />
                      Visualiser le Doc
                    </div>
                  </div>
                </div>

                {/* Tag & Info */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded bg-indigo-50 border border-indigo-100 px-2 py-0.5 text-[10px] font-semibold text-indigo-700">
                    Format Google Docs
                  </span>
                  <span className="text-[10px] font-mono font-medium text-emerald-600 flex items-center gap-0.5 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                    <Clock className="h-2.5 w-2.5" />
                    {doc.timeSaved}
                  </span>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mb-5">
                  {doc.description}
                </p>

                {/* Bullet Outlines */}
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-2.5">
                    Sommaire type généré :
                  </h5>
                  <ul className="space-y-1.5">
                    {doc.previewLines.map((line, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-1.5 text-[11px] text-gray-600 leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* View Button */}
              <button
                onClick={() => onViewDoc(doc)}
                className="group/btn w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white hover:bg-indigo-600 hover:border-indigo-600 hover:text-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                Ouvrir le Google Doc
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Tip Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-500">
            <span className="text-amber-500 font-bold">💡 Astuce :</span>
            Ces documents ont été configurés en amont pour intégrer les chartes graphiques de clients types.
          </div>
        </div>

      </div>
    </section>
  );
}
