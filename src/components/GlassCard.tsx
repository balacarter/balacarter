import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export default function GlassCard({ children, className = '', as: Component = 'div' }: GlassCardProps) {
  return (
    <Component 
      className={`backdrop-blur-md border rounded-lg ${className}`}
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.03)', // Less opaque
        borderColor: 'rgba(255, 255, 255, 0.1)' 
      }}
    >
      {children}
    </Component>
  );
}
