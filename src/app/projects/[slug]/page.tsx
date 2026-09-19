import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { projectDetailsMap, ProjectDetail } from '@/data/projectDetailsData';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Clock,
  Code2
} from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projectDetailsMap).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetailsMap[slug];

  if (!project) {
    return {
      title: 'Project Not Found | Kankon Mondal',
      description: 'The requested engineering project could not be found.',
    };
  }

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: {
      canonical: project.canonicalUrl,
    },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: project.canonicalUrl,
      type: 'article',
      siteName: 'Kankon Mondal Portfolio',
      images: [
        {
          url: 'https://kankon.dev/og-image.png',
          width: 1200,
          height: 630,
          alt: project.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.metaTitle,
      description: project.metaDescription,
      images: ['https://kankon.dev/og-image.png'],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project: ProjectDetail | undefined = projectDetailsMap[slug];

  if (!project) {
    notFound();
  }

  // Schema.org structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title,
    description: project.metaDescription,
    url: project.canonicalUrl,
    author: {
      '@type': 'Person',
      name: 'Kankon Mondal',
      url: 'https://kankon.dev/',
    },
    publisher: {
      '@type': 'Person',
      name: 'Kankon Mondal',
    },
    keywords: project.technologies.join(', '),
  };

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient background glows */}
      <div className="ambient-glow-cyan -top-40 -left-40 opacity-50 fixed pointer-events-none" />
      <div className="ambient-glow-emerald top-1/2 -right-40 opacity-40 fixed pointer-events-none" />

      {/* Top Breadcrumb Navigation */}
      <header className="border-b border-slate-900 bg-[#060911]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>

          <Link
            href="/"
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            kankon.dev
          </Link>
        </div>
      </header>

      {/* Main Project Article */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <article>
          {/* Header Banner */}
          <div className="mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
              <Cpu size={13} className="text-cyan-400" />
              <span>{project.categoryLabel}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {/* Render Wakeup Notice if applicable */}
            {project.notice && (
              <div className="mt-4 inline-flex items-center space-x-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm">
                <Clock size={16} className="shrink-0 text-amber-400" />
                <span>{project.notice}</span>
              </div>
            )}

            {/* Quick Action Links */}
            <div className="mt-8 flex flex-wrap gap-3.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View GitHub repository for ${project.title}`}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-100 hover:text-white text-sm font-semibold transition-all shadow-md"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={14} className="text-slate-400" />
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo for ${project.title}`}
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 text-sm font-bold shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <ExternalLink size={16} />
                  <span>Live Interactive Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Grid Layout for Problem Statement & Methodology */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Problem Statement */}
            <section className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Problem Statement</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.problemStatement}
              </p>
            </section>

            {/* Methodology & Approach */}
            <section className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Methodology & Implementation</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.methodology}
              </p>
            </section>
          </div>

          {/* Architecture Highlights */}
          <section className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 mb-12">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-5 flex items-center space-x-2">
              <Layers size={20} className="text-cyan-400" />
              <span>Technical Architecture Highlights</span>
            </h2>

            <ul className="space-y-3">
              {project.architectureHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3 text-sm sm:text-base text-slate-300">
                  <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-1" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Key Results & Performance */}
          <section className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 mb-12">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-5 flex items-center space-x-2">
              <Sparkles size={20} className="text-emerald-400" />
              <span>Results & Evaluation</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-sm sm:text-base text-slate-200 flex items-start space-x-2.5">
                  <span className="text-cyan-400 font-bold font-mono">0{index + 1}.</span>
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Used */}
          <section className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 mb-14">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4 flex items-center space-x-2">
              <Code2 size={20} className="text-cyan-400" />
              <span>Technologies & Tools</span>
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-300 font-mono text-xs sm:text-sm font-medium"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </section>

          {/* Bottom Footer Back Navigation */}
          <footer className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Portfolio Projects</span>
            </Link>

            <div className="text-xs text-slate-500 font-mono">
              &copy; {new Date().getFullYear()} Kankon Mondal • <a href="https://kankon.dev" className="hover:text-cyan-400">kankon.dev</a>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
