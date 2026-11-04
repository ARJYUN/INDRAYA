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
    <div className="relative z-20 w-full flex justify-center py-2 sm:py-3 px-4 bg-gradient-to-b from-[#f4f8ff] to-[#dceafb]">
      {/* Reduced Width Floating Rounded Marquee Pill */}
      <div className="relative w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl overflow-hidden rounded-full bg-gradient-to-r from-[#031333] via-[#09255a] to-[#031333] border border-blue-400/35 py-2 sm:py-2.5 shadow-[0_8px_24px_rgba(3,19,51,0.18)]">
        {/* Soft gradient edge fade mask */}
        <div className="absolute inset-0 pointer-events-none z-10 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]" />

        {/* Infinite scrolling ticker */}
        <div className="flex animate-marquee-infinite select-none">
          {/* Render twice for continuous seamless loop */}
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex items-center shrink-0">
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span
                    className={`px-3 sm:px-5 whitespace-nowrap tracking-[0.16em] uppercase text-[11px] sm:text-xs font-bold ${
                      item.malayalam
                        ? 'font-ml font-black text-amber-300 text-xs sm:text-sm tracking-normal'
                        : item.highlight
                        ? 'text-blue-200 font-extrabold'
                        : 'text-white/90 font-semibold'
                    }`}
                  >
                    {item.text}
                  </span>
                  {/* Glowing Diamond Separator */}
                  <span className="text-amber-400/80 text-[10px] sm:text-xs shrink-0 select-none">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

