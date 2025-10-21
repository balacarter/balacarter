'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Background from '@/components/Background';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isTerminalExpanded, setIsTerminalExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile and set initial sidebar state
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // Desktop: sidebar open by default, Mobile: sidebar closed by default
      setIsSidebarVisible(!mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lock body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && isSidebarVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isSidebarVisible]);

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
          <main id="main-content" className="max-w-4xl mx-auto px-6">
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
