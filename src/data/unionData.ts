export interface Leader {
  id: string;
  name: string;
  position: string;
  image: string;
  row: number;
  iconName: 'User' | 'Shield' | 'BookOpen' | 'Palette' | 'GraduationCap' | 'Star';
  category: 'executive' | 'creative' | 'council';
  cardNumber: string;
  title: string;
  quote: string;
  traits: string[];
  theme: {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    accentColor: string;
    cardHighlight: string;
    shadowColor: string;
  };
  phone?: string;
}

export const LEADERS_DATA: Leader[] = [
  {
    id: 'mazin',
    name: 'Mazin K H',
    position: 'Chairperson',
    image: '/leadership/DSC01047.JPG.jpeg',
    row: 1,
    iconName: 'User',
    category: 'executive',
    cardNumber: '01',
    title: 'The Helm',
    quote: 'Uniting 3000+ engineering minds into one fearless, unstoppable campus force.',
    traits: ['Apex Lead', 'Student Advocacy', 'NSSCE ’26'],
    theme: {
      badgeBg: 'bg-amber-100 text-amber-950',
      badgeText: 'text-amber-800',
      badgeBorder: 'border-amber-400',
      accentColor: '#f59e0b',
      cardHighlight: 'border-amber-400',
      shadowColor: '#d97706',
    },
    phone: '+91 90618 88388',
  },
  {
    id: 'arya',
    name: 'Arya V',
    position: 'Vice Chairperson',
    image: '/leadership/DSC01069.JPG.jpeg',
    row: 1,
    iconName: 'User',
    category: 'executive',
    cardNumber: '02',
    title: 'The Catalyst',
    quote: 'Driving student welfare, transparent governance, and rapid-action campus initiatives.',
    traits: ['Catalyst Lead', 'Student Affairs', 'Welfare'],
    theme: {
      badgeBg: 'bg-sky-100 text-sky-950',
      badgeText: 'text-sky-800',
      badgeBorder: 'border-sky-400',
      accentColor: '#0284c7',
      cardHighlight: 'border-sky-400',
      shadowColor: '#0284c7',
    },
    phone: '+91 85909 05465',
  },
  {
    id: 'anwar',
    name: 'Muhammed Anwar N',
    position: 'General Secretary',
    image: '/leadership/DSC01145.JPG.jpeg',
    row: 1,
    iconName: 'Shield',
    category: 'executive',
    cardNumber: '03',
    title: 'The Anchor',
    quote: 'Relentless accountability, inter-department coordination, and student empowerment.',
    traits: ['Operations', 'Official Liaison', 'Governance'],
    theme: {
      badgeBg: 'bg-rose-100 text-rose-950',
      badgeText: 'text-rose-800',
      badgeBorder: 'border-rose-400',
      accentColor: '#e11d48',
      cardHighlight: 'border-rose-400',
      shadowColor: '#e11d48',
    },
    phone: '+91 85890 63564',
  },
  {
    id: 'nikhil',
    name: 'Nikhil S',
    position: 'Magazine Editor',
    image: '/leadership/DSC00997.JPG.jpeg',
    row: 2,
    iconName: 'BookOpen',
    category: 'creative',
    cardNumber: '04',
    title: 'The Chronicler',
    quote: 'Documenting the soul, revolution, literature, and unspoken stories of NSSCE.',
    traits: ['Print & Ink', 'Literary Arts', 'Campus Archive'],
    theme: {
      badgeBg: 'bg-emerald-100 text-emerald-950',
      badgeText: 'text-emerald-800',
      badgeBorder: 'border-emerald-400',
      accentColor: '#10b981',
      cardHighlight: 'border-emerald-400',
      shadowColor: '#059669',
    },
  },
  {
    id: 'hashir',
    name: 'Muhammed Hashir K S',
    position: 'Arts Club Secretary',
    image: '/leadership/DSC00988.JPG.jpeg',
    row: 2,
    iconName: 'Palette',
    category: 'creative',
    cardNumber: '05',
    title: 'The Maestro',
    quote: 'Igniting the grand stage, spotlighting raw talents, and curating iconic cultural fests.',
    traits: ['Fest Director', 'Fine Arts', 'Stagecraft'],
    theme: {
      badgeBg: 'bg-purple-100 text-purple-950',
      badgeText: 'text-purple-800',
      badgeBorder: 'border-purple-400',
      accentColor: '#9333ea',
      cardHighlight: 'border-purple-400',
      shadowColor: '#7e22ce',
    },
  },
  {
    id: 'shifan',
    name: 'Mohammed Shifan C P',
    position: 'University Union Councillor (UUC)',
    image: '/leadership/DSC01115.JPG.jpeg',
    row: 3,
    iconName: 'GraduationCap',
    category: 'council',
    cardNumber: '06',
    title: 'The Envoy',
    quote: 'Amplifying NSSCE’s voice in the university senate, defending student academic rights.',
    traits: ['Senate Delegate', 'KTU Liaison', 'Academic Policy'],
    theme: {
      badgeBg: 'bg-indigo-100 text-indigo-950',
      badgeText: 'text-indigo-800',
      badgeBorder: 'border-indigo-400',
      accentColor: '#6366f1',
      cardHighlight: 'border-indigo-400',
      shadowColor: '#4f46e5',
    },
  },
  {
    id: 'anju',
    name: 'Anju Nivedha M',
    position: 'University Union Councillor (UUC)',
    image: '/leadership/DSC01020.JPG.jpeg',
    row: 3,
    iconName: 'GraduationCap',
    category: 'council',
    cardNumber: '07',
    title: 'The Diplomat',
    quote: 'Bridging university leadership with our students to resolve systemic academic issues.',
    traits: ['Council Voice', 'Student Rights', 'University Body'],
    theme: {
      badgeBg: 'bg-cyan-100 text-cyan-950',
      badgeText: 'text-cyan-800',
      badgeBorder: 'border-cyan-400',
      accentColor: '#0891b2',
      cardHighlight: 'border-cyan-400',
      shadowColor: '#0e7490',
    },
  },
  {
    id: 'muzawira',
    name: 'Muzawira',
    position: 'Lady Representative',
    image: '/leadership/DSC01037.JPG.jpeg',
    row: 3,
    iconName: 'Star',
    category: 'council',
    cardNumber: '08',
    title: 'The Vanguard',
    quote: 'Fostering safety, equal representation, women leadership, and campus welfare.',
    traits: ['Empowerment', 'Hostel Welfare', 'Safety Voice'],
    theme: {
      badgeBg: 'bg-orange-100 text-orange-950',
      badgeText: 'text-orange-800',
      badgeBorder: 'border-orange-400',
      accentColor: '#f97316',
      cardHighlight: 'border-orange-400',
      shadowColor: '#ea580c',
    },
  },
  {
    id: 'sithara',
    name: 'Fathima Sithara C K',
    position: 'Lady Representative',
    image: '/leadership/DSC00944.JPG.jpeg',
    row: 3,
    iconName: 'Star',
    category: 'council',
    cardNumber: '09',
    title: 'The Beacon',
    quote: 'Building inclusive platforms and empowering every woman engineer at NSSCE.',
    traits: ['Inclusion', 'Student Care', 'Campus Voice'],
    theme: {
      badgeBg: 'bg-pink-100 text-pink-950',
      badgeText: 'text-pink-800',
      badgeBorder: 'border-pink-400',
      accentColor: '#ec4899',
      cardHighlight: 'border-pink-400',
      shadowColor: '#db2777',
    },
  },
];

export interface CollegeStat {
  number: string;
  label: string;
  iconName: 'GraduationCap' | 'Award' | 'Building2' | 'Users';
  color: string;
}

export const COLLEGE_STATS: CollegeStat[] = [
  { number: 'NBA ACCREDITED', label: '', iconName: 'GraduationCap', color: 'from-blue-400 to-indigo-600' },
  { number: '8th', label: 'KIRF Rank', iconName: 'Award', color: 'from-emerald-500 to-teal-600' },
  { number: '5th', label: 'KIRF Placement', iconName: 'Building2', color: 'from-orange-500 to-red-600' },
  { number: '3000+', label: 'Students', iconName: 'Users', color: 'from-purple-500 to-pink-600' },
];

export interface EventData {
  _id: string;
  title: string;
  eventDate: string;
  location: string;
  posterImage: string;
}

export const EVENTS_DATA: EventData[] = [
  {
    _id: 'union-inauguration-2026',
    title: 'Union Inauguration Day',
    eventDate: '2025-03-16',
    location: 'College Auditorium',
    posterImage: '/events/inag.jpeg',
  },
];

export const COLLEGE_INFO = {
  name: 'NSS College of Engineering',
  tagline: "An Institution of Excellence'.",
  description: "Since 1960, NSS College OF Engineering,Palakkad has been the incubator for India's brightest engineering minds. Spanning 125 acres of innovation and technical excellence.",
  address: 'NSS Nagar, Akathethara, Palakkad, Kerala - 678008',
  mapsUrl: 'https://maps.app.goo.gl/s4LKv8Y6CaxnhxTM6',
  campusImage: '/IMG_4230.png',
  website: 'https://www.nssce.ac.in/',
  email: 'collegeunionnssce2026@gmail.com',
  grievanceEmail: 'suggestionsofnssce@gmail.com',
  instagram: 'https://www.instagram.com/indraya_college.union.nssce/',
  contacts: [
    { role: 'Chairperson', name: 'Mazin', phone: '+91 90618 88388' },
    { role: 'Vice Chairperson', name: 'Arya', phone: '+91 85909 05465' },
    { role: 'General Secretary', name: 'Anwar', phone: '+91 85890 63564' },
  ],
};
