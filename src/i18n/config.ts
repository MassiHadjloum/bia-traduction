import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "fr", "ar"] as const;
export const defaultLocale = "fr";
export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  // "/pathnames": "/pathnames",
};

export const localePrefix: LocalePrefix<Locales> = "always";
