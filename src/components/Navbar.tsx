import React, { useState, useEffect } from 'react';
import {
  Volume2,
  VolumeX,
  Command,
  Bot,
  FileText,
  Menu,
  X,
  Sparkles,
  Briefcase,
  Code,
  GraduationCap,
  Award,
  Mail,
  User,
  Compass
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ThemeMode } from '../types';
import { playPopSound } from '../utils/sound';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  isMuted: boolean;
  toggleSound: () => void;
  openCommandPalette: () => void;
  openAIRecruiter: () => void;
  openResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  isMuted,
  toggleSound,
  openCommandPalette,
  openAIRecruiter,
  openResumeModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', icon: User },
    { label: 'Process', href: '#process', icon: Compass },
    { label: 'Skills', href: '#skills', icon: Code },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: Code },
    { label: 'Certifications', href: '#certifications', icon: Award },
    { label: 'Achievements', href: '#achievements', icon: Sparkles },
    { label: 'Contact', href: '#contact', icon: Mail }
  ];

  const handleNavClick = (href: string) => {
    playPopSound();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl'
            : 'bg-white/80 backdrop-blur-md border-b border-zinc-200/80 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-lg shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
              EV
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-sm sm:text-base tracking-tight leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>
                Erla Venkatesh
              </span>
              <span className="text-[11px] font-mono text-blue-400 font-medium">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md ${
            theme === 'dark'
              ? 'bg-zinc-900/40 border-zinc-800/60'
              : 'bg-zinc-200/60 border-zinc-300/80'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  theme === 'dark'
                    ? 'text-zinc-300 hover:text-white hover:bg-zinc-800/80'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Utilities */}
          <div className="flex items-center gap-2">
            
            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                playPopSound();
                openCommandPalette();
              }}
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                theme === 'dark'
                  ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900'
              }`}
              title="Open Command Search (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Search</span>
              <kbd className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                theme === 'dark' ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200 text-zinc-700'
              }`}>⌘K</kbd>
            </button>

            {/* AI Recruiter Chatbot Button */}
            <button
              onClick={() => {
                playPopSound();
                openAIRecruiter();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all"
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">Ask AI</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                playPopSound();
                openResumeModal();
              }}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold text-xs transition-all ${
                theme === 'dark'
                  ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:border-zinc-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => {
                toggleSound();
              }}
              className={`p-2 rounded-xl border transition-all ${
                theme === 'dark'
                  ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900'
              }`}
              title={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-300'
                  : 'bg-white border-zinc-200 text-zinc-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 py-6 space-y-3 backdrop-blur-xl ${
          theme === 'dark' ? 'bg-zinc-950/95 border-zinc-800 text-zinc-100' : 'bg-white/95 border-zinc-200 text-zinc-900'
        }`}>
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-blue-600/10 hover:text-blue-400 transition-colors"
                >
                  <Icon className="w-4 h-4 text-blue-500" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className={`pt-4 border-t flex flex-col gap-2 ${
            theme === 'dark' ? 'border-zinc-800/60' : 'border-zinc-200'
          }`}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAIRecruiter();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI Hiring Assistant</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openResumeModal();
              }}
              className={`w-full py-3 rounded-xl border font-semibold text-xs flex items-center justify-center gap-2 ${
                theme === 'dark'
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-200'
                  : 'border-zinc-200 bg-white text-zinc-800'
              }`}
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Preview / Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
