/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, CheckCircle2, TrendingUp, DollarSign } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  tjm: string;
  statResult: string;
  statLabel: string;
  quote: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Julien Lemoine",
    role: "Consultant Senior en Stratégie IT",
    tjm: "950 € / jour",
    statResult: "+14 heures",
    statLabel: "libérées par semaine",
    quote: "La rédaction de propositions commerciales complexes me prenait une partie importante de mes dimanches. Avec Deliverable Engine, mes briefs vocaux de 5 minutes se transforment en documents de 20 pages parfaitement structurés. Je gagne l'équivalent de 1,5 jour de travail par semaine.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Sophie Masson",
    role: "Consultante RH & Transformation",
    tjm: "750 € / jour",
    statResult: "+3 propales",
    statLabel: "gagnées ce trimestre",
    quote: "Mes comptes-rendus de comités de pilotage sont rédigés et mis en page 10 minutes après la fin de la séance. Les clients adorent cette réactivité extrême, ce qui m'a permis de remporter la prolongation de 3 gros contrats grâce à mon professionnalisme.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Alexandre Dubois",
    role: "Auditeur Cybersécurité Indépendant",
    tjm: "1 100 € / jour",
    statResult: "ROI de 820%",
    statLabel: "amorti dès le 1er mois",
    quote: "Les rapports d'audit technique sont répétitifs et longs à mettre en forme. Je délègue toute la rédaction brute à l'agent IA, qui applique mes grilles de risques de sécurité au mot près. Je ne passe plus que 20 minutes à relire et finaliser au lieu de 4 heures.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <Star className="h-3.5 w-3.5 text-indigo-600 fill-indigo-600 animate-pulse" />
            Paroles de consultants
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ils ont récupéré leurs <span className="text-indigo-600">soirées et week-ends</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Découvrez comment trois consultants maximisent leur productivité et leur TJM grâce à Deliverable Engine.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-all relative"
            >
              {/* Quote decorator icon */}
              <div className="absolute top-6 right-6 opacity-5 text-indigo-600 pointer-events-none">
                <Quote className="h-16 w-16 rotate-180" />
              </div>

              <div>
                {/* Visual Quantitative Result */}
                <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-1.5 mb-6">
                  <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-extrabold text-emerald-800 block leading-tight">
                      {test.statResult}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 block leading-tight">
                      {test.statLabel}
                    </span>
                  </div>
                </div>

                {/* Quote description */}
                <p className="text-xs text-slate-600 leading-relaxed italic mb-8 relative z-10">
                  "{test.quote}"
                </p>
              </div>

              {/* Profile section with portrait + name + TJM */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                <img
                  src={test.imageUrl}
                  alt={`${test.name} - Portrait`}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-100 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-display font-bold text-xs text-gray-900">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold mb-0.5">
                    {test.role}
                  </p>
                  
                  {/* TJM display */}
                  <span className="inline-flex items-center gap-1 rounded bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 text-[9px] font-bold text-indigo-700 font-mono">
                    <DollarSign className="h-2.5 w-2.5" />
                    TJM : {test.tjm}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
