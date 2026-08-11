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
  Zap,
  Check,
  Sparkles,
  Lock,
  AlertCircle
} from 'lucide-react';

interface RfpFormWizardProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    rfp_text?: string;
    positioning?: string;
  };
}

export interface RfpFormData {
  rfp_text: string;
  client_name: string;
  positioning: string;
  objective: 'gagner' | 'positionner' | 'contrainte' | 'autre';
  other_objective: string;
  differentiation: string;
  email: string;
}

const OBJECTIVE_OPTIONS = [
  {
    value: 'gagner',
    label: 'Gagner le deal',
    description: 'Réponse offensive et convaincante'
  },
  {
    value: 'positionner',
    label: 'Se positionner sérieusement',
    description: 'Montrer son expertise et sa crédibilité'
  },
  {
    value: 'contrainte',
    label: 'Répondre sous contrainte de temps',
    description: 'Version solide et rapide'
  },
  {
    value: 'autre',
    label: 'Autre',
    description: 'Précisez votre objectif'
  }
] as const;

export default function RfpFormWizard({ isOpen, onClose, initialData }: RfpFormWizardProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [stepError, setStepError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<RfpFormData>({
    rfp_text: initialData?.rfp_text || '',
    client_name: '',
    positioning: initialData?.positioning || '',
    objective: 'gagner',
    other_objective: '',
    differentiation: '',
    email: ''
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
      setIsSuccess(false);
      setIsSubmitting(false);
      setFormData({
        rfp_text: '',
        client_name: '',
        positioning: '',
        objective: 'gagner',
        other_objective: '',
        differentiation: '',
        email: ''
      });
    }, 300);
  };

  // Step 1 Validation (minimum 200 characters)
  const validateStep1 = () => {
    if (formData.rfp_text.trim().length < 200) {
      setStepError("Merci de coller le texte de votre appel d’offres (minimum 200 caractères).");
      return false;
    }
    setStepError(null);
    return true;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    if (!formData.client_name.trim()) {
      setStepError("Le nom de votre cabinet / consultant est obligatoire.");
      return false;
    }
    if (!formData.positioning.trim()) {
      setStepError("Votre positionnement est obligatoire.");
      return false;
    }
    if (formData.objective === 'autre' && !formData.other_objective.trim()) {
      setStepError("Merci de préciser votre objectif dans le champ 'Autre'.");
      return false;
    }
    setStepError(null);
    return true;
  };

  // Step 4 Validation & Submission (3 actions: validate email, insert rfp_requests, redirect Lemon Squeezy)
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStepError("Merci de renseigner une adresse e-mail de livraison valide.");
      return;
    }

    setStepError(null);
    setIsSubmitting(true);

    try {
      const envMeta = (import.meta as unknown as { env?: Record<string, string> }).env;
      const tempOrderId = `TEMP-${Date.now()}`;
      let rfpRecord: { id?: string | number } | null = null;

      // 1. Insert record into Supabase rfp_requests table
      if (supabase) {
        try {
          const { data: rfp, error: dbError } = await supabase
            .from('rfp_requests')
            .insert({
              order_id: tempOrderId,
              email: formData.email,
              client_name: formData.client_name,
              positioning: formData.positioning,
              objective: formData.objective === 'autre' ? formData.other_objective : formData.objective,
              differentiation: formData.differentiation || null,
              rfp_text: formData.rfp_text,
              status: 'pending_payment'
            })
            .select()
            .single();

          if (dbError) {
            console.error('Supabase rfp_requests insert error:', dbError);
          } else {
            rfpRecord = rfp;
          }
        } catch (err) {
          console.error('Supabase insert exception:', err);
        }
      }

      // 2. Redirect to Lemon Squeezy checkout with email and rfp_id
      const paymentUrl =
        envMeta?.VITE_LEMON_SQUEEZY_PAYMENT_LINK ||
        envMeta?.VITE_PAYMENT_LINK ||
        envMeta?.VITE_STRIPE_PAYMENT_LINK;

      if (paymentUrl) {
        const checkoutRedirect = paymentUrl.startsWith('http') ? paymentUrl : `https://${paymentUrl}`;
        const urlObj = new URL(checkoutRedirect);

        if (formData.email) {
          urlObj.searchParams.set('checkout[email]', formData.email);
        }
        if (rfpRecord?.id) {
          urlObj.searchParams.set('checkout[custom][rfp_id]', String(rfpRecord.id));
        }

        window.location.href = urlObj.toString();
      } else {
        // Show success confirmation screen if no payment link configured
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
        }, 800);
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    setStepError(null);
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handlePrev = () => {
    setStepError(null);
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh] my-auto"
        >
          {/* Header */}
          <div className="bg-[#1B263B] text-white p-5 sm:p-6 relative shrink-0">
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-[#B8935A] text-[#1B263B] px-2.5 py-0.5 rounded-full">
                Assistant Réponse RFP
              </span>
            </div>

            <h2 className="font-serif-heading text-lg sm:text-xl font-bold">
              Générez votre réponse commerciale sur-mesure
            </h2>

            {/* Stepper Header */}
            {!isSuccess && (
              <div className="mt-5 grid grid-cols-4 gap-2">
                {[
                  { step: 1, label: 'Appel d’offres' },
                  { step: 2, label: 'Votre Cabinet' },
                  { step: 3, label: 'Différenciation' },
                  { step: 4, label: 'Récapitulatif' }
                ].map((s) => {
                  const isActive = currentStep === s.step;
                  const isDone = currentStep > s.step;
                  return (
                    <div key={s.step} className="flex flex-col gap-1">
                      <div
                        className={`h-1.5 rounded-full transition-colors ${
                          isDone
                            ? 'bg-emerald-500'
                            : isActive
                            ? 'bg-[#B8935A]'
                            : 'bg-slate-700'
                        }`}
                      />
                      <span
                        className={`text-[10px] font-medium hidden sm:block truncate ${
                          isActive ? 'text-[#B8935A] font-bold' : 'text-slate-400'
                        }`}
                      >
                        {s.step}. {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 overflow-y-auto flex-1">
            {stepError && (
              <div className="mb-6 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-700 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
                <span>{stepError}</span>
              </div>
            )}

            {!isSuccess ? (
              <>
                {/* ÉTAPE 1: RFP Text Input */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1B263B]">
                        Collez votre appel d’offres
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600">
                        Copiez-collez le texte complet de votre cahier des charges. Notre moteur extrait automatiquement toutes les informations clés.
                      </p>
                    </div>

                    {/* Banner Gold Zap Extraction */}
                    <div className="p-3.5 bg-[#B8935A]/10 border border-[#B8935A]/30 rounded-xl text-xs text-[#1B263B] flex items-start gap-3">
                      <Zap className="h-4 w-4 text-[#B8935A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1B263B]">Extraction automatique :</strong>
                        <p className="mt-0.5 text-slate-700">
                          Budget, dates, effectifs, volume d'activité — tout est extrait automatiquement depuis votre document.
                        </p>
                      </div>
                    </div>

                    {/* Champ unique: Textarea RFP */}
                    <div>
                      <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                        Texte de l'appel d'offres <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={10}
                        name="rfp_text"
                        placeholder="Collez ici le texte complet du cahier des charges, de l'appel d'offres ou du brief client (minimum 200 caractères)…"
                        value={formData.rfp_text}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, rfp_text: e.target.value }));
                          setStepError(null);
                        }}
                        className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A] bg-slate-50/50"
                      />
                      <p className="text-[11px] text-slate-500 mt-1 flex justify-between">
                        <span>Min. 200 caractères requis</span>
                        <span className={formData.rfp_text.length >= 200 ? "text-emerald-600 font-bold" : "text-slate-500"}>
                          {formData.rfp_text.length} caractères saisis
                        </span>
                      </p>
                    </div>
                  </div>
                )}

                {/* ÉTAPE 2: Informations sur VOTRE cabinet */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1B263B]">
                        Informations sur votre cabinet / répondeur
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600">
                        Ces informations concernent <strong>votre structure</strong> (consultant / cabinet qui répond). Les données de l'acheteur seront extraites automatiquement depuis le document par le workflow n8n.
                      </p>
                    </div>

                    {/* Champ 1: client_name (Represents the consulting firm / consultant responding) */}
                    <div>
                      <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                        Nom de votre cabinet ou consultant <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="client_name"
                        placeholder="Ex : Cabinet CapAdvice, Consult-Tech, Marc Dupont Conseil…"
                        value={formData.client_name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, client_name: e.target.value }))}
                        className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A]"
                      />
                      <p className="text-[11px] text-slate-500 mt-1">
                        Nom sous lequel vous présentez votre réponse commerciale.
                      </p>
                    </div>

                    {/* Champ 2: positioning */}
                    <div>
                      <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                        Votre positionnement métier <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="positioning"
                        placeholder="Ex : Cabinet spécialisé AMO SIH, Expert transformation Cloud, Conseil en conduite du changement…"
                        value={formData.positioning}
                        onChange={(e) => setFormData((prev) => ({ ...prev, positioning: e.target.value }))}
                        className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A]"
                      />
                    </div>

                    {/* Champ 3: objective */}
                    <div>
                      <label className="block text-xs font-bold text-[#1B263B] mb-2">
                        Objectif principal de votre réponse <span className="text-red-500">*</span>
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {OBJECTIVE_OPTIONS.map((opt) => {
                          const isSelected = formData.objective === opt.value;
                          return (
                            <label
                              key={opt.value}
                              className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                                isSelected
                                  ? 'border-[#B8935A] bg-[#B8935A]/10 ring-1 ring-[#B8935A]'
                                  : 'border-slate-200 hover:border-slate-300 bg-white'
                              }`}
                            >
                              <input
                                type="radio"
                                name="objective"
                                value={opt.value}
                                checked={isSelected}
                                onChange={() => setFormData((prev) => ({ ...prev, objective: opt.value as any }))}
                                className="mt-1 text-[#B8935A] focus:ring-[#B8935A]"
                              />
                              <div>
                                <p className="text-xs font-bold text-[#1B263B]">{opt.label}</p>
                                <p className="text-[11px] text-slate-500 mt-0.5">{opt.description}</p>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Champ 4: other_objective */}
                    {formData.objective === 'autre' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pt-1"
                      >
                        <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                          Précisez votre objectif <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="other_objective"
                          placeholder="Décrivez brièvement ce que vous recherchez…"
                          value={formData.other_objective}
                          onChange={(e) => setFormData((prev) => ({ ...prev, other_objective: e.target.value }))}
                          className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A]"
                        />
                      </motion.div>
                    )}
                  </div>
                )}

                {/* ÉTAPE 3: Différenciation (optionnelle) */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600 mb-2">
                        Étape optionnelle
                      </div>
                      <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1B263B]">
                        Vos points de différenciation
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600">
                        Indiquez les arguments propres à votre cabinet (méthodologie, cas clients similaires, certifications) pour enrichir la proposition.
                      </p>
                    </div>

                    {/* Champ: differentiation */}
                    <div>
                      <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                        Points forts / différenciation de votre cabinet
                      </label>
                      <textarea
                        rows={6}
                        name="differentiation"
                        placeholder="Méthodologie propriétaire, résultats chiffrés, expérience sectorielle, approche spécifique, certifications, cas clients similaires…"
                        value={formData.differentiation}
                        onChange={(e) => setFormData((prev) => ({ ...prev, differentiation: e.target.value }))}
                        className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A] bg-slate-50/50"
                      />
                    </div>
                  </div>
                )}

                {/* ÉTAPE 4: Récapitulatif + Paiement */}
                {currentStep === 4 && (
                  <form onSubmit={handleFinalSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1B263B]">
                        Récapitulatif
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600">
                        Vérifiez les informations avant de lancer la génération.
                      </p>
                    </div>

                    {/* Zone Récapitulatif */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-bold text-slate-500">Appel d'offres :</span>
                        <span className="font-semibold text-[#1B263B]">
                          {formData.rfp_text.length} caractères analysés
                        </span>
                      </div>

                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-bold text-slate-500">Votre cabinet :</span>
                        <span className="font-semibold text-[#1B263B]">{formData.client_name}</span>
                      </div>

                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-bold text-slate-500">Positionnement :</span>
                        <span className="font-semibold text-[#1B263B]">{formData.positioning}</span>
                      </div>

                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-bold text-slate-500">Objectif :</span>
                        <span className="font-semibold text-[#1B263B]">
                          {OBJECTIVE_OPTIONS.find((o) => o.value === formData.objective)?.label}
                          {formData.objective === 'autre' && ` (${formData.other_objective})`}
                        </span>
                      </div>

                      {formData.differentiation && (
                        <div className="flex justify-between border-b border-slate-200 pb-2">
                          <span className="font-bold text-slate-500">Différenciation :</span>
                          <span className="font-semibold text-[#1B263B] truncate max-w-[220px]">
                            {formData.differentiation}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Bloc Prix */}
                    <div className="p-5 rounded-2xl bg-[#1B263B] text-white border-2 border-[#B8935A] relative">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8935A] bg-[#B8935A]/20 px-2 py-0.5 rounded">
                            Offre de lancement
                          </span>
                          <p className="text-xs text-slate-300 mt-1">Génération immédiate à la demande</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-slate-400 line-through mr-2">29 €</span>
                          <span className="text-3xl font-extrabold text-[#B8935A] font-serif-heading">19 €</span>
                        </div>
                      </div>

                      <ul className="mt-4 pt-4 border-t border-slate-700 space-y-2 text-xs text-slate-200">
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#B8935A]" />
                          <span>Analyse du RFP et extraction des exigences</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#B8935A]" />
                          <span>Réponse structurée et professionnelle</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#B8935A]" />
                          <span>Document PDF haute qualité + version éditable</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#B8935A]" />
                          <span>Livraison par email en quelques minutes</span>
                        </li>
                      </ul>
                    </div>

                    {/* Champ Email de livraison */}
                    <div>
                      <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                        Email de livraison <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="prenom@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A]"
                      />
                    </div>
                  </form>
                )}
              </>
            ) : (
              /* Success Confirmation View */
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-300">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <div>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-extrabold text-[#1B263B]">
                    Génération en cours !
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Vos données ont été transmises avec succès. L'agent IA analyse le RFP et rédige votre réponse pour <strong>{formData.client_name}</strong>.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-500">Destinataire :</span>
                    <span className="font-mono text-slate-900">{formData.email}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-500">Délai estimé :</span>
                    <span className="font-bold text-emerald-600">5 à 8 minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-500">Format :</span>
                    <span className="text-slate-800">PDF + Version éditable</span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full py-3.5 bg-[#1B263B] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
                >
                  Fermer et retourner au site
                </button>
              </div>
            )}
          </div>

          {/* Footer Controls / Navigation Bar */}
          {!isSuccess && (
            <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-200 flex items-center justify-between shrink-0">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-all cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Retour
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#B8935A] hover:bg-[#9e7b45] text-[#1B263B] text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer ml-auto"
                >
                  Continuer
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3 w-full sm:w-auto ml-auto">
                  <div className="text-right text-[11px] text-slate-500 hidden sm:block">
                    <span>Paiement 100% sécurisé · Aucun abonnement</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleFinalSubmit}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#B8935A] hover:bg-[#9e7b45] text-[#1B263B] text-xs sm:text-sm font-bold shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="h-4 w-4 animate-spin" />
                        Traitement en cours...
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4" />
                        Payer 19 € et générer ma réponse
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
