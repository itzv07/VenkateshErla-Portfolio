import React, { useState, useEffect } from 'react';
import { Navbar } from './src/components/Navbar';
import { Hero } from './src/components/Hero';
import { About } from './src/components/About';
import { EngineeringProcess } from './src/components/EngineeringProcess';
import { Skills } from './src/components/Skills';
import { Experience } from './src/components/Experience';
import { Projects } from './src/components/Projects';
import { Certifications } from './src/components/Certifications';
import { Achievements } from './src/components/Achievements';
import { LeadershipEngagement } from './src/components/LeadershipEngagement';
import { SoftSkills } from './src/components/SoftSkills';
import { ContactSection } from './src/components/ContactSection';
import { Footer } from './src/components/Footer';
import { AIRecruiterChatbot } from './src/components/AIRecruiterChatbot';
import { ResumeModal } from './src/components/ResumeModal';
import { CommandPalette } from './src/components/CommandPalette';
import { BackgroundEffect } from './src/components/BackgroundEffect';
import { CustomCursor } from './src/components/CustomCursor';
import { ScrollProgressBar } from './src/components/ScrollProgressBar';
import { ThemeMode } from './src/types';
import { toggleMuteSound, getIsMuted } from './src/utils/sound';

const SectionSeparator: React.FC<{ theme: ThemeMode }> = ({ theme }) => (
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
    <div
      className={`h-[1px] w-full bg-gradient-to-r ${
        theme === 'dark'
          ? 'from-transparent via-blue-500/25 to-transparent'
          : 'from-transparent via-blue-500/35 to-transparent'
      }`}
    />
  </div>
);

export const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('portfolio_theme') as ThemeMode;
    return saved === 'light' ? 'light' : 'dark';
  });

  const [isMuted, setIsMuted] = useState(getIsMuted());
  const [isAIRecruiterOpen, setIsAIRecruiterOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleSound = () => {
    const muted = toggleMuteSound();
    setIsMuted(muted);
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-500 selection:bg-blue-500/30 selection:text-blue-300 bg-dot-grid ${
      theme === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Scroll Progress Bar at top */}
      <ScrollProgressBar />

      {/* Background Particle Mesh & Custom Cursor */}
      <BackgroundEffect theme={theme} />
      <CustomCursor />

      {/* Glassmorphism Header Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isMuted={isMuted}
        toggleSound={handleToggleSound}
        openCommandPalette={() => setIsCommandPaletteOpen(true)}
        openAIRecruiter={() => setIsAIRecruiterOpen(true)}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Page Sections with Gradient Separators */}
      <main className="relative z-10">
        <Hero
          theme={theme}
          openResumeModal={() => setIsResumeModalOpen(true)}
          openAIRecruiter={() => setIsAIRecruiterOpen(true)}
        />
        <SectionSeparator theme={theme} />
        <About theme={theme} />
        <SectionSeparator theme={theme} />
        <EngineeringProcess theme={theme} />
        <SectionSeparator theme={theme} />
        <Skills theme={theme} />
        <SectionSeparator theme={theme} />
        <Experience theme={theme} />
        <SectionSeparator theme={theme} />
        <Projects theme={theme} />
        <SectionSeparator theme={theme} />
        <Certifications theme={theme} />
        <SectionSeparator theme={theme} />
        <Achievements theme={theme} />
        <SectionSeparator theme={theme} />
        <LeadershipEngagement theme={theme} />
        <SectionSeparator theme={theme} />
        <SoftSkills theme={theme} />
        <SectionSeparator theme={theme} />
        <ContactSection theme={theme} />
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        openResumeModal={() => setIsResumeModalOpen(true)}
        openAIRecruiter={() => setIsAIRecruiterOpen(true)}
      />

      {/* Interactive Overlays & Modals */}
      <AIRecruiterChatbot
        isOpen={isAIRecruiterOpen}
        onClose={() => setIsAIRecruiterOpen(false)}
        theme={theme}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        theme={theme}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
        openAIRecruiter={() => setIsAIRecruiterOpen(true)}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />
    </div>
  );
};

export default App;
