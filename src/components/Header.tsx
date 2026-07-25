/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenGenerate: () => void;
}

export default function Header({ onOpenGenerate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-[#1B263B]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-[#B8935A] rounded-lg flex items-center justify-center text-[#1B263B] font-bold shadow-sm transition-transform group-hover:scale-105">
            <FileText className="h-5 w-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-heading text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              RFP<span className="text-[#B8935A]">Engine</span>
            </span>
            <span className="text-[10px] text-slate-300 tracking-wider uppercase font-sans -mt-1">
              Générateur de propale IA
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wide uppercase">
          <a href="#benefices" className="text-slate-300 hover:text-[#B8935A] transition-colors">Bénéfices</a>
          <a href="#fonctionnement" className="text-slate-300 hover:text-[#B8935A] transition-colors">Comment ça marche</a>
          <a href="#pour-qui" className="text-slate-300 hover:text-[#B8935A] transition-colors">Pour qui ?</a>
          <a href="#tarif" className="text-slate-300 hover:text-[#B8935A] transition-colors">Tarif</a>
          <a href="#faq" className="text-slate-300 hover:text-[#B8935A] transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-300 font-medium">
            <span className="line-through text-slate-400">29 €</span>
            <span className="text-[#B8935A] font-bold bg-[#B8935A]/10 px-2 py-0.5 rounded border border-[#B8935A]/30">19 €</span>
          </div>
          <button
            onClick={onOpenGenerate}
            className="px-4 py-2.5 bg-[#B8935A] hover:bg-[#9e7b45] text-[#1B263B] font-bold rounded-lg text-xs transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 fill-[#1B263B]" />
            Générer ma réponse (19 €)
          </button>
        </div>
      </div>
    </header>
  );
}

