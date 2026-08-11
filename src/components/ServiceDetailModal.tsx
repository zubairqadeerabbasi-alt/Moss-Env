import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EnvironmentalService } from '../types';
import { X, Check, Clock, ShieldCheck, ArrowRight, Leaf } from 'lucide-react';

interface ServiceDetailModalProps {
  service: EnvironmentalService | null;
  onClose: () => void;
  onRequestQuote: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md font-sans overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        >
          {/* Header image banner */}
          <div className="relative h-56 w-full overflow-hidden bg-slate-950">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-600 text-white mb-2 inline-block">
                  {service.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {service.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6 text-left">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                Detailed Scope & Methodology
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {service.fullDetails}
              </p>
            </div>

            {/* Key Deliverables & Benefits */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
                Key Deliverables & Environmental Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="p-3 rounded-xl bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Turnaround & Standard Badges */}
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Clock className="h-4 w-4 text-emerald-600" />
                <span>Estimated Turnaround: <strong>{service.turnaroundTime}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Regulatory Standard: <strong>EPA & ISO 14001 Audited</strong></span>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(service.id);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
