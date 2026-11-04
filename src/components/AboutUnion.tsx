import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { User, Shield, BookOpen, Palette, GraduationCap, Star, Heart } from 'lucide-react';
import { LEADERS_DATA } from '../data/unionData';

const iconMap = {
  User,
  Shield,
  BookOpen,
  Palette,
  GraduationCap,
  Star,
};

export const AboutUnion: React.FC = React.memo(() => {
  const groupedLeaders = useMemo(() => {
    const map: { [row: number]: typeof LEADERS_DATA } = {};
    LEADERS_DATA.forEach((leader) => {
      if (!map[leader.row]) map[leader.row] = [];
      map[leader.row].push(leader);
    });
    return Object.keys(map)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map((row) => ({
        rowNum: parseInt(row),
        leaders: map[parseInt(row)],
      }));
  }, []);

  return (
    <section id="union" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
              The People <br />
              Behind the <span className="text-blue-500 italic font-serif">Vision</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Meet the 2026 NSSCE Union—your elected voices dedicated to building a vibrant and inclusive campus community.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end">
            <div className="text-6xl font-bold text-white/5 tracking-tighter uppercase leading-none">
              Union
            </div>
            <div className="text-6xl font-bold text-white/5 tracking-tighter uppercase leading-none">
              2026
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center w-full">
          {groupedLeaders.map(({ rowNum, leaders }, rowIndex) => (
            <motion.div
              key={`row-${rowNum}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 w-full"
            >
              {leaders.map((leader) => {
                const IconComponent = iconMap[leader.iconName] || User;
                return (
                  <div
                    key={leader.position}
                    className="relative group overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 w-full max-w-[320px] sm:w-[280px] lg:w-[300px] h-[380px] flex-shrink-0"
                  >
                    <div className="w-full h-full overflow-hidden bg-zinc-800">
                      <img
                        src={leader.image}
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="600"
                        sizes="(max-width: 768px) 280px, 320px"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 opacity-75 group-hover:opacity-100"
                        alt={leader.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://via.placeholder.com/400x600?text=Leader';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div className="max-w-[75%]">
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1 leading-tight block">
                          {leader.position}
                        </p>
                        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                          {leader.name}
                        </h4>
                      </div>
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 transition-all group-hover:bg-blue-500/20 group-hover:border-blue-500/50 flex-shrink-0">
                        <IconComponent className="text-white w-5 h-5" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Special Student Voice card in row 2 (rowIndex === 1) */}
              {rowIndex === 1 && (
                <motion.div className="w-full max-w-[320px] sm:w-[280px] lg:w-[300px] h-[380px] rounded-[2.5rem] bg-blue-600 p-8 flex flex-col justify-between group overflow-hidden relative flex-shrink-0">
                  <Heart className="text-white fill-white w-10 h-10 relative z-10" />
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold text-white mb-2 italic">Student Voice.</h4>
                    <p className="text-blue-100 text-sm leading-tight">
                      Representing the heartbeat of NSSCE
                    </p>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

AboutUnion.displayName = 'AboutUnion';

