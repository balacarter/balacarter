import SkillCard from '@/components/SkillCard';
import { skills } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-20">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}
