import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck } from 'lucide-react';

import certIso9001 from '../assets/images/certificate_1.png';
import certIso14001 from '../assets/images/certificate_2.png';
import certIso45001 from '../assets/images/certificate_3.png';
import certIcv from '../assets/images/certificate_4.png';
import certTadweer from '../assets/images/certificate_5.png';
import certDed from '../assets/images/certificate_6.png';
import certAddc from '../assets/images/certificate_7.png';
import certAdssc from '../assets/images/certificate_8.png';

interface Certificate {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const CertificationsSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 'iso-9001',
      name: 'ISO 9001:2015',
      image: certIso9001,
      description: 'Quality Management System Standard Certification'
    },
    {
      id: 'iso-14001',
      name: 'ISO 14001:2015',
      image: certIso14001,
      description: 'Environmental Management System Standard Certification'
    },
    {
      id: 'iso-45001',
      name: 'ISO 45001:2018',
      image: certIso45001,
      description: 'Occupational Health & Safety Management System'
    },
    {
      id: 'icv-value',
      name: 'In-Country Value (ICV)',
      image: certIcv,
      description: 'Certified In-Country Value Contribution in the UAE'
    },
    {
      id: 'tadweer',
      name: 'Tadweer',
      image: certTadweer,
      description: 'Licensed Center of Waste Management Provider in Abu Dhabi'
    },
    {
      id: 'ded',
      name: 'Department of Economic Development',
      image: certDed,
      description: 'Abu Dhabi Department of Economic Development Registered'
    },
    {
      id: 'addc',
      name: 'Abu Dhabi Distribution Co.',
      image: certAddc,
      description: 'ADDC Approved & Registered Environmental Contractor'
    },
    {
      id: 'adssc',
      name: 'Abu Dhabi Sewerage Services Co.',
      image: certAdssc,
      description: 'ADSSC Registered Sewerage & Effluent Service Provider'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative font-sans overflow-hidden border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-4">
            <Award className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Compliance & Quality Assurance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications and <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Registrations</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            MOSS operates under the highest local and international regulatory frameworks to guarantee secure, high-standard services.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-400/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col items-center justify-between text-center"
            >
              {/* Image Container */}
              <div className="h-32 w-full flex items-center justify-center p-4 group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-full max-w-full object-contain filter dark:brightness-110"
                />
              </div>

              {/* Title & description */}
              <div className="mt-5 flex-grow flex flex-col justify-center">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {cert.name}
                </h4>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  {cert.description}
                </p>
              </div>

              {/* Verified Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
