/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Sparkles, Mail, ArrowRight, ShieldCheck, Upload, FileText, Zap } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [email, setEmail] = useState('');
  const [rfpText, setRfpText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [positioning, setPositioning] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && (rfpText.trim() || selectedFile)) {
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setRfpText('');
      setSelectedFile(null);
      setPositioning('');
    }, 300);
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 rounded-lg p-1 hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3 py-1 text-xs font-semibold text-[#1B263B] mb-3">
                    <Zap className="h-3.5 w-3.5 fill-[#B8935A] text-[#B8935A]" />
                    Offre de lancement : 19 € (au lieu de 29 €)
                  </div>
                  <h3 className="font-serif-heading text-2xl font-extrabold text-[#1B263B]">
                    Génère ta réponse au RFP
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 font-sans">
                    Sans engagement · Livré directement sur ton adresse e-mail sous quelques minutes.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                      Ton adresse e-mail professionnelle *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="ton.nom@cabinet.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A]"
                    />
                  </div>

                  {/* RFP Upload or Text area */}
                  <div>
                    <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                      Ton fichier RFP (PDF / Word) ou colle le texte *
                    </label>
                    
                    <div className="mb-2">
                      <label className="flex items-center justify-center gap-2 w-full p-3 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100/80 cursor-pointer transition-colors text-xs font-medium text-slate-600">
                        <Upload className="h-4 w-4 text-[#B8935A]" />
                        <span>{selectedFile ? selectedFile.name : 'Choisir un fichier RFP (PDF, DOCX)'}</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={(e) => e.target.files?.[0] && setSelectedFile(e.target.files[0])}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <textarea
                      rows={3}
                      placeholder="Ou colle directement l'appel d'offres / le texte du besoin client ici..."
                      value={rfpText}
                      onChange={(e) => setRfpText(e.target.value)}
                      className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A] bg-slate-50/50"
                    />
                  </div>

                  {/* Positioning / Key strengths optional */}
                  <div>
                    <label className="block text-xs font-bold text-[#1B263B] mb-1.5">
                      Tes points forts / positionnement (Optionnel)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 10 ans d'expérience banque, méthodologie Agile, équipe senior..."
                      value={positioning}
                      onChange={(e) => setPositioning(e.target.value)}
                      className="w-full text-xs border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8935A]/30 focus:border-[#B8935A]"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#B8935A] hover:bg-[#9e7b45] text-xs sm:text-sm font-bold text-[#1B263B] shadow-md cursor-pointer transition-all active:scale-98 mt-2"
                  >
                    Lancer l'analyse et générer pour 19 €
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    Paiement sécurisé
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>Données 100% confidentielles</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-5 font-sans">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mb-2">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif-heading text-2xl font-extrabold text-[#1B263B]">
                    Génération lancée !
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                    L'IA extrait actuellement les exigences de ton appel d'offres et rédige ta proposition commerciale structurée.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-left max-w-sm mx-auto">
                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 text-[#B8935A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#1B263B]">Envoi par e-mail imminents</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                        Un e-mail contenant le document PDF ainsi que le fichier éditable sera envoyé à <strong>{email}</strong> dans environ 5 à 8 minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full py-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-[#1B263B] cursor-pointer transition-all active:scale-98"
                >
                  Fermer cette fenêtre
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

