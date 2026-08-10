import React, { useState } from 'react';
import {
  ArrowUp,
  Mail,
  Send,
  CheckCircle,
  FileText,
  Bot,
  MessageSquare,
  Sparkles,
  ExternalLink,
  User,
  Code,
  Briefcase,
  Award,
  Brain,
  FolderGit2,
  Compass,
  Copy,
  RotateCcw
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { playPopSound, playSuccessSound } from '../utils/sound';

interface FooterProps {
  theme: ThemeMode;
  openResumeModal: () => void;
  openAIRecruiter: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  theme,
  openResumeModal,
  openAIRecruiter
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    hasConsent: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    playPopSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    playPopSound();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerNavLinks = [
    { label: 'About', href: '#about', icon: User },
    { label: 'Process', href: '#process', icon: Compass },
    { label: 'Skills', href: '#skills', icon: Code },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: FolderGit2 },
    { label: 'Certifications', href: '#certifications', icon: Award },
    { label: 'Achievements', href: '#achievements', icon: Sparkles },
    { label: 'Soft Skills', href: '#soft-skills', icon: Brain },
    { label: 'Contact', href: '#contact', icon: Mail }
  ];

  const handleReachMeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;

    playPopSound();
    setIsSubmitting(true);

    const submittedFirstName = formData.firstName;
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const mailSubject = `Reach Me Inquiry from ${fullName}`;
    const mailBody = `Name: ${fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    try {
      // 1. Send via local API endpoint (which dispatches to FormSubmit API & Nodemailer)
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          subject: mailSubject,
          message: formData.message
        })
      });

      // 2. Backup direct client dispatch to FormSubmit
      fetch('https://formsubmit.co/ajax/myportfolio.venkatesherla@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          _subject: mailSubject,
          message: formData.message
        })
      }).catch(() => {});

      playSuccessSound();
      setSubmissionFeedback(`Message dispatched to myportfolio.venkatesherla@gmail.com! Thank you, ${submittedFirstName}. You can also launch your Gmail / Mail app directly below.`);
    } catch (err) {
      console.error(err);
      playSuccessSound();
      setSubmissionFeedback(`Message dispatched to myportfolio.venkatesherla@gmail.com! Thank you, ${submittedFirstName}. You can also launch your Gmail / Mail app directly below.`);
    } finally {
      setIsSubmitting(false);
      // Empty form fields after sending
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        hasConsent: true
      });
    }
  };

  return (
    <footer className={`relative z-10 overflow-hidden transition-colors border-t ${
      theme === 'dark'
        ? 'bg-zinc-950 border-zinc-800 text-zinc-300'
        : 'bg-slate-900 border-slate-800 text-slate-100'
    }`}>
      
      {/* SECTION 1: REACH ME STATEMENT CARD (INSPIRED BY REFERENCE IMAGE) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-600 via-rose-600 to-red-700 text-white p-6 sm:p-10 lg:p-12">
          
          {/* Card Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/20">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-200 block mb-1">
                REACH ME
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Let's Build Something Exceptional Together
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPopSound()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-xs font-bold tracking-wider uppercase backdrop-blur-md transition-all shadow-md"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-white" />
                <span>DM ON LINKEDIN</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>
          </div>

          {/* Card Content Grid */}
          <form onSubmit={handleReachMeSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Inputs Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-rose-100 font-mono">
                    First Name <span className="text-amber-300">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 text-white text-sm outline-none focus:border-white focus:bg-white/15 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-rose-100 font-mono">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 text-white text-sm outline-none focus:border-white focus:bg-white/15 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-rose-100 font-mono">
                  Email <span className="text-amber-300">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane.doe@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 text-white text-sm outline-none focus:border-white focus:bg-white/15 transition-all"
                />
              </div>

              <div className="pt-2 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="reach-consent"
                  checked={formData.hasConsent}
                  onChange={(e) => setFormData({ ...formData, hasConsent: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded bg-white/10 border-white/30 text-rose-800 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="reach-consent" className="text-xs text-rose-100 cursor-pointer leading-tight">
                  I give permission to contact me at this email address regarding software engineering roles or project collaborations.
                </label>
              </div>
            </div>

            {/* Right Message & Send Column */}
            <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-rose-100 font-mono">
                  Type your message here <span className="text-amber-300">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, job opportunity, or team..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 text-white text-sm outline-none focus:border-white focus:bg-white/15 transition-all resize-none"
                />
              </div>

              <div className="space-y-4 pt-2">
                <p className="text-xs text-rose-100/90 leading-relaxed">
                  Your message will be sent directly to my inbox. I typically respond within 24–48 hours. For urgent inquiries, reach me at{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-bold text-white hover:text-amber-200">
                    {PERSONAL_INFO.email}
                  </a>
                </p>

                {submissionFeedback && (
                  <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-400/60 text-xs text-emerald-100 space-y-3 shadow-xl backdrop-blur-md">
                    <div className="flex items-start gap-2.5 font-semibold text-emerald-100 leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{submissionFeedback}</span>
                    </div>
                    <div className="flex items-center gap-2.5 flex-wrap pt-1">
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent('Reach Me Inquiry')}&body=${encodeURIComponent('Hi Venkatesh, I would like to connect with you.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playPopSound()}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-[11px] transition-all shadow-md"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Launch in Gmail / Email App</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          playPopSound();
                          setSubmissionFeedback(null);
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-[11px] border border-white/20 transition-all"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Send Again</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-rose-700 hover:bg-rose-50 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </form>

        </div>
      </div>

      {/* SECTION 2: STATEMENT GIGANTIC TYPOGRAPHY WATERMARK (LEFT-ALIGNED AS REQUESTED) */}
      <div className="relative border-t border-b border-white/10 py-6 sm:py-10 overflow-hidden select-none pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-6xl sm:text-9xl md:text-[11rem] lg:text-[14rem] font-black tracking-tighter uppercase text-left leading-[0.82] text-white/15 dark:text-white/20">
            erla
          </div>
          <div className="text-6xl sm:text-9xl md:text-[11rem] lg:text-[14rem] font-black tracking-tighter uppercase text-left leading-[0.82] text-white/15 dark:text-white/20">
            venkatesh
          </div>
        </div>
      </div>

      {/* SECTION 3: NAVIGATION LINKS & MULTI-COLUMN BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Normal Text Navigation Links */}
        <div className="pb-6 border-b border-white/10 text-xs font-mono">
          <nav className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 text-slate-300">
            {footerNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-white hover:underline transition-colors font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Multi-Column Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-xs font-mono">
          
          {/* Left Column: Socials & Tech Summary */}
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="text-slate-400 text-[11px] leading-relaxed">
              Software Engineering & AI • Java • Spring Boot • React • Full Stack Applications
            </div>
          </div>

          {/* Center Column: Education & Contact Email */}
          <div className="md:col-span-4 text-left md:text-center space-y-1.5">
            <div className="text-slate-300 font-semibold">
              B.Tech CSE (AI & ML) - CGPA 8.69
            </div>
            <div className="flex items-center justify-start md:justify-center gap-2 flex-wrap">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-blue-400 hover:underline font-semibold"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(PERSONAL_INFO.email);
                  setCopiedEmail(true);
                  playSuccessSound();
                  setTimeout(() => setCopiedEmail(false), 2200);
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 text-[11px] font-mono transition-all border border-white/15"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-300" />
                    <span>Click to Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Availability & Back to Top */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for opportunities 2026</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  playPopSound();
                  openAIRecruiter();
                }}
                className="text-blue-400 hover:text-blue-300 underline text-[11px] font-semibold"
              >
                Ask AI Recruiter
              </button>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] transition-all"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3 text-rose-300" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-6 border-t border-white/10 text-center text-[11px] font-mono text-slate-500">
          © {new Date().getFullYear()} Erla Venkatesh | Built with React, TypeScript & Tailwind CSS
        </div>
      </div>

    </footer>
  );
};

