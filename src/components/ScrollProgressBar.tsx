import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-zinc-950/20 dark:bg-zinc-900/40 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(59,130,246,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
