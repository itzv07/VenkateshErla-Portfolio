import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Download,
  Bot,
  Terminal,
  Code2,
  Award,
  CheckCircle,
  Coffee,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Star,
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { playPopSound } from '../utils/sound';

interface HeroProps {
  theme: ThemeMode;
  openResumeModal: () => void;
  openAIRecruiter: () => void;
}

const CYCLING_TITLES = [
  'Software Engineer',
  'Java Full Stack Developer',
  'AI/ML Specialist'
];

export const Hero: React.FC<HeroProps> = ({
  theme,
  openResumeModal,
  openAIRecruiter
}) => {
  const [titleIndex, setTitleIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const targetText = CYCLING_TITLES[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === targetText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % CYCLING_TITLES.length);
    } else {
      const speed = isDeleting ? 40 : 85;
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? targetText.substring(0, currentText.length - 1)
          : targetText.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const article = ['A', 'E', 'I', 'O', 'U'].includes(
    CYCLING_TITLES[titleIndex][0].toUpperCase()
  )
    ? 'an'
    : 'a';

  const scrollToAbout = () => {
    playPopSound();
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-between pt-24 pb-12 overflow-hidden">
      
      {/* Radial Gradient Glow Effect in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability & Badge Status Pill */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold backdrop-blur-md shadow-sm ${
              theme === 'dark'
                ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                : 'bg-blue-100/90 border-blue-300 text-blue-800'
            }`}>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AVAILABLE FOR SDE / AI / SERVICENOW ROLES</span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              <div className="mb-2">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400 font-extrabold">{PERSONAL_INFO.name}</span>
              </div>
              <div className="text-2xl sm:text-4xl lg:text-4xl font-bold min-h-[3rem] sm:min-h-[3.5rem] flex items-center justify-center lg:justify-start flex-wrap gap-x-2">
                <span className={theme === 'dark' ? 'text-zinc-300' : 'text-slate-700'}>I am {article}</span>
                <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent font-extrabold">
                  {currentText}
                </span>
                <span className="animate-pulse text-blue-600 dark:text-blue-400 font-bold ml-0.5">|</span>
              </div>
            </h1>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${
              theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
            }`}>
              I specialize in building robust Java Spring Boot microservices, high-throughput enterprise backend systems, scalable Machine Learning models, and automated ServiceNow enterprise workflows.
            </p>

            {/* Certification Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <div className={`px-3 py-1 rounded-lg border text-[11px] font-mono flex items-center gap-1.5 shadow-sm ${
                theme === 'dark'
                  ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300'
                  : 'bg-white border-zinc-200 text-zinc-700'
              }`}>
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                <span>ServiceNow CAD Certified</span>
              </div>

              <div className={`px-3 py-1 rounded-lg border text-[11px] font-mono flex items-center gap-1.5 shadow-sm ${
                theme === 'dark'
                  ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300'
                  : 'bg-white border-zinc-200 text-zinc-700'
              }`}>
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                <span>ServiceNow CSA Certified</span>
              </div>

              <div className={`px-3 py-1 rounded-lg border text-[11px] font-mono flex items-center gap-1.5 shadow-sm ${
                theme === 'dark'
                  ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300'
                  : 'bg-white border-zinc-200 text-zinc-700'
              }`}>
                <Star className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" />
                <span>LeetCode: 100+ Solved</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4">
              <button
                onClick={() => {
                  playPopSound();
                  openAIRecruiter();
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group transition-all"
              >
                <Bot className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Ask AI Recruiter Assistant</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              </button>

              <button
                onClick={() => {
                  playPopSound();
                  openResumeModal();
                }}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl border font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  theme === 'dark'
                    ? 'bg-zinc-900/80 border-zinc-800 text-zinc-200 hover:border-zinc-700 hover:text-white'
                    : 'bg-white border-zinc-300 text-zinc-800 hover:border-zinc-400 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Direct Social Links */}
            <div className={`flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <span>Direct Links:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 shadow-sm'
                }`}
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 shadow-sm'
                }`}
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Code Terminal / Tech Stack Visual Card */}
          <div className="lg:col-span-5">
            <div className={`rounded-3xl border p-6 space-y-4 shadow-2xl relative overflow-hidden backdrop-blur-xl ${
              theme === 'dark'
                ? 'bg-zinc-950/80 border-zinc-800/80 shadow-black/80'
                : 'bg-white/90 border-zinc-200 shadow-zinc-200'
            }`}>
              
              {/* Terminal Window Bar */}
              <div className={`flex items-center justify-between pb-3 border-b ${
                theme === 'dark' ? 'border-zinc-800/60' : 'border-zinc-200'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className={`text-xs font-mono ml-2 ${
                    theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'
                  }`}>DeveloperProfile.java</span>
                </div>
                <Terminal className={`w-4 h-4 ${
                  theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'
                }`} />
              </div>

              {/* Code Snippet */}
              <div className={`font-mono text-xs leading-relaxed space-y-1 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-800'
              }`}>
                <p className="text-purple-600 dark:text-purple-400">public class <span className="text-amber-600 dark:text-amber-300">SoftwareEngineer</span> &#123;</p>
                <p className={`pl-4 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>// Core Candidate Qualifications</p>
                <p className="pl-4"><span className="text-blue-600 dark:text-blue-400">String</span> name = <span className="text-emerald-600 dark:text-emerald-400">"{PERSONAL_INFO.name}"</span>;</p>
                <p className="pl-4"><span className="text-blue-600 dark:text-blue-400">String</span> degree = <span className="text-emerald-600 dark:text-emerald-400">"B.Tech in CSE (AI & ML)"</span>;</p>
                <p className="pl-4"><span className="text-blue-600 dark:text-blue-400">double</span> gpa = <span className="text-amber-600 dark:text-amber-400">8.69</span>;</p>
                
                <p className={`pl-4 pt-2 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>// Enterprise Certifications</p>
                <p className="pl-4"><span className="text-blue-600 dark:text-blue-400">String[]</span> certs = &#123; <span className="text-emerald-600 dark:text-emerald-400">"ServiceNow CAD"</span>, <span className="text-emerald-600 dark:text-emerald-400">"ServiceNow CSA"</span> &#125;;</p>

                <p className={`pl-4 pt-2 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>// Key Tech Stack</p>
                <p className="pl-4"><span className="text-blue-600 dark:text-blue-400">String[]</span> stack = &#123;</p>
                <p className="pl-8 text-emerald-600 dark:text-emerald-400">"Java", "Spring Boot", "Python", "PyTorch",</p>
                <p className="pl-8 text-emerald-600 dark:text-emerald-400">"React", "ServiceNow App Engine", "MySQL"</p>
                <p className="pl-4">&#125;;</p>

                <p className="pl-4 pt-2"><span className="text-purple-600 dark:text-purple-400">public boolean</span> <span className="text-blue-600 dark:text-blue-400">isReadyToContribute</span>() &#123;</p>
                <p className="pl-8 text-emerald-600 dark:text-emerald-400">return true;</p>
                <p className="pl-4">&#125;</p>
                <p>&#125;</p>
              </div>

              {/* Quick Stat Pill */}
              <div className={`pt-3 border-t flex items-center justify-between text-xs font-mono ${
                theme === 'dark' ? 'border-zinc-800/60 text-zinc-400' : 'border-zinc-200 text-zinc-600'
              }`}>
                <span>Location: {PERSONAL_INFO.location}</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> Ready for Hire
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bounce Arrow Scroll Indicator */}
      <div className="relative z-10 pt-8 pb-2 flex justify-center">
        <button
          onClick={scrollToAbout}
          className={`group flex flex-col items-center gap-2 transition-all focus:outline-none`}
          aria-label="Scroll down to About section"
        >
          <span className={`text-[11px] font-mono tracking-widest uppercase opacity-75 group-hover:opacity-100 transition-opacity ${
            theme === 'dark' ? 'text-zinc-400 group-hover:text-blue-400' : 'text-zinc-500 group-hover:text-blue-600'
          }`}>
            Scroll to Explore
          </span>
          <div className={`p-2.5 rounded-full border shadow-lg animate-bounce transition-all ${
            theme === 'dark'
              ? 'bg-zinc-900/90 border-zinc-800 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 text-blue-400'
              : 'bg-white border-zinc-200 group-hover:border-blue-500 group-hover:bg-blue-50 text-blue-600'
          }`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
      </div>

    </section>
  );
};
