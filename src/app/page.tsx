import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            Bala Carter
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Software Engineer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Frontend specialist transitioning to full-stack development. 
            Building modern web experiences with React, TypeScript, and Node.js.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6">
        {/* About Section */}
        <section id="about" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-lg leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
              dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
            <p className="text-lg leading-relaxed">
              Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et 
              accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
              deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Interested in working together? Feel free to reach out for opportunities, 
              collaborations, or just to say hello.
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
