import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCaseStudy } from '../types';
import { X, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onOpenRequestModal: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenRequestModal
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md font-sans overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        >
          {/* Header Banner */}
          <div className="relative h-64 w-full overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-600 text-white mb-2 inline-block">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6 text-left">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pb-4 border-b border-slate-200 dark:border-slate-800">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-emerald-600" /> {project.location}
              </span>
              <span>Client: <strong className="text-slate-900 dark:text-white">{project.client}</strong></span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-emerald-600" /> Year {project.year}
              </span>
            </div>

            {/* Metrics Callout */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <span className="block text-lg sm:text-2xl font-black text-emerald-700 dark:text-emerald-400">
                    {m.value}
                  </span>
                  <span className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Case Study Narrative */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                Project Overview & Outcome
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.fullStory}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  #{t}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">Need a similar solution for your facility?</span>
              <button
                onClick={() => {
                  onClose();
                  onOpenRequestModal();
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Feasibility Study</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
