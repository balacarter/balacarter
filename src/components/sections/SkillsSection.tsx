import SkillCard from '../SkillCard';

export default function SkillsSection() {
  return (
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
  );
}
