import React from 'react';
import { Leaf, Phone, Mail, MapPin, ShieldCheck, ArrowUp, Heart } from 'lucide-react';
import cert1 from '../assets/images/certificate_1.png';
import cert2 from '../assets/images/certificate_2.png';
import cert3 from '../assets/images/certificate_3.png';
import cert4 from '../assets/images/certificate_4.png';

interface FooterProps {
  onOpenRequestModal: () => void;
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRequestModal, onOpenAuthModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800">
      
      {/* Top Footer Callout Bar */}
      <div className="border-b border-slate-800 bg-slate-900/60 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">24/7 Environmental Incident Dispatch</h4>
              <p className="text-xs text-slate-400">Rapid containment response for chemical, water, or land contamination</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:8006677"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" /> 800-MOSS-UAE
            </a>
            <button
              onClick={onOpenRequestModal}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Get Custom Quote (AED)
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: About Us */}
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-bold text-white mb-4">About Us</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              MOSS Environmental Services & Transport is a UAE-based environmental and waste management company providing reliable waste collection, transportation, disposal, and on-site environmental solutions to clients across Abu Dhabi.
            </p>
            <div className="flex flex-row flex-nowrap items-center gap-2">
              <img src={cert1} alt="ISO 9001" className="h-10 sm:h-12 w-auto object-contain" />
              <img src={cert2} alt="ISO 14001" className="h-10 sm:h-12 w-auto object-contain" />
              <img src={cert3} alt="ISO 45001" className="h-10 sm:h-12 w-auto object-contain" />
              <img src={cert4} alt="ICV" className="h-10 sm:h-12 w-auto object-contain" />
            </div>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="text-emerald-500">→</span> About Us</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="text-emerald-500">→</span> Our Services</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="text-emerald-500">→</span> Gallery</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="text-emerald-500">→</span> Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="text-emerald-500">→</span> Construction Waste Management</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="text-emerald-500">→</span> Commercial and Industrial Waste Management</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="text-emerald-500">→</span> Material Recovery and Recycling</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="text-emerald-500">→</span> Hazardous Waste Management</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span>P.O. Box 8257, Plot No: 63<br />Mussaffah Ind Area, M-33,<br />Abu Dhabi - UAE</span>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <Phone className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:sales@mossenvironment.ae" className="text-white hover:text-emerald-400 font-bold">sales@mossenvironment.ae</a>
                  <a href="tel:+971509932288" className="text-white font-bold">+971 50 9932 288</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MOSS Environment Services Abu Dhabi. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300">Terms of Service</a>
            <a href="#compliance" className="hover:text-slate-300">EAD Compliance Disclosure</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer flex items-center gap-1"
            title="Scroll to Top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
