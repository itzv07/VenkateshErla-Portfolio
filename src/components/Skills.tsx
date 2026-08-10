import React, { useState } from 'react';
import {
  Code,
  Server,
  Brain,
  Workflow,
  Layout,
  HardDrive,
  Sparkles,
  CheckCircle,
  Star
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ThemeMode, SkillCategory } from '../types';
import { playPopSound } from '../utils/sound';

interface SkillsProps {
  theme: ThemeMode;
}

interface SkillCardProps {
  category: SkillCategory;
  Icon: React.ElementType;
  theme: ThemeMode;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, Icon, theme }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-6 rounded-3xl border transition-all duration-300 hover:border-blue-500/50 flex flex-col justify-between overflow-hidden ${
        theme === 'dark'
          ? 'bg-zinc-900/60 border-zinc-800/80 shadow-xl'
          : 'bg-white border-zinc-200/90 shadow-lg'
      }`}
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${
            theme === 'dark'
              ? 'rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.05) 40%, transparent 80%'
              : 'rgba(59, 130, 246, 0.12), rgba(99, 102, 241, 0.04) 40%, transparent 80%'
          })`,
        }}
      />

      <div className="relative z-10">
        {/* Category Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-600/10 text-blue-500 border border-blue-500/20">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-base font-bold ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>
                {category.title}
              </h3>
              <p className="text-[11px] text-zinc-500">{category.skills.length} competencies</p>
            </div>
          </div>
        </div>

        <p className={`text-xs mb-6 ${
          theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          {category.description}
        </p>

        {/* Skills List with Animated Progress Bars */}
        <div className="space-y-4">
          {category.skills.map((skill) => (
            <div key={skill.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className={`flex items-center gap-1.5 ${
                  theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
                }`}>
                  {skill.name}
                  {skill.isPopular && (
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" title="Key Skill" />
                  )}
                </span>
                <span className="font-mono text-blue-400">{skill.level}%</span>
              </div>

              {/* Progress Bar Track */}
              <div className={`w-full h-2 rounded-full overflow-hidden ${
                theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'
              }`}>
                <div
                  className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {skill.description && (
                <p className="text-[11px] text-zinc-500 line-clamp-1 font-mono">
                  {skill.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={`relative z-10 mt-6 pt-4 border-t flex items-center justify-between text-[11px] text-zinc-500 font-mono ${
        theme === 'dark' ? 'border-zinc-800/40' : 'border-zinc-200'
      }`}>
        <span>Verified Competency</span>
        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
      </div>
    </div>
  );
};

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ElementType> = {
    Code,
    Server,
    Brain,
    Workflow,
    Layout,
    HardDrive
  };

  const filteredCategories = activeCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            Skills & Expertise
          </h2>
          <p className={`text-base ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            A comprehensive overview of my technical stack across full-stack backend development, AI/ML, and ServiceNow enterprise workflows.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => {
              playPopSound();
              setActiveCategory('all');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : theme === 'dark'
                ? 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white'
                : 'bg-zinc-100 text-zinc-600 border border-zinc-200 hover:text-zinc-900'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.iconName] || Code;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playPopSound();
                  setActiveCategory(cat.id);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : theme === 'dark'
                    ? 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                    : 'bg-zinc-100 text-zinc-600 border border-zinc-200 hover:text-zinc-900 hover:border-zinc-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.iconName] || Code;
            return (
              <SkillCard
                key={category.id}
                category={category}
                Icon={Icon}
                theme={theme}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
