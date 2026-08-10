import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ExperienceProps {
  theme: ThemeMode;
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE & INTERNSHIPS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            Professional Experience
          </h2>
          <p className={`text-base ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Hands-on software development experience building enterprise ServiceNow applications and full-stack AI services.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-500/30 ml-4 lg:ml-8 pl-6 lg:pl-10 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Dot */}
              <div className={`absolute -left-[31px] lg:-left-[47px] top-2 w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-4 group-hover:scale-125 transition-transform shadow-lg shadow-blue-500/50 ${
                theme === 'dark' ? 'border-zinc-950' : 'border-slate-50'
              }`} />

              <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:border-blue-500/50 ${
                theme === 'dark'
                  ? 'bg-zinc-900/60 border-zinc-800/80 shadow-2xl'
                  : 'bg-white border-zinc-200 shadow-xl'
              }`}>
                
                {/* Experience Header */}
                <div className={`flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b ${
                  theme === 'dark' ? 'border-zinc-800/40' : 'border-zinc-200'
                }`}>
                  <div className="space-y-1">
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-[11px] font-mono font-semibold text-blue-500 dark:text-blue-400 mb-1">
                      {exp.type}
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-extrabold ${
                      theme === 'dark' ? 'text-white' : 'text-zinc-900'
                    }`}>
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-blue-600 dark:text-blue-500">
                      {exp.company}
                    </p>
                  </div>

                  <div className={`flex flex-col items-start sm:items-end gap-1.5 font-mono text-xs ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                      theme === 'dark'
                        ? 'bg-zinc-800/60 border-zinc-700/60 text-zinc-300'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                    }`}>
                      <Calendar className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                }`}>
                  {exp.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-3 mb-6">
                  <h4 className={`text-xs font-semibold uppercase tracking-wider font-mono ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                        <span className={`text-xs sm:text-sm ${
                          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                        }`}>
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-purple-500/10 border border-blue-500/20 mb-6 space-y-2">
                  <h4 className="text-xs font-bold text-amber-500 dark:text-amber-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    Key Deliverables & Impact
                  </h4>
                  <div className="space-y-1">
                    {exp.keyAchievements.map((ach, idx) => (
                      <p key={idx} className={`text-xs font-medium flex items-center gap-2 ${
                        theme === 'dark' ? 'text-zinc-300' : 'text-zinc-800'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0" />
                        <span>{ach}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Technologies Badges */}
                <div>
                  <h4 className={`text-xs font-semibold uppercase tracking-wider font-mono mb-2 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-lg text-xs font-medium font-mono ${
                          theme === 'dark'
                            ? 'bg-zinc-800 text-blue-300 border border-zinc-700/60'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
