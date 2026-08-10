import React from 'react';
import {
  Trophy,
  Award,
  Users,
  Star,
  Sparkles,
  Code2,
  TrendingUp,
  Flame
} from 'lucide-react';
import { ACHIEVEMENTS, LEETCODE_STATS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface AchievementsProps {
  theme: ThemeMode;
}

export const Achievements: React.FC<AchievementsProps> = ({ theme }) => {
  const iconMap: Record<string, React.ElementType> = {
    Trophy,
    Award,
    Users,
    Star
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HONORS, HACKATHONS & ALGORITHMIC MASTERY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            Achievements & Competitive Coding
          </h2>
          <p className={`text-base ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Key recognitions in national AI hackathons, technical leadership roles, and algorithmic problem solving on LeetCode.
          </p>
        </div>

        {/* LeetCode Statistics Card */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
            theme === 'dark'
              ? 'bg-zinc-900/60 border-zinc-800/80 shadow-2xl'
              : 'bg-white border-zinc-200 shadow-xl'
          }`}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-zinc-900'
                  }`}>
                    LeetCode Analytics
                  </h3>
                  <p className="text-xs text-amber-500 font-mono">{LEETCODE_STATS.ranking}</p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-400">
                100+ Solved
              </span>
            </div>

            {/* Total Solved Big Display */}
            <div className={`p-5 rounded-2xl border flex items-center justify-between ${
              theme === 'dark'
                ? 'bg-zinc-800/30 border-zinc-700/40'
                : 'bg-amber-50/80 border-amber-200'
            }`}>
              <div>
                <div className={`text-xs font-mono uppercase ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-amber-900 font-semibold'
                }`}>Total Solved Problems</div>
                <div className="text-4xl font-extrabold text-amber-500 dark:text-amber-400 font-mono mt-0.5">
                  {LEETCODE_STATS.totalSolved}+
                </div>
              </div>
              <Flame className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>

            {/* Problem Distribution Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Easy */}
              <div className={`p-3 rounded-xl border space-y-1 ${
                theme === 'dark' ? 'bg-zinc-800/20 border-zinc-700/30' : 'bg-slate-100 border-slate-200'
              }`}>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-emerald-500 dark:text-emerald-400 font-semibold">Easy</span>
                  <span className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-800'}>{LEETCODE_STATS.easySolved}</span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${
                  theme === 'dark' ? 'bg-zinc-800' : 'bg-slate-200'
                }`}>
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '80%' }} />
                </div>
              </div>

              {/* Medium */}
              <div className={`p-3 rounded-xl border space-y-1 ${
                theme === 'dark' ? 'bg-zinc-800/20 border-zinc-700/30' : 'bg-slate-100 border-slate-200'
              }`}>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-amber-500 dark:text-amber-400 font-semibold">Medium</span>
                  <span className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-800'}>{LEETCODE_STATS.mediumSolved}</span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${
                  theme === 'dark' ? 'bg-zinc-800' : 'bg-slate-200'
                }`}>
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '70%' }} />
                </div>
              </div>

              {/* Hard */}
              <div className={`p-3 rounded-xl border space-y-1 ${
                theme === 'dark' ? 'bg-zinc-800/20 border-zinc-700/30' : 'bg-slate-100 border-slate-200'
              }`}>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-rose-500 dark:text-rose-400 font-semibold">Hard</span>
                  <span className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-800'}>{LEETCODE_STATS.hardSolved}</span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${
                  theme === 'dark' ? 'bg-zinc-800' : 'bg-slate-200'
                }`}>
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: '40%' }} />
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <a
                href="https://leetcode.com/erlavenkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>View LeetCode Profile</span>
                <TrendingUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Hackathons & Key Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach) => {
            const Icon = iconMap[ach.iconName] || Trophy;

            return (
              <div
                key={ach.id}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:border-blue-500/50 flex gap-5 ${
                  theme === 'dark'
                    ? 'bg-zinc-900/60 border-zinc-800/80 shadow-xl'
                    : 'bg-white border-zinc-200 shadow-lg'
                }`}
              >
                <div className="p-4 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 shrink-0 self-start">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono font-bold text-blue-400 uppercase">
                      {ach.category}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">{ach.date}</span>
                  </div>

                  <h3 className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {ach.title}
                  </h3>

                  <p className="text-xs text-blue-400 font-semibold">
                    {ach.organizer}
                  </p>

                  <p className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {ach.description}
                  </p>

                  {ach.metric && (
                    <div className="pt-1 text-xs font-extrabold text-amber-400 font-mono">
                      ★ {ach.metric}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
