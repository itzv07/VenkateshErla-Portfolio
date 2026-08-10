import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Award
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface CertificationsProps {
  theme: ThemeMode;
}

export const Certifications: React.FC<CertificationsProps> = ({ theme }) => {
  const getCategoryBadge = (title: string) => {
    if (title.includes('Developer')) return 'DEVELOPER';
    if (title.includes('Administrator')) return 'ADMINISTRATOR';
    return 'SPECIALIZATION';
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center justify-center">
            <span className="px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono font-bold text-red-400 tracking-wider">
              Certifications
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight uppercase ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            Professional Certifications
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Official industry certifications verifying expertise in ServiceNow development, system administration, and deep learning.
          </p>
        </div>

        {/* Certifications Cards Grid - Reference styled like screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:border-red-500/60 flex flex-col justify-between group ${
                theme === 'dark'
                  ? 'bg-zinc-900/70 border-zinc-800 shadow-xl'
                  : 'bg-white border-zinc-200 shadow-md'
              }`}
            >
              <div className="space-y-4">
                {/* Category Badge Pill on top right */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">
                    {getCategoryBadge(cert.title)}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-base sm:text-lg font-bold leading-snug ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                  {cert.title}
                </h3>

                {/* Issuer/Role in Red Accent Uppercase */}
                <p className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  {cert.issuer}
                </p>

                {/* Competencies */}
                <div className="space-y-2 pt-1">
                  <p className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    Verified competencies: {cert.skillsLearned.join(' • ')}
                  </p>
                </div>
              </div>

              {/* ID & Issued details */}
              <div className={`pt-4 mt-6 border-t flex items-center justify-between text-[11px] font-mono ${
                theme === 'dark' ? 'border-zinc-800/80 text-zinc-400' : 'border-zinc-200 text-zinc-600'
              }`}>
                <span className="flex items-center gap-1 text-emerald-500 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ID: {cert.credentialId}
                </span>
                <span className="text-zinc-500 font-semibold">{cert.issueDate}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
