'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, defaultStats } from '@/data/portfolioData';
import {
  Cpu,
  GitBranch,
  Star,
  GraduationCap,
  Brain,
  Globe,
  Compass,
  Sparkles,
  Film,
  Code2,
  Trophy,
  ArrowUpRight,
  BookOpen
} from 'lucide-react';

export const About: React.FC = () => {
  const getFocusIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu size={22} className="text-cyan-400" />;
      case 'Brain':
        return <Brain size={22} className="text-emerald-400" />;
      case 'Globe':
        return <Globe size={22} className="text-sky-400" />;
      case 'Compass':
        return <Compass size={22} className="text-indigo-400" />;
      default:
        return <BookOpen size={22} className="text-cyan-400" />;
    }
  };

  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={16} className="text-yellow-400" />;
      case 'Film':
        return <Film size={16} className="text-purple-400" />;
      case 'Code2':
        return <Code2 size={16} className="text-cyan-400" />;
      case 'Trophy':
        return <Trophy size={16} className="text-amber-400" />;
      default:
        return <BookOpen size={16} className="text-slate-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative border-t border-slate-900 bg-gradient-to-b from-[#060911] via-[#080d1a] to-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Identity & Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Bridging theoretical electronics and signal dynamics with high-performance software and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
              
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-4 flex items-center space-x-2">
                <span>The Engineering Philosophy</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Focus Points Pill List */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Technical Tenets:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span>Hardware-Software Synergy</span>
                  </div>
                  <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>Mathematical ML Foundations</span>
                  </div>
                  <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                    <span>Asynchronous Architecture</span>
                  </div>
                  <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                    <span>European Research Aspirations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Activities & Recharging / Hobbies */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                <span>Personal Interests & Recharge</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {personalInfo.hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-colors text-center"
                  >
                    <div className="p-2 rounded-lg bg-slate-800/80 mb-2">
                      {getHobbyIcon(hobby.icon)}
                    </div>
                    <span className="text-xs font-medium text-slate-300">{hobby.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Stats & Focus Domains */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5 flex flex-col justify-between">
                <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 w-fit mb-3 border border-cyan-800/40">
                  <Cpu size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">ECE</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Undergraduate Major</div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 flex flex-col justify-between">
                <div className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 w-fit mb-3 border border-emerald-800/40">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">KUET</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Khulna, Bangladesh</div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 flex flex-col justify-between">
                <div className="p-2.5 rounded-xl bg-sky-950/80 text-sky-400 w-fit mb-3 border border-sky-800/40">
                  <GitBranch size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">15+</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Public Repositories</div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 flex flex-col justify-between">
                <div className="p-2.5 rounded-xl bg-amber-950/80 text-amber-400 w-fit mb-3 border border-amber-800/40">
                  <Star size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">36+</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">GitHub Stars</div>
                </div>
              </div>
            </div>

            {/* Focus Areas List */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">
                What I Build & Explore
              </h4>
              <div className="space-y-3.5">
                {personalInfo.focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-slate-800/80 shrink-0 mt-0.5">
                        {getFocusIcon(area.icon)}
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-100">{area.title}</h5>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
