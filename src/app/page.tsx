'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { EducationCertifications } from '@/components/EducationCertifications';
import { CurrentlyExploring } from '@/components/CurrentlyExploring';
import { Contact } from '@/components/Contact';
import { ResumeModal } from '@/components/ResumeModal';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div
      suppressHydrationWarning
      className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col justify-between overflow-x-hidden"
    >
      {/* Fixed Sticky Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <EducationCertifications />
        <CurrentlyExploring />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
