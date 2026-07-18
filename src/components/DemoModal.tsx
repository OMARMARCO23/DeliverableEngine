/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Mail, ArrowRight, User } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string | null;
}

export default function DemoModal({ isOpen, onClose, selectedPlanId }: DemoModalProps) {
  const [step, setStep] = useState<'calendar' | 'form' | 'success'>('calendar');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const nextDays = [
    { label: 'Lundi prochain', dateStr: 'Lundi 20 Juillet 2026' },
    { label: 'Mardi prochain', dateStr: 'Mardi 21 Juillet 2026' },
    { label: 'Mercredi prochain', dateStr: 'Mercredi 22 Juillet 2026' },
    { label: 'Jeudi prochain', dateStr: 'Jeudi 23 Juillet 2026' },
    { label: 'Vendredi prochain', dateStr: 'Vendredi 24 Juillet 2026' }
  ];

  const timeSlots = ['09:30', '11:00', '14:00', '15:30', '16:45'];

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('form');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setStep('success');
    }
  };

  const resetModal = () => {
    setStep('calendar');
    setSelectedDate(null);
    setSelectedTime(null);
    setName('');
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetModal}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100 z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 bg-slate-50">
            <div>
              <h3 className="font-display text-sm font-extrabold text-gray-900 uppercase tracking-wider">
                Réserver ma démo de 15 minutes
              </h3>
              <p className="text-[11px] text-gray-500 mt-0.5">
                {selectedPlanId ? `Option choisie : Offre ${selectedPlanId.toUpperCase()}` : 'Présentation personnalisée en direct'}
              </p>
            </div>
            <button
              onClick={resetModal}
              className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-6">
            
            {/* Step 1: Calendar and slots */}
            {step === 'calendar' && (
              <div className="space-y-5">
                <div className="flex items-start gap-2.5 bg-indigo-50 border border-indigo-100 p-3 rounded-xl">
                  <Clock className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-indigo-800 leading-relaxed">
                    <strong>15 min de démo en visioconférence :</strong> Pas de diapositives théoriques. Nous prenons vos propres documents de travail et les rédigeons ensemble en direct sous vos yeux.
                  </p>
                </div>

                {/* Day picker */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    1. Choisissez une date
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {nextDays.map((day) => (
                      <button
                        key={day.dateStr}
                        onClick={() => handleDateSelect(day.dateStr)}
                        className={`flex justify-between items-center px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          selectedDate === day.dateStr
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-xs'
                            : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-gray-700'
                        }`}
                      >
                        <span>{day.label}</span>
                        <span className="font-mono text-[10px] text-gray-400 font-medium">{day.dateStr}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time slot picker */}
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2.5 pt-1"
                  >
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                      2. Choisissez un créneau horaire (Heure de Paris)
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className="py-2.5 rounded-lg border border-slate-100 hover:border-indigo-600 hover:bg-indigo-50 text-center text-xs font-bold text-gray-700 hover:text-indigo-900 transition-all cursor-pointer active:scale-95"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Step 2: Identification form */}
            {step === 'form' && (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 flex items-center justify-between text-xs font-medium text-gray-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-indigo-600" />
                    <span>{selectedDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded text-indigo-800">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{selectedTime}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      Votre nom & prénom
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

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" />
                      Adresse email professionnelle
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
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('calendar')}
                    className="w-1/3 py-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-gray-600 cursor-pointer"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 group inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white shadow-md shadow-indigo-500/10 cursor-pointer"
                  >
                    Confirmer le rendez-vous
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Success Screen */}
            {step === 'success' && (
              <div className="text-center py-6 space-y-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-base font-extrabold text-gray-900">
                    Réservation confirmée, {name} !
                  </h4>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Un email de confirmation contenant votre lien de visioconférence sécurisé vient d'être envoyé à <strong className="text-gray-700">{email}</strong>.
                  </p>
                </div>

                <div className="bg-slate-50 border border-gray-100 rounded-xl p-4 inline-block text-left text-xs text-gray-700 font-medium space-y-1">
                  <p className="text-[10px] font-mono text-gray-400 uppercase">RÉCAPITULATIF DE VOTRE APPEL :</p>
                  <p className="text-gray-900 font-bold">Démo Deliverable Engine (15 minutes)</p>
                  <p className="text-slate-600">{selectedDate}</p>
                  <p className="text-slate-600">À {selectedTime} (Heure de Paris)</p>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-gray-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Vous pouvez reporter ou annuler en un clic depuis l'email.</span>
                </div>

                <button
                  onClick={resetModal}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white rounded-xl shadow-xs cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
