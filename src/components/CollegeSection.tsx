import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Building2, Users } from 'lucide-react';
import { COLLEGE_STATS, COLLEGE_INFO } from '../data/unionData';

const statIcons = {
  GraduationCap,
  Award,
  Building2,
  Users,
};

export const CollegeSection: React.FC = () => {
  return (
    <section id="college" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Institution Card */}
          <div className="md:col-span-7 bg-zinc-900 rounded-[3rem] p-12 border border-white/5 flex flex-col justify-between overflow-hidden relative group min-h-[400px]">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                An Institution <br />
                of <span className="text-blue-500 italic font-serif">Excellence.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                {COLLEGE_INFO.description}
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
          </div>

          {/* Campus Image Card */}
          <div className="md:col-span-5 relative group overflow-hidden rounded-[3rem] border border-white/5 min-h-[400px]">
            <a
              href={COLLEGE_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full absolute inset-0 group"
            >
              <img
                src={COLLEGE_INFO.campusImage}
                alt="NSSCE Campus"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white/60 text-xs font-black uppercase tracking-[0.3em]">
                  NSSCE Palakkad
                </p>
                <h4 className="text-white text-2xl font-bold">125 Acres of Greenery</h4>
              </div>
            </a>
          </div>

          {/* 4 Stat Cards */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {COLLEGE_STATS.map((stat, idx) => {
              const IconComp = statIcons[stat.iconName] || GraduationCap;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} p-4 mb-6 opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
                  >
                    <IconComp className="text-white w-full h-full" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2 tracking-tighter">
                    {stat.number}
                  </h3>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

