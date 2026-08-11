/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Lock } from 'lucide-react';

interface FooterProps {
  onOpenGenerate: () => void;
}

export default function Footer({ onOpenGenerate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B263B] text-white relative overflow-hidden 
                       border-t border-slate-800">
      {/* Glow décoratif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
                      -translate-y-1/2 -z-0 h-96 w-96 rounded-full 
                      bg-[#B8935A]/10 blur-3xl pointer-events-none" />

      {/* CTA final */}
      <div className="mx-auto max-w-5xl px-4 sm:px-8 py-16 lg:py-20 
                      text-center relative z-10">

        <div className="inline-flex items-center gap-1.5 rounded-full 
                        bg-[#B8935A]/15 border border-[#B8935A]/30 
                        px-3.5 py-1 text-xs font-semibold text-[#B8935A] mb-6">
          <Sparkles className="h-3.5 w-3.5 fill-[#B8935A]" />
          Votre prochain RFP vous attend
        </div>

        <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl 
                       font-extrabold text-white max-w-3xl mx-auto leading-tight">
          Arrêtez de perdre des deals faute de temps
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 
                      max-w-xl mx-auto leading-relaxed font-sans">
          Testez sur votre prochain appel d'offres. 
          19 € — résultat en moins de 10 minutes.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            onClick={() => onOpenGenerate()}
            className="group inline-flex items-center gap-2.5 rounded-xl 
                       bg-[#B8935A] hover:bg-[#9e7b45] px-8 py-4 
                       text-base font-bold text-[#1B263B] shadow-xl 
                       transition-all active:scale-[0.98] cursor-pointer"
          >
            <Zap className="h-5 w-5 fill-[#1B263B]" />
            Générer ma réponse maintenant — 19 €
            <ArrowRight className="h-5 w-5 transition-transform 
                                   group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3" />
              Paiement sécurisé
            </span>
            <span>·</span>
            <span>Sans abonnement</span>
            <span>·</span>
            <span>Facture disponible</span>
          </div>
        </div>

      </div>

      {/* Navigation */}
      <div className="border-t border-slate-800/80 py-12 relative z-10 
                      bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 
                        grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center 
                              rounded-lg bg-[#B8935A] text-[#1B263B] 
                              font-bold font-serif-heading text-base">
                R
              </div>
              <span className="font-serif-heading font-bold text-white text-base">
                Deliverable <span className="text-[#B8935A]">Engine</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Générateur de réponses RFP par IA, 
              pour consultants et cabinets de conseil.
            </p>
          </div>

          {/* Produit */}
          <div>
            <h4 className="text-xs font-bold text-[#B8935A] uppercase 
                           tracking-wider mb-4">
              PRODUIT
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#fonctionnement" 
                   className="hover:text-white transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#tarif" 
                   className="hover:text-white transition-colors">
                  Tarif
                </a>
              </li>
              <li>
                <a href="#faq" 
                   className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#apercu" 
                   className="hover:text-white transition-colors">
                  Aperçu PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-xs font-bold text-[#B8935A] uppercase 
                           tracking-wider mb-4">
              LÉGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="/mentions-legales" 
                   className="hover:text-white transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/cgv" 
                   className="hover:text-white transition-colors">
                  CGV
                </a>
              </li>
              <li>
                <a href="/rgpd" 
                   className="hover:text-white transition-colors">
                  Politique RGPD
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-[#B8935A] uppercase 
                           tracking-wider mb-4">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="mailto:support@deliverable-engine.io" 
                   className="hover:text-white transition-colors">
                  support@deliverable-engine.io
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Sécurité */}
          <div>
            <h4 className="text-xs font-bold text-[#B8935A] uppercase 
                           tracking-wider mb-4">
              SÉCURITÉ
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-[#B8935A]" />
                Paiement SSL
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-[#B8935A]" />
                Données chiffrées
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-[#B8935A]" />
                Conforme RGPD
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Sous-footer */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6 
                      relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col 
                        sm:flex-row items-center justify-between gap-3 
                        text-xs text-slate-400 font-sans">
          <p>© {currentYear} Deliverable Engine. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full 
                             bg-emerald-400" />
            Données traitées en Europe · Conforme RGPD
          </p>
        </div>
      </div>

    </footer>
  );
}
