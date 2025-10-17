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
    <div className="group relative rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:backdrop-blur-md hover:bg-white/10 dark:hover:bg-gray-800/30 hover:shadow-xl hover:shadow-cyan-500/10">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        {/* Header - Company and Period */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="min-w-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {company}
            </h3>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {title}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {location}
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
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
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2"></span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
              className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300/50 dark:border-gray-600/50 hover:border-cyan-500/50 hover:from-cyan-500/10 hover:to-purple-500/10 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
