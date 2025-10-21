import ExperienceCard from '../ExperienceCard';

export default function ExperienceSection() {
  return (
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
  );
}
