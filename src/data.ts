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
    id: 'propale-1',
    title: 'Proposition d\'Accompagnement',
    type: 'propale',
    tag: 'Proposition Commerciale',
    description: 'Proposition commerciale de 8 pages générée pour un grand compte technologique, incluant la planification, le budget et la gouvernance.',
    timeSaved: 'Gain : 3h45 de rédaction',
    previewLines: [
      '1. Contexte stratégique et enjeux de transformation',
      '2. Objectifs qualitatifs et quantitatifs du projet',
      '3. Méthodologie agile et plan d\'accompagnement détaillé',
      '4. Budget prévisionnel et ventilation des livrables'
    ],
    contentHtml: `
      <div class="google-doc-sim">
        <div class="border-b border-gray-200 pb-6 mb-6 text-center">
          <p class="text-xs font-mono text-blue-600 tracking-wider uppercase mb-1">PROPOSITION COMMERCIALE — EXEMPLE GÉNÉRÉ EN 10 MIN</p>
          <h1 class="text-2xl font-bold text-gray-900 font-display">Proposition d'Accompagnement Stratégique</h1>
          <p class="text-sm text-gray-500 mt-1">Client : <strong class="text-gray-700">Acme Corporation SAS</strong> | Réf : PROP-2026-042</p>
          <div class="mt-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span>✓ Prêt à envoyer</span>
          </div>
        </div>

        <div class="space-y-6 text-sm text-gray-800 leading-relaxed">
          <div>
            <h2 class="text-base font-semibold text-gray-900 border-l-4 border-blue-600 pl-2 mb-2 font-display">1. Contexte & Enjeux Clients</h2>
            <p class="mb-2">
              Le groupe <strong>Acme Corporation</strong> fait face à une accélération sans précédent de ses canaux de distribution en ligne, représentant désormais plus de 45% de son chiffre d'affaires consolidé. Toutefois, l'architecture IT historique et l'organisation des équipes d'ingénierie créent des frictions opérationnelles qui limitent la vélocité des déploiements.
            </p>
            <p>
              Dans ce contexte, Acme souhaite s'associer les services d'un expert indépendant pour rationaliser ses cycles de delivery, redéfinir la gouvernance produit et aligner les équipes techniques avec la feuille de route marketing.
            </p>
          </div>

          <div>
            <h2 class="text-base font-semibold text-gray-900 border-l-4 border-blue-600 pl-2 mb-2 font-display">2. Objectifs Clés de la Mission</h2>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Réduction du Time-to-Market :</strong> Diviser par deux le délai de mise en production des fonctionnalités majeures.</li>
              <li><strong>Fluidification de la collaboration :</strong> Clarifier le modèle d'interaction Product Owner / Tech Lead.</li>
              <li><strong>Sécurisation du plan de charge :</strong> Identifier et résorber les goulots d'étranglement de la roadmap S2 2026.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-base font-semibold text-gray-900 border-l-4 border-blue-600 pl-2 mb-2 font-display">3. Approche Méthodologique & Phases</h2>
            <div class="overflow-x-auto my-3">
              <table class="w-full text-left border-collapse border border-gray-200">
                <thead>
                  <tr class="bg-gray-50 text-xs font-semibold text-gray-700 border-b border-gray-200">
                    <th class="p-2.5 border-r border-gray-200">Phase / Échéance</th>
                    <th class="p-2.5 border-r border-gray-200">Activités Principales</th>
                    <th class="p-2.5">Livrables Associés</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 text-xs">
                  <tr>
                    <td class="p-2.5 font-medium border-r border-gray-200"><strong>Phase 1 (Semaines 1-2)</strong><br/>Audit & Cadrage</td>
                    <td class="p-2.5 border-r border-gray-200">Entretiens avec les parties prenantes, diagnostic des flux Jira, cartographie des rôles.</td>
                    <td class="p-2.5 text-blue-600 font-medium">Rapport d'Audit Flash & Matrice de maturité agile</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-medium border-r border-gray-200"><strong>Phase 2 (Semaines 3-5)</strong><br/>Co-conception du modèle</td>
                    <td class="p-2.5 border-r border-gray-200">Ateliers de design de processus, définition des indicateurs de vélocité (KPIs).</td>
                    <td class="p-2.5 text-blue-600 font-medium">Playbook d'organisation & Schéma de gouvernance cible</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-medium border-r border-gray-200"><strong>Phase 3 (Semaines 6-8)</strong><br/>Lancement & Coaching</td>
                    <td class="p-2.5 border-r border-gray-200">Mise en place des nouveaux rituels, facilitation des premiers sprints, bilan de transition.</td>
                    <td class="p-2.5 text-blue-600 font-medium">Tableau de bord de vélocité & Rapport de fin de mission</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-400 p-3.5 rounded-r">
            <p class="text-xs text-blue-800">
              💡 <strong>Note de l'agent d'écriture Deliverable Engine :</strong> Ce document a été configuré pour respecter la charte graphique d'Acme en y incluant la structure en trois phases "Audit-Conception-Coaching" conforme à votre méthodologie habituelle validée lors de l'onboarding.
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'rapport-1',
    title: 'Audit d\'Architecture Cloud',
    type: 'rapport',
    tag: 'Rapport d\'Audit de Mission',
    description: 'Rapport d\'audit technique exhaustif mettant en évidence les failles d\'infrastructure et fournissant des recommandations prioritaires.',
    timeSaved: 'Gain : 4h15 de rédaction',
    previewLines: [
      '1. Synthèse managériale et résumé des préconisations',
      '2. Analyse détaillée de l\'infrastructure cloud AWS',
      '3. Cartographie des vulnérabilités de sécurité',
      '4. Plan d\'action prioritaire avec chiffrage d\'effort'
    ],
    contentHtml: `
      <div class="google-doc-sim">
        <div class="border-b border-gray-200 pb-6 mb-6 text-center">
          <p class="text-xs font-mono text-purple-600 tracking-wider uppercase mb-1">RAPPORT DE MISSION — EXEMPLE GÉNÉRÉ EN 10 MIN</p>
          <h1 class="text-2xl font-bold text-gray-900 font-display">Rapport d'Audit d'Architecture Cloud</h1>
          <p class="text-sm text-gray-500 mt-1">Client : <strong class="text-gray-700">FinTech Express SAS</strong> | Projet : CloudShield</p>
          <div class="mt-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span>✓ Prêt à envoyer</span>
          </div>
        </div>

        <div class="space-y-6 text-sm text-gray-800 leading-relaxed">
          <div>
            <h2 class="text-base font-semibold text-gray-900 border-l-4 border-purple-600 pl-2 mb-2 font-display">1. Synthèse Managériale (Executive Summary)</h2>
            <p>
              À la demande de la direction générale de <strong>FinTech Express</strong>, nous avons mené une évaluation approfondie de l'infrastructure d'hébergement AWS supportant l'application de paiement mobile 'ExpressPay'. Cet audit s'est concentré sur trois axes fondamentaux : la <strong>sécurité</strong> des données financières, la <strong>résilience</strong> face aux pannes, et l'<strong>optimisation des coûts</strong> opérationnels.
            </p>
            <p class="mt-2">
              Le diagnostic révèle une architecture globalement fonctionnelle, mais présentant d'importantes faiblesses de configuration réseau (absence de sous-réseaux isolés pour les bases de données) et un sur-dimensionnement de 35% sur les serveurs de pré-production.
            </p>
          </div>

          <div>
            <h2 class="text-base font-semibold text-gray-900 border-l-4 border-purple-600 pl-2 mb-2 font-display">2. Synthèse des Risques Détectés</h2>
            <div class="space-y-2 mt-3">
              <div class="flex items-start gap-2.5 p-2.5 bg-red-50 rounded border border-red-100">
                <span class="px-2 py-0.5 bg-red-100 text-red-800 text-[10px] font-bold rounded uppercase mt-0.5">CRITIQUE</span>
                <div>
                  <h4 class="text-xs font-bold text-red-900">Bases de données accessibles publiquement</h4>
                  <p class="text-xs text-red-700">L'instance RDS PostgreSQL de production ne réside pas dans un VPC privé, augmentant drastiquement le risque d'attaques par force brute.</p>
                </div>
              </div>

              <div class="flex items-start gap-2.5 p-2.5 bg-amber-50 rounded border border-amber-100">
                <span class="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded uppercase mt-0.5">MOYEN</span>
                <div>
                  <h4 class="text-xs font-bold text-amber-900">Politique de sauvegarde non automatisée</h4>
                  <p class="text-xs text-amber-700">Les snapshots EBS sont déclenchés manuellement par les équipes de développement une fois par semaine au lieu d'une rétention quotidienne automatique.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-base font-semibold text-gray-900 border-l-4 border-purple-600 pl-2 mb-2 font-display">3. Recommandations Clés</h2>
            <ol class="list-decimal pl-5 space-y-1.5 font-medium text-xs">
              <li>
                <span class="text-gray-900">Migrer les bases de données RDS PostgreSQL vers un sous-réseau privé VPC.</span>
                <span class="block text-gray-500 font-normal mt-0.5">Effort : Faible (2h) | Impact : Critique</span>
              </li>
              <li>
                <span class="text-gray-900">Activer AWS Backup avec une politique de rétention de 30 jours glissants.</span>
                <span class="block text-gray-500 font-normal mt-0.5">Effort : Très Faible (30m) | Impact : Élevé</span>
              </li>
              <li>
                <span class="text-gray-900">Mettre en place des règles de mise en veille automatique des environnements de dev/test hors horaires ouvrés.</span>
                <span class="block text-gray-500 font-normal mt-0.5">Effort : Moyen (1 jour) | Impact : Réduction de coût immédiate (-25%)</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'cr-1',
    title: 'Compte-Rendu de COPIL n°4',
    type: 'cr',
    tag: 'Compte-Rendu de Réunion',
    description: 'Compte-rendu de comité de pilotage structuré avec liste des décisions validées, synthèse des échanges et plan d\'action d\'équipe.',
    timeSaved: 'Gain : 1h30 de rédaction',
    previewLines: [
      '1. Liste des participants et statut d\'avancement global',
      '2. Revue des livrables de la phase de cadrage',
      '3. Arbitrages et décisions majeures validées par le board',
      '4. Plan d\'action partagé avec rôles et dates d\'échéance'
    ],
    contentHtml: `
      <div class="google-doc-sim">
        <div class="border-b border-gray-200 pb-6 mb-6 text-center">
          <p class="text-xs font-mono text-emerald-600 tracking-wider uppercase mb-1">COMPTE-RENDU — EXEMPLE GÉNÉRÉ EN 10 MIN</p>
          <h1 class="text-2xl font-bold text-gray-900 font-display">Compte-Rendu de COPIL n°4 — Projet Horizon</h1>
          <p class="text-sm text-gray-500 mt-1">Date : <strong class="text-gray-700">18 Juillet 2026</strong> | Animation : <strong class="text-gray-700">M. Durand (Consultant Lead)</strong></p>
          <div class="mt-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span>✓ Prêt à envoyer</span>
          </div>
        </div>

        <div class="space-y-6 text-sm text-gray-800 leading-relaxed">
          <div>
            <h2 class="text-base font-semibold text-gray-900 border-l-4 border-emerald-600 pl-2 mb-2 font-display">1. Liste des Présences</h2>
            <div class="grid grid-cols-2 gap-2 text-xs bg-gray-50 p-2.5 rounded">
              <div>
                <p class="font-semibold text-gray-700">Présents :</p>
                <ul class="list-disc pl-4 mt-1 space-y-0.5">
                  <li>Jean L. (Directeur Sponsor)</li>
                  <li>Sophie M. (Responsable Métier)</li>
                  <li>Marc D. (Consultant Delivery)</li>
                </ul>
              </div>
              <div>
                <p class="font-semibold text-gray-700">Excusés :</p>
                <ul class="list-disc pl-4 mt-1 space-y-0.5">
                  <li>Pierre Y. (DSI Adjoint)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-base font-semibold text-gray-900 border-l-4 border-emerald-600 pl-2 mb-2 font-display">2. Points d'Arbitrage & Décisions</h2>
            <div class="space-y-2">
              <div class="flex gap-2.5">
                <span class="text-emerald-600 font-bold font-mono">D.04.1</span>
                <p><strong>Validation du périmètre fonctionnel du MVP :</strong> Le scénario 'C' (paiement par virement instantané uniquement) est validé à l'unanimité pour la première release.</p>
              </div>
              <div class="flex gap-2.5">
                <span class="text-emerald-600 font-bold font-mono">D.04.2</span>
                <p><strong>Décalage de la date de Go-Live :</strong> La mise en production est officiellement décalée de 2 semaines, fixée désormais au 15 octobre 2026, pour intégrer la phase de conformité réglementaire.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-base font-semibold text-gray-900 border-l-4 border-emerald-600 pl-2 mb-2 font-display">3. Plan d'Action & Prochaines Échéances</h2>
            <div class="overflow-x-auto my-3">
              <table class="w-full text-left border-collapse border border-gray-200">
                <thead>
                  <tr class="bg-gray-50 text-xs font-semibold text-gray-700 border-b border-gray-200">
                    <th class="p-2 border-r border-gray-200">Action</th>
                    <th class="p-2 border-r border-gray-200">Responsable</th>
                    <th class="p-2">Échéance</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 text-xs">
                  <tr>
                    <td class="p-2 border-r border-gray-200">Rédaction des spécifications fonctionnelles détaillées du MVP</td>
                    <td class="p-2 border-r border-gray-200 font-medium">Marc D.</td>
                    <td class="p-2 text-gray-600 font-mono">25 Juillet 2026</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-r border-gray-200">Dépôt du dossier de conformité auprès de l'audit interne</td>
                    <td class="p-2 border-r border-gray-200 font-medium">Sophie M.</td>
                    <td class="p-2 text-gray-600 font-mono">30 Juillet 2026</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-r border-gray-200">Planification des tests d'intégration avec l'équipe de dev</td>
                    <td class="p-2 border-r border-gray-200 font-medium">Jean L.</td>
                    <td class="p-2 text-gray-600 font-mono">05 Août 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `
  }
];
