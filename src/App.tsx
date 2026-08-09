import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { EquipmentsSection } from './components/EquipmentsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

import { EnvironmentalService, ProjectCaseStudy } from './types';
import { ServiceRequestModal } from './components/ServiceRequestModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AuthModal } from './components/AuthModal';

export default function App() {
  // Modal states
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [requestInitialServiceId, setRequestInitialServiceId] = useState<string | undefined>(undefined);
  
  const [selectedServiceModal, setSelectedServiceModal] = useState<EnvironmentalService | null>(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectCaseStudy | null>(null);

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');

  // Video Demo state
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenRequestModal = (serviceId?: string) => {
    setRequestInitialServiceId(serviceId);
    setRequestModalOpen(true);
  };

  const handleOpenAuthModal = (mode: 'login' | 'signup') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenRequestModal={handleOpenRequestModal}
        onOpenAuthModal={handleOpenAuthModal}
      />

      {/* Hero Section */}
      <Hero
        onOpenRequestModal={() => handleOpenRequestModal()}
        onOpenDemoModal={() => setVideoModalOpen(true)}
      />

      {/* About Section */}
      <AboutSection />

      {/* Environmental Services Section */}
      <ServicesSection
        onSelectService={(service) => setSelectedServiceModal(service)}
        onRequestQuote={(serviceId) => handleOpenRequestModal(serviceId)}
      />

      {/* Equipments Section */}
      <EquipmentsSection
        onOpenRequestModal={() => handleOpenRequestModal()}
      />

      {/* Certifications and Registrations */}
      <CertificationsSection />

      {/* Strong Call To Action (Contact) Section */}
      <CTASection
        onOpenRequestModal={() => handleOpenRequestModal()}
      />

      {/* FAQ Accordion */}
      <FAQSection
        onOpenRequestModal={() => handleOpenRequestModal()}
      />

      {/* Footer */}
      <Footer
        onOpenRequestModal={() => handleOpenRequestModal()}
        onOpenAuthModal={handleOpenAuthModal}
      />

      {/* Interactive Modals */}
      <ServiceRequestModal
        isOpen={requestModalOpen}
        onClose={() => setRequestModalOpen(false)}
        initialServiceId={requestInitialServiceId}
      />

      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onRequestQuote={(serviceId) => handleOpenRequestModal(serviceId)}
      />

      <ProjectDetailModal
        project={selectedProjectModal}
        onClose={() => setSelectedProjectModal(null)}
        onOpenRequestModal={() => handleOpenRequestModal()}
      />

      <AuthModal
        isOpen={authModalOpen}
        mode={authModalMode}
        onClose={() => setAuthModalOpen(false)}
        onToggleMode={() => setAuthModalMode(authModalMode === 'login' ? 'signup' : 'login')}
      />

      {/* Video Overview Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-800 p-4 shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 cursor-pointer z-10"
            >
              ✕
            </button>
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden bg-slate-950">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="MOSS Environment Services Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
