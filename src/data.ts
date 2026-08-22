/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FaqItem, PricingTier } from './types';

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'garantie-victoire',
    question: "Ce document garantit-il de gagner l'appel d'offres ?",
    answer: "Non, et nous tenons à être parfaitement clairs et transparents : aucun outil ne peut garantir une victoire. La qualité du mémoire technique est un critère déterminant (souvent 40 à 60% de la note dans la commande publique), mais la décision finale dépend aussi de votre adéquation tarifaire, de la pertinence de vos références et du fit avec le client. Notre promesse concrète : vous faire gagner 4 à 6 heures de travail en générant en 10 minutes une trame solide, ultra-structurée et personnalisée, prête à recevoir vos ajustements finaux."
  },
  {
    id: 'secteur-marche-sad-conseil',
    question: "Le document est-il vraiment adapté à mon secteur et type de marché (SAD / Conseil) ?",
    answer: "Oui. Lors de la saisie, vous qualifiez le type de marché : Système d'Acquisition Dynamique (SAD), mission de conseil / prestations intellectuelles, marché public classique ou consultation privée. Notre moteur analyse l'intégralité du cahier des charges, extrait les critères clés et intègre directement vos TJM, votre équipe et vos références pour produire un document ciblé, que ce soit sous le Code de la commande publique en France ou la Loi relative aux marchés publics du 17 juin 2016 en Belgique."
  },
  {
    id: 'document-tel-quel',
    question: "Puis-je utiliser le document tel quel sans modification ?",
    answer: "Le document généré est rédigé à 85-90% avec une structure professionnelle complète (synthèse managériale, méthodologie outillée, calendrier, gestion des risques, équipe et proposition financière). Toutefois, nous vous recommandons d'y consacrer 1 à 2 heures pour y apporter votre touche personnelle : anecdotes précises de vos missions passées, ajustements de style et validation de vos chiffres finaux."
  },
  {
    id: 'garantie-revision-24h',
    question: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
    answer: "Vous bénéficiez de notre Garantie Révision & Sérénité 24h : 1 révision ou régénération gratuite est systématiquement incluse pour chaque génération achetée. Si une section manque de précision ou ne correspond pas à l'esprit de votre consultation, envoyez-nous simplement un email avec vos remarques et nous relançons une adaptation sous 24h ouvrées — sans aucune justification à fournir."
  },
  {
    id: 'delais-reels',
    question: "Quels sont les délais réels de livraison ?",
    answer: "Votre dossier complet est généré et transmis par email en 10 minutes après confirmation de votre commande. Vous ne perdez plus 2 jours à bloquer votre planning sur une page blanche."
  },
  {
    id: 'confidentialite-rgpd',
    question: "Comment mes données et le contenu de l'appel d'offres sont-ils protégés (RGPD) ?",
    answer: "La confidentialité est absolue : vos données de proposition, tarifs et documents clients sont chiffrés de bout en bout (AES-256) et hébergés au sein de l'Union Européenne. Vos données ne sont JAMAIS utilisées pour entraîner des modèles d'intelligence artificielle publics et restent strictement votre propriété."
  },
  {
    id: 'difference-chatgpt',
    question: "Quelle est la différence avec ChatGPT ou Claude ?",
    answer: "Un modèle de langage grand public ne connaît ni les exigences formelles du Code de la commande publique (ou de la Loi belge 2016), ni les standards de présentation des cabinets de conseil. Deliverable Engine applique un cadre méthodologique éprouvé : matrice RACI, décomposition en phases, plan d'assurance qualité, gestion des risques (AMDEC) et grilles TJM/BPU exportables directement au format PDF professionnel."
  }
];

export const PRICING_DATA: PricingTier[] = [
  {
    id: 'unit',
    name: 'Génération Unique',
    price: '19 €',
    description: 'Tarif unique et transparent — sans abonnement ni engagement',
    generationsCount: 1,
    features: [
      '1 dossier complet généré en 10 minutes',
      'Format PDF structuré & prêt à finaliser (8 à 12 pages)',
      'Spécialisé SAD & Missions de conseil',
      'Conforme marchés France (CCP) & Belgique (Loi 2016)',
      '1 révision / régénération gratuite sous 24h incluse',
      'Facture avec TVA téléchargeable automatiquement',
      'Paiement sécurisé via Lemon Squeezy'
    ],
    ctaText: 'Générer ma réponse (19 €)',
    recommended: true
  }
];

export interface MasterModelData {
  id: string;
  type: 'sad' | 'conseil';
  badge: string;
  title: string;
  subtitle: string;
  targetMarket: string;
  estimatedPages: string;
  timeSaved: string;
  summary: string;
  highlights: string[];
  tableOfContents: string[];
  sampleSections: Array<{
    number: string;
    title: string;
    description: string;
    keyExcerpt: string;
  }>;
  downloadUrl: string;
}

export const MASTER_MODELS: MasterModelData[] = [
  {
    id: 'modele-sad',
    type: 'sad',
    badge: 'Système d\'Acquisition Dynamique (SAD)',
    title: 'Mémoire Technique — Marché Subséquent SAD Numérique & AMO',
    subtitle: 'Accord-cadre SAD pour la modernisation des Systèmes d\'Information et l\'assistance à maîtrise d\'ouvrage',
    targetMarket: 'Marché Public (France & Belgique) · Procédure SAD / Accord-cadre',
    estimatedPages: '12 pages structurées',
    timeSaved: 'Gain estimé : 4h30 de rédaction',
    summary: 'Modèle spécialement conçu pour répondre aux marchés spécifiques issus de Systèmes d\'Acquisition Dynamiques (SAD). Il intègre les clauses administratives obligatoires, la qualification des profils consultants, la grille de TJM/BPU et la méthodologie de delivery outillée.',
    highlights: [
      'Conformité stricte aux exigences des marchés subséquents SAD',
      'Décomposition des expertises et niveaux de séniorité (TJM)',
      'Plan d\'assurance qualité (PAQ) & Dispositif de réversibilité',
      'Gouvernance tripartite Maîtrise d\'Ouvrage / AMO / Exploitation'
    ],
    tableOfContents: [
      '1. Synthèse exécutive & engagements contractuels',
      '2. Compréhension du contexte & objectifs de la consultation SAD',
      '3. Méthodologie d\'intervention & outillage de pilotage',
      '4. Organisation de l\'équipe dédiée & matrice des compétences',
      '5. Plan d\'assurance qualité, RSE & Gestion des risques',
      '6. Grille tarifaire BPU / TJM & calendrier prévisionnel'
    ],
    sampleSections: [
      {
        number: '01',
        title: 'Synthèse Exécutive & Engagements',
        description: 'Positionnement stratégique et engagements formels de délai, de qualité et de respect de l\'accord-cadre SAD.',
        keyExcerpt: 'Dans le cadre du présent marché subséquent rattaché au Système d\'Acquisition Dynamique (SAD), notre équipe s\'engage sur une mobilisation sous 5 jours ouvrés, une méthodologie certifiée et une transparence totale sur le suivi d\'imputation budgétaire.'
      },
      {
        number: '02',
        title: 'Méthodologie d\'Intervention & Jalons',
        description: 'Découpage opérationnel en 4 phases : Cadrage flash, Exécution itérative, Recette technique, et Transfert de compétences.',
        keyExcerpt: 'L\'approche proposée combine la rigueur du cadre public (livrables documentés, comités de suivi bi-mensuels) avec la souplesse opérationnelle nécessaire aux projets à forte composante technologique.'
      },
      {
        number: '03',
        title: 'Grille de TJM & Ventilation Budgétaire',
        description: 'Présentation claire des profils (Directeur de mission, Consultant Senior, Expert technique) avec taux journaliers moyens et unité d\'œuvre.',
        keyExcerpt: 'Chaque profil d\'intervenant est qualifié selon la grille standard du SAD, garantissant la traçabilité des compétences, le respect des plafonds tarifaires et une prévisibilité budgétaire totale.'
      }
    ],
    downloadUrl: '/docs/rfp-sante-genere.pdf'
  },
  {
    id: 'modele-conseil',
    type: 'conseil',
    badge: 'Mission de Conseil & Prestations Intellectuelles',
    title: 'Proposition d\'Intervention — Conseil en Stratégie & Organisation',
    subtitle: 'Accompagnement de la Direction Générale : Diagnostic, Co-design organisationnel & Conduite du changement',
    targetMarket: 'Consultation Privée & Grands Comptes / PME · Prestations Intellectuelles',
    estimatedPages: '10 pages de proposition',
    timeSaved: 'Gain estimé : 3h45 de rédaction',
    summary: 'Modèle haute précision pour les consultants et cabinets indépendants répondant à des appels d\'offres de prestations intellectuelles. Structure élégante inspirée des standards des cabinets de conseil de direction.',
    highlights: [
      'Cadrage stratégique à fort impact managérial (Executive Summary)',
      'Démarche collaborative et ateliers de co-construction',
      'Matrice d\'évaluation de la maturité et plan de conduite du changement',
      'Modalités financières au forfait ou au temps passé avec jalons de facturation'
    ],
    tableOfContents: [
      '1. Synthèse managériale (Executive Summary)',
      '2. Analyse des enjeux stratégiques et diagnostic de situation',
      '3. Démarche méthodologique en 4 phases d\'intervention',
      '4. Plan de conduite du changement & engagement des parties prenantes',
      '5. Équipe d\'intervention, CV synthétiques & Références',
      '6. Conditions financières, jalons et calendrier d\'exécution'
    ],
    sampleSections: [
      {
        number: '01',
        title: 'Synthèse Managériale (Executive Summary)',
        description: 'Résumé percutant des enjeux business, de la vision cible et des facteurs clés de succès de la transformation.',
        keyExcerpt: 'Face aux défis d\'alignement organisationnel et d\'accélération des cycles de décision, nous proposons une démarche pragmatique orientée résultats, assurant l\'adhésion des équipes dès les premières semaines d\'intervention.'
      },
      {
        number: '02',
        title: 'Démarche en 4 Phases d\'Intervention',
        description: 'Phase 1 : Immersion & Diagnostic | Phase 2 : Co-conception de la cible | Phase 3 : Expérimentation | Phase 4 : Déploiement & Pérennisation.',
        keyExcerpt: 'Notre méthodologie repose sur une co-construction systématique avec vos équipes dirigeantes et opérationnelles pour garantir l\'appropriation des recommandations et un impact mesurable dès le 2ème mois.'
      },
      {
        number: '03',
        title: 'Gouvernance, Équipe & Budget Forfaitaire',
        description: 'Matrice des responsabilités, profils des consultants seniors et échéancier de facturation articulé sur la validation des livrables clés.',
        keyExcerpt: 'Une gouvernance resserrée (COPIL mensuel, point hebdo d\'avancement) associée à un forfait clair par jalon, évitant tout dépassement budgétaire imprévu.'
      }
    ],
    downloadUrl: '/docs/rfp-sante-genere.pdf'
  }
];

export const DELIVERABLE_EXAMPLES = MASTER_MODELS;

