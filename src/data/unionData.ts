export interface Leader {
  name: string;
  position: string;
  image: string;
  row: number;
  iconName: 'User' | 'Shield' | 'BookOpen' | 'Palette' | 'GraduationCap' | 'Star';
}

export const LEADERS_DATA: Leader[] = [
  { name: 'Mazin k h', position: 'Chairperson', image: '/leadership/DSC01047.JPG.jpeg', row: 1, iconName: 'User' },
  { name: 'Arya V', position: 'Vice Chairperson', image: '/leadership/DSC01069.JPG.jpeg', row: 1, iconName: 'User' },
  { name: 'Muhammed Anwar N', position: 'General Secretary', image: '/leadership/DSC01145.JPG.jpeg', row: 1, iconName: 'Shield' },
  { name: 'Nikhil s', position: 'Magazine Editor', image: '/leadership/DSC00997.JPG.jpeg', row: 2, iconName: 'BookOpen' },
  { name: 'Muhammed Hashir K S', position: 'Arts Club Secretary', image: '/leadership/DSC00988.JPG.jpeg', row: 2, iconName: 'Palette' },
  { name: 'Mohammed Shifan C P', position: 'UUC 1', image: '/leadership/DSC01115.JPG.jpeg', row: 3, iconName: 'GraduationCap' },
  { name: 'Anju nivedha M', position: 'UUC 2', image: '/leadership/DSC01020.JPG.jpeg', row: 3, iconName: 'GraduationCap' },
  { name: 'Muzawira', position: 'Lady Rep 1', image: '/leadership/DSC01037.JPG.jpeg', row: 3, iconName: 'Star' },
  { name: 'Fathima Sithara C K', position: 'Lady Rep 2', image: '/leadership/DSC00944.JPG.jpeg', row: 3, iconName: 'Star' },
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
