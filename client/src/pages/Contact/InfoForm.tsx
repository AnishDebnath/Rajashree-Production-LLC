import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Mail, Phone, Send } from 'lucide-react';

interface InfoFormProps {
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  prepopulatedContext?: string;
  onClearContext?: () => void;
  onCollaborateWithContext?: (projectName: string) => void;
}

export default function InfoForm({ onShowMessage, prepopulatedContext, onClearContext, onCollaborateWithContext }: InfoFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill message field if navigating with a collaboration context from another page
  useEffect(() => {
    if (prepopulatedContext) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi Rajashree Production LLP, I'm interested in collaborating on the project: "${prepopulatedContext}". Let's discuss details!`
      }));
      if (onClearContext) {
        onClearContext();
      }
    }
  }, [prepopulatedContext, onClearContext]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowMessage('Please fill in all required fields (Name, Email, Message)', 'info');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      onShowMessage(`Thank you, ${formData.name}! Your message was sent successfully. Our production crew will reach out shortly.`, 'success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      className="relative py-24 md:py-36 z-20 px-6 md:px-12"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #100e07 50%, #030303 100%)'
      }}
      id="contact-form-section"
    >
      {/* Seamless Blend Transition at top */}
      <div className="absolute top-0 left-0 right-0 h-48 -translate-y-full pointer-events-none z-10 overflow-hidden">
        <div className="w-full h-full absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/85 to-transparent" />
        <div
          className="w-full h-32 absolute bottom-0 backdrop-blur-xs"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 relative z-10">

        {/* Left Column: Visit Us */}
        <div className="md:col-span-5 space-y-10">
          <div className="space-y-4">
            <h2 className="font-sans font-bold text-2xl text-white tracking-tight">Visit us</h2>
            <div className="h-0.5 w-12 bg-gold" />
          </div>

          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-gold group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-all duration-300 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] font-bold tracking-widest text-neutral-500 uppercase block">Office Location</span>
                <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Goregaon East, Mumbai, Maharashtra, India
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-gold group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-all duration-300 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] font-bold tracking-widest text-neutral-500 uppercase block">Working Hours</span>
                <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Monday - Friday, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-gold group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-all duration-300 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] font-bold tracking-widest text-neutral-500 uppercase block">Email Address</span>
                <a href="mailto:info@rajashreeproductions.com" className="font-sans text-xs sm:text-sm text-neutral-300 hover:text-gold leading-relaxed transition-colors font-normal block">
                  info@rajashreeproductions.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-gold group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-all duration-300 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] font-bold tracking-widest text-neutral-500 uppercase block">Phone Hotline</span>
                <a href="tel:1234567890" className="font-sans text-xs sm:text-sm text-neutral-300 hover:text-gold leading-relaxed transition-colors font-normal block">
                  +91 (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="font-sans font-bold text-2xl text-white tracking-tight">Question? Send us a message. Don't be shy</h2>
            <div className="h-0.5 w-12 bg-gold" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name field */}
            <div className="space-y-1.5">
              <label className="font-sans text-[9px] font-bold tracking-widest text-neutral-400 uppercase">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Jane Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#111] border border-white/5 focus:border-gold/30 focus:bg-neutral-900/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-all placeholder:text-neutral-600"
              />
            </div>

            {/* Email & Phone fields in grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="font-sans text-[9px] font-bold tracking-widest text-neutral-400 uppercase">Your Email *</label>
                <input
                  type="email"
                  required
                  placeholder="jane@framer.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#111] border border-white/5 focus:border-gold/30 focus:bg-neutral-900/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-all placeholder:text-neutral-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-sans text-[9px] font-bold tracking-widest text-neutral-400 uppercase">Your Phone</label>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#111] border border-white/5 focus:border-gold/30 focus:bg-neutral-900/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-all placeholder:text-neutral-600"
                />
              </div>
            </div>

            {/* Message field */}
            <div className="space-y-1.5">
              <label className="font-sans text-[9px] font-bold tracking-widest text-neutral-400 uppercase">Your Message *</label>
              <textarea
                required
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#111] border border-white/5 focus:border-gold/30 focus:bg-neutral-900/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-all resize-none placeholder:text-neutral-600"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-accent-red hover:bg-[#ff3b3b] text-white font-sans font-bold text-[10px] tracking-widest uppercase cursor-pointer select-none overflow-hidden transition-all duration-300 shadow-[0_12px_40px_rgba(214,40,40,0.25)] hover:shadow-[0_16px_50px_rgba(214,40,40,0.45)] hover:-translate-y-0.5 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              {isSubmitting ? (
                <>
                  Sending message...
                </>
              ) : (
                <>
                  Submit
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}