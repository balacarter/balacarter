'use client';

interface ExperienceCardProps {
  company: string;
  location: string;
  title: string;
  period: string;
  achievements: string[];
  skills: string[];
}

export default function ExperienceCard({
  company,
  location,
  title,
  period,
  achievements,
  skills,
}: ExperienceCardProps) {
  return (
    <div 
      className="group relative rounded-xl border backdrop-blur-md p-6 transition-all duration-300"
      style={{ 
        backgroundColor: 'var(--glass-bg)', 
        borderColor: 'var(--glass-border)'
      }}
    >
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to bottom right, rgba(251, 191, 36, 0.05), rgba(74, 139, 92, 0.05))' }}
      ></div>

      <div className="relative z-10">
        {/* Header - Company and Period */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="min-w-0">
            <h3 className="text-2xl font-bold text-foreground mb-1 transition-colors">
              {company}
            </h3>
            <p className="text-lg font-semibold text-foreground mb-1">
              {title}
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {location}
            </p>
          </div>
          <div className="flex-shrink-0">
            <span 
              className="inline-block px-4 py-2 rounded-full border text-sm font-semibold"
              style={{ 
                backgroundColor: 'rgba(251, 191, 36, 0.1)', 
                borderColor: 'rgba(251, 191, 36, 0.2)',
                color: 'var(--accent-primary)'
              }}
            >
              {period}
            </span>
          </div>
        </div>

        {/* Achievements */}
        <ul className="space-y-3 mb-6">
          {achievements.map((achievement, index) => {
            // Bold text before "by" if it exists
            const parts = achievement.split(' by ');
            const hasBoldSection = parts.length > 1;

            return (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
                <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {hasBoldSection ? (
                    <>
                      <span className="font-bold">{parts[0]}</span> by{' '}
                      {parts[1]}
                    </>
                  ) : (
                    achievement
                  )}
                </p>
              </li>
            );
          })}
        </ul>

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200"
              style={{ 
                backgroundColor: 'rgba(74, 139, 92, 0.1)', 
                color: 'var(--text-muted)',
                borderColor: 'var(--glass-border)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.backgroundColor = 'rgba(74, 139, 92, 0.1)';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
