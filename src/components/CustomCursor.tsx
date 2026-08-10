import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch desktop screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button';
        setIsPointer(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Glowing Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-blue-500 pointer-events-none z-50 transition-transform duration-75 ease-out shadow-lg shadow-blue-500/80"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${
            isPointer ? 1.8 : 1
          })`
        }}
      />

      {/* Larger Smooth Outer Aura Ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400/40 pointer-events-none z-50 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${
            isPointer ? 1.5 : 1
          })`
        }}
      />
    </>
  );
};
