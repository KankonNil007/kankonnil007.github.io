'use client';

import React from 'react';
import Link from 'next/link';
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { Github, Linkedin, Facebook, Mail, MapPin, GraduationCap, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github size={16} />;
      case 'linkedin':
        return <Linkedin size={16} />;
      case 'facebook':
        return <Facebook size={16} />;
      case 'mail':
        return <Mail size={16} />;
      default:
        return <Mail size={16} />;
    }
  };

  return (
    <footer className="relative bg-[#04060b] border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="#home"
              className="inline-flex items-center space-x-2 text-xl font-bold font-heading tracking-tight text-white hover:text-cyan-400 transition-colors"
            >
              <span className="font-mono text-cyan-400">&lt;</span>
              <span>{personalInfo.name}</span>
              <span className="font-mono text-cyan-400">/&gt;</span>
              <span className="circuit-dot" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Electronics & Communication Engineering undergraduate at KUET dedicated to intelligent signal processing, open-source development, and research innovation.
            </p>

            <div className="flex items-center space-x-2.5 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${personalInfo.name} on ${s.platform}`}
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800/80 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all duration-200"
                >
                  {getSocialIcon(s.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-cyan-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-400 transition-colors">
                  Engineering Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-cyan-400 transition-colors">
                  Technical Stack
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-cyan-400 transition-colors">
                  Education & Credentials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact & Collaborate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Direct Inquiries
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center space-x-2.5">
                <Mail size={14} className="text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <MapPin size={14} className="text-emerald-400 shrink-0" />
                <span className="text-slate-400">{personalInfo.location}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <GraduationCap size={14} className="text-sky-400 shrink-0" />
                <span className="text-slate-400">{personalInfo.university}</span>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div suppressHydrationWarning>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Built with Next.js 16, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
