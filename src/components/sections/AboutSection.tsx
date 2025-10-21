import GlassCard from '../GlassCard';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20">
      <GlassCard className="p-8">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Originally from South Africa, I am a dedicated{' '}
            <span className="font-bold">Software Engineer</span> based
            in Los Angeles with a lifelong passion for programming stemming from modding video games and building websites as a child.
            After earning my{' '}
            <span className="font-bold">B.S. in Computer Science from CSULA</span>,
            I have specialized in crafting elegant, intuitive web experiences
            using modern technologies, primarily{' '}
            <span className="font-bold">
              React/Preact and TypeScript
            </span>
            .
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Over the last <span className="font-bold">three years</span>
            , I&apos;ve played a central role in developing and scaling
            innovative frontend solutions, including{' '}
            <span className="font-bold">
              large-scale e-commerce implementations
            </span>{' '}
            and building a{' '}
            <span className="font-bold">
              brand new framework for delivering our frontend products to partners
            </span>
            . My work has allowed me to play key roles in the full lifecycle of major projects,
            from building new features to executing extensive
            refactors and performance improvements on core application
            pieces. My commitment remains focused on{' '}
            <span className="font-bold">innovation</span> and building{' '}
            <span className="font-bold">
              high-quality, high-performing, and truly accessible experiences
            </span>{' '}
            that delight users everywhere.
          </p>
        </div>
      </GlassCard>
    </section>
  );
}
