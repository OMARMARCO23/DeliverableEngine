/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, Maximize, RotateCcw, Monitor, MessageSquare, Sparkles, Wand2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(15); // Start at 15% progress
  const [currentSubtitle, setCurrentSubtitle] = useState("Voici comment configurer Deliverable Engine avec votre propre style.");

  // Simulate video playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          const next = prev + 0.5;
          
          // Subtitles timeline simulation based on progress
          if (next < 25) {
            setCurrentSubtitle("Nous chargeons d'abord vos templates de propositions commerciales habituels...");
          } else if (next < 50) {
            setCurrentSubtitle("Le premier agent IA analyse vos notes brutes et rédige la structure détaillée...");
          } else if (next < 75) {
            setCurrentSubtitle("Puis le second agent IA relit le document pour parfaire le ton et le vocabulaire...");
          } else if (next < 95) {
            setCurrentSubtitle("Le document finalisé est alors poussé automatiquement dans votre Google Drive...");
          } else {
            setCurrentSubtitle("Et voilà ! Un document impeccable, prêt à relire et envoyer en moins de 10 min.");
          }

          return next;
        });
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isOpen]);

  const handleReplay = () => {
    setProgress(0);
    setIsPlaying(true);
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
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-xs"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-900">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
              <h3 className="font-display text-xs font-extrabold text-slate-100 uppercase tracking-wider">
                Démo Vidéo : Deliverable Engine en action
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Interactive Player Screen Mockup */}
          <div className="relative aspect-video w-full bg-slate-900 flex flex-col justify-between overflow-hidden">
            
            {/* Simulation Content Inside Player */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-0">
              
              {/* Virtual Top Bar */}
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-bold text-slate-300">
                  <Monitor className="h-3 w-3 text-blue-400" />
                  <span>Enregistrement Loom</span>
                </div>
                
                {progress < 100 && isPlaying && (
                  <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Lecture en cours
                  </span>
                )}
              </div>

              {/* Central Dynamic Visualization (Simulating dashboard action) */}
              <div className="flex flex-col items-center justify-center grow py-4">
                <div className="w-full max-w-md bg-slate-950/90 border border-slate-800 rounded-xl p-4 shadow-xl space-y-3.5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                    <span className="text-[10px] font-mono text-slate-400">deliverable-engine.io / generator</span>
                    <Wand2 className="h-3.5 w-3.5 text-blue-400 animate-spin" style={{ animationDuration: progress < 50 ? '3s' : '0s' }} />
                  </div>

                  {/* Typing simulation */}
                  <div className="space-y-2">
                    <div className="h-2.5 bg-slate-800 rounded w-1/3" />
                    <div className="h-2 bg-slate-800 rounded w-full" />
                    <div className="h-2 bg-slate-800 rounded w-5/6" />
                  </div>

                  {/* Active step indicators based on progress */}
                  <div className="grid grid-cols-3 gap-2 pt-2 text-[9px] text-center font-bold">
                    <div className={`p-1.5 rounded border transition-colors ${progress < 30 ? 'bg-blue-500/10 border-blue-500 text-blue-400' : 'bg-slate-900/50 border-slate-800 text-slate-500'}`}>
                      1. Analyse Templates
                    </div>
                    <div className={`p-1.5 rounded border transition-colors ${progress >= 30 && progress < 70 ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' : 'bg-slate-900/50 border-slate-800 text-slate-500'}`}>
                      2. Double Validation IA
                    </div>
                    <div className={`p-1.5 rounded border transition-colors ${progress >= 70 ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-900/50 border-slate-800 text-slate-500'}`}>
                      3. Export Google Docs
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtitles Overlay */}
              <div className="bg-slate-950/90 border border-slate-800 text-slate-200 px-4 py-2.5 rounded-lg text-xs font-medium text-center max-w-xl mx-auto flex items-center justify-center gap-2">
                <MessageSquare className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                <p className="line-clamp-1">{currentSubtitle}</p>
              </div>

            </div>

            {/* Video shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-0 pointer-events-none" />

          </div>

          {/* Player controls */}
          <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex flex-col gap-3 z-10 relative">
            
            {/* Timeline Progress Bar */}
            <div className="relative w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls Bar */}
            <div className="flex items-center justify-between text-slate-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded-full bg-slate-800 hover:bg-slate-700 p-2 text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white" />}
                </button>

                <button
                  onClick={handleReplay}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Recommencer"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>

                <span className="text-[11px] font-mono text-slate-400">
                  {Math.floor((progress / 100) * 105)}s / 105s
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Volume2 className="h-4 w-4 text-slate-400" />
                  <div className="w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 w-3/4" />
                  </div>
                </div>
                
                <Maximize className="h-4 w-4 text-slate-400 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
