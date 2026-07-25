/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Upload, Compass, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "Étape 1",
      title: "Upload du RFP",
      icon: <Upload className="h-6 w-6 text-[#B8935A]" />,
      desc: "Upload ton RFP (PDF ou Word) ou colle le texte"
    },
    {
      num: "Étape 2",
      title: "Positionnement",
      icon: <Compass className="h-6 w-6 text-[#B8935A]" />,
      desc: "Indique ton positionnement et tes points forts"
    },
    {
      num: "Étape 3",
      title: "Livraison",
      icon: <Send className="h-6 w-6 text-[#B8935A]" />,
      desc: "Reçois ta réponse structurée par email (PDF + version éditable)"
    }
  ];

  return (
    <section id="fonctionnement" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/15 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#B8935A] mb-4">
            <Sparkles className="h-3.5 w-3.5 fill-[#B8935A]" />
            Comment ça marche
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Simple. Rapide. Professionnel.
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Aucun apprentissage complexe, aucun prompt engineering requis. L'outil s'occupe de l'analyse et de la rédaction.
          </p>
        </div>

        {/* 3 Step Pathway */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center bg-slate-800/80 border border-slate-700/80 p-8 rounded-2xl relative shadow-lg hover:border-[#B8935A]/50 transition-colors"
            >
              <span className="font-mono text-xs font-bold tracking-widest text-[#B8935A] uppercase bg-[#B8935A]/10 border border-[#B8935A]/30 px-3 py-1 rounded-full mb-6">
                {step.num}
              </span>
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B263B] border border-slate-700 shadow-inner mb-6">
                {step.icon}
              </div>

              <h3 className="font-serif-heading text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Delivery Guarantee note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-800/50 border border-slate-700/60 px-4 py-2 rounded-lg">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Livraison moyenne constatée : <strong>6 minutes et 30 secondes</strong> après validation</span>
          </p>
        </div>

      </div>
    </section>
  );
}

