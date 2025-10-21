/**
 * Structured Data (JSON-LD) for SEO
 * Provides rich snippets for search engines
 */

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bala Carter",
    "jobTitle": "Software Engineer",
    "description": "Software Engineer specializing in React, TypeScript, and accessible web development",
    "url": "https://balacarter.com",
    "sameAs": [
      "https://linkedin.com/in/balacarter",
      "https://github.com/balacarter"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "React",
      "Preact", 
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Frontend Engineering",
      "Accessibility",
      "CSS",
      "Node.js"
    ],
    "alumniOf": {
      "@type": "California State University Los Angeles",
      "name": "Computer Science Degree"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bala Carter Portfolio",
    "url": "https://balacarter.com",
    "description": "Personal portfolio showcasing software engineering projects and experience",
    "author": {
      "@type": "Person",
      "name": "Bala Carter"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
