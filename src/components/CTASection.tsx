import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onOpenRequestModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    clientType: '',
    lookingFor: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 dark:bg-slate-950 relative font-sans overflow-hidden border-t border-slate-800">
      {/* Background glow effects to match dark theme */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact info & Map */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* 2x2 Grid of info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Landline */}
              <div className="p-6 rounded-2xl bg-slate-950/40 dark:bg-slate-950/40 border border-slate-800 shadow-lg flex flex-col gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-950/50 text-emerald-400 flex items-center justify-center border border-emerald-900/30">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-sans">Landline</span>
                  <a href="tel:+97128823595" className="text-base font-bold text-slate-100 hover:text-emerald-400 transition-colors mt-1 block">
                    +971 2 882 3595
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-2xl bg-slate-950/40 dark:bg-slate-950/40 border border-slate-800 shadow-lg flex flex-col gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-950/50 text-emerald-400 flex items-center justify-center border border-emerald-900/30">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-sans">Email</span>
                  <a href="mailto:info@mossenv.com" className="text-base font-bold text-slate-100 hover:text-emerald-400 transition-colors mt-1 block">
                    info@mossenv.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="p-6 rounded-2xl bg-slate-950/40 dark:bg-slate-950/40 border border-slate-800 shadow-lg flex flex-col gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-950/50 text-emerald-400 flex items-center justify-center border border-emerald-900/30">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-sans">Address</span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1 leading-relaxed">
                    Mussafah M-37, Street 3, Abu Dhabi, United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 rounded-2xl bg-slate-950/40 dark:bg-slate-950/40 border border-slate-800 shadow-lg flex flex-col gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-950/50 text-emerald-400 flex items-center justify-center border border-emerald-900/30">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-sans">Business Hours</span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1 leading-relaxed">
                    Monday – Saturday · 8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Support Banner */}
            <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-lg flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 animate-pulse border border-emerald-500/20">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-white">
                  Emergency Support · 24/7
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Urgent spill, blockage or collection issue? Call us at any hour.
                </p>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="w-full h-[280px] rounded-2xl overflow-hidden border border-slate-800 shadow-lg bg-slate-950">
              <iframe
                title="MOSS Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.3411082534573!2d54.49479361500366!3d24.37812598428456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41df2e6d628f%3A0xd68d57dc4b85c13e!2sM-37%2C%20Mussafah%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1628531933037!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Quotation Form */}
          <div className="lg:col-span-6 bg-slate-950/40 dark:bg-slate-950/40 rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                    Live Quote
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Request a free quotation
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-colors placeholder-slate-500"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-colors placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-colors placeholder-slate-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-colors placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Client Type */}
                  <div>
                    <select
                      value={formData.clientType}
                      onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                    >
                      <option value="">I am a...</option>
                      <option value="Commercial">Commercial Client</option>
                      <option value="Municipal">Municipal / Gov Client</option>
                      <option value="Industrial">Industrial Client</option>
                      <option value="Residential">Residential Client</option>
                    </select>
                  </div>

                  {/* Looking For */}
                  <div>
                    <select
                      value={formData.lookingFor}
                      onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                    >
                      <option value="">Looking for...</option>
                      <option value="Waste Collection">Waste Collection</option>
                      <option value="Waste Transportation">Waste Transportation</option>
                      <option value="Industrial Cleaning">Industrial Cleaning</option>
                      <option value="Building Cleaning">Building Cleaning</option>
                      <option value="Specialized Cleaning">Specialized Cleaning</option>
                      <option value="Waste Disposal">Waste Disposal</option>
                      <option value="Waste Segregation">Waste Segregation</option>
                      <option value="Hazardous Waste Handling">Hazardous Waste Handling</option>
                      <option value="Environmental Management">Environmental Management</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your site, volumes or schedule"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-colors resize-none placeholder-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Submit Request</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-emerald-950/60 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-800">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-extrabold text-white">Request Submitted!</h4>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Thank you, <span className="font-bold text-white">{formData.fullName}</span>. We have received your quotation request for <span className="font-bold text-emerald-400">{formData.lookingFor || 'our services'}</span> and will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      company: '',
                      phone: '',
                      email: '',
                      clientType: '',
                      lookingFor: '',
                      message: ''
                    });
                  }}
                  className="mt-6 text-xs sm:text-sm font-bold text-emerald-400 hover:underline cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
