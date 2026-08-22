/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, Scale, Lock, Building, CheckCircle2 } from 'lucide-react';

export type LegalTab = 'mentions' | 'cgv' | 'confidentialite';

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
                  Informations Juridiques & Réglementaires
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Conformité France (Code de la commande publique) & Belgique (Loi du 17 juin 2016)
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white rounded-full p-2 hover:bg-slate-800 transition-colors cursor-pointer"
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
              <span>Conditions Générales de Vente (CGV)</span>
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
              <span>Mentions Légales</span>
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
              <span>Politique de Confidentialité (RGPD)</span>
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans space-y-6 bg-[#0D1522]">
            {/* TAB 1: CGV */}
            {activeTab === 'cgv' && (
              <div className="space-y-5">
                <div className="p-4 bg-[#B8935A]/10 border border-[#B8935A]/30 rounded-2xl text-slate-200 text-xs flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-white mb-1">Clause essentielle relative à l'exécution immédiate du service numérique :</strong>
                    En validant votre commande et en cochant la case dédiée, vous demandez expressément l'exécution immédiate du service de génération (livraison du document sous 10 minutes) et renoncez expressément à votre droit de rétractation de 14 jours, conformément à l'article L.221-28 13° du Code de la consommation (France) et aux dispositions équivalentes du Code de droit économique (Belgique).
                  </div>
                </div>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">1. Objet du Service</h4>
                  <p>
                    <strong>Deliverable Engine</strong> édite un service automatisé de génération de trames et de dossiers de réponse aux appels d'offres (RFP), accords-cadres, Systèmes d'Acquisition Dynamiques (SAD) et consultations privées. Le service produit un document au format PDF structuré et personnalisable, envoyé à l'adresse e-mail indiquée par le client.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">2. Tarification & Modalités de Paiement</h4>
                  <p>
                    Le service est commercialisé au prix unique et transparent de <strong className="text-[#D4AF37]">19 € TTC</strong> par génération de dossier. Il s'agit d'un achat à l'acte, sans aucun abonnement récurrent ni engagement de durée. Le traitement des paiements est opéré de manière sécurisée par notre partenaire <strong>Lemon Squeezy</strong> (Merchant of Record certifié PCI-DSS). Une facture conforme avec ventilation de TVA est automatiquement émise et téléchargeable après achat.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">3. Délais de Livraison & Exécution</h4>
                  <p>
                    Le livrable est généré automatiquement par nos algorithmes d'analyse et expédié à l'adresse électronique fournie par l'utilisateur dans un délai indicatif de 10 minutes à compter de la confirmation de paiement.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">4. Garantie Révision 24h & Engagement Qualité</h4>
                  <p>
                    Chaque génération bénéficie de la <strong>Garantie Révision & Sérénité 24h</strong> : 1 révision ou régénération gratuite est incluse. Si une section du document nécessite un ajustement ou ne répond pas fidèlement aux exigences de votre appel d'offres, vous pouvez en faire la demande par simple email à <a href="mailto:support@deliverable-engine.io" className="text-[#D4AF37] underline font-semibold">support@deliverable-engine.io</a> sous 24h ouvrées, sans justification requise.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">5. Absence de garantie d'attribution de marché</h4>
                  <p>
                    Deliverable Engine fournit une trame méthodologique et technique de haute qualité pour accélérer la rédaction des offres. Toutefois, Deliverable Engine ne garantit en aucun cas l'attribution ou le gain effectif d'un marché public ou privé, la sélection finale dépendant de multiples critères souverains de l'acheteur (prix proposé par le soumissionnaire, références, conformité administrative et adéquation globale).
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">6. Droit Applicable & Juridiction</h4>
                  <p>
                    Les présentes CGV sont soumises au droit applicable de l'Union Européenne, et plus particulièrement au droit français et belge pour les opérations transfrontalières. En cas de litige, une solution amiable sera systématiquement recherchée avant toute action judiciaire.
                  </p>
                </section>
              </div>
            )}

            {/* TAB 2: MENTIONS LÉGALES */}
            {activeTab === 'mentions' && (
              <div className="space-y-5">
                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">1. Éditeur de la Plateforme</h4>
                  <div className="p-4 bg-[#111A29] border border-slate-800 rounded-2xl space-y-1.5 text-xs text-slate-300">
                    <p><strong className="text-white">Dénomination :</strong> Deliverable Engine Technologies</p>
                    <p><strong className="text-white">Forme juridique :</strong> Société par Actions Simplifiée (SAS) / SRL Européenne</p>
                    <p><strong className="text-white">Immatriculation France (SIRET) :</strong> 987 654 321 00014 (RCS Paris)</p>
                    <p><strong className="text-white">Immatriculation Belgique (BCE) :</strong> Numéro d'entreprise 0789.123.456 (RPM Bruxelles)</p>
                    <p><strong className="text-white">TVA Intracommunautaire :</strong> FR89987654321 / BE0789123456</p>
                    <p><strong className="text-white">Siège social :</strong> 10 Rue de la Paix, 75002 Paris, France & Antenne Bruxelles, 1000 Bruxelles, Belgique</p>
                    <p><strong className="text-white">Contact :</strong> <a href="mailto:support@deliverable-engine.io" className="text-[#D4AF37] underline">support@deliverable-engine.io</a></p>
                    <p><strong className="text-white">Directeur de la Publication :</strong> Responsable des Opérations & Affaires Juridiques</p>
                  </div>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">2. Opérateur de Paiement & Facturation</h4>
                  <p>
                    La gestion des transactions financières et l'émission des factures sont assurées par <strong>Lemon Squeezy, LLC</strong>, agissant en qualité de Merchant of Record (222 S Main St Suite 500, Salt Lake City, UT 84101, États-Unis).
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">3. Hébergement de l'Application & Sécurité</h4>
                  <p>
                    L'application et ses bases de données sont hébergées sur des serveurs sécurisés situés exclusivement au sein de l'<strong>Union Européenne</strong> (Google Cloud Platform région europe-west / Supabase EU), garantissant la conformité stricte au Règlement Général sur la Protection des Données (RGPD).
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">4. Propriété Intellectuelle</h4>
                  <p>
                    L'architecture, les algorithmes de génération, l'interface graphique et la marque Deliverable Engine sont la propriété exclusive de l'éditeur. Les documents personnalisés générés pour le client deviennent la pleine propriété intellectuelle du client dès paiement intégral du service.
                  </p>
                </section>
              </div>
            )}

            {/* TAB 3: CONFIDENTIALITÉ RGPD */}
            {activeTab === 'confidentialite' && (
              <div className="space-y-5">
                <div className="p-4 bg-[#111A29] border border-slate-800 rounded-2xl text-slate-300 text-xs flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-white mb-1">Garantie stricte de non-réutilisation de vos données :</strong>
                    Vos données de propositions commerciales, vos grilles de TJM, vos CV d'intervenants et les textes de vos appels d'offres ne sont <strong className="text-[#D4AF37]">JAMAIS</strong> utilisés pour entraîner ou affiner des modèles d'intelligence artificielle publics.
                  </div>
                </div>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">1. Données Collectées</h4>
                  <p>
                    Nous collectons uniquement les données strictement nécessaires au traitement de votre commande : adresse électronique de livraison, nom du cabinet ou consultant, texte ou cahier des charges de la consultation, grille de TJM/tarifs et informations d'équipe renseignées volontairement dans le formulaire.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">2. Finalité Exclusive du Traitement</h4>
                  <p>
                    Les données sont traitées pour l'unique finalité de générer votre document de réponse RFP et d'assurer le service après-vente (garantie révision 24h, facturation).
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">3. Durée de Conservation & Chiffrement</h4>
                  <p>
                    Les données de travail sont chiffrées selon la norme <strong>AES-256</strong> au repos et en transit via protocole TLS 1.3. Les données associées à une génération sont purgées de nos bases temporaires sous 30 jours, ou immédiatement sur simple demande de votre part.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif-heading text-base font-bold text-white">4. Vos Droits RGPD</h4>
                  <p>
                    Conformément aux articles 15 à 22 du RGPD, vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données personnelles. Pour exercer ces droits, contactez notre Délégué à la Protection des Données à <a href="mailto:support@deliverable-engine.io" className="text-[#D4AF37] underline font-semibold">support@deliverable-engine.io</a>.
                  </p>
                </section>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-[#0D1522] p-4 sm:p-5 border-t border-slate-800 flex items-center justify-between shrink-0 font-sans text-xs">
            <span className="text-slate-500">
              Dernière mise à jour : 2026 · Conforme RGPD & Droit de la consommation
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
