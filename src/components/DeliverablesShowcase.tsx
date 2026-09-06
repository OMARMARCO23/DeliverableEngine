/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  Calendar,
  Calculator,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  ChevronRight,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';

interface DeliverablesShowcaseProps {
  onOpenGenerate?: () => void;
}

export default function DeliverablesShowcase({ onOpenGenerate }: DeliverablesShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'gantt' | 'finance'>('gantt');

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/docs/exemple-dossier-deliverable-engine.pdf';
    link.download = 'exemple-dossier-deliverable-engine.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="demo-visuelle" className="py-16 sm:py-24 bg-[#0B1320] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Architectural Grid & Subtle Amber Glow */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 h-[450px] w-[750px] rounded-full bg-[#B8935A]/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#B8935A]/15 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#D4AF37] mb-4 shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Extrait authentique du livrable</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Regardez ce que le moteur génère en <span className="text-[#B8935A]">5 minutes</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Consultez directement le dossier PDF d’exemple de 16 pages. Allez à la <strong>page du planning Gantt</strong> et de la <strong>décomposition financière</strong> : le niveau de détail méthodologique, les matrices de calcul et la rigueur de présentation parlent d’eux-mêmes.
          </p>

          {/* Primary Action Button directly to PDF */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={handleDownloadPdf}
              className="w-full sm:w-auto py-3.5 px-7 bg-[#B8935A] hover:bg-[#a17e47] text-[#1B263B] font-bold text-sm rounded-xl shadow-xl hover:shadow-[#B8935A]/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Download className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
              <span>Ouvrir le PDF d'exemple complet (16 pages)</span>
            </button>

            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="h-4 w-4 text-[#B8935A]" />
              Document réel issu du moteur · Téléchargement direct
            </span>
          </div>
        </div>

        {/* Tab Toggle between Gantt (Page 8) and Financial Offer (Page 12) */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab('gantt')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'gantt'
                ? 'bg-white text-[#1B263B] shadow-md'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/60'
            }`}
          >
            <Calendar className="h-4 w-4 text-[#B8935A]" />
            <span>Extrait : Planning Gantt (Page 8)</span>
          </button>

          <button
            onClick={() => setActiveTab('finance')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'finance'
                ? 'bg-white text-[#1B263B] shadow-md'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/60'
            }`}
          >
            <Calculator className="h-4 w-4 text-[#B8935A]" />
            <span>Extrait : Offre Financière (Page 12)</span>
          </button>
        </div>

        {/* DOCUMENT SHOWCASE CONTAINER (Rendered like an authentic PDF paper sheet) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 text-slate-900 overflow-hidden mb-12">
          
          {/* Document Sheet Top Header Bar */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 font-sans">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-semibold text-slate-800">
                {activeTab === 'gantt' ? 'Section 6 — Planning Prévisionnel & Cadencement' : 'Section 7 — Offre Financière & Grille TJM'}
              </span>
              <span className="hidden sm:inline-block text-slate-400">·</span>
              <span className="hidden sm:inline-block text-slate-500 font-mono">
                {activeTab === 'gantt' ? 'Page 8 sur 16' : 'Page 12 sur 16'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[#B8935A] bg-[#B8935A]/10 px-2.5 py-0.5 rounded-full border border-[#B8935A]/20">
                Conforme marchés publics & SAD
              </span>
              <button
                onClick={handleDownloadPdf}
                className="text-[11px] text-slate-600 hover:text-[#1B263B] font-medium flex items-center gap-1 cursor-pointer"
              >
                <span>Télécharger</span>
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* TAB 1: GANTT PLANNING (Exact reproduction of the user's attached image) */}
          {activeTab === 'gantt' && (
            <motion.div
              key="gantt-tab"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="p-4 sm:p-8 lg:p-10 font-sans"
            >
              {/* Document Section Heading */}
              <div className="mb-6">
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0F1F38] tracking-tight">
                  6. Planning Prévisionnel
                </h3>
                <div className="border-b-2 border-[#102A45] mt-2 mb-3" />
                <p className="text-xs sm:text-sm text-slate-700">
                  Le planning est cadencé sur 16 semaines (4 mois) avec un démarrage immédiat dès notification.
                </p>
              </div>

              {/* Exact Gantt Table from the User's Image */}
              <div className="overflow-x-auto rounded-lg border border-slate-300 shadow-xs">
                <table className="w-full min-w-[700px] border-collapse text-left text-xs font-sans">
                  
                  {/* Table Column Headers */}
                  <thead>
                    <tr className="bg-[#102A45] text-white font-semibold">
                      <th className="py-2.5 px-3.5 border-r border-[#1B3654] w-[46%] text-[11px] sm:text-xs">
                        Activité / Chantier / Jalons
                      </th>
                      <th className="py-2.5 px-3 text-center border-r border-[#1B3654] w-[13.5%] text-[11px] sm:text-xs">
                        Mois 1
                      </th>
                      <th className="py-2.5 px-3 text-center border-r border-[#1B3654] w-[13.5%] text-[11px] sm:text-xs">
                        Mois 2
                      </th>
                      <th className="py-2.5 px-3 text-center border-r border-[#1B3654] w-[13.5%] text-[11px] sm:text-xs">
                        Mois 3
                      </th>
                      <th className="py-2.5 px-3 text-center w-[13.5%] text-[11px] sm:text-xs">
                        Mois 4
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    
                    {/* PHASE 1 HEADER ROW */}
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="py-2 px-3.5 font-bold text-[#0F1F38] border-r border-slate-200">
                        Phase 1 : Cadrage, analyse et diagnostic organisationnel
                      </td>
                      <td className="py-2 px-2 border-r border-slate-200 text-center">
                        <div className="h-4 bg-[#2563EB] rounded-sm mx-auto w-10/12 shadow-xs" title="Phase 1 (Mois 1)" />
                      </td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2"></td>
                    </tr>

                    {/* Phase 1 - Travaux 1 */}
                    <tr className="border-b border-slate-200 hover:bg-slate-50/40">
                      <td className="py-1.5 px-3.5 text-slate-600 border-r border-slate-200 pl-6 text-[11px]">
                        ├── Travaux : Kick-off, cadrage et exploration via Grille de maturité organisationnelle
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200 text-center">
                        <div className="h-3 w-4 bg-slate-200/90 border border-slate-300 rounded-xs mx-auto" />
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2"></td>
                    </tr>

                    {/* Phase 1 - Travaux 2 */}
                    <tr className="border-b border-slate-200 hover:bg-slate-50/40">
                      <td className="py-1.5 px-3.5 text-slate-600 border-r border-slate-200 pl-6 text-[11px]">
                        ├── Travaux : Ateliers collaboratifs et diagnostic via Entretiens semi-directifs
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2"></td>
                    </tr>

                    {/* Phase 1 - Remise */}
                    <tr className="border-b border-slate-200 hover:bg-slate-50/40">
                      <td className="py-1.5 px-3.5 text-slate-700 font-medium border-r border-slate-200 pl-6 text-[11px]">
                        ├── Remise : Rapport de diagnostic organisationnel
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200 text-center text-[#2563EB] text-sm leading-none">
                        ◆
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2"></td>
                    </tr>

                    {/* Phase 1 - Jalon J1 */}
                    <tr className="border-b-2 border-slate-300 bg-blue-50/25 hover:bg-blue-50/40">
                      <td className="py-2 px-3.5 font-bold text-[#0F1F38] border-r border-slate-200 pl-6 text-[11px]">
                        └── Jalon : J1 — Validation du diagnostic (Acompte 30% : 36 300,00 €)
                      </td>
                      <td className="py-2 px-2 border-r border-slate-200 text-center text-[#102A45] text-sm leading-none font-bold">
                        ◆
                      </td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2"></td>
                    </tr>

                    {/* PHASE 2 HEADER ROW */}
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="py-2 px-3.5 font-bold text-[#0F1F38] border-r border-slate-200">
                        Phase 2 : Analyse des processus et co-construction des scénarios cibles
                      </td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 border-r border-slate-200 text-center">
                        <div className="h-4 bg-[#2563EB] rounded-sm mx-auto w-10/12 shadow-xs" title="Phase 2 (Mois 2)" />
                      </td>
                      <td className="py-2 px-2 border-r border-slate-200 text-center">
                        <div className="h-4 bg-[#2563EB] rounded-sm mx-auto w-10/12 shadow-xs" title="Phase 2 (Mois 3)" />
                      </td>
                      <td className="py-2 px-2"></td>
                    </tr>

                    {/* Phase 2 - Travaux 1 */}
                    <tr className="border-b border-slate-200 hover:bg-slate-50/40">
                      <td className="py-1.5 px-3.5 text-slate-600 border-r border-slate-200 pl-6 text-[11px]">
                        ├── Travaux : Kick-off, cadrage et exploration via BPMN 2.0 (Cartographie AS-IS / TO-BE)
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200 text-center">
                        <div className="h-3 w-4 bg-slate-200/90 border border-slate-300 rounded-xs mx-auto" />
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2"></td>
                    </tr>

                    {/* Phase 2 - Travaux 2 */}
                    <tr className="border-b border-slate-200 hover:bg-slate-50/40">
                      <td className="py-1.5 px-3.5 text-slate-600 border-r border-slate-200 pl-6 text-[11px]">
                        ├── Travaux : Ateliers collaboratifs et diagnostic via Matrice comparative des 3 scénarios
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200 text-center">
                        <div className="h-3 w-4 bg-slate-200/90 border border-slate-300 rounded-xs mx-auto" />
                      </td>
                      <td className="py-1.5 px-2"></td>
                    </tr>

                    {/* Phase 2 - Remise */}
                    <tr className="border-b border-slate-200 hover:bg-slate-50/40">
                      <td className="py-1.5 px-3.5 text-slate-700 font-medium border-r border-slate-200 pl-6 text-[11px]">
                        ├── Remise : Dossier de recommandations et scénarios cibles
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200 text-center text-[#2563EB] text-sm leading-none">
                        ◆
                      </td>
                      <td className="py-1.5 px-2"></td>
                    </tr>

                    {/* Phase 2 - Jalon J2 (Déclencheur facturation rouge) */}
                    <tr className="border-b-2 border-slate-300 bg-red-50/30 hover:bg-red-50/45">
                      <td className="py-2 px-3.5 font-bold text-[#DC2626] border-r border-slate-200 pl-6 text-[11px]">
                        └── Jalon : J2 — Arbitrage des scénarios [DÉCLENCHEUR FACTURATION 40% : 48 400,00 €]
                      </td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 border-r border-slate-200 text-center text-[#DC2626] text-sm leading-none font-bold">
                        ◆
                      </td>
                      <td className="py-2 px-2"></td>
                    </tr>

                    {/* PHASE 3 HEADER ROW */}
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="py-2 px-3.5 font-bold text-[#0F1F38] border-r border-slate-200">
                        Phase 3 : Formalisation de la feuille de route opérationnelle et plan de déploiement
                      </td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 text-center">
                        <div className="h-4 bg-[#102A45] rounded-sm mx-auto w-10/12 shadow-xs" title="Phase 3 (Mois 4)" />
                      </td>
                    </tr>

                    {/* Phase 3 - Travaux 1 */}
                    <tr className="border-b border-slate-200 hover:bg-slate-50/40">
                      <td className="py-1.5 px-3.5 text-slate-600 border-r border-slate-200 pl-6 text-[11px]">
                        ├── Travaux : Kick-off, cadrage et exploration via Modèle ADKAR
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 text-center">
                        <div className="h-3 w-4 bg-slate-200/90 border border-slate-300 rounded-xs mx-auto" />
                      </td>
                    </tr>

                    {/* Phase 3 - Travaux 2 */}
                    <tr className="border-b border-slate-200 hover:bg-slate-50/40">
                      <td className="py-1.5 px-3.5 text-slate-600 border-r border-slate-200 pl-6 text-[11px]">
                        ├── Travaux : Ateliers collaboratifs et diagnostic via Matrice Impact/Effort/Risque
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2"></td>
                    </tr>

                    {/* Phase 3 - Remise */}
                    <tr className="border-b border-slate-200 hover:bg-slate-50/40">
                      <td className="py-1.5 px-3.5 text-slate-700 font-medium border-r border-slate-200 pl-6 text-[11px]">
                        ├── Remise : Feuille de route opérationnelle et plan d'action
                      </td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 border-r border-slate-200"></td>
                      <td className="py-1.5 px-2 text-center text-[#102A45] text-sm leading-none">
                        ◆
                      </td>
                    </tr>

                    {/* Phase 3 - Jalon J3 */}
                    <tr className="bg-blue-50/25 hover:bg-blue-50/40">
                      <td className="py-2 px-3.5 font-bold text-[#0F1F38] border-r border-slate-200 pl-6 text-[11px]">
                        └── Jalon : J3 — Validation de la feuille de route (Solde 30% : 36 300,00 €)
                      </td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 border-r border-slate-200"></td>
                      <td className="py-2 px-2 text-center text-[#102A45] text-sm leading-none font-bold">
                        ◆
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              {/* Legend & Compliance Note */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 font-sans">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-4 h-2 bg-[#2563EB] rounded-xs" />
                    Barre de phase active
                  </span>
                  <span className="flex items-center gap-1 text-[#2563EB] font-bold">
                    ◆ Remise livrable
                  </span>
                  <span className="flex items-center gap-1 text-[#DC2626] font-bold">
                    ◆ Jalon déclencheur facturation
                  </span>
                </div>
                <span className="text-slate-600 font-medium">
                  Total facturation jalons : <strong>121 000,00 € HT</strong> (30% + 40% + 30%)
                </span>
              </div>
            </motion.div>
          )}

          {/* TAB 2: FINANCIAL BREAKDOWN (Page 12: Matches the 121 000,00 € HT total) */}
          {activeTab === 'finance' && (
            <motion.div
              key="finance-tab"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="p-4 sm:p-8 lg:p-10 font-sans"
            >
              <div className="mb-6">
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0F1F38] tracking-tight">
                  7. Décomposition du Prix Global & Forfaitaire (DPGF)
                </h3>
                <div className="border-b-2 border-[#102A45] mt-2 mb-3" />
                <p className="text-xs sm:text-sm text-slate-700">
                  Ventilation unitaire de l'effort par profil d'intervenant et échéancier de facturation lié aux jalons contractuels.
                </p>
              </div>

              {/* Financial Breakdown Table */}
              <div className="overflow-x-auto rounded-lg border border-slate-300 shadow-xs mb-6">
                <table className="w-full min-w-[600px] border-collapse text-left text-xs font-sans">
                  <thead>
                    <tr className="bg-[#102A45] text-white font-semibold">
                      <th className="py-2.5 px-3.5 border-r border-[#1B3654] w-[45%]">Profil & Qualification</th>
                      <th className="py-2.5 px-3 text-right border-r border-[#1B3654] w-[15%]">TJM Vendeur HT</th>
                      <th className="py-2.5 px-3 text-right border-r border-[#1B3654] w-[15%]">Charge estimée</th>
                      <th className="py-2.5 px-3.5 text-right w-[25%]">Montant Total HT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 hover:bg-slate-50/50">
                      <td className="py-2.5 px-3.5 font-medium text-slate-800 border-r border-slate-200">
                        Directeur de Mission / Associé (Pilotage stratégique, COPIL)
                      </td>
                      <td className="py-2.5 px-3 text-right text-slate-600 font-mono border-r border-slate-200">1 350,00 €</td>
                      <td className="py-2.5 px-3 text-right text-slate-600 font-mono border-r border-slate-200">20 jours</td>
                      <td className="py-2.5 px-3.5 text-right font-bold text-[#0F1F38] font-mono">27 000,00 €</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50/50">
                      <td className="py-2.5 px-3.5 font-medium text-slate-800 border-r border-slate-200">
                        Chef de Projet Senior (Animation ateliers BPMN, diagnostic, scénarios)
                      </td>
                      <td className="py-2.5 px-3 text-right text-slate-600 font-mono border-r border-slate-200">950,00 €</td>
                      <td className="py-2.5 px-3 text-right text-slate-600 font-mono border-r border-slate-200">60 jours</td>
                      <td className="py-2.5 px-3.5 text-right font-bold text-[#0F1F38] font-mono">57 000,00 €</td>
                    </tr>
                    <tr className="border-b-2 border-slate-300 hover:bg-slate-50/50">
                      <td className="py-2.5 px-3.5 font-medium text-slate-800 border-r border-slate-200">
                        Consultant Expert Métier & ADKAR (Feuille de route & plan de conduite)
                      </td>
                      <td className="py-2.5 px-3 text-right text-slate-600 font-mono border-r border-slate-200">740,00 €</td>
                      <td className="py-2.5 px-3 text-right text-slate-600 font-mono border-r border-slate-200">50 jours</td>
                      <td className="py-2.5 px-3.5 text-right font-bold text-[#0F1F38] font-mono">37 000,00 €</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold">
                      <td className="py-3 px-3.5 text-slate-900 border-r border-slate-300" colSpan={2}>
                        TOTAL PRESTATIONS INTELLECTUELLES FORFAITAIRE HT
                      </td>
                      <td className="py-3 px-3 text-right font-mono text-slate-700 border-r border-slate-300">130 jours</td>
                      <td className="py-3 px-3.5 text-right font-mono text-base text-[#102A45]">121 000,00 € HT</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Milestone Billing Synchronization Box */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs">
                <span className="font-bold text-[#0F1F38] block mb-2 font-serif-heading text-sm">
                  Échéancier de facturation cadencé sur les 3 jalons du Gantt :
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    <span className="text-slate-500 block text-[10px]">Acompte Jalon J1 (30%)</span>
                    <span className="font-bold text-sm font-mono text-[#102A45]">36 300,00 € HT</span>
                    <span className="text-[10px] text-slate-400 block mt-1">Validation diagnostic</span>
                  </div>
                  <div className="p-3 bg-red-50/60 rounded-lg border border-red-200 shadow-2xs">
                    <span className="text-red-700 font-semibold block text-[10px]">Déclencheur Jalon J2 (40%)</span>
                    <span className="font-bold text-sm font-mono text-[#DC2626]">48 400,00 € HT</span>
                    <span className="text-[10px] text-red-600 block mt-1">Arbitrage des scénarios</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    <span className="text-slate-500 block text-[10px]">Solde Jalon J3 (30%)</span>
                    <span className="font-bold text-sm font-mono text-[#102A45]">36 300,00 € HT</span>
                    <span className="text-[10px] text-slate-400 block mt-1">Validation feuille de route</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* Bottom Banner with Direct Call to Action */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-slate-900 via-[#1B263B] to-slate-900 border border-[#B8935A]/40 p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#B8935A]/20 flex items-center justify-center text-[#B8935A] shrink-0 border border-[#B8935A]/30">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-serif-heading text-sm sm:text-base font-bold text-white">
                Besoin de répondre à un appel d'offres maintenant ?
              </h4>
              <p className="text-xs text-slate-400 font-sans">
                Générez votre propre dossier complet au format PDF en moins de 5 minutes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            {onOpenGenerate && (
              <button
                onClick={onOpenGenerate}
                className="w-full sm:w-auto py-2.5 px-5 bg-[#B8935A] hover:bg-[#a17e47] text-[#1B263B] text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Profiter de l'offre de lancement (19 €)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
