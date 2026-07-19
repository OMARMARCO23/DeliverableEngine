/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HeaderProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export default function Header({ onOpenTrial, onOpenDemo }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-sm">
            DE
          </div>
          <div>
            <span className="font-display text-lg font-bold tracking-tight text-slate-900">
              Deliverable<span className="text-indigo-600">Engine</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-mono uppercase tracking-wider bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded text-slate-500">
              Agent IA de Conseil
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#problem" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Le Problème</a>
          <a href="#cost" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Le Coût</a>
          <a href="#solution" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">La Solution</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Fonctionnement</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Tarifs</a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="hidden sm:block text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            Réserver démo
          </button>
          <button
            onClick={onOpenTrial}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200 cursor-pointer"
          >
            Essai gratuit 14j
          </button>
        </div>
      </div>
    </header>
  );
}
