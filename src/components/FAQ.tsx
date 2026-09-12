/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '../data';

interface FAQProps {
  onOpenGenerate?: (data?: { rfp_text?: string; positioning?: string }) => void;
}

export default function FAQ({ onOpenGenerate }: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-[#B8935A]" />
            Questions fréquentes
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B]">
            Questions Fréquentes
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans">
            Transparence totale sur notre fonctionnement, la conformité SAD / conseil et notre engagement de qualité.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 hover:border-slate-300 transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif-heading text-base sm:text-lg font-bold text-[#1B263B]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#1B263B] text-white' : 'bg-slate-200/80 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm font-sans leading-relaxed border-t border-slate-200/60 bg-white">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact direct link */}
        <div className="mt-12 text-center bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#1B263B]">Vous avez une question spécifique sur un cahier des charges ?</h4>
            <p className="text-xs text-slate-500 font-sans mt-0.5">Notre équipe spécialisée marchés publics & SAD vous répond sous 24h ouvrées.</p>
          </div>
          <a
            href="#a-propos"
            className="py-2.5 px-5 bg-[#1B263B] text-[#B8935A] rounded-xl text-xs font-bold hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Poser une question
          </a>
        </div>

      </div>
    </section>
  );
}
