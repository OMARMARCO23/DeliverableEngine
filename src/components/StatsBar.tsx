/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { FileText, Clock, ShieldCheck, Tag } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      value: "9 sections",
      label: "Structure complète prête à personnaliser",
      icon: <FileText className="h-4 w-4 text-[#B8935A]" />
    },
    {
      value: "< 10 min",
      label: "Livraison PDF par email",
      icon: <Clock className="h-4 w-4 text-[#B8935A]" />
    },
    {
      value: "RGPD",
      label: "Données traitées en Europe",
      icon: <ShieldCheck className="h-4 w-4 text-[#B8935A]" />
    },
    {
      value: "19 €",
      label: "Prix unique — sans abonnement",
      icon: <Tag className="h-4 w-4 text-[#B8935A]" />
    }
  ];

  return (
    <section className="bg-[#1B263B] border-y border-[#B8935A]/30
                        py-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6
                        divide-y md:divide-y-0 md:divide-x
                        divide-slate-700/60 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}
            >
              <div className="font-serif-heading text-3xl sm:text-4xl
                              font-extrabold text-[#B8935A] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300
                              font-medium mt-1.5 flex items-center
                              justify-center gap-1.5">
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
