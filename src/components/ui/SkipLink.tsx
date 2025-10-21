'use client';

/**
 * Skip to main content link for keyboard accessibility
 * Allows keyboard users to bypass navigation and jump to main content
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:font-medium focus:transition-all"
      style={{
        backgroundColor: 'var(--accent-primary)',
        color: 'var(--background)',
      }}
    >
      Skip to main content
    </a>
  );
}
