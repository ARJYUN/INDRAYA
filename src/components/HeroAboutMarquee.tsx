import React from 'react';

const marqueeItems = [
  { text: 'ഇന്ദ്രയ 2026', highlight: true, malayalam: true },
  { text: 'NSS COLLEGE OF ENGINEERING', highlight: false },
  { text: 'ESTD 1960', highlight: true },
  { text: 'AN INSTITUTION OF EXCELLENCE', highlight: false },
  { text: 'NBA ACCREDITED', highlight: true },
  { text: '125 ACRES OF GREENERY & INNOVATION', highlight: false },
  { text: 'KIRF 8TH RANK • 5TH IN PLACEMENT', highlight: true },
  { text: 'TOGETHER FOR A BETTER TOMORROW', highlight: false },
  { text: 'APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY', highlight: false },
  { text: 'STUDENT VOICE & LEADERSHIP', highlight: true },
];

export const HeroAboutMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#031333] via-[#09255a] to-[#031333] border-y border-blue-400/30 py-3 sm:py-3.5 shadow-md z-20">
      {/* Soft gradient edge fade mask */}
      <div className="absolute inset-0 pointer-events-none z-10 [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]" />

      {/* Infinite scrolling ticker */}
      <div className="flex animate-marquee-infinite select-none">
        {/* Render twice for continuous seamless loop */}
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center shrink-0">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <span
                  className={`px-4 sm:px-6 whitespace-nowrap tracking-[0.18em] uppercase text-xs sm:text-sm font-bold ${
                    item.malayalam
                      ? 'font-ml font-black text-amber-300 text-sm sm:text-base tracking-normal'
                      : item.highlight
                      ? 'text-blue-200 font-extrabold'
                      : 'text-white/90 font-semibold'
                  }`}
                >
                  {item.text}
                </span>
                {/* Glowing Diamond Separator */}
                <span className="text-amber-400/80 text-xs sm:text-sm shrink-0 select-none">
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
