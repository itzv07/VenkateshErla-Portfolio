import React, { useState } from 'react';
import {
  ExternalLink,
  Sparkles,
  Search,
  CheckCircle2,
  X,
  ArrowUpRight,
  Code
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import { ThemeMode, Project } from '../types';
import { playPopSound } from '../utils/sound';

interface ProjectsProps {
  theme: ThemeMode;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  theme: ThemeMode;
  setActiveProjectModal: (proj: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, theme, setActiveProjectModal }) => {
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <div
      className={`group relative rounded-3xl border p-6 sm:p-8 transition-all duration-300 hover:scale-[1.01] ${
        theme === 'dark'
          ? 'bg-zinc-900/80 border-zinc-800/90 hover:border-rose-500/40 shadow-2xl shadow-black/60'
          : 'bg-white border-zinc-200/90 hover:border-rose-500/40 shadow-xl'
      }`}
    >
      <div className="space-y-5">
        
        {/* Top Badge & Number Row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-[11px] font-mono font-bold text-rose-500 dark:text-rose-400 tracking-wider uppercase">
                <Sparkles className="w-3 h-3 text-rose-500" />
                Featured Project
              </span>
            )}
            <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider ${
              theme === 'dark' ? 'bg-zinc-800 text-zinc-400 border border-zinc-700/50' : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
            }`}>
              {project.category}
            </span>
          </div>

          <span className="text-2xl sm:text-3xl font-black italic font-mono text-rose-500 dark:text-rose-400">
            {formattedIndex}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-2xl sm:text-3xl font-black tracking-tight group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors ${
          theme === 'dark' ? 'text-white' : 'text-zinc-950'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-sm sm:text-base leading-relaxed ${
          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
        }`}>
          {project.description}
        </p>

        {/* Tech Stack Pills List */}
        <div className="pt-2 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                theme === 'dark'
                  ? 'bg-zinc-850/80 text-zinc-300 border-zinc-800/90'
                  : 'bg-zinc-100 text-zinc-700 border-zinc-200'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions Row */}
        <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-3 ${
          theme === 'dark' ? 'border-zinc-800/60' : 'border-zinc-200'
        }`}>
          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPopSound()}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                  theme === 'dark'
                    ? 'bg-zinc-800 border-zinc-700 text-zinc-200 hover:bg-zinc-700 hover:text-white'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-800 hover:bg-zinc-200'
                }`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Github</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPopSound()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-mono font-bold text-white shadow-md shadow-rose-600/20 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              playPopSound();
              setActiveProjectModal(project);
            }}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-rose-500 hover:text-rose-400 transition-colors group/btn"
          >
            <span>View Architecture</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'AI / ML', 'Java & Backend'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matching reference image style) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono font-bold text-rose-500 dark:text-rose-400 tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Featured Projects</span>
          </div>

          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-zinc-950'
          }`}>
            Work that speaks for itself
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            A collection of projects that demonstrate my expertise in full-stack development, Java Spring Boot, AI/ML, and cloud architecture.
          </p>
        </div>

        {/* Filter Bar & Search Box */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playPopSound();
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                    : theme === 'dark'
                    ? 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white'
                    : 'bg-zinc-100 text-zinc-600 border border-zinc-200 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies or titles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-8 py-2 rounded-xl text-xs font-medium border outline-none transition-all ${
                theme === 'dark'
                  ? 'bg-zinc-900/80 border-zinc-800 text-white placeholder-zinc-500 focus:border-rose-500'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-rose-500'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Vertical Stacked Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              theme={theme}
              setActiveProjectModal={setActiveProjectModal}
            />
          ))}
        </div>

        {/* Bottom CTA Button: "Explore All My Repositories" (Exact as in reference video) */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/erlavenkatesh"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playPopSound()}
            className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl border font-mono font-bold text-sm transition-all duration-300 shadow-xl ${
              theme === 'dark'
                ? 'bg-zinc-900 border-zinc-800 text-white hover:border-rose-500/50 hover:bg-zinc-850'
                : 'bg-white border-zinc-300 text-zinc-900 hover:border-rose-500/50 hover:bg-zinc-50'
            }`}
          >
            <GithubIcon className="w-5 h-5 text-rose-500" />
            <span>Explore All My Repositories</span>
          </a>
        </div>

        {/* Modal Window for Detailed Architecture */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div
              className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl ${
                theme === 'dark' ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-600 text-[10px] font-mono font-bold text-white uppercase">
                      {activeProjectModal.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {activeProjectModal.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Architectural Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wider font-mono">
                  Project Architectural Overview
                </h4>
                <p className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                }`}>
                  {activeProjectModal.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wider font-mono">
                  Key Features & Engineering Highlights
                </h4>
                <div className="space-y-2">
                  {activeProjectModal.features.map((feat, idx) => (
                    <div key={idx} className={`flex items-start gap-2.5 text-xs ${
                      theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wider font-mono">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-rose-500/10 border border-rose-500/30 text-rose-500 dark:text-rose-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className={`pt-4 border-t flex items-center justify-end gap-3 ${
                theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
              }`}>
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-mono font-bold ${
                      theme === 'dark'
                        ? 'border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white'
                        : 'border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-800 shadow-sm'
                    }`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                )}

                {activeProjectModal.liveUrl && (
                  <a
                    href={activeProjectModal.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-mono font-bold text-white shadow-lg shadow-rose-600/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
