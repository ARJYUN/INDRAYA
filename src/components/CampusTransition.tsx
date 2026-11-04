import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Sparkles, Award, Trees, Compass } from 'lucide-react';

export const CampusTransition: React.FC = () => {
  const highlights = [
    { icon: Landmark, text: 'Founded 1960' },
    { icon: Trees, text: '125-Acre Green Campus' },
    { icon: Award, text: 'Autonomous • NBA Accredited' },
    { icon: Sparkles, text: 'APJ Abdul Kalam Tech. University' },
    { icon: Compass, text: 'Akathethara, Palakkad' },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#f4f8ff] via-[#eaf3fd] to-[#dceafb] pt-10 pb-6">
      {/* Ambient Sunbeam / Gateway Light Spill from the Open Portal above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(90vw,1000px)] h-48 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(255,255,255,0.95),rgba(219,235,251,0.5)_60%,transparent_100%)] pointer-events-none" />

      {/* Decorative vertical connecting guide line from the gate above */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Subtle glowing connecting stem */}
          <div className="w-[1.5px] h-9 bg-gradient-to-b from-[#0a2f8f]/40 to-[#0a2f8f]/10 rounded-full mb-3" />

          {/* Centered Heritage Seal Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-6 py-2 rounded-full bg-white/75 backdrop-blur-md border border-[#0a2f8f]/15 shadow-[0_4px_20px_rgba(10,47,143,0.06)] mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-sans font-bold text-[#0a2f8f] text-[11px] sm:text-xs tracking-[0.2em] uppercase">
              ESTD 1960 • NSS COLLEGE OF ENGINEERING • PALAKKAD
            </span>
          </div>
        </motion.div>

        {/* Floating Heritage Highlights Pill Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-5xl px-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/55 backdrop-blur-sm border border-white/80 shadow-sm text-[#0d2f81] text-xs font-semibold transition-all hover:bg-white/80 hover:shadow-md cursor-default"
            >
              <item.icon size={13} className="text-[#1a4fd1] shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Soft downward guidance indicator */}
        <div className="mt-5 flex flex-col items-center opacity-40">
          <div className="w-[1px] h-6 bg-gradient-to-b from-[#0a2f8f]/20 via-[#0a2f8f]/40 to-transparent" />
        </div>
      </div>

      {/* Layered watercolor cloud contour at the bottom to melt into about.webp sky */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden pointer-events-none leading-none">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 text-[#dceafb] preserve-3d"
        >
          <path
            d="M0 24 C 240 40, 480 8, 720 28 C 960 48, 1200 12, 1440 24 L 1440 48 L 0 48 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};
