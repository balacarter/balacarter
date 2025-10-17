'use client';

import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  level?: string;
}

export default function SkillCard({ title, description, icon, level }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 dark:bg-gray-800/30 border border-gray-200/20 dark:border-gray-700/30 p-6 transition-all duration-300 hover:scale-105 hover:bg-white/20 dark:hover:bg-gray-800/40 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-4xl">
            {icon}
          </div>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          {level && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
              {level}
            </span>
          )}
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
