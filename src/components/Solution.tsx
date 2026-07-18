/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, FileSpreadsheet, Mail, Cloud, Feather, FileText, BarChart3, ClipboardList, Layers, BookOpen, Sparkles } from 'lucide-react';

export default function Solution() {
  const deliverableTypes = [
    {
      icon: <FileText className="h-5 w-5 text-indigo-600" />,
      title: "Propositions commerciales",
      desc: "Des propales impactantes adaptées à l'expression de besoin du client, avec chiffrage et planification cohérents."
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-indigo-600" />,
      title: "Rapports de mission",
      desc: "Rapports d'audit, analyses de risques ou d'architecture structurés selon vos grilles d'évaluation."
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-600" />,
      title: "Comptes-rendus de réunion",
      desc: "CR de COPIL ou de workshops synthétiques avec plans d'action clairs, assignations et dates d'échéances."
    },
    {
      icon: <Layers className="h-5 w-5 text-indigo-600" />,
      title: "Notes de synthèse",
      desc: "Résumés d'études complexes, notes de cadrage pour décideurs ou documents d'aide à la décision."
    },
    {
      icon: <BookOpen className="h-5 w-5 text-emerald-600" />,
      title: "Fiches méthodologiques",
      desc: "Fiches explicatives de vos frameworks d'intervention pour onboarding client ou supports d'ateliers."
    }
  ];

  const differentiators = [
    {
      icon: <Feather className="h-4 w-4 text-emerald-600" />,
      title: "Adapté à VOTRE style d'écriture",
      desc: "Pas d'effet 'généré par IA'. L'algorithme apprend vos tournures de phrases, votre vocabulaire et vos structures types."
    },
    {
      icon: <ShieldCheck className="h-4 w-4 text-emerald-600" />,
      title: "Vos données restent privées",
      desc: "Sécurité absolue. Aucun stockage de données confidentielles et aucune réutilisation pour de l'apprentissage public."
    },
    {
      icon: <FileSpreadsheet className="h-4 w-4 text-emerald-600" />,
      title: "Document Google Docs prêt",
      desc: "Le document final est livré directement formaté dans votre espace Google Drive, prêt à être relu et partagé."
    },
    {
      icon: <Mail className="h-4 w-4 text-emerald-600" />,
      title: "Notification email quand c'est prêt",
      desc: "Pas besoin d'attendre. Vous recevez un email contenant le lien d'accès sécurisé dès que la double validation IA se termine."
    },
    {
      icon: <Cloud className="h-4 w-4 text-emerald-600" />,
      title: "Aucune installation",
      desc: "Tout se passe de manière transparente dans le cloud. Accédez au service depuis n'importe quel navigateur, mobile ou tablette."
    }
  ];

  return (
    <section id="solution" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Intro Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 mb-4">
              <Feather className="h-3.5 w-3.5" />
              L'IA sur-mesure
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl leading-tight">
              Un assistant IA qui <span className="text-indigo-600">pense comme vous</span>
            </h2>
          </div>
          <div className="lg:col-span-6 text-gray-600 text-base leading-relaxed">
            <p className="font-medium text-gray-900 mb-2">
              Deliverable Engine est un agent IA configuré de manière unique avec VOTRE ton, VOS templates et VOTRE méthodologie.
            </p>
            <p>
              Il ne produit pas du contenu générique ou passe-partout. Il génère vos propres livrables, rédigés exactement comme vous l'auriez fait vous-même après plusieurs heures de travail intensif, mais en seulement 10 minutes de calcul automatisé.
            </p>
          </div>
        </div>

        {/* Deliverable types & differentiators side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Deliverables Grid Left (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-6">
              5 types de livrables pris en charge d'office
            </h3>
            <div className="space-y-4">
              {deliverableTypes.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 bg-slate-50/20 hover:bg-slate-50/50 transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-200/80 shadow-xs group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Differentiators Right (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-gray-50 border border-gray-200/60 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-sm font-extrabold font-display text-gray-900 mb-6 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-emerald-500" />
              Ce qui nous rend uniques
            </h3>
            <div className="space-y-5">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      {diff.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
