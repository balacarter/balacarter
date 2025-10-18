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
    <div 
      className="group relative overflow-hidden rounded-xl backdrop-blur-md border p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{ 
        backgroundColor: 'var(--glass-bg)', 
        borderColor: 'var(--glass-border)'
      }}
    >
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to bottom right, rgba(251, 191, 36, 0.1), rgba(74, 139, 92, 0.1))' }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-4xl">
            {icon}
          </div>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground transition-colors">
            {title}
          </h3>
          {level && (
            <span 
              className="text-xs font-semibold px-3 py-1 rounded-full border"
              style={{ 
                backgroundColor: 'rgba(251, 191, 36, 0.1)', 
                color: 'var(--accent-primary)',
                borderColor: 'rgba(251, 191, 36, 0.3)'
              }}
            >
              {level}
            </span>
          )}
        </div>
        
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {description}
        </p>
      </div>
      
      {/* Decorative corner accent */}
      <div 
        className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to bottom right, rgba(251, 191, 36, 0.2), transparent)' }}
      ></div>
    </div>
  );
}
