import React from 'react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About <span className="text-emerald-400">MOSS</span>
          </h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              MOSS Environmental Services & Transport is a professional environmental and waste management company based in Abu Dhabi, UAE. We provide reliable solutions for waste collection, transportation, disposal, and on-site environmental services.
            </p>
            <p>
              With experienced professionals, suitable equipment, and structured waste-handling procedures, we deliver safe, efficient, and environmentally responsible solutions tailored to our clients’ needs. Our commitment to quality, safety, and responsible waste management helps businesses maintain cleaner, safer, and more sustainable operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
