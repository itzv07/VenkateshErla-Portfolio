import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  FileText,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, CERTIFICATIONS, PROJECTS, ACHIEVEMENTS } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { playPopSound, playSuccessSound } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  theme
}) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [customAvatar, setCustomAvatar] = useState<string | null>(() => {
    return localStorage.getItem('user_profile_avatar') || null;
  });

  if (!isOpen) return null;

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomAvatar(result);
          localStorage.setItem('user_profile_avatar', result);
          playSuccessSound();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    playSuccessSound();
    const element = document.getElementById('printable-resume');
    if (!element) {
      window.print();
      return;
    }

    // Attempt to open a dedicated print window first
    try {
      const printWin = window.open('', '_blank', 'width=850,height=1100');
      if (printWin) {
        printWin.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Venkatesh_Erla_Resume</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
              <style>
                @page { size: A4 portrait; margin: 10mm; }
                body {
                  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                  color: #111827;
                  background: #ffffff;
                  margin: 0;
                  padding: 24px;
                  -webkit-print-color-adjust: exact;
                  print-color-adjust: exact;
                }
                .print\\:hidden { display: none !important; }
              </style>
            </head>
            <body>
              <div id="resume-root">${element.innerHTML}</div>
              <script>
                window.onload = function() {
                  setTimeout(function() {
                    window.focus();
                    window.print();
                  }, 350);
                };
              </script>
            </body>
          </html>
        `);
        printWin.document.close();
        return;
      }
    } catch (e) {
      console.warn('Pop-up window print blocked, falling back to iframe print:', e);
    }

    // Fallback: create hidden print iframe
    let printIframe = document.getElementById('resume-print-iframe') as HTMLIFrameElement;
    if (!printIframe) {
      printIframe = document.createElement('iframe');
      printIframe.id = 'resume-print-iframe';
      printIframe.style.position = 'fixed';
      printIframe.style.right = '0';
      printIframe.style.bottom = '0';
      printIframe.style.width = '0';
      printIframe.style.height = '0';
      printIframe.style.border = '0';
      document.body.appendChild(printIframe);
    }

    const frameDoc = printIframe.contentWindow?.document;
    if (frameDoc) {
      frameDoc.open();
      frameDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Venkatesh_Erla_Resume</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
            <style>
              @page { size: A4 portrait; margin: 10mm; }
              body { font-family: system-ui, -apple-system, sans-serif; background: #fff; color: #111827; padding: 20px; }
            </style>
          </head>
          <body>
            <div>${element.innerHTML}</div>
          </body>
        </html>
      `);
      frameDoc.close();
      setTimeout(() => {
        printIframe.contentWindow?.focus();
        printIframe.contentWindow?.print();
      }, 350);
    } else {
      window.print();
    }
  };

  const handleDownloadPdf = async () => {
    playSuccessSound();
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsGeneratingPdf(true);

    try {
      const element = document.getElementById('printable-resume');
      if (element) {
        const html2pdf = (await import('html2pdf.js')).default;
        const opt = {
          margin: 0.4,
          filename: 'Venkatesh_Erla_Resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        await html2pdf().set(opt).from(element).save();
      } else {
        window.print();
      }
    } catch (err) {
      console.error('PDF download error, falling back to print dialog:', err);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in print:p-0 print:bg-white">
      <div
        className={`relative w-full max-w-4xl h-[90vh] overflow-y-auto rounded-3xl border flex flex-col p-6 sm:p-10 space-y-8 shadow-2xl print:h-auto print:max-w-none print:shadow-none print:border-none print:p-0 ${
          theme === 'dark' ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
        }`}
      >
        {/* Modal Actions Bar (Hidden during window print) */}
        <div className="flex flex-wrap items-center justify-between border-b border-zinc-800/60 pb-4 gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <h3 className="font-bold text-base">Venkatesh Erla — Official Resume</h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-semibold text-xs shadow-md transition-all hover:scale-105"
              title="Open system print dialog to print directly to nearby printer"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Print Resume</span>
            </button>

            {/* Real-time PDF Download Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all hover:scale-105 disabled:opacity-50"
              title="Download Venkatesh_Erla_Resume.pdf to your device"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div
          id="printable-resume"
          className="space-y-6 text-zinc-900 bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 font-sans print:p-0 print:border-none print:shadow-none"
        >
          {/* Header with Profile Photo */}
          <div className="border-b border-zinc-300 pb-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-zinc-300 shadow-md shrink-0 bg-zinc-100">
                <img
                  src={customAvatar || PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">{PERSONAL_INFO.name}</h1>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mt-1">
                  Software Engineer | Java Full Stack | AI/ML | Certified ServiceNow CAD & CSA
                </p>
              </div>
            </div>

            <div className="text-xs space-y-1 font-mono text-zinc-700 text-center sm:text-right shrink-0">
              <div>Email: {PERSONAL_INFO.email}</div>
              <div>Phone: {PERSONAL_INFO.phone}</div>
              <div>Location: Kavali, Andhra Pradesh</div>
              <div>GitHub: {PERSONAL_INFO.github}</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-zinc-900 uppercase font-mono tracking-wider border-b border-zinc-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-zinc-800">
              {PERSONAL_INFO.aboutSummary}
            </p>
          </div>

          {/* Key Technical Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-zinc-900 uppercase font-mono tracking-wider border-b border-zinc-300 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} className="p-2 rounded bg-zinc-50 border border-zinc-200">
                  <div className="font-bold text-zinc-900">{c.title}</div>
                  <div className="text-[11px] text-zinc-600 font-mono">Issuer: {c.issuer} | ID: {c.credentialId}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-zinc-900 uppercase font-mono tracking-wider border-b border-zinc-300 pb-1">
              Work Experience
            </h2>
            {EXPERIENCES.map((e) => (
              <div key={e.id} className="space-y-1 text-xs">
                <div className="flex items-start justify-between gap-4 font-bold">
                  <span className="flex-1">{e.role} — {e.company}</span>
                  <span className="font-mono text-zinc-600 shrink-0 whitespace-nowrap text-right">{e.period} | {e.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-zinc-700 text-[11px]">
                  {e.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-zinc-900 uppercase font-mono tracking-wider border-b border-zinc-300 pb-1">
              Key Projects
            </h2>
            {PROJECTS.slice(0, 4).map((p) => (
              <div key={p.id} className="space-y-1 text-xs">
                <div className="font-bold text-zinc-900">{p.title}</div>
                <p className="text-[11px] text-zinc-700">{p.description}</p>
                <div className="text-[10px] font-mono text-blue-700">Tech: {p.techStack.join(', ')}</div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-zinc-900 uppercase font-mono tracking-wider border-b border-zinc-300 pb-1">
              Education
            </h2>
            {EDUCATIONS.map((edu) => (
              <div key={edu.id} className="flex items-start justify-between gap-4 text-xs text-zinc-800">
                <div className="flex-1">
                  <span className="font-bold">{edu.degree} ({edu.field})</span> — {edu.institution}
                </div>
                <div className="font-mono text-zinc-600 shrink-0 whitespace-nowrap text-right">{edu.period} | CGPA: {edu.grade}</div>
              </div>
            ))}
          </div>

          {/* Achievements & Honors */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-zinc-900 uppercase font-mono tracking-wider border-b border-zinc-300 pb-1">
              Achievements & Honors
            </h2>
            <div className="space-y-2 text-xs text-zinc-800">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.id} className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-bold text-zinc-900">• {a.title}</span> — <span className="text-zinc-700">{a.description}</span>
                  </div>
                  <span className="font-mono text-[11px] text-zinc-600 shrink-0 whitespace-nowrap text-right pt-0.5">{a.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
