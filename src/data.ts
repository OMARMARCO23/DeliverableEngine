/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FaqItem, PricingTier, DeliverableExample } from './types';

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'why-not-chatgpt',
    question: "Pourquoi pas simplement utiliser ChatGPT, Claude ou Gemini ?",
    answer: "ChatGPT et Claude sont des outils généraux. Ils produisent du contenu correct, mais pas VOS contenus. Avec Deliverable Engine, l'IA apprend votre ton de voix, vos structures habituelles et vos grilles de templates métiers — pas un ton générique de consultant McKinsey. Vous ne perdez pas 30 minutes à re-rédiger ce que l'IA a généré. Résultat : un document prêt à envoyer en 10 minutes, pas en 1h30 de corrections. La différence en un chiffre : nos utilisateurs passent en moyenne 8 minutes de relecture finale contre 45 minutes avec ChatGPT."
  },
  {
    id: 'data-security',
    question: "Mes données clients sont-elles vraiment sécurisées ?",
    answer: "Absolument. Trois garanties : 1) Hébergement Europe — vos données ne quittent jamais l'Union Européenne. 2) Aucun entraînement — vos documents ne servent jamais à entraîner des modèles publics. 3) Accès sécurisé — liens Google Docs avec permissions restreintes, logs traçables. Nous sommes en cours de certification RGPD complète et DPA (Data Processing Agreement) pour les cabinets."
  },
  {
    id: 'custom-templates',
    question: "Puis-je personnaliser les templates avec ma charte graphique ?",
    answer: "Oui, et c'est le cœur du produit. Lors de l'onboarding, vous nous fournissez 2-3 exemples de vos livrables existants (propales, rapports, CR). Notre système analyse votre structure, votre vocabulaire, votre ton et vos sections récurrentes. Résultat : chaque document généré respecte votre méthodologie propre. Pas de \"copier-coller générique\". Plan Pro et Entreprise : personnalisation avancée avec variables dynamiques (logo client, charte couleurs, en-têtes personnalisés)."
  },
  {
    id: 'not-satisfied',
    question: "Que se passe-t-il si le livrable généré ne me convient pas ?",
    answer: "Deux lignes de défense : 1) Agent superviseur — un second agent IA relit et critique le document avant livraison (structure, cohérence, ton). 2) Garantie 30 jours — si le système ne s'adapte pas à vos templates ou ne vous fait pas gagner de temps dès le premier mois, remboursement intégral. Un simple email suffit. En pratique, nos utilisateurs modifient moins de 10% du contenu généré."
  },
  {
    id: 'technical-expertise',
    question: "Faut-il être expert en IA ou en tech pour l'utiliser ?",
    answer: "Non. L'interface est un formulaire simple — comme remplir un brief client. Vous saisissez : nom du client, contexte, objectifs, données brutes. L'IA fait le reste. Aucun prompt engineering, aucune connaissance technique requise. Temps moyen d'onboarding : 15 minutes. Premier livrable généré : 10 minutes après."
  }
];

export const PRICING_DATA: PricingTier[] = [
  {
    id: 'freelance',
    name: 'Freelance',
    priceMonthly: '49',
    priceYearly: '490',
    savingsYearly: '-17%',
    target: 'Consultant indépendant (1 pers.)',
    features: [
      '50 livrables/mois',
      '3 types de documents',
      'Support e-mail'
    ],
    ctaText: 'Choisir l\'offre Freelance',
    recommended: false
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: '149',
    priceYearly: '1490',
    savingsYearly: '-17%',
    target: 'Consultant senior / petit cabinet (2-5 pers.)',
    features: [
      'Volume de documents illimité',
      '5 types de documents',
      'Templates personnalisables',
      'Support prioritaire'
    ],
    ctaText: 'Choisir l\'offre Pro',
    recommended: true
  },
  {
    id: 'entreprise',
    name: 'Entreprise',
    priceMonthly: 'Sur devis',
    priceYearly: 'Sur devis',
    target: 'Cabinets 5+ pers.',
    features: [
      'SSO, API',
      'Templates sur-mesure',
      'Formation équipe',
      'SLA'
    ],
    ctaText: 'Nous contacter',
    recommended: false
  }
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
