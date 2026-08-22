/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Mail, ShieldCheck, CheckCircle2, Award, FileCheck, Send, Sparkles, HelpCircle } from 'lucide-react';

interface AboutAndContactProps {
  onOpenGenerate: () => void;
}

export default function AboutAndContact({ onOpenGenerate }: AboutAndContactProps) {
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('Question sur un marché SAD / Conseil');
  const [contactMessage, setContactMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactMessage) return;

    // Direct mailto fallback or simulated direct contact
    const mailtoUrl = `mailto:support@deliverable-engine.io?subject=${encodeURIComponent(
      contactSubject
    )}&body=${encodeURIComponent(`De: ${contactEmail}\n\nMessage:\n${contactMessage}`)}`;

    window.open(mailtoUrl, '_blank');
    setIsSent(true);
  };

  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: À propos & Expertise Fondateur (Authentique) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8935A]/10 border border-[#B8935A]/30 px-3.5 py-1 text-xs font-semibold text-[#1B263B] mb-4">
                <Award className="h-3.5 w-3.5 text-[#B8935A]" />
                Origine & Expertise Fondateur
              </div>

              <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#1B263B] tracking-tight leading-tight">
                Conçu par des praticiens des marchés publics & du conseil
              </h2>

              <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                Deliverable Engine est né d'un constat simple et récurrent sur le terrain : que ce soit pour remporter un marché subséquent sur un <strong>Système d'Acquisition Dynamique (SAD)</strong> ou une <strong>mission de conseil stratégique</strong>, les consultants passent 60% de leur temps sur la mise en forme et la trame administrative plutôt que sur leur valeur ajoutée.
              </p>

              <div className="mt-6 space-y-4 font-sans text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-8 h-8 rounded-xl bg-[#1B263B] text-[#B8935A] flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B263B]">Maîtrise des cadres réglementaires (France & Belgique)</h4>
                    <p className="text-slate-600 text-xs mt-1">
                      Une modélisation exacte du Code de la commande publique français et de la Loi marchés publics belge du 17 juin 2016 pour éviter tout rejet pour non-conformité formelle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-8 h-8 rounded-xl bg-[#1B263B] text-[#B8935A] flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B263B]">Rigueur des standards des grands cabinets</h4>
                    <p className="text-slate-600 text-xs mt-1">
                      Synthèse exécutive percutante, cadrage des enjeux, plan de management des risques (AMDEC), matrice RACI et grilles de TJM/BPU structurées au millimètre.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-8 h-8 rounded-xl bg-[#1B263B] text-[#B8935A] flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B263B]">Aucun artifice, engagement d'honnêteté</h4>
                    <p className="text-slate-600 text-xs mt-1">
                      Pas de faux témoignages ni de fausse urgence. Vous payez 19 € à l'acte, votre document est livré sous 10 minutes, et vous disposez d'une révision offerte sous 24h sans aucune justification.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500 font-medium">
              <ShieldCheck className="h-4 w-4 text-[#B8935A]" />
              <span>Support direct assuré par des spécialistes du domaine sous 24h ouvrées</span>
            </div>
          </div>

          {/* Right Column: Canal de Contact Avant Commande */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-[#1B263B] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -z-0 h-48 w-48 rounded-full bg-[#B8935A]/10 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 bg-[#B8935A]/20 border border-[#B8935A]/40 text-[#B8935A] px-3 py-1 rounded-full text-xs font-semibold">
                    <MessageSquare className="h-3.5 w-3.5" />
                    Support avant-vente
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Réponse sous 24h</span>
                </div>

                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white mb-2">
                  Une question avant de commander ?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  Vous avez un appel d'offres particulier (SAD complexe, critères spécifiques, marché belge) et vous voulez vous assurer de l'adéquation avant vos 19 € ? Écrivez-nous directement.
                </p>

                {!isSent ? (
                  <form onSubmit={handleSendMessage} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1">
                        Votre e-mail professionnel
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vous@votre-cabinet.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full text-xs bg-slate-900/90 border border-slate-700 rounded-xl p-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#B8935A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1">
                        Sujet de votre question
                      </label>
                      <select
                        value={contactSubject}
                        onChange={(e) => setContactSubject(e.target.value)}
                        className="w-full text-xs bg-slate-900/90 border border-slate-700 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-[#B8935A]"
                      >
                        <option value="Question sur un marché SAD">Consultation Système d'Acquisition Dynamique (SAD)</option>
                        <option value="Question sur une mission de conseil">Mission de Conseil & Prestations Intellectuelles</option>
                        <option value="Question sur la conformité Belgique (BCE / Loi 2016)">Conformité Marché Public Belgique</option>
                        <option value="Autre demande">Autre question technique ou facture</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1">
                        Votre message
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Précisez la nature de votre consultation ou votre interrogation..."
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full text-xs bg-slate-900/90 border border-slate-700 rounded-xl p-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#B8935A]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-[#B8935A] hover:bg-[#a17e47] text-[#1B263B] font-bold text-xs rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="h-3.5 w-3.5" />
                      Envoyer ma question à l'équipe
                    </button>
                  </form>
                ) : (
                  <div className="bg-slate-900/90 border border-emerald-500/40 p-6 rounded-2xl text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Message bien préparé !</h4>
                    <p className="text-xs text-slate-300">
                      Votre messagerie a été ouverte avec vos éléments. Vous pouvez également nous contacter directement sur <strong>support@deliverable-engine.io</strong>.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="text-xs text-[#B8935A] hover:underline pt-2 block mx-auto cursor-pointer"
                    >
                      Poser une autre question
                    </button>
                  </div>
                )}
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-slate-800 text-center">
                <p className="text-[11px] text-slate-400">
                  Prêt à démarrer tout de suite ?{' '}
                  <button
                    onClick={onOpenGenerate}
                    className="text-[#B8935A] font-bold underline hover:text-[#d3a968] cursor-pointer ml-1"
                  >
                    Générer ma réponse (19 €)
                  </button>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
