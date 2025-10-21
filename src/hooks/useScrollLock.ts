'use client';

import { useEffect } from 'react';

/**
 * Custom hook to lock/unlock body scroll
 * Useful for modals, sidebars, and overlays
 * 
 * @param isLocked - Whether scroll should be locked
 * 
 * @example
 * useScrollLock(isSidebarOpen && isMobile);
 */
export function useScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (isLocked) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Lock scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        // Restore scroll
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isLocked]);
}
