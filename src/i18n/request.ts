import { getUserLocale } from "../translation/services/locale";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // const requested = await requestLocale; // ✅ Attendre que la promesse soit résolue
  // console.log("🚀 Request Locale:", requested);
  
  // const locale = hasLocale(routing.locales, requested)
  // ? requested
  // : routing.defaultLocale;
  const locale = await getUserLocale();
  console.log("🚀 Request Locale:", locale);

  return {
    locale,
    messages: (await import(`../translation/messages/${locale}.json`)).default, // ✅ Charger les messages correctement
  };
});
