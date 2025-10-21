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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}>
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
              <li>
                <a
                  href="#hero"
                  aria-label="Home"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'hero'
                      ? 'text-foreground'
                      : 'hover:text-foreground'
                  }`}
                  style={activeSection === 'hero' 
                    ? { backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)', border: '1px solid' }
                    : { color: 'var(--text-muted)' }
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </a>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-foreground'
                        : 'hover:text-foreground'
                    }`}
                    style={activeSection === link.href.slice(1)
                      ? { backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)', border: '1px solid' }
                      : { color: 'var(--text-muted)' }
                    }
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
