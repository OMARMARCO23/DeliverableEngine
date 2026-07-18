/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { XCircle, AlertTriangle, PenTool, Flame, ShieldAlert } from 'lucide-react';

export default function Problem() {
  const painCards = [
    {
      id: 'propale',
      text: "Encore une propale à rédiger ce soir",
      subtext: "Deux heures passées à copier-coller des vieux paragraphes d'une autre proposition commerciale au lieu de vous détendre.",
      accentColor: "border-red-100 bg-red-50/50 hover:bg-red-50"
    },
    {
      id: 'cr-copil',
      text: "Le CR du COPIL que je n'ai pas encore envoyé",
      subtext: "La réunion a duré une heure, la rédaction de la synthèse vous en prend deux. Le client s'impatiente.",
      accentColor: "border-orange-100 bg-orange-50/50 hover:bg-orange-50"
    },
    {
      id: 'rapport',
      text: "Le rapport d'audit qui traîne depuis 2 semaines",
      subtext: "L'analyse est finie dans votre tête, mais la mise en page de la synthèse de 15 pages retarde votre facturation.",
      accentColor: "border-amber-100 bg-amber-50/50 hover:bg-amber-50"
    }
  ];

  return (
    <section id="problem" className="py-20 lg:py-28 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-100 px-3 py-1 text-xs font-semibold text-red-700 mb-4">
              <AlertTriangle className="h-3.5 w-3.5" />
              La réalité du terrain
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl leading-tight">
              Vous êtes consultant, <br className="hidden sm:inline" />
              pas <span className="text-red-600">rédacteur</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base text-slate-600 leading-relaxed">
              En moyenne, vous passez <strong>8 à 12 heures par semaine</strong> à rédiger des documents que vous avez déjà écrits 100 fois.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Des propositions commerciales qui se ressemblent toutes, des rapports d'audit avec la même structure, des comptes-rendus de réunions interminables... Pendant ce temps, vous ne faites pas ce qui génère vraiment votre chiffre d'affaires : <strong className="text-gray-900">vendre de nouveaux projets et délivrer votre expertise auprès des clients.</strong>
            </p>
          </div>
        </div>

        {/* 3 Bullets Douleur cards with entrance animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col p-6 rounded-2xl border transition-all duration-300 ${card.accentColor}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm border border-slate-100 text-red-500 mb-5">
                <XCircle className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                « {card.text} »
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing stat/summary */}
        <div className="mt-12 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">
            RÉSULTAT : UNE CHARGE MENTALE IMPORTANTE ET DU CA POTENTIEL ENVOLÉ.
          </p>
        </div>

      </div>
    </section>
  );
}
