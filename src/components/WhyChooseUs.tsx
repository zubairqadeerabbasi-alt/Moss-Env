import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_ITEMS } from '../data/mockData';
import { Award, Leaf, Clock, DollarSign, CheckCircle, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenRequestModal: () => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Award': return Award;
    case 'Leaf': return Leaf;
    case 'Clock': return Clock;
    case 'DollarSign': return DollarSign;
    case 'CheckCircle': return CheckCircle;
    default: return ShieldCheck;
  }
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenRequestModal }) => {
  return (
    <section id="why-us" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Badge */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-4">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Trusted Environmental Partner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Why Leaders Choose <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">MOSS Services</span>
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              We combine accredited scientific auditing with cutting-edge field technology to ensure your organization operates in harmony with nature and strictly within regulatory boundaries.
            </p>

            {/* Accreditations List */}
            <div className="mt-6 p-5 rounded-2xl bg-emerald-50 dark:bg-slate-900 border border-emerald-200 dark:border-slate-800 w-full">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-3">
                Industry Accreditations & Standards
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" /> Environment Agency – Abu Dhabi (EAD)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" /> Tadweer Approved Provider
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" /> Estidama Pearl Rating Auditors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" /> ISO 14001 Lead Assessors
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenRequestModal}
              className="mt-8 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-700 hover:bg-emerald-800 shadow-lg shadow-emerald-700/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Schedule a Site Assessment</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const IconComp = getIcon(item.iconName);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between ${
                    idx === 0 ? 'sm:col-span-2 sm:flex-row sm:items-center bg-gradient-to-r from-emerald-900/10 via-teal-900/5 to-transparent border-emerald-300 dark:border-emerald-900' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
