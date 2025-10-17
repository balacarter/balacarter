'use client';

import { useEffect, useState } from 'react';
import InitialsIcon from './InitialsIcon';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('');

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto px-4 md:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Initials Icon - Sidebar Toggle */}
          <button
            onClick={onToggleSidebar}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Toggle sidebar"
          >
            <InitialsIcon />
          </button>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'bg-gray-200 dark:bg-gray-800 text-foreground'
                        : 'text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
