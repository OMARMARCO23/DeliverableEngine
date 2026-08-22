/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, FileText, Download, CheckCircle2, X, Sparkles, Building2, Briefcase, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { MASTER_MODELS, MasterModelData } from '../data';

export default function PdfPreviewSection() {
  const [selectedModelId, setSelectedModelId] = useState<string>('modele-sad');
  const [activeModalModel, setActiveModalModel] = useState<MasterModelData | null>(null);

  const activeModel = MASTER_MODELS.find((m) => m.id === selectedModelId) || MASTER_MODELS[0];

  const handleDownloadSample = (model: MasterModelData) => {
    // Open the PDF in a new tab or trigger direct download
    const link = document.createElement('a');
    link.href = model.downloadUrl;
    link.download = `${model.id}-deliverable-engine.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="apercu" className="py-20 lg:py-28 bg-white text-slate-900 overflow-hidden border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Main Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Eye className="h-3.5 w-3.5 text-[#B8935A]" />
            Aperçu de votre réponse
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B]">
            Ce que votre client va recevoir
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            Explorez les 2 structures maîtresses générées par Deliverable Engine : le <strong>Modèle Marché Public SAD</strong> et le <strong>Modèle Mission de Conseil</strong>.
          </p>
        </div>

        {/* Two Master Models Toggle Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-12">
          {MASTER_MODELS.map((model) => {
            const isSelected = model.id === selectedModelId;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`w-full sm:w-auto flex-1 py-4 px-6 rounded-2xl border-2 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xs ${
                  isSelected
                    ? 'border-[#B8935A] bg-[#1B263B] text-white ring-2 ring-[#B8935A]/30 shadow-md'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {model.type === 'sad' ? (
                  <Building2 className={`h-5 w-5 ${isSelected ? 'text-[#B8935A]' : 'text-slate-500'}`} />
                ) : (
                  <Briefcase className={`h-5 w-5 ${isSelected ? 'text-[#B8935A]' : 'text-slate-500'}`} />
                )}
                <div className="text-left">
                  <div className={`text-[10px] uppercase font-mono font-bold ${isSelected ? 'text-[#B8935A]' : 'text-slate-400'}`}>
                    {model.type === 'sad' ? 'Marché Public' : 'Prestations Intellectuelles'}
                  </div>
                  <div className="font-serif-heading text-sm font-bold leading-tight">
                    {model.type === 'sad' ? 'Modèle Généré SAD' : 'Modèle Généré Conseil'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Master Model Showcase Card */}
        <motion.div
          key={activeModel.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg"
        >
          {/* Model Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#B8935A] uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#B8935A]" />
                {activeModel.badge}
              </div>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1B263B]">
                {activeModel.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">
                {activeModel.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl">
                📄 {activeModel.estimatedPages}
              </span>
              <span className="text-xs font-mono font-bold bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-xl">
                ⚡ {activeModel.timeSaved}
              </span>
            </div>
          </div>

          {/* Model Summary & Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8 items-start">
            
            {/* Left: Sommaire type & Description */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                  Périmètre & Utilité du document
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  {activeModel.summary}
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B263B] font-mono flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#B8935A]" />
                  Sommaire type généré dans le PDF :
                </h4>
                <ul className="space-y-2 text-xs font-sans text-slate-700">
                  {activeModel.tableOfContents.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Sample Sections Excerpt Preview */}
            <div className="md:col-span-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Extraits de sections clés rédigées :
              </h4>

              {activeModel.sampleSections.map((sec, sIdx) => (
                <div key={sIdx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold bg-[#1B263B] text-[#B8935A] px-2 py-0.5 rounded">
                      Section {sec.number}
                    </span>
                    <span className="text-xs font-bold text-[#1B263B] font-serif-heading">
                      {sec.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 italic">
                    {sec.description}
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 font-sans leading-relaxed">
                    « {sec.keyExcerpt} »
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Action Buttons Row: Voir les détails + Télécharger */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-[#B8935A]" />
              <span>Document prêt à finaliser avec vos TJM, références et équipe</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setActiveModalModel(activeModel)}
                className="flex-1 sm:flex-initial py-3 px-5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Eye className="h-4 w-4 text-slate-500" />
                Examiner la structure complète
              </button>

              <button
                onClick={() => handleDownloadSample(activeModel)}
                className="flex-1 sm:flex-initial py-3 px-6 bg-[#1B263B] hover:bg-slate-800 text-[#B8935A] border border-[#B8935A]/60 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:border-[#B8935A]"
              >
                <Download className="h-4 w-4 text-[#B8935A]" />
                Télécharger le PDF d'exemple
              </button>
            </div>
          </div>
        </motion.div>

        {/* Reassurance Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-sans italic flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
            Modèles conformes Code de la commande publique (France) & Loi marchés publics du 17 juin 2016 (Belgique).
          </p>
        </div>

      </div>

      {/* --- Full Structure Modal --- */}
      <AnimatePresence>
        {activeModalModel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalModel(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-300 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="bg-[#1B263B] text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-700 shrink-0">
                <div>
                  <span className="text-xs font-mono font-bold text-[#B8935A] uppercase">
                    {activeModalModel.badge}
                  </span>
                  <h3 className="font-serif-heading text-lg font-bold text-white mt-1">
                    {activeModalModel.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalModel(null)}
                  className="text-slate-400 hover:text-white rounded-lg p-1.5 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-slate-50 space-y-6 text-xs sm:text-sm text-slate-700 font-sans">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="font-bold text-[#1B263B]">Sommaire exhaustif du document généré :</h4>
                  <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-700">
                    {activeModalModel.tableOfContents.map((toc, idx) => (
                      <li key={idx}><strong>{toc}</strong></li>
                    ))}
                  </ol>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-[#1B263B]">Points forts de la rédaction :</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalModel.highlights.map((h, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#B8935A]/10 border border-[#B8935A]/30 rounded-2xl flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-800">
                    Vous souhaitez tester ce modèle avec votre propre cahier des charges ?
                  </span>
                  <button
                    onClick={() => {
                      setActiveModalModel(null);
                      handleDownloadSample(activeModalModel);
                    }}
                    className="py-2 px-4 bg-[#1B263B] text-[#B8935A] rounded-xl text-xs font-bold hover:bg-slate-800 transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Télécharger
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
