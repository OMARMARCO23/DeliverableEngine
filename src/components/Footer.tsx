/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Lock, Server } from 'lucide-react';

interface FooterProps {
  onOpenGenerate: () => void;
}

export default function Footer({ onOpenGenerate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B263B] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 h-96 w-96 rounded-full bg-[#B8935A]/10 blur-3xl pointer-events-none" />

      {/* Final CTA Container */}
      <div className="mx-auto max-w-5xl px-4 sm:px-8 py-16 lg:py-24 text-center relative z-10">
        
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/15 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#B8935A] mb-6">
          <Sparkles className="h-3.5 w-3.5 fill-[#B8935A]" />
          Devance tes concurrents
        </div>

        <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
          Arrête de perdre des deals faute de temps
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-sans">
          Teste sur ton prochain RFP. 19 € seulement, résultat en quelques minutes.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            onClick={onOpenGenerate}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-[#B8935A] hover:bg-[#9e7b45] px-8 py-4 text-base font-bold text-[#1B263B] shadow-xl transition-all active:scale-98 cursor-pointer"
          >
            Générer ma réponse →
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <p className="text-xs text-slate-400 font-sans mt-1">
            Offre de lancement · Livré par email en quelques minutes
          </p>
        </div>

        {/* Security & Compliance Badges */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
            <Server className="h-5 w-5 text-[#B8935A] shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Hébergement Europe</p>
              <p className="text-[10px] text-slate-400">Serveurs sécurisés en UE</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
            <ShieldCheck className="h-5 w-5 text-[#B8935A] shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Conforme RGPD / DPA</p>

              <p className="text-[10px] text-slate-400">Respect strict des données</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
            <Lock className="h-5 w-5 text-[#B8935A] shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">100% Confidentialité</p>
              <p className="text-[10px] text-slate-400">Aucun entraînement public</p>
            </div>
          </div>
        </div>

      </div>

      {/* Sub Footer */}
      <div className="border-t border-slate-800/80 bg-slate-950/80 py-8 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#B8935A] text-[#1B263B] font-bold font-serif-heading text-sm">
              R
            </div>
            <span className="font-serif-heading font-bold text-slate-200 text-sm">
              RFP Engine
            </span>
          </div>
          
          <p className="text-slate-400 text-center md:text-left">
            © {currentYear} RFP Engine. Tous droits réservés.
          </p>
          
          {/* Discrete privacy notice */}
          <p className="text-[11px] text-slate-500 italic text-center md:text-right">
            
          </p>

        </div>
      </div>

    </footer>
  );
}

