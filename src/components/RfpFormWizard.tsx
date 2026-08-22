/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../lib/supabase';
import {
  X,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Lock,
  AlertCircle,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  Globe,
  Building2,
  Briefcase,
  Layers,
  HelpCircle,
  Check,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { TeamMember, ClientReference, RfpFormData } from '../types';
import { LegalTab } from './LegalModal';

interface RfpFormWizardProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    rfp_text?: string;
    positioning?: string;
  };
  onOpenLegal?: (tab?: LegalTab) => void;
}

const OBJECTIVE_OPTIONS = [
  {
    value: 'gagner',
    label: 'Gagner le deal',
    description: 'Réponse offensive, structurée et différenciante'
  },
  {
    value: 'positionner',
    label: 'Se positionner sérieusement',
    description: 'Démontrer méthode, rigueur et références'
  },
  {
    value: 'contrainte',
    label: 'Contrainte de temps',
    description: 'Dossier complet, rapide et conforme'
  },
  {
    value: 'autre',
    label: 'Autre objectif',
    description: 'Préciser un besoin sur-mesure'
  }
] as const;

const MARKET_TYPES = [
  {
    value: 'sad',
    label: 'Système d\'Acquisition Dynamique (SAD)',
    badge: 'Marché Public',
    description: 'Accord-cadre SAD & marchés subséquents IT / Conseil'
  },
  {
    value: 'conseil',
    label: 'Mission de Conseil & Prestations Intellectuelles',
    badge: 'Consultation Privée & Public',
    description: 'Stratégie, audit, cadrage, PMO & transformation'
  },
  {
    value: 'marche_public',
    label: 'Marché Public Standard (DCE / CCTP)',
    badge: 'Code Marchés Publics',
    description: 'Procédure adaptée (MAPA) ou appel d\'offres ouvert'
  },
  {
    value: 'autre',
    label: 'Autre Consultation / Cahier des charges',
    badge: 'PME & ETI',
    description: 'Brief client standard, devis ou proposition commerciale'
  }
] as const;

const STEPS = [
  { step: 1, title: 'Appel d’offres', short: 'Marché' },
  { step: 2, title: 'Cabinet', short: 'Profil' },
  { step: 3, title: 'Grille TJM', short: 'Tarifs' },
  { step: 4, title: 'Équipe', short: 'Équipe' },
  { step: 5, title: 'Validation', short: '19 €' }
];

export default function RfpFormWizard({ isOpen, onClose, initialData, onOpenLegal }: RfpFormWizardProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [stepError, setStepError] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [retractionWaiverAccepted, setRetractionWaiverAccepted] = useState(false);

  // Form State
  const [formData, setFormData] = useState<RfpFormData>({
    country: 'FR',
    marketType: 'sad',
    rfp_text: initialData?.rfp_text || '',
    client_name: '',
    email: '',
    positioning: initialData?.positioning || '',
    objective: 'gagner',
    other_objective: '',
    differentiation: '',
    tjmRates: {
      missionDirector: '',
      seniorConsultant: '',
      functionalConsultant: '',
      dataExpert: '',
      cyberExpert: '',
      changeManagementExpert: ''
    },
    teamMembers: [
      {
        id: '1',
        name: '',
        role: '',
        experience: '',
        certifications: ''
      }
    ],
    references: [
      {
        id: '1',
        client: '',
        object: '',
        amount: '',
        duration: ''
      }
    ],
    advancedOptions: {
      siretOrBce: '',
      legalForm: '',
      headquartersAddress: '',
      annualRevenue: '',
      totalHeadcount: '',
      rcProInsurance: '',
      dpoContact: '',
      certifications: '',
      technicalMeans: '',
      authorizedSignatory: ''
    },
    packSelection: 'unit'
  });

  // Pre-fill if initialData changes when modal opens
  React.useEffect(() => {
    if (isOpen && initialData) {
      setFormData((prev) => ({
        ...prev,
        rfp_text: initialData.rfp_text !== undefined ? initialData.rfp_text : prev.rfp_text,
        positioning: initialData.positioning !== undefined ? initialData.positioning : prev.positioning
      }));
    }
  }, [isOpen, initialData]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset form
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setCurrentStep(1);
      setStepError(null);
      setShowAdvanced(false);
      setIsSuccess(false);
      setIsSubmitting(false);
      setRetractionWaiverAccepted(false);
      setFormData({
        country: 'FR',
        marketType: 'sad',
        rfp_text: '',
        client_name: '',
        email: '',
        positioning: '',
        objective: 'gagner',
        other_objective: '',
        differentiation: '',
        tjmRates: {
          missionDirector: '',
          seniorConsultant: '',
          functionalConsultant: '',
          dataExpert: '',
          cyberExpert: '',
          changeManagementExpert: ''
        },
        teamMembers: [
          { id: '1', name: '', role: '', experience: '', certifications: '' }
        ],
        references: [
          { id: '1', client: '', object: '', amount: '', duration: '' }
        ],
        advancedOptions: {
          siretOrBce: '',
          legalForm: '',
          headquartersAddress: '',
          annualRevenue: '',
          totalHeadcount: '',
          rcProInsurance: '',
          dpoContact: '',
          certifications: '',
          technicalMeans: '',
          authorizedSignatory: ''
        },
        packSelection: 'unit'
      });
    }, 300);
  };

  // Step 1 Validation (minimum 150 characters)
  const validateStep1 = () => {
    if (formData.rfp_text.trim().length < 150) {
      setStepError("Merci de coller le texte de votre appel d’offres (minimum 150 caractères).");
      return false;
    }
    setStepError(null);
    return true;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    if (!formData.client_name.trim()) {
      setStepError("Le nom de votre cabinet ou structure est obligatoire.");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStepError("Merci de renseigner une adresse e-mail valide pour la livraison.");
      return false;
    }
    if (!formData.positioning.trim()) {
      setStepError("Votre positionnement métier est obligatoire.");
      return false;
    }
    if (formData.objective === 'autre' && !formData.other_objective.trim()) {
      setStepError("Merci de préciser votre objectif dans le champ 'Autre'.");
      return false;
    }
    setStepError(null);
    return true;
  };

  // Add / Remove Team Member
  const addTeamMember = () => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: [
        ...prev.teamMembers,
        { id: String(Date.now()), name: '', role: '', experience: '', certifications: '' }
      ]
    }));
  };

  const removeTeamMember = (id: string) => {
    if (formData.teamMembers.length <= 1) return;
    setFormData((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((m) => m.id !== id)
    }));
  };

  const updateTeamMember = (id: string, field: keyof TeamMember, value: string) => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    }));
  };

  // Add / Remove Reference
  const addReference = () => {
    setFormData((prev) => ({
      ...prev,
      references: [
        ...prev.references,
        { id: String(Date.now()), client: '', object: '', amount: '', duration: '' }
      ]
    }));
  };

  const removeReference = (id: string) => {
    if (formData.references.length <= 1) return;
    setFormData((prev) => ({
      ...prev,
      references: prev.references.filter((r) => r.id !== id)
    }));
  };

  const updateReference = (id: string, field: keyof ClientReference, value: string) => {
    setFormData((prev) => ({
      ...prev,
      references: prev.references.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    }));
  };

  // Submission
  const handleFinalSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStepError("Merci de renseigner une adresse e-mail de livraison valide.");
      return;
    }

    if (!retractionWaiverAccepted) {
      setStepError("Veuillez cocher la case d'acceptation de l'exécution immédiate et de renonciation au droit de rétractation pour lancer la génération.");
      return;
    }

    setStepError(null);
    setIsSubmitting(true);

    try {
      const envMeta = (import.meta as unknown as { env?: Record<string, string> }).env;
      const tempOrderId = `TEMP-${Date.now()}`;
      let rfpRecord: { id?: string | number } | null = null;

      // Prepare enriched differentiation text with all structured data
      let enrichedDifferentiation = formData.differentiation || '';
      const extraMetadata: string[] = [];

      extraMetadata.push(`[Pays du marché: ${formData.country === 'BE' ? 'Belgique (Loi marchés publics 2016)' : 'France (Code commande publique)'}]`);
      extraMetadata.push(`[Type de marché: ${formData.marketType || 'SAD'}]`);
      extraMetadata.push(`[Formule: 19 € (Génération unique)]`);
      extraMetadata.push(`[Renonciation rétractation 14j: Oui (Exécution immédiate)]`);

      // TJM Rates
      const rates = Object.entries(formData.tjmRates || {}).filter(([_, v]) => typeof v === 'string' && v.trim().length > 0);
      if (rates.length > 0) {
        extraMetadata.push(`[Grille TJM: ${rates.map(([k, v]) => `${k}=${v}€/j`).join(', ')}]`);
      }

      // Team members
      const members = (formData.teamMembers || []).filter((m) => m.name.trim());
      if (members.length > 0) {
        extraMetadata.push(
          `[Équipe intervenante: ${members
            .map(
              (m) =>
                `${m.name} (${m.role || 'Consultant'}${m.experience ? ` - Exp: ${m.experience}` : ''}${
                  m.certifications ? ` - Certifs: ${m.certifications}` : ''
                })`
            )
            .join(' | ')}]`
        );
      }

      // References
      const refs = (formData.references || []).filter((r) => r.client.trim());
      if (refs.length > 0) {
        extraMetadata.push(
          `[Références clients: ${refs
            .map(
              (r) =>
                `${r.client} (${r.object || 'Mission'}${r.amount ? ` - ${r.amount}€` : ''}${
                  r.duration ? ` - ${r.duration}` : ''
                })`
            )
            .join(' | ')}]`
        );
      }

      // Advanced options
      const adv = Object.entries(formData.advancedOptions || {}).filter(([_, v]) => typeof v === 'string' && v.trim().length > 0);
      if (adv.length > 0) {
        extraMetadata.push(`[Informations administratives: ${adv.map(([k, v]) => `${k}: ${v}`).join(', ')}]`);
      }

      if (extraMetadata.length > 0) {
        enrichedDifferentiation = enrichedDifferentiation
          ? `${enrichedDifferentiation}\n\n--- DONNÉES COMPLÉMENTAIRES DU DOSSIER ---\n${extraMetadata.join('\n')}`
          : `--- DONNÉES COMPLÉMENTAIRES DU DOSSIER ---\n${extraMetadata.join('\n')}`;
      }

      // Standard payload matching Supabase rfp_pending schema
      const standardPayload = {
        order_id: tempOrderId,
        email: formData.email,
        client_name: formData.client_name,
        positioning: formData.positioning,
        objective: formData.objective === 'autre' ? formData.other_objective : formData.objective,
        differentiation: enrichedDifferentiation,
        rfp_text: formData.rfp_text,
        status: 'pending_payment'
      };

      if (supabase) {
        try {
          const { data: rfp, error: supaErr } = await supabase
            .from('rfp_pending')
            .insert(standardPayload)
            .select()
            .single();

          if (rfp) {
            rfpRecord = rfp;
          } else if (supaErr) {
            console.warn('Supabase rfp_pending notice:', supaErr.message || supaErr);
          }
        } catch (err: unknown) {
          console.warn('Supabase insert notice:', err instanceof Error ? err.message : err);
        }
      }

      const activeRfpId = String(rfpRecord?.id || tempOrderId);

      // Save into localStorage for fallback on /merci page
      try {
        localStorage.setItem('rfp_latest_id', activeRfpId);
        localStorage.setItem('rfp_latest_email', formData.email);
        localStorage.setItem(
          'rfp_latest_data',
          JSON.stringify({
            ...formData,
            differentiation_full: enrichedDifferentiation,
            rfp_id: activeRfpId,
            order_id: tempOrderId,
            status: 'pending_payment'
          })
        );
      } catch (e) {
        console.warn('LocalStorage save notice:', e);
      }

      // Trigger n8n Webhook 1 if available
      const webhook1 = envMeta?.VITE_N8N_WEBHOOK1_URL;
      if (
        webhook1 &&
        typeof webhook1 === 'string' &&
        (webhook1.startsWith('http://') || webhook1.startsWith('https://')) &&
        !webhook1.includes('YOUR_') &&
        !webhook1.includes('placeholder')
      ) {
        try {
          await fetch(webhook1, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              event: 'form_submitted',
              rfp_id: activeRfpId,
              order_id: tempOrderId,
              ...formData,
              differentiation_full: enrichedDifferentiation
            })
          }).catch((wErr) => {
            console.warn('Webhook 1 background notice:', wErr?.message || wErr);
          });
        } catch (wErr) {
          console.warn('Webhook 1 background notice:', wErr);
        }
      }

      // Determine Lemon Squeezy payment link
      const rawPaymentUrl =
        envMeta?.VITE_LEMON_SQUEEZY_PAYMENT_LINK ||
        envMeta?.VITE_PAYMENT_LINK;

      let validCheckoutUrl: string | null = null;

      if (
        rawPaymentUrl &&
        typeof rawPaymentUrl === 'string' &&
        rawPaymentUrl.trim().length > 7 &&
        !rawPaymentUrl.includes('YOUR_') &&
        !rawPaymentUrl.includes('placeholder')
      ) {
        try {
          const trimmed = rawPaymentUrl.trim();
          const targetUrl = trimmed.startsWith('http://') || trimmed.startsWith('https://')
            ? trimmed
            : `https://${trimmed}`;

          const urlObj = new URL(targetUrl);
          if (formData.email) {
            urlObj.searchParams.set('checkout[email]', formData.email);
            urlObj.searchParams.set('email', formData.email);
          }
          urlObj.searchParams.set('rfp_id', activeRfpId);
          urlObj.searchParams.set('country', formData.country);
          urlObj.searchParams.set('market_type', formData.marketType || 'sad');
          validCheckoutUrl = urlObj.toString();
        } catch (urlErr) {
          console.warn('Payment link parse notice:', urlErr);
          validCheckoutUrl = null;
        }
      }

      if (validCheckoutUrl) {
        window.location.href = validCheckoutUrl;
      } else {
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
        }, 600);
      }
    } catch (err) {
      console.warn('Submission fallback notice:', err);
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!validateStep1()) return;
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!validateStep2()) return;
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      setCurrentStep(5);
    }
  };

  const handlePrev = () => {
    setStepError(null);
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4 | 5);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop with dark blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window - Executive Dark Slate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#0D1522] rounded-3xl shadow-2xl border border-slate-800/90 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh] text-slate-100"
        >
          {/* Top hairline accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8935A]/50 to-transparent" />

          {/* Header - Refined Executive Dark */}
          <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-800/80 bg-[#0D1522] shrink-0">
            <div className="flex items-center justify-between">
              {/* Brand Indicator */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#111A29] border border-slate-700 text-[#D4AF37]">
                  <span className="font-serif-heading text-xs font-bold">D</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif-heading text-base font-bold text-white">
                      Générateur de Réponse RFP
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#B8935A]/15 border border-[#B8935A]/30 px-2 py-0.5 text-[10px] font-mono font-bold text-[#D4AF37]">
                      SAD & Conseil
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="h-8 w-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Stepper Indicator - Minimalist Pill Segments */}
            {!isSuccess && (
              <div className="mt-5">
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {STEPS.map((s) => {
                    const isActive = currentStep === s.step;
                    const isDone = currentStep > s.step;
                    return (
                      <div key={s.step} className="flex flex-col gap-1.5">
                        <div
                          className={`h-1 rounded-full transition-all duration-300 ${
                            isDone
                              ? 'bg-slate-600'
                              : isActive
                              ? 'bg-[#B8935A]'
                              : 'bg-slate-800'
                          }`}
                        />
                        <div className="flex items-center justify-between text-[11px]">
                          <span
                            className={`font-medium transition-colors hidden sm:block truncate ${
                              isActive
                                ? 'text-[#D4AF37] font-bold'
                                : isDone
                                ? 'text-slate-400'
                                : 'text-slate-600'
                            }`}
                          >
                            {s.step}. {s.title}
                          </span>
                          <span
                            className={`font-medium sm:hidden text-[10px] text-center w-full truncate ${
                              isActive ? 'text-[#D4AF37] font-bold' : 'text-slate-600'
                            }`}
                          >
                            {s.short}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-sans bg-[#0D1522]">
            {stepError && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-3.5 bg-red-950/40 border border-red-800/80 rounded-2xl text-xs font-medium text-red-200 flex items-center gap-2.5"
              >
                <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
                <span>{stepError}</span>
              </motion.div>
            )}

            {!isSuccess ? (
              <>
                {/* ============================================================ */}
                {/* ÉTAPE 1 : Appel d'offres */}
                {/* ============================================================ */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-serif-heading text-xl font-bold text-white">
                        Cadre du Marché & Cahier des Charges
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Sélectionnez la juridiction applicable et collez le descriptif du besoin (DCE, CCTP, SAD ou consultation).
                      </p>
                    </div>

                    {/* Cadre Juridique */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Juridiction du marché <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, country: 'FR' }))}
                          className={`flex items-center justify-center gap-2.5 p-3 rounded-2xl border text-xs font-semibold transition-all cursor-pointer ${
                            formData.country === 'FR'
                              ? 'border-[#B8935A] bg-[#B8935A]/15 text-white shadow-xs'
                              : 'border-slate-800 bg-[#111A29] text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span className="text-base">🇫🇷</span>
                          <span>France (Code de la commande publique)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, country: 'BE' }))}
                          className={`flex items-center justify-center gap-2.5 p-3 rounded-2xl border text-xs font-semibold transition-all cursor-pointer ${
                            formData.country === 'BE'
                              ? 'border-[#B8935A] bg-[#B8935A]/15 text-white shadow-xs'
                              : 'border-slate-800 bg-[#111A29] text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span className="text-base">🇧🇪</span>
                          <span>Belgique (Loi marchés publics 2016)</span>
                        </button>
                      </div>
                    </div>

                    {/* Nature de la consultation */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Type de procédure
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {MARKET_TYPES.map((type) => {
                          const isSelected = formData.marketType === type.value;
                          return (
                            <div
                              key={type.value}
                              onClick={() => setFormData((prev) => ({ ...prev, marketType: type.value }))}
                              className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                                isSelected
                                  ? 'border-[#B8935A] bg-[#111A29] text-white shadow-xs ring-1 ring-[#B8935A]/30'
                                  : 'border-slate-800 bg-[#111A29]/60 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className={`text-[10px] uppercase font-mono font-bold ${isSelected ? 'text-[#D4AF37]' : 'text-slate-500'}`}>
                                  {type.badge}
                                </span>
                                <div className={`h-3.5 w-3.5 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#B8935A] bg-[#B8935A]' : 'border-slate-700'}`}>
                                  {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-[#0D1522]" />}
                                </div>
                              </div>
                              <div className="font-bold text-xs">
                                {type.label}
                              </div>
                              <p className={`text-[11px] mt-0.5 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                                {type.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Textarea */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-slate-300">
                          Texte de la consultation ou du cahier des charges <span className="text-[#D4AF37]">*</span>
                        </label>
                        <span className={`text-[11px] font-mono ${formData.rfp_text.length < 150 ? 'text-amber-400 font-semibold' : 'text-slate-500'}`}>
                          {formData.rfp_text.length} / 150 car. min
                        </span>
                      </div>
                      <textarea
                        rows={7}
                        placeholder="Collez ici le texte de votre consultation (DCE, CCTP, règlement de consultation, descriptif du besoin SAD ou brief conseil)..."
                        value={formData.rfp_text}
                        onChange={(e) => setFormData((prev) => ({ ...prev, rfp_text: e.target.value }))}
                        className="w-full text-xs font-sans border border-slate-800 rounded-2xl p-4 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]/40 focus:outline-none transition-all leading-relaxed"
                      />
                    </div>
                  </motion.div>
                )}

                {/* ============================================================ */}
                {/* ÉTAPE 2 : Profil Cabinet */}
                {/* ============================================================ */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-serif-heading text-xl font-bold text-white">
                        Votre Cabinet & Positionnement
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Précisez vos coordonnées de livraison et vos axes de différenciation métier.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Nom de votre cabinet ou société <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: Nexus Conseil & Stratégie"
                          value={formData.client_name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, client_name: e.target.value }))}
                          className="w-full text-xs border border-slate-800 rounded-2xl p-3 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]/40 focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Email professionnel de livraison <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="vous@votre-cabinet.com"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="w-full text-xs border border-slate-800 rounded-2xl p-3 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]/40 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Points forts & positionnement métier <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Cabinet spécialisé transformation SI publique, 12 ans d'expérience, certifié ITIL & TOGAF"
                        value={formData.positioning}
                        onChange={(e) => setFormData((prev) => ({ ...prev, positioning: e.target.value }))}
                        className="w-full text-xs border border-slate-800 rounded-2xl p-3 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]/40 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Objectif Stratégique */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Objectif stratégique
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {OBJECTIVE_OPTIONS.map((opt) => {
                          const isSelected = formData.objective === opt.value;
                          return (
                            <div
                              key={opt.value}
                              onClick={() => setFormData((prev) => ({ ...prev, objective: opt.value }))}
                              className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                                isSelected
                                  ? 'border-[#B8935A] bg-[#111A29] text-white shadow-xs ring-1 ring-[#B8935A]/30'
                                  : 'border-slate-800 bg-[#111A29]/60 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-xs">{opt.label}</span>
                                <div className={`h-3.5 w-3.5 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#B8935A] bg-[#B8935A]' : 'border-slate-700'}`}>
                                  {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-[#0D1522]" />}
                                </div>
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{opt.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {formData.objective === 'autre' && (
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Précisez votre objectif <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Décrivez votre objectif particulier..."
                          value={formData.other_objective}
                          onChange={(e) => setFormData((prev) => ({ ...prev, other_objective: e.target.value }))}
                          className="w-full text-xs border border-slate-800 rounded-2xl p-3 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]/40 focus:outline-none transition-all"
                        />
                      </div>
                    )}
                  </motion.div>
                )}

                {/* ============================================================ */}
                {/* ÉTAPE 3 : Grille TJM */}
                {/* ============================================================ */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-serif-heading text-xl font-bold text-white">
                        Grille Tarifaire (Taux Journalier Moyen)
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Facultatif · Permet de pré-remplir le Bordereau des Prix Unitaires (BPU) de votre mémoire financier.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {[
                        { key: 'missionDirector', label: 'Directeur de mission / Associé', placeholder: '1 200 €' },
                        { key: 'seniorConsultant', label: 'Consultant Senior / Manager', placeholder: '950 €' },
                        { key: 'functionalConsultant', label: 'Consultant Métier / Fonctionnel', placeholder: '750 €' },
                        { key: 'dataExpert', label: 'Expert Data / IA', placeholder: '1 100 €' },
                        { key: 'cyberExpert', label: 'Expert Cybersécurité / RSSI', placeholder: '1 150 €' },
                        { key: 'changeManagementExpert', label: 'Conduite du Changement', placeholder: '850 €' }
                      ].map((item) => (
                        <div key={item.key} className="bg-[#111A29] p-3 rounded-2xl border border-slate-800">
                          <label className="block text-[11px] font-semibold text-slate-300 mb-1.5 truncate">
                            {item.label}
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder={`Ex: ${item.placeholder}`}
                              value={formData.tjmRates[item.key as keyof typeof formData.tjmRates]}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  tjmRates: { ...prev.tjmRates, [item.key]: e.target.value }
                                }))
                              }
                              className="w-full text-xs font-mono border border-slate-800 rounded-xl p-2.5 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]/40 focus:outline-none"
                            />
                            <span className="absolute right-3 top-2.5 text-[10px] font-mono text-slate-500">
                              / j HT
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ============================================================ */}
                {/* ÉTAPE 4 : Équipe */}
                {/* ============================================================ */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif-heading text-xl font-bold text-white">
                          Équipe & Profils Intervenants
                        </h3>
                        <p className="mt-1 text-xs text-slate-400">
                          Facultatif · Permet de présenter les intervenants de l'équipe et leurs compétences.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={addTeamMember}
                        className="py-1.5 px-3 bg-[#111A29] hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                      >
                        <Plus className="h-3.5 w-3.5 text-[#D4AF37]" />
                        Ajouter
                      </button>
                    </div>

                    <div className="space-y-3">
                      {formData.teamMembers.map((member, idx) => (
                        <div key={member.id} className="p-4 rounded-2xl bg-[#111A29] border border-slate-800 space-y-2.5">
                          <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                            <span>Profil #{idx + 1}</span>
                            {formData.teamMembers.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeTeamMember(member.id)}
                                className="text-slate-500 hover:text-red-400 p-1 cursor-pointer"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                            <input
                              type="text"
                              placeholder="Nom & Prénom"
                              value={member.name}
                              onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)}
                              className="w-full text-xs border border-slate-800 rounded-xl p-2 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Rôle (ex: Chef de projet)"
                              value={member.role}
                              onChange={(e) => updateTeamMember(member.id, 'role', e.target.value)}
                              className="w-full text-xs border border-slate-800 rounded-xl p-2 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Expérience (ex: 8 ans AMO)"
                              value={member.experience}
                              onChange={(e) => updateTeamMember(member.id, 'experience', e.target.value)}
                              className="w-full text-xs border border-slate-800 rounded-xl p-2 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Certifications (ex: ITIL, PMP)"
                              value={member.certifications}
                              onChange={(e) => updateTeamMember(member.id, 'certifications', e.target.value)}
                              className="w-full text-xs border border-slate-800 rounded-xl p-2 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:outline-none"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ============================================================ */}
                {/* ÉTAPE 5 : Validation & Références */}
                {/* ============================================================ */}
                {currentStep === 5 && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-serif-heading text-xl font-bold text-white">
                        Validation & Envoi du Dossier
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Vérifiez vos paramètres avant de déclencher la génération de votre réponse RFP (19 €).
                      </p>
                    </div>

                    {/* Références Clients */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5 text-[#D4AF37]" />
                          <span>Références clients comparables (optionnel)</span>
                        </label>
                        <button
                          type="button"
                          onClick={addReference}
                          className="py-1 px-2.5 bg-[#111A29] hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-full text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <Plus className="h-3 w-3 text-[#D4AF37]" />
                          Ajouter
                        </button>
                      </div>

                      {formData.references.map((ref, idx) => (
                        <div key={ref.id} className="p-3 rounded-2xl bg-[#111A29] border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300">
                            <span>Référence #{idx + 1}</span>
                            {formData.references.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeReference(ref.id)}
                                className="text-slate-500 hover:text-red-400 p-0.5 cursor-pointer"
                              >
                                <Trash2 className="h-3 w-3" />
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            <input
                              type="text"
                              placeholder="Client (ex : Région IDF)"
                              value={ref.client}
                              onChange={(e) => updateReference(ref.id, 'client', e.target.value)}
                              className="w-full text-xs border border-slate-800 rounded-lg p-2 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Objet de la mission"
                              value={ref.object}
                              onChange={(e) => updateReference(ref.id, 'object', e.target.value)}
                              className="w-full text-xs border border-slate-800 rounded-lg p-2 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Montant (€)"
                              value={ref.amount}
                              onChange={(e) => updateReference(ref.id, 'amount', e.target.value)}
                              className="w-full text-xs border border-slate-800 rounded-lg p-2 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Durée (ex: 6 mois)"
                              value={ref.duration}
                              onChange={(e) => updateReference(ref.id, 'duration', e.target.value)}
                              className="w-full text-xs border border-slate-800 rounded-lg p-2 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:outline-none"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Accordéon : Options administratives complémentaires */}
                    <div className="border border-slate-800 rounded-2xl overflow-hidden bg-[#111A29]">
                      <button
                        type="button"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className="w-full flex items-center justify-between p-3.5 bg-[#111A29] hover:bg-slate-800/80 text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Building2 className="h-3.5 w-3.5 text-[#D4AF37]" />
                          <span className="text-xs font-semibold text-slate-300">
                            Mentions administratives complémentaires (SIRET/BCE, RC Pro, CA...)
                          </span>
                        </div>
                        {showAdvanced ? (
                          <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                        ) : (
                          <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                        )}
                      </button>

                      {showAdvanced && (
                        <div className="p-4 bg-[#0D1522] border-t border-slate-800 space-y-3 text-xs">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                                {formData.country === 'BE' ? 'Numéro d\'entreprise (BCE)' : 'Numéro SIRET (14 chiffres)'}
                              </label>
                              <input
                                type="text"
                                placeholder={formData.country === 'BE' ? 'Ex: 0123.456.789' : 'Ex: 123 456 789 00012'}
                                value={formData.advancedOptions.siretOrBce}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    advancedOptions: { ...prev.advancedOptions, siretOrBce: e.target.value }
                                  }))
                                }
                                className="w-full text-xs border border-slate-800 rounded-xl p-2 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:outline-none"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                                Forme juridique
                              </label>
                              <input
                                type="text"
                                placeholder={formData.country === 'BE' ? 'SRL, SA...' : 'SAS, SARL, SASU, EI...'}
                                value={formData.advancedOptions.legalForm}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    advancedOptions: { ...prev.advancedOptions, legalForm: e.target.value }
                                  }))
                                }
                                className="w-full text-xs border border-slate-800 rounded-xl p-2 bg-[#0B101B] text-slate-100 placeholder-slate-500 focus:border-[#B8935A] focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Executive Order Summary Card */}
                    <div className="p-5 rounded-2xl bg-[#131F33] text-white border border-slate-700/80 shadow-md space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                            Génération à l'acte · Sans engagement
                          </div>
                          <h4 className="font-serif-heading text-base font-bold text-white mt-0.5">
                            Dossier de Réponse RFP & Mémoire Technique
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold font-serif-heading text-[#D4AF37]">
                            19 €
                          </span>
                          <span className="text-[10px] text-slate-400 block font-mono">
                            Paiement unique
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300 pt-3 border-t border-slate-700/60">
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                          <span>Livraison sous 10 min à {formData.email || 'votre email'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                          <span>1 révision / régénération 24h offerte</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                          <span>Conforme marchés {formData.country === 'BE' ? 'Belgique' : 'France'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                          <span>Paiement sécurisé Lemon Squeezy</span>
                        </div>
                      </div>
                    </div>

                    {/* Retraction Waiver Box */}
                    <div className="p-4 rounded-2xl bg-[#111A29] border border-slate-800 text-xs space-y-2.5">
                      <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={retractionWaiverAccepted}
                          onChange={(e) => {
                            setRetractionWaiverAccepted(e.target.checked);
                            if (e.target.checked) setStepError(null);
                          }}
                          className="mt-0.5 h-4 w-4 rounded border-slate-700 bg-slate-900 text-[#B8935A] focus:ring-[#B8935A] shrink-0 cursor-pointer"
                        />
                        <span className="text-slate-300 leading-relaxed text-[11px]">
                          <strong className="text-white font-semibold block mb-0.5">
                            Exécution immédiate & renonciation au droit de rétractation (art. L.221-28 13°) :
                          </strong>
                          « Je demande expressément l'exécution immédiate du service et je renonce à mon droit de rétractation de 14 jours pour recevoir mon dossier dans les 10 minutes. »
                        </span>
                      </label>

                      <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-2 text-[10px] text-slate-400">
                        <button
                          type="button"
                          onClick={() => onOpenLegal && onOpenLegal('cgv')}
                          className="hover:text-[#D4AF37] underline cursor-pointer"
                        >
                          CGV
                        </button>
                        <span>·</span>
                        <button
                          type="button"
                          onClick={() => onOpenLegal && onOpenLegal('mentions')}
                          className="hover:text-[#D4AF37] underline cursor-pointer"
                        >
                          Mentions Légales (FR / BE)
                        </button>
                        <span>·</span>
                        <button
                          type="button"
                          onClick={() => onOpenLegal && onOpenLegal('confidentialite')}
                          className="hover:text-[#D4AF37] underline cursor-pointer"
                        >
                          Confidentialité (RGPD)
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              /* Success View */
              <div className="py-8 text-center space-y-6 font-sans">
                <div className="w-14 h-14 rounded-full bg-emerald-950/60 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-700">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <div>
                  <h3 className="font-serif-heading text-2xl font-bold text-white">
                    Génération en cours
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Votre dossier pour <strong>{formData.client_name}</strong> est en cours de traitement par nos moteurs spécialisés ({formData.country === 'BE' ? 'Marché Belge' : 'Marché Français'}).
                  </p>
                </div>

                <div className="bg-[#111A29] border border-slate-800 p-4 rounded-2xl text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Adresse de livraison :</span>
                    <span className="font-mono text-white font-semibold">{formData.email}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Montant :</span>
                    <span className="font-bold text-[#D4AF37]">19 € TTC</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Garantie :</span>
                    <span className="text-emerald-400 font-medium">1 révision gratuite sous 24h</span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full max-w-md py-3 bg-[#B8935A] hover:bg-[#c49f64] text-[#0D1522] font-bold text-xs rounded-full transition-all cursor-pointer mx-auto block"
                >
                  Fermer
                </button>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          {!isSuccess && (
            <div className="px-6 sm:px-8 py-4 bg-[#0D1522] border-t border-slate-800/80 flex items-center justify-between shrink-0 font-sans">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-700 bg-[#111A29] text-slate-300 hover:bg-slate-800 text-xs font-semibold transition-all cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Précédent
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#B8935A] hover:bg-[#c49f64] text-[#0D1522] text-xs font-bold shadow-xs transition-all active:scale-95 cursor-pointer ml-auto"
                >
                  <span>Continuer</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <div className="flex items-center gap-3 ml-auto">
                  <button
                    type="button"
                    onClick={() => handleFinalSubmit()}
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs transition-all active:scale-95 cursor-pointer ${
                      retractionWaiverAccepted
                        ? 'bg-[#B8935A] hover:bg-[#c49f64] text-[#0D1522] shadow-sm'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="h-3.5 w-3.5 text-[#0D1522] animate-spin" />
                        Traitement en cours...
                      </>
                    ) : (
                      <>
                        <Lock className="h-3.5 w-3.5" />
                        <span>Commander mon dossier (19 €)</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
