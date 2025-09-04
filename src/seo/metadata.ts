import type { Metadata } from "next";

const baseUrl = "https://www.biatraduction.com";

export const seoMetadata: Record<string, Metadata> = {
  fr: {
    title: "Traduction Officielle Certifiée Ouaguenoun | Maître Bia - Documents Juridiques & Académiques",
    icons: {
      icon: "/logo.ico",
      // apple: "/apple-touch-icon.png",
    },
    description:
      "Bureau de traduction officielle agréé à Ouaguenoun, Kabylie. Traduction certifiée de documents juridiques, académiques, administratifs et professionnels. Service rapide et confidentiel en Arabe, Français et Anglais. Devis en ligne.",
    keywords: [
      "traduction officielle Ouaguenoun",
      "bureau traduction certifiée Kabylie",
      "traduction assermentée documents",
      "traducteur agréé Tizi Ouzou",
      "traduction juridique certifiée",
      "traduction diplômes universitaires",
      "traduction actes état civil",
      "traduction contrats commerciaux",
      "service traduction rapide",
      "traducteur français arabe anglais",
      "certification traduction légale",
      "bureau traduction Algérie",
      "maître Bia traducteur",
    ],
    authors: [{ name: "Maître Bia" }],
    creator: "Office de Traduction Officiel Ouaguenoun",
    publisher: "Maître Bia",
    category: "Services de traduction",
    classification: "Traduction officielle et certifiée",
    openGraph: {
      title: "Traduction Officielle Certifiée Ouaguenoun | Maître Bia",
      description:
        "Bureau agréé de traduction officielle à Ouaguenoun. Certification légale de tous vos documents en 24h. Français, Arabe, Anglais. Devis gratuit.",
      url: `${baseUrl}/fr`,
      siteName: "Bureau Traduction Officielle Ouaguenoun",
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: "Bureau de traduction officielle Ouaguenoun - Maître Bia - Services certifiés",
        },
        {
          url: `${baseUrl}/logo.png`,
          width: 400,
          height: 400,
          alt: "Logo Office Traduction Ouaguenoun",
        },
      ],
      locale: "fr_FR",
      type: "website",
      countryName: "Algeria",
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "Traduction Officielle Ouaguenoun | Certification 24h",
    //   description: "Bureau agréé traduction certifiée. Documents juridiques, diplômes, actes. Service rapide et confidentiel.",
    //   images: [`${baseUrl}/images/twitter-traduction-ouaguenoun.jpg`],
    // },
    alternates: {
      canonical: `${baseUrl}/fr`,
      languages: {
        "fr": `${baseUrl}/fr`,
        "ar": `${baseUrl}/ar`, 
        "en": `${baseUrl}/en`,
        "fr-DZ": `${baseUrl}/fr`,
        "ar-DZ": `${baseUrl}/ar`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },

  ar: {
    title: "ديوان الترجمة الرسمية المعتمدة واقنون | الأستاذ بية - الوثائق القانونية والأكاديمية",
    icons: {
      icon: "/logo.ico",
      // apple: "/apple-touch-icon.png",
    },
    description:
      "مكتب الترجمة الرسمية المعتمد في واقنون، القبائل. ترجمة مصدقة للوثائق القانونية والأكاديمية والإدارية والمهنية. خدمة سريعة وسرية باللغات العربية والفرنسية والإنجليزية. تسعيرة مجانية عبر الإنترنت.",
    keywords: [
      "ترجمة رسمية واقنون",
      "مكتب ترجمة معتمدة القبائل",
      "ترجمة مصدقة وثائق",
      "مترجم معتمد تيزي وزو",
      "ترجمة قانونية مصدقة",
      "ترجمة شهادات جامعية",
      "ترجمة وثائق الحالة المدنية",
      "ترجمة عقود تجارية",
      "خدمة ترجمة سريعة",
      "مترجم فرنسي عربي إنجليزي",
      "تصديق ترجمة قانونية",
      "مكتب ترجمة الجزائر",
      "الأستاذ بية مترجم",
    ],
    authors: [{ name: "الأستاذ بية" }],
    creator: "ديوان الترجمة الرسمية واقنون",
    publisher: "الأستاذ بية",
    category: "خدمات الترجمة",
    classification: "ترجمة رسمية ومعتمدة",
    openGraph: {
      title: "ديوان الترجمة الرسمية المعتمدة واقنون | الأستاذ بية",
      description: "مكتب معتمد للترجمة الرسمية في واقنون. تصديق قانوني لجميع وثائقك في 24 ساعة. عربية، فرنسية، إنجليزية.",
      url: `${baseUrl}/ar`,
      siteName: "مكتب الترجمة الرسمية واقنون",
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: "مكتب الترجمة الرسمية واقنون - الأستاذ بية - خدمات معتمدة",
        },
      ],
      locale: "ar_DZ",
      type: "website",
      countryName: "Algeria",
    },
    twitter: {
      card: "summary_large_image",
      title: "الترجمة الرسمية واقنون | تصديق 24 ساعة",
      description: "مكتب معتمد ترجمة مصدقة. وثائق قانونية، شهادات، عقود. خدمة سريعة وسرية.",
      images: [`${baseUrl}/logo`],
    },
    alternates: {
      canonical: `${baseUrl}/ar`,
      languages: {
        "fr": `${baseUrl}/fr`,
        "ar": `${baseUrl}/ar`,
        "en": `${baseUrl}/en`,
        "fr-DZ": `${baseUrl}/fr`,
        "ar-DZ": `${baseUrl}/ar`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },

  en: {
    title: "Certified Official Translation Services Ouaguenoun | Master Bia - Legal & Academic Documents",
    icons: {
      icon: "/logo.ico",
      // apple: "/apple-touch-icon.png",
    },
    description:
      "Licensed official translation office in Ouaguenoun, Kabylia. Certified translation of legal, academic, administrative and professional documents. Fast and confidential service in Arabic, French and English. Free online quote.",
    keywords: [
      "official translation Ouaguenoun",
      "certified translation office Kabylia",
      "sworn translation documents",
      "licensed translator Tizi Ouzou",
      "certified legal translation",
      "university diploma translation",
      "civil status documents translation",
      "commercial contracts translation",
      "fast translation service",
      "French Arabic English translator",
      "legal translation certification",
      "translation office Algeria",
      "Master Bia translator",
    ],
    authors: [{ name: "Master Bia" }],
    creator: "Official Translation Office Ouaguenoun",
    publisher: "Master Bia",
    category: "Translation Services",
    classification: "Official and certified translation",
    openGraph: {
      title: "Certified Official Translation Ouaguenoun | Master Bia",
      description: "Licensed official translation office in Ouaguenoun. Legal certification of all your documents in 24h. French, Arabic, English.",
      url: `${baseUrl}/en`,
      siteName: "Official Translation Office Ouaguenoun",
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: "Official translation office Ouaguenoun - Master Bia - Certified services",
        },
      ],
      locale: "en_US",
      type: "website",
      countryName: "Algeria",
    },
    twitter: {
      card: "summary_large_image",
      title: "Official Translation Ouaguenoun | 24h Certification",
      description: "Licensed certified translation office. Legal documents, diplomas, contracts. Fast and confidential service.",
      images: [`${baseUrl}/logo.png`],
    },
    alternates: {
      canonical: `${baseUrl}/en`,
      languages: {
        "fr": `${baseUrl}/fr`,
        "ar": `${baseUrl}/ar`,
        "en": `${baseUrl}/en`,
        "fr-DZ": `${baseUrl}/fr`,
        "ar-DZ": `${baseUrl}/ar`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },
};