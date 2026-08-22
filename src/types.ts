/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  certifications: string;
}

export interface ClientReference {
  id: string;
  client: string;
  object: string;
  amount: string;
  duration: string;
}

export interface TjmRates {
  missionDirector: string;
  seniorConsultant: string;
  functionalConsultant: string;
  dataExpert: string;
  cyberExpert: string;
  changeManagementExpert: string;
}

export interface AdvancedOptions {
  siretOrBce: string;
  legalForm: string;
  headquartersAddress: string;
  annualRevenue: string;
  totalHeadcount: string;
  rcProInsurance: string;
  dpoContact: string;
  certifications: string;
  technicalMeans: string;
  authorizedSignatory: string;
}

export interface RfpFormData {
  country: 'FR' | 'BE';
  marketType?: 'sad' | 'conseil' | 'marche_public' | 'autre';
  rfp_text: string;
  client_name: string;
  email: string;
  positioning: string;
  objective: 'gagner' | 'positionner' | 'contrainte' | 'autre';
  other_objective: string;
  differentiation: string;
  tjmRates: TjmRates;
  teamMembers: TeamMember[];
  references: ClientReference[];
  advancedOptions: AdvancedOptions;
  packSelection: 'unit';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  unitPriceComparison?: string;
  description: string;
  generationsCount: number;
  features: string[];
  ctaText: string;
  recommended: boolean;
}

export interface DeliverableExample {
  id: string;
  title: string;
  type: 'propale' | 'rapport' | 'cr';
  tag: string;
  description: string;
  timeSaved: string;
  contentHtml: string;
  previewLines: string[];
}
