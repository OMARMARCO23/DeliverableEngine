/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Download,
  CheckCircle2,
  Sparkles,
  Building2,
  Briefcase,
  ShieldCheck,
  Clock,
  Calculator,
  Quote,
  Layers
} from 'lucide-react';

export default function PdfPreviewSection() {
  const handleDownloadSample = () => {
    const link = document.createElement('a');
    link.href = '/docs/rfp-sante-genere.pdf';
    link.download = 'exemple-dossier-deliverable-engine.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const consultationTypes = [
    {
      type: 'Marché Public (MAPA)',
      badge: 'Procédure Adaptée',
      icon: <Building2 className="h-4 w-4 text-[#B8935A]" />,
      doc: 'Dossier de réponse complet',
      useCase: 'BOAMP, marches-publics.gouv.fr, consultations locales'
    },
    {
      type: 'SAD / Accord-cadre',
      badge: 'Système d\'Acquisition Dynamique',
      icon: <Layers className="h-4 w-4 text-[#B8935A]" />,
      doc: 'Dossier de candidature & qualification',
      useCase: 'Référencement par lots, marchés subséquents'
    },
    {
      type: 'Consultation & Conseil',
      badge: 'Prestations Intellectuelles',
      icon: <Briefcase className="h-4 w-4 text-[#B8935A]" />,
      doc: 'Proposition d\'intervention',
      useCase: 'Missions privées, consultations directes, briefs clients'
    }
  ];

  const mapaConseilSections = [
    'Lettre de transmission & candidature',
    'Synthèse exécutive & résultats attendus',
    'Enjeux & compréhension du besoin',
    'Alignement aux objectifs de la mission',
    'Démarche d\'intervention & méthodologie (3 phases)',
    'Équipe dédiée & compétences mobilisées',
    'Planning prévisionnel & jalons',
    'Gouvernance & pilotage',
    'Analyse des risques',
    'Qualité, confidentialité & RGPD',
    'Proposition financière (TJM, ventilation, échéancier)',
    'Engagement du cabinet & conditions générales',
    'Annexes & pièces justificatives'
  ];

  const sadSections = [
    'Lettre de candidature au SAD',
    'Présentation du cabinet & certifications',
    'Fiches de qualification par lot',
    'Grille tarifaire (BPU / TJM)',
    'Moyens techniques',
    'Engagement & conditions générales',
    'Annexes & pièces justificatives'
  ];

  const keyPoints = [
    'Structure conforme aux exigences des acheteurs publics et privés',
    'Décomposition financière par profil, par phase et par échéance (30/40/30)',
    'Méthodologie contextualisée : 4 outils maximum, justifiés par le besoin réel du client',
    'Équipe chiffrée : TJM réels, charge en jours, ventilation par phase',
    'Clauses juridiques : obligation de moyens, propriété intellectuelle, résiliation, force majeure, RGPD',
    "Ton direct & factuel : langage professionnel calibré pour faciliter la notation par la commission d'appel d'offres"
  ];

  return (
    <section id="apercu" className="py-20 lg:py-28 bg-white text-slate-900 overflow-hidden border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <FileText className="h-3.5 w-3.5 text-[#B8935A]" />
            Architecture des livrables
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B] tracking-tight">
            Périmètre & Utilité du document
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            Notre moteur génère 3 types de dossiers professionnels, automatiquement adaptés au type de consultation que vous avez sélectionnée :
          </p>
        </div>

        {/* Tableau récapitulatif des 3 branches */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#1B263B] text-white">
                    <th scope="col" className="py-4 px-5 text-xs font-mono font-bold uppercase tracking-wider">
                      Type de consultation
                    </th>
                    <th scope="col" className="py-4 px-5 text-xs font-mono font-bold uppercase tracking-wider text-[#B8935A]">
                      Document généré
                    </th>
                    <th scope="col" className="py-4 px-5 text-xs font-mono font-bold uppercase tracking-wider">
                      Cas d'usage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {consultationTypes.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-5 align-top">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-[#B8935A]/10 shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <span className="font-serif-heading text-sm font-bold text-[#1B263B] block">
                              {item.type}
                            </span>
                            <span className="text-[11px] text-slate-400 font-mono">
                              {item.badge}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5 align-top">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-xs sm:text-sm text-[#1B263B] bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          {item.doc}
                        </span>
                      </td>
                      <td className="py-4 px-5 align-top text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.useCase}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sommaires Types en 2 colonnes */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Sommaire MAPA / Conseil (15-18 pages) */}
            <div className="md:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B8935A] bg-[#B8935A]/10 px-2.5 py-1 rounded-full">
                    Marchés Publics & Privés
                  </span>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#1B263B] mt-2">
                    Sommaire type — Dossier MAPA / Conseil
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold bg-[#1B263B] text-white px-3 py-1 rounded-xl shrink-0">
                  15-18 pages
                </span>
              </div>

              <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                {mapaConseilSections.map((sec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-[11px] font-bold text-[#B8935A] bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-snug text-slate-800">{sec}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sommaire SAD (8-12 pages) */}
            <div className="md:col-span-5 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                    Accords-cadres & Qualification
                  </span>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#1B263B] mt-2">
                    Sommaire type — Dossier SAD
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-xl shrink-0">
                  8-12 pages
                </span>
              </div>

              <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                {sadSections.map((sec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-[11px] font-bold text-slate-600 bg-white border border-slate-200 rounded px-1.5 py-0.5 shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-snug text-slate-800">{sec}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>

        {/* Points clés de chaque réponse générée */}
        <div className="max-w-5xl mx-auto mb-14 bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B8935A] block mb-1">
              Exigences méthodologiques
            </span>
            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1B263B]">
              Points clés de chaque réponse générée
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3"
              >
                <CheckCircle2 className="h-4 w-4 text-[#B8935A] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Exemple de ton rédactionnel */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="bg-[#1B263B] text-white rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B8935A] uppercase tracking-wider mb-4">
              <Quote className="h-4 w-4 text-[#B8935A]" />
              Exemple de ton rédactionnel
            </div>

            <blockquote className="text-sm sm:text-base md:text-lg text-slate-200 font-serif-heading italic leading-relaxed pl-4 border-l-2 border-[#B8935A]">
              « Notre intervention, prévue sur une durée de quatre mois, s'appuie sur une démarche de diagnostic, de co-construction et de priorisation. Elle vise à produire des recommandations réalistes, adaptées à vos contraintes opérationnelles, organisationnelles et budgétaires. »
            </blockquote>

            <p className="mt-4 text-xs text-slate-400 font-sans">
              Formulation directe, précise et orientée résultats, conçue pour rassurer l'acheteur et valoriser votre crédibilité.
            </p>
          </div>
        </div>

        {/* Format & livraison + Téléchargement direct */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-[#B8935A]/30 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1B263B] uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
                  Format & livraison
                </div>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1B263B]">
                  Livrable prêt à l'emploi en moins de 5 minutes
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-sans">
                  <li className="flex items-start gap-2">
                    <FileText className="h-4 w-4 text-[#B8935A] shrink-0 mt-0.5" />
                    <span>PDF professionnel de 15 à 18 pages, prêt à compléter avec vos éléments administratifs (Kbis, attestations, CV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-[#B8935A] shrink-0 mt-0.5" />
                    <span>Livraison par email en moins de 5 minutes après paiement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calculator className="h-4 w-4 text-[#B8935A] shrink-0 mt-0.5" />
                    <span>Montants calculés au centime près, cohérence financière vérifiée automatiquement</span>
                  </li>
                </ul>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                <button
                  onClick={handleDownloadSample}
                  className="py-3.5 px-6 bg-[#1B263B] hover:bg-slate-800 text-[#B8935A] border border-[#B8935A]/60 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-md hover:border-[#B8935A]"
                >
                  <Download className="h-4 w-4 text-[#B8935A]" />
                  <span>Télécharger le PDF d'exemple</span>
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Exemple réel généré par le moteur</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
