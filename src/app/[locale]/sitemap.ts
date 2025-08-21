import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bia-traduction-r8gl.vercel.app";
  return [
    { url: `${base}/fr`, lastModified: new Date() },
    { url: `${base}/ar`, lastModified: new Date() },
    { url: `${base}/en`, lastModified: new Date() },
  ];
}
