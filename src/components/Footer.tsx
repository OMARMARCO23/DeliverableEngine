/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export default function Footer({ onOpenTrial, onOpenDemo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background visual detail */}
      <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl" />

      {/* Final CTA Container */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8 py-16 lg:py-24 text-center">
        
        <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 text-xs font-semibold text-indigo-400 mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          Prenez de l'avance dès aujourd'hui
        </div>

        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
          Prêt à récupérer <span className="text-indigo-400">10 heures</span> par semaine ?
        </h2>

        <p className="mt-6 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Commencez dès aujourd'hui à automatiser vos propositions commerciales, vos rapports d'audit et vos comptes-rendus de réunion au format Google Docs avec notre double agent IA de confiance.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <button
            onClick={onOpenTrial}
            className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-8 py-4 text-sm font-bold text-white shadow-sm shadow-indigo-500/20 transition-all active:scale-[0.98] cursor-pointer"
          >
            Démarrer mon essai gratuit (14 jours)
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          
          <div className="flex flex-col items-center gap-2 mt-2">
            <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Essai gratuit 14 jours — pas de carte requise
            </p>
            <button
              onClick={onOpenDemo}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 underline underline-offset-2 cursor-pointer transition-colors mt-1"
            >
              Ou réserver un appel de démo de 15 min en direct
            </button>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-400 font-mono">
          « Pas de slides. Pas de bullshit. Juste votre livrable généré en direct. »
        </p>

      </div>

      {/* Sub Footer with copy details */}
      <div className="border-t border-slate-800/80 bg-slate-950/60 py-8">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 text-white font-bold">
              D
            </div>
            <span className="font-display font-bold text-slate-300">
              Deliverable Engine
            </span>
          </div>
          
          <p>© {currentYear} Deliverable Engine. Tous droits réservés.</p>
          
          <div className="flex items-center gap-4 text-slate-400 font-medium">
            <span className="text-[10px] font-mono uppercase tracking-wider bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-slate-400">
              Hebergé en Europe (VPC Sécurisé)
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
