/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  CheckCircle2,
  Mail,
  Clock,
  FileCheck,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';

interface MerciPageProps {
  onGoHome: () => void;
}

export default function MerciPage({ onGoHome }: MerciPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      {/* Header Bar */}
      <header className="bg-[#1B263B] text-white py-4 px-6 border-b border-slate-700/80 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onGoHome}>
            <div className="w-7 h-7 rounded-lg bg-[#B8935A] text-[#1B263B] font-bold flex items-center justify-center text-sm font-serif-heading">
              R
            </div>
            <span className="font-serif-heading text-xl font-bold tracking-tight text-white">
              RFP<span className="text-[#B8935A]">Engine</span>
            </span>
          </div>

          <button
            onClick={onGoHome}
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour à l'accueil
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-12 sm:py-16 flex flex-col items-center">
        {/* Animated Badge */}
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border-4 border-emerald-200 shadow-xl mb-6">
          <CheckCircle2 className="h-12 w-12" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8935A]/15 text-[#B8935A] border border-[#B8935A]/30 text-xs font-bold mb-4 font-mono">
          <Sparkles className="h-3.5 w-3.5" />
          Paiement confirmé · Commande validée
        </div>

        <h1 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#1B263B] text-center tracking-tight">
          Merci pour votre confiance !
        </h1>
        
        <p className="mt-3 text-slate-600 text-center max-w-lg text-sm sm:text-base">
          Votre paiement a bien été traité. Notre moteur IA est déjà en train de rédiger votre réponse à l’appel d’offres.
        </p>

        {/* Status Card */}
        <div className="mt-8 w-full bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#1B263B] text-[#B8935A] flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#1B263B] text-sm sm:text-base">
                Livraison directement par e-mail
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Vous allez recevoir votre livrable sur l’adresse renseignée lors de la commande.
              </p>
            </div>
          </div>

          {/* Timeline Steps */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Que se passe-t-il actuellement ?
            </h4>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs font-mono">
                  1
                </div>
                <div>
                  <p className="font-bold text-slate-800">Extraction & Analyse du RFP</p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Analyse approfondie du cahier des charges et identification des critères clés.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#B8935A]/20 text-[#B8935A] font-bold flex items-center justify-center shrink-0 text-xs font-mono">
                  2
                </div>
                <div>
                  <p className="font-bold text-slate-800">Rédaction sur-mesure</p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Mise en valeur de votre positionnement, méthodologie et arguments différenciants.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center shrink-0 text-xs font-mono">
                  3
                </div>
                <div>
                  <p className="font-bold text-slate-800">Mise en page & Envoi e-mail</p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Génération du document PDF haute qualité et du fichier éditable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Estimated Time Box */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <Clock className="h-5 w-5 text-[#B8935A]" />
              <span className="font-medium text-slate-700">Temps estimé de réception :</span>
            </div>
            <span className="font-bold text-[#1B263B] bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-mono text-xs">
              5 à 8 minutes
            </span>
          </div>

          {/* Information Notice */}
          <div className="text-xs text-slate-500 bg-amber-50/80 border border-amber-200/60 rounded-xl p-3.5 flex items-start gap-2.5">
            <HelpCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Note importante :</strong> N’oubliez pas de vérifier votre dossier « Courriers indésirables » ou « Spams » si vous ne voyez rien arriver d’ici 10 minutes.
            </span>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onGoHome}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1B263B] hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <ArrowLeft className="h-4 w-4" />
            Retourner sur RFP Engine
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} RFPEngine. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
