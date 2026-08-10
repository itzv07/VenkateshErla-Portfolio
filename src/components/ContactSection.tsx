import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ContactSectionProps {
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-base ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            I am actively open to Software Engineering, Java Full Stack, AI/ML, and ServiceNow CAD/CSA opportunities. Feel free to reach out directly or use the quick form in the footer!
          </p>
        </div>

        {/* Centered Direct Contact Cards */}
        <div className={`p-8 rounded-3xl border max-w-2xl mx-auto space-y-6 ${
          theme === 'dark'
            ? 'bg-zinc-900/60 border-zinc-800/80 shadow-2xl'
            : 'bg-white border-zinc-200 shadow-xl'
        }`}>
          <h3 className={`text-xl font-bold text-center ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            Direct Contact Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`flex items-center gap-3.5 p-3.5 rounded-2xl border hover:border-blue-500/50 transition-all group ${
                theme === 'dark' ? 'bg-zinc-800/40 border-zinc-700/40' : 'bg-zinc-100 border-zinc-200'
              }`}
            >
              <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-mono text-zinc-500">Email Address</div>
                <div className={`text-xs sm:text-sm font-semibold truncate group-hover:text-blue-400 ${
                  theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
                }`}>{PERSONAL_INFO.email}</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className={`flex items-center gap-3.5 p-3.5 rounded-2xl border hover:border-blue-500/50 transition-all group ${
                theme === 'dark' ? 'bg-zinc-800/40 border-zinc-700/40' : 'bg-zinc-100 border-zinc-200'
              }`}
            >
              <div className="p-3 rounded-xl bg-purple-600/10 text-purple-400 group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-mono text-zinc-500">Phone Number</div>
                <div className={`text-xs sm:text-sm font-semibold truncate group-hover:text-purple-400 ${
                  theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
                }`}>{PERSONAL_INFO.phone}</div>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className={`flex items-center gap-3.5 p-3.5 rounded-2xl border ${
            theme === 'dark' ? 'bg-zinc-800/40 border-zinc-700/40' : 'bg-zinc-100 border-zinc-200'
          }`}>
            <div className="p-3 rounded-xl bg-emerald-600/10 text-emerald-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono text-zinc-500">Location</div>
              <div className={`text-xs sm:text-sm font-semibold ${
                theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
              }`}>{PERSONAL_INFO.location}</div>
            </div>
          </div>

          {/* Social Links */}
          <div className={`pt-4 border-t space-y-3 ${
            theme === 'dark' ? 'border-zinc-800/60' : 'border-zinc-200'
          }`}>
            <span className="text-xs font-mono uppercase text-zinc-400 font-semibold block text-center">
              Connect on Platforms:
            </span>
            <div className="flex gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                  theme === 'dark'
                    ? 'bg-zinc-800 border-zinc-700 text-zinc-200 hover:bg-zinc-700 hover:text-white'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Prompt to Reach Me in Footer */}
          <div className="pt-2 text-center">
            <a
              href="#footer-reach-me"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-rose-500 hover:text-rose-400 transition-colors"
            >
              <span>Quick Reach Me Form below</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
