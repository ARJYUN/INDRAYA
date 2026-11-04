import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Crown,
  Shield,
  BookOpen,
  Palette,
  GraduationCap,
  Star,
  Phone,
  Sparkles,
  Flame,
  CheckCircle2,
  ArrowRight,
  Heart,
  Layers,
} from 'lucide-react';
import { LEADERS_DATA, Leader } from '../data/unionData';

const roleIcons: Record<string, React.ElementType> = {
  User: Crown,
  Shield: Shield,
  BookOpen: BookOpen,
  Palette: Palette,
  GraduationCap: GraduationCap,
  Star: Star,
};

type FilterCategory = 'all' | 'executive' | 'creative' | 'council';

export const AboutUnion: React.FC = React.memo(() => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredLeaders = useMemo(() => {
    if (activeCategory === 'all') return LEADERS_DATA;
    return LEADERS_DATA.filter((leader) => leader.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="union" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#060a12] text-white overflow-hidden">
      {/* Comic Halftone Dot Matrix Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Comic Color Glow Flares */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          {/* Eyebrow Comic Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-300 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase border-2 border-black shadow-[3px_3px_0px_#000] mb-5 -rotate-1 hover:rotate-0 transition-transform cursor-default"
          >
            <Sparkles className="w-4 h-4 text-amber-950 fill-amber-950" />
            <span>Official NSSCE Union Roster • 2026</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] max-w-4xl"
          >
            MEET THE CAMPUS{' '}
            <span className="relative inline-block text-amber-400 italic font-serif">
              CHAMPIONS
              {/* Comic Wavy Underline */}
              <svg
                viewBox="0 0 280 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-3 sm:h-4 text-amber-400 mt-1"
                aria-hidden="true"
              >
                <path
                  d="M3 14 C 40 4, 80 4, 120 12 C 160 20, 200 4, 277 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          {/* Cartoon Speech Bubble Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mt-6 max-w-2xl bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-[2.5px] border-black shadow-[5px_5px_0px_#000]"
          >
            {/* Speech bubble arrow pointing up */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[12px] border-b-black"
              aria-hidden="true"
            />
            <div
              className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-white z-10"
              aria-hidden="true"
            />
            <p className="text-sm sm:text-base font-semibold leading-relaxed">
              &ldquo;Nine elected champions, 3000+ engineers, one fearless voice. Working 24/7 for student welfare, campus culture, and university representation.&rdquo;
            </p>
            <div className="mt-2.5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Status: Active &amp; On Campus
            </div>
          </motion.div>
        </div>

        {/* Category Filter Pills (Neo-brutalist buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16">
          {[
            { id: 'all', label: 'All Champions', count: 9, icon: Layers },
            { id: 'executive', label: 'Executive Apex', count: 3, icon: Crown },
            { id: 'creative', label: 'Arts & Media', count: 2, icon: Palette },
            { id: 'council', label: 'Council & Reps', count: 4, icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as FilterCategory)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center gap-2 border-[2.5px] border-black ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-[4px_4px_0px_#000] -translate-y-1'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 shadow-[2px_2px_0px_#000]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-black ${
                    isActive
                      ? 'bg-black text-amber-300'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Character Card Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          <AnimatePresence mode="popLayout">
            {filteredLeaders.map((leader, index) => {
              const RoleIcon = roleIcons[leader.iconName] || Crown;
              const isTapeTiltedLeft = index % 2 === 0;

              return (
                <motion.div
                  layout
                  key={leader.id}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  style={
                    {
                      '--card-shadow': leader.theme.shadowColor,
                    } as React.CSSProperties
                  }
                  className="group relative bg-[#ffffff] text-slate-950 rounded-3xl p-5 sm:p-6 border-[2.8px] border-black shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] hover:shadow-[10px_10px_0px_var(--card-shadow)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Comic Washi Tape / Tape Strip on Top */}
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-amber-200/95 border border-amber-400/80 shadow-sm rounded-[2px] z-20 flex items-center justify-center font-mono text-[9px] font-black text-amber-950 tracking-widest uppercase select-none ${
                      isTapeTiltedLeft ? '-rotate-2' : 'rotate-2'
                    }`}
                  >
                    ★ ROSTER 2026 ★
                  </div>

                  <div>
                    {/* Top Comic Info Strip */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 text-white font-mono text-xs font-black tracking-wider border border-black shadow-[2px_2px_0px_#000]">
                        <span>#{leader.cardNumber}</span>
                      </div>

                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase border ${leader.theme.badgeBg} ${leader.theme.badgeBorder}`}
                      >
                        <RoleIcon className="w-3.5 h-3.5" />
                        <span>{leader.title}</span>
                      </div>
                    </div>

                    {/* Character Portrait Frame */}
                    <div className="relative aspect-[4/4.1] overflow-hidden rounded-2xl border-2 border-black bg-slate-100 shadow-[3px_3px_0px_#000] mb-4">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.position}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500 ease-out"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://via.placeholder.com/600x600?text=' +
                            encodeURIComponent(leader.name);
                        }}
                      />

                      {/* Comic Half-Tone Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Floating Bottom Stamp on Photo */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                        <span className="text-[10px] font-black tracking-wider uppercase text-white bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/20">
                          {leader.position}
                        </span>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black animate-pulse" />
                      </div>
                    </div>

                    {/* Leader Name & Position */}
                    <h3 className="font-sans font-black text-slate-950 text-xl sm:text-2xl tracking-tight leading-snug group-hover:text-blue-700 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-500 mt-0.5 mb-3">
                      {leader.position}
                    </p>

                    {/* Comic Thought / Speech Snippet */}
                    <div className="relative bg-slate-100/90 rounded-xl p-3 border border-slate-300 text-xs font-semibold text-slate-700 italic leading-relaxed mb-4">
                      &ldquo;{leader.quote}&rdquo;
                    </div>
                  </div>

                  {/* Bottom Attributes & Actions */}
                  <div className="pt-2 border-t border-slate-200/80">
                    {/* Trait Chips (Comic RPG Stats) */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {leader.traits.map((trait, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-300"
                        >
                          ✦ {trait}
                        </span>
                      ))}
                    </div>

                    {/* Call / Contact Action or Official Badge */}
                    {leader.phone ? (
                      <a
                        href={`tel:${leader.phone}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider bg-slate-950 text-white hover:bg-blue-600 transition-colors border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Direct Call • {leader.phone}</span>
                      </a>
                    ) : (
                      <div className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-[11px] uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Elected NSSCE Delegate</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Special 10th Card: "POW! Student Voice & Action" */}
            {activeCategory === 'all' && (
              <motion.div
                layout
                key="student-voice-card"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-7 border-[2.8px] border-black shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] flex flex-col justify-between overflow-hidden group hover:shadow-[10px_10px_0px_#38bdf8] hover:-translate-y-2 transition-all duration-300"
              >
                {/* Washi tape on top */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-yellow-300 border border-yellow-400 shadow-sm rounded-[2px] z-20 flex items-center justify-center font-mono text-[9px] font-black text-slate-950 tracking-widest uppercase select-none -rotate-1">
                  ★ HOTLINE 24/7 ★
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-black uppercase tracking-wider text-white">
                      <Flame className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                      Student Advocacy
                    </span>
                    <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
                    HAVE AN IDEA <br />
                    OR GRIEVANCE?
                  </h3>

                  <p className="text-blue-100 text-sm leading-relaxed mb-6 font-medium">
                    The College Union exists to champion your vision. Whether it&apos;s a cultural fest idea, academic concern, or campus amenity issue, reach out directly.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="#voice"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-black text-xs uppercase tracking-wider bg-yellow-400 text-slate-950 hover:bg-yellow-300 transition-colors border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    <span>Submit to Grievance Desk</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/30"
                  >
                    <span>View Union Contact Directory</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
});

AboutUnion.displayName = 'AboutUnion';
