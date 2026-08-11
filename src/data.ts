/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FaqItem, PricingTier, DeliverableExample } from './types';

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: "Pourquoi ne pas utiliser ChatGPT ou Gemini directement ?",
    answer: `ChatGPT et Gemini sont des outils généraux. Ils génèrent du texte — pas une proposition RFP structurée.

Avec Deliverable Engine, vous obtenez :
— Une structure en 9 sections prête à l'emploi (lettre d'accompagnement, compréhension des enjeux, proposition, planning, équipe, tarification, cadre juridique...)
— Vos vrais chiffres injectés automatiquement : budget, dates, effectifs, volume d'activité
— Un document de 8 à 11 pages en moins de 10 minutes

Avec ChatGPT, vous passez 30 à 60 minutes à structurer, reformuler, corriger les chiffres et vérifier la cohérence. Ici, vous recevez un document structuré directement exploitable.`
  },
  {
    id: 'faq-2',
    question: "Comment fonctionne l'extraction automatique des données ?",
    answer: `Vous collez le texte de votre appel d'offres. Notre moteur analyse automatiquement le document et extrait :

— Le budget (fourchette complète)
— Les dates clés (remise, auditions, notification, démarrage)
— L'effectif et le volume d'activité de l'organisation cliente
— Le chiffre d'affaires ou budget annuel
— La ville et l'adresse du siège

Ces données sont injectées directement dans le document généré. Aucune saisie manuelle de ces informations n'est requise.`
  },
  {
    id: 'faq-3',
    question: "Que contient exactement le document généré ?",
    answer: `Le document généré contient 9 sections structurées :

0. Synthèse (en bref)
1. Lettre d'accompagnement
2. Compréhension de vos enjeux (avec tableau de données et impact chiffré)
3. Proposition en 3 axes
4. Approche et planning (méthodologie en 6 phases, planning, matrice des risques)
5. Équipe et gouvernance
6. Références clients
7. Tarification (2 options : forfait global et régie avec plafonnement)
8. Cadre juridique (contrat, confidentialité, PI, RGPD, réversibilité)
9. Prochaines étapes (calendrier de la consultation)

Les sections contenant vos informations propres (références réelles, noms de consultants, montants définitifs) sont indiquées par des placeholders [À PERSONNALISER].`
  },
  {
    id: 'faq-4',
    question: "Comment personnaliser le document reçu ?",
    answer: `Le PDF reçu est un document de travail structuré. Pour le personnaliser :

1. Copiez le texte du PDF dans Word, Google Docs ou tout éditeur de votre choix
2. Remplacez les placeholders [À PERSONNALISER] par vos vraies informations
3. Ajoutez vos références clients, les CV de vos consultants, vos tarifs réels
4. Adaptez le ton et les formulations selon vos préférences
5. Appliquez votre charte graphique si souhaité

Le document est conçu comme une base de travail complète — pas comme un document finalisé. Vous gagnez plusieurs heures de rédaction et de structuration.`
  },
  {
    id: 'faq-5',
    question: "Mes données sont-elles sécurisées ?",
    answer: `Oui. Trois garanties concrètes :

1. Hébergement Europe — vos données sont stockées et traitées en Union Européenne.
2. Aucun réentraînement — vos documents ne servent jamais à entraîner des modèles IA.
3. Transmission chiffrée — toutes les communications sont chiffrées (HTTPS/TLS).

Votre appel d'offres est traité uniquement pour générer votre document.`
  },
  {
    id: 'faq-6',
    question: "Combien de temps faut-il pour recevoir le PDF ?",
    answer: `En général moins de 10 minutes après validation du paiement.

Le document est envoyé directement par email à l'adresse renseignée lors de la commande.

Si vous ne recevez rien dans les 15 minutes, vérifiez vos spams ou contactez support@deliverable-engine.io.`
  },
  {
    id: 'faq-7',
    question: "Pour quels secteurs et types de missions est-ce adapté ?",
    answer: `Deliverable Engine fonctionne sur tous les secteurs d'activité.

Testé et validé sur :
— Transformation digitale et refonte SI
— Conseil en organisation et conduite du changement
— Accompagnement hospitalier et SIH (santé)
— BTP et construction
— RH, stratégie, finance, comptabilité

Le moteur s'adapte automatiquement au vocabulaire du secteur détecté dans votre appel d'offres. Vous pouvez consulter des exemples concrets dans la section Aperçu de la page d'accueil.`
  },
  {
    id: 'faq-8',
    question: "Y a-t-il un abonnement ou des frais cachés ?",
    answer: `Non. Le modèle est simple :

— 19 € par génération (offre de lancement)
— Aucun abonnement mensuel
— Aucun engagement
— Aucun frais caché
— Facture disponible pour chaque achat

Vous payez uniquement quand vous en avez besoin.`
  }
];


export const PRICING_DATA: PricingTier[] = [ 
];

export const DELIVERABLE_EXAMPLES: DeliverableExample[] = [
  {
    id: 'sante',
    title: 'Secteur Santé — CHU de Valméran',
    type: 'rfp-response',
    tag: 'Santé',
    description: 'Réponse à un appel d\'offres du CHU de Valméran pour la transformation du parcours patient et l\'optimisation du système d\'information hospitalier.',
    timeSaved: '8 500 agents · 14 mois · 380 000 – 620 000 € HT',
    previewLines: [
      'Budget, dates et effectifs extraits automatiquement',
      'Terminologie santé adaptée (agents, SIH, parcours patient)',
      '9 sections structurées prêtes à personnaliser',
      'Planning, risques, gouvernance inclus'
    ],
    sourceUrl: 'https://deliverableengine.omarmarco2023.workers.dev/docs/AppelDoffreSanteSource.pdf',
    generatedUrl: 'https://deliverableengine.omarmarco2023.workers.dev/docs/rfp-sante-genere.pdf',
    contentHtml: ''
  },
  {
    id: 'digital',
    title: 'Secteur Digital — Groupe Meridian',
    type: 'rfp-response',
    tag: 'Transformation Digitale',
    description: 'Réponse à un appel d\'offres du Groupe Meridian pour la transformation digitale et la refonte du système d\'information métier.',
    timeSaved: '1 200 collaborateurs · 22 mois · 950 000 – 1 600 000 € HT',
    previewLines: [
      'Extraction automatique : budget, 9 sites, 4 000 commandes/mois',
      'Compatibilité SAP intégrée dans la proposition',
      'Méthodologie en 6 phases avec planning détaillé',
      'Cadre juridique complet (PI, RGPD, réversibilité)'
    ],
    sourceUrl: 'https://deliverableengine.omarmarco2023.workers.dev/docs/AppelDoffreDigitSource.pdf',
    generatedUrl: 'https://deliverableengine.omarmarco2023.workers.dev/docs/rfp-digital-genere.pdf',
    contentHtml: ''
    <p className="mt-10 text-center text-xs text-slate-400 italic">
  Les noms d'organisations, chiffres et références utilisés dans ces exemples
  sont entièrement fictifs et créés à des fins de démonstration.
  Toute ressemblance avec des entités réelles est purement fortuite.
</p>
  },
  {
    id: 'btp',
    title: 'Secteur BTP — BatiNova',
    type: 'rfp-response',
    tag: 'BTP / Construction',
    description: 'Réponse à un appel d\'offres de BatiNova pour l\'accompagnement à la transformation numérique dans le secteur du BTP.',
    timeSaved: '680 collaborateurs · 20 mois · 850 000 – 1 400 000 € HT',
    previewLines: [
      'Vocabulaire BTP adapté (chantiers, agences régionales)',
      'Extraction automatique des données du RFP',
      'Proposition structurée en 3 axes avec planning',
      'Matrice des risques et gouvernance projet'
    ],
    sourceUrl: 'https://deliverableengine.omarmarco2023.workers.dev/docs/AppelDoffreBTPSource.pdf',
    generatedUrl: 'https://deliverableengine.omarmarco2023.workers.dev/docs/rfp-btp-genere.pdf',
    contentHtml: ''
  }
];
