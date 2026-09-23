/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, Scale, Lock, Building, CheckCircle2, Mail, Server, CreditCard, Sparkles, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export type LegalTab = 'cgv' | 'mentions' | 'confidentialite';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export default function LegalModal({ isOpen, initialTab = 'cgv', onClose }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  // Sync tab if modal reopens with a specific tab
  React.useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#0D1522] rounded-3xl shadow-2xl border border-slate-800/90 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh] text-slate-100"
        >
          {/* Top subtle gold accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8935A]/50 to-transparent" />

          {/* Header */}
          <div className="bg-[#0D1522] text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#B8935A]/15 border border-[#B8935A]/30 rounded-xl text-[#D4AF37]">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-white leading-tight">
                  Pack Juridique Officiel : Deliverable Engine
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Mentions Légales (LCEN) · CGV & CGU · Conformité IA (AI Act) & RGPD
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white rounded-full p-2 hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-[#111A29] border-b border-slate-800 px-4 sm:px-6 flex items-center gap-2 overflow-x-auto shrink-0 font-sans text-xs">
            <button
              onClick={() => setActiveTab('cgv')}
              className={`py-3 px-4 font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'cgv'
                  ? 'border-[#B8935A] text-[#D4AF37] bg-[#0D1522] rounded-t-xl'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>CGV & CGU</span>
            </button>

            <button
              onClick={() => setActiveTab('mentions')}
              className={`py-3 px-4 font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'mentions'
                  ? 'border-[#B8935A] text-[#D4AF37] bg-[#0D1522] rounded-t-xl'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building className="h-3.5 w-3.5" />
              <span>1. Mentions Légales</span>
            </button>

            <button
              onClick={() => setActiveTab('confidentialite')}
              className={`py-3 px-4 font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'confidentialite'
                  ? 'border-[#B8935A] text-[#D4AF37] bg-[#0D1522] rounded-t-xl'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Lock className="h-3.5 w-3.5" />
              <span>3. Politique de Confidentialité & RGPD</span>
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans space-y-6 bg-[#0D1522]">
            
            {/* TAB 1: CGV / CGU */}
            {activeTab === 'cgv' && (
              <div className="space-y-6">
                <div className="p-4 bg-[#B8935A]/10 border border-[#B8935A]/30 rounded-2xl text-slate-200 text-xs flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-white mb-1">
                      CONDITIONS GÉNÉRALES DE VENTE & D’UTILISATION (CGV / CGU) — DELIVERABLE ENGINE
                    </strong>
                    Les présentes conditions régissent l'accès et l'utilisation du service numérique Deliverable Engine. Toute commande implique l'acceptation expresse et sans réserve des présentes clauses.
                  </div>
                </div>

                {/* Article 1 */}
                <section className="space-y-2.5 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#B8935A]/20 text-[#D4AF37] text-xs flex items-center justify-center font-sans font-bold">1</span>
                    Article 1 – Objet du Service
                  </h4>
                  <p className="text-slate-300">
                    <strong>Deliverable Engine</strong> est une plateforme logicielle en ligne fournissant un outil d'assistance à la rédaction et de mise en forme automatisée de documents professionnels (mémoires techniques, propositions d'intervention, dossiers de candidature MAPA, SAD et consultations privées).
                  </p>
                </section>

                {/* Article 2 */}
                <section className="space-y-3 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#B8935A]/20 text-[#D4AF37] text-xs flex items-center justify-center font-sans font-bold">2</span>
                    Article 2 – Caractère de l'outil et Responsabilité du Soumissionnaire
                  </h4>
                  <div className="space-y-2 text-slate-300">
                    <p>
                      <strong className="text-white">Outil d'aide à la décision et à la rédaction :</strong> Le service constitue exclusivement une solution d'assistance automatisée. Les documents générés sont fournis à titre de projet de travail / livrable de synthèse.
                    </p>
                    <p className="p-3.5 bg-slate-900/90 border border-slate-700/60 rounded-xl text-slate-200">
                      <strong className="text-[#D4AF37] block mb-1">Obligation de relecture du client :</strong>
                      En vertu des règles de la commande publique (notamment les articles R. 2143-3 et R. 2143-8 du Code de la commande publique), le soumissionnaire/client demeure seul et unique responsable de l'exactitude des informations, des engagements financiers, des moyens humains et des qualifications mentionnés dans son offre finale remise à l'acheteur public ou privé.
                    </p>
                    <p>
                      <strong className="text-white">Absence de garantie de succès :</strong> Deliverable Engine n'est en aucun cas partie aux procédures de mise en concurrence et ne garantit en aucun cas l'attribution ou le gain d'un marché public ou d'un contrat privé.
                    </p>
                  </div>
                </section>

                {/* Article 3 */}
                <section className="space-y-2.5 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#B8935A]/20 text-[#D4AF37] text-xs flex items-center justify-center font-sans font-bold">3</span>
                    Article 3 – Transparence et Intelligence Artificielle (AI Act UE)
                  </h4>
                  <p className="text-slate-300">
                    Conformément à la réglementation européenne sur l'Intelligence Artificielle (AI Act) :
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                    <li>
                      Le client est informé que la structuration et la rédaction préliminaire des mémoires techniques font appel à des modèles de traitement automatique du langage naturel (LLM).
                    </li>
                    <li>
                      Le système intègre des protocoles d'assainissement de données (sanitization) pour limiter les erreurs factuelles, mais le document final requiert expressément la validation et signature humaine du client avant tout usage officiel.
                    </li>
                  </ul>
                </section>

                {/* Article 4 */}
                <section className="space-y-3 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#B8935A]/20 text-[#D4AF37] text-xs flex items-center justify-center font-sans font-bold">4</span>
                    Article 4 – Tarifs, Modalités de Paiement et Livraison
                  </h4>
                  <div className="space-y-2.5 text-slate-300">
                    <p>
                      <strong className="text-white">Prix :</strong> Le service est facturé à l'acte, au tarif forfaitaire unitaire indiqué sur la page de commande (ex: 19,00 € TTC).
                    </p>
                    <p>
                      <strong className="text-white">Paiement :</strong> Le règlement s'effectue comptant et de manière sécurisée par carte bancaire via notre prestataire de paiement Stripe.
                    </p>
                    <p>
                      <strong className="text-white">Livraison numérique :</strong> Dès la confirmation du paiement et du traitement des données par l'orchestrateur, le document généré (au format PDF haute définition) est transmis automatiquement par courrier électronique à l'adresse renseignée par le client dans un délai indicatif inférieur à 10 minutes.
                    </p>
                    <div className="p-3.5 bg-[#B8935A]/15 border border-[#B8935A]/30 rounded-xl text-slate-200">
                      <strong className="text-[#D4AF37] block mb-1">
                        Renonciation au droit de rétractation (art. L. 221-28 13° du Code de la consommation) :
                      </strong>
                      S'agissant d'une prestation de fourniture d'un contenu numérique non fourni sur support matériel dont l'exécution commence immédiatement après validation du paiement avec l'accord exprès du client, ce dernier renonce expressément à son droit de rétractation conformément à l'article L. 221-28 13° du Code de la consommation (applicable aux contrats B2B et consommateurs).
                    </div>
                  </div>
                </section>

                {/* Garantie Révision 24h */}
                <section className="space-y-2 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white">
                    Garantie Révision 24h & Service Client
                  </h4>
                  <p className="text-slate-300 text-xs">
                    Chaque commande bénéficie d'une garantie d'ajustement : 1 révision ou régénération gratuite est incluse sur simple demande sous 24h ouvrées adressée à notre support : <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-[#D4AF37] underline font-mono">{COMPANY_INFO.supportEmail}</a>.
                  </p>
                </section>
              </div>
            )}

            {/* TAB 2: MENTIONS LÉGALES */}
            {activeTab === 'mentions' && (
              <div className="space-y-6">
                <div className="p-4 bg-[#B8935A]/10 border border-[#B8935A]/30 rounded-2xl text-slate-200 text-xs flex items-start gap-3">
                  <Building className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-white mb-1">
                      1. MENTIONS LÉGALES — DELIVERABLE ENGINE
                    </strong>
                    Informations légales conformes à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
                  </div>
                </div>

                {/* Éditeur */}
                <section className="space-y-3 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white">
                    Éditeur du site
                  </h4>
                  <div className="space-y-2 text-slate-300">
                    <p>
                      Le site <strong>Deliverable Engine</strong> est édité par :
                    </p>
                    <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2 text-xs">
                      <p>
                        <strong className="text-white">Édition et Exploitation du Service :</strong><br />
                        Le service en ligne Deliverable Engine est édité et exploité sous la marque commerciale <strong>Deliverable Engine</strong>.
                      </p>
                      <p className="text-slate-400">
                        Conformément aux dispositions de l'article 6, III-2 de la loi n° 2004-575 du 21 juin 2004 (LCEN), l'exploitant a exercé son droit à l'anonymat légal. Les coordonnées d'identification personnelle ont été régulièrement transmises et sont conservées par l'hébergeur du site.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section className="space-y-3 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#D4AF37]" />
                    Contact Support & Réclamations
                  </h4>
                  <p className="text-slate-300">
                    Pour toute demande technique, commerciale ou réclamation :
                  </p>
                  <div className="pt-1">
                    <a
                      href={`mailto:${COMPANY_INFO.supportEmail}?subject=Contact%20Support%20Deliverable%20Engine`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B8935A] hover:bg-[#a17e47] text-[#1B263B] font-bold text-xs transition-all active:scale-95 cursor-pointer font-mono"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>{COMPANY_INFO.supportEmail}</span>
                    </a>
                  </div>
                </section>

                {/* Hébergement & Infrastructure */}
                <section className="space-y-3 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white flex items-center gap-2">
                    <Server className="h-4 w-4 text-[#D4AF37]" />
                    Hébergement & Infrastructure
                  </h4>
                  <div className="space-y-3 text-slate-300 text-xs">
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                      <strong className="text-white block font-semibold mb-0.5">
                        Hébergeur d'infrastructure web :
                      </strong>
                      <span>Cloudflare, Inc. – 101 Townsend St, San Francisco, CA 94107, USA.</span>
                    </div>

                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                      <strong className="text-white block font-semibold mb-0.5">
                        Base de données & API :
                      </strong>
                      <span>Supabase Inc. – Région Europe (AWS eu-central-1, Francfort).</span>
                    </div>

                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                      <strong className="text-white block font-semibold mb-0.5">
                        Traitement des paiements sécurisés :
                      </strong>
                      <span>Stripe Payments Europe, Ltd. – 1 Grand Canal Street Lower, Dublin 2, Irlande.</span>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* TAB 3: CONFIDENTIALITÉ & RGPD */}
            {activeTab === 'confidentialite' && (
              <div className="space-y-6">
                <div className="p-4 bg-[#B8935A]/10 border border-[#B8935A]/30 rounded-2xl text-slate-200 text-xs flex items-start gap-3">
                  <Lock className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-white mb-1">
                      3. POLITIQUE DE CONFIDENTIALITÉ & RGPD — DELIVERABLE ENGINE
                    </strong>
                    Engagement strict de conformité au Règlement Général sur la Protection des Données (Règlement UE 2016/679).
                  </div>
                </div>

                {/* Données collectées et finalité */}
                <section className="space-y-3 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white">
                    Données collectées et finalité
                  </h4>
                  <p className="text-slate-300">
                    <strong>Deliverable Engine</strong> collecte uniquement les données strictement nécessaires à l'exécution de la prestation demandée :
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                      <strong className="text-white block font-semibold mb-0.5">
                        Données d'identification :
                      </strong>
                      <span>Adresse email du client (pour la transmission du PDF et le suivi de commande), prénom/nom du représentant si renseigné.</span>
                    </li>
                    <li className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                      <strong className="text-white block font-semibold mb-0.5">
                        Données du projet / DCE :
                      </strong>
                      <span>Éléments méthodologiques, critères du marché et informations saisis par l'utilisateur dans le formulaire de génération.</span>
                    </li>
                  </ul>
                </section>

                {/* Sécurité et Non-Réutilisation */}
                <section className="space-y-3 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Sécurité et Non-Réutilisation des Données
                  </h4>
                  <div className="space-y-2.5 text-slate-300">
                    <div className="p-3.5 bg-emerald-950/20 border border-emerald-800/40 rounded-xl">
                      <strong className="text-emerald-300 block font-semibold mb-1">
                        Confidentialité absolue :
                      </strong>
                      <p className="text-slate-300 text-xs">
                        Vos données de réponse, méthodologies et grilles tarifaires ne sont jamais revendues, ni utilisées pour entraîner publiquement des modèles d'IA tiers.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl">
                      <strong className="text-white block font-semibold mb-1">
                        Durée de conservation :
                      </strong>
                      <p className="text-slate-300 text-xs">
                        Les fichiers PDF générés et stockés dans l'espace sécurisé temporaire sont purgés automatiquement après une durée maximale de <strong>7 jours post-livraison</strong>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Vos droits RGPD */}
                <section className="space-y-3 p-5 bg-[#111A29] rounded-2xl border border-slate-800">
                  <h4 className="font-serif-heading text-base font-bold text-white flex items-center gap-2">
                    <Scale className="h-4 w-4 text-[#D4AF37]" />
                    Vos droits
                  </h4>
                  <p className="text-slate-300">
                    Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande adressée par email à :
                  </p>
                  <div className="pt-1">
                    <a
                      href={`mailto:${COMPANY_INFO.supportEmail}?subject=Demande%20Exercice%20Droits%20RGPD`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B8935A] hover:bg-[#a17e47] text-[#1B263B] font-bold text-xs transition-all active:scale-95 cursor-pointer font-mono"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>{COMPANY_INFO.supportEmail}</span>
                    </a>
                  </div>
                </section>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-[#0D1522] p-4 sm:p-5 border-t border-slate-800 flex items-center justify-between shrink-0 font-sans text-xs">
            <span className="text-slate-400">
              Deliverable Engine · Pack Juridique Officiel (LCEN, Code de la commande publique, AI Act & RGPD)
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#B8935A] hover:bg-[#c49f64] text-[#0D1522] font-bold rounded-full transition-all cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
