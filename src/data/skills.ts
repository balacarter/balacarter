export interface Skill {
  title: string;
  description: string;
  icon: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
}

export const skills: Skill[] = [
  {
    title: 'React & Preact',
    description: 'Expert in building scalable, performant web applications with React and Preact. Specialized in component architecture and state management.',
    icon: '⚛️',
    level: 'Expert',
  },
  {
    title: 'TypeScript',
    description: 'Strong typing and modern JavaScript development. Building type-safe applications with excellent developer experience.',
    icon: '📘',
    level: 'Expert',
  },
  {
    title: 'Frontend Architecture',
    description: 'Designing and implementing scalable frontend solutions, component frameworks, and design systems for large applications.',
    icon: '🏗️',
    level: 'Advanced',
  },
  {
    title: 'Accessibility',
    description: 'Committed to building inclusive, accessible interfaces that work for everyone, following WCAG guidelines.',
    icon: '♿',
    level: 'Proficient',
  },
  {
    title: 'CSS & Styled Components',
    description: 'Modern CSS practices, responsive design, and CSS-in-JS solutions like Styled Components for beautiful interfaces.',
    icon: '🎨',
    level: 'Expert',
  },
  {
    title: 'Node.js & APIs',
    description: 'Backend development with Node.js, RESTful API design, and full-stack integration capabilities.',
    icon: '🔧',
    level: 'Proficient',
  },
];
