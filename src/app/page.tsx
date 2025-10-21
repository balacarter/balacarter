'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Background from '@/components/Background';
import HeroImage from '@/components/HeroImage';
import ContactForm from '@/components/ContactForm';
import SkillCard from '@/components/SkillCard';
import ExperienceCard from '@/components/ExperienceCard';
import Footer from '@/components/Footer';

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
          {/* Hero Section */}
          <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
            {/* Background Geometric Shape */}
            <HeroImage />

            <div className="w-full max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Hero Text Column */}
                <div className="flex flex-col justify-center space-y-8 col-span-2 max-w-sm md:max-w-lg lg:max-w-3xl">
                  {/* Name and Title - Above Hero Text (Hidden on Desktop) */}
                  {!isSidebarVisible && (
                    <div className="mb-4">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">
                        <span className="inline-block px-2 py-1" style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--background)' }}>BALA CARTER</span>
                      </h2>
                    </div>
                  )}

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                    <span style={{ color: 'var(--accent-primary)' }}>SOFTWARE ENGINEER</span>{' '}
                    WITH A PASSION FOR{' '}
                    <span style={{ color: 'var(--accent-primary)' }}>INNOVATIVE</span> AND HUMAN FRIENDLY{' '}
                    <span style={{ color: 'var(--accent-primary)' }}>INTERFACES</span>
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <main className="max-w-4xl mx-auto px-6">
            {/* About Section */}
            <section id="about" className="min-h-screen py-20">
              {/* Glass Background Container - Only Around Text */}
              <div className="backdrop-blur-md border rounded-lg p-8" style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}>
                <h2 className="text-3xl font-bold mb-6">About</h2>
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Originally from South Africa, I am a dedicated{' '}
                    <span className="font-bold">Software Engineer</span> based
                    in Los Angeles with a deep, lifelong passion for programming
                    that first ignited in childhood through game modding and
                    website development. Equipped with a{' '}
                    <span className="font-bold">B.S. in Computer Science</span>,
                    I specialize in crafting elegant, intuitive web experiences
                    using modern technologies, primarily{' '}
                    <span className="font-bold">
                      React/Preact and TypeScript
                    </span>
                    .
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Over the last <span className="font-bold">three years</span>
                    , I&apos;ve played a central role in developing and scaling
                    innovative frontend solutions, including{' '}
                    <span className="font-bold">
                      large-scale e-commerce implementations
                    </span>{' '}
                    and the creation of{' '}
                    <span className="font-bold">
                      customizable component frameworks
                    </span>
                    . My work encompasses the full lifecycle of major projects,
                    from building innovative new features to executing extensive
                    refactors and performance improvements on core application
                    pieces. My commitment remains focused on{' '}
                    <span className="font-bold">innovation</span> and building{' '}
                    <span className="font-bold">
                      high-quality, high-performing, and truly accessible
                      interfaces
                    </span>{' '}
                    that delight users everywhere.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen py-20">
              <h2 className="text-3xl font-bold mb-8">Skills</h2>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <SkillCard
                  title="React & Preact"
                  description="Expert in building scalable, performant web applications with React and Preact. Specialized in component architecture and state management."
                  icon="⚛️"
                  level="Expert"
                />

                <SkillCard
                  title="TypeScript"
                  description="Strong typing and modern JavaScript development. Building type-safe applications with excellent developer experience."
                  icon="📘"
                  level="Expert"
                />

                <SkillCard
                  title="Frontend Architecture"
                  description="Designing and implementing scalable frontend solutions, component frameworks, and design systems for large applications."
                  icon="🏗️"
                  level="Advanced"
                />

                <SkillCard
                  title="Accessibility"
                  description="Committed to building inclusive, accessible interfaces that work for everyone, following WCAG guidelines."
                  icon="♿"
                  level="Proficient"
                />

                <SkillCard
                  title="CSS & Styled Components"
                  description="Modern CSS practices, responsive design, and CSS-in-JS solutions like Styled Components for beautiful interfaces."
                  icon="🎨"
                  level="Expert"
                />

                <SkillCard
                  title="Node.js & APIs"
                  description="Backend development with Node.js, RESTful API design, and full-stack integration capabilities."
                  icon="🔧"
                  level="Proficient"
                />
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen py-20">
              <h2 className="text-3xl font-bold mb-8">Experience</h2>

              <div className="space-y-8">
                <ExperienceCard
                  company="Cover Genius"
                  location="Remote"
                  title="Software Engineer"
                  period="March 2022 – Present"
                  achievements={[
                    'Architected and deployed a new, high-performance system for building and shipping customizable embedded insurance UI to partners, significantly improving maintainability, product desirability, and developer experience.',
                    'Drove E-commerce Revenue by developing third-party solutions for embedded insurance sales, requiring close collaboration with backend teams to integrate new features.',
                    'Enhanced Frontend Architecture through strategic refactoring of core logic (e.g., migrating styling to CSS Modules) and implementing performance optimizations (e.g., code chunking, network request optimization).',
                    'Fostered team knowledge by developing internal sandboxes for testing and leading educational workshops on the new product architecture.',
                  ]}
                  skills={[
                    'React',
                    'Preact',
                    'TypeScript',
                    'CSS Modules',
                    'System Architecture',
                  ]}
                />

                <ExperienceCard
                  company="Mercury Insurance"
                  location="California"
                  title="Frontend Developer"
                  period="March 2021 – March 2022"
                  achievements={[
                    "Integrated user data tracking for comprehensive analytics within Mercury's main insurance writing application using a custom framework.",
                    'Developed and deployed targeted user engagement tools (polls and guides) using Pendo, JavaScript, HTML, and SCSS to enhance user experience and data collection.',
                    'Created a custom Google Tag Manager framework with JavaScript to meet complex user data implementation requirements.',
                    'Styled backend templates to align with UI mockups and implemented logic to handle desired application flows and features.',
                  ]}
                  skills={[
                    'JavaScript',
                    'HTML/SCSS',
                    'Pendo',
                    'Google Tag Manager',
                  ]}
                />

                <ExperienceCard
                  company="ACTnow Foundation"
                  location="California"
                  title="Software Engineer Intern"
                  period="July 2020 – September 2020"
                  achievements={[
                    'Improved User Experience by updating the existing desktop site to be mobile-first and fully responsive across all screen sizes.',
                    "Developed the client's free test kit questionnaire using React and TypeScript to create reactive forms and ensure data integrity.",
                    'Integrated PayPal APIs and utilized TypeScript for robust error checking on input fields to facilitate client transactions.',
                  ]}
                  skills={[
                    'React',
                    'TypeScript',
                    'Responsive Design',
                    'Mobile-First',
                    'PayPal API',
                    'Form Development',
                  ]}
                />
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
              <h2 className="text-3xl font-bold mb-6">Contact</h2>
              <div className="mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Interested in working together? Feel free to reach out for
                  opportunities, collaborations, or just to say hello.
                </p>
              </div>
              <ContactForm />
            </section>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
