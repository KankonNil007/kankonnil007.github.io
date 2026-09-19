'use client';

import React from 'react';
import { personalInfo, educationData, certificationsData, skillCategories, projectsData } from '@/data/portfolioData';
import {
  X,
  Download,
  Printer,
  Mail,
  MapPin,
  Github,
  Linkedin,
  GraduationCap,
  Award,
  Code,
  FolderGit2
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[88vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto cursor-default"
      >
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-base font-bold font-heading text-white">
              Curriculum Vitae • {personalInfo.name}
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 font-sans text-xs sm:text-sm print:p-0 print:bg-white print:text-black">
          
          {/* CV Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm text-cyan-400 font-mono mt-0.5">
              {personalInfo.role} • {personalInfo.university}
            </p>

            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5">
                <Mail size={13} className="text-cyan-400" />
                <span>{personalInfo.email}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <MapPin size={13} className="text-cyan-400" />
                <span>{personalInfo.location}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Github size={13} className="text-cyan-400" />
                <span>github.com/{personalInfo.githubUsername}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Linkedin size={13} className="text-cyan-400" />
                <span>linkedin.com/in/kankon-mondal</span>
              </span>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2 mb-3">
              <GraduationCap size={16} />
              <span>Education</span>
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between font-semibold text-white">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-xs text-slate-400">{edu.period}</span>
                </div>
                <div className="text-xs text-cyan-300">{edu.institution}</div>
                <p className="text-xs text-slate-400 pt-1">{edu.description}</p>
                <div className="text-[11px] text-slate-400 pt-1">
                  <span className="font-semibold text-slate-300">Coursework: </span>
                  {edu.courses.join(' • ')}
                </div>
              </div>
            ))}
          </div>

          {/* Core Technical Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2 mb-3">
              <Code size={16} />
              <span>Technical Skills</span>
            </h2>
            <div className="space-y-2 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.title}>
                  <span className="font-semibold text-slate-200">{cat.title}: </span>
                  <span className="text-slate-400">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2 mb-3">
              <FolderGit2 size={16} />
              <span>Selected Key Projects</span>
            </h2>
            <div className="space-y-3">
              {projectsData.filter((p) => p.featured).map((p) => (
                <div key={p.id} className="space-y-0.5">
                  <div className="flex justify-between font-semibold text-white">
                    <span>{p.title}</span>
                    <span className="font-mono text-[11px] text-cyan-400">{p.categoryLabel}</span>
                  </div>
                  <p className="text-xs text-slate-400">{p.shortDescription}</p>
                  <div className="text-[11px] font-mono text-slate-500">
                    Technologies: {p.tags.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2 mb-3">
              <Award size={16} />
              <span>Verified Certifications</span>
            </h2>
            <div className="space-y-2 text-xs">
              {certificationsData.map((c) => (
                <div key={c.id} className="flex justify-between">
                  <div>
                    <span className="font-semibold text-slate-200">{c.title}</span> —{' '}
                    <span className="text-slate-400">{c.issuer}</span>
                  </div>
                  <span className="font-mono text-slate-400 shrink-0 ml-2">{c.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-500">
            Document updated for 2026 academic & research applications
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
          >
            <Download size={14} />
            <span>Download PDF / Print</span>
          </button>
        </div>

      </div>
    </div>
  );
};
