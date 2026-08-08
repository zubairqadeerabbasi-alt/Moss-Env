import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Leaf, CheckCircle2, Phone } from 'lucide-react';
import truckImage from '../assets/images/moss_garbage_truck.png';

interface HeroProps {
  onOpenRequestModal: () => void;
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRequestModal, onOpenDemoModal }) => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden font-sans">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <img
          src={truckImage}
          alt="MOSS Eco-Friendly Garbage Truck"
          className="absolute inset-0 w-full h-full object-cover object-right lg:object-[80%_center]"
        />
        {/* Dark Gradient overlays to blend the image and keep the text readable while showing the truck */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.1),transparent_50%)] z-10" />
      </div>

      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 lg:px-12 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 backdrop-blur-md"
          >
            <Leaf className="h-3.5 w-3.5 text-emerald-400 fill-current" />
            <span className="text-emerald-300 font-semibold">Professional Environmental Solutions</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl"
          >
            Building a <br className="hidden sm:inline" />
            Clean & <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">Sustainable Future</span>
          </motion.h1>

          {/* Subdescription */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
          >
            MOSS Environment Services delivers end-to-end environmental solutions—from comprehensive waste auditing and coastal mangrove restoration to water purity testing and 24/7 HAZMAT remediation.
          </motion.p>

          {/* Quick Feature Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl text-xs sm:text-sm text-slate-300 font-medium text-left"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span>24/7 Emergency Response & Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span>Certified Environmental Manifest Auditing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span>Zero-Landfill Circular Economy Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span>Coastal Mangrove Habitat Reforestation</span>
            </div>
          </motion.div>

          {/* Primary & Secondary Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenRequestModal}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-xl shadow-emerald-700/20 hover:shadow-emerald-600/40 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
            >
              <span>Request a Service</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:text-white shadow-sm"
            >
              <div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </div>
              <span>Watch Video Overview</span>
            </button>
          </motion.div>

          {/* Emergency Phone Quick Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400 w-full"
          >
            <span className="flex items-center gap-2 font-semibold text-emerald-400">
              <Phone className="h-3.5 w-3.5 animate-bounce" /> Emergency Support:
            </span>
            <a href="tel:8006677" className="text-white hover:text-emerald-400 font-bold underline underline-offset-4 transition-colors">
              800-MOSS-UAE (+971 2 444 8900)
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-400">Fast 2-hour dispatch for industrial sites</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
