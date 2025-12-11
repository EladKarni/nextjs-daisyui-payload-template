export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Elad Karni',
    url: 'https://eladkarni.com',
    image: 'https://eladkarni.com/images/profilepic.jpg',
    sameAs: [
      'https://github.com/EladKarni',
      'https://www.linkedin.com/in/elad-karni-5138b548',
      'https://www.instagram.com/light1c3',
      'https://www.facebook.com/Light1c3'
    ],
    jobTitle: 'Software Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'EK Solutions'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pittsburgh',
      addressRegion: 'PA',
      addressCountry: 'US'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
