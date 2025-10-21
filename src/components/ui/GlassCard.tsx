import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

/**
 * Reusable glass morphism card component
 * Eliminates repeated inline styles throughout the app
 */
export default function GlassCard({ 
  children, 
  className = '', 
  as: Component = 'div' 
}: GlassCardProps) {
  return (
    <Component
      className={`backdrop-blur-md border rounded-lg ${className}`}
      style={{
        backgroundColor: 'var(--glass-bg)',
        borderColor: 'var(--glass-border)',
      }}
    >
      {children}
    </Component>
  );
}
