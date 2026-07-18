/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
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
  contentHtml: string; // The rich simulated Google Doc content
  previewLines: string[];
}
