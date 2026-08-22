/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { FileText, ShieldCheck, Globe, Zap } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { value: "10 minutes", label: "Trame complète générée par IA", icon: <FileText className="h-4 w-4 text-[#B8935A]" /> },
    { value: "SAD & Conseil", label: "Marchés publics & prestations intellectuelles", icon: <Zap className="h-4 w-4 text-[#B8935A]" /> },
    { value: "France & Belgique 🇫🇷 🇧🇪", label: "Conforme CCP & Loi marchés publics 2016", icon: <Globe className="h-4 w-4 text-[#B8935A]" /> },
    { value: "19 € par dossier", label: "Prix unique · Garantie révision 24h offerte", icon: <ShieldCheck className="h-4 w-4 text-[#B8935A]" /> },
  ];

  return (
    <section className="bg-[#1B263B] border-y border-[#B8935A]/30 py-8 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-700/60 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}
            >
              <div className="font-serif-heading text-xl sm:text-2xl font-extrabold text-[#B8935A] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1 font-sans flex items-center justify-center gap-1.5">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
