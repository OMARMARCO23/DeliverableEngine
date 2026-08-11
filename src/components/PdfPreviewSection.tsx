/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Eye,
  FileText,
  Download,
  Stethoscope,
  Building2,
  Cpu,
  ArrowRight,
  Check
} from 'lucide-react';

interface SectorExample {
  id: string;
  sector: string;
  icon: React.ReactNode;
  client: string;
  stats: string;
  highlights: string[];
  sourceUrl: string;
  generatedUrl: string;
}

const SECTORS: SectorExample[] = [
  {
    id: 'sante',
    sector: 'Santé',
    icon: <Stethoscope className="h-5 w-5" />,
    client: 'Centre Hospitalier Universitaire de Valméranr',
    stats: '8 500 agents · 14 mois · 380 000 – 620 000 € HT',
    highlights: [
      'Terminologie santé (agents, SIH, parcours patient)',
      'Budget et dates extraits automatiquement',
      '9 sections structurées — planning, risques, gouvernance'
    ],
    sourceUrl: '/docs/AppelDoffreSanteSource.pdf',
    generatedUrl: '/docs/rfp-sante-genere.pdf'
  },
  {
    id: 'digital',
    sector: 'Transformation Digitale',
    icon: <Cpu className="h-5 w-5" />,
    client: 'Groupe Meridian',
    stats: '1 200 collaborateurs · 22 mois · 950 000 – 1 600 000 € HT',
    highlights: [
      '9 sites, 4 000 commandes/mois détectés',
      'Compatibilité SAP intégrée dans la proposition',
      'Méthodologie en 6 phases avec planning détaillé'
    ],
    sourceUrl: '/docs/AppelDoffreDigitSource.pdf',
    generatedUrl: '/docs/rfp-digital-genere.pdf'
  },
  {
    id: 'btp',
    sector: 'BTP / Construction',
    icon: <Building2 className="h-5 w-5" />,
    client: 'BatiNova',
    stats: '680 collaborateurs · 20 mois · 850 000 – 1 400 000 € HT',
    highlights: [
      'Vocabulaire BTP (chantiers, agences régionales)',
      'Extraction automatique des données du RFP',
      'Matrice des risques et gouvernance projet'
    ],
    sourceUrl: '/docs/AppelDoffreBTPSource.pdf',
    generatedUrl: '/docs/rfp-btp-genere.pdf'
  }
];

export default function PdfPreviewSection() {
  return (
    <section
      id="apercu"
      className="py-20 lg:py-28 bg-white text-slate-900 border-y border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">

        {/* Titre de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full
                          bg-[#B8935A]/10 border border-[#B8935A]/30
                          px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Eye className="h-3.5 w-3.5 text-[#B8935A]" />
            Exemples réels
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl
                         font-extrabold text-[#1B263B]">
            Appel d'offres → Réponse PDF
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Pour chaque secteur ci-dessous, téléchargez l'appel d'offres source
            et la réponse générée par Deliverable Engine.
            Comparez vous-même.
          </p>
        </div>

        {/* Grille 3 secteurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SECTORS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="flex flex-col rounded-2xl border border-slate-200
                         hover:border-[#B8935A] bg-white shadow-sm
                         hover:shadow-lg transition-all"
            >
              {/* En-tête de carte */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-[#B8935A]/10 rounded-xl
                                  text-[#B8935A] border border-[#B8935A]/20">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400
                                  uppercase tracking-wider">
                      Secteur
                    </p>
                    <h3 className="font-serif-heading text-lg font-bold
                                   text-[#1B263B] leading-tight">
                      {item.sector}
                    </h3>
                  </div>
                </div>

                {/* Client et chiffres */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-[#1B263B]">
                    {item.client}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 font-mono">
                    {item.stats}
                  </p>
                </div>

                {/* Points clés */}
                <ul className="space-y-2 mb-2">
                  {item.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs
                                           text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-emerald-50
                                      flex items-center justify-center
                                      shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-emerald-600
                                          stroke-[3]" />
                      </div>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Boutons */}
              <div className="mt-auto p-6 pt-4 border-t border-slate-100
                              space-y-2.5">
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-slate-50 hover:bg-slate-100
                             text-slate-700 border border-slate-200
                             rounded-xl text-xs font-bold transition-all
                             flex items-center justify-center gap-2"
                >
                  <FileText className="h-3.5 w-3.5 text-slate-400" />
                  Appel d'offres source
                  <ArrowRight className="h-3 w-3 text-slate-400" />
                </a>

                <a
                  href={item.generatedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-[#1B263B] hover:bg-slate-800
                             text-[#B8935A] border border-[#B8935A]/30
                             rounded-xl text-xs font-bold transition-all
                             flex items-center justify-center gap-2"
                >
                  <Download className="h-3.5 w-3.5 text-[#B8935A]" />
                  Réponse générée (PDF)
                  <ArrowRight className="h-3 w-3 text-[#B8935A]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note bas de section */}
        <p className="mt-10 text-center text-xs text-slate-400 italic">
          Documents générés à partir d'appels d'offres fictifs
          à but démonstratif.
        </p>

      </div>
    </section>
  );
}
