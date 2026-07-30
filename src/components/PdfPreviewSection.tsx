import React from 'react';
import { motion } from 'motion/react';
import { Eye, FileCheck, Sparkles, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

export default function PdfPreviewSection() {
  return (
    <section id="apercu" className="py-20 lg:py-28 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Eye className="h-3.5 w-3.5 text-[#B8935A]" />
            Aperçu de votre réponse
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B]">
            Ce que votre client va recevoir
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans">
            Un document PDF haute qualité, personnalisé avec votre profil, structuré selon les standards des plus grands cabinets de conseil.
          </p>
        </div>

        {/* Laptop / PDF Mockup Container with Annotations */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Document Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-2xl relative"
          >
            {/* Toolbar simulation */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-[#B8935A]" />
                <span className="font-bold text-slate-800">Reponse_Appel_Offres_Final.pdf</span>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                ✓ Prêt à l'envoi (10 sections)
              </span>
            </div>

            {/* Document Content Mockup Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Page 1: Page de garde */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group hover:border-[#B8935A] transition-colors">
                <div className="text-[10px] uppercase font-mono text-[#B8935A] font-bold mb-2">Page 1</div>
                <div className="h-4 w-3/4 bg-[#1B263B] rounded mb-3" />
                <div className="h-2.5 w-1/2 bg-[#B8935A] rounded mb-6" />
                <div className="space-y-2 mb-8">
                  <div className="h-2 bg-slate-100 rounded w-full" />
                  <div className="h-2 bg-slate-100 rounded w-5/6" />
                  <div className="h-2 bg-slate-100 rounded w-4/6" />
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100 text-[10px] text-slate-600">
                  <p className="font-bold text-[#1B263B] mb-1">PROPOSITION TECHNIQUE & FINANCIÈRE</p>
                  <p>Préparé par votre profil consultant</p>
                </div>

                {/* Annotation Badge 1 */}
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#1B263B] bg-[#B8935A]/15 border border-[#B8935A]/40 p-2 rounded-lg">
                  <ArrowRight className="h-3.5 w-3.5 text-[#B8935A] shrink-0" />
                  <span>Page de garde professionnelle</span>
                </div>
              </div>

              {/* Page 2: Analyse du besoin */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group hover:border-[#B8935A] transition-colors">
                <div className="text-[10px] uppercase font-mono text-[#B8935A] font-bold mb-2">Page 2</div>
                <div className="h-3.5 w-2/3 bg-[#1B263B] rounded mb-3" />
                <div className="space-y-2 mb-6">
                  <div className="h-2 bg-slate-200 rounded w-full" />
                  <div className="h-2 bg-slate-100 rounded w-11/12" />
                  <div className="h-2 bg-slate-100 rounded w-4/5" />
                </div>
                <div className="space-y-1.5 bg-blue-50/60 p-3 rounded border border-blue-100 text-[10px] text-slate-700">
                  <span className="font-bold text-blue-900 block">Compréhension des enjeux :</span>
                  <div className="h-1.5 bg-blue-200 rounded w-full" />
                  <div className="h-1.5 bg-blue-200 rounded w-4/5" />
                </div>

                {/* Annotation Badge 2 */}
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#1B263B] bg-[#B8935A]/15 border border-[#B8935A]/40 p-2 rounded-lg">
                  <ArrowRight className="h-3.5 w-3.5 text-[#B8935A] shrink-0" />
                  <span>Analyse structurée du besoin</span>
                </div>
              </div>

              {/* Page 3: Planning & Proposition */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group hover:border-[#B8935A] transition-colors">
                <div className="text-[10px] uppercase font-mono text-[#B8935A] font-bold mb-2">Page 3 à 10</div>
                <div className="h-3.5 w-3/4 bg-[#1B263B] rounded mb-3" />
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    <div className="h-2 bg-slate-200 rounded w-full" />
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    <div className="h-2 bg-slate-200 rounded w-5/6" />
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    <div className="h-2 bg-slate-200 rounded w-4/5" />
                  </div>
                </div>

                <div className="p-2.5 bg-amber-50 rounded border border-amber-200 text-[10px] font-mono text-amber-900">
                  Planning prévisionnel & Livrables
                </div>

                {/* Annotation Badge 3 */}
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#1B263B] bg-[#B8935A]/15 border border-[#B8935A]/40 p-2 rounded-lg">
                  <ArrowRight className="h-3.5 w-3.5 text-[#B8935A] shrink-0" />
                  <span>Proposition détaillée en 10 sections</span>
                </div>
              </div>

            </div>

            {/* Micro bottom highlight */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 font-sans">
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#B8935A]" />
                Design soigné, typographie équilibrée, mise en page corporate sans effort.
              </span>
              <span className="font-bold text-[#1B263B]">
                Format PDF + version éditable reçus par email en 5 min.
              </span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
