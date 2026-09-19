'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/portfolioData';
import { Project, ProjectCategory } from '@/types/portfolio';
import {
  ExternalLink,
  Github,
  Star,
  Clock,
  Code,
  Layers,
  Sparkles,
  CheckCircle2,
  FolderGit2,
  ArrowUpRight
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning & AI' },
    { id: 'web', label: 'Web & Backend' },
    { id: 'systems', label: 'Systems & Hardware' },
    { id: 'cad', label: 'Engineering CAD' },
  ];

  const projectSlugMap: Record<string, string> = {
    greensort: 'greensort-waste-classifier',
    'heart-disease': 'heart-disease-prediction',
    'e-lab': 'e-lab',
    'kuet-ece': 'kuet-ece',
    cs50x: 'cs50x',
  };

  const filteredProjects = projectsData.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-24 relative bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 size={13} className="text-cyan-400" />
            <span>Centerpiece Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Real-world systems spanning clinical ML diagnostics, university-scale digital libraries, asynchronous microservices, and microcontroller prototypes.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project: Project) => {
              const isExpanded = expandedProjectId === project.id;

              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group hover:border-cyan-500/40"
                >
                  <div>
                    {/* Top Category & Status Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                        {project.categoryLabel}
                      </span>

                      <div className="flex items-center space-x-2">
                        {project.role && (
                          <span className="inline-flex items-center space-x-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/60">
                            <Code size={11} className="text-purple-400" />
                            <span>{project.role}</span>
                          </span>
                        )}

                        {project.demoUrl && (
                          <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            <span>Live</span>
                          </span>
                        )}

                        {project.stats && (
                          <span className="inline-flex items-center space-x-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/60">
                            <Star size={11} className="fill-amber-400 text-amber-400" />
                            <span>{project.stats}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Free tier wake-up notice (Render) */}
                    {project.notice && (
                      <div className="mb-4 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300/90 text-xs flex items-start space-x-2">
                        <Clock size={14} className="shrink-0 mt-0.5" />
                        <span>{project.notice}</span>
                      </div>
                    )}

                    {/* Key Highlights Dropdown/Accordion */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-4">
                        <button
                          onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                        >
                          <Sparkles size={12} />
                          <span>{isExpanded ? 'Hide Architecture Notes' : 'View Architecture Notes'}</span>
                        </button>

                        {isExpanded && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2.5 space-y-1.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300"
                          >
                            {project.highlights.map((h, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </div>
                    )}

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800/80"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Deep Dive Link */}
                  {projectSlugMap[project.id] && (
                    <div className="mb-4">
                      <Link
                        href={`/projects/${projectSlugMap[project.id]}/`}
                        className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                        aria-label={`Read technical case study and specifications for ${project.title}`}
                      >
                        <span>Technical Case Study & Specs</span>
                        <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title} on GitHub`}
                        className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                      >
                        <Github size={14} />
                        <span>{project.role ? 'Contributed Repo' : 'Source Code'}</span>
                      </a>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live interactive demo for ${project.title}`}
                        className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-xs font-bold text-slate-950 transition-colors shadow-sm shadow-cyan-500/20"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      !project.codeUrl && (
                        <span className="text-xs text-slate-500 italic">Documentation available in repo</span>
                      )
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repositories Banner Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
              <Github size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-heading text-white">
                Looking for more technical experiments?
              </h4>
              <p className="text-sm text-slate-400 mt-0.5">
                Explore all open-source repositories, algorithm problem sets, and codebases directly on GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/KankonNil007"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-colors"
          >
            <span>Visit @KankonNil007</span>
            <ExternalLink size={15} />
          </a>
        </div>

      </div>
    </section>
  );
};
