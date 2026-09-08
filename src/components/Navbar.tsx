'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/portfolioData';
import { Menu, X, FileText, Send, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060911]/90 backdrop-blur-md border-b border-slate-800/60 py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#home"
            className="group flex items-center space-x-2 text-lg sm:text-xl font-bold font-heading tracking-tight text-white hover:text-cyan-400 transition-colors"
          >
            <span className="font-mono text-cyan-400">&lt;</span>
            <span>{personalInfo.name}</span>
            <span className="font-mono text-cyan-400">/&gt;</span>
            <span className="circuit-dot" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/60 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-200 hover:text-white transition-all duration-200"
              >
                <FileText size={14} className="text-cyan-400" />
                <span>Resume</span>
              </button>
            )}
            <Link
              href="#contact"
              className="flex items-center space-x-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200"
            >
              <Send size={13} />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200"
                aria-label="View Resume"
              >
                <FileText size={15} className="text-cyan-400" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#080d1a]/95 backdrop-blur-xl border-b border-slate-800/80 px-5 py-6 shadow-2xl shadow-black animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={14} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-800 flex items-center space-x-3">
              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 text-xs font-semibold rounded-lg bg-slate-800 border border-slate-700 text-slate-200"
                >
                  <FileText size={14} className="text-cyan-400" />
                  <span>Resume</span>
                </button>
              )}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950 font-bold"
              >
                <Send size={14} />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
