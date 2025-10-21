import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="mb-8">
        <p className="text-lg mb-4" style={{ color: 'var(--text-muted)', opacity: 0.9 }}>
          Interested in working together? Feel free to reach out for
          opportunities, collaborations, or just to say hello.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
