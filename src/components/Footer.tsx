/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FileText, ShieldCheck, Mail, Sparkles, Scale, Lock, Globe, Building } from 'lucide-react';
import { LegalTab } from './LegalModal';
import { COMPANY_INFO } from '../data';

interface FooterProps {
  onOpenGenerate: () => void;
  onOpenLegal?: (tab?: LegalTab) => void;
}

export default function Footer({ onOpenGenerate, onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B263B] text-white border-t border-slate-700">
      
      {/* 1. Pre-Footer Call to Action */}
      <div className="border-b border-slate-700/80 py-16 px-4 sm:px-8 bg-gradient-to-b from-[#1B263B] to-slate-900">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#B8935A]/15 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#B8935A]">
            <Sparkles className="h-3.5 w-3.5 fill-[#B8935A]" />
            Prêt à répondre à votre prochain appel d'offres ?
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Générez votre réponse RFP complète en 10 minutes
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            Spécialisé SAD & Conseil. Structure claire et organisée, adaptée aux contextes France & Belgique, avec 1 révision gratuite sous 24h sans justification.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenGenerate}
              className="w-full sm:w-auto px-8 py-4 bg-[#B8935A] hover:bg-[#a17e47] text-[#1B263B] font-bold rounded-xl text-sm sm:text-base transition-all shadow-xl active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="h-4 w-4 fill-[#1B263B]" />
              Générer mon dossier maintenant — 19 €
            </button>
            <a
              href="#apercu"
              className="w-full sm:w-auto px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all border border-slate-600 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="h-4 w-4 text-[#B8935A]" />
              Explorer les modèles SAD & Conseil
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium font-sans">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#B8935A]" />
              Garantie révision 24h sans justification
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-[#B8935A]" />
              Paiement sécurisé via Lemon Squeezy
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-[#B8935A]" />
              France & Belgique (Marchés Publics & SAD)
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Navigation & Legal Columns */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#B8935A] rounded-lg flex items-center justify-center text-[#1B263B] font-bold shadow-sm">
                <FileText className="h-4 w-4 stroke-[2.5]" />
              </div>
              <span className="font-serif-heading text-lg font-bold tracking-tight text-white">
                Deliverable <span className="text-[#B8935A]">Engine</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Moteur de génération de réponses aux appels d'offres pour consultants, indépendants et cabinets. Spécialisé Systèmes d'Acquisition Dynamiques (SAD) & Prestations Intellectuelles.
            </p>
            <div className="text-[11px] text-slate-400 space-y-1">
              <p>🇫🇷 France & 🇧🇪 Belgique</p>
              <p className="text-slate-500">Conforme Code de la Commande Publique & Loi marchés 2016</p>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8935A] font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li>
                <a href="#demo-visuelle" className="hover:text-white transition-colors">Livrable en 10 min</a>
              </li>
              <li>
                <a href="#apercu" className="hover:text-white transition-colors">Modèles & Périmètre</a>
              </li>
              <li>
                <a href="#fonctionnement" className="hover:text-white transition-colors">Comment ça marche</a>
              </li>
              <li>
                <a href="#comparatif" className="hover:text-white transition-colors">vs ChatGPT / Claude</a>
              </li>
              <li>
                <a href="#pour-qui" className="hover:text-white transition-colors">Pour qui ?</a>
              </li>
              <li>
                <a href="#tarif" className="hover:text-white transition-colors">Offre de lancement (19 €)</a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-white transition-colors">À propos du fondateur</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Juridique & Conformité (Interactive Modals) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8935A] font-sans flex items-center gap-1.5">
              <Scale className="h-3.5 w-3.5" />
              Juridique & Conformité
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li>
                <button
                  onClick={() => onOpenLegal && onOpenLegal('cgv')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FileText className="h-3 w-3 text-[#B8935A]" />
                  Conditions Générales de Vente (CGV)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal && onOpenLegal('mentions')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Building className="h-3 w-3 text-[#B8935A]" />
                  Mentions Légales (FR / BE)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal && onOpenLegal('confidentialite')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Lock className="h-3 w-3 text-[#B8935A]" />
                  Politique de Confidentialité (RGPD)
                </button>
              </li>
              <li>
                <span className="text-[11px] text-slate-500 block pt-1">
                  Renonciation au délai de rétractation de 14j pour exécution immédiate (art. L.221-28 13° Code de la consommation)
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8935A] font-sans flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              Support & Contact
            </h4>
            <p className="text-xs text-slate-400 font-sans">
              Une question avant de commander ? Notre équipe vous répond sous 24h ouvrées.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${COMPANY_INFO.supportEmail}?subject=Contact%20DeliverableEngine`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#B8935A] hover:bg-[#a17e47] text-[#1B263B] font-bold text-xs shadow-md transition-all active:scale-[0.98] cursor-pointer"
                id="footer-contact-button"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Contacter le support</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-500 font-sans">
              Hébergement sécurisé dans l'Union Européenne (RGPD). Données chiffrées AES-256.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Bottom Legal Sub-bar */}
      <div className="border-t border-slate-800 py-6 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-sans">
          
          <p className="text-slate-400 text-center sm:text-left">
            © {currentYear} Deliverable Engine. Tous droits réservés.
          </p>

          <p className="text-slate-400 text-center sm:text-right flex items-center gap-2 font-sans">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span>Conforme RGPD · Aucune utilisation des données pour entraînement de modèles IA publics</span>
          </p>

        </div>
      </div>

    </footer>
  );
}
