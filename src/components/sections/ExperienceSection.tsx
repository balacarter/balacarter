import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard
            key={`${exp.company}-${exp.period}`}
            company={exp.company}
            location={exp.location}
            title={exp.title}
            period={exp.period}
            achievements={exp.achievements}
            skills={exp.skills}
          />
        ))}
      </div>
    </section>
  );
}
