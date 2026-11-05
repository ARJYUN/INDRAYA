import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  X,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

interface MemberData {
  id: string;
  name: string;
  position: string;
  image: string;
  quote: string;
  traits: string[];
  phone?: string;
}

const MEMBERS_DATA: MemberData[] = [
  // Row 1 (5 members)
  {
    id: 'mazin',
    name: 'Mazin K H',
    position: 'Chairperson',
    image: '/leadership/DSC01047.JPG.jpeg',
    quote: 'Uniting 3000+ engineering minds into one fearless, unstoppable campus force.',
    phone: '+91 90618 88388',
    traits: ['Apex Lead', 'Student Advocacy', 'NSSCE ’26'],
  },
  {
    id: 'arya',
    name: 'Arya V',
    position: 'Vice Chairperson',
    image: '/leadership/DSC01069.JPG.jpeg',
    quote: 'Driving student welfare, transparent governance, and rapid-action campus initiatives.',
    phone: '+91 85909 05465',
    traits: ['Catalyst Lead', 'Student Affairs', 'Welfare'],
  },
  {
    id: 'anwar',
    name: 'Muhammed Anwar N',
    position: 'General Secretary',
    image: '/leadership/DSC01145.JPG.jpeg',
    quote: 'Relentless accountability, inter-department coordination, and student empowerment.',
    phone: '+91 85890 63564',
    traits: ['Operations', 'Official Liaison', 'Governance'],
  },
  {
    id: 'nikhil',
    name: 'Nikhil S',
    position: 'Magazine Editor',
    image: '/leadership/DSC00997.JPG.jpeg',
    quote: 'Documenting the soul, revolution, literature, and unspoken stories of NSSCE.',
    traits: ['Print & Ink', 'Literary Arts', 'Campus Archive'],
  },
  {
    id: 'hashir',
    name: 'Muhammed Hashir K S',
    position: 'Arts Club Secretary',
    image: '/leadership/DSC00988.JPG.jpeg',
    quote: 'Igniting the grand stage, spotlighting raw talents, and curating iconic cultural fests.',
    traits: ['Fest Director', 'Fine Arts', 'Stagecraft'],
  },
  // Row 2 (4 members)
  {
    id: 'shifan',
    name: 'Mohammed Shifan C P',
    position: 'UUC 1',
    image: '/leadership/DSC01115.JPG.jpeg',
    quote: 'Amplifying NSSCE’s voice in the university senate, defending student academic rights.',
    traits: ['Senate Delegate', 'KTU Liaison', 'Academic Policy'],
  },
  {
    id: 'anju',
    name: 'Anju Nivedha M',
    position: 'UUC 2',
    image: '/leadership/DSC01020.JPG.jpeg',
    quote: 'Bridging university leadership with our students to resolve systemic academic issues.',
    traits: ['Council Voice', 'Student Rights', 'University Body'],
  },
  {
    id: 'muzawira',
    name: 'Muzawira',
    position: 'Lady Representative',
    image: '/leadership/DSC01037.JPG.jpeg',
    quote: 'Fostering safety, equal representation, women leadership, and campus welfare.',
    traits: ['Empowerment', 'Hostel Welfare', 'Safety Voice'],
  },
  {
    id: 'sithara',
    name: 'Fathima Sithara C K',
    position: 'Lady Representative',
    image: '/leadership/DSC00944.JPG.jpeg',
    quote: 'Building inclusive platforms and empowering every woman engineer at NSSCE.',
    traits: ['Inclusion', 'Student Care', 'Campus Voice'],
  },
];

export const AboutUnion: React.FC = React.memo(() => {
  const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);

  const handleCardClick = (member: MemberData) => {
    setSelectedMember(member);
  };

  return (
    <section id="union" className="relative w-full overflow-hidden bg-[#dceafb]">
      {/* Anchor for in-page navigation */}
      <div id="team" className="absolute -top-24" />

      {/* Background Illustrated Artwork */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/team.webp"
          alt="Indraya Union Members Campus Backdrop"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full min-h-[640px] sm:min-h-[720px] md:min-h-[800px] lg:min-h-[860px] flex flex-col items-center justify-between pt-14 sm:pt-16 md:pt-20 lg:pt-24 pb-24 sm:pb-32 md:pb-40 px-4 sm:px-8 md:px-12 lg:px-18 xl:px-24">
        {/* Title Block with tapered swoosh underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-8 sm:mb-11 md:mb-13"
        >
          {/* Title Text */}
          <h2 className="font-serif italic font-black text-[#021849] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-none">
            Union Members
          </h2>

          {/* Tapered Curved Underline Swoosh */}
          <svg
            viewBox="0 0 360 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-48 sm:w-64 md:w-80 lg:w-[26rem] h-2.5 sm:h-3 md:h-3.5 text-[#0d2f81] mt-1.5 sm:mt-2 select-none"
            aria-hidden="true"
          >
            <path
              d="M2 9 C 85 1, 260 1, 358 6 C 260 11, 85 12, 2 9 Z"
              fill="currentColor"
              opacity="0.95"
            />
          </svg>
        </motion.div>

        {/* 9 Arched Member Frames Grid
            - Mobile (< md): 3 columns x 3 rows (balanced 3x3)
            - Desktop (>= md): 10-column grid (Row 1: 5 cards across; Row 2: 4 cards centered with col-start-2)
        */}
        <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <div className="grid grid-cols-3 md:grid-cols-10 gap-2.5 sm:gap-3.5 md:gap-4 lg:gap-5 xl:gap-6 justify-items-center items-end">
            {MEMBERS_DATA.map((member, index) => {
              // On desktop 10-col grid:
              // Index 0..4 (Row 1): col-span-2 each (5 cards = 10 cols)
              // Index 5 (Row 2 first item): col-start-2 col-span-2 (offsets by 1 col, centering 4 cards: cols 2-3, 4-5, 6-7, 8-9)
              // Index 6..8: col-span-2 each
              const colClass =
                index === 5
                  ? 'col-span-1 md:col-start-2 md:col-span-2'
                  : 'col-span-1 md:col-span-2';

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  whileHover={{ y: -6 }}
                  onClick={() => handleCardClick(member)}
                  className={`group w-full max-w-[170px] sm:max-w-[190px] md:max-w-none flex flex-col items-center cursor-pointer select-none ${colClass}`}
                >
                  {/* Arched Photo Frame (Dome top, vertical sides, dark blue outline) */}
                  <div className="relative aspect-[3/3.7] w-full rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] lg:rounded-t-[68px] overflow-hidden border-[2.2px] sm:border-[2.6px] border-[#0a235c] bg-[#e6f1fd]/80 shadow-sm transition-all duration-300 group-hover:shadow-[0_8px_20px_rgba(10,35,92,0.25)]">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.position}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-[center_16%] group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://via.placeholder.com/300x400?text=' +
                          encodeURIComponent(member.name);
                      }}
                    />

                    {/* Gentle hover shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a235c]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Dark Blue Base / Plinth with Member Name & Position */}
                  <div className="relative z-10 -mt-2 sm:-mt-2.5 w-[104%] sm:w-[106%] px-1.5 sm:px-2.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#0a235c] text-white shadow-[0_4px_12px_rgba(10,35,92,0.35)] border border-[#0d2f81]/40 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:bg-[#0c2e76] group-hover:shadow-[0_6px_18px_rgba(10,35,92,0.5)]">
                    <span className="font-serif font-bold text-white text-[10px] sm:text-xs md:text-[11px] lg:text-[12.5px] xl:text-[13.5px] leading-tight tracking-tight block truncate w-full">
                      {member.name}
                    </span>
                    <span className="font-sans font-semibold text-blue-200 text-[7px] sm:text-[8.5px] md:text-[8px] lg:text-[9.5px] xl:text-[10.5px] uppercase tracking-wider block mt-0.5 leading-tight truncate w-full">
                      {member.position}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cinematic bottom gradient blending the green bushes into the dark sections below */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 md:h-44 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] pointer-events-none" />

      {/* Quick Profile Modal when a Member is clicked */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#0a235c] shadow-2xl text-slate-900 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                {/* Photo in arched frame */}
                <div className="w-28 h-36 rounded-t-full overflow-hidden border-2 border-[#0a235c] bg-slate-100 shadow-md mb-4">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-[center_16%]"
                  />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-100 text-[#0a235c] text-[11px] font-black uppercase tracking-wider border border-blue-300 mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{selectedMember.position}</span>
                </div>

                <h3 className="font-serif font-black text-2xl text-[#021849] tracking-tight">
                  {selectedMember.name}
                </h3>

                {/* Quote */}
                <p className="text-slate-600 italic text-sm mt-3 px-2 leading-relaxed">
                  &ldquo;{selectedMember.quote}&rdquo;
                </p>

                {/* Trait chips */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                  {selectedMember.traits.map((trait, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-[#0a235c] border border-slate-200"
                    >
                      ✦ {trait}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-6 w-full space-y-2">
                  {selectedMember.phone && (
                    <a
                      href={`tel:${selectedMember.phone}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#0a235c] text-white hover:bg-[#0c2e76] transition-colors shadow-md"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Leader • {selectedMember.phone}</span>
                    </a>
                  )}

                  <a
                    href="#voice"
                    onClick={() => setSelectedMember(null)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-[#0a235c] transition-colors border border-slate-300"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Submit Grievance to Union</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

AboutUnion.displayName = 'AboutUnion';
