/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Clock, CheckSquare, ShieldCheck, FileCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Solution() {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-[#B8935A]" />,
      title: "Gain de temps massif",
      desc: "Passe de 8 à 20 heures de rédaction à moins de 10 minutes."
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-[#B8935A]" />,
      title: "Réponse structurée et professionnelle",
      desc: "Une propale claire, orientée bénéfices client, avec les bonnes sections au bon endroit."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#B8935A]" />,
      title: "Conformité renforcée",
      desc: "L’IA repère les exigences clés du RFP et t’aide à y répondre point par point."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-[#B8935A]" />,
      title: "Document prêt à envoyer",
      desc: "PDF haute qualité + version éditable. Tu n’as plus qu’à relire et ajuster."
    }
  ];

  return (
    <section id="benefices" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
            Bénéfices & Valeur Ajoutée
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B]">
            Ce que tu gagnes vraiment
          </h2>
          <p className="mt-4 text-base text-slate-600 font-sans">
            Ne perds plus des journées entières sur des propales qui ne sont même pas garanties de signer. Concentre ton temps sur ta vraie valeur.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all hover:border-[#B8935A]/40 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1B263B] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-[#1B263B] group-hover:text-[#B8935A] transition-colors">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Prêt à l'emploi</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

