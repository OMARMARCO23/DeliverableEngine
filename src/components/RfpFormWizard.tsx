/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase, uploadRFPFile } from '../lib/supabase';
import {
  X,
  Upload,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Paperclip,
  Trash2,
  Check,
  Sparkles,
  Lock,
  AlertCircle
} from 'lucide-react';

interface RfpFormWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface RfpFormData {
  rfp_file: File | null;
  rfp_text: string;
  client_name: string;
  positioning: string;
  objective: 'gagner' | 'positionner' | 'contrainte' | 'autre';
  other_objective: string;
  differentiation: string;
  reference_files: File[];
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

export default function RfpFormWizard({ isOpen, onClose }: RfpFormWizardProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [stepError, setStepError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<RfpFormData>({
    rfp_file: null,
    rfp_text: '',
    client_name: '',
    positioning: '',
    objective: 'gagner',
    other_objective: '',
    differentiation: '',
    reference_files: [],
    email: ''
  });

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
        rfp_file: null,
        rfp_text: '',
        client_name: '',
        positioning: '',
        objective: 'gagner',
        other_objective: '',
        differentiation: '',
        reference_files: [],
        email: ''
      });
    }, 300);
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const hasFile = !!formData.rfp_file;
    const hasText = formData.rfp_text.trim().length >= 30;
    if (!hasFile && !hasText) {
      setStepError("Merci d’uploader un fichier ou de coller au moins 30 caractères.");
      return false;
    }
    setStepError(null);
    return true;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    if (!formData.client_name.trim()) {
      setStepError("Le nom du client / entreprise est obligatoire.");
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

  // Step 4 Validation & Submission
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
      let n8nWebhookUrl = envMeta?.VITE_N8N_WEBHOOK1_URL || '';
      // If no URL or if configured with localhost (which fails in deployed browsers), fallback to ngrok public tunnel
      if (!n8nWebhookUrl || n8nWebhookUrl.includes('localhost') || n8nWebhookUrl.includes('127.0.0.1')) {
        n8nWebhookUrl = 'https://limeade-spiffy-uneasily.ngrok-free.dev/webhook/form-rfp';
      }

      // 1. Upload RFP file to Supabase Storage if present and Supabase is configured
      let fileInfo: { file_path: string; file_name: string; file_size: number; file_type: string } | null = null;
      if (formData.rfp_file && supabase) {
        try {
          fileInfo = await uploadRFPFile(formData.rfp_file, formData.email);
        } catch (uploadErr) {
          console.error('Supabase upload error:', uploadErr);
        }
      }

      // 2. Insert pending record into Supabase rfp_pending table
      let rfpRecord: { id?: string | number; email?: string; has_file?: boolean; file_path?: string | null } | null = null;
      if (supabase) {
        try {
          const { data: rfp, error: dbError } = await supabase
            .from('rfp_pending')
            .insert({
              email: formData.email,
              client_name: formData.client_name,
              positioning: formData.positioning,
              objective: formData.objective === 'autre' ? formData.other_objective : formData.objective,
              differentiation: formData.differentiation,
              rfp_text: formData.rfp_text || null,
              has_file: !!fileInfo,
              file_path: fileInfo?.file_path || null,
              file_name: fileInfo?.file_name || null,
              status: 'pending'
            })
            .select()
            .single();

          if (dbError) {
            console.error('Supabase rfp_pending insert error:', dbError);
          } else {
            rfpRecord = rfp;
          }
        } catch (err) {
          console.error('Supabase insert exception:', err);
        }
      }

      // Helper to convert File to Base64
      const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve((reader.result as string) || '');
          reader.onerror = () => resolve('');
          reader.readAsDataURL(file);
        });
      };

      // 3. Prepare payload for n8n Webhook
      const rfpFileBase64 = formData.rfp_file ? await fileToBase64(formData.rfp_file) : null;
      const refFilesData = await Promise.all(
        formData.reference_files.map(async (f) => ({
          name: f.name,
          size: f.size,
          type: f.type,
          data: await fileToBase64(f)
        }))
      );

      // Clean JSON payload matching user's spec with rfp_id if record created
      const jsonPayload = rfpRecord ? {
        rfp_id: rfpRecord.id,
        email: rfpRecord.email || formData.email,
        has_file: rfpRecord.has_file ?? !!formData.rfp_file,
        file_path: rfpRecord.file_path || fileInfo?.file_path || null,
        client_name: formData.client_name,
        positioning: formData.positioning,
        objective: formData.objective === 'autre' ? formData.other_objective : formData.objective,
        differentiation: formData.differentiation,
        rfp_text: formData.rfp_text
      } : {
        email: formData.email,
        client_name: formData.client_name,
        positioning: formData.positioning,
        objective: formData.objective,
        other_objective: formData.objective === 'autre' ? formData.other_objective : '',
        differentiation: formData.differentiation,
        rfp_text: formData.rfp_text,
        has_file: !!formData.rfp_file,
        rfp_file: formData.rfp_file
          ? {
              name: formData.rfp_file.name,
              size: formData.rfp_file.size,
              type: formData.rfp_file.type,
              data: rfpFileBase64
            }
          : null,
        reference_files: refFilesData
      };

      // 4. Send notification payload to n8n Webhook
      if (n8nWebhookUrl) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        try {
          await fetch(n8nWebhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify(jsonPayload),
            signal: controller.signal
          });
        } catch (corsErr) {
          console.warn('Standard application/json fetch failed/CORS, retrying with text/plain:', corsErr);
          try {
            await fetch(n8nWebhookUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'text/plain'
              },
              body: JSON.stringify(jsonPayload),
              signal: controller.signal
            });
          } catch (noCorsErr) {
            console.warn('n8n Webhook text/plain attempt failed:', noCorsErr);
          }
        } finally {
          clearTimeout(timeoutId);
        }
      }

      // 5. Redirect to Lemon Squeezy with email & custom rfp_id parameter
      const paymentUrl =
        envMeta?.VITE_LEMON_SQUEEZY_PAYMENT_LINK ||
        envMeta?.VITE_PAYMENT_LINK ||
        envMeta?.VITE_STRIPE_PAYMENT_LINK;

      if (paymentUrl) {
        let checkoutRedirect = paymentUrl;
        const urlObj = new URL(checkoutRedirect.startsWith('http') ? checkoutRedirect : `https://${checkoutRedirect}`);

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
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
        >
          {/* Header Bar */}
          <div className="bg-[#1B263B] text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-700/80 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#B8935A] text-[#1B263B] font-bold flex items-center justify-center text-xs font-serif-heading">
                  R
                </div>
                <span className="font-serif-heading text-lg font-bold tracking-tight text-white">
                  RFP<span className="text-[#B8935A]">Engine</span>
                </span>
                <span className="text-[10px] bg-[#B8935A]/20 text-[#B8935A] border border-[#B8935A]/40 px-2 py-0.5 rounded font-mono ml-2">
                  19 €
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans mt-0.5">
                Génération de proposition commerciale alimentée par IA
              </p>
            </div>

            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-white rounded-lg p-1.5 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Progress Indicator Steps */}
          {!isSuccess && (
            <div className="bg-slate-100/80 px-6 py-3 border-b border-slate-200 shrink-0">
              <div className="flex items-center justify-between max-w-md mx-auto">
                {[
                  { step: 1, label: 'Document' },
                  { step: 2, label: 'Infos' },
                  { step: 3, label: 'Atouts' },
                  { step: 4, label: 'Validation' }
                ].map((s) => {
                  const isActive = currentStep === s.step;
                  const isDone = currentStep > s.step;
                  return (
                    <div key={s.step} className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all ${
                          isDone
                            ? 'bg-emerald-600 text-white'
                            : isActive
                            ? 'bg-[#1B263B] text-[#B8935A] ring-2 ring-[#B8935A]'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {isDone ? <Check className="h-4 w-4 stroke-[3]" /> : s.step}
                      </div>
                      <span
                        className={`hidden sm:inline text-xs font-semibold ${
                          isActive ? 'text-[#1B263B]' : 'text-slate-500'
                        }`}
                      >
                        {s.label}
                      </span>
                      {s.step < 4 && (
                        <div className="w-6 sm:w-10 h-0.5 bg-slate-300 mx-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Scrollable Form Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-sans">
            {stepError && (
              <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5 animate-shake">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span className="font-medium">{stepError}</span>
              </div>
            )}

            {!isSuccess ? (
              <>
                {/* ÉTAPE 1: RFP Input */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1B263B]">
                        Déposez votre RFP / Cahier des charges
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600">
                        Uploadez le document d'appel d'offres ou collez son texte. Le fichier sera stocké sur Supabase Storage et traité par le workflow n8n.
                      </p>
                    </div>

                    {/* Information Banner on n8n Workflow */}
                    <div className="p-3.5 bg-blue-50/80 border border-blue-200/80 rounded-xl text-xs text-blue-900 flex items-start gap-3">
                      <FileText className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Traitement automatisé Supabase & n8n :</strong>
                        <p className="mt-0.5 text-blue-800">
                          Votre document d'appel d'offres est transmis en toute sécurité. Le workflow n8n se chargera de lire le fichier, d'extraire automatiquement toutes les métadonnées de l'acheteur (émetteur, budget, planning, exigences) et de déclencher l'analyse Gemini.
                        </p>
                      </div>
                    </div>

                    {/* Champ 1: File Upload */}
                    <div>
                      <label className="block text-xs font-bold text-[#1B263B] mb-2">
                        1. Fichier RFP (.pdf, .doc, .docx - max 15 Mo)
                      </label>
                      
                      <div className="relative border-2 border-dashed border-slate-300 hover:border-[#B8935A] rounded-2xl p-5 text-center transition-colors bg-slate-50/50 hover:bg-slate-50 group cursor-pointer">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              const uploadedFile = e.target.files[0];
                              setFormData((prev) => ({ ...prev, rfp_file: uploadedFile }));
                              setStepError(null);
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        
                        {formData.rfp_file ? (
                          <div className="flex items-center justify-center gap-3">
                            <FileText className="h-8 w-8 text-emerald-600" />
                            <div className="text-left">
                              <p className="text-xs font-bold text-slate-900">{formData.rfp_file.name}</p>
                              <p className="text-[10px] text-slate-500 font-mono">
                                {(formData.rfp_file.size / (1024 * 1024)).toFixed(2)} Mo · Prêt pour transmission
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFormData((prev) => ({ ...prev, rfp_file: null }));
                              }}
                              className="ml-auto text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <Upload className="mx-auto h-8 w-8 text-[#B8935A] mb-2 group-hover:scale-110 transition-transform" />
                            <p className="text-xs font-bold text-[#1B263B]">
                              Déposez votre fichier ici ou cliquez pour parcourir – PDF, DOC, DOCX – max 15 Mo
                            </p>
                            <p className="text-[11px] text-slate-500 mt-1">
                              Cahier des charges, sujet d'appel d'offres ou brief client
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest my-2">
                      <div className="h-px bg-slate-200 flex-1" />
                      <span>OU</span>
                      <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    {/* Champ 2: Textarea */}
                    <div>
                      <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                        2. Collage du texte de l'appel d'offres
                      </label>
                      <textarea
                        rows={5}
                        name="rfp_text"
                        placeholder="Collez ici le contenu complet du cahier des charges / appel d’offres…"
                        value={formData.rfp_text}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, rfp_text: e.target.value }));
                          setStepError(null);
                        }}
                        className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A] bg-slate-50/50"
                      />
                      <p className="text-[11px] text-slate-500 mt-1">
                        {formData.rfp_text.length > 0 && `${formData.rfp_text.length} caractères saisis`}
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

                    {/* Champ 1: differentiation */}
                    <div>
                      <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                        Points forts / différenciation de votre cabinet
                      </label>
                      <textarea
                        rows={5}
                        name="differentiation"
                        placeholder="Méthodologie propriétaire, résultats chiffrés, expérience sectorielle, approche spécifique, certifications, cas clients similaires…"
                        value={formData.differentiation}
                        onChange={(e) => setFormData((prev) => ({ ...prev, differentiation: e.target.value }))}
                        className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A] bg-slate-50/50"
                      />
                    </div>

                    {/* Champ 2: reference_files */}
                    <div>
                      <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                        Documents de référence (plusieurs fichiers acceptés)
                      </label>

                      <div className="relative border border-slate-200 hover:border-[#B8935A] rounded-xl p-4 text-center transition-colors bg-slate-50/50 cursor-pointer">
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            if (e.target.files) {
                              const newFiles = Array.from(e.target.files);
                              setFormData((prev) => ({
                                ...prev,
                                reference_files: [...prev.reference_files, ...newFiles]
                              }));
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Paperclip className="mx-auto h-6 w-6 text-[#B8935A] mb-1" />
                        <p className="text-xs font-bold text-[#1B263B]">
                          Anciennes propales, cas clients, CV, méthodologie…
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Plusieurs fichiers .pdf, .doc, .docx</p>
                      </div>

                      {/* File list preview */}
                      {formData.reference_files.length > 0 && (
                        <div className="mt-3 space-y-2">
                          <p className="text-[11px] font-bold text-slate-700">
                            Fichiers ajoutés ({formData.reference_files.length}) :
                          </p>
                          {formData.reference_files.map((file, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-xs"
                            >
                              <span className="truncate font-medium text-slate-800 max-w-[280px]">
                                📄 {file.name}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  setFormData((prev) => ({
                                    ...prev,
                                    reference_files: prev.reference_files.filter((_, i) => i !== idx)
                                  }));
                                }}
                                className="text-slate-400 hover:text-red-500 text-xs p-1"
                              >
                                Supprimer
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
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
                        <span className="font-bold text-slate-500">Document :</span>
                        <span className="font-semibold text-[#1B263B] text-right truncate max-w-[260px]">
                          {formData.rfp_file ? (
                            formData.rfp_text.trim().length >= 30
                              ? `Fichier : ${formData.rfp_file.name} (+ texte collé)`
                              : `Fichier : ${formData.rfp_file.name}`
                          ) : (
                            `Texte collé (${formData.rfp_text.length} car.)`
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-bold text-slate-500">Client :</span>
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

                      {formData.reference_files.length > 0 && (
                        <div className="flex justify-between">
                          <span className="font-bold text-slate-500">Fichiers ref :</span>
                          <span className="font-semibold text-[#1B263B]">
                            {formData.reference_files.length} document(s)
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
                    Vos données ont été transmises avec succès. L'agent IA analyse le RFP pour <strong>{formData.client_name}</strong> et rédige votre réponse.
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
