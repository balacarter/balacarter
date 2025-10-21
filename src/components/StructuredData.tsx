export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bala Carter",
    "url": "https://balacarter.com",
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "React",
      "TypeScript",
      "JavaScript",
      "Preact",
      "Web Development",
      "Frontend Development",
      "Accessibility",
      "Node.js"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "California State University Los Angeles"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bala Carter Portfolio",
    "url": "https://balacarter.com",
    "description": "Software Engineer specializing in React, TypeScript, and accessible web development",
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
