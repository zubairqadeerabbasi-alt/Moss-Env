import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EnvironmentalService } from '../types';
import { SERVICES } from '../data/mockData';
import { Recycle, Trees, Droplets, Sun, ShieldAlert, FileText, ArrowRight, Check, Clock, Sparkles, Filter } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: EnvironmentalService) => void;
  onRequestQuote: (serviceId: string) => void;
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Recycle': return Recycle;
    case 'Trees': return Trees;
    case 'Droplets': return Droplets;
    case 'Sun': return Sun;
    case 'ShieldAlert': return ShieldAlert;
    case 'FileText': return FileText;
    case 'Sparkles': return Sparkles;
    default: return Recycle;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onRequestQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Waste & Recycling',
    'Compliance & Advisory'
  ];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative font-sans overflow-hidden">
      {/* Environmental Insect & Nature Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1920&q=80"
          alt="Ladybug macro insect on vibrant green leaf background"
          className="w-full h-full object-cover object-center opacity-20 dark:opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/80 to-slate-50 dark:from-slate-950 dark:via-slate-950/85 dark:to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.15),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-4">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Comprehensive Environmental Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Environmental <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            From industrial waste management and zero-landfill auditing to ecosystem restoration and fast emergency HAZMAT dispatch, MOSS delivers certified expertise.
          </p>

          {/* Category Filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-slate-400 mr-2">
              <Filter className="h-3.5 w-3.5" /> Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const IconComp = getIconComponent(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-md hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image & Badge Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Top Badge */}
                  {service.badge && (
                    <span className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-600 text-white shadow-md">
                      {service.badge}
                    </span>
                  )}

                  {/* Icon Circle */}
                  <div className="absolute bottom-4 left-4 h-12 w-12 rounded-2xl bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-slate-700 shadow-lg flex items-center justify-center">
                    <IconComp className="h-6 w-6" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                      {service.category}
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefit bullets */}
                    <ul className="mt-5 space-y-2">
                      {service.benefits.slice(0, 3).map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <Clock className="h-3.5 w-3.5 text-emerald-600" />
                      {service.turnaroundTime}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectService(service)}
                        className="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                      >
                        Details
                      </button>

                      <button
                        onClick={() => onRequestQuote(service.id)}
                        className="text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 px-3.5 py-1.5 rounded-xl shadow-sm transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                      >
                        <span>Quote</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
