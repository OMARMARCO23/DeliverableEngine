/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1B263B]/5 border border-[#1B263B]/10 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-[#B8935A]" />
            <span>Foire aux questions</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#1B263B] tracking-tight">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-slate-600 text-sm font-sans leading-relaxed">
            Tout ce qu'il faut savoir sur notre moteur de réponse aux appels d'offres et la sécurité de vos données.
          </p>
        </div>

        {/* Clean Executive Accordions List */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            const indexFormatted = String(index + 1).padStart(2, '0');

            return (
              <div
                key={faq.id}
                className={`border rounded-xl transition-all ${
                  isOpen
                    ? 'border-[#B8935A]/50 bg-white shadow-xs'
                    : 'border-slate-200/90 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-sans text-base sm:text-lg font-bold text-[#1B263B] cursor-pointer select-none group"
                >
                  <span className="flex items-center gap-4 pr-4">
                    <span className={`font-mono text-xs font-semibold transition-colors ${isOpen ? 'text-[#B8935A]' : 'text-slate-400'}`}>
                      {indexFormatted}
                    </span>
                    <span className="group-hover:text-[#B8935A] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </span>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#1B263B] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                  }`}>
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 whitespace-pre-line pl-12 sm:pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


