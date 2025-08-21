import { Scale, GraduationCap, Briefcase, FileText, Globe } from "lucide-react";

export const gridItems = [
  {
    id: 1,
    // title: "De l’arabe au français, de l’académique au juridique, nous traduisons tout.",
    title: {
       fr: "De l’arabe au français, de l’académique au juridique, nous traduisons tout.",
      en: "From Arabic to French, from academic to legal, we translate everything.",
      ar: "من العربية إلى الفرنسية، ومن الأكاديمية إلى القانونية، نترجم كل شيء."
    
    },
    description: {
      fr: "",
      en: "",
      ar: ""
    },
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full brightness-75",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: {
      fr: "Vos documents, compris partout dans le monde",
      en: "Your documents, understood worldwide",
      ar: "مستنداتكم مفهومة في جميع أنحاء العالم"
    },
    description: {
      fr: "",
      en: "",
      ar: ""
    },
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
     title: {
      fr: "Vos documents",
      en: "Your Documents",
      ar: "مستنداتكم"
    },
    description: {
      fr: "Dans chaque langue et pour chaque domaine.",
      en: "In every language and for every field.",
      ar: "بكل لغة وفي كل مجال."
    },  
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: {
      fr: "Relier les langues et les documents, avec clarté et précision.",
      en: "Connecting languages and documents with clarity and precision.",
      ar: "نربط بين اللغات والمستندات بوضوح ودقة."
    },
    description: {
      fr: "",
      en: "",
      ar: ""
    },
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: {
      fr: "Parce que chaque mot compte, dans toutes les langues et tous les domaines.",
      en: "Because every word matters, in every language and every field.",
      ar: "لأن كل كلمة مهمة، في جميع اللغات وجميع المجالات."
    },
    description: {
      fr: "",
      en: "",
      ar: ""
    },
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b6.jpeg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: {
      fr: "Contactez-nous",
      en: "Contact us",
      ar: "اتصلوا بنا"
    },
    description: {
      fr: "",
      en: "",
      ar: ""
    },
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "/grid.svg",
    spareImg: "",
  },
];

export const leftLists = [
  {
    fr: "Arabe",
    en: "Arabic",
    ar: "العربية"
  },
  {
    fr: "Anglais",
    en: "English",
    ar: "الإنجليزية"
  },
  {
    fr: "Français",
    en: "French",
    ar: "الفرنسية"
  }
];

export const rightLists = [
  {
    fr: "Administratif",
    en: "Administrative",
    ar: "إداري"
  },
  {
    fr: "Académiques",
    en: "Academic",
    ar: "أكاديمي"
  },
  {
    fr: "Juridiques",
    en: "Legal",
    ar: "قانوني"
  }
];

export const services = [
  { 
    id: 1, 
    title: {
      fr: "Traduction Juridique",
      en: "Legal Translation",
      ar: "الترجمة القانونية"
    }, 
    icon: Scale, 
    desc: {
      fr: "Traduction précise et fidèle de contrats, jugements, lois, actes notariés et autres documents légaux, en respectant la terminologie juridique.",
      en: "Accurate and faithful translation of contracts, judgments, laws, notarial acts, and other legal documents, respecting legal terminology.",
      ar: "ترجمة دقيقة وموثوقة للعقود والأحكام والقوانين والمستندات الموثقة وغيرها من الوثائق القانونية، مع احترام المصطلحات القانونية."
    } 
  },
  { 
    id: 2, 
    title: {
      fr: "Traduction Académique",
      en: "Academic Translation",
      ar: "الترجمة الأكاديمية"
    }, 
    icon: GraduationCap, 
    desc: {
      fr: "Traduction rigoureuse de mémoires, thèses, articles scientifiques et supports pédagogiques, adaptée aux exigences académiques et universitaires.",
      en: "Rigorous translation of dissertations, theses, scientific articles, and educational materials, tailored to academic and university standards.",
      ar: "ترجمة دقيقة للأطروحات والرسائل الجامعية والمقالات العلمية والمواد التعليمية، بما يتوافق مع المعايير الأكاديمية والجامعية."
    } 
  },
  { 
    id: 3, 
    title: {
      fr: "Traduction Professionnelle",
      en: "Professional Translation",
      ar: "الترجمة المهنية"
    }, 
    icon: Briefcase, 
    desc: {
      fr: "Traduction de rapports d’entreprise, manuels techniques, présentations et correspondances professionnelles, avec un vocabulaire clair et adapté au contexte.",
      en: "Translation of business reports, technical manuals, presentations, and professional correspondence, with clear and context-appropriate vocabulary.",
      ar: "ترجمة تقارير الشركات والدلائل التقنية والعروض التقديمية والمراسلات المهنية، باستخدام مصطلحات واضحة ومناسبة للسياق."
    } 
  },
  { 
    id: 4, 
    title: {
      fr: "Traduction Administrative",
      en: "Administrative Translation",
      ar: "الترجمة الإدارية"
    }, 
    icon: FileText, 
    desc: {
      fr: "Traduction certifiée de certificats, attestations, formulaires et dossiers officiels destinés aux administrations et organismes publics ou privés.",
      en: "Certified translation of certificates, attestations, forms, and official files intended for public or private administrations and organizations.",
      ar: "ترجمة معتمدة للشهادات والإفادات والنماذج والملفات الرسمية الموجهة للإدارات والهيئات العامة أو الخاصة."
    } 
  },
  { 
    id: 5, 
    title: {
      fr: "Autres",
      en: "Others",
      ar: "أخرى"
    }, 
    icon: Globe, 
    desc: {
      fr: "Traduction sur mesure de tout type de document, selon vos besoins spécifiques, qu’il soit personnel, professionnel ou institutionnel.",
      en: "Tailor-made translation of any type of document, according to your specific needs, whether personal, professional, or institutional.",
      ar: "ترجمة مخصصة لأي نوع من المستندات، وفقًا لاحتياجاتكم الخاصة، سواء كانت شخصية أو مهنية أو مؤسساتية."
    } 
  }
];

// export const aboutData = [
//   {
//     id: 1,
//     title: {
//       fr: "Expérience & Fiabilité",
//       en: "Experience & Reliability",
//       ar: "الخبرة والموثوقية"
//     },
//     desc: {
//       fr: "Plusieurs années d’expérience dans la traduction professionnelle, garantissant un service de haute qualité.",
//       en: "Many years of experience in professional translation, ensuring high-quality service.",
//       ar: "سنوات عديدة من الخبرة في الترجمة الاحترافية، مما يضمن خدمة عالية الجودة."
//     },
//     thumbnail: "/icons/experience.png"
//   },
//   {
//     id: 2,
//     title: {
//       fr: "Langues Maîtrisées",
//       en: "Mastered Languages",
//       ar: "إتقان اللغات"
//     },
//     desc: {
//       fr: "Traduction experte entre l’Arabe, le Français et l’Anglais, avec une parfaite maîtrise culturelle et linguistique.",
//       en: "Expert translation between Arabic, French, and English, with perfect cultural and linguistic mastery.",
//       ar: "ترجمة متخصصة بين العربية والفرنسية والإنجليزية، مع إتقان كامل ثقافياً ولغوياً."
//     },
//     thumbnail: "/icons/languages.png"
//   },
//   {
//     id: 3,
//     title: {
//       fr: "Domaines de Spécialité",
//       en: "Fields of Expertise",
//       ar: "مجالات التخصص"
//     },
//     desc: {
//       fr: "Expertise dans la traduction de documents juridiques, académiques, professionnels et administratifs.",
//       en: "Expertise in translating legal, academic, professional, and administrative documents.",
//       ar: "خبرة في ترجمة الوثائق القانونية والأكاديمية والمهنية والإدارية."
//     },
//     thumbnail: "/icons/expertise.png"
//   },
//   {
//     id: 4,
//     title: {
//       fr: "Engagement Qualité",
//       en: "Quality Commitment",
//       ar: "الالتزام بالجودة"
//     },
//     desc: {
//       fr: "Chaque document est traité avec rigueur, confidentialité et respect des délais.",
//       en: "Every document is handled with rigor, confidentiality, and respect for deadlines.",
//       ar: "يتم التعامل مع كل وثيقة بدقة وسرية واحترام للمواعيد النهائية."
//     },
//     thumbnail: "/icons/quality.png"
//   }
// ];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];


// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];
