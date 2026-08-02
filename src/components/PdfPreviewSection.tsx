import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, FileText, FileCheck, X, Sparkles, Building2, Stethoscope, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface SectorExample {
  id: string;
  sector: string;
  icon: React.ReactNode;
  tagline: string;
  rfpSource: {
    title: string;
    issuer: string;
    reference: string;
    content: string[];
  };
  pdfGenerated: {
    title: string;
    pages: string;
    sectionsCount: number;
    highlights: string[];
    sections: Array<{ number: string; title: string; excerpt: string }>;
  };
}

const SECTOR_EXAMPLES: SectorExample[] = [
  {
    id: 'sante',
    sector: 'Santé',
    icon: <Stethoscope className="h-6 w-6 text-[#B8935A]" />,
    tagline: 'Modernisation des systèmes d\'information hospitaliers & conformité HDS',
    rfpSource: {
      title: 'Appel d\'Offres Public : Modernisation du Parcours Patient & HDS',
      issuer: 'Groupement Hospitalier Régional (GHR)',
      reference: 'RFP-2026-SANTE-089',
      content: [
        "1. OBJET DE LA CONSULTATION : Assistance à Maîtrise d'Ouvrage (AMO) pour la refonte du Système d'Information Hospitalier (SIH), l'interopérabilité des données de santé et la mise en conformité aux normes Hébergeur de Données de Santé (HDS).",
        "2. PÉRIMÈTRE DU PROJET : Diagnostic de l'existant sur 4 établissements, accompagnement au choix de la solution cible, cadrage de la sécurité informatique, formation de 350 soignants et conduite du changement.",
        "3. EXIGENCES OBLIGATOIRES : Le prestataire devra prouver une expérience confirmée en milieu hospitalier public, fournir une méthodologie projet agile et respecter un calendrier strict de 12 mois."
      ]
    },
    pdfGenerated: {
      title: 'Proposition Technique & Financière — AMO Transformation SIH & Conformité HDS',
      pages: '10 pages',
      sectionsCount: 10,
      highlights: [
        'Analyse fine du cadre réglementaire HDS & RGPD Santé',
        'Méthodologie d\'accompagnement en 4 phases (Audit, Cadrage, Choix, Changement)',
        'Gouvernance sur-mesure pour Groupement Hospitalier'
      ],
      sections: [
        { number: '01', title: 'Synthèse Exécutive', excerpt: 'Compréhension stratégique des enjeux du GHR et engagements de valeur.' },
        { number: '02', title: 'Analyse du Besoin & Contraintes HDS', excerpt: 'Diagnostic des 4 établissements et cartographie des risques d\'interopérabilité.' },
        { number: '03', title: 'Méthodologie d\'Accompagnement AMO', excerpt: 'Planning en 12 mois découpé en jalons opérationnels avec livrables associés.' },
        { number: '04', title: 'Gouvernance & Équipe dédiée', excerpt: 'Matrice RACI et profils des consultants experts en santé publique.' }
      ]
    }
  },
  {
    id: 'btp',
    sector: 'BTP',
    icon: <Building2 className="h-6 w-6 text-[#B8935A]" />,
    tagline: 'Assistance à la gestion de projet environnementale & infrastructures',
    rfpSource: {
      title: 'Consultation d\'Ingénierie BTP : AMO Démarche Environnementale HQE',
      issuer: 'SNCF Réseau / Partenaire Infra BTP',
      reference: 'RFP-2026-BTP-412',
      content: [
        "1. CONTEXTE ET OBJECTIF : Dans le cadre de la rénovation de la gare centrale, le Maître d'Ouvrage recherche une assistance à la gestion de projet environnementale (Certification HQE Bâtiment Durable / BREEAM Excellent).",
        "2. MISSIONS ATTENDUES : Analyse du cycle de vie des matériaux, suivi du bilan carbone chantier, gestion de l'économie circulaire des déchets et accompagnement à la certification environnementale.",
        "3. LIVRABLES REQUIS : Schéma directeur environnemental, matrice des risques écologiques chantier, rapports mensuels de suivi carbone et dossier final de certification."
      ]
    },
    pdfGenerated: {
      title: 'Mémoire Technique & Offre d\'Accompagnement — AMO Environnemental & HQE Gare Centrale',
      pages: '9 pages',
      sectionsCount: 9,
      highlights: [
        'Cadre méthodologique conforme aux référentiels BREEAM & HQE',
        'Matrice d\'arbitrage bas-carbone & économie circulaire',
        'Planning d\'intervention phasé selon les étapes du chantier'
      ],
      sections: [
        { number: '01', title: 'Cadrage Environnemental', excerpt: 'Alignement stratégique sur les objectifs carbone et le niveau BREEAM visé.' },
        { number: '02', title: 'Plan d\'Action Chantier Propre', excerpt: 'Procédures d\'économie circulaire, réemploi des matériaux et réduction des nuisances.' },
        { number: '03', title: 'Dispositif de Suivi & Indicateurs', excerpt: 'Tableau de bord mensuel de pilotage carbone et reporting pour le maître d\'ouvrage.' },
        { number: '04', title: 'Planning & Proposition Financière', excerpt: 'Forfait d\'intervention lissé sur 18 mois avec engagement d\'obtention du label.' }
      ]
    }
  },
  {
    id: 'digit',
    sector: 'Transformation digitale',
    icon: <Cpu className="h-6 w-6 text-[#B8935A]" />,
    tagline: 'Refonte de plateformes web, migration Cloud & Conduite du changement',
    rfpSource: {
      title: 'Cahier des Charges RFP : Refonte du Portail Adhérents & Migration AWS',
      issuer: 'Mutuelle Européenne du Travail',
      reference: 'RFP-2026-DIGIT-77',
      content: [
        "1. BESOIN CLAIR : Refonte complète de la plateforme en ligne (portail web & mobile adhérents) avec migration sécurisée du legacy vers une architecture Cloud AWS Serverless.",
        "2. VOLET ACCOMPAGNEMENT : Définition des nouveaux rituels agiles, formation des équipes internes (450 collaborateurs) et accompagnement au changement pour garantir le taux d'adoption.",
        "3. CRITÈRES D'ÉVALUATION : Capacité de mise en œuvre sous 6 mois, architecture cybersécurisée (RGPD), pertinence du plan d'accompagnement et clarté du chiffrage."
      ]
    },
    pdfGenerated: {
      title: 'Proposition Stratégique & Technique — Refonte Portail Adhérents & Migration Cloud AWS',
      pages: '11 pages',
      sectionsCount: 11,
      highlights: [
        'Architecture cible Serverless AWS sécurisée et hautement disponible',
        'Plan de conduite du changement pour 450 collaborateurs',
        'Roadmap d\'implémentation en 3 vagues avec indicateurs de succès'
      ],
      sections: [
        { number: '01', title: 'Vision Produit & Enjeux Métiers', excerpt: 'Positionnement de la nouvelle expérience adhérent et réduction de l\'attrition.' },
        { number: '02', title: 'Architecture Cible AWS & Sécurité', excerpt: 'Schéma technique microservices, conformité RGPD et plan de reprise d\'activité (PRA).' },
        { number: '03', title: 'Plan de Conduite du Changement', excerpt: 'Dispositif de formation des équipes, kits de communication et accompagnement managérial.' },
        { number: '04', title: 'Planning, Budget & Équipe Projet', excerpt: 'Calendrier sur 6 mois, matrice des compétences et forfait d\'accompagnement.' }
      ]
    }
  }
];

export default function PdfPreviewSection() {
  const [activeModal, setActiveModal] = useState<{
    type: 'source' | 'pdf';
    sectorId: string;
  } | null>(null);

  const selectedSector = SECTOR_EXAMPLES.find((s) => s.id === activeModal?.sectorId);

  return (
    <section id="apercu" className="py-20 lg:py-28 bg-white text-slate-900 overflow-hidden border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Main Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
            <Eye className="h-3.5 w-3.5 text-[#B8935A]" />
            Aperçu de votre réponse
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B263B]">
            Ce que votre client va recevoir
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            Un document PDF haute qualité, personnalisé avec votre profil, structuré selon les standards des plus grands cabinets de conseil.
          </p>
        </div>

        {/* Intro Block: Avant / Après */}
        <div className="max-w-4xl mx-auto mb-14 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#1B263B] text-[#B8935A] text-xs font-bold font-mono px-3 py-1 rounded-full uppercase tracking-wider">
              Avant / Après : du RFP source au PDF généré
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
            Découvrez des exemples fictifs de génération dans 3 secteurs : <strong>santé</strong>, <strong>BTP</strong> et <strong>transformation digitale</strong>. À partir d’un appel d’offres, Deliverable Engine produit un template PDF professionnel de 8 à 11 pages, structuré et exploitable, avec les éléments à personnaliser clairement indiqués avant envoi au client.
          </p>
        </div>

        {/* 3 Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SECTOR_EXAMPLES.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-200 hover:border-[#B8935A] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Secteur</span>
                      <h3 className="font-serif-heading text-lg font-bold text-[#1B263B] leading-tight">
                        {item.sector}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#B8935A]/15 text-[#B8935A] border border-[#B8935A]/30 px-2.5 py-1 rounded-full">
                    Exemple
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                  {item.tagline}
                </p>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 mb-6 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-500 text-[11px] font-mono">
                    <span>DOCUMENT STRUCTURÉ</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.pdfGenerated.pages}
                    </span>
                  </div>
                  <p className="font-semibold text-slate-800 line-clamp-2 text-xs">
                    {item.pdfGenerated.title}
                  </p>
                </div>
              </div>

              {/* 2 Buttons as requested */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <button
                  onClick={() => setActiveModal({ type: 'source', sectorId: item.id })}
                  className="w-full py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <FileText className="h-3.5 w-3.5 text-slate-500" />
                  Voir l’appel d’offres source
                </button>

                <button
                  onClick={() => setActiveModal({ type: 'pdf', sectorId: item.id })}
                  className="w-full py-2.5 px-3 bg-[#1B263B] hover:bg-slate-800 text-[#B8935A] border border-[#B8935A]/40 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <FileCheck className="h-3.5 w-3.5 text-[#B8935A]" />
                  Voir le PDF généré
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Petite note at the bottom */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-sans italic flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
            Exemples fictifs à but démonstratif. Watermark « Exemple » ajouté.
          </p>
        </div>

      </div>

      {/* --- Interactive Modal Viewer --- */}
      <AnimatePresence>
        {activeModal && selectedSector && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-300 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="bg-[#1B263B] text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-700/80 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#B8935A]/20 border border-[#B8935A]/40 rounded-xl text-[#B8935A]">
                    {selectedSector.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#B8935A] uppercase">
                        Secteur {selectedSector.sector}
                      </span>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                        {activeModal.type === 'source' ? 'RFP Source Bruts' : 'Document PDF Généré'}
                      </span>
                    </div>
                    <h3 className="font-serif-heading text-lg font-bold text-white leading-snug">
                      {activeModal.type === 'source'
                        ? selectedSector.rfpSource.title
                        : selectedSector.pdfGenerated.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModal(null)}
                  className="text-slate-400 hover:text-white rounded-lg p-1.5 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body with Watermark Overlay */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 relative bg-slate-50 font-sans">
                
                {/* Diagonal Watermark Badge */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20 overflow-hidden opacity-15">
                  <span className="text-7xl sm:text-9xl font-extrabold font-serif-heading text-slate-900 -rotate-45 select-none tracking-widest uppercase">
                    EXEMPLE
                  </span>
                </div>

                {activeModal.type === 'source' ? (
                  /* VIEW: RFP SOURCE */
                  <div className="space-y-6 relative z-10">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100 font-mono">
                        <span>ÉMETTEUR : <strong>{selectedSector.rfpSource.issuer}</strong></span>
                        <span>RÉFÉRENCE : <strong>{selectedSector.rfpSource.reference}</strong></span>
                      </div>
                      
                      <p className="text-xs font-bold text-slate-700 uppercase font-mono pt-1">
                        Cahier des charges / Brief client brut reçu :
                      </p>

                      <div className="space-y-4 pt-1 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                        {selectedSector.rfpSource.content.map((paragraph, pIdx) => (
                          <div key={pIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 font-mono text-slate-800">
                            {paragraph}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                      <Sparkles className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Extraction automatique Deliverable Engine :</strong> L'agent IA identifie les contraintes HDS, le périmètre multi-sites, et génère le plan de réponse adapté en 10 minutes.
                      </div>
                    </div>
                  </div>
                ) : (
                  /* VIEW: PDF GENERATED */
                  <div className="space-y-6 relative z-10">
                    <div className="bg-white p-6 rounded-2xl border-2 border-[#B8935A]/40 shadow-md space-y-6">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                          <FileCheck className="h-5 w-5 text-[#B8935A]" />
                          <span className="font-serif-heading text-sm font-bold text-[#1B263B]">
                            Document PDF d'Exemple — Deliverable Engine
                          </span>
                        </div>
                        <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                          ✓ {selectedSector.pdfGenerated.pages} ({selectedSector.pdfGenerated.sectionsCount} sections)
                        </span>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase font-mono tracking-wider mb-2.5">
                          Points forts du document généré :
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                          {selectedSector.pdfGenerated.highlights.map((hl, hIdx) => (
                            <li key={hIdx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 font-medium flex items-center gap-1.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Section Breakdowns */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase font-mono tracking-wider mb-3">
                          Sommaire & extraits des 4 premières sections :
                        </h4>
                        <div className="space-y-3">
                          {selectedSector.pdfGenerated.sections.map((sec, sIdx) => (
                            <div key={sIdx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                              <span className="text-xs font-bold font-mono bg-[#1B263B] text-[#B8935A] px-2 py-1 rounded shrink-0">
                                {sec.number}
                              </span>
                              <div>
                                <h5 className="text-xs font-bold text-[#1B263B]">{sec.title}</h5>
                                <p className="text-xs text-slate-600 mt-0.5">{sec.excerpt}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Mise en page prête à l'envoi :</strong> Document mis en page avec en-têtes, numérotation de page, typographie soignée et zones d'ajustement sur-mesure.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="bg-slate-100 p-4 sm:p-5 border-t border-slate-200 flex items-center justify-between shrink-0">
                <span className="text-xs text-slate-500 italic font-sans">
                  Watermark « EXEMPLE » actif sur cette démonstration
                </span>
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 bg-[#1B263B] hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Fermer l'aperçu
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

