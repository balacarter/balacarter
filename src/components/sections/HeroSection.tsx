import HeroImage from '../HeroImage';

interface HeroSectionProps {
  isSidebarVisible: boolean;
}

export default function HeroSection({ isSidebarVisible }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Geometric Shape */}
      <HeroImage />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Column */}
          <div className="flex flex-col justify-center space-y-8 col-span-2 max-w-sm md:max-w-lg lg:max-w-3xl">
            {/* Name and Title - Above Hero Text (Hidden on Desktop) */}
            {!isSidebarVisible && (
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">
                  <span className="inline-block px-2 py-1" style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--background)' }}>BALA CARTER</span>
                </h2>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span style={{ color: 'var(--accent-primary)' }}>SOFTWARE ENGINEER</span>{' '}
              WITH A PASSION FOR{' '}
              <span style={{ color: 'var(--accent-primary)' }}>INNOVATIVE</span> AND HUMAN FRIENDLY{' '}
              <span style={{ color: 'var(--accent-primary)' }}>INTERFACES</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
