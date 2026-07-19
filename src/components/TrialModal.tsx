/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Sparkles, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string | null;
}

export default function TrialModal({ isOpen, onClose, selectedPlanId }: TrialModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after transition
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setCompany('');
      setSpecialty('');
    }, 300);
  };

  const getPlanName = () => {
    if (selectedPlanId === 'freelance') return 'Plan Freelance';
    if (selectedPlanId === 'pro') return 'Plan Pro';
    return 'Essai Standard';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 z-10"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 rounded-lg p-1 hover:bg-slate-50 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 mb-3">
                    <Sparkles className="h-3.5 w-3.5 fill-emerald-100 text-emerald-600 animate-pulse" />
                    Essai gratuit 14 jours — sans engagement
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-slate-900">
                    Démarrez votre essai gratuit
                  </h3>
                  <p className="mt-2 text-xs text-slate-500">
                    Testez la puissance de notre double agent IA avec vos propres documents. Pas de carte de crédit requise.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nom complet
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jean Dupont"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Adresse e-mail professionnelle
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jean.dupont@conseil.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Cabinet / Entreprise
                      </label>
                      <input
                        type="text"
                        placeholder="Dupont Conseil"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full text-xs border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Spécialité / Métier
                      </label>
                      <select
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        className="w-full text-xs border border-slate-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="strategy">Conseil en Stratégie</option>
                        <option value="it">Conseil IT & Tech</option>
                        <option value="hr">Ressources Humaines</option>
                        <option value="audit">Audit & Expertise comptable</option>
                        <option value="freelance">Freelance Indépendant</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white shadow-md shadow-indigo-500/10 cursor-pointer transition-all active:scale-[0.98] mt-2"
                  >
                    Activer mon accès d'essai (14 jours)
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    Zéro engagement
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>Données 100% sécurisées</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-5">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 mb-2">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-extrabold text-slate-900">
                    Compte créé avec succès !
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                    Félicitations <strong>{name}</strong> ! Votre accès d'essai de 14 jours pour le{' '}
                    <strong className="text-indigo-600">{getPlanName()}</strong> est en cours d'activation.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-left max-w-sm mx-auto">
                  <div className="flex gap-2.5">
                    <Mail className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Vérifiez votre boîte mail</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                        Nous venons de vous envoyer vos accès temporaires et un modèle de propale type à l'adresse <strong>{email}</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full py-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 cursor-pointer transition-all active:scale-[0.98]"
                >
                  Découvrir mon espace de travail
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
