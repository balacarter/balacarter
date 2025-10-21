'use client';

import { useState, useCallback } from 'react';

/**
 * Custom hook for managing hover color states
 * Eliminates repeated onMouseEnter/onMouseLeave handlers
 * 
 * @param defaultColor - Color when not hovering
 * @param hoverColor - Color when hovering
 * 
 * @example
 * const { color, handleMouseEnter, handleMouseLeave } = useHoverColor(
 *   'var(--text-muted)',
 *   'var(--accent-primary)'
 * );
 * 
 * <a 
 *   style={{ color }}
 *   onMouseEnter={handleMouseEnter}
 *   onMouseLeave={handleMouseLeave}
 * >
 *   Link
 * </a>
 */
export function useHoverColor(defaultColor: string, hoverColor: string) {
  const [color, setColor] = useState(defaultColor);

  const handleMouseEnter = useCallback(() => {
    setColor(hoverColor);
  }, [hoverColor]);

  const handleMouseLeave = useCallback(() => {
    setColor(defaultColor);
  }, [defaultColor]);

  return {
    color,
    handleMouseEnter,
    handleMouseLeave,
  };
}
