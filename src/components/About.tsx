import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  BookOpen,
  Target,
  Sparkles,
  Zap,
  TrendingUp,
  Brain
} from 'lucide-react';
import { EDUCATIONS, PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface AboutProps {
  theme: ThemeMode;
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const strengths = [
    { title: 'Full Stack & AI Integration', desc: 'Expertise in linking Spring Boot microservices with PyTorch/Generative AI APIs.' },
    { title: 'ServiceNow CAD & CSA', desc: 'Specialized in scoped applications, Service Portals, and Flow Designer automation.' },
    { title: 'Algorithmic Problem Solving', desc: 'Solved 100+ problems on LeetCode across Graphs, Dynamic Programming, and Data Structures.' },
    { title: 'Clean Code & Architecture', desc: 'Committed to SOLID design principles, modularity, and high unit test coverage.' }
  ];

  const goals = [
    'Engineers high-throughput backend services powering mission-critical applications.',
    'Pioneers practical Generative AI solutions that automate complex enterprise operations.',
    'Collaborates with high-performing software engineering teams globally.'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & CAREER JOURNEY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            About Me
          </h2>
          <p className={`text-base ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            A look into my technical foundation, education, strengths, and vision as a Software Engineer.
          </p>
        </div>

        {/* Top Summary & Strengths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Summary Card */}
          <div className={`lg:col-span-7 p-8 rounded-3xl border space-y-6 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-zinc-900/60 border-zinc-800 shadow-2xl'
              : 'bg-white border-zinc-200 shadow-xl'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-500">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                  Career Overview
                </h3>
                <p className="text-xs text-blue-500 font-mono">Software Engineer | AI & ServiceNow Specialist</p>
              </div>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              {PERSONAL_INFO.aboutSummary}
            </p>

            {/* Core Values / Professional Goals */}
            <div className="space-y-3 pt-2">
              <h4 className={`text-xs font-semibold uppercase tracking-wider font-mono ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Professional Goals
              </h4>
              <div className="space-y-2">
                {goals.map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className={`text-xs sm:text-sm ${
                      theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border space-y-2 transition-all duration-300 hover:border-blue-500/50 ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border-zinc-800'
                    : 'bg-white border-zinc-200 shadow-sm'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                  0{idx + 1}
                </div>
                <h4 className={`text-sm font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                  {item.title}
                </h4>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>
                Education Timeline
              </h3>
              <p className={`text-xs ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Academic achievements and specialized computer science training
              </p>
            </div>
          </div>

          <div className="relative border-l-2 border-blue-500/30 ml-4 pl-6 space-y-10">
            {EDUCATIONS.map((edu) => (
              <div key={edu.id} className="relative group">
                
                {/* Timeline Node Dot */}
                <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 group-hover:scale-125 transition-transform ${
                  theme === 'dark' ? 'border-zinc-950' : 'border-slate-50'
                }`} />

                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-zinc-900/60 border-zinc-800/80 hover:border-blue-500/50'
                    : 'bg-white border-zinc-200 hover:border-blue-500/50 shadow-md'
                }`}>
                  
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className={`text-lg font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {edu.degree} — <span className="text-blue-500">{edu.field}</span>
                      </h4>
                      <p className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                      }`}>
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-semibold text-blue-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.period}</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 font-mono">
                        Grade: {edu.grade}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-4">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Relevant Coursework Badges */}
                  <div>
                    <span className="text-[11px] font-semibold uppercase font-mono tracking-wider text-zinc-500 mb-2 block">
                      Core Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-medium ${
                            theme === 'dark'
                              ? 'bg-zinc-800 text-zinc-300 border border-zinc-700/60'
                              : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                          }`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
