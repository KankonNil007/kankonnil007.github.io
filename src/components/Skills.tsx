'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolioData';
import {
  Code,
  Brain,
  Globe,
  Microchip,
  Compass,
  Wrench,
  Terminal,
  Cpu,
  Binary,
  FileCode2,
  FileCode,
  Database,
  Bot,
  Table,
  Calculator,
  BarChart3,
  Network,
  ScanEye,
  Share2,
  BookOpen,
  Zap,
  Boxes,
  Atom,
  Palette,
  Layout,
  Workflow,
  Activity,
  CircuitBoard,
  Box,
  Layers,
  FileCheck,
  GitBranch,
  Code2,
  FileText
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getSkillIcon = (iconName: string) => {
    const map: Record<string, React.ReactNode> = {
      Code: <Code size={18} />,
      Brain: <Brain size={18} />,
      Globe: <Globe size={18} />,
      Microchip: <Microchip size={18} />,
      Compass: <Compass size={18} />,
      Wrench: <Wrench size={18} />,
      Terminal: <Terminal size={16} />,
      Cpu: <Cpu size={16} />,
      Binary: <Binary size={16} />,
      FileCode2: <FileCode2 size={16} />,
      FileCode: <FileCode size={16} />,
      Database: <Database size={16} />,
      Bot: <Bot size={16} />,
      Table: <Table size={16} />,
      Calculator: <Calculator size={16} />,
      BarChart3: <BarChart3 size={16} />,
      Network: <Network size={16} />,
      ScanEye: <ScanEye size={16} />,
      Share2: <Share2 size={16} />,
      BookOpen: <BookOpen size={16} />,
      Zap: <Zap size={16} />,
      Boxes: <Boxes size={16} />,
      Atom: <Atom size={16} />,
      Palette: <Palette size={16} />,
      Layout: <Layout size={16} />,
      Workflow: <Workflow size={16} />,
      Activity: <Activity size={16} />,
      CircuitBoard: <CircuitBoard size={16} />,
      Box: <Box size={16} />,
      Layers: <Layers size={16} />,
      FileCheck: <FileCheck size={16} />,
      GitBranch: <GitBranch size={16} />,
      Code2: <Code2 size={16} />,
      FileText: <FileText size={16} />
    };

    return map[iconName] || <Code size={16} />;
  };

  const getProficiencyBadge = (tier: string) => {
    switch (tier) {
      case 'Core':
        return (
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
            Core Proficient
          </span>
        );
      case 'Advanced':
        return (
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
            Advanced Dev
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
            Applied ECE
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-[#060911] via-[#080d1a] to-[#060911] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu size={13} className="text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Engineering Skill Set
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Structured competencies categorized across physical electronics, mathematical machine learning, and production software development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                      {getSkillIcon(category.iconName)}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {category.title}
                    </h3>
                  </div>
                  {getProficiencyBadge(category.proficiency)}
                </div>

                {/* Skills Badges Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-colors"
                    >
                      <div className="text-cyan-400 shrink-0">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <span className="text-xs font-medium text-slate-200 truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{category.skills.length} competencies</span>
                <span className="text-cyan-400/80 group-hover:translate-x-1 transition-transform">active workflow &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
