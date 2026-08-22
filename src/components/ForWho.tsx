/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, TrendingUp, Users, ArrowUpRight, Check } from 'lucide-react';

export default function ForWho() {
  const personas = [
    {
      role: "Consultant Freelance",
      badge: "Indépendants",
      icon: <Briefcase className="h-5 w-5 text-[#B8935A]" />,
      pain: "Vous perdez 2 jours sur chaque appel d'offres au lieu de facturer vos clients.",
      gain: "Générez votre proposition technique complète en 10 minutes, formatée et prête à être expédiée.",
      tag: "Réactivité x10"
    },
    {
      role: "Petit Cabinet (2-15 pers)",
      badge: "Cabinets conseil",
      icon: <Building2 className="h-5 w-5 text-[#B8935A]" />,
      pain: "Multipliez par 5 vos réponses aux appels d'offres sans embaucher de profil dédié.",
      gain: "Standardisez l'excellence rédactionnelle et la charte graphique sur l'ensemble du cabinet.",
      tag: "Capacité démultipliée"
    },
    {
      role: "Directeur Commercial",
      badge: "Équipes Sales",
      icon: <TrendingUp className="h-5 w-5 text-[#B8935A]" />,
      pain: "Répondez à 100% des sollicitations RFP sans surcharger vos consultants séniors.",
      gain: "Déléguez le premier jet ultra-structuré à l'IA et concentrez vos équipes sur la négociation.",
      tag: "Taux de transformation"
    }
  ];

  return (
    <section id="pour-qui" className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1B263B]/5 border border-[#1B263B]/10 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Users className="h-3.5 w-3.5 text-[#B8935A]" />
            <span>Profils Cibles</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B] tracking-tight">
            Une solution pensée pour les professionnels exigeants
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            Que vous soyez consultant indépendant ou dirigeant de cabinet, maximisez votre taux de réponse sans sacrifier la qualité.
          </p>
        </div>

        {/* 3 Executive Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {personas.map((persona, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-xs hover:border-[#B8935A]/60 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1B263B] flex items-center justify-center shadow-xs">
                      {persona.icon}
                    </div>
                    <div>
                      <h3 className="font-serif-heading text-lg font-bold text-[#1B263B]">
                        {persona.role}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#B8935A] tracking-wide">
                        {persona.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Problem / Pain */}
                <div className="mb-5 bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Défi rencontré
                  </span>
                  <p className="text-xs font-medium text-slate-700 leading-relaxed font-sans">
                    « {persona.pain} »
                  </p>
                </div>

                {/* Solution / Gain */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8935A] flex items-center gap-1">
                    <Check className="h-3 w-3 text-[#B8935A]" />
                    Impact Deliverable Engine
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {persona.gain}
                  </p>
                </div>
              </div>

              {/* Tag Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  {persona.tag}
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#B8935A] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* High impact quote box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#1B263B] text-white p-8 sm:p-10 rounded-2xl border border-[#B8935A]/30 shadow-lg text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8935A]/10 rounded-full blur-3xl pointer-events-none" />
          <p className="font-serif-heading text-xl sm:text-2xl font-bold leading-relaxed text-[#B8935A]">
            « Vous n’avez pas besoin de doubler vos effectifs pour doubler vos réponses RFP. <br className="hidden sm:inline" />
            Vous avez besoin d’un moteur de génération calibré pour votre activité. »
          </p>
          <p className="text-xs text-slate-300 mt-4 font-sans tracking-wide">
            Assurez la puissance rédactionnelle des grands cabinets de conseil avec la réactivité d'une structure agile.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

