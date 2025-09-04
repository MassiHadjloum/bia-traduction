export const getLocalBusinessSchema = (locale: string) => {
  const baseUrl = "https://www.biatraduction.com";
  
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": locale === "fr" ? "Bureau Traduction Officielle Ouaguenoun" : 
            locale === "ar" ? "مكتب الترجمة الرسمية واقنون" : 
            "Official Translation Office Ouaguenoun",
    "alternateName": "Maître Bia Traduction",
    "description": locale === "fr" ? 
      "Bureau agréé de traduction officielle et certifiée à Ouaguenoun, spécialisé dans les documents juridiques, académiques et administratifs." :
      locale === "ar" ?
      "مكتب معتمد للترجمة الرسمية والمصدقة في واقنون، متخصص في الوثائق القانونية والأكاديمية والإدارية." :
      "Licensed office for official and certified translation in Ouaguenoun, specialized in legal, academic and administrative documents.",
    "url": `${baseUrl}/${locale}`,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Centre ville Ouaguenoun",
      "addressLocality": "Ouaguenoun", 
      "addressRegion": "Tizi Ouzou",
      "addressCountry": "DZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.7538",
      "longitude": "4.0588"
    },
    "telephone": "+213553913821",
    "email": "contact@biatraduction.com",
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 08:00-12:00"
    ],
    "serviceType": "Translation Services",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Kabylia"
      },
      {
        "@type": "Place", 
        "name": "Tizi Ouzou"
      },
      {
        "@type": "Place",
        "name": "Algeria"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Translation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === "fr" ? "Traduction Juridique Certifiée" : 
                    locale === "ar" ? "ترجمة قانونية مصدقة" : 
                    "Certified Legal Translation",
            "description": locale === "fr" ?
              "Traduction officielle et certification de tous documents juridiques" :
              locale === "ar" ?
              "ترجمة رسمية وتصديق جميع الوثائق القانونية" :
              "Official translation and certification of all legal documents"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": locale === "fr" ? "Traduction Académique" :
                    locale === "ar" ? "ترجمة أكاديمية" :
                    "Academic Translation",
            "description": locale === "fr" ?
              "Traduction de diplômes, relevés de notes et documents universitaires" :
              locale === "ar" ?
              "ترجمة الشهادات والكشوف والوثائق الجامعية" :
              "Translation of diplomas, transcripts and university documents"
          }
        }
      ]
    },
    "sameAs": [
      // "https://facebook.com/votre-page",
      // "https://linkedin.com/company/votre-entreprise"
    ]
  };
};