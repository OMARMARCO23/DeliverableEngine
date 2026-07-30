/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Lock, Server, Zap } from 'lucide-react';

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
      <div className="mx-auto max-w-5xl px-4 sm:px-8 py-16 lg:py-20 text-center relative z-10">
        
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/15 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#B8935A] mb-6">
          <Sparkles className="h-3.5 w-3.5 fill-[#B8935A]" />
          Devancez vos concurrents
        </div>

        <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
          Arrêtez de perdre des deals faute de temps
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-sans">
          Testez sur votre prochain RFP. 19 € seulement, résultat en 5 minutes.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            onClick={onOpenGenerate}
            style={{ backgroundColor: '#B8935A' }}
            className="group inline-flex items-center gap-2.5 rounded-xl hover:bg-[#9e7b45] px-8 py-4 text-base font-bold text-[#1B263B] shadow-xl transition-all active:scale-98 cursor-pointer"
          >
            <Zap className="h-5 w-5 fill-[#1B263B]" />
            Générer ma réponse maintenant (19€)
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <p className="text-xs text-slate-400 font-sans mt-1">
            Livré par email en 5 minutes · Satisfait ou regénéré
          </p>
        </div>

      </div>

      {/* 4 Columns Navigation Section */}
      <div className="border-t border-slate-800/80 py-12 relative z-10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B8935A] text-[#1B263B] font-bold font-serif-heading text-base">
                R
              </div>
              <span className="font-serif-heading font-bold text-white text-base">
                Deliverable <span className="text-[#B8935A]">Engine</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Générateur automatique de réponses RFP et propositions commerciales par IA.
            </p>
          </div>

          {/* Col 1: Produit */}
          <div>
            <h4 className="text-xs font-bold text-[#B8935A] uppercase tracking-wider mb-4">
              PRODUIT
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#tarif" className="hover:text-white transition-colors">Prix</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#apercu" className="hover:text-white transition-colors">Aperçu PDF</a></li>
            </ul>
          </div>

          {/* Col 2: Entreprise */}
          <div>
            <h4 className="text-xs font-bold text-[#B8935A] uppercase tracking-wider mb-4">
              ENTREPRISE
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partenaires</a></li>
            </ul>
          </div>

          {/* Col 3: Légal */}
          <div>
            <h4 className="text-xs font-bold text-[#B8935A] uppercase tracking-wider mb-4">
              LÉGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RGPD</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-bold text-[#B8935A] uppercase tracking-wider mb-4">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="mailto:support@deliverable-engine.io" className="hover:text-white transition-colors">Email Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Clients</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-sans">
          
          <p className="text-slate-400 text-center sm:text-left">
            © {currentYear} Deliverable Engine. Tous droits réservés.
          </p>

          <p className="text-slate-400 text-center sm:text-right flex items-center gap-2 font-sans">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span>Serveurs souverains hébergés en France</span>
          </p>

        </div>
      </div>

    </footer>
  );
}

