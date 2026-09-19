'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { educationData, certificationsData } from '@/data/portfolioData';
import { Certification } from '@/types/portfolio';
import {
  GraduationCap,
  Award,
  ExternalLink,
  CheckCircle2,
  Calendar,
  MapPin,
  X,
  BookOpen
} from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCert(null);
      }
    };
    if (activeCert) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCert]);

  return (
    <section id="education" className="py-24 relative bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap size={13} className="text-cyan-400" />
            <span>Academic & Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Formal engineering degree progression at KUET alongside verified technical credentials from Stanford Online, DeepLearning.AI, Harvard, IBM, and the University of Michigan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h3 className="text-xl font-bold font-heading text-white flex items-center space-x-2.5">
              <GraduationCap className="text-cyan-400" size={22} />
              <span>University Degree</span>
            </h3>

            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden border-cyan-500/30"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/50">
                    {edu.period}
                  </span>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                    <MapPin size={13} className="text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white font-heading leading-snug">
                  {edu.degree}
                </h4>
                <div className="text-sm font-semibold text-cyan-300 mt-1">
                  {edu.institution}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Relevant Coursework */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-1.5">
                    <BookOpen size={13} className="text-cyan-400" />
                    <span>Completed & Core Coursework:</span>
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Academic Ambitions Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800">
              <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1.5">
                Research & Graduate Ambitions
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Actively preparing for European graduate research fellowships (DAAD Germany, Erasmus Mundus joint master degrees) in Signal Processing, Embedded Systems, and Applied AI.
              </p>
            </div>
          </div>

          {/* Right Column: Verified Certifications Showcase */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h3 className="text-xl font-bold font-heading text-white flex items-center space-x-2.5">
              <Award className="text-emerald-400" size={22} />
              <span>Verified International Credentials</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40"
                >
                  <div>
                    {/* Certificate Thumbnail */}
                    <div
                      onClick={() => setActiveCert(cert)}
                      className="relative w-full h-36 bg-slate-950 overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover object-top filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      
                      <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 border border-slate-800 backdrop-blur-md">
                        Click to Preview
                      </span>
                    </div>

                    {/* Cert Info */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                        <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>

                      <h4 className="text-sm font-bold text-white font-heading group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2">
                        {cert.title}
                      </h4>

                      <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                        {cert.summary}
                      </p>
                    </div>
                  </div>

                  {/* Verification CTA */}
                  <div className="px-4 sm:px-5 pb-4 pt-0">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-emerald-300 border border-slate-700 transition-colors"
                    >
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      <span>Verify Credential</span>
                      <ExternalLink size={12} className="ml-1 text-slate-400" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Certificate Modal Lightbox */}
        {activeCert && (
          <div 
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-5 sm:p-7 cursor-default my-auto"
            >
              
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCert(null);
                }}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>

              <h4 className="text-lg font-bold text-white font-heading pr-8 mb-1">
                {activeCert.title}
              </h4>
              <p className="text-xs text-cyan-400 font-mono mb-4">
                {activeCert.issuer} • Issued {activeCert.date}
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black border border-slate-800 mb-5">
                <Image
                  src={activeCert.image}
                  alt={activeCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400 font-mono">
                  {activeCert.credentialId ? `Credential ID: ${activeCert.credentialId}` : 'Verified Academic Certificate'}
                </span>
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md"
                >
                  <CheckCircle2 size={14} />
                  <span>Verify on Official Portal</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
