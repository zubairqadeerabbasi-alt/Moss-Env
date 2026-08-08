import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EQUIPMENT_ITEMS } from '../data/mockData';
import { ShieldCheck, Cpu, ArrowRight, CheckCircle2, Search, Wrench, Settings } from 'lucide-react';

interface EquipmentsSectionProps {
  onOpenRequestModal: () => void;
}

export const EquipmentsSection: React.FC<EquipmentsSectionProps> = ({ onOpenRequestModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(EQUIPMENT_ITEMS.map((item) => item.category)))];

  const filteredItems = EQUIPMENT_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'In Use':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Ready for Dispatch':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <section id="equipments" className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden font-sans border-t border-slate-800/60">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-bold mb-4">
              <Cpu className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
              <span>Advanced Tech Fleet</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              State-of-the-Art <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">Environmental Equipments</span>
            </h2>

            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              We deploy the industry's most advanced certified equipment to deliver precision compliance auditing, ecosystem restoration, and zero-waste management across the UAE.
            </p>
          </div>

          <button
            onClick={onOpenRequestModal}
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-700/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95 self-start md:self-auto"
          >
            <span>Book Equipment & Assessment</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search equipment or specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Equipment Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-950/20 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category & Status Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-950/80 text-emerald-400 border border-slate-800 backdrop-blur-md">
                      {item.category}
                    </span>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border backdrop-blur-md ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Specifications List */}
                    <div className="mt-5 pt-4 border-t border-slate-800/80">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                        <Settings className="h-3 w-3" />
                        <span>Specifications</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {item.specs.map((spec, specIdx) => (
                          <li key={specIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <Wrench className="h-3 w-3" /> EAD & Tadweer Audited
                    </span>
                    <button
                      onClick={onOpenRequestModal}
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 rounded-3xl bg-slate-900/30 border border-slate-800">
            <p className="text-slate-400 text-sm">No equipments found matching the search or category.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-xs font-bold text-emerald-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
