import React, { useState, useCallback } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { PortalHero } from './components/PortalHero';
import { AboutUnion } from './components/AboutUnion';
import { CollegeSection } from './components/CollegeSection';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { VoiceSection } from './components/VoiceSection';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [scrollTriggerInstance, setScrollTriggerInstance] = useState<ScrollTrigger | null>(null);

  // Initialize smooth momentum scrolling once assets are loaded
  useSmoothScroll(isPreloaderDone);

  const handlePreloaderComplete = useCallback(() => {
    setIsPreloaderDone(true);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  const handleScrollTriggerReady = useCallback((st: ScrollTrigger) => {
    setScrollTriggerInstance(st);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-blue-600 selection:text-white font-sans">
      {/* Asset Preloader Screen */}
      {!isPreloaderDone && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Floating Glassmorphic macOS Dock Navbar */}
      <Navbar scrollTriggerInstance={scrollTriggerInstance} />

      {/* Main Content Sections */}
      <main>
        {/* 3D Gate Entrance & Campus Zoom Hero (Kept Untouched) */}
        <PortalHero onScrollTriggerReady={handleScrollTriggerReady} />

        {/* Sections replicated from https://indraya.vercel.app/ */}
        <CollegeSection />
        <AboutUnion />
        <EventsSection />
        <GallerySection />
        <VoiceSection />
        <AnnouncementsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
