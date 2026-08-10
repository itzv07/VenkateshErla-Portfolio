import React from 'react';
import { Award, Sparkles, Users, Mic, Flag, Lightbulb, Compass } from 'lucide-react';
import { ThemeMode } from '../types';

interface LeadershipEngagementProps {
  theme: ThemeMode;
}

const LEADERSHIP_ITEMS = [
  {
    id: 'lead-1',
    category: 'CLUB LEADERSHIP',
    title: 'Organizing Committee Lead – CODVIX Club',
    role: 'ORGANIZING COMMITTEE LEAD',
    description: 'Led and managed CODVIX club operations in college, spearheading technical hackathons, coding workshops, and developer community activities.'
  },
  {
    id: 'lead-2',
    category: 'HACKATHON LEAD',
    title: 'Synapticx Hackathon Technical Team Lead',
    role: 'TECHNICAL TEAM LEAD',
    description: 'Directed technical infrastructure, mentored participating developer teams, coordinated problem evaluations, and guided real-time solution execution.'
  },
  {
    id: 'lead-3',
    category: 'SPORTS & CO-CURRICULAR',
    title: 'Inter-College Cricket Coordinator',
    role: 'SPORTS FESTIVAL COORDINATOR',
    description: 'Organized and managed the Gully Cricket Tournament as part of the flagship PBRVITS Sports Festival, handling match logistics and team participation.'
  },
  {
    id: 'lead-4',
    category: 'ATHLETICS & LEADERSHIP',
    title: 'Cricket Team Captain & Runner-Up',
    role: 'TEAM CAPTAIN',
    description: 'Captained the college cricket team to the finals, securing the Runner-Up title at the PBRVITS Intercollege Sports Event 2K25.'
  },
  {
    id: 'lead-5',
    category: 'EVENT LEADERSHIP',
    title: 'Coding Event Organizing Team Lead at Spree 2K25',
    role: 'ORGANIZING TEAM LEAD',
    description: 'Headed the organizing committee for competitive programming contests at Spree 2K25, designing problem sets and managing live leaderboards.'
  }
];

export const LeadershipEngagement: React.FC<LeadershipEngagementProps> = ({ theme }) => {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center justify-center">
            <span className="px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono font-bold text-red-400 tracking-wider">
              Activities
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight uppercase ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            Leadership & Engagement
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Coordinating events, leading team operations, and participating in tech summits.
          </p>
        </div>

        {/* Roadmap Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Red Line Stem */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-red-500 via-rose-500 to-red-600 shadow-[0_0_10px_rgba(239,68,68,0.5)] z-0" />

          <div className="space-y-12 relative z-10">
            {LEADERSHIP_ITEMS.map((item, index) => {
              // Alternating left/right: index 0 -> Left, 1 -> Right, 2 -> Left, 3 -> Right, 4 -> Left
              const isLeftSide = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isLeftSide ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className={`absolute left-4 lg:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)] z-20 ${
                    theme === 'dark' ? 'ring-4 ring-red-950/80' : 'ring-4 ring-red-100'
                  }`} />

                  {/* Card Container Column */}
                  <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:px-8">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:border-red-500/60 ${
                        theme === 'dark'
                          ? 'bg-zinc-900/70 border-zinc-800/90 shadow-xl'
                          : 'bg-white border-zinc-200 shadow-md'
                      }`}
                    >
                      {/* Top Category Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className={`text-base sm:text-lg font-bold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Role in Red Accent Uppercase */}
                      <p className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-3">
                        {item.role}
                      </p>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
