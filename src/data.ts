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
    name: 'Offre de lancement',
    price: '19 €',
    description: 'Tarif de lancement exclusif — sans abonnement ni engagement',
    generationsCount: 1,
    features: [
      '1 dossier complet généré en 5 minutes (15 à 18 pages)',
      'Diagramme de Gantt & Planning prévisionnel phasé inclus',
      'Offre financière détaillée & Grille TJM au centime près',
      'Adapté à votre consultation : Marché Public (MAPA), SAD ou Conseil',
      'Conforme aux exigences des acheteurs publics & privés',
      '1 révision ou régénération gratuite sous 24h incluse',
      'Facture avec TVA téléchargeable automatiquement',
      'Paiement sécurisé via Lemon Squeezy'
    ],
    ctaText: "Profiter de l'offre de lancement (19 €)",
    recommended: true
  }
];

export interface MasterModelData {
  id: string;
  type: 'sad' | 'conseil' | 'mapa';
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
    summary: 'Modèle adapté pour répondre aux consultations issues de Systèmes d\'Acquisition Dynamiques (SAD). Il intègre les rubriques d\'usage : qualification des profils, grille de TJM/BPU et méthodologie d\'intervention.',
    highlights: [
      'Structure adaptée aux marchés subséquents SAD',
      'Décomposition des profils et taux journaliers (TJM)',
      'Plan qualité & Modalités de suivi de projet',
      'Organisation de l\'équipe et gouvernance'
    ],
    tableOfContents: [
      '1. Synthèse exécutive & engagements',
      '2. Compréhension du contexte & objectifs de la consultation',
      '3. Méthodologie d\'intervention & organisation',
      '4. Équipe dédiée & compétences mobilisées',
      '5. Suivi qualité & Gestion des risques',
      '6. Grille tarifaire BPU / TJM & calendrier prévisionnel'
    ],
    sampleSections: [
      {
        number: '01',
        title: 'Synthèse Exécutive & Engagements',
        description: 'Positionnement de la réponse et engagements de délai et d\'organisation.',
        keyExcerpt: 'Dans le cadre de cette consultation rattachée au Système d\'Acquisition Dynamique (SAD), nous détaillons notre calendrier d\'intervention, notre méthodologie de travail et le suivi d\'imputation budgétaire.'
      },
      {
        number: '02',
        title: 'Méthodologie d\'Intervention & Jalons',
        description: 'Découpage opérationnel par phases : Cadrage, Exécution, Validation et Restitution.',
        keyExcerpt: 'L\'approche proposée combine la clarté du cadre méthodologique avec des comités de suivi réguliers pour sécuriser chaque étape du projet.'
      },
      {
        number: '03',
        title: 'Grille de TJM & Ventilation Budgétaire',
        description: 'Présentation des profils (Directeur de mission, Consultant, Expert technique) avec taux journaliers moyens et estimation de charge.',
        keyExcerpt: 'Chaque profil d\'intervenant est présenté avec son niveau d\'expérience, assurant la clarté des compétences mobilisées et une visibilité budgétaire nette.'
      }
    ],
    downloadUrl: '/docs/exemple-dossier-deliverable-engine.pdf'
  },
  {
    id: 'modele-conseil',
    type: 'conseil',
    badge: 'Mission de Conseil & Prestations Intellectuelles',
    title: 'Proposition d\'Intervention — Conseil en Stratégie & Organisation',
    subtitle: 'Accompagnement opérationnel : Diagnostic, Cadrage organisationnel & Conduite du changement',
    targetMarket: 'Consultation Privée & Marchés · Prestations Intellectuelles',
    estimatedPages: '10 pages de proposition',
    timeSaved: 'Gain estimé : 3h45 de rédaction',
    summary: 'Modèle structuré pour les consultants et cabinets indépendants répondant à des appels d\'offres de prestations intellectuelles et missions de conseil.',
    highlights: [
      'Cadrage des enjeux et synthèse exécutive',
      'Démarche méthodologique par étapes de travail',
      'Organisation des ateliers et plan de conduite du changement',
      'Modalités financières au forfait ou régie avec jalons'
    ],
    tableOfContents: [
      '1. Synthèse managériale (Executive Summary)',
      '2. Analyse des enjeux et compréhension du besoin',
      '3. Démarche méthodologique par phases',
      '4. Plan de conduite du changement et ateliers',
      '5. Équipe d\'intervention, CV résumés & Références',
      '6. Conditions financières, jalons et calendrier'
    ],
    sampleSections: [
      {
        number: '01',
        title: 'Synthèse Managériale (Executive Summary)',
        description: 'Résumé des objectifs du projet, de l\'approche proposée et des résultats attendus.',
        keyExcerpt: 'Pour répondre aux objectifs d\'alignement organisationnel et de clarté des processus, nous proposons une démarche structurée et pragmatique, associant les équipes dès les premières étapes.'
      },
      {
        number: '02',
        title: 'Démarche en 4 Phases d\'Intervention',
        description: 'Phase 1 : Cadrage & Diagnostic | Phase 2 : Conception de la cible | Phase 3 : Mise en œuvre pilote | Phase 4 : Déploiement.',
        keyExcerpt: 'Notre méthodologie repose sur des points d\'étape réguliers avec vos référents pour valider les orientations et adapter les livrables au terrain.'
      },
      {
        number: '03',
        title: 'Gouvernance, Équipe & Budget Forfaitaire',
        description: 'Répartition des rôles, présentation de l\'équipe et calendrier de facturation par livrable.',
        keyExcerpt: 'Une gouvernance simple (comité de suivi périodique, points de coordination) associée à un découpage clair par jalon budgétaire.'
      }
    ],
    downloadUrl: '/docs/exemple-dossier-deliverable-engine.pdf'
  },
  {
    id: 'modele-mapa',
    type: 'mapa',
    badge: 'Marché à Procédure Adaptée (MAPA)',
    title: 'Mémoire Technique — Marché Public MAPA Services & Prestations',
    subtitle: 'Réponse proportionnée et structurée aux consultations en procédure adaptée (art. L. 2123-1 du CCP)',
    targetMarket: 'Marché Public (Collectivités, Ministères, Établissements) · Procédure MAPA',
    estimatedPages: '10 pages ciblées',
    timeSaved: 'Gain estimé : 4h00 de rédaction',
    summary: 'Modèle optimisé pour les Marchés à Procédure Adaptée (MAPA). Il répond aux critères d\'évaluation de l\'acheteur public (valeur technique, organisation, délais d\'exécution, cohérence budgétaire) avec un mémoire clair, direct et sans lourdeur administrative superflue.',
    highlights: [
      'Adéquation avec les critères de notation du Règlement de Consultation (RC)',
      'Méthodologie opérationnelle et calendrier d\'exécution détaillé',
      'Affectation des compétences et organigramme de l\'équipe',
      'Décomposition du prix global et forfaitaire (DPGF) ou BPU'
    ],
    tableOfContents: [
      '1. Note de cadrage & synthèse de l\'offre',
      '2. Compréhension du besoin & contraintes du pouvoir adjudicateur',
      '3. Méthodologie d\'intervention & phasage opérationnel',
      '4. Moyens humains dédiés & compétences mobilisées',
      '5. Démarche environnementale (RSE) & Gestion des risques',
      '6. Décomposition financière & calendrier d\'exécution'
    ],
    sampleSections: [
      {
        number: '01',
        title: 'Note de Cadrage & Engagements de l\'Offre',
        description: 'Présentation synthétique de l\'offre et respect des exigences du cahier des charges.',
        keyExcerpt: 'Dans le cadre de cette consultation en procédure adaptée, notre proposition garantit une prise en compte intégrale des contraintes opérationnelles, avec un interlocuteur unique dédié et une réactivité sous 24 heures.'
      },
      {
        number: '02',
        title: 'Méthodologie Opérationnelle & Phasage',
        description: 'Déroulement chronologique des prestations, livrables intermédiaires et validation.',
        keyExcerpt: 'L\'organisation proposée s\'articule autour de jalons précis avec fiches de validation intermédiaires, assurant à l\'acheteur une visibilité continue sur l\'avancement.'
      },
      {
        number: '03',
        title: 'Moyens Humains & Décomposition Tarifaire',
        description: 'Affectation des compétences, calendrier d\'intervention et ventilation détaillée des coûts.',
        keyExcerpt: 'Chaque intervenant mobilisé dispose de l\'expérience requise pour la mission. La décomposition financière détaille la charge par étape pour une parfaite transparence budgétaire.'
      }
    ],
    downloadUrl: '/docs/exemple-dossier-deliverable-engine.pdf'
  }
];

export const DELIVERABLE_EXAMPLES = MASTER_MODELS;

