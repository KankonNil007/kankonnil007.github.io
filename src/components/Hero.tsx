'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { personalInfo, defaultStats, socialLinks } from '@/data/portfolioData';
import {
  ArrowRight,
  FileText,
  Send,
  Github,
  Linkedin,
  Facebook,
  Mail,
  Sparkles,
  GitBranch,
  Star,
  Cpu,
  GraduationCap
} from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Typing Effect
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic GitHub Metrics
  const [repoCount, setRepoCount] = useState<number>(15);
  const [starCount, setStarCount] = useState<number>(36);

  // Typewriter effect
  useEffect(() => {
    const words = personalInfo.roles;
    const currentWord = words[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentWord.length) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  // Live GitHub stats fetch with fallback
  useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch('https://api.github.com/users/KankonNil007', {
          headers: { Accept: 'application/vnd.github.v3+json' },
        });
        if (userRes.ok) {
          const userData = await userRes.json();
          if (typeof userData.public_repos === 'number') {
            setRepoCount(userData.public_repos);
          }

          const reposRes = await fetch('https://api.github.com/users/KankonNil007/repos?per_page=100');
          if (reposRes.ok) {
            const repos = await reposRes.json();
            if (Array.isArray(repos)) {
              const stars = repos.reduce((acc: number, r: { stargazers_count?: number }) => acc + (r.stargazers_count || 0), 0);
              if (stars > 0) {
                setStarCount(stars);
              }
            }
          }
        }
      } catch (err) {
        console.log('Using default GitHub stats fallback', err);
      }
    }

    fetchStats();
  }, []);

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'facebook':
        return <Facebook size={18} />;
      case 'mail':
        return <Mail size={18} />;
      default:
        return <ArrowRight size={18} />;
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="ambient-glow-cyan -top-40 -left-40 opacity-70" />
      <div className="ambient-glow-emerald top-1/2 -right-40 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 self-start px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono tracking-wide text-slate-300">
                {personalInfo.availability}
              </span>
            </div>

            {/* Main Heading & Dynamic Subtitle */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-tight">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">{personalInfo.name}</span>
              </h1>
              
              <div className="mt-3 flex items-center space-x-2 text-xl sm:text-2xl font-mono text-cyan-400 font-semibold min-h-[36px]">
                <span className="text-slate-400 font-sans font-normal text-lg sm:text-xl">I am an</span>
                <span className="border-b-2 border-cyan-400 pb-0.5" suppressHydrationWarning>{displayText}</span>
                <span className="animate-pulse text-cyan-300">|</span>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </p>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Undergraduate in Electronics & Communication Engineering at KUET, Bangladesh. 
              Proficient in Python, C, and full-stack development, solving real-world computational problems 
              and actively preparing for European graduate research fellowships (DAAD, Erasmus Mundus).
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Link
                href="#projects"
                className="group flex items-center space-x-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="flex items-center space-x-2 px-5 py-3 text-sm font-semibold rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <FileText size={16} className="text-cyan-400" />
                  <span>Download CV</span>
                </button>
              )}

              <Link
                href="#contact"
                className="flex items-center space-x-2 px-5 py-3 text-sm font-semibold rounded-xl bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800 text-slate-300 hover:text-white transition-all duration-200"
              >
                <Send size={15} />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Links Bar */}
            <div className="pt-3 flex items-center space-x-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center space-x-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${personalInfo.name} on ${s.platform}`}
                    className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all duration-200"
                  >
                    {getSocialIcon(s.icon)}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Visual Element / Futuristic Tech Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 sm:w-80 lg:w-96">
              
              {/* Outer Decorative Circuit Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-emerald-500/10 to-indigo-500/20 blur-2xl -z-10" />
              
              {/* Main Avatar Card Frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-950/90 p-1.5 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
                
                {/* Top Terminal Bar */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 bg-slate-900/60 rounded-t-xl">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">kuet.ece.kankon ~ v2.0</span>
                </div>

                {/* Profile Portrait */}
                <div className="relative w-full aspect-square overflow-hidden rounded-b-xl bg-slate-950">
                  <Image
                    src="/assets/profile.png"
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-cover object-center filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Identity Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center space-x-1.5">
                        <GraduationCap size={13} className="text-cyan-400" />
                        <span>KUET • Dept of ECE</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">B.Sc. Undergraduate</div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/50">
                      2024–Present
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill 1: Repositories */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md flex items-center space-x-2"
              >
                <div className="p-1.5 rounded-lg bg-cyan-950/80 text-cyan-400">
                  <GitBranch size={15} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono" suppressHydrationWarning>{repoCount} Repos</div>
                  <div className="text-[10px] text-slate-400">Open Source</div>
                </div>
              </motion.div>

              {/* Floating Stat Pill 2: Stars */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md flex items-center space-x-2"
              >
                <div className="p-1.5 rounded-lg bg-emerald-950/80 text-emerald-400">
                  <Star size={15} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono" suppressHydrationWarning>{starCount}+ Stars</div>
                  <div className="text-[10px] text-slate-400">GitHub Community</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
