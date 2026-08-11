/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ClipboardPaste, Cpu, Mail, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "Étape 1",
      title: "Collez votre RFP",
      icon: <ClipboardPaste className="h-8 w-8 text-[#B8935A]" />,
      desc: "Copiez-collez le texte de votre appel d'offres ou cahier des charges. Pas d'upload, pas de configuration."
    },
    {
      num: "Étape 2",
      title: "L'IA rédige pour vous",
      icon: <Cpu className="h-8 w-8 text-[#B8935A]" />,
      desc: "Notre moteur extrait le budget, les dates et les exigences, puis génère une proposition structurée en 9 sections."
    },
    {
      num: "Étape 3",
      title: "PDF livré par email",
      icon: <Mail className="h-8 w-8 text-[#B8935A]" />,
      desc: "En moins de 10 minutes, vous recevez un PDF professionnel prêt à personnaliser et envoyer."
    }
  ];

  return (
    <section id="fonctionnement" 
             className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] 
                      [background-size:16px_16px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 relative z-10">

        {/* Titre */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full 
                          bg-[#B8935A]/15 border border-[#B8935A]/30 
                          px-3.5 py-1 text-xs font-semibold text-[#B8935A] mb-4">
            <Cpu className="h-3.5 w-3.5" />
            Comment ça marche
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl 
                         font-extrabold text-white">
            Trois étapes. Dix minutes.
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Aucun prompt à écrire. Aucun template à remplir. 
            Collez votre RFP — on s'occupe du reste.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center 
                         bg-slate-800/90 border border-slate-700/80 
                         p-8 rounded-2xl relative shadow-xl 
                         hover:border-[#B8935A] transition-all group"
            >
              <span className="font-mono text-xs font-bold tracking-widest 
                               text-[#B8935A] uppercase bg-[#B8935A]/10 
                               border border-[#B8935A]/30 px-3 py-1 
                               rounded-full mb-6">
                {step.num}
              </span>

              <div className="flex h-16 w-16 items-center justify-center 
                              rounded-2xl bg-[#1B263B] border border-slate-700 
                              shadow-inner mb-6 group-hover:bg-[#B8935A]/20 
                              transition-colors">
                {step.icon}
              </div>

              <h3 className="font-serif-heading text-xl font-bold 
                             text-white mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note livraison */}
        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm 
                        text-slate-300 bg-slate-800/80 border border-slate-700/80 
                        px-5 py-2.5 rounded-xl shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>
              Livraison moyenne constatée : 
              <strong> moins de 10 minutes</strong> après paiement
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
