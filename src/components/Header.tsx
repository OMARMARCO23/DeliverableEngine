/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Layers, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PerimeterBanner from './PerimeterBanner';

interface HeaderProps {
  onOpenGenerate: () => void;
}

export default function Header({ onOpenGenerate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Livrable', href: '#demo-visuelle' },
    { label: 'Comment ça marche', href: '#fonctionnement' },
    { label: 'Tarif', href: '#tarif' }
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* ═══ BANDEAU PÉRIMÈTRE ═══ */}
      <PerimeterBanner onOpenGenerate={onOpenGenerate} />

      <header className="w-full px-3 sm:px-6 pt-2 sm:pt-3 pb-2 transition-all duration-300 pointer-events-none">
        <div className="mx-auto max-w-5xl">
          <div
            className={`pointer-events-auto flex items-center justify-between rounded-full px-4 sm:px-6 py-2 transition-all duration-300 ${
              isScrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 border border-slate-200/90'
                : 'bg-white/75 backdrop-blur-md border border-slate-200/60 shadow-xs'
            }`}
          >
          {/* Brand Identity - Minimalist & Refined */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Accueil Deliverable Engine"
          >
            <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-[#1B263B] text-white shadow-xs transition-transform duration-200 group-hover:scale-105">
              <span className="font-serif-heading text-xs font-bold tracking-tight text-white">D</span>
              <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-[#B8935A]" />
            </div>

            <span className="font-serif-heading text-sm sm:text-base font-bold tracking-tight text-[#1B263B]">
              Deliverable<span className="text-[#B8935A] ml-1 font-semibold">Engine</span>
            </span>
          </a>

          {/* Desktop Navigation - Clean and ultra-light */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full hover:text-[#1B263B] hover:bg-slate-100/80 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenGenerate()}
              className="group relative inline-flex items-center gap-2 rounded-full bg-[#1B263B] hover:bg-[#273754] px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 shadow-xs hover:shadow active:scale-95 cursor-pointer"
            >
              <Sparkles className="h-3 w-3 text-[#B8935A]" />
              <span>Générer</span>
              <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-[#B8935A]">
                19 €
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-auto mt-2 mx-auto max-w-6xl md:hidden overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-4 shadow-xl backdrop-blur-xl"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:bg-slate-100"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGenerate();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#1B263B] py-3 text-xs font-bold text-white shadow-sm"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#B8935A]" />
                Générer mon dossier maintenant — 19 €
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  </div>
  );
}
