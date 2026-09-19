import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#060911] text-slate-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-glow-cyan top-1/4 -left-20 opacity-40 absolute pointer-events-none" />
      <div className="ambient-glow-emerald bottom-1/4 -right-20 opacity-30 absolute pointer-events-none" />

      <div className="max-w-md w-full glass-card rounded-2xl p-8 sm:p-10 text-center relative z-10 border border-slate-800 shadow-2xl">
        <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/40 mb-6">
          <Compass size={32} className="animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <span className="block text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold mb-2">
          HTTP Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-3">
          404 — Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 text-sm font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-200"
          >
            <Home size={16} />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft size={15} />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
