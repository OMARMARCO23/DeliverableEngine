/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            Une question ?
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-gray-500">
            Tout ce qu'il faut savoir sur l'agent IA d'écriture Deliverable Engine, la sécurité de vos données, et le processus d'onboarding.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all ${
                  isOpen
                    ? 'border-indigo-500 bg-indigo-50/10 shadow-sm shadow-indigo-50'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-display text-sm font-bold text-gray-900 cursor-pointer select-none"
                >
                  <span className="flex items-center gap-3">
                    <MessageSquare className={`h-4 w-4 shrink-0 transition-colors ${isOpen ? 'text-indigo-600' : 'text-gray-400'}`} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 text-gray-500 ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Unresolved doubt prompt */}
        <div className="mt-12 text-center text-xs text-gray-500">
          Vous avez une question spécifique sur votre secteur d'activité ?{' '}
          <a href="#pricing" className="text-indigo-600 font-semibold hover:underline">
            Réservez un appel de démo gratuit
          </a>{' '}
          pour en discuter en direct.
        </div>

      </div>
    </section>
  );
}
