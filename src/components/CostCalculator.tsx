/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, Hourglass, TrendingUp, DollarSign, Clock } from 'lucide-react';

export default function CostCalculator() {
  // Inputs
  const [tjm, setTjm] = useState(800);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [weeksPerYear, setWeeksPerYear] = useState(48);

  // Math conversions
  const hourlyRate = tjm / 8;
  const lostHoursPerYear = hoursPerWeek * weeksPerYear;
  const lostRevenuePerYear = lostHoursPerYear * hourlyRate;

  // Deliverable Engine comparison (saves 11/12 of the time, 10 min instead of 2 hours, or factor of 12)
  const engineHoursPerYear = Math.round(lostHoursPerYear / 12);
  const recoveredHours = lostHoursPerYear - engineHoursPerYear;
  
  // CA Potential assumes 80% billable efficiency on recovered hours
  const caPotential = Math.round(recoveredHours * hourlyRate * 0.8);

  return (
    <section id="cost" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glowing orb */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 text-xs font-semibold text-indigo-400 mb-4">
            <Calculator className="h-3.5 w-3.5" />
            Calculatrice ROI Interactive
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Combien de temps <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-300">perdez-vous par semaine ?</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Ajustez vos paramètres ci-dessous pour calculer en temps réel l'impact financier de la rédaction manuelle et votre retour sur investissement immédiat avec Deliverable Engine.
          </p>
        </div>

        {/* Dynamic Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-5 bg-slate-800/60 border border-slate-700/50 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-bold font-display text-white border-b border-slate-700 pb-3">
                Vos paramètres d'activité
              </h3>

              {/* TJM Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-slate-300 font-medium">Votre TJM (Taux Journalier)</label>
                  <span className="text-indigo-400 font-bold text-base font-mono">{tjm} €</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="2000"
                  step="50"
                  value={tjm}
                  onChange={(e) => setTjm(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>300 €</span>
                  <span>1 000 €</span>
                  <span>2 000 €</span>
                </div>
              </div>

              {/* Hours per week Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-slate-300 font-medium">Rédaction de livrables / semaine</label>
                  <span className="text-indigo-400 font-bold text-base font-mono">{hoursPerWeek} h</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>2 h</span>
                  <span>12 h</span>
                  <span>25 h</span>
                </div>
              </div>

              {/* Weeks per year Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-slate-300 font-medium">Semaines travaillées / an</label>
                  <span className="text-indigo-400 font-bold text-base font-mono">{weeksPerYear} semaines</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="52"
                  step="1"
                  value={weeksPerYear}
                  onChange={(e) => setWeeksPerYear(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>30 sem.</span>
                  <span>45 sem.</span>
                  <span>52 sem.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/50 text-[11px] text-slate-400 leading-relaxed italic">
              * Calcul basé sur des journées types de 8h facturables, avec une estimation prudente d'efficacité de 80% sur le temps récupéré.
            </div>
          </div>

          {/* Interactive Calculation Result Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Without Deliverable Engine Card */}
            <div className="bg-slate-800/30 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-red-400 uppercase font-semibold">SANS DELIVERABLE ENGINE</span>
                <h3 className="text-xl font-bold font-display mt-2 text-white">Le coût annuel du temps perdu</h3>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center">
                      <Hourglass className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase">Temps de rédaction annuel</p>
                      <p className="text-lg font-bold font-mono text-slate-200">{lostHoursPerYear} heures / an</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center">
                      <DollarSign className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase">Perte sèche de CA équivalente</p>
                      <p className="text-xl font-extrabold font-mono text-red-400">{lostRevenuePerYear.toLocaleString()} € / an</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-400 italic">
                {hoursPerWeek}h par semaine équivaut à plus de {Math.round(lostHoursPerYear / 8)} jours entiers consacrés à de l'administration éditoriale pure.
              </p>
            </div>

            {/* With Deliverable Engine Card */}
            <div className="bg-gradient-to-b from-indigo-950/40 to-slate-900/40 border border-indigo-500/30 p-6 rounded-2xl flex flex-col justify-between relative shadow-lg shadow-indigo-500/5">
              <div className="absolute -top-3 right-4 rounded-full bg-indigo-600 px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-widest">
                Optimisé
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider text-indigo-400 uppercase font-semibold">AVEC DELIVERABLE ENGINE</span>
                <h3 className="text-xl font-bold font-display mt-2 text-white">Votre nouveau potentiel de gain</h3>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-indigo-300 uppercase">Nouveau temps éditorial</p>
                      <p className="text-lg font-bold font-mono text-slate-200">{engineHoursPerYear} heures / an <span className="text-xs text-indigo-400 font-normal">(-92%)</span></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-300 uppercase">CA Récupérable Estimé</p>
                      <p className="text-2xl font-extrabold font-mono text-emerald-400">+{caPotential.toLocaleString()} € / an</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium text-xs leading-relaxed">
                💰 Vous récupérez <strong>{recoveredHours} heures</strong> par an à réinvestir dans vos missions facturées ou votre prospection.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
