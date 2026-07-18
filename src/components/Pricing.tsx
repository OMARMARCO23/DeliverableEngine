/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Star, ShieldCheck, TrendingUp, AlertCircle } from 'lucide-react';
import { PRICING_DATA } from '../data';

interface PricingProps {
  onOpenDemo: (planId?: string) => void;
}

export default function Pricing({ onOpenDemo }: PricingProps) {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <Star className="h-3.5 w-3.5 text-indigo-600 fill-indigo-600" />
            Tarifs transparents
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Un investissement rentabilisé <span className="text-indigo-600">dès le premier mois</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Choisissez l'abonnement adapté à votre rythme d'activité et commencez à récupérer des heures précieuses dès cette semaine.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_DATA.map((tier) => (
            <motion.div
              key={tier.id}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 border shadow-xs transition-all ${
                tier.recommended
                  ? 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-indigo-500/5 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Recommended Badge */}
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                  <Star className="h-3 w-3 fill-white text-white animate-spin" style={{ animationDuration: '8s' }} />
                  RECOMMANDÉ
                </div>
              )}

              <div>
                <h3 className="font-display text-xs font-extrabold tracking-widest text-gray-400 uppercase">
                  {tier.name}
                </h3>
                
                {/* Pricing amount */}
                <div className="mt-4 flex items-baseline">
                  {tier.price === 'Sur devis' ? (
                    <span className="text-3xl font-extrabold font-display text-gray-900">{tier.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold font-display tracking-tight text-gray-900">{tier.price}€</span>
                      <span className="ml-1 text-sm font-medium text-gray-500">/{tier.period}</span>
                    </>
                  )}
                </div>

                <p className="mt-3 text-xs text-gray-500 leading-relaxed min-h-[40px]">
                  {tier.description}
                </p>

                {/* Features list */}
                <ul className="mt-6 border-t border-gray-100 pt-6 space-y-3.5">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs text-gray-600">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenDemo(tier.id)}
                className={`mt-8 w-full rounded-xl py-3 text-xs font-bold transition-all active:scale-[0.98] cursor-pointer ${
                  tier.recommended
                    ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg'
                    : 'bg-slate-100 hover:bg-slate-200 text-gray-800'
                }`}
              >
                {tier.ctaText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Value Anchoring banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Value Anchoring Card */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-slate-800 shadow-md">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 text-[10px] font-bold text-emerald-400 mb-4">
                <TrendingUp className="h-3.5 w-3.5" />
                ANCRAGE DE VALEUR
              </div>
              <h4 className="font-display text-lg font-bold text-slate-100 mb-2.5">
                Une rentabilité mathématique immédiate
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Un consultant à 800€/jour qui gagne seulement 10 heures par semaine grâce à Deliverable Engine récupère l'équivalent de 55 jours de travail facturables, soit <strong className="text-emerald-400">32 000€ de CA additionnel par an.</strong>
              </p>
            </div>
            
            <p className="mt-6 text-xs text-slate-400 font-medium italic border-t border-slate-800 pt-4">
              L'abonnement annuel complet à Deliverable Engine représente moins de 5% de ce gain direct récupéré.
            </p>
          </div>

          {/* Right Column: Guarantee Card */}
          <div className="bg-emerald-50/50 border border-emerald-200/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-200 px-3 py-0.5 text-[10px] font-bold text-emerald-700 mb-4">
                <ShieldCheck className="h-3.5 w-3.5" />
                GARANTIE TOTALE
              </div>
              <h4 className="font-display text-lg font-bold text-emerald-950 mb-2.5">
                Satisfait ou remboursé sous 30 jours
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Notre promesse est simple : si le système Deliverable Engine ne s'adapte pas parfaitement à vos templates existants ou ne vous fait pas gagner un temps précieux dès votre premier mois d'utilisation, nous vous remboursons l'intégralité de votre mensualité. Un simple e-mail suffit. Sans discussion.
              </p>
            </div>
            
            <p className="mt-6 text-xs text-emerald-700/80 font-semibold border-t border-emerald-200/60 pt-4 flex items-center gap-1.5">
              <AlertCircle className="h-3.5 w-3.5 text-emerald-600" />
              Si ce n'est pas utile, on vous rembourse. Point.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
