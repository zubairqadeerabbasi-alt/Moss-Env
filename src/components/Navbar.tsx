import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X, Phone, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import logo from '../assets/images/updated_logo.png';

interface NavbarProps {
  onOpenRequestModal: (serviceId?: string) => void;
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRequestModal, onOpenAuthModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Equipments', href: '#equipments' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-emerald-100 dark:border-emerald-900/40 shadow-sm py-3'
          : 'bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-transparent text-white py-5'
      }`}
    >


      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-1">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center group cursor-pointer focus:outline-none">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/20 shadow-sm flex items-center justify-center transition-all duration-200 group-hover:scale-[1.02]">
              <img
                src={logo}
                alt="MOSS Environmental Services & Transport"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-emerald-950/20 dark:bg-slate-900/60 p-1.5 rounded-full border border-emerald-500/20 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-150 ${
                  scrolled
                    ? 'text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800'
                    : 'text-slate-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenAuthModal('login')}
              className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors cursor-pointer ${
                scrolled
                  ? 'text-slate-700 dark:text-slate-300 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-200'
              }`}
            >
              Sign In
            </button>

            <button
              onClick={() => onOpenRequestModal()}
              className="relative group inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-xl shadow-md shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Request a Service</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenRequestModal()}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg shadow cursor-pointer"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                scrolled ? 'text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-emerald-100 dark:border-slate-800 px-4 pt-4 pb-6 mt-3 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 rounded-xl hover:bg-emerald-50 dark:hover:bg-slate-900 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-emerald-600" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
                <a
                  href="tel:8006677"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-200 dark:border-emerald-800"
                >
                  <Phone className="h-3.5 w-3.5" /> 24/7 Emergency: 800-MOSS-UAE
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuthModal('login');
                    }}
                    className="py-2.5 text-center text-xs font-bold text-slate-700 dark:text-slate-200 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100"
                  >
                    Client Portal
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenRequestModal();
                    }}
                    className="py-2.5 text-center text-xs font-bold text-white bg-emerald-600 rounded-xl shadow flex items-center justify-center gap-1.5"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
