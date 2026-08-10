import React, { useState, useEffect } from 'react';
import {
  Search,
  Command,
  FileText,
  Bot,
  Mail,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  X,
  Check
} from 'lucide-react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playPopSound } from '../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  openAIRecruiter: () => void;
  openResumeModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  theme,
  toggleTheme,
  openAIRecruiter,
  openResumeModal
}) => {
  const [query, setQuery] = useState('');
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else openPalette();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const openPalette = () => {
    playPopSound();
  };

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    playPopSound();
    setCopiedNotice(label);
    setTimeout(() => setCopiedNotice(null), 2000);
  };

  const handleJumpTo = (href: string) => {
    playPopSound();
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands = [
    {
      id: 'ai-bot',
      title: 'Ask AI Recruiter Assistant',
      category: 'Actions',
      icon: Bot,
      action: () => {
        onClose();
        openAIRecruiter();
      }
    },
    {
      id: 'resume',
      title: 'View & Download Resume',
      category: 'Actions',
      icon: FileText,
      action: () => {
        onClose();
        openResumeModal();
      }
    },
    {
      id: 'jump-about',
      title: 'Jump to About Me',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => handleJumpTo('#about')
    },
    {
      id: 'jump-skills',
      title: 'Jump to Skills & Stack',
      category: 'Navigation',
      icon: Code,
      action: () => handleJumpTo('#skills')
    },
    {
      id: 'jump-exp',
      title: 'Jump to Experience',
      category: 'Navigation',
      icon: Briefcase,
      action: () => handleJumpTo('#experience')
    },
    {
      id: 'jump-projects',
      title: 'Jump to Projects',
      category: 'Navigation',
      icon: Code,
      action: () => handleJumpTo('#projects')
    },
    {
      id: 'jump-certs',
      title: 'Jump to Certifications',
      category: 'Navigation',
      icon: Award,
      action: () => handleJumpTo('#certifications')
    },
    {
      id: 'copy-email',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Quick Contact',
      icon: Mail,
      action: () => handleCopy(PERSONAL_INFO.email, 'Email Copied!')
    }
  ];

  const filteredCommands = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-xl rounded-3xl border overflow-hidden shadow-2xl ${
          theme === 'dark' ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
        }`}
      >
        {/* Search Header Input */}
        <div className={`p-4 border-b flex items-center gap-3 ${
          theme === 'dark' ? 'border-zinc-800/60' : 'border-zinc-200'
        }`}>
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full bg-transparent text-sm outline-none font-medium ${
              theme === 'dark' ? 'placeholder-zinc-500 text-white' : 'placeholder-zinc-400 text-zinc-900'
            }`}
          />
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white'
                : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {copiedNotice && (
          <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-4 py-2 text-xs font-mono font-semibold text-emerald-400 flex items-center justify-between">
            <span>{copiedNotice}</span>
            <Check className="w-3.5 h-3.5" />
          </div>
        )}

        {/* Command Items List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-xs text-zinc-500 font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    theme === 'dark'
                      ? 'hover:bg-zinc-900 text-zinc-300 hover:text-white'
                      : 'hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-blue-600/10 text-blue-500 dark:text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{cmd.title}</span>
                  </div>

                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                    theme === 'dark'
                      ? 'bg-zinc-800/40 text-zinc-500'
                      : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                  }`}>
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className={`p-3 border-t text-[10px] font-mono flex items-center justify-between ${
          theme === 'dark'
            ? 'border-zinc-800/60 bg-zinc-950/80 text-zinc-500'
            : 'border-zinc-200 bg-zinc-50 text-zinc-600'
        }`}>
          <span>Press ESC to exit</span>
          <span className="flex items-center gap-1">
            <Command className="w-3 h-3" /> + K
          </span>
        </div>
      </div>
    </div>
  );
};
