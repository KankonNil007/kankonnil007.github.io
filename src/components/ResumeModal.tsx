'use client';

import React, { useState, useEffect } from 'react';
import { cvData } from '@/data/cvData';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Github,
  Linkedin,
  GraduationCap,
  Award,
  Code2,
  FolderGit2,
  Sparkles,
  Languages,
  Compass,
  FileDown
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'formatted' | 'pdf'>('formatted');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl h-[92vh] max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto cursor-default text-slate-200"
      >
        {/* Top Navigation & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-950/90 shrink-0">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <div>
              <h3 className="text-sm sm:text-base font-bold font-heading text-white tracking-tight flex items-center gap-2">
                <span>Curriculum Vitae</span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">• {cvData.name}</span>
              </h3>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
            <button
              onClick={() => setViewMode('formatted')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                viewMode === 'formatted'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText size={13} />
              <span>Structured View</span>
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                viewMode === 'pdf'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileDown size={13} />
              <span>Original PDF</span>
            </button>
          </div>

          {/* Actions & Close */}
          <div className="flex items-center space-x-2">
            <a
              href={cvData.pdfUrl}
              download={cvData.pdfFileName}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
              title="Download CV PDF"
            >
              <Download size={13} />
              <span className="hidden md:inline">Download</span>
            </a>

            <a
              href={cvData.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center space-x-1.5"
              title="Open PDF in new tab"
            >
              <ExternalLink size={14} />
              <span className="hidden md:inline">Open</span>
            </a>

            <button
              onClick={handlePrint}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center space-x-1.5"
              title="Print document"
            >
              <Printer size={14} />
              <span className="hidden md:inline">Print</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        {viewMode === 'pdf' ? (
          <div className="flex-1 w-full h-full bg-slate-950 flex flex-col p-2 sm:p-4 overflow-hidden">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-400 px-2 font-mono">
              <span>Official 1-page document ({cvData.pdfFileName})</span>
              <a
                href={cvData.pdfUrl}
                download={cvData.pdfFileName}
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <Download size={12} /> Direct Download
              </a>
            </div>
            <div className="flex-1 w-full rounded-xl overflow-hidden border border-slate-800 bg-white">
              <iframe
                src={`${cvData.pdfUrl}#toolbar=0&navpanes=0`}
                title="Kankon Mondal CV"
                className="w-full h-full min-h-[500px] border-0"
              />
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-slate-200 font-sans text-xs sm:text-sm print:p-0 print:bg-white print:text-black">
            {/* CV Header */}
            <div className="border-b border-slate-800 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight uppercase">
                  {cvData.name}
                </h1>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
                  {cvData.field}
                </span>
              </div>

              <div className="text-sm text-slate-300 font-medium mt-1">
                {cvData.institution}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs text-slate-400 font-mono">
                <span className="flex items-center space-x-1.5">
                  <MapPin size={13} className="text-cyan-400" />
                  <span>{cvData.location}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Mail size={13} className="text-cyan-400" />
                  <a href={`mailto:${cvData.email}`} className="hover:text-cyan-300 transition-colors">
                    {cvData.email}
                  </a>
                </span>
                <span className="flex items-center space-x-1.5">
                  <GlobeIcon size={13} className="text-cyan-400" />
                  <a href={cvData.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                    {cvData.website}
                  </a>
                </span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
                <Sparkles size={14} />
                <span>Summary</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                {cvData.summary}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
                <GraduationCap size={15} />
                <span>Education</span>
              </h2>
              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 font-semibold text-white">
                  <span className="text-sm">{cvData.education.degree}</span>
                  <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40 w-fit">
                    {cvData.education.period}
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {cvData.education.institution}
                </div>
                <div className="text-xs text-slate-400 pt-1">
                  • {cvData.education.coursework}
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
                <FolderGit2 size={15} />
                <span>Projects</span>
              </h2>
              <div className="space-y-3">
                {cvData.projects.map((proj) => (
                  <div
                    key={proj.title}
                    className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 font-semibold text-white">
                      <span className="text-sm text-cyan-200">{proj.title}</span>
                      <span className="font-mono text-xs text-slate-400">{proj.period}</span>
                    </div>

                    <div className="text-xs text-cyan-400 font-mono">
                      {proj.tech.join(' · ')}
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 leading-relaxed">
                      {proj.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
                <Code2 size={15} />
                <span>Skills</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {cvData.skillGroups.map((grp) => (
                  <div
                    key={grp.group}
                    className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-1"
                  >
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {grp.group}
                    </div>
                    <div className="text-xs font-semibold text-slate-200">
                      {grp.skills.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses & Certifications */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
                <Award size={15} />
                <span>Courses & Certifications</span>
              </h2>
              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-2">
                {cvData.certifications.map((cert) => (
                  <div key={cert.title} className="text-xs text-slate-300 flex items-start space-x-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <div>
                      <span className="font-semibold text-white">{cert.title}</span> by{' '}
                      <span className="text-slate-400 italic">{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Interests */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
                <Compass size={15} />
                <span>Research Interests</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {cvData.researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-medium text-slate-200 hover:border-cyan-500/40 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
                <Languages size={15} />
                <span>Additional Information</span>
              </h2>
              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-300">
                <span className="font-semibold text-white">Languages: </span>
                <span>{cvData.languages.join(', ')}.</span>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                Links & Verification
              </h2>
              <div className="flex flex-wrap gap-4 text-xs font-mono">
                {cvData.links.map((lnk) => (
                  <a
                    key={lnk.label}
                    href={lnk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    {lnk.label === 'GitHub' && <Github size={13} />}
                    {lnk.label === 'LinkedIn' && <Linkedin size={13} />}
                    {lnk.label === 'Portfolio' && <ExternalLink size={13} />}
                    <span>{lnk.label}: {lnk.url.replace(/^https?:\/\//, '')}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3.5 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Official 1-Page CV • {cvData.pdfFileName} (65 KB)
          </span>

          <div className="flex items-center space-x-2">
            <a
              href={cvData.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
            >
              <ExternalLink size={14} />
              <span>Open in New Tab</span>
            </a>
            <a
              href={cvData.pdfUrl}
              download={cvData.pdfFileName}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function GlobeIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
