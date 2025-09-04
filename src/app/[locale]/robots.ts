// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.biatraduction.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/fr/",
          "/ar/", 
          "/en/",
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/private/",
          "*.pdf$", // Si vous ne voulez pas indexer les PDF
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0.5,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1,
      },
    ],
    sitemap: [
      "https://www.biatraduction.com/fr/sitemap.xml",
      "https://www.biatraduction.com/ar/sitemap.xml",
      "https://www.biatraduction.com/en/sitemap.xml",
    ],
    host: baseUrl,
  };
}
