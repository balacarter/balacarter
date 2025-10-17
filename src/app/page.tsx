import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Terminal from '@/components/Terminal';
import SkillCard from '@/components/SkillCard';
import ExperienceCard from '@/components/ExperienceCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
              Bala Carter
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
              Software Engineer
            </p>
          </div>

          {/* Interactive Terminal */}
          <Terminal />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6">
        {/* About Section */}
        <section id="about" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Originally from South Africa, I am a dedicated{' '}
              <span className="font-bold">Frontend Software Engineer</span>{' '}
              based in Los Angeles with a deep, lifelong passion for programming
              that first ignited in childhood through game modding and website
              development. Equipped with a{' '}
              <span className="font-bold">B.S. in Computer Science</span>, I
              specialize in crafting elegant, intuitive web experiences using
              modern technologies, primarily{' '}
              <span className="font-bold">React/Preact and TypeScript</span>.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Over the last <span className="font-bold">three years</span>,
              I&apos;ve played a central role in developing and scaling
              innovative frontend solutions, including{' '}
              <span className="font-bold">
                large-scale e-commerce implementations
              </span>{' '}
              and the creation of{' '}
              <span className="font-bold">
                customizable component frameworks
              </span>
              . My work encompasses the full lifecycle of major projects, from
              building innovative new features to executing extensive refactors
              and performance improvements on core application pieces. My
              commitment remains focused on{' '}
              <span className="font-bold">innovation</span> and building{' '}
              <span className="font-bold">
                high-quality, high-performing, and truly accessible interfaces
              </span>{' '}
              that delight users everywhere.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              title="React & Preact"
              description="Expert in building scalable, performant web applications with React and Preact. Specialized in component architecture and state management."
              icon="⚛️"
              level="Expert"
            />

            <SkillCard
              title="TypeScript"
              description="Strong typing and modern JavaScript development. Building type-safe applications with excellent developer experience."
              icon="📘"
              level="Expert"
            />

            <SkillCard
              title="Frontend Architecture"
              description="Designing and implementing scalable frontend solutions, component frameworks, and design systems for large applications."
              icon="🏗️"
              level="Advanced"
            />

            <SkillCard
              title="Accessibility"
              description="Committed to building inclusive, accessible interfaces that work for everyone, following WCAG guidelines."
              icon="♿"
              level="Proficient"
            />

            <SkillCard
              title="CSS & Styled Components"
              description="Modern CSS practices, responsive design, and CSS-in-JS solutions like Styled Components for beautiful interfaces."
              icon="🎨"
              level="Expert"
            />

            <SkillCard
              title="Node.js & APIs"
              description="Backend development with Node.js, RESTful API design, and full-stack integration capabilities."
              icon="🔧"
              level="Proficient"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          <div className="space-y-8">
            <ExperienceCard
              company="Cover Genius"
              location="Remote"
              title="Software Engineer"
              period="March 2022 – Present"
              achievements={[
                'Architected and deployed a new, high-performance system for building and shipping customizable embedded insurance UI to partners, significantly improving maintainability, product desirability, and developer experience.',
                'Drove E-commerce Revenue by developing third-party solutions for embedded insurance sales, requiring close collaboration with backend teams to integrate new features.',
                'Enhanced Frontend Architecture through strategic refactoring of core logic (e.g., migrating styling to CSS Modules) and implementing performance optimizations (e.g., code chunking, network request optimization).',
                'Fostered team knowledge by developing internal sandboxes for testing and leading educational workshops on the new product architecture.',
              ]}
              skills={[
                'React',
                'Preact',
                'TypeScript',
                'CSS Modules',
                'System Architecture',
              ]}
            />

            <ExperienceCard
              company="Mercury Insurance"
              location="California"
              title="Frontend Developer"
              period="March 2021 – March 2022"
              achievements={[
                "Integrated user data tracking for comprehensive analytics within Mercury's main insurance writing application using a custom framework.",
                'Developed and deployed targeted user engagement tools (polls and guides) using Pendo, JavaScript, HTML, and SCSS to enhance user experience and data collection.',
                'Created a custom Google Tag Manager framework with JavaScript to meet complex user data implementation requirements.',
                'Styled backend templates to align with UI mockups and implemented logic to handle desired application flows and features.',
              ]}
              skills={[
                'JavaScript',
                'HTML/SCSS',
                'Pendo',
                'Google Tag Manager',
              ]}
            />

            <ExperienceCard
              company="ACTnow Foundation"
              location="California"
              title="Software Engineer Intern"
              period="July 2020 – September 2020"
              achievements={[
                'Improved User Experience by updating the existing desktop site to be mobile-first and fully responsive across all screen sizes.',
                "Developed the client's free test kit questionnaire using React and TypeScript to create reactive forms and ensure data integrity.",
                'Integrated PayPal APIs and utilized TypeScript for robust error checking on input fields to facilitate client transactions.',
              ]}
              skills={[
                'React',
                'TypeScript',
                'Responsive Design',
                'Mobile-First',
                'PayPal API',
                'Form Development',
              ]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Interested in working together? Feel free to reach out for
              opportunities, collaborations, or just to say hello.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2025 Bala Carter. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
