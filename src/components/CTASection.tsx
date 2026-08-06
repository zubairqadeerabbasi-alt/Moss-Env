import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Leaf, ArrowRight, ShieldCheck, Phone, CheckCircle2, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOpenRequestModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenRequestModal }) => {
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Waste Management & Circular Economy');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-950 text-white relative font-sans overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.2),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-4">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span>Ready For Environmental Progress?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Transform Your Environmental Impact Today
              </h2>

              <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                Schedule a comprehensive site assessment, request zero-waste auditing, or dispatch 24/7 hazardous response. Our certified engineers are standing by.
              </p>

              <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" /> Free Initial Consultation & Feasibility Audit
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" /> Full Regulatory Compliance Guarantee
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" /> Rapid 24-48 Hour Quote Delivery
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <Phone className="h-4 w-4" /> Direct Line:
                </span>
                <a href="tel:18005556677" className="text-white hover:underline font-bold text-sm">
                  1-800-555-MOSS
                </a>
              </div>
            </div>

            {/* Right Fast Consultation Request Form */}
            <div className="lg:col-span-5 bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-emerald-500/30 shadow-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Quick Consultation Request
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Receive a tailored environmental plan within 24 hours.
                  </p>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Service Interest
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option>Waste Management & Circular Economy</option>
                      <option>Ecological Restoration & Reforestation</option>
                      <option>Air & Water Quality Auditing</option>
                      <option>Renewable Energy & Efficiency</option>
                      <option>Hazardous Materials Remediation</option>
                      <option>Environmental Compliance & Permits</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Work Email / Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Send Request</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={onOpenRequestModal}
                      className="text-[11px] font-semibold text-emerald-400 hover:underline cursor-pointer"
                    >
                      Or open full customized quote form →
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Consultation Request Received!</h4>
                  <p className="mt-2 text-xs text-slate-300">
                    Our environmental specialist will review your request for <span className="text-emerald-400 font-semibold">{serviceType}</span> and reply to <span className="text-emerald-400">{email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
