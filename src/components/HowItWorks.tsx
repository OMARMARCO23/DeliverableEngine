/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { FormInput, Cpu, CheckCircle2, FileVideo, Play } from 'lucide-react';

interface HowItWorksProps {
  onOpenVideo: () => void;
}

export default function HowItWorks({ onOpenVideo }: HowItWorksProps) {
  const steps = [
    {
      num: "01",
      title: "BRIEFEZ",
      icon: <FormInput className="h-5 w-5 text-indigo-600" />,
      desc: "Remplissez un formulaire simple avec les informations clés de votre mission : nom du client, contexte, objectifs stratégiques, et données brutes. Remplissage ultra rapide en 5 minutes maximum."
    },
    {
      num: "02",
      title: "L'IA RÉDIGE",
      icon: <Cpu className="h-5 w-5 text-indigo-600 animate-pulse" />,
      desc: "L'agent IA principal génère votre livrable selon votre ton de voix et vos grilles de templates habituels. Immédiatement après, un second agent superviseur relit, peaufine et garantit des standards de qualité irréprochables."
    },
    {
      num: "03",
      title: "RECEVEZ",
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-600" />,
      desc: "Vous recevez instantanément une notification par email avec le lien de partage sécurisé vers votre nouveau fichier Google Doc. Le document est parfaitement structuré, mis en page et prêt à être envoyé."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <Cpu className="h-3.5 w-3.5" />
            Méthodologie agile
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            3 étapes. 10 minutes. <span className="text-indigo-600">C'est prêt.</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Un processus simple, sans frictions administratives, conçu exclusivement pour la rapidité opérationnelle des consultants indépendants.
          </p>
        </div>

        {/* 3 Step pathway */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative mb-16">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-300 to-emerald-200 -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-xs relative z-10"
            >
              <span className="absolute -top-4 font-mono text-[11px] font-bold tracking-widest px-2.5 py-0.5 bg-slate-900 text-white rounded-full">
                {step.num}
              </span>
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-inner mb-6">
                {step.icon}
              </div>

              <h3 className="font-display text-sm font-bold tracking-wider text-gray-900 mb-2.5 uppercase">
                {step.title}
              </h3>
              
              <p className="text-xs text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video trigger card */}
        <div className="max-w-2xl mx-auto">
          <motion.button
            whileHover={{ y: -2 }}
            onClick={onOpenVideo}
            className="w-full flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl border border-indigo-100 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer text-left gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <FileVideo className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Démo en vidéo (Loom) — 1 min 45
                </h4>
                <p className="text-xs text-gray-500">
                  Découvrez l'interface de rédaction en direct de bout en bout.
                </p>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-1 bg-indigo-600 text-white font-semibold text-xs px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <Play className="h-3.5 w-3.5 fill-white text-white" />
              Voir la vidéo
            </div>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
