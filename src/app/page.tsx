'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Background from '@/components/Background';
import Footer from '@/components/Footer';
import SkipLink from '@/components/ui/SkipLink';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useScrollLock } from '@/hooks/useScrollLock';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const [isSidebarVisible, setIsSidebarVisible] = useState(!isMobile);
  const [isTerminalExpanded, setIsTerminalExpanded] = useState(false);

  // Lock body scroll when sidebar is open on mobile
  useScrollLock(isMobile && isSidebarVisible);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div className="min-h-screen text-foreground relative overflow-x-hidden">
      <SkipLink />
      <Background />
      <Header onToggleSidebar={toggleSidebar} />

      <div className="flex">
        <Sidebar
          isVisible={isSidebarVisible}
          isExpanded={isTerminalExpanded}
          onExpand={() => setIsTerminalExpanded(true)}
          onCollapse={() => setIsTerminalExpanded(false)}
          onContactClick={scrollToContact}
          onClose={closeSidebar}
        />

        {/* Main Content - with left margin when sidebar visible on desktop */}
        <div
          id="main-content"
          className={`flex-1 transition-all duration-300 ${
            isSidebarVisible
              ? isTerminalExpanded
                ? 'lg:ml-[700px]'
                : 'lg:ml-96'
              : 'lg:ml-0'
          }`}
        >
          <HeroSection isSidebarVisible={isSidebarVisible} />

          {/* Main Content */}
          <main className="max-w-4xl mx-auto px-6">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
