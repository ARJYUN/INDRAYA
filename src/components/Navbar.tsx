import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, GraduationCap, CalendarDays, Maximize2, MessageSquare, Menu, X } from 'lucide-react';
import { Dock } from './Dock';
import { getLenis } from '../hooks/useSmoothScroll';

interface NavbarProps {
  scrollTriggerInstance?: any;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#', icon: <Home size={18} /> },
    { name: 'Union', href: '#union', icon: <Users size={18} /> },
    { name: 'College', href: '#college', icon: <GraduationCap size={18} /> },
    { name: 'Events', href: '#events', icon: <CalendarDays size={18} /> },
    { name: 'Gallery', href: '#gallery', icon: <Maximize2 size={18} /> },
    { name: 'Voice', href: '#complaints', icon: <MessageSquare size={18} /> },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const lenis = getLenis();
    if (href === '#' || href === '#home') {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const targetId = href.startsWith('#') ? href.slice(1) : href;
    const el = document.getElementById(targetId);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { duration: 1.2, offset: -20 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const dockItems = navItems.map((item) => ({
    icon: item.icon,
    label: item.name,
    onClick: () => handleNavClick(item.href),
  }));

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 py-6 px-4 flex justify-center pointer-events-none">
      {/* Brand logo top-left */}
      <div className="hidden md:block absolute left-12 top-10 pointer-events-auto">
        <a href="/" className="text-xl font-bold text-white tracking-tighter">
          <span className="text-blue-500">UNION</span>'26
        </a>
      </div>

      {/* Floating Center Dock */}
      <div
        className={`flex items-center transition-all duration-500 pointer-events-auto ${
          isScrolled ? 'translate-y-2' : ''
        }`}
      >
        <div className="hidden md:flex items-center gap-4">
          <Dock items={dockItems} panelHeight={68} baseItemSize={50} magnification={70} />
        </div>

        {/* Mobile Nav Header */}
        <div
          className={`md:hidden flex justify-between items-center h-14 w-screen px-6 rounded-full border border-white/5 ${
            isScrolled ? 'bg-black/40 backdrop-blur-2xl shadow-2xl' : 'bg-black/20 backdrop-blur-md'
          }`}
        >
          <a href="/" className="text-xl font-bold text-white tracking-tighter">
            NSSCE<span className="text-blue-500">.</span>UNION
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-zinc-900/95 backdrop-blur-3xl rounded-[2rem] p-8 border border-white/10 md:hidden shadow-2xl pointer-events-auto"
          >
            <div className="space-y-4 text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    handleNavClick(item.href);
                  }}
                  className="block text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
