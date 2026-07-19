/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, CheckCircle2, FileText, Send, Sparkles, Wand2 } from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
  onOpenVideo: () => void;
}

export default function Hero({ onOpenTrial, onOpenDemo, onOpenVideo }: HeroProps) {
  const [consultantCount, setConsultantCount] = React.useState(1350);
  const [leadEmail, setLeadEmail] = React.useState('');
  const [leadSubmitted, setLeadSubmitted] = React.useState(false);

  React.useEffect(() => {
    let start = 1350;
    const end = 1428;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / (end - start)), 15);
    const timer = setInterval(() => {
      start += 1;
      setConsultantCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadEmail.trim()) {
      setLeadSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-radial from-slate-50 to-white py-20 lg:py-28">
      {/* Decorative background grid and orbs */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      <div className="absolute top-20 right-10 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 self-start rounded-full bg-indigo-50 border border-indigo-100 px-3.5 py-1 text-xs font-semibold text-indigo-700 mb-6"
            >
              <Sparkles className="h-3.5 w-3.5" />
              L'IA sur-mesure au service des consultants
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
              Vos livrables de conseil en{' '}
              <span className="relative inline-block text-indigo-600">
                10 minutes
              </span>{' '}
              au lieu de{' '}
              <span className="text-gray-400 line-through decoration-red-500/50 decoration-2">
                4 heures
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl"
            >
              Un agent IA qui connaît <strong>votre ton</strong>, <strong>vos templates</strong> et <strong>votre méthodologie</strong>. Propales, rapports, CR, synthèses — générés automatiquement, formatés et prêts à envoyer.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={onOpenTrial}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-[0.98] cursor-pointer"
                >
                  Démarrer l'essai gratuit 14 jours
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <button
                  onClick={onOpenVideo}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-55 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Play className="h-4 w-4 text-indigo-600 fill-indigo-600" />
                  Voir la démo vidéo
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-1">
                <p className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Pas de carte bancaire requise
                </p>
                <span className="hidden sm:inline text-slate-300 text-[11px]">•</span>
                <button
                  onClick={onOpenDemo}
                  className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Préférer un appel de démo de 15 min
                </button>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 border-t border-gray-100 pt-8"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" alt="Consultant portrait" referrerPolicy="no-referrer" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" alt="Consultant portrait" referrerPolicy="no-referrer" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=120" alt="Consultant portrait" referrerPolicy="no-referrer" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120" alt="Consultant portrait" referrerPolicy="no-referrer" />
                </div>
                <div className="text-xs text-gray-500">
                  <div className="flex items-center gap-1 text-amber-500 font-medium">
                    ★★★★★ <span className="text-gray-900 font-semibold ml-1">4.9/5</span>
                  </div>
                  <p className="mt-0.5">Plus de <strong className="text-gray-900 font-bold font-mono text-indigo-600 bg-indigo-50/50 px-1 py-0.5 rounded border border-indigo-100">{consultantCount}</strong> consultants nous font confiance</p>
                </div>
              </div>
            </motion.div>

            {/* Email Lead Capture Block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-4 rounded-xl border border-slate-200 bg-slate-50 max-w-md shadow-xs relative"
            >
              {!leadSubmitted ? (
                <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <FileText className="h-4 w-4 text-indigo-600" />
                    <span>Offert : Recevez le template de propale qui convertit à 80%</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Votre e-mail pro (ex: jean@conseil.fr)"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                    <button
                      type="submit"
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      Recevoir
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">C'est parti !</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Le template de proposition commerciale ultra-optimisé a été envoyé à <strong>{leadEmail}</strong>. Bon téléchargement !
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Hero visual representation of the engine */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none rounded-2xl border border-gray-200/70 bg-white p-4 shadow-xl"
            >
              {/* Fake app bar */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] font-mono font-medium text-gray-400">deliverable-engine.io</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Simulation steps */}
              <div className="space-y-4">
                {/* Brief Box */}
                <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-700 flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5 text-indigo-600" />
                      1. Votre brief brut (5 min)
                    </span>
                    <span className="text-[9px] font-mono text-gray-400">Rempli via formulaire</span>
                  </div>
                  <p className="text-gray-500 italic leading-relaxed bg-white border border-gray-100 p-2 rounded">
                    "Client Acme Corp. Proposer un audit agile de 3 phases en 8 semaines, avec un budget total de 24 000€..."
                  </p>
                </div>

                {/* Connecting Arrow */}
                <div className="flex justify-center my-1">
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-0.5 bg-gradient-to-b from-indigo-500 to-indigo-700 animate-pulse" />
                    <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-50 border border-indigo-100">
                      <Wand2 className="h-3 w-3 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} />
                    </div>
                    <div className="h-5 w-0.5 bg-gradient-to-b from-indigo-500 to-indigo-700" />
                  </div>
                </div>

                {/* Simulated Google Doc Generation */}
                <div className="rounded-xl border border-indigo-100 bg-gradient-to-b from-indigo-50/20 to-indigo-50/30 p-3.5 text-xs shadow-inner">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-indigo-900 flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-bounce" />
                      2. Agent IA Superviseur (10 sec)
                    </span>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-semibold text-emerald-700 flex items-center gap-0.5">
                      <CheckCircle2 className="h-2.5 w-2.5" />
                      Ton et structure validés
                    </span>
                  </div>

                  <div className="bg-white border border-indigo-50/70 p-3 rounded-lg shadow-sm space-y-2">
                    <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                      <div className="h-2 w-28 bg-gray-200 rounded" />
                      <div className="h-1.5 w-10 bg-indigo-400 rounded" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-full bg-gray-100 rounded" />
                      <div className="h-1.5 w-11/12 bg-gray-100 rounded" />
                      <div className="h-1.5 w-3/4 bg-gray-100 rounded" />
                    </div>
                    <div className="pt-1.5 flex gap-1.5">
                      <span className="h-3.5 w-12 rounded bg-indigo-50 border border-indigo-100 text-[8px] font-medium text-indigo-600 flex items-center justify-center">Phase 1</span>
                      <span className="h-3.5 w-12 rounded bg-indigo-50 border border-indigo-100 text-[8px] font-medium text-indigo-600 flex items-center justify-center">Phase 2</span>
                      <span className="h-3.5 w-12 rounded bg-emerald-50 border border-emerald-100 text-[8px] font-medium text-emerald-600 flex items-center justify-center">Phase 3</span>
                    </div>
                  </div>
                </div>

                {/* Deliver Email Button */}
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-2.5 flex items-center justify-between text-xs">
                  <span className="font-medium text-emerald-900 flex items-center gap-1.5">
                    <Send className="h-3.5 w-3.5 text-emerald-600" />
                    3. Notification email + Google Doc prêt !
                  </span>
                  <span className="font-mono text-[9px] text-emerald-600 bg-emerald-100/50 border border-emerald-200 px-1.5 py-0.5 rounded">Envoi à l'instant</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Security & Compliance Trust Ribbon */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-slate-200/60">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="text-left md:col-span-1">
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">SÉCURITÉ & CONFORMITÉ</span>
              <h4 className="text-sm font-extrabold text-slate-800 mt-1">Souveraineté & protection totale</h4>
            </div>
            
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Item 1 */}
              <div className="flex items-start gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a3 3 0 003-3V6.7m-2 9h-1.262a2 2 0 00-1.213.414l-1.166.875a2 2 0 00-.696 1.487v.183M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-800">Hébergement 100% Europe</h5>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">Serveurs souverains en France / Allemagne. Isolation complète.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-800">Conformité RGPD & DPA</h5>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">Données étanches. Aucun usage de vos documents pour entraîner des modèles IA.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-800">SOC 2 Type II</h5>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">Certification rigoureuse en cours d'audit par un cabinet indépendant.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
