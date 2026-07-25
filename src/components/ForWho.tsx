/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Building2, User, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ForWho() {
  const targets = [
    {
      title: "Consultants indépendants",
      icon: <UserCheck className="h-6 w-6 text-[#B8935A]" />,
      desc: "Qui veulent postuler aux meilleurs projets sans passer leurs soirs et week-ends sur Word."
    },
    {
      title: "Cabinets de 2 à 15 personnes",
      icon: <Building2 className="h-6 w-6 text-[#B8935A]" />,
      desc: "Souhaitant standardiser la qualité de leurs propales sans recruter un profil proposal dédié."
    },
    {
      title: "Freelances réguliers",
      icon: <User className="h-6 w-6 text-[#B8935A]" />,
      desc: "Qui répondent fréquemment à des appels d'offres publics ou privés et veulent multiplier leurs opportunités."
    },
    {
      title: "Experts surbookés",
      icon: <Clock className="h-6 w-6 text-[#B8935A]" />,
      desc: "Qui ont l'expertise métier mais n'ont pas le temps de rédiger des propositions de 15 pages."
    }
  ];

  return (
    <section id="pour-qui" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
            Cible & Cas d'usage
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B]">
            Conçu pour les indépendants et petits cabinets
          </h2>
          <p className="mt-4 text-base text-slate-600 font-sans">
            Un outil calibré pour ceux qui doivent être réactifs et compétitifs face à de plus structures.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {targets.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-200/90 p-6 rounded-2xl shadow-xs hover:border-[#B8935A] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B263B] flex items-center justify-center mb-4 text-white">
                {item.icon}
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-[#1B263B] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* High impact quote box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#1B263B] text-white p-8 sm:p-10 rounded-2xl border border-[#B8935A]/40 shadow-xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8935A]/10 rounded-full blur-2xl pointer-events-none" />
          <p className="font-serif-heading text-xl sm:text-2xl font-bold leading-relaxed text-[#B8935A]">
            « Tu n’as pas besoin d’une équipe proposal. <br className="hidden sm:inline" />
            Tu as besoin d’un outil qui fait le gros du travail. »
          </p>
          <p className="text-xs text-slate-300 mt-3 font-sans">
            Gagne la réactivité des petites structures avec la qualité de présentation des grands cabinets.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
