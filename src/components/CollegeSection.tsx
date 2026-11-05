import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Building2, Users } from 'lucide-react';
import { COLLEGE_INFO } from '../data/unionData';

export const CollegeSection: React.FC = () => {
  return (
    <section id="college" className="relative w-full min-h-screen min-h-[100dvh] overflow-hidden bg-[#dceafb] flex items-center">
      {/* Anchor for #about navigation */}
      <div id="about" className="absolute -top-24" />

      {/* Background Illustration Artwork */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/about.webp"
          alt="NSS College of Engineering Campus"
          className="w-full h-full object-cover object-[70%_center] md:object-center select-none pointer-events-none"
        />
      </div>

      {/* Main Content Overlay - Positioned on the left open-sky area (100vh) */}
      <div className="relative z-10 w-full min-h-screen min-h-[100dvh] flex items-center py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xl lg:max-w-2xl"
          >
            {/* Main Heading */}
            <h2 className="font-serif font-black text-[#021849] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[0.98] tracking-tight">
              An Institution <br />
              <span className="font-serif font-normal text-[#021849]">of </span>
              <span className="font-serif italic font-black text-[#021849]">Excellence.</span>
            </h2>

            {/* Tapered Curved Underline Swoosh */}
            <svg
              viewBox="0 0 360 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-56 sm:w-72 md:w-88 h-3 text-[#113596] mt-2 sm:mt-3 mb-5 sm:mb-7"
            >
              <path
                d="M2 9 C 85 1, 260 1, 358 6 C 260 11, 85 12, 2 9 Z"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>

            {/* Descriptive Paragraph */}
            <p className="text-[#0a235c] text-sm sm:text-base lg:text-[1.05rem] leading-relaxed font-medium max-w-lg mb-8 sm:mb-10">
              {COLLEGE_INFO.description}
            </p>

            {/* 4 Stats Transparent Container - Shifted leftward */}
            <div className="bg-transparent rounded-2xl sm:rounded-3xl p-1 sm:p-2 max-w-lg lg:max-w-xl -translate-x-3 sm:-translate-x-6 lg:-translate-x-10">
              <div className="grid grid-cols-4 items-center divide-x divide-[#0d2f81]/20">
                {/* 1. NBA Accredited */}
                <div className="flex flex-col items-center justify-center px-1 sm:px-2.5 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-[#0d2f81] text-white flex items-center justify-center shadow-md mb-2 sm:mb-2.5">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                  </div>
                  <span className="font-sans font-black text-[#021849] text-xs sm:text-base lg:text-lg uppercase tracking-tight leading-none">
                    NBA
                  </span>
                  <span className="font-sans font-bold text-[#0d2f81] text-[7.5px] sm:text-[9px] lg:text-[10px] tracking-wider uppercase mt-1 leading-tight">
                    ACCREDITED
                  </span>
                </div>

                {/* 2. 8th KIRF Rank */}
                <div className="flex flex-col items-center justify-center px-1 sm:px-2.5 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-[#0d2f81] text-white flex items-center justify-center shadow-md mb-2 sm:mb-2.5">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                  </div>
                  <span className="font-sans font-black text-[#021849] text-xs sm:text-base lg:text-lg tracking-tight leading-none">
                    8th
                  </span>
                  <span className="font-sans font-bold text-[#0d2f81] text-[7.5px] sm:text-[9px] lg:text-[10px] tracking-wider uppercase mt-1 leading-tight">
                    KIRF RANK
                  </span>
                </div>

                {/* 3. 5th KIRF Placement */}
                <div className="flex flex-col items-center justify-center px-1 sm:px-2.5 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-[#0d2f81] text-white flex items-center justify-center shadow-md mb-2 sm:mb-2.5">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                  </div>
                  <span className="font-sans font-black text-[#021849] text-xs sm:text-base lg:text-lg tracking-tight leading-none">
                    5th
                  </span>
                  <span className="font-sans font-bold text-[#0d2f81] text-[7.5px] sm:text-[9px] lg:text-[10px] tracking-wider uppercase mt-1 leading-tight">
                    KIRF PLACEMENT
                  </span>
                </div>

                {/* 4. 3000+ Students */}
                <div className="flex flex-col items-center justify-center px-1 sm:px-2.5 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-[#0d2f81] text-white flex items-center justify-center shadow-md mb-2 sm:mb-2.5">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                  </div>
                  <span className="font-sans font-black text-[#021849] text-xs sm:text-base lg:text-lg tracking-tight leading-none">
                    3000+
                  </span>
                  <span className="font-sans font-bold text-[#0d2f81] text-[7.5px] sm:text-[9px] lg:text-[10px] tracking-wider uppercase mt-1 leading-tight">
                    STUDENTS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle blend into the Team section below */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0a235c]/10 pointer-events-none" />
    </section>
  );
};
