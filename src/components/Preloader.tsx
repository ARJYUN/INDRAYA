import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const ASSETS_TO_PRELOAD = [
  '/assets/hero.webp',
  '/assets/frame.webp',
  '/assets/leaf-left.webp',
  '/assets/leaf-right.webp',
  '/assets/window-view.webp',
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const total = ASSETS_TO_PRELOAD.length;

    const updateProgress = () => {
      loadedCount++;
      const currentPercent = Math.round((loadedCount / total) * 100);
      setProgress(currentPercent);

      if (loadedCount >= total) {
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    };

    ASSETS_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // gracefully continue even if an image fails
    });

    // Fallback timer so it never hangs
    const timeout = setTimeout(() => {
      setProgress(100);
      setIsLoaded(true);
      onComplete();
    }, 3500);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-white via-[#f0f6ff] to-[#e4efff]"
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-blue/10 blur-3xl pointer-events-none animate-pulse-subtle" />

          {/* Emblem & Branding */}
          <div className="relative flex flex-col items-center text-center px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-24 h-24 mb-6 flex items-center justify-center rounded-3xl bg-gradient-to-tr from-navy to-blue shadow-2xl text-white"
            >
              <span className="font-ml font-extrabold text-5xl select-none">ഇ</span>
              <div className="absolute inset-0 rounded-3xl border-2 border-white/30 animate-ping opacity-20 pointer-events-none" />
            </motion.div>

            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-ml font-extrabold text-4xl sm:text-5xl text-navy tracking-tight mb-1"
            >
              ഇന്ദ്രയ
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-ui font-semibold text-xs tracking-[0.35em] text-blue uppercase mb-2 pl-1"
            >
              COLLEGE UNION
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xs font-medium text-ink/70 tracking-widest uppercase mb-8"
            >
              NSS COLLEGE OF ENGINEERING
            </motion.p>

            {/* Progress Bar */}
            <div className="w-56 h-1.5 bg-blue-100 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-blue to-navy rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </div>

            <span className="mt-3 text-[11px] font-mono font-medium text-navy/60">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

