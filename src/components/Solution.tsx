/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  CheckSquare,
  FileText,
  FileCheck,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function Solution() {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-[#B8935A]" />,
      title: "Plusieurs heures gagnées",
      desc: "Une réponse RFP prend en moyenne 6 à 12 heures à rédiger. Recevez une base structurée en moins de 10 minutes.",
      badge: "Gain de temps"
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-[#B8935A]" />,
      title: "Structure professionnelle",
      desc: "9 sections complètes : lettre d'accompagnement, enjeux, proposition, planning, équipe, tarification, cadre juridique.",
      badge: "9 sections"
    },
    {
      icon: <FileText className="h-6 w-6 text-[#B8935A]" />,
      title: "Vos chiffres, pas des exemples",
      desc: "Budget, dates, effectifs et volume d'activité extraits directement depuis votre appel d'offres. Aucune donnée inventée.",
      badge: "Données réelles"
    },
    {
      icon: <FileCheck className="h-6 w-6 text-[#B8935A]" />,
      title: "PDF prêt à personnaliser",
      desc: "Recevez un PDF de 8 à 11 pages par email. Copiez dans Word ou Google Docs, complétez vos références et envoyez.",
      badge: "Livraison email"
    }
  ];

  return (
    <section
      id="benefices"
      className="py-16 sm:py-24 bg-white border-y border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full
                          bg-[#B8935A]/10 border border-[#B8935A]/30
                          px-3.5 py-1 text-xs font-semibold
                          text-[#1B263B] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
            Ce que vous obtenez
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl
                         font-extrabold text-[#1B263B]">
            Une base de travail complète
            <br className="hidden sm:inline" />
            <span className="text-[#B8935A]"> en moins de 10 minutes</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Concentrez votre temps sur ce qui compte vraiment :
            affiner votre proposition, personnaliser vos références,
            convaincre votre client.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                        gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-slate-200/90
                         bg-slate-50/50 hover:bg-white p-6 sm:p-7
                         shadow-xs hover:shadow-xl transition-all
                         hover:border-[#B8935A]/40 group
                         flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1B263B]
                                flex items-center justify-center mb-5
                                group-hover:scale-105 transition-transform
                                shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="font-serif-heading text-lg font-bold
                               text-[#1B263B] group-hover:text-[#B8935A]
                               transition-colors">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600
                               leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60
                              flex items-center gap-1.5 text-[11px]
                              font-bold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{benefit.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
