import type { Metadata } from "next";

const baseUrl = "https://bia-traduction-r8gl.vercel.app";

export const seoMetadata: Record<string, Metadata> = {
  fr: {
    title: "Bureau de Traduction – Ouaguenoun – Maître Bia",
    description:
      "Spécialiste de la traduction de documents juridiques, académiques, administratifs et professionnels. Disponible en Arabe, Français et Anglais.",
    keywords: [
      "bureau de traduction",
      "traduction officielle",
      "traduction juridique",
      "traduction académique",
      "traduction professionnelle",
      "Kabylie",
      "Ouaguenoun",
      "français",
      "arabe",
      "anglais",
    ],
    openGraph: {
      title: "Bureau de Traduction – Maître Bia",
      description:
        "Traductions précises et professionnelles en Arabe, Français et Anglais.",
      url: `${baseUrl}/fr`,
      siteName: "Bureau de Traduction",
      images: [
        {
          url: `${baseUrl}/og-image-fr.jpg`,
          width: 1200,
          height: 630,
          alt: "Bureau de Traduction – Maître Bia",
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/fr`,
      languages: {
        fr: `${baseUrl}/fr`,
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
      },
    },
  },

  ar: {
    title: "مكتب الترجمة – واقنون – الأستاذ بيا",
    description:
      "متخصصون في ترجمة الوثائق القانونية والأكاديمية والإدارية والمهنية. نقدم ترجمات دقيقة باللغات العربية والفرنسية والإنجليزية.",
    keywords: [
      "مكتب ترجمة",
      "ترجمة رسمية",
      "ترجمة قانونية",
      "ترجمة أكاديمية",
      "ترجمة مهنية",
      "القبائل",
      "واقنون",
      "الفرنسية",
      "العربية",
      "الإنجليزية",
    ],
    openGraph: {
      title: "مكتب الترجمة – الأستاذ بيا",
      description: "ترجمات دقيقة واحترافية باللغات العربية والفرنسية والإنجليزية.",
      url: `${baseUrl}/ar`,
      siteName: "مكتب الترجمة",
      images: [
        {
          url: `${baseUrl}/og-image-ar.jpg`,
          width: 1200,
          height: 630,
          alt: "مكتب الترجمة – الأستاذ بيا",
        },
      ],
      locale: "ar_DZ",
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/ar`,
      languages: {
        fr: `${baseUrl}/fr`,
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
      },
    },
  },

  en: {
    title: "Translation Office – Ouaguenoun – Maître Bia",
    description:
      "Specialized in translating legal, academic, administrative, and professional documents. Accurate translations in Arabic, French, and English.",
    keywords: [
      "translation office",
      "official translation",
      "legal translation",
      "academic translation",
      "professional translation",
      "Kabylie",
      "Ouaguenoun",
      "French",
      "Arabic",
      "English",
    ],
    openGraph: {
      title: "Translation Office – Maître Bia",
      description: "Accurate and professional translations in Arabic, French, and English.",
      url: `${baseUrl}/en`,
      siteName: "Translation Office",
      images: [
        {
          url: `${baseUrl}/og-image-en.jpg`,
          width: 1200,
          height: 630,
          alt: "Translation Office – Maître Bia",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/en`,
      languages: {
        fr: `${baseUrl}/fr`,
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
      },
    },
  },
};
