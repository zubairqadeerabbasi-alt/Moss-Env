import React from 'react';
import { Leaf, Phone, Mail, MapPin, ShieldCheck, ArrowUp, Heart } from 'lucide-react';
import logo from '../assets/images/logo.png';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <a href="#home" className="flex items-center group cursor-pointer focus:outline-none">
              <div className="flex items-center justify-center transition-all duration-200 group-hover:scale-[1.02]">
                <img
                  src={logo}
                  alt="MOSS Environmental Services & Transport"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </a>

            <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-sm">
              MOSS Environment Services is an accredited provider of commercial waste auditing, coastal mangrove ecosystem restoration, air and water monitoring, and EAD / Tadweer regulatory compliance across Abu Dhabi and the UAE.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                EAD Accredited
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                Tadweer Approved
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                ISO 14001
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services Offered
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Tadweer Waste Auditing</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Zero-Landfill Recycling</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Mangrove & Ecosystem Restoration</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">EAD Water & Air Quality Testing</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Estidama Solar Microgrids</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">HAZMAT Emergency Response</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company Overview
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose MOSS</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Case Studies & Projects</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</a></li>
              <li><button onClick={() => onOpenAuthModal('login')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">Client Portal Login</button></li>
            </ul>
          </div>

          {/* Col 4: Contact HQ */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Abu Dhabi HQ & Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Sheikh Zayed Bin Sultan Street, Al Danah<br />Abu Dhabi, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:8006677" className="hover:text-white">800-MOSS-UAE (+971 2 444 8900)</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:abudhabi@mossenvironment.ae" className="hover:text-white">abudhabi@mossenvironment.ae</a>
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
