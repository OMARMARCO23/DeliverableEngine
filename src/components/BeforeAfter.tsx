/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, Clock, Calendar, ThumbsDown, ThumbsUp } from 'lucide-react';

export default function BeforeAfter() {
  const beforePoints = [
    {
      title: "10 heures perdues / semaine",
      desc: "Soirées et week-ends passés à rédiger des livrables administratifs répétitifs."
    },
    {
      title: "Réactivité commerciale ralentie",
      desc: "Attendre 3 jours pour envoyer une propale, risquant de refroidir le prospect."
    },
    {
      title: "Formulations irrégulières",
      desc: "Fatigue qui altère le style, oubli de sections de méthodologie clés."
    },
    {
      title: "Frictions de copier-coller",
      desc: "Risque de laisser le nom d'un ancien client ou un mauvais montant dans un template."
    }
  ];

  const afterPoints = [
    {
      title: "Libéré en 10 minutes",
      desc: "Un simple enregistrement vocal ou brief brut, et le document est prêt."
    },
    {
      title: "Envoi à chaud au client",
      desc: "Propale envoyée 1 heure après le rendez-vous d'avant-vente pour clore la vente."
    },
    {
      title: "Rigueur méthodologique à 100%",
      desc: "Structure toujours impeccable, charte respectée et ton de voix professionnel garanti."
    },
    {
      title: "Intégrité des données",
      desc: "Aucune erreur d'inattention, gestion parfaite des variables client."
    }
  ];

  return (
    <section id="comparaison" className="py-20 lg:py-28 bg-white border-y border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 fill-indigo-600" />
            La méthode moderne
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            La différence est <span className="text-indigo-600">sans appel</span>
          </h2>
          <p className="mt-4 text-slate-500">
            Comparez le quotidien d'un consultant avant et après l'adoption de Deliverable Engine.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
          {/* Centered versus badge */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white font-display font-extrabold text-sm border-4 border-white shadow-md">
            VS
          </div>

          {/* BEFORE: Manual writing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-red-100 bg-red-50/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-red-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-600">
                    <ThumbsDown className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-red-500 uppercase font-bold">L'ANCIEN SYSTÈME</span>
                    <h3 className="text-xl font-bold text-slate-900">Rédiger manuellement</h3>
                  </div>
                </div>
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-[10px] font-bold text-red-800">
                  Subi
                </span>
              </div>

              {/* Points list */}
              <div className="mt-8 space-y-6">
                {beforePoints.map((pt, idx) => (
                  <div key={idx} className="flex gap-3">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">{pt.title}</h4>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-red-50 border border-red-100/50 flex items-start gap-2.5">
              <AlertTriangle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
              <p className="text-xs text-red-800 font-medium leading-normal">
                Verdict : Un manque à gagner de plus de 15 000€ par an de temps facturable converti en corvée administrative.
              </p>
            </div>
          </motion.div>

          {/* AFTER: Deliverable Engine */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-emerald-200 bg-emerald-50/5 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative"
          >
            {/* Top highlight glow */}
            <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <ThumbsUp className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-emerald-600 uppercase font-bold">AVEC DELIVERABLE ENGINE</span>
                    <h3 className="text-xl font-bold text-slate-900">L'automatisation intelligente</h3>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                  Libéré
                </span>
              </div>

              {/* Points list */}
              <div className="mt-8 space-y-6">
                {afterPoints.map((pt, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">{pt.title}</h4>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-start gap-2.5">
              <Sparkles className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-800 font-medium leading-normal">
                Verdict : Vous vous concentrez uniquement sur la valeur, le conseil et la relation client. Les heures administratives disparaissent.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
