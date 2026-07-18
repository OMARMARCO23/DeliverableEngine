/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, CheckCircle2, FileText, Send, Sparkles, Wand2 } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenVideo: () => void;
}

export default function Hero({ onOpenDemo, onOpenVideo }: HeroProps) {
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
              className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <button
                onClick={onOpenDemo}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-[0.98] cursor-pointer"
              >
                Réserver ma démo gratuite
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Play className="h-4 w-4 text-indigo-600 fill-indigo-600" />
                Voir la démo vidéo
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-3.5 border-t border-gray-100 pt-8"
            >
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
                <p className="mt-0.5">Déjà adopté par <strong className="text-gray-900">142 consultants indépendants</strong> en France</p>
              </div>
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
      </div>
    </section>
  );
}
