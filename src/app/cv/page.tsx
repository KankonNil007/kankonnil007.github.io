import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { cvData } from '@/data/cvData';
import {
  Download,
  ExternalLink,
  ArrowLeft,
  GraduationCap,
  Sparkles,
  FolderGit2,
  Code2,
  Award,
  Compass,
  Languages,
  Mail,
  MapPin,
  Github,
  Linkedin
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Curriculum Vitae | ${cvData.name}`,
  description: `Official Curriculum Vitae of ${cvData.name} - Electronics & Communication Engineering undergraduate at KUET. Interests in Machine Learning, Deep Learning, and Computer Vision.`,
  openGraph: {
    title: `Curriculum Vitae | ${cvData.name}`,
    description: `Official Curriculum Vitae of ${cvData.name} - KUET ECE. Machine Learning, Computer Vision & Data Science.`,
    url: 'https://kankon.dev/cv/',
  }
};

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[#060911] text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation / Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center space-x-3">
            <a
              href={cvData.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              <ExternalLink size={14} />
              <span>Open PDF</span>
            </a>
            <a
              href={cvData.pdfUrl}
              download={cvData.pdfFileName}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
            >
              <Download size={14} />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                {cvData.name}
              </h1>
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
                {cvData.field}
              </span>
            </div>

            <div className="text-sm text-slate-300 font-medium mt-1.5">
              {cvData.institution}
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-xs text-slate-400 font-mono">
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
                <Github size={13} className="text-cyan-400" />
                <a href={cvData.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                  github.com/KankonNil007
                </a>
              </span>
              <span className="flex items-center space-x-1.5">
                <Linkedin size={13} className="text-cyan-400" />
                <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                  linkedin.com/in/kankon-mondal
                </a>
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
              <Sparkles size={14} />
              <span>Summary</span>
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
              {cvData.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
              <GraduationCap size={15} />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 font-semibold text-white">
                <span className="text-base">{cvData.education.degree}</span>
                <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 px-3 py-0.5 rounded-full border border-cyan-800/40 w-fit">
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
                    <span className="text-sm sm:text-base text-cyan-200">{proj.title}</span>
                    <span className="font-mono text-xs text-slate-400">{proj.period}</span>
                  </div>

                  <div className="text-xs text-cyan-400 font-mono">
                    {proj.tech.join(' · ')}
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {proj.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
              <Code2 size={15} />
              <span>Skills</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cvData.skillGroups.map((grp) => (
                <div
                  key={grp.group}
                  className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-1"
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
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
              <Award size={15} />
              <span>Courses & Certifications</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-2.5">
              {cvData.certifications.map((cert) => (
                <div key={cert.title} className="text-xs sm:text-sm text-slate-300 flex items-start space-x-2">
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
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
              <Compass size={15} />
              <span>Research Interests</span>
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {cvData.researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-medium text-slate-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center space-x-2">
              <Languages size={15} />
              <span>Additional Information</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-white">Languages: </span>
              <span>{cvData.languages.join(', ')}.</span>
            </div>
          </div>

          {/* Direct PDF Viewer Embedded */}
          <div className="pt-6 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                Original 1-Page Document Preview
              </h2>
              <a
                href={cvData.pdfUrl}
                download={cvData.pdfFileName}
                className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-mono"
              >
                <Download size={12} /> Download PDF (65 KB)
              </a>
            </div>
            <div className="w-full h-[700px] rounded-2xl overflow-hidden border border-slate-800 bg-white">
              <iframe
                src={`${cvData.pdfUrl}#toolbar=0`}
                title="Kankon Mondal Curriculum Vitae PDF"
                className="w-full h-full border-0"
              />
            </div>
          </div>

        </div>

        {/* Bottom CTA Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-white">Need a verified offline copy?</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Download the 1-page PDF formatted for academic & graduate research applications.
            </p>
          </div>
          <a
            href={cvData.pdfUrl}
            download={cvData.pdfFileName}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all shrink-0"
          >
            <Download size={15} />
            <span>Download Official CV (PDF)</span>
          </a>
        </div>

      </div>
    </main>
  );
}
