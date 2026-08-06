import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectCaseStudy } from '../types';
import { FEATURED_PROJECTS } from '../data/mockData';
import { MapPin, Calendar, ArrowRight, ExternalLink, Sparkles, Filter } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenRequestModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject, onOpenRequestModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Ecological Restoration', 'Waste & Recycling', 'Renewable Energy', 'Auditing & Testing'];

  const filteredProjects = activeFilter === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/60 relative font-sans">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-4">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Real-World Environmental Case Studies</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Projects & Impact</span>
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 text-base max-w-xl">
              Explore how MOSS partners with municipalities, corporate campuses, and conservation groups to solve complex ecological challenges.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-emerald-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-md hover:shadow-2xl hover:shadow-emerald-950/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Top Category Badge */}
                  <span className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                    {project.category}
                  </span>

                  {/* Location & Client overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-emerald-400" /> Completed {project.year}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    Client: {project.client}
                  </span>

                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="mt-5 grid grid-cols-3 gap-2 p-3 rounded-2xl bg-emerald-50/70 dark:bg-slate-900/80 border border-emerald-100 dark:border-slate-700">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <span className="block text-sm sm:text-base font-extrabold text-emerald-700 dark:text-emerald-400">
                          {m.value}
                        </span>
                        <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map(t => (
                      <span key={t} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-700 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ExternalLink className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 font-medium">
            Have a specialized environmental site or land restoration project in mind?
          </p>
          <button
            onClick={onOpenRequestModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md cursor-pointer transition-all active:scale-95"
          >
            <span>Consult With Our Environmental Engineers</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
