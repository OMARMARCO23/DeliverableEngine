/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Share2, HelpCircle, Eye, Printer, RotateCcw, ZoomIn, Bold, Italic, AlignLeft, List, CornerDownLeft, FileCheck } from 'lucide-react';
import { DeliverableExample } from '../types';

interface DocViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  doc: DeliverableExample | null;
}

export default function DocViewerModal({ isOpen, onClose, doc }: DocViewerModalProps) {
  if (!isOpen || !doc) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex flex-col bg-slate-100">
        
        {/* Google Doc Top Navigation Bar */}
        <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center justify-between shadow-xs shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-white shadow-xs">
              <FileText className="h-6 w-6" />
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold text-gray-800 tracking-tight">
                  {doc.title}
                </span>
                <span className="rounded bg-blue-50 border border-blue-200 px-2 py-0.5 text-[9px] font-bold text-blue-700 flex items-center gap-0.5 uppercase tracking-wide">
                  <Eye className="h-2.5 w-2.5" />
                  Mode Lecture
                </span>
              </div>
              
              {/* Menu items mockup */}
              <div className="flex gap-4 mt-0.5 text-xs text-gray-500">
                <span className="hover:text-gray-900 cursor-not-allowed">Fichier</span>
                <span className="hover:text-gray-900 cursor-not-allowed">Édition</span>
                <span className="hover:text-gray-900 cursor-not-allowed font-medium text-gray-800">Affichage</span>
                <span className="hover:text-gray-900 cursor-not-allowed">Outils</span>
                <span className="hover:text-gray-900 cursor-not-allowed">Aide</span>
              </div>
            </div>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-gray-200 text-xs font-semibold text-gray-600">
              <FileCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Généré par Deliverable Engine</span>
            </div>
            
            <button
              onClick={onClose}
              className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 px-4 text-xs font-semibold text-white shadow-sm transition-all cursor-pointer"
            >
              <CornerDownLeft className="h-3.5 w-3.5" />
              Retour au site
            </button>
          </div>
        </div>

        {/* Google Doc Format Action Ribbon */}
        <div className="bg-slate-50 border-b border-gray-200/80 px-4 py-2 flex items-center justify-between gap-4 overflow-x-auto shrink-0 select-none">
          <div className="flex items-center gap-4 text-gray-400">
            <Printer className="h-4 w-4 hover:text-gray-600 cursor-pointer" />
            <RotateCcw className="h-4 w-4 hover:text-gray-600 cursor-pointer" />
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-xs text-gray-600 font-medium">100%</span>
            <ZoomIn className="h-4 w-4 hover:text-gray-600 cursor-pointer" />
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-xs font-mono text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded font-bold">Inter (Sans)</span>
            <div className="h-4 w-px bg-gray-200" />
            <Bold className="h-4 w-4 hover:text-gray-600 cursor-pointer text-gray-800" />
            <Italic className="h-4 w-4 hover:text-gray-600 cursor-pointer" />
            <div className="h-4 w-px bg-gray-200" />
            <AlignLeft className="h-4 w-4 text-gray-800" />
            <List className="h-4 w-4 hover:text-gray-600 cursor-pointer" />
          </div>
          
          <div className="text-[10px] font-semibold text-gray-400 font-mono hidden md:block uppercase">
            Document en lecture seule • Partage "Viewer" actif
          </div>
        </div>

        {/* Workspace Area: Outline on Left + Centered White Page Container */}
        <div className="grow flex overflow-hidden">
          
          {/* Document outline sidebar */}
          <div className="hidden lg:block w-64 bg-white border-r border-gray-200 p-5 shrink-0 overflow-y-auto">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono mb-4">
              Sommaire du document
            </h4>
            <div className="space-y-3">
              {doc.previewLines.map((line, idx) => (
                <div key={idx} className="group flex items-start gap-2 text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors cursor-not-allowed">
                  <span className="text-gray-300 font-mono text-[10px] mt-0.5">{idx + 1}</span>
                  <span className="line-clamp-2 leading-relaxed">{line.replace(/^\d+\.\s*/, '')}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-100 bg-gradient-to-br from-blue-50/20 to-indigo-50/20 p-4 rounded-xl border border-blue-50/50">
              <h5 className="text-xs font-bold text-blue-900 flex items-center gap-1">
                <Share2 className="h-3.5 w-3.5 text-blue-600" />
                Détails du partage
              </h5>
              <p className="text-[10px] text-gray-500 mt-1.5 leading-relaxed">
                Ce document a été généré via l'algorithme double agent et injecté automatiquement sur votre drive. Vous disposez des pleins droits d'édition sur votre version finale.
              </p>
            </div>
          </div>

          {/* Centered Scrollable Document Page Backdrop */}
          <div className="grow bg-slate-100/80 overflow-y-auto p-4 sm:p-8 flex justify-center">
            
            {/* White paper sheet (Standard width representing letter format) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-3xl bg-white shadow-lg border border-gray-200/50 min-h-[1056px] p-8 sm:p-14 rounded-sm flex flex-col justify-between"
            >
              
              {/* Actual Document Content injected as HTML */}
              <div
                className="prose prose-sm max-w-none prose-slate"
                dangerouslySetInnerHTML={{ __html: doc.contentHtml }}
              />

              {/* Page Footer representing simulated Google Docs footer */}
              <div className="mt-16 pt-6 border-t border-gray-100 text-[10px] font-mono text-gray-400 flex justify-between items-center">
                <span>Page 1 sur 1</span>
                <span>Deliverable Engine — Génération sécurisée</span>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </AnimatePresence>
  );
}
