import React from 'react';
import {
  Brain,
  Users,
  MessageSquare,
  Zap,
  Target,
  ShieldCheck,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ThemeMode } from '../types';

interface SoftSkillsProps {
  theme: ThemeMode;
}

const SOFT_SKILLS = [
  {
    id: 'soft-1',
    title: 'Problem Solving & Critical Analysis',
    icon: Brain,
    level: 95,
    tag: 'LOGICAL THINKING',
    description: 'Systematic approach to deconstructing complex technical bugs, optimizing algorithms, and identifying root causes efficiently.',
    bullets: ['Algorithmic problem solving', 'Root-cause analysis', 'Performance bottleneck tuning']
  },
  {
    id: 'soft-2',
    title: 'Cross-Functional Team Collaboration',
    icon: Users,
    level: 92,
    tag: 'AGILE & TEAMWORK',
    description: 'Fostering open communication and synergy across software engineers, project managers, and product stakeholders.',
    bullets: ['Agile sprint participant', 'Active peer code reviews', 'Interdisciplinary team leadership']
  },
  {
    id: 'soft-3',
    title: 'Technical Communication & Mentorship',
    icon: MessageSquare,
    level: 90,
    tag: 'COMMUNICATION',
    description: 'Ability to explain complex backend and AI architectures clearly in documentation, presentations, and team workshops.',
    bullets: ['Clear API documentation', 'Public event stage anchoring', 'Mentored 500+ junior developers']
  },
  {
    id: 'soft-4',
    title: 'Adaptability & Rapid Learning',
    icon: Zap,
    level: 94,
    tag: 'CONTINUOUS GROWTH',
    description: 'Quickly absorbing new tech stacks, SDKs, and platform ecosystems under tight project requirements.',
    bullets: ['Fast framework adoption', 'Self-directed tech research', 'ServiceNow & AI specialization']
  },
  {
    id: 'soft-5',
    title: 'Project Ownership & Execution',
    icon: Target,
    level: 88,
    tag: 'OWNERSHIP',
    description: 'Taking full accountability from initial specification and sprint planning to high-quality code delivery.',
    bullets: ['Deadline discipline', 'Event & hackathon management', 'Milestone tracking']
  },
  {
    id: 'soft-6',
    title: 'Enterprise Quality & Security Mindset',
    icon: ShieldCheck,
    level: 90,
    tag: 'QUALITY & COMPLIANCE',
    description: 'Prioritizing secure access controls (ACLs), data privacy, and maintainable software architecture.',
    bullets: ['SOLID design principles', 'Role-Based Access Control', 'Production-ready standards']
  }
];

export const SoftSkills: React.FC<SoftSkillsProps> = ({ theme }) => {
  return (
    <section id="soft-skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center justify-center">
            <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400 tracking-wider">
              Competencies
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight uppercase ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            Professional Soft Skills
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Essential interpersonal abilities, leadership mindsets, and collaboration engineering skills driving project success.
          </p>
        </div>

        {/* Soft Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOFT_SKILLS.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.id}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:border-blue-500/60 flex flex-col justify-between group ${
                  theme === 'dark'
                    ? 'bg-zinc-900/70 border-zinc-800/90 shadow-xl'
                    : 'bg-white border-zinc-200 shadow-md'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Icon & Category Tag Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                      {skill.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-base sm:text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {skill.description}
                  </p>

                  {/* Key Highlights Bullets */}
                  <div className="space-y-1.5 pt-2">
                    {skill.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Skill Level Bar */}
                <div className={`pt-5 mt-6 border-t space-y-1.5 ${
                  theme === 'dark' ? 'border-zinc-800/80' : 'border-zinc-200'
                }`}>
                  <div className="flex justify-between text-[11px] font-mono font-semibold">
                    <span className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}>Proficiency Index</span>
                    <span className="text-blue-500 dark:text-blue-400">{skill.level}%</span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full overflow-hidden ${
                    theme === 'dark' ? 'bg-zinc-800' : 'bg-slate-200'
                  }`}>
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
