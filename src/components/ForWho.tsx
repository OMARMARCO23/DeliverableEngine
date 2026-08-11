/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Building2,
  Users,
  ArrowUpRight,
  Check
} from 'lucide-react';

export default function ForWho() {
  const personas = [
    {
      role: "Consultant indépendant",
      badge: "Freelance",
      icon: <Briefcase className="h-5 w-5 text-[#B8935A]" />,
      pain: "Rédiger une réponse RFP sérieuse prend 1 à 2 jours. Du temps qui n'est pas facturé.",
      gain: "Recevez une base structurée en 10 minutes. Complétez vos références et vos tarifs. Envoyez.",
      tag: "Gain de temps immédiat"
    },
    {
      role: "Petit cabinet 2-15 personnes",
      badge: "Cabinet conseil",
      icon: <Building2 className="h-5 w-5 text-[#B8935A]" />,
      pain: "Répondre à plus d'appels d'offres sans mobiliser systématiquement vos consultants seniors.",
      gain: "Produisez un premier jet structuré rapidement. Vos consultants se concentrent sur la valeur ajoutée.",
      tag: "Plus de réponses, moins d'effort"
    },
    {
      role: "Freelance stratégie, RH, digital",
      badge: "Tous secteurs",
      icon: <Users className="h-5 w-5 text-[#B8935A]" />,
      pain: "Chaque appel d'offres a ses spécificités : secteur, budget, dates, exigences. Tout relire prend du temps.",
      gain: "Le moteur extrait les données clés de votre document et les intègre directement dans la proposition.",
      tag: "Adapté à votre secteur"
    }
  ];

  return (
    <section
      id="pour-qui"
      className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full
                          bg-[#1B263B]/5 border border-[#1B263B]/10
                          px-3.5 py-1 text-xs font-semibold
                          text-[#1B263B] mb-4">
            <Users className="h-3.5 w-3.5 text-[#B8935A]" />
            <span>Pour qui</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl
                         font-extrabold text-[#1B263B] tracking-tight">
            Fait pour les consultants
            <br className="hidden sm:inline" />
            qui répondent à des appels d'offres
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Indépendants, freelances ou petits cabinets —
            si vous répondez à des RFP, Deliverable Engine
            vous fait gagner plusieurs heures par réponse.
          </p>
        </div>

        {/* 3 Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="bg-white border border-slate-200/90 rounded-2xl
                         p-7 shadow-xs hover:border-[#B8935A]/60
                         hover:shadow-md transition-all
                         flex flex-col justify-between group"
            >
              <div>
                {/* En-tête */}
                <div className="flex items-center gap-3 pb-5 mb-5
                                border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#1B263B]
                                  flex items-center justify-center">
                    {persona.icon}
                  </div>
                  <div>
                    <h3 className="font-serif-heading text-lg font-bold
                                   text-[#1B263B]">
                      {persona.role}
                    </h3>
                    <span className="text-[11px] font-semibold
                                     text-[#B8935A]">
                      {persona.badge}
                    </span>
                  </div>
                </div>

                {/* Problème */}
                <div className="mb-5 bg-slate-50 border border-slate-100
                                rounded-xl p-4">
                  <span className="text-[10px] font-bold uppercase
                                   tracking-wider text-slate-400
                                   block mb-1">
                    Le défi
                  </span>
                  <p className="text-xs font-medium text-slate-700
                                 leading-relaxed">
                    {persona.pain}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase
                                   tracking-wider text-[#B8935A]
                                   flex items-center gap-1">
                    <Check className="h-3 w-3" />
                    Avec Deliverable Engine
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {persona.gain}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100
                              flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500
                                 bg-slate-100 px-2.5 py-1 rounded-md">
                  {persona.tag}
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400
                                          group-hover:text-[#B8935A]
                                          transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
