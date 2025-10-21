export interface CommandResult {
  output: string[];
  error?: boolean;
}

/**
 * Terminal command definitions
 * Separated from component for better maintainability
 */
export const TERMINAL_COMMANDS: Record<string, CommandResult> = {
  help: {
    output: [
      'Available commands:',
      '  about          - Learn about me',
      '  skills         - View my technical skills',
      '  experience     - See my work experience',
      '  projects       - Check out my projects',
      '  contact        - Get in touch',
      '  navigate <section> - Jump to a section (about, skills, experience, contact)',
      '  clear          - Clear the terminal',
      '  help           - Show this help message',
    ],
  },
  about: {
    output: [
      'Bala Carter',
      'Software Engineer',
      '',
      'Frontend specialist transitioning to full-stack development.',
      'Passionate about building modern, performant web applications.',
      '',
      'Currently working with React, TypeScript, and Node.js.',
    ],
  },
  skills: {
    output: [
      'Technical Skills:',
      '',
      '  Frontend:',
      '    • React, Preact, Next.js',
      '    • TypeScript, JavaScript',
      '    • HTML5, CSS3, Tailwind CSS',
      '    • Responsive Design, Accessibility',
      '',
      '  Backend (Learning):',
      '    • Node.js, Express',
      '    • Python, FastAPI',
      '    • RESTful APIs',
      '',
      '  Tools & Other:',
      '    • Git, GitHub',
      '    • VS Code, Windsurf',
      '    • Performance Optimization',
    ],
  },
  experience: {
    output: [
      'Work Experience:',
      '',
      '  Cover Genius (March 2022 – Present)',
      '  Software Engineer | Remote',
      '    • Built customizable embedded insurance UI system',
      '    • Enhanced frontend architecture and performance',
      '',
      '  Mercury Insurance (March 2021 – March 2022)',
      '  Frontend Developer | California',
      '    • Integrated analytics and user engagement tools',
      '    • Created custom Google Tag Manager framework',
      '',
      '  ACTnow Foundation (July 2020 – Sept 2020)',
      '  Software Engineer Intern | California',
      '    • Developed mobile-first responsive website',
      '    • Built React forms with TypeScript',
    ],
  },
  projects: {
    output: [
      'Featured Projects:',
      '',
      '  This Portfolio Website',
      '    • Built with Next.js 15, TypeScript, Three.js',
      '    • Features interactive 3D graphics and terminal',
      '    • Fully accessible and SEO optimized',
      '',
      '  More projects coming soon!',
      '  Check my GitHub: github.com/balacarter',
    ],
  },
  contact: {
    output: [
      'Get in Touch:',
      '',
      '  LinkedIn: linkedin.com/in/balacarter',
      '  GitHub: github.com/balacarter',
      '  Email: Use the contact form below',
      '',
      'Or type: navigate contact',
    ],
  },
};

export const VALID_SECTIONS = ['about', 'skills', 'experience', 'contact'] as const;
export type ValidSection = typeof VALID_SECTIONS[number];
