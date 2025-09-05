import {defineRouting} from 'next-intl/routing';
import { localePrefix, locales, pathnames } from './config';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,
 
  // Used when no locale matches
  defaultLocale: 'fr',
  localePrefix: localePrefix,
  pathnames: pathnames
});