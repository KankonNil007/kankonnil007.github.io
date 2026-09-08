'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { exploringTopics } from '@/data/portfolioData';
import { Rocket, Brain, Boxes, Activity, Cpu } from 'lucide-react';

export const CurrentlyExploring: React.FC = () => {
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain size={22} className="text-cyan-400" />;
      case 'Boxes':
        return <Boxes size={22} className="text-emerald-400" />;
      case 'Activity':
        return <Activity size={22} className="text-sky-400" />;
      case 'Cpu':
        return <Cpu size={22} className="text-purple-400" />;
      default:
        return <Rocket size={22} className="text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#060911] via-[#080d1a] to-[#060911] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Rocket size={13} className="text-cyan-400" />
            <span>Forward Trajectory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
            Currently Exploring & Engineering Roadmap
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Active learning frontiers combining high-throughput full-stack architectures with deep neural estimators and deterministic hardware firmware.
          </p>
        </div>

        {/* Roadmap Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {exploringTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getTopicIcon(topic.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                    {topic.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-heading mb-2">
                  {topic.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center space-x-2 text-[11px] font-mono text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Active Exploration</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
