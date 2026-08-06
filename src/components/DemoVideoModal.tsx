import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoVideoModal: React.FC<DemoVideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl overflow-hidden"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold text-white">Strata 3.0 Guided Product Walkthrough (3:20)</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close demo"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Screen Container */}
        <div className="relative aspect-video bg-slate-950 flex flex-col items-center justify-center p-8 text-center overflow-hidden">
          {/* Simulated Animated Visual Canvas */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-purple-950/30 flex items-center justify-center">
            <div className="space-y-4 max-w-md px-4 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-indigo-600/30 border border-indigo-400/30 text-indigo-300 flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                <Play className="h-8 w-8 fill-current ml-1" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Autonomous Workflow Architecture Overview
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Demonstrating sub-12ms event pipeline routing, TypeScript reasoning nodes, and zero-trust secret encryption in real time.
              </p>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-emerald-400 bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-800">
                <CheckCircle2 className="h-4 w-4" /> 50,000 Events Processed in 0.4 seconds
              </div>
            </div>
          </div>

          {/* Bottom Player Controls Scrubber */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="h-4 w-4 text-rose-400" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <span className="text-xs font-mono text-slate-400">01:14 / 03:20</span>
            </div>

            <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-1/3 rounded-full" />
            </div>

            <span className="text-xs font-mono text-indigo-400 font-semibold px-2 py-1 bg-indigo-950 rounded border border-indigo-800">
              1080p HD
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
