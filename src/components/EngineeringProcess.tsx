import React, { useState, useEffect, useRef } from 'react';
import { ThemeMode } from '../types';
import { Compass, Layout, Code2, Rocket, Sparkles } from 'lucide-react';

interface EngineeringProcessProps {
  theme: ThemeMode;
}

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Research',
    subtitle: 'Discovery & Architecture',
    description:
      'I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.',
    icon: Compass,
    tilt: 'rotate-[-3deg]',
    positionClass: 'lg:ml-auto lg:mr-12',
    activationThreshold: 0.1
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'System & UX Design',
    description:
      'Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.',
    icon: Layout,
    tilt: 'rotate-[-4deg]',
    positionClass: 'lg:mr-auto lg:ml-20',
    activationThreshold: 0.35
  },
  {
    number: '03',
    title: 'Develop',
    subtitle: 'Full-Stack Engineering',
    description:
      'Building scalable backends and responsive frontends using modern tech stacks and best practices.',
    icon: Code2,
    tilt: 'rotate-[2deg]',
    positionClass: 'lg:ml-auto lg:mr-24',
    activationThreshold: 0.65
  },
  {
    number: '04',
    title: 'Deploy',
    subtitle: 'Cloud & CI/CD Pipelines',
    description:
      'Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.',
    icon: Rocket,
    tilt: 'rotate-[-1deg]',
    positionClass: 'lg:mr-auto lg:ml-20',
    activationThreshold: 0.85
  }
];

export const EngineeringProcess: React.FC<EngineeringProcessProps> = ({ theme }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from 0 (when section top enters) to 1 (when section bottom leaves)
      const totalDist = rect.height - windowHeight * 0.3;
      if (totalDist <= 0) return;

      const current = windowHeight * 0.7 - rect.top;
      const rawProgress = current / totalDist;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setScrollProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial computation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-24 relative overflow-hidden transition-colors">

      {/* Background Grid Lines Pattern (Exact style as reference image) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-25">
        <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 lg:mb-20">
          <div className="lg:col-span-8 space-y-4">

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono font-bold text-rose-500 dark:text-rose-400 tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>My Process</span>
            </div>

            {/* Main Headline */}
            <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] ${theme === 'dark' ? 'text-white' : 'text-zinc-950'
              }`}>
              Here's how I turn ideas into real-world applications
            </h2>

            {/* Sub-paragraph */}
            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              I follow a structured, creative, and highly technical approach. As you scroll down, explore each step of the roadmap!
            </p>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end pt-8">
            <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-xs font-mono text-rose-400 space-y-1.5 max-w-xs shadow-sm">
              <p className="font-bold uppercase tracking-wider text-rose-500">Roadmap Progress</p>
              <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-rose-600 transition-all duration-150"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                />
              </div>
              <p className="text-[11px] text-zinc-400 text-right font-semibold">
                {Math.round(scrollProgress * 100)}% Completed
              </p>
            </div>
          </div>
        </div>

        {/* Process Flow Cards Container */}
        <div className="relative max-w-5xl mx-auto">

          {/* SVG Road Map Dashed Curved Paths for Mobile & Tablet */}
          <div className="block lg:hidden absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 400 1000" fill="none" preserveAspectRatio="none">
              {/* Neutral background S-curve path */}
              <path
                d="M 200 20 C 360 160, 40 320, 200 480 C 360 640, 40 800, 200 960"
                stroke={theme === 'dark' ? '#3f3f46' : '#e4e4e7'}
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              {/* Dynamic scroll-filling red active S-curve path */}
              <path
                d="M 200 20 C 360 160, 40 320, 200 480 C 360 640, 40 800, 200 960"
                stroke={theme === 'dark' ? '#f43f5e' : '#e11d48'}
                strokeWidth="4"
                strokeDasharray="1000"
                strokeDashoffset={1000 - Math.min(scrollProgress * 1.15, 1) * 1000}
                className="transition-all duration-100 ease-out"
              />
            </svg>
          </div>

          {/* SVG Road Map Dashed Curved Paths for Desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="none">
              {/* Neutral background path */}
              <path
                d="M 650 100 C 500 180, 280 250, 320 380 C 380 500, 720 540, 650 680 C 580 750, 380 820, 320 920"
                stroke={theme === 'dark' ? '#3f3f46' : '#e4e4e7'}
                strokeWidth="3"
                strokeDasharray="8 8"
              />
              {/* Dynamic scroll-filling red active path */}
              <path
                d="M 650 100 C 500 180, 280 250, 320 380 C 380 500, 720 540, 650 680 C 580 750, 380 820, 320 920"
                stroke={theme === 'dark' ? '#f43f5e' : '#e11d48'}
                strokeWidth="4"
                strokeDasharray="1200"
                strokeDashoffset={1200 - Math.min(scrollProgress * 1.15, 1) * 1200}
                className="transition-all duration-100 ease-out"
              />
            </svg>
          </div>

          {/* Cards Stack */}
          <div className="space-y-12 lg:space-y-16 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const IconComp = step.icon;
              const isActivated = scrollProgress >= step.activationThreshold;

              return (
                <div
                  key={step.number}
                  className={`relative w-full max-w-md mx-auto ${step.positionClass} transition-all duration-500 group`}
                >
                  {/* Pin Dot at top center */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full border transition-all duration-300 ${isActivated
                        ? 'bg-rose-500 border-white shadow-lg shadow-rose-500/50 scale-110'
                        : 'bg-slate-300 dark:bg-zinc-700 border-zinc-500 group-hover:bg-rose-500 group-hover:border-white group-hover:shadow-lg group-hover:shadow-rose-500/50 group-hover:scale-110'
                      }`} />
                  </div>

                  {/* Card Box */}
                  <div
                    className={`p-6 sm:p-8 rounded-2xl transition-all duration-500 transform ${step.tilt} group-hover:rotate-0 group-hover:scale-[1.03] relative ${isActivated
                        ? 'bg-gradient-to-br from-red-600 via-rose-600 to-rose-700 text-white shadow-2xl shadow-rose-600/40 border border-rose-400/40 scale-100 opacity-100'
                        : theme === 'dark'
                          ? 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 opacity-75 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:via-rose-600 group-hover:to-rose-700 group-hover:text-white group-hover:border-rose-400/40 group-hover:shadow-2xl group-hover:shadow-rose-600/40 group-hover:opacity-100'
                          : 'bg-white text-zinc-600 border border-zinc-200 shadow-lg opacity-85 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:via-rose-600 group-hover:to-rose-700 group-hover:text-white group-hover:border-rose-400/40 group-hover:shadow-2xl group-hover:shadow-rose-600/40 group-hover:opacity-100'
                      }`}
                  >
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-2xl sm:text-3xl font-black italic tracking-tight transition-colors ${isActivated
                          ? 'text-white'
                          : 'text-rose-500 dark:text-rose-400 group-hover:text-white'
                        }`}>
                        {step.number}
                      </span>
                      <div className={`p-2.5 rounded-xl transition-colors ${isActivated
                          ? 'bg-white/20 text-white backdrop-blur-md'
                          : 'bg-rose-500/10 text-rose-500 border border-rose-500/20 group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent'
                        }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-black mb-1 tracking-tight transition-colors ${isActivated
                        ? 'text-white'
                        : (theme === 'dark' ? 'text-white' : 'text-zinc-900') + ' group-hover:text-white'
                      }`}>
                      {step.title}
                    </h3>

                    <p className={`text-xs font-mono font-semibold uppercase tracking-wider mb-3 transition-colors ${isActivated
                        ? 'text-rose-100'
                        : 'text-rose-500 dark:text-rose-400 group-hover:text-rose-100'
                      }`}>
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed transition-colors ${isActivated
                        ? 'text-rose-50/90'
                        : (theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600') + ' group-hover:text-rose-50/90'
                      }`}>
                      {step.description}
                    </p>

                    {/* RIGHT SIDE callout for Step 04 (Deploy): "Ready to ship!" */}
                    {step.number === '04' && (
                      <div className={`mt-6 lg:mt-0 lg:absolute lg:left-full lg:ml-6 lg:top-1/2 lg:-translate-y-1/2 flex items-center gap-2 transition-all duration-500 ${isActivated ? 'opacity-100 scale-100 translate-x-0' : 'opacity-60 group-hover:opacity-100 group-hover:scale-100'
                        }`}>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-zinc-900/90 dark:bg-white text-white dark:text-zinc-900 shadow-xl border border-rose-500/30 shrink-0">
                          <span className="font-serif italic text-xl sm:text-2xl font-black tracking-tight whitespace-nowrap">
                            Ready to ship!
                          </span>
                          <Rocket className="w-5 h-5 text-rose-500 animate-bounce" />
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
