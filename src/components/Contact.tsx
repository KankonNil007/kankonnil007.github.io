'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks, faqsData } from '@/data/portfolioData';
import {
  Mail,
  MapPin,
  GraduationCap,
  Send,
  Github,
  Linkedin,
  Facebook,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/kankonmondal89@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage(`Thank you, ${formData.name}! Your message has been sent successfully. I will get back to you shortly.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      // Graceful fallback to mailto
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setStatus('success');
      setStatusMessage(`Opening your email client to dispatch the message directly to ${personalInfo.email}... Thank you, ${formData.name}!`);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#060911] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare size={13} className="text-cyan-400" />
            <span>Open Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Let&apos;s Collaborate & Connect
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Have a project, research inquiry, or open-source idea? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Connection Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7">
              <h3 className="text-xl font-bold font-heading text-white mb-3">
                Get In Touch
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                I am actively seeking research collaborations in Signal Processing, Analog Electronics, and Machine Learning, as well as software development discussions and open-source contributions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm">
                  <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Direct Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm">
                  <div className="p-2.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Location</div>
                    <div className="text-sm font-semibold text-white">Khulna, Bangladesh</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm">
                  <div className="p-2.5 rounded-lg bg-purple-950/80 text-purple-400 border border-purple-800/40">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Academic Institution</div>
                    <div className="text-sm font-semibold text-white">KUET, ECE Department</div>
                  </div>
                </div>
              </div>

              {/* Direct Profile Grid */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Developer & Social Networks:
                </h4>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="https://github.com/KankonNil007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-200 transition-colors"
                  >
                    <Github size={15} className="text-cyan-400" />
                    <span>GitHub</span>
                    <ExternalLink size={11} className="ml-auto text-slate-500" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kankon-mondal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-200 transition-colors"
                  >
                    <Linkedin size={15} className="text-sky-400" />
                    <span>LinkedIn</span>
                    <ExternalLink size={11} className="ml-auto text-slate-500" />
                  </a>

                  <a
                    href="https://facebook.com/KankonNil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-200 transition-colors"
                  >
                    <Facebook size={15} className="text-blue-400" />
                    <span>Facebook</span>
                    <ExternalLink size={11} className="ml-auto text-slate-500" />
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-200 transition-colors"
                  >
                    <Mail size={15} className="text-emerald-400" />
                    <span>Email App</span>
                    <ExternalLink size={11} className="ml-auto text-slate-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Collaboration FAQ */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                <HelpCircle size={15} className="text-cyan-400" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-2.5">
                {faqsData.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl bg-slate-900/60 border border-slate-800/80 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left p-3 flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={14}
                          className={`text-slate-400 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-cyan-400' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-3 pb-3 text-xs text-slate-400 leading-relaxed border-t border-slate-800/50 pt-2">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below and it will be routed directly to my inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 text-sm text-white placeholder-slate-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 text-sm text-white placeholder-slate-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Research Collaboration / ML Project / General Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 text-sm text-white placeholder-slate-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message, project idea, or academic discussion here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 text-sm text-white placeholder-slate-600 outline-none transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                  <span>{status === 'loading' ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>

                {/* Status Feedback Banners */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs flex items-start space-x-2.5"
                  >
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-red-950/80 border border-red-800/60 text-red-300 text-xs flex items-start space-x-2.5"
                  >
                    <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
